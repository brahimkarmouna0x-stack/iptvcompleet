import {
  Award,
  ChevronDown,
  Globe2,
  Headphones,
  MessageCircle,
  MonitorPlay,
  Server,
  ShieldCheck,
  Sparkles,
  Tv,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { faqSchema } from "@/lib/structured-data";

/**
 * The four brand SEO sections required for the nl-NL homepage:
 *   1. Waarom kiezen voor IPTV Compleet in Nederland ?
 *   2. De functies van ons IPTV Premium-abonnement
 *   3. Veelgestelde vragen over ons IPTV-abonnement  (+ FAQPage JSON-LD)
 *   4. Waarom kijkers in Nederland en België voor ons kiezen ?
 *
 * Reuses the existing design system (glass cards, france/rouge palette,
 * gradient headings) so the visual identity stays unchanged.
 */

const whyChoose = [
  {
    icon: Tv,
    title: "Meer dan 31.000 zenders in 4K",
    description:
      "Franse, Nederlandse en internationale zenders, films en series in 4K en Full HD — het meest complete aanbod van Nederland in één abonnement.",
  },
  {
    icon: Zap,
    title: "Directe activering",
    description:
      "Ontvang uw inloggegevens via e-mail enkele minuten na betaling. Geen monteur, geen schotel, geen wachttijd.",
  },
  {
    icon: Server,
    title: "Snelle & stabiele servers",
    description:
      "Een infrastructuur met hoge beschikbaarheid nabij Nederland garandeert een vloeiende 4K-stream zonder onderbreking, zelfs tijdens grote sportevenementen.",
  },
  {
    icon: Headphones,
    title: "Nederlandstalige ondersteuning 24/7",
    description:
      "Ons team beantwoordt uw vragen dag en nacht via WhatsApp, met een gemiddelde responstijd van minder dan 5 minuten.",
  },
  {
    icon: Wallet,
    title: "Zonder verplichtingen",
    description:
      "Geen vast contract en geen verborgen kosten. Kies de looptijd die bij u past en stop wanneer u wilt.",
  },
  {
    icon: ShieldCheck,
    title: "100% veilige betaling",
    description:
      "Betaal via een versleutelde verbinding met iDEAL, creditcard of PayPal. Uw gegevens zijn te allen tijde beschermd.",
  },
];

const features = [
  {
    icon: MonitorPlay,
    title: "Kwaliteit 4K, Full HD & HDR",
    description:
      "Een scherp en gedetailleerd beeld op elk apparaat, met automatische aanpassing van de bitrate om onderbrekingen te voorkomen.",
  },
  {
    icon: Globe2,
    title: "Zenders uit meer dan 190 landen",
    description:
      "Franse, Arabische, Turkse, Marokkaanse, Engelse en internationale zenders op één plek.",
  },
  {
    icon: Sparkles,
    title: "Films & series op aanvraag",
    description:
      "Meer dan 140.000 VOD-titels, van de nieuwste releases tot de klassiekers, beschikbaar wanneer u maar wilt.",
  },
  {
    icon: Users,
    title: "Tot 4 apparaten tegelijk",
    description:
      "Het hele gezin kijkt tegelijk op Smart TV, smartphone, tablet, box of computer, zonder onderbreking.",
  },
  {
    icon: Award,
    title: "Gids voor programma's (EPG) & catch-up",
    description:
      "Een volledige EPG en TV replay om gemakkelijk uw favoriete programma's terug te vinden.",
  },
  {
    icon: Zap,
    title: "Compatibel met alle IPTV-apps",
    description:
      "IPTV Smarters Pro, TiviMate, VLC en nog veel meer, via Xtream Codes of M3U-playlist.",
  },
];

const faqs = [
  {
    question: "Wat is inbegrepen in het IPTV-abonnement van IPTV Compleet?",
    answer:
      "Elk abonnement bevat meer dan 31.000 live zenders, 140.000+ films en series op aanvraag, 4K/Full HD-kwaliteit, een volledige-programmagids en sport- en internationale zenders — zonder verborgen kosten.",
  },
  {
    question: "Is de activering echt direct?",
    answer:
      "Ja. Na uw betaling ontvangt u uw inloggegevens en activatielink via e-mail enkele minuten. U kunt dezelfde avond nog beginnen met kijken.",
  },
  {
    question: "Op welke apparaten kan ik kijken?",
    answer:
      "Op Smart TV (Samsung, LG, Sony), smartphones en tablets Android/iOS, Amazon Fire TV Stick, Android TV-box, Windows- en Mac-computers, en populaire IPTV-applicaties zoals IPTV Smarters Pro, TiviMate en VLC.",
  },
  {
    question: "Is er een gratis proefperiode?",
    answer:
      "Ja, we bieden een gratis proefperiode om de kwaliteit en stabiliteit te testen voordat u uw abonnement kiest. Neem contact op met ons team via WhatsApp om ervan te profiteren.",
  },
  {
    question: "Is IPTV Compleet ook beschikbaar in België?",
    answer:
      "Ja. Naast Nederland leveren we ook aan Belgische kijkers: dezelfde 31.000+ zenders, inclusief Vlaamse en Franstalige Belgische zenders, met dezelfde Nederlandstalige klantenservice en 4K-kwaliteit.",
  },
  {
    question: "Kan ik op elk moment opzeggen?",
    answer:
      "Ja. Er zijn geen verplichtingen en geen opzegkosten. Uw service blijft actief tot het einde van uw huidige periode.",
  },
];

const nlBeReasons = [
  {
    icon: Globe2,
    title: "Alle Nederlandse & Belgische zenders",
    description:
      "Publieke, commerciële en regionale zenders uit Nederland én België op één plek — vind uw vertrouwde tv terug, waar u ook bent.",
  },
  {
    icon: MessageCircle,
    title: "100% Nederlandstalige service",
    description:
      "Interface, installatiehandleidingen en klantenservice volledig in het Nederlands, voor een soepele ervaring zonder taalbarrière.",
  },
  {
    icon: ShieldCheck,
    title: "Betrouwbaarheid en transparantie",
    description:
      "Stabiele servers, duidelijke prijzen en een gratis proefperiode: de gemoedsrust die kijkers in Nederland en België verwachten.",
  },
];

function Eyebrow({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "red";
}) {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full glass text-sm font-bold mb-4 uppercase tracking-wider ${
        tone === "red" ? "text-rouge-400 glow-red" : "text-france-400 glow-gold"
      }`}
    >
      {children}
    </span>
  );
}

function IconCard({
  Icon,
  title,
  description,
}: {
  Icon: typeof Tv;
  title: string;
  description: string;
}) {
  return (
    <div className="glass rounded-3xl p-7 group border border-blanc-50/5 hover:border-france-400/25 transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-france-600/25 to-france-400/10 flex items-center justify-center mb-5 border border-france-500/20 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon size={24} className="text-france-400" aria-hidden="true" />
      </div>
      <h3 className="font-display font-bold text-lg mb-3 text-blanc-50">
        {title}
      </h3>
      <p className="text-blanc-400 text-sm leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}

const SeoSections = () => {
  return (
    <>
      {/* FAQPage structured data for the section-3 questions (rich result) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── 1 — Waarom kiezen ─────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 760px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Eyebrow>De nr. 1 keuze in Nederland</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-blanc-50">
              Waarom kiezen voor{" "}
              <span className="text-gradient">IPTV Compleet</span> in Nederland&nbsp;?
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
              Een compleet premium IPTV-abonnement voor Nederland: meer zenders,
              betere kwaliteit en Nederlandstalige service, voor een eerlijke prijs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <IconCard
                key={item.title}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2 — Functies ──────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden bg-black/20"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 760px" }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Eyebrow tone="red">Premium functies</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-blanc-50">
              De functies van ons{" "}
              <span className="text-gradient">IPTV Premium-abonnement</span>
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
              Alles wat u nodig heeft voor een complete, vloeiende
              streamingervaring zonder compromissen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <IconCard
                key={item.title}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 — FAQ ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 680px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-blanc-50">
              Veelgestelde vragen over ons{" "}
              <span className="text-gradient">IPTV-abonnement</span>
            </h2>
            <p className="text-blanc-400 font-medium">
              De antwoorden op de meest gestelde vragen van onze abonnees in Nederland.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group animate-slide-up glass rounded-2xl overflow-hidden border border-blanc-50/5 transition-all duration-300 open:border-france-400/30 open:glow-gold"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <summary className="list-none w-full flex items-center justify-between p-6 text-left cursor-pointer">
                  <span className="font-bold text-blanc-50 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="text-france-400 transition-transform duration-300 shrink-0 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="text-blanc-400 text-sm leading-relaxed font-medium px-6 pb-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 — Waarom Nederland en België voor ons kiezen ───────────────── */}
      <section
        className="py-24 relative overflow-hidden bg-black/20"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 620px" }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blanc-50/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Eyebrow tone="red">Nederland &amp; België</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-blanc-50">
              Waarom kijkers in Nederland en België{" "}
              <span className="text-gradient">voor ons kiezen</span>&nbsp;?
            </h2>
            <p className="text-blanc-400 max-w-2xl mx-auto font-medium">
              Een compleet IPTV-pakket, Nederlandstalige service en de betrouwbaarheid
              die kijkers in Nederland en België verwachten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nlBeReasons.map((item) => (
              <IconCard
                key={item.title}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoSections;
