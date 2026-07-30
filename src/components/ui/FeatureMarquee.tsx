import {
  Trophy,
  Clapperboard,
  Tv,
  Globe2,
  Newspaper,
  Baby,
  Music,
  MonitorPlay,
  Radio,
  Clock,
  type LucideIcon,
} from "lucide-react";

/**
 * Original, first-party content-category ribbon.
 *
 * NOTE: This section intentionally uses generic content categories with
 * in-house icons and text — NOT third-party broadcaster, league, or
 * streaming-platform logos. Do not reintroduce trademarked logos here
 * without documented licensing/authorization from each rights holder.
 */
const CATEGORIES: { name: string; icon: LucideIcon }[] = [
  { name: "Live sport", icon: Trophy },
  { name: "Voetbal", icon: Trophy },
  { name: "Films & series", icon: Clapperboard },
  { name: "Nederlandse zenders", icon: Tv },
  { name: "Internationale zenders", icon: Tv },
  { name: "Wereldwijde zenders", icon: Globe2 },
  { name: "24/7 nieuws", icon: Newspaper },
  { name: "Kinderzenders", icon: Baby },
  { name: "Muziek", icon: Music },
  { name: "Documentaires", icon: MonitorPlay },
  { name: "Premium 4K zenders", icon: Radio },
  { name: "Terugkijken & VOD", icon: Clock },
];

const MARQUEE_ITEMS = [...CATEGORIES, ...CATEGORIES];

const FeatureMarquee = () => {
  return (
    <section
      className="relative overflow-hidden border-y border-blanc-50/10 bg-france-950/70 py-6"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 92px" }}
      aria-label="Inhoudscategorieën"
    >
      <div className="absolute inset-0 bg-linear-to-r from-france-500/10 via-transparent to-emerald-300/5" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-france-300/15 bg-france-300/10 blur-[1px]" />
      <div className="absolute inset-y-0 left-0 w-20 sm:w-56 pointer-events-none z-10 bg-linear-to-r from-france-950 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-56 pointer-events-none z-10 bg-linear-to-l from-france-950 to-transparent" />

      <div className="feature-logo-track feature-logo-ribbon relative flex items-center gap-4 py-5 will-change-transform sm:gap-6">
        {MARQUEE_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${index}`}
              className="feature-logo-card group relative flex h-20 w-44 shrink-0 items-center justify-center gap-3 overflow-hidden rounded-[1.35rem] border border-blanc-50/10 bg-blanc-50/[0.08] px-4 shadow-[0_20px_50px_-32px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-france-300/40 hover:bg-blanc-50/[0.11] sm:h-24 sm:w-56"
            >
              <div className="absolute inset-x-3 top-0 h-px bg-linear-to-r from-transparent via-france-300/30 to-transparent" />
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-france-300/20 bg-france-500/15 text-france-300 transition-transform duration-300 group-hover:scale-110">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-bold leading-tight text-blanc-100">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureMarquee;