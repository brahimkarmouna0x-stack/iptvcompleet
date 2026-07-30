import {
  Clapperboard,
  Film,
  Baby,
  Popcorn,
  Sparkles,
  Globe2,
  Tv,
  type LucideIcon,
} from "lucide-react";

/**
 * Original "content categories" showcase.
 *
 * NOTE: This section previously displayed third-party streaming-platform
 * logos (Netflix, Disney+, HBO Max, Prime Video, Videoland, BBC, Apple TV)
 * labelled "Streaming via IPTV". Those trademarks were removed — the site
 * has no licensing or partnership with those services and must not imply
 * one. Use generic content categories with in-house icons only. Do not
 * reintroduce third-party brand logos without documented authorization.
 */
const CATEGORIES: {
  name: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { name: "Nieuwste films", label: "Films op aanvraag", icon: Popcorn },
  { name: "Populaire series", label: "Volledige seizoenen", icon: Clapperboard },
  { name: "Grote klassiekers", label: "Filmtheek", icon: Film },
  { name: "Documentaires", label: "Natuur, wetenschap & geschiedenis", icon: Tv },
  { name: "Kinderzenders", label: "Gezinsinhoud", icon: Baby },
  { name: "Internationale inhoud", label: "190+ landen", icon: Globe2 },
  { name: "Premium selectie", label: "4K Ultra HD", icon: Sparkles },
];

const LOOP_CATEGORIES = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

const Partners = () => {
  return (
    <section
      className="relative isolate overflow-hidden py-18 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 550px" }}
    >
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-france-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex rounded-full border border-france-300/20 bg-france-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-france-100">
            VOD-bibliotheek
          </span>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight text-blanc-50 sm:text-6xl">
            Series & <span className="text-gradient">Films</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-blanc-300 sm:text-lg">
            Een uitgebreide bibliotheek van films en series op aanvraag, gecategoriseerd
            per genre, in HD- en 4K-kwaliteit.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-blanc-800/20 bg-blanc-50/[0.045] px-3 py-7 shadow-[0_24px_80px_-48px_rgba(34,211,238,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-5 sm:py-9">
          <div className="animate-marquee mask-fade-edges flex w-fit items-center gap-4 py-3 will-change-transform sm:gap-6">
            {LOOP_CATEGORIES.map((category, index) => {
              const Icon = category.icon;
              return (
                <article
                  key={`${category.name}-${index}`}
                  className="group relative flex h-40 w-36 shrink-0 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-blanc-800/20 bg-france-950/85 p-4 shadow-[0_20px_55px_-38px_rgba(15,23,42,1)] transition-colors hover:border-france-300/40 hover:bg-france-950 sm:h-48 sm:w-44 sm:p-5 before:content-[''] before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/25 before:to-transparent"
                  aria-hidden={index >= CATEGORIES.length}
                >
                  <div className="flex h-24 items-center justify-center rounded-2xl border border-blanc-800/20 bg-blanc-50/[0.06] px-4 sm:h-28">
                    <Icon
                      size={44}
                      className="text-france-300 drop-shadow-[0_12px_26px_rgba(0,0,0,0.35)] transition duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold tracking-tight text-blanc-50 sm:text-base">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-france-100/65">
                      {category.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;