import {
  Download,
  List,
  Play,
  Settings,
  Smartphone,
} from "lucide-react";

const smartersFeatures = [
  {
    title: "Ondersteuning voor M3U-playlists",
    desc: "IPTV Smarters Pro laadt direct elke M3U-link. Plak de URL van uw playlist en alle zenders verschijnen meteen, gesorteerd in de app.",
  },
  {
    title: "API Xtream Codes",
    desc: "Log in met uw gebruikersnaam, wachtwoord en het serveradres van IPTV Compleet. De app haalt automatisch uw zenders, VOD en EPG op.",
  },
  {
    title: "Live TV, VOD en series",
    desc: "Eén app voor alles: live zenders, films op aanvraag en series in aparte tabbladen. Wissel moeiteloos tussen inhoud.",
  },
  {
    title: "Elektronische programmagids (EPG)",
    desc: "IPTV Smarters Pro toont de volledige EPG-gids. Zie wat er nu en straks op elke zender wordt uitgezonden.",
  },
  {
    title: "Multi-scherm & ouderlijk toezicht",
    desc: "Maak meerdere profielen voor elk gezinslid, met eigen favorieten en ouderlijk toezicht per profiel.",
  },
  {
    title: "4K & HDR streaming",
    desc: "De app ondersteunt volledig 4K UHD- en HDR-inhoud. Koppel uw IPTV Compleet-account voor maximale beeldkwaliteit.",
  },
];

export function IptvSmartersAbout() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 680px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            De app uitgelegd
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Wat is{" "}
            <span className="text-gradient">IPTV Smarters Pro</span>?
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            IPTV Smarters Pro is een van de populairste IPTV-apps ter wereld.
            Het werkt perfect met uw IPTV Compleet-abonnement op Android, iOS, Fire TV Stick en meer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {smartersFeatures.map((item, idx) => (
            <div
              key={idx}
              className="animate-slide-up glass rounded-2xl p-6 border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 group"
              style={{ animationDelay: `${0.07 * idx}s` }}
            >
              <h3 className="font-display font-bold text-base mb-2 text-blanc-50">
                {item.title}
              </h3>
              <p className="text-blanc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const installSteps = [
  {
    step: "01",
    icon: Download,
    title: "Download IPTV Smarters Pro",
    desc: 'Zoek naar "IPTV Smarters Pro" op de Google Play Store, de Apple App Store of de Amazon Appstore. Download en installeer de gratis app op uw apparaat.',
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
  {
    step: "02",
    icon: Settings,
    title: "Kies uw verbindingsmethode",
    desc: 'Open de app en kies "Login with Xtream Codes API" voor de eenvoudigste configuratie, of "Add URL/M3U" als u een playlist-link van IPTV Compleet heeft ontvangen.',
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
  },
  {
    step: "03",
    icon: List,
    title: "Voer uw IPTV Compleet-inloggegevens in",
    desc: "Vul uw gebruikersnaam, wachtwoord en de server-URL in die u per e-mail heeft ontvangen na aankoop. Druk op Toevoegen — de app laadt uw zenders automatisch.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
  {
    step: "04",
    icon: Smartphone,
    title: "Stel uw voorkeuren in",
    desc: "Voeg uw favoriete zenders toe, configureer de EPG voor de programmagids en schakel ouderlijk toezicht in indien gewenst. De interface is in het Engels maar intuïtief.",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    border: "border-rouge-500/25",
  },
  {
    step: "05",
    icon: Play,
    title: "Begin met streamen",
    desc: "Selecteer Live TV, VOD of Series en kies een zender of film. IPTV Smarters Pro verbindt direct met de servers van IPTV Compleet voor een stabiele 4K-stream.",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    border: "border-france-500/25",
  },
];

export function IptvSmartersInstall() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-black/25"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 680px" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Stap voor stap
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-blanc-50">
            Installeer <span className="text-gradient">IPTV Smarters Pro</span> met
            IPTV Compleet
          </h2>
          <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
            Van download naar live TV in minder dan 5 minuten — volg deze
            eenvoudige stappen voor IPTV Smarters Pro.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-10 top-10 bottom-10 w-px bg-linear-to-b from-france-500/30 via-rouge-500/20 to-transparent"
          />

          <div className="space-y-6">
            {installSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="animate-slide-up glass rounded-3xl p-6 lg:p-7 border border-blanc-50/5 hover:border-france-400/20 transition-all duration-300 flex gap-5 lg:gap-7 items-start group"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  <div className="relative shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center border ${item.border} group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon
                        size={24}
                        className={item.color}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-france-500 text-blanc-50 text-[10px] font-black flex items-center justify-center shadow-md">
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2 text-blanc-50">
                      {item.title}
                    </h3>
                    <p className="text-blanc-400 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
