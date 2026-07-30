import type { SixteenSectionContent } from "./types";

const LINK = {
  kopen: { label: "Koop IPTV", href: "/iptv-kopen", description: "Koop direct een IPTV met een veilige betaling en activering in 5 minuten." },
  abonnement: { label: "IPTV Abonnement", href: "/iptv-abonnement", description: "Vergelijk alle IPTV-abonnementen met flexibele looptijden en 4K-kwaliteit." },
  aanbieder: { label: "IPTV Aanbieder", href: "/iptv-aanbieder", description: "Ontdek waarom IPTV Compleet de beste IPTV-aanbieder van Nederland is." },
  nederland: { label: "IPTV Nederland", href: "/iptv-nederland", description: "Alle Franse en Nederlandse zenders, voetbal en live sport in 4K." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "Configureer IPTV Smarters Pro met M3U of Xtream Codes — stap voor stap." },
};

const home: SixteenSectionContent = {
  slug: "",
  path: "/",
  meta: {
    title: "IPTV Compleet – Het Beste IPTV-abonnement van Nederland",
    description: "Kies de beste IPTV-aanbieder. IPTV Compleet biedt 31.000+ zenders en VOD in 4K. Een betrouwbare IPTV-service zonder onderbreking. Begin nu!",
    h1: "IPTV Compleet Nederland – Het premium IPTV-abonnement",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Compleet · Premium streaming",
    title: "De premium IPTV-service voor Nederland en België",
    subtitle: "Wilt u een betrouwbare IPTV kopen? Duizenden kijkers kiezen elke dag onze stabiele IPTV-service. Geniet van alle zenders en 4K-kwaliteit op elk apparaat.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Start de gratis proefperiode",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Bekijk de pakketten",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "tevreden kijkers", value: "10.000+" },
      { label: "live zenders", value: "31.000+" },
      { label: "films & series", value: "140.000+" },
      { label: "streaming kwaliteit", value: "99,9%" },
      { label: "Google beoordeling", value: "4,9/5" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Herkenbaar?",
    title: "Genoeg van de frustraties met uw huidige tv-aanbieder",
    subtitle: "U bent niet de enige die vastzit aan traditionele televisie. Dit zijn de meest voorkomende ergernissen.",
    pains: [
      { title: "Te hoge maandkosten", desc: "U betaalt 50 tot 80 euro per maand voor een standaard tv-pakket, maar kijkt maar een fractie van de zenders. En de prijzen stijgen elk jaar." },
      { title: "Vaste jaarcontracten", desc: "U zit vast aan lange contracten met dure opzegboetes. Bij een verhuizing of veranderende behoeften kost u dat veel." },
      { title: "Beperkt zenderaanbod", desc: "De zenders die u graag wilt zien ontbreken. Sport, internationale zenders of films zijn vaak niet beschikbaar of tegen meerprijs." },
      { title: "Onderbrekingen en haperingen", desc: "Tijdens een spannende wedstrijd of uw favoriete serie valt het beeld weg of blijft het laden. De ergernis is groot." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "De oplossing",
    title: "IPTV Nederland: meer zenders, goedkoper",
    subtitle: "Wij lossen al uw tv-frustraties op met onze premium IPTV-service. Geen contract, geen onderbreking, maar de ervaring van de beste IPTV-aanbieder.",
    points: [
      { title: "Betaal minder dan de helft", desc: "Voor een fractie van de kabeltelevisieprijs krijgt u duizenden zenders, films en series in 4K. Al vanaf een paar euro per maand." },
      { title: "Zonder contract, volledige vrijheid", desc: "Geen jaarcontract en geen opzegboete. Uw abonnement stopt wanneer u wilt. U bent volledig vrij." },
      { title: "Alles inbegrepen, geen extra kosten", desc: "Sport, films, 4K, Franse en Nederlandse zenders en internationale zenders — alles in één abonnement zonder verborgen kosten." },
      { title: "Stabiele 4K-streams zonder onderbreking", desc: "Onze servers nabij Nederland bieden een vloeiend beeld, zelfs op piekmomenten. Geen haperingen meer tijdens uw favoriete programma." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Wat u krijgt",
    title: "Een premium IPTV met unieke voordelen",
    subtitle: " Elk abonnement bevat deze kenmerken — zonder extra kosten.",
    features: [
      { title: "4K & 8K Ultra HD", desc: "Een ultrahelder beeld met HDR. Stream films, sport en series in de hoogste resolutie, zonder haperingen." },
      { title: "Zero onderbrekingen gegarandeerd", desc: "Adaptieve streaming-technologie past de kwaliteit automatisch aan uw verbinding aan. Geen onderbrekingen tijdens sport of films." },
      { title: "Alle Franse & NL zenders", desc: "Een ruime keuze aan Franse zenders (generalistisch, publiek, cinema, cultuur) en Nederlandse zenders (publiek, commercieel, sport) en regionale zenders, in HD en 4K." },
      { title: "Werkt op elk apparaat", desc: "Smart TV, Fire TV Stick, Android TV, Apple TV, iPhone, iPad, Windows, Mac en MAG-box. Één abonnement, al uw schermen." },
      { title: "Volledige VOD-bibliotheek", desc: "140.000+ films en series op aanvraag, met ondertiteling. Altijd iets nieuws te ontdekken, zonder extra kosten." },
      { title: "Gratis proefperiode", desc: "Test de volledige service een uur gratis — zonder creditcard of risico. Ontdek waarom IPTV Compleet de beste keuze is." },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Waarom IPTV Compleet",
    title: "Waarom wij de beste IPTV-aanbieder zijn",
    subtitle: "Als toonaangevende IPTV-aanbieder voor IPTV in Nederland doen wij het anders. Dit is wat het verschil maakt.",
    reasons: [
      { title: "Onze eigen servers nabij Nederland", desc: "Geen gedeelde buitenlandse infrastructuur. Onze servers bevinden zich in Nederland en België voor de laagste latentie, de snelste zenderwisselingen en maximale stabiliteit." },
      { title: "Nederlandstalige support, 24/7", desc: "Geen chatbots of gebrekkig Engels. Ons team is dag en nacht bereikbaar via WhatsApp met een responstijd van minder dan 5 minuten. Door mensen, niet door robots." },
      { title: "Altijd up-to-date en compleet", desc: "Duizenden zenders uit meer dan 190 landen, elke dag bijgewerkt. Nieuwe zenders en VOD worden continu toegevoegd, zonder enige actie van uw kant." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Om te beginnen",
    title: "Begin in 3 stappen met streamen",
    subtitle: "Van ontdekking naar kijken in minder dan 10 minuten. Geen installatiekosten of technische kennis vereist.",
    steps: [
      { step: "01", title: "Vraag een gratis proefperiode aan", desc: "Neem contact op via WhatsApp en ontvang direct een uur gratis proefperiode. Test alle zenders, beeldkwaliteit en stabiliteit op uw eigen apparaat." },
      { step: "02", title: "Kies uw ideale abonnement", desc: "Selecteer de looptijd en het aantal verbindingen. Hoe langer de looptijd, hoe lager de maandprijs — zonder verborgen kosten." },
      { step: "03", title: "Stream onbeperkt in 4K", desc: "Na betaling ontvangt u binnen 5 minuten uw M3U-link en Xtream Codes. Voer ze in uw IPTV-app in en stream direct duizenden zenders." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Overal te gebruiken",
    title: "Werkt op vrijwel elk apparaat",
    subtitle: "Of u nu een Smart TV, telefoon, tablet of computer gebruikt — ons IPTV-abonnement werkt op al uw apparaten.",
    deviceGroups: [
      { name: "Smart TV", items: ["Samsung Smart TV", "LG webOS", "Sony Android TV", "Philips Android TV", "Panasonic", "Hisense", "TCL"] },
      { name: "Streaming-apparaten", items: ["Amazon Fire TV Stick", "Chromecast with Google TV", "Nvidia Shield", "Apple TV 4K", "Roku", "Formuler Z11"] },
      { name: "Mobiel & tablet", items: ["iPhone", "iPad", "Samsung Galaxy", "Google Pixel", "Huawei", "OnePlus", "Xiaomi"] },
      { name: "Computer", items: ["PC Windows", "MacBook & iMac", "Linux", "VLC Media Player", "IPTV Smarters Pro", "TiviMate"] },
    ],
    ctaText: "Bekijk de volledige lijst",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Het aanbod",
    title: "31.000+ zenders uit meer dan 190 landen",
    subtitle: "Van de beste Franse en Nederlandse zenders tot internationale sport — alle premium zenders op één plek.",
    channelGroups: [
      { name: "Frans & NL aanbod", items: ["Franse generalistische zenders", "Film- en cultuurzenders", "Nederlandse publieke zenders", "Nederlandse commerciële zenders", "Sportzenders", "Regionale zenders", "Muziek- en entertainmentzenders"] },
      { name: "Live sport", items: ["Voetbal", "Europese competities", "Autosport", "Motorsport", "Vechtsporten", "Basketbal & Amerikaanse sport", "Tennis"] },
      { name: "Internationale zenders", items: ["Internationale nieuwskanalen", "Film & documentaires", "Jeugdzenders", "Duitse, Spaanse zenders", "Arabische & Turkse zenders", "Afrikaanse & Aziatische zenders"] },
      { name: "Films & series (VOD)", items: ["Nieuwste bioscoopfilms", "Exclusieve originals", "Volledige series-boxsets", "Top 250 IMDb", "Documentaires", "Jeugdfilms"] },
    ],
  },

  // ── Section 10: Pricing (uses existing component) ─────────────────────────
  pricing: {
    pillText: "Onze tarieven",
    title: "Kies het IPTV-abonnement dat bij u past",
    subtitle: "Hoe langer de looptijd, hoe voordeliger uw IPTV-abonnement. Alle pakketten van onze IPTV-service bevatten sport, 4K en Franse en Nederlandse zenders.",
  },

  // ── Section 11: Comparison vs Competitors ────────────────────────────────
  comparison: {
    eyebrow: "Vergelijking",
    title: "IPTV Compleet vs. traditionele tv-aanbieders",
    subtitle: "Zelfs op onze sterkste punten doen we beter. Dit is waarom steeds meer huishoudens de overstap maken.",
    rows: [
      { feature: "Maandprijs", us: "Vanaf €7,99/maand", them: "€50 - €80/maand" },
      { feature: "Aantal zenders", us: "31.000+", them: "50 - 100" },
      { feature: "4K & 8K kwaliteit", us: "Standaard inbegrepen", them: "Niet beschikbaar of extra" },
      { feature: "VOD-bibliotheek", us: "140.000+ titels", them: "Beperkt of afwezig" },
      { feature: "Jaarcontract", us: "Niet vereist", them: "Verplicht 1-2 jaar" },
      { feature: "Opzegboete", us: "Geen", them: "Tot €150" },
      { feature: "Internationale zenders", us: "190+ landen", them: "Alleen lokaal" },
      { feature: "24/7 support", us: "Nederlandstalig", them: "Beperkt / Engels" },
      { feature: "Gratis proefperiode", us: "Ja, 1 uur", them: "Nee" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Wat klanten zeggen",
    title: "4,9/5 op Google — beoordeeld door duizenden",
    subtitle: "Onze klanten beoordelen ons als de best beoordeelde IPTV-aanbieder in Nederland.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Veilig & betrouwbaar",
    title: "Uw privacy en stabiliteit zijn onze prioriteit",
    subtitle: "Wij nemen beveiliging en betrouwbaarheid serieus — zonder uitzondering.",
    items: [
      { title: "SSL-versleutelde betalingen", desc: "Alle transacties lopen via beveiligde verbindingen met erkende betalingspartners als Mollie en Stripe. Uw betaalgegevens worden nooit opgeslagen." },
      { title: "99,9% serverbeschikbaarheid", desc: "Onze servers worden 24/7 gemonitord met redundante systemen. Storingen worden automatisch gedetecteerd en binnen enkele seconden omgeleid." },
      { title: "Privacy by design", desc: "Wij passen strikte privacy-normen toe en delen uw gegevens nooit met derden. Uw kijkgedrag wordt niet gevolgd of verkocht." },
      { title: "Anti-freeze technologie", desc: "Slimme loadbalancing houdt de streams vloeiend, zelfs op piekmomenten. Speciaal ontwikkeld voor de Nederlandse markt." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen over IPTV Compleet",
    subtitle: "Alles wat u moet weten over onze service.",
    faqs: [
      {
        question: "Wat is IPTV Compleet precies?",
        answer: "IPTV Compleet is een premium IPTV-service die live televisie, sport, films en series streamt via uw internetverbinding. Geen kabel of schotel. U streamt op elk apparaat duizenden zenders in 4K, tegen een vast maandbedrag zonder jaarcontract."
      },
      {
        question: "Wat onderscheidt IPTV Compleet van anderen?",
        answer: "Wij onderscheiden ons door een eigen serverinfrastructuur nabij Nederland, Nederlandstalige 24/7 support (zonder chatbots), een dagelijks bijgewerkt zenderaanbod en een tevreden-of-geld-terug-garantie. Onze beoordeling van 4,9/5 op Google bevestigt onze kwaliteit."
      },
      {
        question: "Op welke apparaten werkt IPTV Compleet?",
        answer: "Op vrijwel elk modern apparaat: Samsung, LG en Sony Smart TV's, Amazon Fire TV Stick, Android TV-boxen, Apple TV, iPhone, iPad, Android-telefoons, Windows- en Mac-computers, en MAG/Formuler-boxen. Uw abonnement werkt op meerdere apparaten."
      },
      {
        question: "Kan ik gratis testen voordat ik een abonnement neem?",
        answer: "Ja, u ontvangt een uur gratis proefperiode met volledige toegang tot alle zenders, sport en de VOD-bibliotheek. Vraag uw proefperiode aan via WhatsApp en oordeel zelf over de kwaliteit op uw eigen apparaat — zonder risico."
      },
      {
        question: "Welke Franse, Nederlandse en sportzenders kan ik kijken?",
        answer: "Een ruime keuze aan populaire Franse zenders (generalistisch, publiek, cinema) en Nederlandse zenders (publiek, commercieel, sport) en regionale zenders. Daarnaast voetbal, autosport, basketbal, tennis en meer — in HD en 4K. Het beschikbare aanbod kan per regio variëren."
      },
      {
        question: "Is IPTV Compleet veilig en betrouwbaar?",
        answer: "Absoluut. Wij hanteren de hoogste beveiligingsnormen met SSL-versleutelde betalingen en strikte privacyregels. Onze servers hebben een beschikbaarheid van 99,9% en worden 24/7 gemonitord. Uw gegevens worden nooit gedeeld met derden."
      },
      {
        question: "Welke betaalmethoden worden geaccepteerd?",
        answer: "U kunt veilig betalen met iDEAL, creditcard (Visa, Mastercard) en PayPal. Alle betalingen lopen via een beveiligde en versleutelde omgeving. Na ontvangst wordt uw account binnen enkele minuten geactiveerd."
      },
      {
        question: "Kan ik mijn abonnement opzeggen of wijzigen?",
        answer: "Ja, u kunt op elk moment upgraden naar meer verbindingen of een langere looptijd. Opzeggen is eenvoudig via ons supportteam — zonder kosten of boetes. Uw service blijft actief tot het einde van de betaalde periode."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Ontdek meer",
    title: "Alles over IPTV in Nederland",
    subtitle: "Verdiep u in de verschillende aspecten van onze service.",
    links: [LINK.kopen, LINK.abonnement, LINK.aanbieder, LINK.nederland, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Begin vandaag nog met IPTV Compleet",
    description: "Sluit u aan bij duizenden tevreden kijkers in Nederland. Krijg direct toegang tot alle zenders, sport en films — of begin met een gratis proefperiode.",
  },
};

export default home;
