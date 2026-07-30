import type { SixteenSectionContent } from "./types";

const LINK = {
  home: { label: "Home IPTV Compleet", href: "/", description: "Het beste IPTV-abonnement van Nederland met 31.000+ zenders en 4K." },
  kopen: { label: "IPTV kopen", href: "/iptv-kopen", description: "Koop een IPTV-voorziening met directe activatie en gratis proefperiode." },
  abonnement: { label: "IPTV-abonnement", href: "/iptv-abonnement", description: "Vergelijk IPTV-abonnementen met flexibele looptijden." },
  aanbieder: { label: "IPTV-aanbieder", href: "/iptv-aanbieder", description: "Vergelijk IPTV-aanbieders en ontdek de beste keuze." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "Installatiegids voor IPTV Smarters Pro op al uw apparaten." },
};

const nederland: SixteenSectionContent = {
  slug: "iptv-nederland",
  path: "/iptv-nederland",
  meta: {
    title: "IPTV Nederland ✓ Complete Gids voor Zenders & Sport 2026",
    description: "IPTV Nederland: alle Franse en Nederlandse zenders, voetbal, autosport en live sport in 4K. De beste IPTV met 31.000+ zenders. Gratis proefperiode.",
    h1: "IPTV Nederland – de complete gids voor alle zenders en sport",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Nederland · Compleet zenderaanbod",
    title: "IPTV Nederland: het beste van TV, sport en films",
    subtitle: "U zoekt een IPTV-voorziening met een compleet aanbod van Franse en Nederlandse zenders, voetbal en alle sportzenders? Bij IPTV Compleet krijgt u alles in 4K.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Bekijk het aanbod",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Start de gratis proefperiode",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "Franse & NL zenders", value: "200+" },
      { label: "Nederlandstalig supportteam", value: "24/7" },
      { label: "Serverlocatie", value: "Nederland" },
      { label: "Tevreden klanten", value: "10.000+" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Wat er ontbreekt",
    title: "Waarom kijkers in Nederland teleurgesteld zijn in hun huidige TV",
    subtitle: "U wilt gewoon al uw favoriete zenders kijken, zonder gedoe. Maar uw huidige aanbieder maakt het duur en ingewikkeld.",
    pains: [
      { title: "IPTV Nederland: internationale zenders slecht beschikbaar", desc: "Traditionele tv-aanbieders bieden vaak internationale zenders die ontbreken of van slechte kwaliteit zijn. De grote landelijke en filmzenders zijn niet beschikbaar of in lage resolutie." },
      { title: "IPTV Nederland: voetbal en sport duur", desc: "Via de traditionele weg betaalt u tientallen euro's extra voor sportzenders. Een duur sportpakket bovenop uw basisabonnement." },
      { title: "IPTV Nederland: geen Nederlandstalige ondersteuning", desc: "Bij problemen moet u uw Engels erbij pakken of wachten op een eindeloze e-mailwisseling. Geen Nederlandstalige klantenservice die u snel begrijpt." },
      { title: "IPTV Nederland: geen NL-zenders in het buitenland", desc: "Op reis of in het buitenland kunt u vaak uw favoriete Nederlandse en regionale zenders niet ontvangen." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "De oplossing voor heel Nederland",
    title: "IPTV Nederland bij IPTV Compleet — al uw zenders op één plek",
    subtitle: "Voor heel Nederland en België. Ontvang alle Nederlandse, Belgische, Franse en regionale zenders zonder gedoe.",
    points: [
      { title: "IPTV Nederland: FR & NL zenders — alles compleet", desc: "Compleet pakket: Franse landelijke, publieke, film- en sportzenders, evenals Nederlandse publieke, commerciële en regionale zenders." },
      { title: "IPTV Nederland: voetbal en sport in 4K", desc: "Voetbal, autosport, motorsport, basketbal en meer — een ruime keuze aan sportzenders inbegrepen bij uw abonnement. Geen extra sportpakket nodig." },
      { title: "IPTV Nederland: Nederlandstalige ondersteuning door echte adviseurs", desc: "Ons team spreekt Nederlands en begrijpt uw vragen. Bereikbaar via WhatsApp met een maximale responstijd van 5 minuten." },
      { title: "IPTV Nederland: uw zenders overal ter wereld", desc: "Op vakantie of op reis? Met IPTV ontvangt u overal ter wereld uw Nederlandse en internationale zenders. Een simpele internetverbinding volstaat." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Het aanbod in detail",
    title: "IPTV Nederland: functies bedacht voor Nederlandse kijkers",
    subtitle: "Onze dienst is speciaal ontworpen voor kijkers in Nederland en België.",
    features: [
      { title: "IPTV Nederland: compleet programma-overzicht (EPG)", desc: "Een elektronisch programma-overzicht met tijden, beschrijvingen en genres. Wilt u weten wat er op uw favoriete zenders is? Het staat in het overzicht." },
      { title: "IPTV Nederland: catch-up TV", desc: "Een aflevering van Jinek of het NOS Journaal gemist? Met catch-up bekijkt u programma's tot 7 dagen terug. Voor al uw zenders." },
      { title: "IPTV Nederland: Nederlandse ondertitels", desc: "Al onze VOD-inhoud en een selectie van live-zenders bieden Nederlandse ondertitels. Films, series en documentaires met ondertitels." },
      { title: "IPTV Nederland: sportstream in 4K", desc: "Voetbal, autosport, motorsport en grote kampioenschappen in Ultra HD. Speciaal geoptimaliseerd voor sportliefhebbers." },
      { title: "IPTV Nederland: alle Nederlandse regionale zenders", desc: "Alle regionale zenders: Omroep Brabant, RTV Oost, Omroep Gelderland, RTV Noord, Omrop Fryslân, L1, RTV Rijnmond, Omroep West, NH Nieuws, Omroep Zeeland en meer." },
      { title: "IPTV Nederland: themazenders", desc: "Nederlandse en internationale themazenders: film, eten, comedy, muziek en meer. Ontdek nieuwe favoriete zenders." },
    ],
  },

  // ── Section 6: Why Us ────────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Waarom wij kiezen?",
    title: "Daarom is IPTV Compleet de beste keuze voor IPTV in Nederland",
    subtitle: "Onze dienst is speciaal geoptimaliseerd voor de Nederlandse en Belgische markt.",
    reasons: [
      { title: "IPTV Nederland: nabijgelegen servers voor vlotte streaming", desc: "Onze servers staan in Amsterdam en België. De verbinding is ultrasnel, zenders starten direct en storingen behoren tot het verleden. Optimale ondersteuning voor Nederlandse internetproviders." },
      { title: "IPTV Nederland: alles in het Nederlands", desc: "Website in het Nederlands, ondersteuning in het Nederlands, programma-overzicht in het Nederlands. Geen vertalingen of internationaal gedoe. Wij spreken uw taal." },
      { title: "IPTV Nederland: vertrouwd met de Nederlandse TV-cultuur", desc: "Wij weten wat voor kijkers in Nederland belangrijk is: voetbal, grote sportevenementen, Nederlandse programma's en internationale sport — alles in hoge kwaliteit." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Aan de slag",
    title: "IPTV Nederland: kijk IPTV in Nederland in 3 stappen",
    subtitle: "Van aanmelding tot het streamen van uw favoriete zenders.",
    steps: [
      { step: "01", title: "IPTV Nederland: kies een pakket", desc: "Selecteer het aantal verbindingen en de gewenste looptijd. Alle pakketten bevatten het volledige aanbod van Franse en Nederlandse zenders en alle sport zonder extra kosten." },
      { step: "02", title: "IPTV Nederland: installeer op uw apparaat", desc: "Download IPTV Smarters Pro, TiviMate of VLC op uw TV, telefoon of tablet. Voer uw M3U-link of Xtream Codes in en de zenders verschijnen." },
      { step: "03", title: "IPTV Nederland: kijk TV in 4K", desc: "Schakel direct over naar uw favoriete Franse, Nederlandse of regionale zenders. Geniet van een scherp beeld en vloeiende streams — waar u ook bent." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Veelgebruikte apparaten",
    title: "IPTV Nederland: werkt op alle veelgebruikte apparaten in Nederland",
    subtitle: "Onze dienst is getest en geoptimaliseerd voor de populairste apparaten in Nederlandse huishoudens.",
    deviceGroups: [
      { name: "Populaire Smart TV's in NL", items: ["Samsung (marktleider NL)", "LG OLED", "Philips Ambilight TV", "Sony Bravia", "Panasonic", "Hisense"] },
      { name: "Meest gebruikt in Nederland", items: ["Ziggo Mediabox Next", "Amazon Fire TV Stick", "Google Chromecast", "Apple TV 4K", "Nvidia Shield", "Formuler Z11"] },
      { name: "Mobiel in Nederland", items: ["Samsung Galaxy S-serie", "iPhone", "OnePlus", "Motorola", "Fairphone", "iPad"] },
      { name: "IPTV-applicaties", items: ["IPTV Smarters Pro", "TiviMate", "VLC Media Player", "Kodi", "GSE Smart IPTV", "IPTX"] },
    ],
    ctaText: "Installatiegidsen voor elk apparaat",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Het zenderaanbod",
    title: "IPTV Nederland: het complete aanbod van Franse en Nederlandse zenders",
    subtitle: "IPTV Nederland: alle zenders die u verwacht — en nog veel meer.",
    channelGroups: [
      { name: "Franse zenders", items: ["Landelijke zenders HD", "Publieke zenders HD", "Filmzenders HD", "Amusementszenders HD", "Cultuurzenders HD", "Jeugdzenders HD", "Muziekzenders HD"] },
      { name: "Nederlandse zenders", items: ["Publieke zenders HD", "Commerciële zenders HD", "Amusementszenders HD", "Familiezenders HD", "Lifestylezenders HD", "Regionale zenders HD", "Muziekzenders HD"] },
      { name: "Live sport", items: ["Voetbal", "Internationale sport", "Grote kampioenschappen", "Autosport", "Motorsport", "Vechtsporten", "Tennis", "Basketbal"] },
      { name: "Regionaal & thematisch", items: ["Regionale NL-zenders", "Lokaal nieuws", "Provinciale zenders", "Regionaal nieuws", "Eten & lifestyle", "Muziek", "Comedy"] },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Prijzen",
    title: "IPTV Nederland — kies uw pakket",
    subtitle: "Bekijk de prijzen. Alle Franse en Nederlandse zenders, sport en films inbegrepen. Geen verborgen kosten.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Vergelijking",
    title: "IPTV Compleet versus traditionele Nederlandse TV-aanbieders",
    subtitle: "Ziggo, KPN en T-Mobile versus IPTV Compleet — de verschillen zijn groot.",
    rows: [
      { feature: "Basismaandbedrag", us: "Vanaf €7,99/maand", them: "€55 - €80/maand" },
      { feature: "Franse & NL zenders", us: "200+ in HD/4K", them: "50-60 in HD" },
      { feature: "Voetbal & kampioenschappen", us: "Inbegrepen", them: "Sportpakket +€15-30" },
      { feature: "4K-beeldkwaliteit", us: "Standaard", them: "Beperkte HD" },
      { feature: "Regionale zenders", us: "Alle 13", them: "Alleen digitale TV" },
      { feature: "Snelheid zender wisselen", us: "<1 seconde", them: "1-3 seconden" },
      { feature: "Opzegtermijn", us: "Geen", them: "1 maand + boete" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Ervaringen",
    title: "Wat kijkers in Nederland zeggen over IPTV Nederland",
    subtitle: "Duizenden kijkers hebben hun ervaring gedeeld.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Beveiliging",
    title: "IPTV Nederland: veilig IPTV kijken bij ons",
    subtitle: "Wij voldoen aan de hoogste Nederlandse en Europese beveiligingsnormen.",
    items: [
      { title: "IPTV Nederland: privacywetgeving (AVG/GDPR)", desc: "Wij voldoen aan de Algemene Verordening Gegevensbescherming. Uw persoonsgegevens worden verwerkt volgens de Nederlandse en Europese wetgeving." },
      { title: "IPTV Nederland: servers in Nederland", desc: "Onze servers staan fysiek in Amsterdam. Uw gegevens blijven in Nederland en vallen onder Nederlands recht. Maximale privacy en controle." },
      { title: "IPTV Nederland: Nederlandse betalingsprovider", desc: "Wij werken met Mollie en iDEAL — beiden Nederlands. U betaalt veilig via uw eigen bank, precies zoals u gewend bent." },
      { title: "IPTV Nederland: klachtenservice volgens NL-normen", desc: "Bij een klacht hanteren we dezelfde procedure als Nederlandse telecomaanbieders. Duidelijke afhandeling, vaste contactpersonen en escalatiemogelijkheden." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Veelgestelde vragen over IPTV in Nederland",
    subtitle: "IPTV Nederland: de meest gestelde vragen van kijkers.",
    faqs: [
      {
        question: "Wat is IPTV in Nederland precies?",
        answer: "IPTV (Internet Protocol Television) is televisie via uw internetverbinding in plaats van via kabel of satelliet. U streamt live TV, sport en films direct op uw apparaat. Voor IPTV in Nederland heeft u alleen een internetabonnement en een compatibel apparaat nodig."
      },
      {
        question: "Welke zenders kan ik ontvangen met IPTV in Nederland?",
        answer: "Bij IPTV Compleet krijgt u een ruime keuze aan Franse zenders (landelijke, publieke, film, sport) en Nederlandse zenders (publieke, commerciële, sport), evenals regionale zenders, in HD en 4K."
      },
      {
        question: "Kan ik live voetbal kijken met IPTV?",
        answer: "Ja, een ruime keuze aan live sportzenders is inbegrepen bij uw abonnement, met uitgebreide voetbaldekking en grote kampioenschappen. Autosport, motorsport, basketbal en vele andere sporten zijn ook beschikbaar in 4K. Het beschikbare aanbod kan per regio verschillen."
      },
      {
        question: "Is IPTV legaal in Nederland?",
        answer: "IPTV is een technologie voor televisie-uitzending via internet. De rechtmatigheid van een dienst hangt af van de juiste uitzendrechten. Wij raden u aan altijd een dienst te kiezen die over de vereiste rechten beschikt en de lokale regelgeving te controleren die op uw situatie van toepassing is."
      },
      {
        question: "Heb ik een speciale internetverbinding nodig voor IPTV?",
        answer: "Een standaard Nederlands internetabonnement van minimaal 25 Mbps volstaat voor HD-streams. Voor 4K raden we 50 Mbps of meer aan. De meeste huishoudens hebben meer dan voldoende snelheid. Onze adaptieve bitrate past zich aan uw verbinding aan."
      },
      {
        question: "Werkt IPTV Nederland ook in het buitenland?",
        answer: "Ja, u kunt uw Franse en Nederlandse zenders overal ter wereld bekijken zolang u een internetverbinding heeft. Ideaal voor vakanties. Sport- en regionale zenders zijn ook wereldwijd beschikbaar."
      },
      {
        question: "Hoe installeer ik IPTV op mijn Samsung of LG TV?",
        answer: "Op Samsung en LG Smart TV's installeert u eenvoudig de IPTV Smarters Pro-app via de app store. Voer vervolgens uw M3U-link en Xtream Codes in. Uw zenders worden automatisch geladen met het programma-overzicht. Stap-voor-stap gidsen zijn beschikbaar."
      },
      {
        question: "Kan ik TV kijken zonder schotel of kabel?",
        answer: "Ja, dat is precies wat IPTV mogelijk maakt. U heeft geen schotel, geen kabelaansluiting en geen coaxkabel nodig. Alleen een internetverbinding en een compatibel apparaat. Dit bespaart installatiekosten en maakt TV-kijken overal mogelijk."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Meer over IPTV",
    title: "IPTV Nederland: verdiep u met onze andere pagina's",
    subtitle: "Lees alles over IPTV, speciaal voor kijkers in Nederland en België.",
    links: [LINK.home, LINK.kopen, LINK.abonnement, LINK.aanbieder, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Bekijk uw zenders zoals het hoort — in 4K en zonder gedoe",
    description: "Sluit u aan bij duizenden kijkers. Alle zenders, alle sport, alles inbegrepen. Zonder jaarcontract of verborgen kosten.",
  },
};

export default nederland;
