import { BadgeCheck, Globe2, Headphones, Server, ShieldCheck, Zap } from "lucide-react";

const criteria = [
  {
    icon: Server,
    title: "Stabiele servers met hoge beschikbaarheid",
    desc: "Een goede IPTV-aanbieder werkt op een professionele serverinfrastructuur met ten minste 99,5% beschikbaarheid. IPTV Compleet garandeert 99,9% dankzij een redundante datacenterarchitectuur.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: Globe2,
    title: "Een uitgebreid en actueel zenderaanbod",
    desc: "De beste IPTV-aanbieder in Nederland biedt meer dan 31.000 zenders, waaronder alle Franse en Nederlandse zenders, internationale sport en regionale zenders — een aanbod dat dagelijks wordt bijgewerkt.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    icon: Headphones,
    title: "Nederlandstalige klantenservice",
    desc: "Een betrouwbare IPTV-aanbieder in Nederland biedt ondersteuning in het Nederlands, via WhatsApp of chat, met een korte responstijd. Geen Engelse scripts of dagenlang wachten.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Veilig en transparant betalen",
    desc: "Betrouwbare IPTV-aanbieders accepteren iDEAL, PayPal of creditcard via een beveiligde verbinding. Geen ondoorzichtige betaalmiddelen, geen crypto- of overschrijvingsverplichtingen.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
  {
    icon: Zap,
    title: "4K-kwaliteit zonder onderbreking",
    desc: "Een premium IPTV-aanbieder levert echte 4K UHD-streams met adaptieve bitrate. Geen kwaliteitsverlies bij drukte — zelfs niet tijdens grote voetbalwedstrijden of autoraces.",
    color: "text-france-400",
    gradient: "from-france-600/25 to-france-400/10",
    border: "border-france-500/20",
  },
  {
    icon: BadgeCheck,
    title: "Risicovrije gratis proefperiode",
    desc: "De beste IPTV-aanbieders ondersteunen hun dienst met een gratis proefperiode. Test alle zenders en functies voordat u betaalt — een serieuze aanbieder vreest geen eerlijke beoordeling.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/25 to-rouge-500/10",
    border: "border-rouge-500/20",
  },
];

export function IptvAanbiederCriteria() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 700px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Beoordeel uw aanbieder
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            6 criteria voor de beste{" "}
            <span className="text-gradient">IPTV-aanbieder</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Gebruik deze criteria om IPTV-aanbieders te vergelijken en de meest
            betrouwbare keuze te maken voor uw situatie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-slide-up glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border ${item.border}`}
                >
                  <Icon size={22} className={item.color} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-blanc-50">
                  {item.title}
                </h3>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const aanbiederFaqs = [
  {
    q: "Hoe kies ik de beste IPTV-aanbieder in Nederland?",
    a: "Vergelijk IPTV-aanbieders op beschikbaarheid (minimaal 99%), zenderaanbod (31.000+), klantenservice (Nederlandstalig, snel) en veilig betalen. Test altijd eerst via een gratis proefperiode. IPTV Compleet is het beste op alle criteria.",
  },
  {
    q: "Wat maakt IPTV Compleet beter dan andere aanbieders?",
    a: "IPTV Compleet combineert het grootste zenderaanbod (31.000+), 4K-kwaliteit, 99,9% beschikbaarheid en 24/7 WhatsApp-ondersteuning in het Nederlands — alles tegen een competitieve prijs. Geen andere aanbieder biedt dit volledige pakket.",
  },
  {
    q: "Is IPTV Compleet een legale IPTV-aanbieder?",
    a: "IPTV Compleet levert een technische streamingdienst. Raadpleeg de toepasselijke lokale wetgeving voor uw situatie. Ons platform is technisch ontworpen om gebruikers de beste kijkervaring te bieden.",
  },
];

export function IptvAanbiederFaq() {
  return (
    <section
      className="py-16 relative overflow-hidden bg-black/20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 420px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
              IPTV-aanbieder — vragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Vragen over de{" "}
              <span className="text-gradient">IPTV-aanbieder</span>
            </h2>
          </div>
          <div className="space-y-4">
            {aanbiederFaqs.map((item, idx) => (
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
