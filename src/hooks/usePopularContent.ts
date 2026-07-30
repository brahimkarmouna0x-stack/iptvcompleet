"use client";
import { useState, useEffect, useCallback } from "react";
import { type Trending, trendingNow } from "@/constants/trending-data";
import {
  type TMDBItem,
  TMDB_API_KEY,
  TMDB_BASE_URL,
  IMAGE_BASE_URL,
  FALLBACK_IMAGE,
} from "@/lib/tmdb";

/**
 * Popular-content discovery hook.
 *
 * Movie/series metadata comes from the TMDB API (attributed on the page — see
 * TMDB_ATTRIBUTION). This is an editorial "what's popular in cinema/TV"
 * discovery feature and does not assert that any specific title is distributed
 * by this service.
 *
 * NOTE: The previous version also fetched channel logos from iptv-org and live
 * event thumbnails from TheSportsDB and presented them as available live
 * channels/events. Those third-party feeds had no verified licensing and
 * implied carriage of specific channels/broadcasts, so they were removed. The
 * "live" tab now shows generic content categories only.
 */

const genreMap = new Map<number, string>();

const fetchGenres = async () => {
  if (genreMap.size > 0 || !TMDB_API_KEY) return;
  try {
    const [mG, sG] = await Promise.all([
      fetch(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=nl-NL`,
      ),
      fetch(
        `${TMDB_BASE_URL}/genre/tv/list?api_key=${TMDB_API_KEY}&language=nl-NL`,
      ),
    ]);

    const movieGenres = mG.ok ? await mG.json() : { genres: [] };
    const tvGenres = sG.ok ? await sG.json() : { genres: [] };

    const allGenres = [
      ...(movieGenres.genres || []),
      ...(tvGenres.genres || []),
    ];
    allGenres.forEach((g: { id: number; name: string }) => {
      if (g && g.id && g.name) genreMap.set(g.id, g.name);
    });
  } catch {
    // Genre fetch is non-critical — fall through
  }
};

const mapTMDBItem = (item: TMDBItem, type: "movies" | "series") => ({
  id: item.id,
  title: item.title || item.name || "Unbekannt",
  quality: "4K",
  genre:
    genreMap.get(item.genre_ids?.[0] ?? -1) ||
    (type === "movies" ? "Film" : "Serie"),
  rating: item.vote_average ?? 0,
  popularity: item.popularity,
  date: item.release_date || item.first_air_date
    ? new Date(item.release_date || item.first_air_date!).getTime()
    : 0,
  image: item.poster_path
    ? `${IMAGE_BASE_URL}${item.poster_path}`
    : FALLBACK_IMAGE,
  backdrop: item.backdrop_path
    ? `${IMAGE_BASE_URL.replace("w500", "original")}${item.backdrop_path}`
    : "",
  overview: item.overview,
  type,
});

// Generic, non-branded "live" categories for the Live tab (no third-party logos).
const STATIC_LIVE_CONTENT: Trending[] = trendingNow
  .filter((i) => i.type === "lives")
  .map((i) => ({ ...i, rating: 8.5, popularity: 50, date: Date.now() }));

export const usePopularContent = () => {
  const [trendingContent, setTrendingContent] = useState<Trending[]>([]);
  const [liveContent] = useState<Trending[]>(STATIC_LIVE_CONTENT);
  const [sportsContent] = useState<Trending[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [moviePage, setMoviePage] = useState(1);
  const [tvPage, setTvPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Initial Fetch
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        await fetchGenres();

        const [mRes, sRes] = await Promise.all([
          fetch(
            `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=nl-NL&sort_by=popularity.desc&page=1`,
            { signal: controller.signal },
          ),
          fetch(
            `${TMDB_BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&language=nl-NL&sort_by=popularity.desc&page=1`,
            { signal: controller.signal },
          ),
        ]);

        const movies = mRes.ok ? await mRes.json() : { results: [] };
        const series = sRes.ok ? await sRes.json() : { results: [] };

        const mappedMovies = (movies.results || []).map((item: TMDBItem) =>
          mapTMDBItem(item, "movies"),
        );
        const mappedSeries = (series.results || []).map((item: TMDBItem) =>
          mapTMDBItem(item, "series"),
        );

        setTrendingContent([...mappedMovies, ...mappedSeries] as Trending[]);
        setMoviePage(2);
        setTvPage(2);
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        )
          return;

        console.error("Initial fetch failed", error);
        // Fall back to static (generic, non-branded) trending data
        setTrendingContent(
          trendingNow
            .filter((i) => i.type !== "lives")
            .map((i) => ({
              ...i,
              rating: Number(i.rating) || 8.0,
              popularity: 50,
              date: Date.now(),
            })) as Trending[],
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    try {
      const [mRes, sRes] = await Promise.all([
        fetch(
          `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=nl-NL&sort_by=popularity.desc&page=${moviePage}`,
        ),
        fetch(
          `${TMDB_BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&language=nl-NL&sort_by=popularity.desc&page=${tvPage}`,
        ),
      ]);

      const movies = mRes.ok ? await mRes.json() : { results: [] };
      const series = sRes.ok ? await sRes.json() : { results: [] };

      if (
        (!movies.results || movies.results.length === 0) &&
        (!series.results || series.results.length === 0)
      ) {
        setHasMore(false);
        return;
      }

      const mappedMovies = (movies.results || []).map((item: TMDBItem) =>
        mapTMDBItem(item, "movies"),
      );
      const mappedSeries = (series.results || []).map((item: TMDBItem) =>
        mapTMDBItem(item, "series"),
      );

      setTrendingContent(
        (prev) =>
          [...prev, ...mappedMovies, ...mappedSeries] as Trending[],
      );
      setMoviePage((prev) => prev + 1);
      setTvPage((prev) => prev + 1);
    } catch (error) {
      console.error("Load more failed", error);
    } finally {
      setLoadingMore(false);
    }
  }, [moviePage, tvPage, loadingMore, hasMore]);

  return {
    trendingContent,
    liveContent,
    sportsContent,
    loading,
    loadingMore,
    loadMore,
    hasMore,
  };
};
