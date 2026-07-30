import Link from "next/link";
import {
  ArrowRight,
  Check,
  MonitorPlay,
  Clapperboard,
  Trophy,
  Newspaper,
  Music,
  Baby,
  Globe2,
  type LucideIcon,
} from "lucide-react";

const highlights = [
  "31.000+ live zenders over de hele wereld",
  "140.000+ films en series op aanvraag",
  "TV-gids (EPG) inbegrepen op al uw schermen",
];

/**
 * Original, icon-based interface preview — deliberately NOT a screenshot or
 * stock photo. Do not replace with a third-party device/UI photo (press
 * images, stock photography of smart-TV home screens, etc.) without
 * confirming it contains no third-party logos, app icons, or title marks.
 */
const SCREEN_TILES: { label: string; icon: LucideIcon }[] = [
  { label: "Films & series", icon: Clapperboard },
  { label: "Live sport", icon: Trophy },
  { label: "Nieuws", icon: Newspaper },
  { label: "Muziek", icon: Music },
  { label: "Jeugdzenders", icon: Baby },
  { label: "Internationaal", icon: Globe2 },
];

const WatchEverywhere = () => {
  return (
    <section
      id="toute-la-tv"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 620px" }}
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-france-500/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — icon-based interface preview (no third-party screenshot/photo) */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[2.5rem] bg-france-600/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-blanc-50/10 bg-france-950 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rouge-500/70" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-blanc-50/20" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-blanc-50/20" aria-hidden="true" />
                <span className="ml-auto text-[10px] font-black uppercase tracking-[0.16em] text-blanc-500">
                  Categorie-overzicht
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {SCREEN_TILES.map((tile) => {
                  const Icon = tile.icon;
                  return (
                    <div
                      key={tile.label}
                      className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.05] p-3 text-center transition-colors hover:border-france-300/30 hover:bg-blanc-50/[0.08]"
                    >
                      <Icon size={26} className="text-france-300" aria-hidden="true" />
                      <span className="text-[11px] font-bold leading-tight text-blanc-200">
                        {tile.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hero-float-card absolute -bottom-5 -right-4 z-10 flex items-center gap-2.5 rounded-2xl border border-france-500/30 bg-france-950/90 px-4 py-3 backdrop-blur-md shadow-2xl sm:-right-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-france-500/15 text-france-400">
                <MonitorPlay size={18} aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-blanc-50">4K Ultra HD</p>
                <p className="text-[11px] text-blanc-400">Zonder onderbreking</p>
              </div>
            </div>
          </div>

          {/* Right — compact message + CTA, sized to match image height */}
          <div className="animate-slide-up">
            <span className="inline-block rounded-full glass px-3 py-1 text-xs font-bold uppercase tracking-wider text-france-400 glow-gold">
              Complete bibliotheek
            </span>
            <h2 className="mt-3 font-display text-2xl font-black leading-tight text-blanc-50 sm:text-3xl">
              Alle televisie die u zoekt, verzameld op{" "}
              <span className="text-gradient">een plek</span>
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-blanc-400">
              Op zoek naar een betrouwbaar IPTV-abonnement? Profiteer van de beste service bij de{" "}
              <Link
                href="/iptv-aanbieder"
                className="font-semibold text-france-400 hover:text-france-300 hover:underline"
              >
                IPTV-aanbieders
              </Link>{" "}
              voor een betaalbaar tarief, met een complete catalogus en een ingebouwde tv-gids,
              compatibel met al uw apparaten.
            </p>

            <ul className="mt-3.5 flex flex-wrap gap-2">
              {highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-1.5 rounded-full border border-blanc-50/10 bg-blanc-50/[0.04] px-3 py-1.5 text-xs font-semibold text-blanc-200"
                >
                  <Check size={12} strokeWidth={3} className="shrink-0 text-france-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <Link
                href="#pakketten"
                className="group btn-shine inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-rouge-500 px-7 py-3 text-sm font-bold text-blanc-50 shadow-[0_16px_44px_-12px_rgba(174,28,40,0.55)] transition-all hover:-translate-y-0.5 hover:bg-rouge-600 hover:shadow-[0_22px_56px_-12px_rgba(174,28,40,0.6)] active:translate-y-0 sm:w-auto"
              >
                Bestellen
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchEverywhere;
