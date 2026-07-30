import { Clapperboard, Globe2, Trophy, Tv } from "lucide-react";

const highlights = [
  {
    icon: Tv,
    eyebrow: "31.000+ zenders",
    title: "Live televisie",
    description:
      "Alle Nederlandse en Franse zenders, regionale tv en honderden internationale nieuwskanalen — live en zonder vertraging.",
    bullets: ["NL algemene zenders", "Film & cultuur zenders", "NL publieke & prive zenders"],
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/25",
    glow: "hover:border-france-400/35",
    badge: "bg-france-500/15 text-france-300 border-france-500/20",
  },
  {
    icon: Clapperboard,
    eyebrow: "140.000+ titels",
    title: "Films & series",
    description:
      "Een uitgebreide videobibliotheek met de nieuwste blockbusters, klassiekers en series om te bingewatchen in 4K HDR.",
    bullets: ["Nieuwste releases", "Populaire series", "Documentaires & animatie"],
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/25",
    glow: "hover:border-rouge-400/35",
    badge: "bg-rouge-500/15 text-rouge-300 border-rouge-500/20",
  },
  {
    icon: Trophy,
    eyebrow: "Alle grote competities",
    title: "Sport & evenementen",
    description:
      "Van voetbal tot grote Europese competities, autosport, tennis en meer — mis geen enkele wedstrijd.",
    bullets: ["Live voetbal", "Autosport", "Tennis & wielrennen"],
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/25",
    glow: "hover:border-france-400/35",
    badge: "bg-france-500/15 text-france-300 border-france-500/20",
  },
  {
    icon: Globe2,
    eyebrow: "190+ landen",
    title: "Internationale zenders",
    description:
      "Kijk naar Arabische, Turkse, Marokkaanse, Engelse en tientallen andere internationale zenders — alles in één abonnement.",
    bullets: ["Arabisch & Turks", "Marokkaans & Frans", "VK, VS & meer"],
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/25",
    glow: "hover:border-rouge-400/35",
    badge: "bg-rouge-500/15 text-rouge-300 border-rouge-500/20",
  },
];

const ContentHighlights = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 bg-france-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Uw entertainment
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Alles wat u wilt kijken,{" "}
            <span className="text-gradient">op één plek</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Van live nieuws tot blockbusters, van sportevenementen tot
            internationale zenders — IPTV Compleet heeft alles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 ${item.glow} transition-all duration-300 flex flex-col`}
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg border ${item.border}`}
                >
                  <Icon size={24} className={item.color} aria-hidden="true" />
                </div>

                <span
                  className={`inline-block self-start text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border mb-3 ${item.badge}`}
                >
                  {item.eyebrow}
                </span>

                <h3 className="font-display font-bold text-xl mb-3 text-blanc-50">
                  {item.title}
                </h3>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium mb-5 flex-1">
                  {item.description}
                </p>

                <ul className="space-y-1.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-blanc-300 text-sm"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.color.replace("text-", "bg-")}`}
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentHighlights;
