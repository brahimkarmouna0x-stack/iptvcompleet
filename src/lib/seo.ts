import type { Metadata } from "next";

// ─── Site configuration ────────────────────────────────────────────────────
export const SITE = {
  name: "IPTV Compleet",
  url: "https://iptvcompleet.store",
  locale: "nl_NL",
  localeAlt: "nl_NL",
  /** BCP-47 language tag for hreflang / content-language (Dutch, Netherlands). */
  hreflang: "nl-NL",
  /** HTML lang attribute value. */
  lang: "nl",
  description:
    "IPTV Compleet: het complete IPTV-abonnement in Nederland met 31.000+ zenders, films en series in 4K, zonder onderbrekingen. Alles-in-één, direct actief.",
  twitterHandle: undefined as string | undefined,
} as const;

// ─── Absolute URL helper ───────────────────────────────────────────────────
export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

// ─── OpenGraph image (1200×630 recommended for social sharing) ──────────────
export const OG_IMAGE = {
  url: `${SITE.url}/brand-logo`,
  width: 1200,
  height: 630,
  alt: "IPTV Compleet – het complete IPTV-abonnement in Nederland",
};

// ─── Build canonical + alternate metadata ───────────────────────────────────
export function canonicalMetadata(
  path: string,
  language: string = SITE.hreflang,
): Pick<Metadata, "alternates"> {
  const url = absoluteUrl(path);
  return {
    alternates: {
      canonical: url,
      // Self-referencing hreflang for the single nl-NL locale (Google-recommended).
      languages: { [language]: url, "x-default": url },
    },
  };
}

// ─── OpenGraph defaults builder ────────────────────────────────────────────
export function openGraphMetadata({
  title,
  description,
  path,
  type = "website",
  locale,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  locale?: string;
}): Metadata["openGraph"] {
  return {
    type,
    locale: locale || SITE.locale,
    url: absoluteUrl(path),
    siteName: SITE.name,
    title,
    description,
    images: [OG_IMAGE],
  };
}

// ─── Twitter card defaults builder ─────────────────────────────────────────
export function twitterMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  };
}

// ─── Full page metadata builder (avoids repetition) ────────────────────────
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  locale,
  noIndex = false,
  ogImage = true,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  locale?: string;
  noIndex?: boolean;
  /**
   * Set `false` on routes that provide their own `opengraph-image.tsx` so the
   * file-based social card is the single source (avoids a duplicate og:image).
   */
  ogImage?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    // `absolute` bypasses the root layout's "%s | IPTV Compleet" title
    // template — every caller's `title` already includes the brand suffix,
    // so templating it again would double-brand the <title> tag.
    title: { absolute: title },
    description,
    // Canonical + self-referencing nl-NL hreflang on every page.
    alternates: { canonical: url, languages: { [SITE.hreflang]: url, "x-default": url } },
    openGraph: {
      type,
      locale: locale || SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      ...(ogImage ? { images: [OG_IMAGE] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [OG_IMAGE.url] } : {}),
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : { robots: { index: true, follow: true } }),
  };
}
