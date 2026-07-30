import { CheckCircle2 } from "lucide-react";

const nlChannelGroups = [
  {
    category: "Franse zenders",
    channels: ["Algemene zenders HD", "Publieke zenders HD", "Film & series HD", "Amusement HD", "Cultuur HD", "Regionale zenders FR"],
    color: "text-france-400",
    border: "border-france-500/20",
    bg: "bg-france-500/5",
  },
  {
    category: "Nederlandse zenders",
    channels: ["Publieke zenders HD", "Commerciële zenders HD", "Amusement HD", "Familiezenders HD", "Lifestyle-zenders HD", "Regionale zenders NL"],
    color: "text-rouge-400",
    border: "border-rouge-500/20",
    bg: "bg-rouge-500/5",
  },
  {
    category: "Sport & nieuws",
    channels: ["Live sport HD", "Voetbal HD", "Autosport HD", "Nieuwszenders FR", "Internationaal nieuws", "24/7 nieuws"],
    color: "text-france-400",
    border: "border-france-500/20",
    bg: "bg-france-500/5",
  },
  {
    category: "Regionale TV (NL)",
    channels: ["Regionale zenders HD", "Lokaal nieuws", "Provinciale zenders", "Regionaal nieuws", "Regionale cultuur", "Regionale sport"],
    color: "text-rouge-400",
    border: "border-rouge-500/20",
    bg: "bg-rouge-500/5",
  },
];

export function IptvNederlandZenders() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/25"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 660px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            IPTV-zenders Nederland
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Alle{" "}
            <span className="text-gradient">Franse & Nederlandse zenders</span> via IPTV
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Met IPTV in Nederland bekijkt u alle Franse,
            Nederlandse, sport- en regionale zenders in HD- of 4K-kwaliteit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {nlChannelGroups.map((group, idx) => (
            <div
              key={idx}
              className={`animate-slide-up glass rounded-3xl p-6 border ${group.border} ${group.bg} transition-all duration-300`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <h3
                className={`font-display font-bold text-base mb-4 ${group.color} uppercase tracking-wider`}
              >
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.channels.map((ch) => (
                  <li
                    key={ch}
                    className="flex items-center gap-2 text-sm text-blanc-300"
                  >
                    <CheckCircle2
                      size={13}
                      className={`shrink-0 ${group.color}`}
                      aria-hidden="true"
                    />
                    {ch}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-blanc-500 text-sm font-medium mt-8">
          + <span className="text-blanc-300 font-bold">30.900+ overige zenders</span>{" "}
          uit meer dan 190 landen inbegrepen
        </p>
      </div>
    </section>
  );
}

const nlFaqs = [
  {
    q: "Welke zenders zijn beschikbaar via IPTV Nederland?",
    a: "Via IPTV in Nederland bekijkt u een breed assortiment van Franse zenders (algemeen, publiek, film), Nederlandse zenders (publiek, commercieel), sportzenders, nieuwszenders en regionale zenders. Alles in HD of 4K.",
  },
  {
    q: "Is IPTV beschikbaar in Nederland zonder vaste lijn?",
    a: "Ja. IPTV werkt via uw bestaande internetverbinding: glasvezel, kabel of zelfs mobiel 4G/5G. U heeft geen coaxkabel, schotel of monteur nodig. Aansluiten, configureren, kijken.",
  },
  {
    q: "Kijk ik live voetbal via IPTV Nederland?",
    a: "Onze IPTV-pakketten bevatten live sportzenders in HD en 4K, met uitgebreide voetbaldekking en grote competities. Beschikbare inhoud kan per regio verschillen. Kijk op mobiel, tablet en Smart TV.",
  },
];

export function IptvNederlandFaq() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 420px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
              IPTV Nederland — vragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Veelgestelde vragen over{" "}
              <span className="text-gradient">IPTV Nederland</span>
            </h2>
          </div>
          <div className="space-y-4">
            {nlFaqs.map((item, idx) => (
              <details
                key={idx}
                className="group glass rounded-2xl overflow-hidden border border-blanc-50/5 open:border-france-400/30 transition-all duration-300"
              >
                <summary className="list-none flex items-center justify-between p-5 cursor-pointer">
                  <span className="font-bold text-blanc-50 pr-4 text-sm">
                    {item.q}
                  </span>
                  <span className="text-france-400 text-xl shrink-0 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium px-5 pb-5">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
