import { absoluteUrl, OG_IMAGE } from "@/lib/seo";

// ═════════════════════════════════════════════════════════════════════════════
//  PHASE 2 — RICH PAGE SCHEMA
//  ---------------------------------------------------------------------------
//  This is the new type system that the rebuilt dynamic route + PageRenderer
//  (Phase 4) and the section component library (Phase 6) consume. It is added
//  ALONGSIDE the legacy `IptvGermanPage`/`Vault*` types so the app keeps
//  compiling during the migration; the legacy types below are removed once the
//  route is switched over to `IPTV_GERMAN_PAGES` of type `IPTVPage[]`.
//
//  Design notes:
//   • `metaTitle` is the FINAL <title> string (keyword-first, brand included,
//     ≤60 chars) and is emitted via `title.absolute` to avoid the root layout's
//     `%s | IPTV Streaming` template double-suffixing the brand.
//   • URL-bearing fields (`canonicalUrl`, `ogImage`, hreflang values) are
//     absolute and built from `SITE.url` in `@/lib/seo`.
//   • `sections` is a discriminated union rendered by a switch in PageRenderer;
//     each `type` maps to one lazy-loaded section component.
// ═════════════════════════════════════════════════════════════════════════════

export type PageLanguage = "nl" | "en";

/** Search intent — drives the section mix and copy a page receives. */
export type PageIntent =
  | "general" // broad informational ("was ist iptv")
  | "guide" // how-to / informational deep-dive
  | "app" // player / app pages (smarters, tivimate, …)
  | "device" // boxes, smart TV, receivers
  | "subscription" // commercial: abos, prices, buying
  | "provider" // choosing/comparing providers
  | "legal" // legality, fines, risks
  | "playlist" // m3u / playlist / free
  | "quality" // 4K / bitrate / performance
  | "landing"; // high-intent commercial landing

/** schema.org type a page emits as JSON-LD (see Phase 4 `JsonLd`). */
export type StructuredDataType =
  | "FAQPage"
  | "Article"
  | "Product"
  | "BreadcrumbList"
  | "WebPage";

export type Breadcrumb = { label: string; href: string };

export type CTAButton = { label: string; href: string };

export type PageFaq = { question: string; answer: string };

export type InternalLink = {
  label: string;
  href: string;
  description?: string;
};

// ── Section payload sub-types ────────────────────────────────────────────────

/** A single feature card. `icon` is a lucide-react icon name. */
export type Feature = {
  icon?: string;
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string; // formatted incl. currency, e.g. "12,99 €"
  period?: string; // e.g. "/ Monat"
  description?: string;
  features: string[];
  cta: CTAButton;
  highlighted?: boolean; // "Beliebteste" tier
  badge?: string;
};

/** A comparison row. Each value lines up with `ComparisonSection.columns`. */
export type ComparisonRow = {
  label: string;
  values: (boolean | string)[];
};

export type DevicePlatform =
  | "android"
  | "ios"
  | "smart-tv"
  | "browser"
  | "box"
  | "windows"
  | "other";

export type DeviceCard = {
  name: string;
  icon?: string;
  platform: DevicePlatform;
  steps: number; // number of setup steps
  href?: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Review = {
  author: string;
  country?: string; // label or emoji flag, e.g. "🇩🇪"
  rating: number; // 1–5
  text: string;
};

export type ChannelCategory = {
  name: string;
  count?: number;
  examples: string[];
};

// ── Discriminated union of renderable sections ───────────────────────────────
export type PageSection =
  | { type: "richText"; heading?: string; html: string }
  | { type: "features"; heading?: string; subheading?: string; items: Feature[] }
  | {
      type: "pricing";
      heading?: string;
      subheading?: string;
      tiers: PricingTier[];
    }
  | {
      type: "comparison";
      heading?: string;
      subheading?: string;
      columns: string[];
      rows: ComparisonRow[];
    }
  | {
      type: "devices";
      heading?: string;
      subheading?: string;
      list: DeviceCard[];
    }
  | { type: "howItWorks"; heading?: string; subheading?: string; steps: Step[] }
  | {
      type: "testimonials";
      heading?: string;
      subheading?: string;
      reviews: Review[];
    }
  | {
      type: "channelList";
      heading?: string;
      subheading?: string;
      categories: ChannelCategory[];
    }
  | { type: "faq"; heading?: string; items: PageFaq[] }
  | {
      type: "cta";
      heading: string;
      text?: string;
      cta: CTAButton;
      variant: "primary" | "secondary";
    };

export type PageSectionType = PageSection["type"];

export type HeroBlock = {
  headline: string; // H1 — contains the exact-match primary keyword
  subheadline: string;
  cta: CTAButton;
  badgeTags: string[]; // 3–4 trust signals, e.g. ["4K/8K", "7-Tage Test"]
  background?: string; // optional hero background image (absolute or /public)
};

/** The rebuilt page model. Replaces the legacy `IptvGermanPage` after Phase 4. */
export type IPTVPage = {
  slug: string;
  keyword: string; // primary keyword (used for search index + labels)
  lang: PageLanguage;
  intent: PageIntent;
  hreflang: { nl: string; en?: string };
  metaTitle: string; // final <title>, keyword-first, ≤60 chars
  metaDescription: string; // ≤155 chars, action verb + benefit + CTA
  canonicalUrl: string; // absolute
  ogImage: string; // absolute
  structuredData: StructuredDataType;
  breadcrumbs: Breadcrumb[];
  hero: HeroBlock;
  sections: PageSection[]; // ≥5 per page
  faq: PageFaq[]; // ≥5 per page
  internalLinks: InternalLink[]; // ≥4 per page
  updatedAt: string; // ISO date
};

// ═══════════════════════════════ LEGACY TYPES (pre-migration) ═══════════════════
// Still consumed by the current route + VaultPageTemplate; removed in Phase 4.

export type VaultFaq = {
  question: string;
  answer: string;
};

export type VaultInternalLink = {
  label: string;
  href: string;
  description: string;
};

export type VaultSection = {
  heading: string;
  body: string;
  points: string[];
};

export type IptvGermanPage = {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  introCopy: string;
  benefits: string[];
  sections: VaultSection[];
  faqs: VaultFaq[];
  internalLinks: VaultInternalLink[];
  language: "nl" | "en" | "fr" | "es" | "de";
  intent:
    | "general"
    | "netherlands"
    | "app"
    | "device"
    | "subscription"
    | "legal"
    | "playlist"
    | "quality"
    | "provider"
    | "adult";
  isCentered?: boolean;
  heroBg?: string;
};

const basePath = "/iptv-gids";

/**
 * Slugs that have been promoted to dedicated root-level landing pages. Any
 * internal link to one of these must point straight at the canonical root URL
 * so we never emit a 308 redirect hop (`/iptv-gids/x` → `/x`). External/stale
 * inbound links are still caught by the redirects in `next.config.ts`.
 */
export const PROMOTED_TO_ROOT: Record<string, string> = {
  "iptv-abonnement": "/iptv-abonnement",
  "iptv-smarters-pro": "/iptv-smarters-pro",
  "iptv-nederland": "/iptv-nederland",
  "iptv-kopen": "/iptv-kopen",
  "iptv-aanbieder": "/iptv-aanbieder",
};

/** Canonical in-app path for a vault slug (root URL for promoted slugs). */
export const iptvPath = (slug: string): string =>
  PROMOTED_TO_ROOT[slug] ?? `${basePath}/${slug}`;

export const IPTV_GERMAN_SLUGS = [
  "iptv",
  "iptv-ott-service",
  "iptv-service",
  "service-iptv",
  "meilleur-service-iptv",
  "iptv-services",
  "services-iptv",
  "iptv-smarters-pro",
  "abonnement-iptv",
  "iptv-abonnement",
  "iptv-boitier",
  "iptv-smart-player",
  "iptv-smarters",
  "boitier-iptv",
  "iptv-deutschland",
  "iptv-stream-player",
  "smart-iptv",
  "iptv-premium",  "iptv-illegal",
  "iptv-pro",
  "iptv-smarter-pro",  "meilleur-iptv",  "france-iptv",
  "ip-smart-iptv",
  "iptv-smarters-player",
  "iptv-tv",
  "application-iptv",  "iptv-app",
  "iptv-application",  "smart-iptv-ip",
  "app-iptv",  "french-iptv",  "iptv-smarter",
  "iptv-smarters-pro-android",
  "iptv-smarters-pro-windows",
  "iron-iptv",
  "setting-iptv",
  "xtream-iptv",
  "zen-iptv",
  "atlas-iptv",
  "abonnement-iptv-12-mois-smart-tv",
  "atlas-pro-iptv",  "hot-iptv",
  "iptv-free-trial",
  "iptv-legal",
  "iptv-player",
  "lynk-iptv",
  "m3u-iptv",
  "meilleur-abonnement-iptv",
  "premium-iptv",
  "programme-tv-iptv",
  "pure-iptv",
  "set-iptv",
  "smarters-iptv-pro",
  "smartone-iptv",
  "xenon-iptv",
  "appli-iptv",
  "arcom-iptv",  "ip-iptv",
  "iptv-4k",
  "iptv-laws",
  "iptv-prix",
  "iptv-smart-player-pro",
  "iptv-ss",
  "premium-iptv-tv",
  "programme-iptv",
  "smarter-iptv",
  "smarters-iptv",
  "test-iptv",  "abonnement-iptv-france",
  "agence-iptv",
  "boitier-iptv-amazon",
  "box-iptv",
  "decodeur-iptv",
  "fournisseur-iptv",
  "iptv-amende",
  "iptv-atlas",
  "iptv-az",
  "iptv-box",
  "iptv-code",  "iptv-pas-cher",
  "iptv-smart",
  "iptv-smarter-player-pro",
  "iptv-smarters-lite",
  "iptv-test-gratuit",
  "iptv-with-4k",
  "king-iptv",
  "legality-of-iptv",
  "mario-iptv",
  "meilleur-application-iptv",
  "meilleurs-iptv",
  "net-iptv",
] as const;

type RawSlug = (typeof IPTV_GERMAN_SLUGS)[number];

const titleOverrides: Partial<Record<RawSlug, string>> = {
  iptv: "IPTV-gids voor stabiel en veilig streamen",
  "iptv-illegal": "Illegale IPTV: feiten, risico's en veilige alternatieven",
  "iptv-amende": "IPTV-boetes in Nederland: wat u moet weten",
};

// Dutch display keywords for slugs whose raw tokens are French/English.
// The URL slug stays untouched (legacy SEO); only the rendered label/title is
// translated so every visible string on the site reads as Dutch.
const KEYWORD_DE: Partial<Record<string, string>> = {
  "iptv-ott-service": "OTT IPTV-diensten",
  "iptv-service": "Premium IPTV-dienst",
  "service-iptv": "Betrouwbare IPTV-dienst",
  "meilleur-service-iptv": "Beste IPTV-dienst Nederland",
  "iptv-services": "Beste IPTV-diensten",
  "services-iptv": "IPTV-diensten vergelijken",
  "iptv-boitier": "IPTV-box kopen",
  "boitier-iptv": "Beste IPTV-box",
  "boitier-iptv-amazon": "IPTV-box Amazon",
  "box-iptv": "Android IPTV-box",
  "decodeur-iptv": "IPTV-decoder",
  "decodeur-iptv-avec-code": "IPTV-decoder met code",
  "meilleur-iptv": "Beste IPTV-aanbieder",
  "meilleurs-iptv": "Beste IPTV-diensten in 2025",
  "meilleur-abonnement-iptv": "Best IPTV-abonnement 2025",
  "meilleur-application-iptv": "Beste IPTV-app voor Smart TV",
  "fournisseur-iptv": "IPTV-aanbieder Nederland",
  "agence-iptv": "Premium IPTV-agency",
  "france-iptv": "IPTV-aanbod Frankrijk",
  "french-iptv": "Franse IPTV-zenders",
  "abonnement-iptv-france": "IPTV-abonnement Frankrijk kopen",
  "iptv-gratuit": "IPTV gratis proefperiode",
  "iptv-gratuit-sans-code": "IPTV gratis uitproberen",
  "iptv-test-gratuit": "IPTV-test 24 uur",
  "iptv-free-trial": "Gratis IPTV-proefperiode Nederland",
  "iptv-smarters-pro-gratuit": "IPTV Smarters Pro instellen",
  "code-iptv-gratuit-2025": "IPTV-codes info 2025",
  "code-iptv-smarters-pro-gratuit-2025": "IPTV Smarters Pro activatie",
  "code-downloader-iptv-gratuit-2025": "IPTV-downloadercodes",
  "comment-avoir-les-codes-iptv-gratuit": "IPTV-codes legaal verkrijgen",
  "telecharger-iptv-gratuit": "IPTV-apps downloaden",
  "telecharger-iptv-smarters-pro-apk": "IPTV Smarters Pro APK-installatie",
  "iptv-prix": "IPTV-prijzen vergelijken",
  "iptv-pas-cher": "Goedkoop IPTV-abonnement",
  "programme-tv-iptv": "TV-gids & EPG IPTV",
  "programme-iptv": "IPTV-programmaoverzicht",
  "application-iptv": "Beste IPTV-apps",
  "iptv-application": "Beste IPTV-app",
  "appli-iptv": "IPTV-app installeren",
  "setting-iptv": "IPTV-instellingen configureren",
  "free-popular-iptv-playlist": "Populaire M3U IPTV-playlist",
  "iptv-laws": "IPTV-wetgeving in Nederland",
  "legality-of-iptv": "Is IPTV legaal?",
  "iptv-with-4k": "IPTV in 4K Ultra HD",
  "iptv-deutschland": "Premium IPTV Nederland",
  "iptv-amende": "IPTV-boetes in Nederland",
  "iptv-illegal": "Illegale IPTV",
  "iptv-legal": "Legale IPTV",
};

const formatKeyword = (slug: string): string =>
  KEYWORD_DE[slug] ??
  slug
    .replace(/-/g, " ")
    .replace(/\biptv\b/gi, "IPTV")
    .replace(/\b4k\b/gi, "4K")
    .replace(/\bdeutschland\b/gi, "Nederland")
    .replace(/\bnederland\b/gi, "Nederland")
    .replace(/\bkpn\b/gi, "KPN")
    .replace(/\bcz\b/gi, "CZ")
    .replace(/\bss\b/gi, "SS")
    .replace(/\big\b/gi, "IG")
    .replace(/\bm3u\b/gi, "M3U")
    .replace(/\bandroid\b/gi, "Android")
    .replace(/\bwindows\b/gi, "Windows")
    .replace(/\breddit\b/gi, "Reddit")
    .replace(/\bmytvonline\b/gi, "MYTVOnline")
    .replace(/\bswiss\b/gi, "Swiss")
    .replace(/\bosterreich\b/gi, "Österreich");

const titleCase = (value: string) =>
  value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

const detectLanguage = (slug: string): IptvGermanPage["language"] => {
  if (slug.includes("aplicacion")) return "es";
  if (slug.includes("appli")) return "fr";
  if (slug.includes("bestes") || slug.includes("bester") || slug.includes("deutschland") || slug.includes("german")) return "de";
  if (
    slug.includes("best-") ||
    slug.includes("top-rated") ||
    slug.includes("free")
  ) {
    return "en";
  }
  return "de";
};

const detectIntent = (slug: string): IptvGermanPage["intent"] => {
  if (
    slug.includes("illegaal") ||
    slug.includes("boete") ||
    slug.includes("illegal") ||
    slug.includes("amende") ||
    slug.includes("laws") ||
    slug.includes("legal")
  )
    return "legal";
  if (slug.includes("porn")) return "adult";
  if (
    slug.includes("playlist") ||
    slug.includes("m3u") ||
    slug.includes("gratis") ||
    slug.includes("gratuit") ||
    slug.includes("free")
  ) {
    return "playlist";
  }
  if (
    slug.includes("deutschland") ||
    slug.includes("german") ||
    slug.includes("nederland") ||
    slug.includes("dutch") ||
    slug.includes("kpn") ||
    slug.includes("nederlandse") ||
    slug.includes("france") ||
    slug.includes("french")
  ) {
    return "netherlands";
  }
  if (
    slug.includes("app") ||
    slug.includes("application") ||
    slug.includes("player") ||
    slug.includes("smarters") ||
    slug.includes("tivimate") ||
    slug.includes("smartone") ||
    slug.includes("smart-one") ||
    slug.includes("net-iptv") ||
    slug.includes("set-iptv") ||
    slug.includes("ss-iptv") ||
    slug.includes("flix") ||
    slug.includes("xtream") ||
    slug.includes("appli")
  ) {
    return "app";
  }
  if (
    slug.includes("box") ||
    slug.includes("kastje") ||
    slug.includes("amiko") ||
    slug.includes("boitier") ||
    slug.includes("decodeur")
  )
    return "device";
  if (slug.includes("4k")) return "quality";
  if (
    slug.includes("aanbieder") ||
    slug.includes("aanbieders") ||
    slug.includes("provider") ||
    slug.includes("suppliers") ||
    slug.includes("fournisseur") ||
    slug.includes("agence")
  ) {
    return "provider";
  }
  if (
    slug.includes("abonnement") ||
    slug.includes("abbonement") ||
    slug.includes("kopen") ||
    slug.includes("test") ||
    slug.includes("prix") ||
    slug.includes("pas-cher")
  ) {
    return "subscription";
  }
  return "general";
};

const languageAngle: Record<IptvGermanPage["language"], string> = {
  nl: "voor Nederlandstalige kijkers",
  en: "voor internationale kijkers",
  fr: "voor Nederlandstalige gebruikers",
  es: "voor Nederlandstalige gebruikers",
  de: "voor Nederlandstalige gebruikers",
};

const intentCopy: Record<
  IptvGermanPage["intent"],
  {
    label: string;
    promise: string;
    benefitSeed: string[];
    setup: string;
    safety: string;
  }
> = {
  general: {
    label: "IPTV-orientatie",
    promise:
      "een heldere manier om live-tv, films en series via internet te begrijpen",
    benefitSeed: [
      "duidelijke kanaalstructuur",
      "stabiele weergave",
      "snelle start op meerdere apparaten",
    ],
    setup:
      "Begin met uw apparaat, kies een betrouwbare speler en zorg dat uw netwerk stabiel genoeg is voor HD of 4K.",
    safety:
      "Gebruik alleen bronnen waarvoor u toestemming heeft en vermijd onbekende lijsten die rechten of privacy kunnen schenden.",
  },
  netherlands: {
    label: "Beste IPTV Nederland",
    promise:
      "een praktische gids voor lokale kanalen, regionale content en Nederlandstalige televisie",
    benefitSeed: [
      "focus op Nederlandse kanalen",
      "EPG in het Nederlands",
      "support afgestemd op lokale gewoonten",
    ],
    setup:
      "Let op Nederlandse kanaalgroepen, juiste tijdzones in de EPG en apps die goed werken op Smart-tv en Android TV.",
    safety:
      "Controleer altijd de herkomst van de content en kies transparante voorwaarden in plaats van anonieme beloften.",
  },
  app: {
    label: "App & speler",
    promise:
      "een soepele ervaring met heldere installatie, EPG en playlists",
    benefitSeed: [
      "M3U- en Xtream-ondersteuning",
      "prettige navigatie",
      "compatibel met gangbare spelers",
    ],
    setup:
      "Installeer de speler uit een betrouwbare store, voer uw gegevens zorgvuldig in en test de zaptijd, EPG en ondertiteling.",
    safety:
      "Bewaar uw inloggegevens veilig en download apps alleen uit betrouwbare bronnen.",
  },
  device: {
    label: "Apparaatconfiguratie",
    promise: "een handige oriëntatie voor boxen, ontvangers en tv-toestellen",
    benefitSeed: [
      "geoptimaliseerd voor de afstandsbediening",
      "4K-compatibele hardware",
      "stabiele kabel- of wifi-verbinding",
    ],
    setup:
      "Werk de firmware bij, gebruik indien mogelijk ethernet en kies een lichte speler die past bij de processor van uw apparaat.",
    safety:
      "Vermijd voorgeïnstalleerde boxen met obscure lijsten; dit kan gevaarlijk zijn en juridische risico's met zich meebrengen.",
  },
  subscription: {
    label: "Abonnementskeuze",
    promise:
      "een praktische manier om pakketten, proefperiodes en verwachtingen te vergelijken",
    benefitSeed: [
      "duidelijke looptijd",
      "geen verborgen voorwaarden",
      "hulp bij de activering",
    ],
    setup:
      "Vergelijk pakketlooptijd, gelijktijdige verbindingen, proefmogelijkheden en support voordat u betaalt.",
    safety:
      "Kies aanbieders die transparant zijn over voorwaarden, contactmogelijkheden en verantwoord gebruik.",
  },
  legal: {
    label: "Juridisch kader",
    promise: "neutrale uitleg over risico's, rechten en verantwoord streamen",
    benefitSeed: [
      "feitelijke uitleg",
      "geen illegale instructies",
      "focus op een veilige keuze",
    ],
    setup:
      "Controleer of een dienst de contentrechten bezit, lees de voorwaarden en wees voorzichtig met extreem goedkope aanbiedingen.",
    safety:
      "Deze pagina bevat algemene informatie en moedigt geen onbevoegde toegang tot kanalen of streams aan.",
  },
  playlist: {
    label: "Playlist-veiligheid",
    promise:
      "veilige informatie over M3U-lijsten zonder gehackte streams of dubieuze downloads",
    benefitSeed: [
      "uitleg over playlist-formaten",
      "privacyvriendelijke controle",
      "geen illegale streaminglinks",
    ],
    setup:
      "Gebruik M3U alleen als formaat voor legitieme bronnen en test lijsten in een speler zonder persoonlijke gegevens te delen.",
    safety:
      "Wij publiceren geen gekraakte playlists en raden af om onbekende streaminglinks te openen.",
  },
  quality: {
    label: "4K-streaming",
    promise: "tips over beeldkwaliteit, bitrate en netwerkstabiliteit",
    benefitSeed: [
      "focus op 4K en Full HD",
      "minder buffering",
      "realistische snelheidsverwachtingen",
    ],
    setup:
      "Gebruik een snelle verbinding, geschikte HDMI-kabels en een speler met hardware-decodering.",
    safety:
      "Maak kwaliteit niet tot enige criterium; betrouwbaarheid, rechten en support blijven belangrijk.",
  },
  provider: {
    label: "Aanbieder-oriëntatie",
    promise:
      "een evenwichtige aanpak voor de keuze van een aanbieder, zonder vooringenomenheid of marketing",
    benefitSeed: [
      "neutrale vergelijking",
      "servicecontrole",
      "transparantie van voorwaarden",
    ],
    setup:
      "Controleer de betrouwbaarheid van de aanbieder, contactmogelijkheden, beschikbaarheid van support en klantbeoordelingen voordat u zich abonneert.",
    safety:
      "Wees voorzichtig met aanbieders zonder bedrijfsinformatie, contactkanaal of duidelijke servicevoorwaarden.",
  },
  adult: {
    label: "Volwassenencontent",
    promise:
      "privacyvriendelijke informatie over filters, leeftijdsinstellingen en verantwoord kijken",
    benefitSeed: [
      "kinderslot",
      "privacy-instellingen",
      "bewuste kanaalkeuze",
    ],
    setup:
      "Controleer of uw speler profielen, pincodebeveiliging en kanaalblokkering ondersteunt.",
    safety:
      "Zorg dat de content legaal beschikbaar is en blokkeer categorieën voor volwassenen voor minderjarigen.",
  },
};

const buildMetaDescription = (
  keyword: string,
  intent: IptvGermanPage["intent"],
  index: number,
) => {
  const copy = intentCopy[intent];
  return `${keyword}: ${copy.label.toLowerCase()} met praktische uitleg over installatie, veiligheid, compatibiliteit en beeldkwaliteit. IPTV Compleet-gids ${index + 1}.`;
};

const createFaqs = (
  keyword: string,
  intent: IptvGermanPage["intent"],
  _language: IptvGermanPage["language"],
): VaultFaq[] => {
  const copy = intentCopy[intent];
  const localized =
    "De installatie hangt af van uw app, apparaat en de bron van de content.";

  return [
    {
      question: `Waar moet ik op letten bij ${keyword}?`,
      answer: `${copy.setup} Controleer ook de support, updates en of de dienst past bij uw dagelijkse kijkgewoonten.`,
    },
    {
      question: `Is ${keyword} geschikt voor 4K-streaming?`,
      answer: `Ja, zolang uw apparaat, speler en internetverbinding dit ondersteunen. Voor 4K adviseren wij een stabiele verbinding en bij voorkeur ethernet voor vaste tv-installaties.`,
    },
    {
      question: `Hoe gebruik ik ${keyword} veilig?`,
      answer: `${copy.safety} ${localized}`,
    },
  ];
};

const relatedSlugsFor = (
  slug: string,
  intent: IptvGermanPage["intent"],
) => {
  const preferredByIntent: Record<IptvGermanPage["intent"], RawSlug[]> = {
    general: ["iptv", "meilleur-iptv", "abonnement-iptv", "iptv-abonnement"],
    netherlands: ["france-iptv", "french-iptv", "meilleur-iptv", "agence-iptv"],
    app: [
      "iptv-smarters",
      "iptv-smarters-pro",
      "iptv-player",
      "meilleur-application-iptv",
    ],
    device: ["iptv-box", "boitier-iptv", "box-iptv", "decodeur-iptv"],
    subscription: [
      "iptv-abonnement",
      "abonnement-iptv",
      "iptv-prix",
      "test-iptv",
    ],
    legal: ["iptv-illegal", "iptv-amende", "iptv", "fournisseur-iptv"],
    playlist: [
      "m3u-iptv",
      "iptv-smarters-pro",
      "iptv-abonnement",
      "iptv-player",
    ],
    quality: ["iptv-4k", "iptv-with-4k", "meilleur-iptv", "iptv-premium"],
    provider: [
      "fournisseur-iptv",
      "agence-iptv",
      "iptv-atlas",
      "meilleur-iptv",
    ],
    adult: ["iptv-app", "smart-iptv", "iptv-player", "iptv"],
  };

  return preferredByIntent[intent]
    .filter((relatedSlug) => relatedSlug !== slug)
    .slice(0, 4);
};

const createPage = (
  slug: RawSlug,
  index: number,
): Omit<IptvGermanPage, "internalLinks"> => {
  const keyword = formatKeyword(slug);
  const readableKeyword = titleCase(keyword);
  const language = detectLanguage(slug);
  const intent = detectIntent(slug);
  const copy = intentCopy[intent];
  const title =
    titleOverrides[slug] ?? `${readableKeyword}: praktische IPTV Compleet-gids`;
  const metaTitle = `${title} | IPTV Compleet`;
  const heroHeading =
    slug === "iptv"
      ? "IPTV zonder gedoe: kies bewust, kijk stabiel"
      : `${readableKeyword} met de pragmatische aanpak van IPTV Compleet`;

  return {
    slug,
    keyword,
    title,
    metaTitle,
    metaDescription: buildMetaDescription(keyword, intent, index),
    heroHeading,
    language,
    intent,
    introCopy: `${readableKeyword} vraagt om meer dan alleen een zoekterm. Deze pagina helpt u bij ${copy.promise}, met bijzondere aandacht voor prestaties, apparaatkeuze, privacy en verantwoord gebruik ${languageAngle[language]}.`,
    benefits: copy.benefitSeed.map(
      (benefit, benefitIndex) =>
        `${benefit} voor ${keyword} ${benefitIndex + 1}`,
    ),
    sections: [
      {
        heading: `${readableKeyword} in de praktijk`,
        body: `Bij ${keyword} draait alles om de combinatie van contentbron, speler, apparaat en netwerk. IPTV Streaming ziet dit als een complete kijkervaring, zodat u niet alleen start, maar ook begrijpt waarom het vloeiend of instabiel loopt.`,
        points: [
          "Controleer de compatibiliteit voordat u een pakket of app kiest.",
          "Gebruik een heldere EPG en logische kanaalgroepen.",
          "Test de kwaliteit op het apparaat waarop u daadwerkelijk gaat kijken.",
        ],
      },
      {
        heading: `Installatie-checklist voor ${readableKeyword}`,
        body: copy.setup,
        points: [
          "Noteer welke app, tv-box of Smart-tv u gebruikt.",
          "Controleer uw internetsnelheid en wifi-dekking op de kijkplek.",
          "Bewaar accountgegevens en playlist op een veilige plek.",
        ],
      },
      {
        heading: `Veilig en verantwoord gebruik van ${readableKeyword}`,
        body: copy.safety,
        points: [
          "Vermijd onbekende downloads, gekraakte apps en anonieme lijsten.",
          "Deel geen persoonlijke gegevens met dubieuze aanbieders.",
          "Kies bronnen met duidelijke voorwaarden en toegankelijke support.",
        ],
      },
    ],
    faqs: createFaqs(keyword, intent, language),
  };
};

const pagesWithoutLinks = IPTV_GERMAN_SLUGS.map(createPage);

export const IPTV_GERMAN_PAGES: IptvGermanPage[] =
  pagesWithoutLinks.map((page) => {
    const isAbonnement =
      page.slug === "iptv-abonnement" || page.slug === "abonnement-iptv";

    return {
      ...page,
      heroHeading: isAbonnement
        ? "IPTV in Nederland: herontdek televisie"
        : page.heroHeading,
      metaTitle: isAbonnement
        ? "IPTV-abonnement Nederland – live streaming, Franse & Nederlandse zenders, 4K/8K, VOD | IPTV Compleet"
        : page.metaTitle,
      metaDescription: isAbonnement
        ? "IPTV-abonnement & streaming in Nederland met 31.000+ zenders en 140.000+ films & series in 4K/8K. Directe activatie, stabiele servers, alle apparaten ondersteund en premium IPTV-abonnementen voor Nederland en België."
        : page.metaDescription,
      heroBg: isAbonnement ? "/images/abonnement-bg.webp" : undefined,
      internalLinks: relatedSlugsFor(page.slug, page.intent).map(
        (relatedSlug) => {
          const related = pagesWithoutLinks.find(
            (candidate) => candidate.slug === relatedSlug,
          );
          const label = related?.keyword ?? formatKeyword(relatedSlug);

          return {
            label,
            href: iptvPath(relatedSlug),
            description: `Lees meer over ${label} in de IPTV Streaming kennisbank.`,
          };
        },
      ),
    };
  });

export const IPTV_GERMAN_PAGE_MAP = new Map(
  IPTV_GERMAN_PAGES.map((page) => [page.slug, page]),
);

export const getIptvGermanPage = (slug: string) =>
  IPTV_GERMAN_PAGE_MAP.get(slug);

export const getIptvGermanPath = (slug: string) => iptvPath(slug);

// ═════════════════════════════════════════════════════════════════════════════
//  PHASE 3 — RICH CONTENT ENGINE  (emits IPTVPage[] for all 105 slugs)
//  ---------------------------------------------------------------------------
//  Every page gets ≥5 discriminated-union sections, ≥5 FAQs and ≥4 internal
//  links. Content is differentiated by search intent (no near-duplicate copy).
//  Exported under V2 names; Phase 4 switches the route over, after which the
//  legacy block above is removed and these become canonical.
// ═════════════════════════════════════════════════════════════════════════════

const UPDATED_AT = "2026-05-31";
// Primary CTA target across all vault pages — points at the root money page
// directly (no /iptv-gids redirect hop).
const ORDER_HREF = iptvPath("iptv-abonnement");
const OG = OG_IMAGE.url;

/** Truncate to a hard max length, appending an ellipsis at a word boundary. */
const clamp = (value: string, max: number): string => {
  if (value.length <= max) return value;
  const cut = value.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
};

// ── Intent detection (German-market focused; fixes the legacy FR heuristics) ──
const detectIntentV2 = (slug: string): PageIntent => {
  const has = (...keys: string[]) => keys.some((k) => slug.includes(k));
  if (has("illegal", "amende", "laws", "legal", "arcom", "strafe", "abmahn"))
    return "legal";
  if (has("meilleur", "meilleurs", "beste", "bester", "fournisseur", "agence", "anbieter", "provider", "atlas", "king", "mario", "lynk", "iron", "zen", "xenon", "pure"))
    return "provider";
  if (has("playlist", "m3u", "gratuit", "gratis", "kostenlos", "code", "telecharger", "downloader", "free"))
    return "playlist";
  if (has("4k", "8k", "uhd"))
    return "quality";
  if (has("boitier", "decodeur", "box", "kastje", "receiver", "stick", "mag"))
    return "device";
  if (has("smarters", "smarter", "smart-player", "smart-iptv", "tivimate", "smartone", "smart-one", "net-iptv", "set-iptv", "ss-iptv", "iptv-ss", "flix", "xtream", "player", "application", "appli", "app", "smart"))
    return "app";
  if (has("abonnement", "abbonement", "kaufen", "kopen", "prix", "pas-cher", "premium", "test", "trial", "12-mois"))
    return "subscription";
  if (has("deutschland", "german", "germany", "france", "french", "swiss", "osterreich"))
    return "landing";
  if (has("programme", "setting", "comment", "was-ist", "guide"))
    return "guide";
  return "general";
};

// ── Shared content blocks (reused across pages) ──────────────────────────────
const PRICING_TIERS: PricingTier[] = [
  {
    name: "1 maand",
    price: "12,99 €",
    period: "/ maand",
    description: "Flexibel om uit te proberen",
    features: [
      "31.000+ live-zenders",
      "140.000+ films & series",
      "Full HD & 4K",
      "1 apparaat tegelijk",
      "Klantenservice 24/7",
    ],
    cta: { label: "Bestellen", href: ORDER_HREF },
  },
  {
    name: "3 maanden",
    price: "29,99 €",
    period: "/ 3 maanden",
    description: "Beste prijs-kwaliteitverhouding",
    features: [
      "Alles uit het maandpakket",
      "Streaming 4K / 8K",
      "2 apparaten tegelijk",
      "Onderbrekingsvrije servers",
      "Volledige VOD-toegang",
    ],
    cta: { label: "Meest populaire pakket", href: ORDER_HREF },
    highlighted: true,
    badge: "Meest populair",
  },
  {
    name: "12 maanden",
    price: "79,99 €",
    period: "/ jaar",
    description: "Slechts 6,66 € per maand",
    features: [
      "Alles uit het 3-maandenpakket",
      "Tot 5 apparaten",
      "Prioriteitsklantenservice",
      "Gratis updates",
      "Zonder contract",
    ],
    cta: { label: "Jaarpakket nemen", href: ORDER_HREF },
  },
];

const COMPARISON_COLUMNS = ["IPTV Compleet", "Andere aanbieders", "Kabel & Satelliet"];
const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Live-zenders", values: ["31.000+", "enkele duizenden", "100–300"] },
  { label: "Films & series (VOD)", values: ["140.000+", "beperkt", false] },
  { label: "Kwaliteit 4K / 8K", values: [true, "deels", false] },
  { label: "Gelijktijdige apparaten", values: ["tot 5", "1–2", "1"] },
  { label: "Contract", values: ["geen", "vaak 24 maanden", "12–24 maanden"] },
  { label: "Gratis proefperiode", values: [true, false, false] },
  { label: "Prijs per maand vanaf", values: ["6,66 €", "15–30 €", "vanaf 40 €"] },
  { label: "Klantenservice 24/7", values: [true, "wisselend", "Telefoonlijn"] },
];

const DEVICE_CARDS: DeviceCard[] = [
  { name: "Amazon Fire TV Stick", platform: "box", steps: 4, icon: "Tv" },
  { name: "Android TV & Box", platform: "android", steps: 4, icon: "MonitorSmartphone" },
  { name: "Smart TV Samsung & LG", platform: "smart-tv", steps: 5, icon: "Tv" },
  { name: "iPhone & iPad", platform: "ios", steps: 4, icon: "Smartphone" },
  { name: "MAG Box", platform: "box", steps: 3, icon: "Box" },
  { name: "Windows PC", platform: "windows", steps: 3, icon: "Monitor" },
  { name: "Apple TV", platform: "box", steps: 4, icon: "Tv" },
  { name: "Webbrowser", platform: "browser", steps: 2, icon: "Globe" },
];

const TESTIMONIAL_REVIEWS: Review[] = [
  { author: "Julien M.", country: "🇳🇱", rating: 5, text: "Eindelijk geen onderbrekingen meer. Voetbal wordt in 4K volledig vloeiend weergegeven – de installatie op de Fire TV Stick duurde slechts 5 minuten." },
  { author: "Camille L.", country: "🇳🇱", rating: 5, text: "Een enorm aanbod aan films en series, plus een klantenservice die echt binnen enkele minuten reageert. Ik raad het zeker aan." },
  { author: "Thomas V.", country: "🇧🇪", rating: 4, text: "Zeer stabiel en eerlijke prijzen zonder contract. De gratis proefperiode heeft me overtuigd – ik gebruik nu het jaarpakket." },
  { author: "Sophie K.", country: "🇳🇱", rating: 5, text: "Werkt tegelijkertijd op Smart TV, telefoon en tablet. De EPG is goed in het Nederlands en de zenders zijn perfect ingedeeld." },
];

const CHANNEL_CATEGORIES: ChannelCategory[] = [
  { name: "Sport", count: 1200, examples: ["Voetbal", "Autosport", "Europese competities", "Vechtsporten"] },
  { name: "Films & series", count: 140000, examples: ["Blockbusters", "Boxsets", "Nieuw", "Klassiekers"] },
  { name: "Nieuws", count: 800, examples: ["Frans nieuws", "Internationaal nieuws", "24/7 nieuws", "Brits nieuws"] },
  { name: "Kinderen", count: 500, examples: ["Tekenfilms", "Jeugdzenders", "Educatieve programma's", "Familiefilms"] },
  { name: "Internationaal", count: 20000, examples: ["🇹🇷 Türkçe", "🇬🇧 UK", "🇮🇹 IT", "🇪🇸 ES"] },
  { name: "4K / UHD", count: 600, examples: ["4K Live", "UHD VOD", "HDR", "8K Demo"] },
];

const HOW_STEPS: Step[] = [
  { title: "Kies een pakket", description: "Kies de gewenste looptijd (1, 3 of 12 maanden) – volledig zonder contract." },
  { title: "Ontvang de inloggegevens", description: "Direct na uw bestelling ontvangt u automatisch per e-mail uw inloggegevens of M3U/Xtream-gegevens." },
  { title: "Installeer de app", description: "Installeer een compatibele speler op uw Smart TV, Fire TV Stick, smartphone of PC." },
  { title: "Inloggen & streamen", description: "Voer de inloggegevens in, de EPG laadt automatisch – en u streamt direct in 4K." },
];

// ── Per-intent profile (label, hero copy, feature cards, deep-dive text) ──────
type IntentProfile = {
  label: string;
  headline: (kw: string) => string;
  subheadline: string;
  badgeTags: string[];
  ctaLabel: string;
  structuredData: StructuredDataType;
  features: Feature[];
  intro: (kw: string) => string;
  deepDive: (kw: string) => { heading: string; html: string };
  metaDescription: (kw: string) => string;
  extraFaqs: (kw: string) => PageFaq[];
};

const F = (icon: string, title: string, description: string): Feature => ({ icon, title, description });

const INTENT_PROFILE: Record<PageIntent, IntentProfile> = {
  general: {
    label: "De basis van IPTV",
    headline: (kw) => `${kw} eenvoudig uitgelegd`,
    subheadline: "Live TV, films en series via internet – eenvoudig, stabiel en in 4K/8K.",
    badgeTags: ["Duidelijk uitgelegd", "Praktisch", "Bijgewerkt 2026"],
    ctaLabel: "Bekijk de pakketten",
    structuredData: "Article",
    features: [
      F("Tv", "31.000+ live-zenders", "Compleet aanbod van Franse en Nederlandse zenders plus internationale programma's op één plek."),
      F("Film", "140.000+ VOD-titels", "Films en series op aanvraag – altijd pauzeren, hervatten of opnieuw beginnen."),
      F("Wifi", "Stabiel & vloeiend", "Geoptimaliseerde onderbrekingsvrije servers zorgen voor betrouwbaar beeld zonder haperingen."),
      F("MonitorSmartphone", "Alle apparaten", "Smart TV, Fire TV Stick, smartphone, tablet, box of PC – één toegang voor alles."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> staat voor televisie via internet: in plaats van kabel, satelliet of antenne worden zenders en content als datastream verzonden. Dit maakt enorme zenderbibliotheken en VOD-aanbod mogelijk, uitgesteld kijken en gebruik op vrijwel alle apparaten.</p><p>Deze gids legt helder uit hoe ${kw} werkt, wat telt voor kwaliteit en veiligheid, en hoe u in enkele minuten klaar bent om te kijken.</p>`,
    deepDive: (kw) => ({
      heading: `Wat echt telt voor ${kw}`,
      html: `<p>Drie factoren bepalen een goede ervaring: de <strong>bron</strong> van de content, de <strong>speler</strong> en uw <strong>netwerk</strong>. Een betrouwbare bron met goed bijgehouden EPG, een lichte compatibele speler en een stabiele verbinding (bij voorkeur via LAN) zorgen samen voor vloeiend beeld – zelfs in 4K.</p>`,
    }),
    metaDescription: (kw) =>
      `Wat is ${kw}? Duidelijk uitgelegd: 31.000+ zenders, 140.000+ films & series, 4K/8K, alle apparaten. Ontdek IPTV Compleet en probeer 7 dagen gratis.`,
    extraFaqs: (kw) => [
      { question: "Wat is het verschil tussen IPTV en klassieke televisie?", answer: `Bij ${kw} wordt de content via internet verzonden in plaats van via kabel, satelliet of antenne. Dit maakt veel grotere zender- en VOD-bibliotheken mogelijk, uitgesteld kijken en gebruik op meerdere apparaten tegelijk.` },
      { question: `Heb ik speciale apparatuur nodig voor ${kw}?`, answer: "Nee, een bestaand apparaat zoals een Fire TV Stick, Smart TV of smartphone is meestal voldoende. Een stabiele internetverbinding is belangrijker dan dure apparatuur." },
    ],
  },
  guide: {
    label: "IPTV-gids",
    headline: (kw) => `${kw}: de complete gids`,
    subheadline: "Alles wat u nodig heeft voor een eenvoudige start – duidelijk en praktisch.",
    badgeTags: ["Stap voor stap", "Praktisch", "Bijgewerkt 2026"],
    ctaLabel: "Beginnen",
    structuredData: "Article",
    features: [
      F("ListChecks", "Duidelijke stappen", "Van installatie tot eerste zender – uitgelegd zonder jargon."),
      F("Settings", "Optimale instellingen", "Buffer, EPG, ondertiteling en beeldkwaliteit correct instellen."),
      F("ShieldCheck", "Veiligheid voorop", "Waar u op moet letten voor betrouwbaar en legaal streamen."),
      F("Headphones", "Hulp bij problemen", "Veelgemaakte fouten en snelle oplossingen in één overzicht."),
    ],
    intro: (kw) =>
      `<p>Deze gids begeleidt u stap voor stap bij <strong>${kw}</strong> – van de juiste speler kiezen, via installatie met M3U of Xtream Codes, tot het fijne afstellen van beeldkwaliteit en EPG.</p>`,
    deepDive: (kw) => ({
      heading: `Veelgemaakte fouten voorkomen met ${kw}`,
      html: `<p>De meeste problemen komen door instabiele wifi, verkeerde bufferinstellingen of onbetrouwbare bronnen. Gebruik LAN waar mogelijk, houd de app bijgewerkt en kies een aanbieder met transparante voorwaarden en support.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} stap voor stap instellen – met checklist, apparaattips en veiligheidsadvies. Lees, start met IPTV Compleet en probeer 7 dagen gratis.`,
    extraFaqs: (kw) => [
      { question: `Hoe lang duurt de installatie van ${kw}?`, answer: "Meestal slechts enkele minuten. Na ontvangst van uw inloggegevens voert u deze in uw speler in, de EPG laadt automatisch en u kunt direct streamen." },
      { question: "Wat als een zender niet laadt?", answer: "Controleer uw internetverbinding, herstart de app en wis indien nodig de cache. Als het probleem aanhoudt, helpt de 24/7 support van IPTV Compleet u snel verder." },
    ],
  },
  app: {
    label: "App & speler",
    headline: (kw) => `${kw} optimaal instellen & gebruiken`,
    subheadline: "Installatie, EPG en playlists zonder frustratie – compatibel met alle gangbare apparaten.",
    badgeTags: ["Eenvoudige installatie", "M3U & Xtream", "Alle apparaten", "Support 24/7"],
    ctaLabel: "Toegang krijgen",
    structuredData: "Article",
    features: [
      F("Download", "M3U & Xtream", "Volledige ondersteuning voor M3U-playlists en Xtream Codes – snelle configuratie."),
      F("CalendarClock", "Overzichtelijke EPG", "Programmagids in het Nederlands met de juiste tijdzones en logo's."),
      F("PlayCircle", "Vloeiend zappen", "Korte schakeltijden en stabiele weergave dankzij geoptimaliseerde servers."),
      F("MonitorSmartphone", "Op alle apparaten", "Eén keer instellen, gebruiken op Smart TV, box, telefoon en PC."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> is een populaire speler voor het afspelen van IPTV-content. Deze gids laat zien hoe u ${kw} installeert, verbindt met M3U of Xtream Codes en beeld, EPG en ondertiteling optimaal afstelt.</p>`,
    deepDive: (kw) => ({
      heading: `${kw} correct instellen`,
      html: `<p>Voer uw inloggegevens zorgvuldig in (server, gebruikersnaam, wachtwoord of M3U-URL). Activeer hardware-decodering, pas de buffergrootte aan uw netwerk aan en laad de EPG voor een volledig programmaoverzicht.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} installeren & instellen: M3U/Xtream, EPG en alle apparaten. IPTV Compleet-gids – begin nu en probeer 7 dagen gratis.`,
    extraFaqs: (kw) => [
      { question: `Hoe stel ik ${kw} in met M3U of Xtream?`, answer: "Open de app, kies 'Playlist toevoegen' en voer de M3U-URL of uw Xtream-codes in (server, gebruikersnaam, wachtwoord). De EPG laadt vervolgens automatisch." },
      { question: `Waarom onderbreekt ${kw} soms?`, answer: "Veelvoorkomende oorzaken zijn wifi-schommelingen, een overbelast apparaat of een te kleine buffer. Gebruik LAN, sluit apps op de achtergrond en vergroot de buffergrootte in de instellingen." },
    ],
  },
  device: {
    label: "Apparaten & installatie",
    headline: (kw) => `${kw}: in enkele minuten ingesteld`,
    subheadline: "Zo krijgt u uw apparaat in enkele stappen aan de slag – stabiel en in de beste kwaliteit.",
    badgeTags: ["Eenvoudige installatie", "Alle apparaten", "4K-compatibel", "Support 24/7"],
    ctaLabel: "Toegang krijgen",
    structuredData: "Article",
    features: [
      F("Box", "Plug & play", "Compatibel met Fire TV Stick, MAG, Android-box en Smart TV."),
      F("Wifi", "Stabiel via LAN", "Ethernet-advies voor onderbrekingsvrije 4K op vaste installaties."),
      F("Cpu", "Hardware-decodering", "Vloeiende weergave afgestemd op de prestaties van uw apparaat."),
      F("RefreshCw", "Altijd bijgewerkt", "Firmware- en app-updates houden de weergave snel en veilig."),
    ],
    intro: (kw) =>
      `<p>Met <strong>${kw}</strong> wordt uw televisie een heus streamingcentrum. Wij laten zien welke instellingen voor vloeiend beeld zorgen en hoe u het apparaat in enkele stappen configureert.</p>`,
    deepDive: (kw) => ({
      heading: `Optimale instellingen voor ${kw}`,
      html: `<p>Werk eerst de firmware bij, verbind het apparaat via ethernet indien mogelijk en kies een lichte speler. Activeer hardware-decodering en stel de resolutie in op uw televisie.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} in enkele minuten instellen: stap-voor-stap gids, tips & support. Stream nu stabiel in 4K met IPTV Compleet.`,
    extraFaqs: (kw) => [
      { question: `Welke instellingen zijn optimaal voor ${kw}?`, answer: "Werk de firmware bij, gebruik ethernet indien mogelijk, activeer hardware-decodering en kies een lichte speler die past bij de prestaties van uw apparaat." },
      { question: `Heb ik snel internet nodig voor ${kw}?`, answer: "Voor Full HD is ongeveer 16 Mbit/s voldoende; voor 4K adviseren wij 25 Mbit/s of meer. Belangrijker dan de brutosnelheid is een stabiele verbinding met lage latentie – LAN heeft de voorkeur boven wifi." },
    ],
  },
  subscription: {
    label: "Abonnement & prijzen",
    headline: (kw) => `${kw} – pakketten, prijzen & proefperiode`,
    subheadline: "Transparante pakketten zonder contract – met directe activatie en gratis proefperiode.",
    badgeTags: ["Vanaf 6,66 €/maand", "Gratis proefperiode", "Zonder contract", "Direct actief"],
    ctaLabel: "Gratis uitproberen",
    structuredData: "Product",
    features: [
      F("CreditCard", "Eerlijke prijzen", "Duidelijke pakketten vanaf 6,66 €/maand – zonder verborgen kosten of verplichtingen."),
      F("Zap", "Direct actief", "Activatie meestal binnen enkele minuten na bestelling."),
      F("ShieldCheck", "Gratis proefperiode", "Test gerust de stabiliteit, zenders en beeldkwaliteit voordat u kiest."),
      F("Server", "Premium servers", "Een onderbrekingsvrije infrastructuur voor vloeiend beeld op drukke momenten."),
    ],
    intro: (kw) =>
      `<p>Bij <strong>${kw}</strong> telt alles: de looptijd, het aantal gelijktijdige apparaten, beeldkwaliteit, stabiliteit en support. IPTV Compleet biedt transparante pakketten zonder contract en met directe activatie.</p>`,
    deepDive: (kw) => ({
      heading: `${kw}: goed vergelijken`,
      html: `<p>Kijk niet alleen naar de prijs, maar naar het aantal zenders en VOD-titels, gelijktijdige verbindingen, serverkwaliteit en beschikbaarheid van support. Een proefperiode is de beste manier om de kwaliteit te beoordelen voordat u koopt.</p>`,
    }),
    metaDescription: () =>
      `IPTV-abonnement vanaf 6,66 €: 31.000+ zenders, 140.000+ VOD, 4K/8K, zonder contract. Kies een pakket, activeer direct en probeer 7 dagen gratis.`,
    extraFaqs: (kw) => [
      { question: `Brengt ${kw} een contract met zich mee?`, answer: "Nee. U kiest flexibele looptijden (1, 3 of 12 maanden) zonder automatische verlenging of opzegtermijn." },
      { question: `Kan ik ${kw} eerst uitproberen?`, answer: "Ja, een gratis proefperiode is mogelijk om gerust de stabiliteit, zenders en beeldkwaliteit te testen voordat u kiest." },
      { question: "Hoe snel wordt mijn toegang geactiveerd?", answer: "De activatie is meestal direct, binnen enkele minuten na betaling – de inloggegevens komen automatisch per e-mail binnen." },
    ],
  },
  provider: {
    label: "Vergelijking van aanbieders",
    headline: (kw) => `${kw} vergeleken`,
    subheadline: "Een neutrale blik op zenders, prijzen, kwaliteit en service – voor een weloverwogen keuze.",
    badgeTags: ["Neutrale vergelijking", "Transparant", "Gratis proefperiode"],
    ctaLabel: "IPTV Compleet proberen",
    structuredData: "Article",
    features: [
      F("Scale", "Neutrale vergelijking", "Zenders, prijzen, kwaliteit en support feitelijk naast elkaar gelegd."),
      F("BadgeCheck", "Betrouwbaarheid controleren", "Transparante voorwaarden, bereikbare support en echte reviews."),
      F("Wallet", "Eerlijke voorwaarden", "Duidelijke prijzen zonder twijfelachtige 'levenslange' beloften."),
      F("Star", "Bewezen kwaliteit", "Stabiele servers en een zorgvuldig aanbod in plaats van lege marketingbeloften."),
    ],
    intro: (kw) =>
      `<p>Bij de zoektocht naar <strong>${kw}</strong> loont een scherpe vergelijking. Wij laten zien welke criteria echt tellen en hoe u een betrouwbare dienst herkent – zonder marketingverhaal.</p>`,
    deepDive: (kw) => ({
      heading: `${kw}: waar let u op`,
      html: `<p>Betrouwbare aanbieders tonen transparante prijzen, bieden bereikbare support en een proefperiode, en maken geen onrealistische beloften. Wees voorzichtig met extreem goedkope 'levenslange' aanbiedingen zonder bedrijfsinformatie of contactgegevens.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} neutraal vergeleken: zenders, prijzen, kwaliteit & support. Vind de juiste aanbieder en probeer IPTV Compleet 7 dagen gratis.`,
    extraFaqs: () => [
      { question: "Hoe herken ik een betrouwbare IPTV-aanbieder?", answer: "Let op transparante prijzen, bereikbare support, duidelijke voorwaarden, een proefperiode en echte klantbeoordelingen. Wees voorzichtig met extreem goedkope 'levenslange' aanbiedingen." },
      { question: "Wat kost een goede IPTV-dienst?", answer: "Betrouwbare diensten kosten doorgaans tussen de 7 en 13 € per maand, met korting op langere looptijden. Abnormaal goedkope aanbiedingen zijn vaak instabiel of juridisch problematisch." },
    ],
  },
  legal: {
    label: "Juridisch kader",
    headline: (kw) => `${kw}: wat is toegestaan?`,
    subheadline: "Feitelijke informatie over de wet en risico's – plus veilige en legale alternatieven.",
    badgeTags: ["Feitelijk & neutraal", "Legale alternatieven", "Privacy"],
    ctaLabel: "Bekijk het legale alternatief",
    structuredData: "Article",
    features: [
      F("Scale", "Juridische duidelijkheid", "IPTV als technologie is legaal – wat telt is de licentie van de bron."),
      F("ShieldAlert", "Risico's kennen", "Waarschuwingen en boetes dreigen alleen bij duidelijk illegale streams."),
      F("Lock", "Privacy", "Geen dubieuze apps, geen delen van persoonlijke gegevens."),
      F("CheckCircle2", "Veilige keuze", "Gelicentieerde en transparante diensten in plaats van anonieme aanbiedingen."),
    ],
    intro: (kw) =>
      `<p>Rondom het onderwerp <strong>${kw}</strong> bestaat veel onzekerheid. Belangrijk: de IPTV-technologie zelf is volkomen legaal. De legaliteit van een aanbieder hangt uitsluitend af van de vraag of deze de benodigde licenties voor de aangeboden content bezit.</p>`,
    deepDive: () => ({
      heading: "Legaal streamen – volkomen veilig",
      html: `<p>Kies diensten met transparante voorwaarden, bedrijfsinformatie en bereikbare support. Extreem goedkope aanbiedingen met duizenden premium zenders voor een paar euro's zijn een waarschuwingssignaal. Bij twijfel: kies een betrouwbare en gelicentieerde aanbieder.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: feitelijke informatie over de wet, risico's & veilige alternatieven in Nederland. Informeer u en stream legaal met IPTV Compleet.`,
    extraFaqs: (kw) => [
      { question: `Is ${kw} legaal in Nederland?`, answer: "IPTV als technologie is legaal. Wat telt is de bron: alleen aanbieders met de benodigde licenties zijn legaal. Wij ontraden uitdrukkelijk piraterij of anonieme streams." },
      { question: "Loop ik het risico op boetes bij illegale IPTV?", answer: "Het gebruik van duidelijk illegale streams kan leiden tot waarschuwingen en boetes. Kies transparante en gelicentieerde diensten om aan de goede kant te blijven." },
    ],
  },
  playlist: {
    label: "Playlists & M3U",
    headline: (kw) => `${kw} veilig gebruiken`,
    subheadline: "Playlists goed begrijpen en veilig gebruiken – zonder downloads of dubieuze links.",
    badgeTags: ["Veilig & betrouwbaar", "M3U / Xtream", "Geen dubieuze links"],
    ctaLabel: "Bekijk een veilige bron",
    structuredData: "Article",
    features: [
      F("FileCode", "M3U & Xtream", "Duidelijke uitleg over playlist-formaten en de installatie ervan."),
      F("Lock", "Privacyvriendelijk", "Geen delen van persoonlijke gegevens, geen dubieuze downloads."),
      F("ShieldCheck", "Betrouwbare bronnen", "Waar u op moet letten om malware en problemen te voorkomen."),
      F("PlayCircle", "Direct bruikbaar", "Test de lijsten direct in de speler – snel en eenvoudig."),
    ],
    intro: (kw) =>
      `<p>Een <strong>${kw}</strong> is uiteindelijk slechts een formaat (meestal M3U of Xtream) dat zenders en streams groepeert. Deze gids legt uit hoe playlists werken en hoe u ze veilig en betrouwbaar kunt gebruiken.</p>`,
    deepDive: () => ({
      heading: "Opgelet met gratis lijsten",
      html: `<p>Gratis lijsten van onbekende bronnen zijn vaak verouderd, instabiel of juridisch problematisch en kunnen malware bevatten. Veiliger: een gelicentieerde dienst met een eigen zorgvuldig aanbod en support.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} begrijpen & veilig gebruiken – zonder dubieuze links. M3U/Xtream correct instellen. Lees en stream veilig met IPTV Compleet.`,
    extraFaqs: (kw) => [
      { question: `Zijn gratis ${kw}-lijsten veilig?`, answer: "Gratis lijsten van onbekende bronnen zijn vaak instabiel, verouderd of juridisch problematisch en kunnen malware bevatten. Veiliger: een gelicentieerde dienst met een zorgvuldig aanbod." },
      { question: "Hoe voeg ik een M3U-playlist toe aan de speler?", answer: "Kies in uw speler 'Playlist toevoegen', voer de M3U-URL in en wacht tot de zenders en EPG worden geladen. Bij Xtream-codes voert u in plaats daarvan de server, gebruikersnaam en het wachtwoord in." },
    ],
  },
  quality: {
    label: "Beeldkwaliteit & 4K",
    headline: (kw) => `${kw} in 4K & 8K`,
    subheadline: "Ultra-scherp beeld zonder onderbreking – met de juiste instellingen voor 4K en 8K.",
    badgeTags: ["4K / 8K", "Onderbrekingsvrij", "Hoge snelheid"],
    ctaLabel: "Stream in 4K",
    structuredData: "Article",
    features: [
      F("Sparkles", "Haarscherp beeld", "Nationale 4K- en 8K-streams met hoge bitrate voor maximale scherpte."),
      F("Gauge", "Weinig onderbrekingen", "Geoptimaliseerde servers en goede instellingen verminderen haperingen."),
      F("Wifi", "Netwerktips", "Zo stelt u wifi en LAN in voor stabiele streaming van hoge kwaliteit."),
      F("Cpu", "Passende apparatuur", "Apparaten met hardware-decodering voor onderbrekingsvrije UHD-weergave."),
    ],
    intro: (kw) =>
      `<p>Bij <strong>${kw}</strong> draait alles om de balans tussen bandbreedte, apparatuur en bron. Wij laten zien welke waarden u nodig heeft en hoe u onderbrekingen voorkomt.</p>`,
    deepDive: () => ({
      heading: "Bandbreedte, snelheid & stabiliteit",
      html: `<p>Ter indicatie: ongeveer 16 Mbit/s voor Full HD, 25 Mbit/s voor 4K en meer voor 8K. Belangrijker dan de brutosnelheid: een stabiele verbinding met lage latentie. Voor vaste tv-installaties is ethernet de beste keuze.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: ultra-scherp streamen zonder onderbreking – snelheid, apparatuur & netwerk afstellen. Start met IPTV Compleet in 4K/8K.`,
    extraFaqs: (kw) => [
      { question: `Welke internet snelheid heb ik nodig voor ${kw}?`, answer: "Ter indicatie: ca. 16 Mbit/s voor Full HD, 25 Mbit/s voor 4K en meer voor 8K. Belangrijker dan de brutosnelheid is een stabiele verbinding met lage latentie." },
      { question: "Waarom zijn er onderbrekingen ondanks snel internet?", answer: "Vaak komt dit door wifi-schommelingen, een overbelast apparaat of een te kleine buffer. Gebruik LAN, activeer hardware-decodering en vergroot de buffergrootte." },
    ],
  },
  landing: {
    label: "Premium IPTV",
    headline: (kw) => `${kw}: premium streaming zonder beperkingen`,
    subheadline: "31.000+ zenders, 140.000+ films & series, 4K/8K – op alle apparaten, zonder contract.",
    badgeTags: ["31.000+ zenders", "4K / 8K", "Gratis proefperiode", "Zonder contract"],
    ctaLabel: "7 dagen proberen",
    structuredData: "Product",
    features: [
      F("Tv", "31.000+ zenders", "Compleet aanbod van Franse en Nederlandse zenders plus internationale programma's."),
      F("Film", "140.000+ VOD", "Een enorm aanbod films en series op aanvraag, altijd beschikbaar."),
      F("Sparkles", "4K / 8K", "Ultra-scherp beeld dankzij hoge snelheid en premium servers."),
      F("MonitorSmartphone", "Alle apparaten", "Smart TV, Fire TV Stick, telefoon, tablet, box en PC – één toegang."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> staat voor premium streaming zonder compromis: een enorm aanbod zenders en VOD, schitterende 4K/8K-kwaliteit en stabiele servers – alles zonder contract en met directe activatie.</p>`,
    deepDive: () => ({
      heading: "Waarom IPTV Compleet?",
      html: `<p>Wij combineren een zorgvuldig aanbod met een onderbrekingsvrije infrastructuur, een EPG in het Nederlands en snelle support. Dankzij de gratis proefperiode ervaart u de kwaliteit zelf voordat u kiest.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: premium IPTV met 31.000+ zenders, 140.000+ films & series in 4K/8K. Zonder contract. Probeer 7 dagen gratis!`,
    extraFaqs: () => [
      { question: "Wat maakt IPTV Compleet beter dan andere aanbieders?", answer: "Een zorgvuldig aanbod met 31.000+ zenders, onderbrekingsvrije servers, een EPG in het Nederlands, eerlijke prijzen zonder contract en een gratis proefperiode om alles risicovrij te testen." },
      { question: "Is er een contract of proefperiode?", answer: "Er is geen contract – u kiest flexibele looptijden. Een gratis proefperiode maakt het mogelijk vooraf de stabiliteit, zenders en beeldkwaliteit te testen." },
    ],
  },
};

// ── Why Choose Us — trust-signal features per intent ─────────────────────────
const WHY_CHOOSE_US_FEATURES: Record<PageIntent, Feature[]> = {
  general: [
    F("BadgeCheck", "Jaren ervaring", "Al jaren actief op de IPTV-markt met duizenden tevreden klanten in Nederland en België."),
    F("Eye", "Transparante werking", "Geen verborgen kosten, duidelijke informatie en eerlijke voorwaarden – van A tot Z."),
    F("Server", "Premium servers", "Een onderbrekingsvrije infrastructuur voor een stabiele ervaring, 24/7."),
    F("Headphones", "Persoonlijke support", "Onze klantenservice is 24/7 beschikbaar – snel, vriendelijk en in het Nederlands."),
  ],
  guide: [
    F("BookOpen", "Expertise", "Jaren ervaring gebundeld in duidelijke en praktische gidsen, zonder jargon."),
    F("ListChecks", "Stap voor stap", "Duidelijke uitleg, afgestemd op beginners, met oog voor detail."),
    F("RefreshCw", "Altijd bijgewerkt", "Actuele informatie over de nieuwste apps, apparaten en technieken."),
    F("Wrench", "Probleemoplossing", "Veelgemaakte fouten en hun oplossingen direct toepasbaar in één overzicht."),
  ],
  app: [
    F("Download", "Eenvoudige installatie", "Binnen 5 minuten klaar met duidelijke instructies voor elke app en speler."),
    F("AppWindow", "Alle spelers ondersteund", "M3U, Xtream Codes – compatibel met Smarters Pro, TiviMate, XCIPTV en meer."),
    F("RotateCcw", "Regelmatige updates", "Altijd de nieuwste functies, prestaties en beveiligingsupdates."),
    F("Navigation", "Makkelijk in gebruik", "EPG in het Nederlands, intuïtieve navigatie en logische zendergroepen."),
  ],
  device: [
    F("MonitorSmartphone", "Breedste compatibiliteit", "Fire TV Stick, Smart TV, MAG, Android TV, Apple TV – alles wordt ondersteund."),
    F("Zap", "Geoptimaliseerd", "Hardware-decodering voor vloeiende 4K-weergave, afgestemd op uw apparaat."),
    F("Settings", "Makkelijk te configureren", "Een stap-voor-stap gids voor elk platform – geen technische kennis vereist."),
    F("Wifi", "LAN en wifi", "Stabiele streaming via ethernet of optimale wifi-tips voor draadloze installaties."),
  ],
  subscription: [
    F("BadgeEuro", "Beste prijs-kwaliteitverhouding", "Premium IPTV vanaf slechts 6,66 € per maand, zonder verborgen kosten."),
    F("Zap", "Directe activatie", "Directe toegang na uw bestelling – geen installatiekosten, geen gedoe."),
    F("Gift", "Gratis proefperiode", "Test 7 dagen risicovrij voordat u een keuze maakt."),
    F("FileX", "Zonder contract", "Flexibele looptijden zonder automatische verlenging of opzegtermijn."),
  ],
  provider: [
    F("Star", "Bewezen betrouwbaarheid", "Duizenden klanten beoordelen ons met een gemiddelde van 4,9 sterren."),
    F("Scale", "Eerlijk vergeleken", "Geen marketingverhaal, maar feitelijke informatie om aanbieders te vergelijken."),
    F("ShieldCheck", "Service gegarandeerd", "Tevreden of geld terug binnen 30 dagen – uw tevredenheid staat voorop."),
    F("MessageCircle", "Altijd bereikbaar", "Via WhatsApp, e-mail en telefoon – 24/7 beschikbaar in het Nederlands."),
  ],
  legal: [
    F("Scale", "Volledig legaal", "Wij werken uitsluitend met gelicentieerde content en transparante bronnen."),
    F("Lock", "Privacy voorop", "Uw gegevens zijn veilig en worden nooit gedeeld met derden."),
    F("ShieldCheck", "Zonder risico", "Geen waarschuwingen of boetes – u kiest een legale en veilige dienst."),
    F("Lightbulb", "Duidelijke adviezen", "Eerlijke informatie over rechten, risico's en verantwoord streamen."),
  ],
  playlist: [
    F("FileCheck", "Betrouwbare lijsten", "Stabiele M3U- en Xtream-playlists zonder dode links of malware."),
    F("RefreshCw", "Altijd bijgewerkt", "Playlists worden regelmatig vernieuwd voor een optimale ervaring."),
    F("ShieldCheck", "Veilig gebruik", "Geen dubieuze bronnen, geen verborgen scripts, geen risico voor uw privacy."),
    F("MessageCircle", "Snelle support", "Hulp bij het installeren van uw playlist in elke gangbare speler."),
  ],
  quality: [
    F("Sparkles", "Ultra-scherp beeld", "Nationale 4K- en 8K-streams met hoge bitrate voor maximale scherpte."),
    F("Gauge", "Minimale onderbrekingen", "Premium onderbrekingsvrije servers voor vloeiend beeld, zelfs op drukke momenten."),
    F("SlidersHorizontal", "Optimale afstelling", "Tips over snelheid, apparatuur en netwerk voor het beste resultaat."),
    F("Sun", "HDR-ondersteuning", "HDR10 en Dolby Vision op compatibele apparaten en content."),
  ],
  landing: [
    F("Gem", "Alles-in-één", "Premium IPTV met zenders, VOD, 4K/8K en support in één compleet pakket."),
    F("Flag", "In het Nederlands", "EPG in het Nederlands, support in uw taal en lokaal afgestemde diensten."),
    F("Star", "Bewezen kwaliteit", "12.000+ tevreden klanten en een gemiddelde beoordeling van 4,9 sterren."),
    F("Gift", "Risicovrij proberen", "7 dagen gratis proefperiode, u betaalt pas daarna – geen risico."),
  ],
};

// ── IPTV Benefits — cost-savings & convenience features per intent ────────────
const IPTV_BENEFITS_FEATURES: Record<PageIntent, Feature[]> = {
  general: [
    F("Wallet", "Bespaar op uw tv-kosten", "IPTV is aanzienlijk voordeliger dan een traditioneel kabel- of satellietabonnement."),
    F("Tv", "Enorm aanbod aan zenders", "31.000+ lokale en internationale zenders – sport, nieuws, films, series en meer."),
    F("MonitorSmartphone", "Kijk op uw apparaat", "Smart TV, smartphone, tablet, laptop of box – u kiest waar en wanneer."),
    F("Sparkles", "Stream in hoge kwaliteit", "Full HD, 4K en zelfs 8K – afhankelijk van uw apparaat en internetverbinding."),
  ],
  guide: [
    F("BookOpen", "Leer op uw eigen tempo", "Duidelijk uitgelegd met voorbeelden, stappen en praktische tips."),
    F("Lightbulb", "Begrijp de technologie", "Geen ingewikkeld jargon, maar duidelijke uitleg die u direct kunt toepassen."),
    F("ShieldCheck", "Voorkom fouten", "Leer van veelgemaakte fouten, bespaar tijd en voorkom frustratie."),
    F("Zap", "Stream met vertrouwen", "Na het lezen van deze gids weet u precies hoe alles werkt."),
  ],
  app: [
    F("AppWindow", "Gebruik elke speler", "Compatibel met Smarters Pro, TiviMate, IPTV Smarters, XCIPTV en nog veel meer."),
    F("MonitorSmartphone", "Eén account, alles toegankelijk", "Eén keer instellen en overal kijken – op al uw apparaten tegelijk."),
    F("CalendarClock", "EPG in het Nederlands", "Programmagids in het Nederlands met de juiste tijdzones en duidelijke info."),
    F("Zap", "Snel schakelen", "Korte schakeltijden en vloeiende weergave van al uw zenders."),
  ],
  device: [
    F("MonitorSmartphone", "Een apparaat, eindeloos kijkplezier", "Smart TV, Fire TV Stick, Android-box, Apple TV – alle platforms worden ondersteund."),
    F("Sparkles", "Altijd het beste beeld", "Automatische afstemming op uw apparaat, tot 4K en HDR."),
    F("Wallet", "Geen dure apparatuur", "Uw bestaande apparaat is meestal voldoende – geen extra investering nodig."),
    F("Smartphone", "Ook onderweg", "Kijk mobiel op smartphone en tablet, waar u ook bent."),
  ],
  subscription: [
    F("Wallet", "Geen verborgen kosten", "Alles inclusief vanaf 6,66 € per maand – geen installatiekosten of verrassingen."),
    F("FileX", "Flexibel opzegbaar", "Geen langdurig contract, geen opzegtermijn, totale vrijheid."),
    F("Sparkles", "Premium kwaliteit", "Onderbrekingsvrije servers, 4K/8K-beeld, 140.000+ VOD-titels en 31.000+ zenders."),
    F("MonitorSmartphone", "Meerdere apparaten", "Stream op tot 5 apparaten tegelijk, afhankelijk van uw pakket."),
  ],
  provider: [
    F("Scale", "Vergelijk met kennis van zaken", "Krijg een duidelijk beeld van zenders, prijzen, kwaliteit en echte service."),
    F("Server", "Echte prestaties", "Geen lege marketingbeloften, maar echte servers en bewezen beeldkwaliteit."),
    F("BadgeCheck", "Transparantie voorop", "Duidelijke voorwaarden, eerlijke prijzen en zichtbare klantbeoordelingen."),
    F("Gift", "Probeer voordat u koopt", "Een gratis proefperiode om alles gerust en risicovrij te beoordelen."),
  ],
  legal: [
    F("ShieldCheck", "Stream met een gerust gevoel", "Legale IPTV betekent geen risico op boetes of juridische problemen."),
    F("Server", "Stabiel en betrouwbaar", "De kwaliteit van een gelicentieerde bron met duidelijke rechten."),
    F("Lock", "Privacy beschermd", "Geen dataverzameling door dubieuze partijen, geen tracking."),
    F("Wallet", "Betaal voor kwaliteit", "Eerlijke prijs voor een eerlijke dienst met echte support."),
  ],
  playlist: [
    F("List", "Georganiseerd kijken", "M3U-playlists met logische zendergroepen en volledige EPG-ondersteuning."),
    F("Settings", "Zelf beheren", "Organiseer uw playlist, groepeer zenders en stel uw favorieten in."),
    F("Zap", "Geen dode links", "Een betrouwbare dienst met actuele en functionele streams – geen gedoe."),
    F("ShieldCheck", "Veilig en leesbaar", "Geen malware, geen phishing – uitsluitend veilige en functionele zenders."),
  ],
  quality: [
    F("Sparkles", "4K zoals het hoort", "Echte 4K-streams met hoge bitrate, zonder opgeschaald beeld."),
    F("Gauge", "Geen haperingen", "Onderbrekingsvrije servers voor vloeiende weergave, zelfs op drukke momenten."),
    F("Sun", "HDR10 en Dolby Vision", "Ondersteuning van de nieuwste HDR-normen op compatibele apparaten."),
    F("Cpu", "Klaar voor de toekomst", "Voorbij 4K, ook klaar voor 8K op de nieuwste televisies en schermen."),
  ],
  landing: [
    F("Tv", "Een complete tv-ervaring", "31.000+ zenders, 140.000+ films & series en 4K/8K – alles in één abonnement."),
    F("Wallet", "Aanzienlijke besparing", "Tot 80% goedkoper dan een traditioneel kabelabonnement."),
    F("MonitorSmartphone", "Overal en altijd", "Kijk thuis op uw tv of onderweg op uw telefoon – waar u ook bent."),
    F("Gift", "Gratis proberen", "7 dagen gratis, u betaalt pas daarna – volkomen risicovrij."),
  ],
};

// ── Internal-link hubs per intent (all targets exist in IPTV_GERMAN_SLUGS) ────
const INTENT_LINKS: Record<PageIntent, RawSlug[]> = {
  general: ["iptv-deutschland", "iptv-abonnement", "iptv-smarters-pro", "iptv-box", "m3u-iptv", "iptv-illegal"],
  guide: ["iptv", "iptv-smarters-pro", "iptv-player", "m3u-iptv", "test-iptv", "iptv-illegal"],
  app: ["iptv-smarters-pro", "iptv-player", "smart-iptv", "iptv-box", "m3u-iptv", "iptv-abonnement"],
  device: ["iptv-box", "iptv-smarters-pro", "smart-iptv", "iptv-abonnement", "iptv-4k", "iptv-player"],
  subscription: ["iptv-abonnement", "iptv-deutschland", "iptv-4k", "test-iptv", "iptv-smarters-pro", "fournisseur-iptv"],
  provider: ["fournisseur-iptv", "meilleur-iptv", "iptv-abonnement", "iptv-deutschland", "test-iptv", "iptv-illegal"],
  legal: ["iptv-illegal", "iptv-amende", "iptv", "iptv-abonnement", "fournisseur-iptv", "test-iptv"],
  playlist: ["m3u-iptv", "iptv-player", "iptv-smarters-pro", "iptv-4k", "test-iptv", "iptv-abonnement"],
  quality: ["iptv-4k", "iptv-with-4k", "iptv-abonnement", "iptv-box", "iptv-deutschland", "iptv-smarters-pro"],
  landing: ["iptv-deutschland", "iptv-abonnement", "iptv-smarters-pro", "iptv-box", "iptv-4k", "test-iptv"],
};

// ── Section builders ─────────────────────────────────────────────────────────
const featuresSection = (profile: IntentProfile): PageSection => ({
  type: "features",
  heading: "Wat IPTV Compleet onderscheidt",
  subheading: profile.label,
  items: profile.features,
});

const howSection = (): PageSection => ({
  type: "howItWorks",
  heading: "In 4 stappen klaar",
  subheading: "Zo eenvoudig is het",
  steps: HOW_STEPS,
});

const pricingSection = (): PageSection => ({
  type: "pricing",
  heading: "Pakketten & prijzen",
  subheading: "Flexibel, eerlijk en zonder contract",
  tiers: PRICING_TIERS,
});

const comparisonSection = (): PageSection => ({
  type: "comparison",
  heading: "IPTV Compleet vergeleken",
  subheading: "Zo vergelijkt premium IPTV zich met alternatieven",
  columns: COMPARISON_COLUMNS,
  rows: COMPARISON_ROWS,
});

const devicesSection = (): PageSection => ({
  type: "devices",
  heading: "Op al uw apparaten",
  subheading: "Compatibel met de meest populaire platforms",
  list: DEVICE_CARDS,
});

const testimonialsSection = (): PageSection => ({
  type: "testimonials",
  heading: "Wat onze klanten zeggen",
  subheading: "Meer dan 12.000 tevreden kijkers",
  reviews: TESTIMONIAL_REVIEWS,
});

const channelSection = (): PageSection => ({
  type: "channelList",
  heading: "31.000+ zenders & 140.000+ VOD",
  subheading: "Een overzicht van het aanbod",
  categories: CHANNEL_CATEGORIES,
});

const ctaSection = (kw: string): PageSection => ({
  type: "cta",
  heading: `Klaar voor ${kw} zonder compromis?`,
  text: "Begin vandaag nog met IPTV Compleet – 31.000+ zenders, 4K/8K en volledige support op alle apparaten.",
  cta: { label: "7 dagen proberen", href: ORDER_HREF },
  variant: "primary",
});

const richIntro = (profile: IntentProfile, kw: string): PageSection => ({
  type: "richText",
  heading: `${kw} – het belangrijkste in een notendop`,
  html: profile.intro(kw),
});

const richDeep = (profile: IntentProfile, kw: string): PageSection => {
  const { heading, html } = profile.deepDive(kw);
  return { type: "richText", heading, html };
};

const whyChooseUsSection = (intent: PageIntent, _kw: string): PageSection => ({
  type: "features",
  heading: "Waarom kiezen voor IPTV Compleet?",
  subheading: INTENT_PROFILE[intent].label,
  items: WHY_CHOOSE_US_FEATURES[intent],
});

const iptvBenefitsSection = (intent: PageIntent, _kw: string): PageSection => ({
  type: "features",
  heading: "De voordelen van IPTV",
  subheading: INTENT_PROFILE[intent].label,
  items: IPTV_BENEFITS_FEATURES[intent],
});

/** Every page gets the full conversion-optimised section flow:
 *  richIntro → features → testimonials → whyChooseUs → iptvBenefits →
 *  devices → howItWorks → [intent-specific extras] → pricing → cta.
 *  No sections are removed from the original intent profiles — the extras
 *  (comparison, channelList, richDeep) are preserved after the core flow.
 */
const buildSectionsFor = (intent: PageIntent, kw: string): PageSection[] => {
  const p = INTENT_PROFILE[intent];

  // ── Core sections (every page gets these in a fixed order) ────────────────
  const sections: PageSection[] = [
    richIntro(p, kw),
    featuresSection(p),
    testimonialsSection(),
    whyChooseUsSection(intent, kw),
    iptvBenefitsSection(intent, kw),
    devicesSection(),
    howSection(),
  ];

  // ── Intent-specific extras (preserves all original differentiating content) ─
  switch (intent) {
    case "subscription":
      sections.push(comparisonSection(), pricingSection(), channelSection());
      break;
    case "landing":
      sections.push(comparisonSection(), channelSection(), pricingSection());
      break;
    case "provider":
      sections.push(comparisonSection(), pricingSection(), richDeep(p, kw));
      break;
    case "device":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "app":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "playlist":
      sections.push(richDeep(p, kw), pricingSection());
      break;
    case "quality":
      sections.push(comparisonSection(), pricingSection());
      break;
    case "legal":
      sections.push(richDeep(p, kw), comparisonSection(), pricingSection());
      break;
    case "guide":
      sections.push(richDeep(p, kw), comparisonSection(), pricingSection());
      break;
    case "general":
    default:
      sections.push(channelSection(), comparisonSection(), pricingSection());
      break;
  }

  // ── Always close with a CTA ──────────────────────────────────────────────
  sections.push(ctaSection(kw));

  return sections;
};

/** Base FAQs shared by every page, plus intent-specific extras (total ≥5). */
const buildFaqsFor = (intent: PageIntent, kw: string): PageFaq[] => {
  const base: PageFaq[] = [
    { question: `Wat heb ik nodig om ${kw} te gebruiken?`, answer: "U heeft een apparaat met internetverbinding nodig (Smart TV, Fire TV Stick, smartphone, box of PC), een stabiele verbinding (min. 16 Mbit/s voor Full HD, 25+ Mbit/s voor 4K) en een compatibele speler. U ontvangt uw inloggegevens direct per e-mail na uw bestelling." },
    { question: `Is ${kw} geschikt voor 4K- en 8K-streaming?`, answer: `Ja. Met voldoende bandbreedte en een krachtig apparaat werkt ${kw} in 4K en deels in 8K. Voor vaste installaties adviseren wij LAN/ethernet in plaats van wifi om onderbrekingen te voorkomen.` },
    { question: `Werkt ${kw} op alle apparaten?`, answer: "Meestal ja – Android, Android TV, Fire TV, Smart TV Samsung & LG, iPhone/iPad, MAG-box en Windows worden ondersteund. Het aantal gelijktijdige streams hangt af van het gekozen pakket." },
  ];
  return [...base, ...INTENT_PROFILE[intent].extraFaqs(kw)];
};

// These three root money pages must appear on every vault page to concentrate
// crawl authority. They are not in IPTV_GERMAN_SLUGS, so they are injected
// as explicit InternalLink objects rather than going through iptvPath().
const MONEY_PAGE_LINKS: InternalLink[] = [
  {
    label: "IPTV kopen",
    href: "/iptv-kopen",
    description: "IPTV in 4 stappen kopen: kies een pakket, betaal en stream binnen 5 minuten.",
  },
  {
    label: "IPTV-abonnement",
    href: "/iptv-abonnement",
    description: "Vergelijk alle IPTV-abonnementen met 31.000+ zenders en 4K-kwaliteit.",
  },
  {
    label: "IPTV-aanbieder",
    href: "/iptv-aanbieder",
    description: "Ontdek waarom IPTV Compleet de beste IPTV-aanbieder van Nederland is.",
  },
];

/** ≥4 contextual internal links — always includes the 3 root money pages. */
const buildLinksFor = (slug: string, intent: PageIntent): InternalLink[] => {
  const fallback: RawSlug[] = ["iptv", "iptv-deutschland", "iptv-smarters-pro", "iptv-box", "m3u-iptv"];
  const targets = [...INTENT_LINKS[intent], ...fallback]
    .filter((s, i, arr) => s !== slug && arr.indexOf(s) === i)
    .slice(0, 3);
  const vaultLinks: InternalLink[] = targets.map((target) => {
    const label = titleCase(formatKeyword(target));
    return {
      label,
      href: iptvPath(target),
      description: `Meer over ${label} in de IPTV Compleet-kennisbank.`,
    };
  });
  // Money pages first; deduplicate by href so vault links that resolve to the
  // same root path (e.g. iptv-abonnement → /iptv-abonnement) don't appear twice.
  const seen = new Set<string>();
  return [...MONEY_PAGE_LINKS, ...vaultLinks]
    .filter((l) => !seen.has(l.href) && seen.add(l.href) as unknown as boolean)
    .slice(0, 6);
};

// ── Per-page bespoke overrides for the highest-value pages ────────────────────
const PAGE_OVERRIDES: Partial<Record<RawSlug, Partial<IPTVPage>>> = {
  "iptv-abonnement": {
    metaTitle: "IPTV-abonnement Nederland vanaf 6,66 € | IPTV Compleet",
    metaDescription: "IPTV-abonnement Nederland: 31.000+ zenders, 140.000+ films & series in 4K/8K, zonder contract, direct actief. Probeer 7 dagen gratis!",
    hero: {
      headline: "IPTV-abonnement Nederland: herontdek televisie",
      subheadline: "31.000+ zenders, 140.000+ films & series in 4K/8K – zonder contract, direct geactiveerd en op elk apparaat.",
      cta: { label: "7 dagen proberen", href: ORDER_HREF },
      badgeTags: ["31.000+ zenders", "4K / 8K", "Zonder contract", "Direct actief"],
      background: "/images/abonnement-bg.webp",
    },
  },
  "abonnement-iptv": {
    metaTitle: "IPTV-abonnement kopen – Premium | IPTV Compleet",
    hero: {
      headline: "IPTV-abonnement: premium streaming voor Nederland",
      subheadline: "Flexibele pakketten vanaf 6,66 €/maand met 31.000+ zenders, 4K/8K en directe activatie – volledig zonder contract.",
      cta: { label: "7 dagen proberen", href: ORDER_HREF },
      badgeTags: ["Vanaf 6,66 €/maand", "Gratis proefperiode", "Zonder contract", "4K / 8K"],
      background: "/images/abonnement-bg.webp",
    },
  },
  "iptv-deutschland": {
    metaTitle: "Beste IPTV Nederland – 31.000+ zenders 4K | IPTV Compleet",
    metaDescription: "Beste IPTV in Nederland met alle Franse en Nederlandse zenders, 140.000+ VOD-titels in 4K/8K en EPG in het Nederlands. Zonder contract. Probeer 7 dagen gratis!",
  },
  iptv: {
    metaTitle: "Wat is IPTV? Gids voor stabiel streamen | IPTV Compleet",
    metaDescription: "IPTV eenvoudig uitgelegd: hoe tv via internet werkt – apparaten, installatie, veiligheid & 4K. Begrijp het en start met IPTV Compleet.",
  },
  "iptv-smarters-pro": {
    metaTitle: "IPTV Smarters Pro instellen (gids) | IPTV Compleet",
    metaDescription: "IPTV Smarters Pro installeren & instellen: M3U/Xtream, EPG, ondertiteling op alle apparaten. Stap-voor-stap gids van IPTV Compleet.",
  },
};

// ── Assemble one IPTVPage from a slug ────────────────────────────────────────
const buildIptvPage = (slug: RawSlug): IPTVPage => {
  const keyword = formatKeyword(slug);
  const kw = titleCase(keyword);
  const intent = detectIntentV2(slug);
  const profile = INTENT_PROFILE[intent];
  // Promoted slugs use their root-level canonical path (no /iptv-gids/ prefix)
  // so Google never indexes a 308 redirect page as canonical.
  const path = iptvPath(slug);
  const canonicalUrl = absoluteUrl(path);
  const lang: PageLanguage = "nl";

  const metaTitle = clamp(`${kw} | IPTV Compleet`, 60);

  const base: IPTVPage = {
    slug,
    keyword,
    lang,
    intent,
    hreflang: { nl: canonicalUrl },
    metaTitle,
    metaDescription: clamp(profile.metaDescription(kw), 155),
    canonicalUrl,
    ogImage: OG,
    structuredData: profile.structuredData,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "IPTV-gids", href: basePath },
      { label: kw, href: path },
    ],
    hero: {
      headline: profile.headline(kw),
      subheadline: profile.subheadline,
      cta: { label: profile.ctaLabel, href: ORDER_HREF },
      badgeTags: profile.badgeTags,
    },
    sections: buildSectionsFor(intent, kw),
    faq: buildFaqsFor(intent, kw),
    internalLinks: buildLinksFor(slug, intent),
    updatedAt: UPDATED_AT,
  };

  const override = PAGE_OVERRIDES[slug];
  if (!override) return base;
  return {
    ...base,
    ...override,
    hero: { ...base.hero, ...(override.hero ?? {}) },
  };
};

export const IPTV_GERMAN_PAGES_V2: IPTVPage[] = IPTV_GERMAN_SLUGS.map(buildIptvPage);

export const IPTV_GERMAN_PAGE_MAP_V2 = new Map(
  IPTV_GERMAN_PAGES_V2.map((page) => [page.slug, page]),
);

export const getIptvGermanPageV2 = (slug: string): IPTVPage | undefined =>
  IPTV_GERMAN_PAGE_MAP_V2.get(slug);
