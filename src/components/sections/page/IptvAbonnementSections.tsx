import { MonitorPlay, Tv, Users } from "lucide-react";

const profiles = [
  {
    icon: Tv,
    type: "Individueel",
    subtitle: "1 verbinding · 1 apparaat",
    description:
      "U kijkt alleen en heeft één TV of één apparaat. Het basis IPTV-abonnement met 1 gelijktijdige verbinding volstaat. U heeft toegang tot 31.000+ zenders en de volledige VOD-bibliotheek.",
    highlight: "Geschikt voor studenten en alleenstaanden",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    glow: "hover:border-france-400/35",
  },
  {
    icon: Users,
    type: "Gezin",
    subtitle: "2–4 verbindingen · meerdere apparaten",
    description:
      "Thuis kijken meerdere personen tegelijk op verschillende apparaten. Kies een IPTV-abonnement met 2 tot 4 gelijktijdige verbindingen zodat iedereen zonder onderbreking zijn favoriete programma's kan kijken.",
    highlight: "Het meest gekozen IPTV-abonnement",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
    glow: "hover:border-rouge-400/35",
  },
  {
    icon: MonitorPlay,
    type: "Sport & Premium",
    subtitle: "Alle zenders · 4K-kwaliteit",
    description:
      "U wilt geen enkele wedstrijd missen en kijkt in 4K Ultra HD. Onze IPTV-abonnementen bevatten een breed aanbod aan live sportzenders, met uitgebreide voetbaldekking en grote competities.",
    highlight: "Voor sport- en filmliefhebbers",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
    glow: "hover:border-france-400/35",
  },
];

export function IptvAbonnementProfiles() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 640px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Welk abonnement past bij u?
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Kies het juiste{" "}
            <span className="text-gradient">IPTV-abonnement</span>
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Elk IPTV-abonnement bevat alle zenders. Het enige verschil
            is het aantal apparaten dat u tegelijk kunt gebruiken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <div
                key={idx}
                className={`animate-slide-up glass rounded-3xl p-8 group border border-blanc-50/5 ${profile.glow} transition-all duration-300 flex flex-col`}
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${profile.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg border ${profile.border}`}
                >
                  <Icon
                    size={24}
                    className={profile.color}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-1 text-blanc-50">
                  {profile.type}
                </h3>
                <p className="text-xs font-black uppercase tracking-wider text-blanc-500 mb-4">
                  {profile.subtitle}
                </p>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium flex-1 mb-5">
                  {profile.description}
                </p>
                <span
                  className={`inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border ${profile.border} bg-linear-to-br ${profile.gradient} ${profile.color}`}
                >
                  {profile.highlight}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const abonnementFaqs = [
  {
    q: "Wat is inbegrepen in elk IPTV-abonnement?",
    a: " Elk IPTV-abonnement van IPTV Compleet bevat 31.000+ live zenders, 140.000+ films en series op aanvraag, een EPG-gids, catch-up TV, 4K Ultra HD-streams en ondersteuning voor alle IPTV-apps. Geen verborgen kosten voor sport of extra zenders.",
  },
  {
    q: "Kan ik mijn IPTV-abonnement op elk moment opzeggen?",
    a: "Ja. Er is geen vast contract. U kiest de looptijd en kunt stoppen of verlengen bij afloop. Lopende abonnementen blijven actief tot het einde van de betaalde periode. Geen opzegkosten, geen ingewikkelde procedures.",
  },
  {
    q: "Hoe lang duurt het voordat mijn IPTV-abonnement actief is?",
    a: "Na betaling ontvangt u uw inloggegevens binnen 5 minuten per e-mail. Geen handmatige activering nodig. Voer de gegevens in uw IPTV-app in en u kijkt meteen — dag en nacht, inclusief weekenden.",
  },
];

export function IptvAbonnementFaq() {
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
              IPTV-abonnement — vragen
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-blanc-50">
              Vragen over uw{" "}
              <span className="text-gradient">IPTV-abonnement</span>
            </h2>
          </div>
          <div className="space-y-4">
            {abonnementFaqs.map((item, idx) => (
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
