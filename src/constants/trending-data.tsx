export interface Trending {
  title: string;
  quality: string;
  genre: string;
  rating: string | number;
  image: string;
  type: "movies" | "series" | "lives" | "sports";
  popularity?: number;
  date?: Date | number;
  id?: number | string;
  overview?: string;
  backdrop?: string;
}

/**
 * Static fallback catalogue for the /popular page (used only if the live TMDB
 * fetch fails) and the home "Films & series" section.
 *
 * NOTE: These entries are deliberately GENERIC content categories — no
 * specific copyrighted film/series titles, no self-hosted poster artwork, and
 * no third-party broadcaster/channel logos. The previous version referenced
 * copyrighted posters (Blade Runner 2049, Peaky Blinders, Better Call Saul,
 * Arcane, …) and broadcaster logos (beIN Sports, BBC, HBO Max, Disney+, …) that
 * were removed for copyright/trademark compliance. Do not reintroduce specific
 * titles or brand logos here without documented licensing.
 */
export const trendingNow: Trending[] = [
  { title: "Actie & avontuur", quality: "4K", genre: "Films", rating: "4K", type: "movies", image: "" },
  { title: "Bekroonde drama's", quality: "4K", genre: "Films", rating: "4K", type: "movies", image: "" },
  { title: "Komedies", quality: "HD", genre: "Films", rating: "HD", type: "movies", image: "" },
  { title: "Sciencefiction & fantasy", quality: "4K", genre: "Series", rating: "4K", type: "series", image: "" },
  { title: "Politieseries", quality: "4K", genre: "Series", rating: "4K", type: "series", image: "" },
  { title: "Series om te bingewatchen", quality: "HD", genre: "Series", rating: "HD", type: "series", image: "" },
  { title: "Live sport", quality: "LIVE", genre: "Sport", rating: "Live", type: "lives", image: "" },
  { title: "24-uurs nieuws", quality: "HD", genre: "Nieuws", rating: "Live", type: "lives", image: "" },
  { title: "Kinderzenders", quality: "HD", genre: "Familie", rating: "Live", type: "lives", image: "" },
  { title: "Muziekzenders", quality: "HD", genre: "Muziek", rating: "Live", type: "lives", image: "" },
  { title: "Documentaires", quality: "4K", genre: "Ontdekking", rating: "Live", type: "lives", image: "" },
  { title: "Internationale zenders", quality: "HD", genre: "Internationaal", rating: "Live", type: "lives", image: "" },
];
