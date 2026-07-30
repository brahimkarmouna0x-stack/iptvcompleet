import type { SixteenSectionContent } from "./types";

const LINK = {
  home: { label: "IPTV Compleet", href: "/", description: "Het beste IPTV-abonnement van Nederland met 31.000+ zenders en 4K-kwaliteit." },
  abonnement: { label: "IPTV-abonnement", href: "/iptv-abonnement", description: "Ontdek alle IPTV-abonnementsvormen met een eenvoudige vergelijking." },
  aanbieder: { label: "IPTV-aanbieder", href: "/iptv-aanbieder", description: "Ontdek waarom IPTV Compleet de beste IPTV-aanbieder van Nederland is." },
  nederland: { label: "IPTV Nederland", href: "/iptv-nederland", description: "De complete gids voor IPTV in Nederland met alle zenders en sport." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "Configureer IPTV Smarters Pro eenvoudig met M3U- en Xtream Codes-koppelingen." },
};

const iptvKopen: SixteenSectionContent = {
  slug: "iptv-kopen",
  path: "/iptv-kopen",
  meta: {
    title: "IPTV kopen ✓ Betrouwbare IPTV-aankoopgids 2026",
    description: "IPTV kopen? Vergelijk de beste aanbieders, prijzen en pakketten in Nederland. Onmiddellijke activatie, 31.000+ zenders, 4K-kwaliteit en gratis proefperiode. Begin vandaag nog.",
    h1: "IPTV kopen in Nederland – Uw complete aankoopgids",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV kopen · Betrouwbaar & snel",
    title: "IPTV kopen in Nederland – waar moet u op letten?",
    subtitle: "U overweegt IPTV te kopen? Lees onze gids met aandachtspunten, valkuilen en tips voor de beste keuze. U vindt hier alles voor een veilige aankoop.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Vergelijk pakketten",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Vraag gratis proefperiode aan",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "beschikbare pakketten", value: "2+ maanden" },
      { label: "actieve klanten", value: "10.000+" },
      { label: "tevredenheidsscore", value: "4,9/5" },
      { label: "gratis proefperiode", value: "1 uur" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Valkuilen bij het kopen van IPTV",
    title: "Vermijd deze fouten bij het kopen van IPTV",
    subtitle: "Elk jaar lopen duizenden mensen tegen dezelfde problemen aan bij het kopen van IPTV. Herkent u deze situaties?",
    pains: [
      { title: "Onbetrouwbare aanbieders", desc: "Als u een goedkoop IPTV-pakket koopt bij een onbekende aanbieder, kan de dienst na een week stoppen. Uw geld is weg en u zit zonder televisie." },
      { title: "Onverwachte extra kosten", desc: "Wat een aantrekkelijk aanbod lijkt, wordt achteraf duurder. Verborgen kosten voor betaling, activatie of bepaalde zenders drijven de prijs op." },
      { title: "Slechte beeldkwaliteit en instabiliteit", desc: "Goedkope IPTV-diensten gebruiken overbelaste servers die zenders laten haperen, vastlopen of in lage resolutie weergeven. Vooral tijdens sportevenementen en piekuren." },
      { title: "Geen Nederlandse klantenservice", desc: "Bij problemen staat u er alleen voor. Buitenlandse aanbieders bieden geen Nederlandstalige ondersteuning en reageren traag op storingen — of helemaal niet." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "IPTV-aankoopgids",
    title: "IPTV-aankoopgids: hoe herkent u een betrouwbare IPTV-aanbieder",
    subtitle: "Met onze IPTV-aankoopgids voorkomt u teleurstellingen en kiest u met een gerust hart.",
    points: [
      { title: "Bekijk beoordelingen en reviews", desc: "Een betrouwbare aanbieder heeft positieve, verifieerbare beoordelingen op Google en Trustpilot. Vertrouw niet alleen op hun eigen website; zoek naar onafhankelijke reviews." },
      { title: "Vraag een gratis proefperiode aan", desc: "Serieuze aanbieders bieden een risicovrije proefperiode. Test de beeldkwaliteit, stabiliteit en het zenderaanbod voordat u betaalt." },
      { title: "Let op de betaalmethoden", desc: "Betrouwbare aanbieders bieden iDEAL, creditcard of PayPal. Vermijd aanbieders die alleen cryptocurrency of ongebruikelijke methoden accepteren." },
      { title: "Controleer de Nederlandse klantenservice", desc: "Een aanbieder met een eigen Nederlandstalige klantenservice en korte responstijden (bijv. via WhatsApp) is een teken van betrouwbaarheid bij problemen." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Streamingskwaliteit",
    title: "IPTV kopen: streamingskwaliteit en essentiële functies",
    subtitle: "Wanneer u besluit IPTV te kopen, zijn deze functies essentieel voor de beste ervaring.",
    features: [
      { title: "4K Ultra HD-beeldkwaliteit", desc: "Een moderne IPTV-dienst biedt minimaal HD, maar bij voorkeur 4K UHD, of zelfs 8K. Vraag altijd naar de maximale resolutie voor sport en films." },
      { title: "Adaptieve bitrate voor stabiliteit", desc: "Deze technologie past de kwaliteit automatisch aan uw internetverbinding aan. Geen onderbrekingen meer tijdens wedstrijden, zelfs niet tijdens piekuren." },
      { title: "Elektronische programmagids (EPG)", desc: "Een complete gids met informatie over elke zender. U ziet wat er nu en later wordt uitgezonden, met filteropties op genre." },
      { title: "M3U- & Xtream Codes-ondersteuning", desc: "Het pakket moet M3U-koppelingen en Xtream Codes bieden voor eenvoudig gebruik in apps zoals TiviMate, IPTV Smarters Pro, VLC en Perfect Player." },
      { title: "Multi-apparaten en meerdere kamers", desc: "Een abonnement met meerdere verbindingen om op verschillende apparaten en in verschillende kamers tegelijk te kijken, zonder extra apparatuur." },
      { title: "Catch-up en timeshift", desc: "Met catch-up kunt u gemiste programma's terugkijken. Timeshift pauzeert en spoelt live-tv terug. Essentieel voor actieve huishoudens." },
    ],
  },

  // ── Section 6: Why Us ────────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Voordelen",
    title: "De voordelen van IPTV kopen bij IPTV Compleet",
    subtitle: "Onze track record spreekt voor zich. Ontdek de voordelen van IPTV kopen bij ons.",
    reasons: [
      { title: "Niet goed, geld terug", desc: "Niet tevreden met uw aankoop? U krijgt zonder gedoe uw geld terug. We staan achter onze kwaliteit met een eerlijke garantie die u bij bijna geen enkele andere aanbieder vindt." },
      { title: "Onmiddellijke activatie na betaling", desc: "Geen uren wachten op een e-mail. Na betaling ontvangt u binnen 5 minuten uw inloggegevens, uw M3U-koppeling en een stap-voor-stap gids. U begint direct." },
      { title: "Geen verborgen kosten", desc: "Wat u ziet is wat u betaalt. Geen activatiekosten, verzendkosten of toeslagen voor sport of 4K. Het weergegeven bedrag is het enige dat u betaalt." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Installatie",
    title: "Installatie: IPTV kopen in 3 stappen en direct genieten",
    subtitle: "De installatie na het kopen van IPTV duurt minder dan 10 minuten.",
    steps: [
      { step: "01", title: "Kies uw pakket", desc: "Bekijk de verschillende abonnementen op basis van de gewenste duur en het aantal gelijktijdige verbindingen. Hoe langer de duur, hoe voordeliger de maandprijs." },
      { step: "02", title: "Betaal veilig", desc: "Betaal eenvoudig en veilig met iDEAL, creditcard of PayPal. Uw betaling wordt direct verwerkt via een beveiligde SSL-omgeving. U ontvangt daarna direct uw inloggegevens." },
      { step: "03", title: "Installeer en stream", desc: "Volg de duidelijke handleiding of onze installatietips per apparaat. Binnen enkele minuten kijkt u op al uw apparaten naar duizenden zenders in 4K." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Apparaten & compatibiliteit",
    title: "Compatibiliteit: op welke apparaten kunt u IPTV gebruiken?",
    subtitle: "Onze dienst is getest op alle gangbare apparaten. Controleer de compatibiliteit voordat u IPTV koopt.",
    deviceGroups: [
      { name: "Smart TV", items: ["Samsung Smart Hub", "LG webOS TV", "Sony Bravia (Android TV)", "Philips Ambilight", "Panasonic VIERA", "Hisense VIDAA", "TCL Android TV"] },
      { name: "Streaming & box", items: ["Amazon Fire TV Stick", "Chromecast Ultra", "Nvidia Shield TV Pro", "Apple TV 4K", "Formuler Z11 Pro", "MAG 524"] },
      { name: "Mobiele apparaten", items: ["iPhone 14/15/16", "iPad Pro/Air", "Samsung Galaxy S24/S25", "Google Pixel 9", "Huawei P-serie", "Xiaomi tablets"] },
      { name: "Softwaretoepassingen", items: ["IPTV Smarters Pro", "TiviMate", "VLC Media Player", "Kodi", "Perfect Player", "GSE Smart IPTV"] },
    ],
    ctaText: "Bekijk de installatiegids per apparaat",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Zenderaanbod",
    title: "Dit ontvangt u bij het kopen van IPTV bij IPTV Compleet",
    subtitle: "Een compleet zenderaanbod dat u bij geen enkele andere aanbieder in deze samenstelling vindt.",
    channelGroups: [
      { name: "Nederlandse zenders", items: ["Algemene zenders HD", "Publieke zenders HD", "Filmzenders HD", "Amusement HD", "Sportzenders HD", "Cultuurzenders HD", "Regionale zenders", "Muziekzenders HD"] },
      { name: "Premium sport", items: ["Live voetbal", "Europese competities", "Grote kampioenschappen", "Autosport", "Motorsport", "Vechtsporten", "Tennis", "Basketbal"] },
      { name: "Films & amusement", items: ["Filmzenders", "Premium series", "Documentaires", "Ontdekking & natuur", "Jeugdzenders", "Tekenfilms", "Comedy", "Lifestyle"] },
      { name: "Nieuws & documentaires", items: ["Internationaal nieuws", "Brits nieuws", "Nederlands nieuws", "24-uursnieuws", "NL journaals", "Regionaal nieuws", "Geschiedeniszenders", "Natuur & dieren"] },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Pakketten",
    title: "IPTV kopen — kies uw pakket",
    subtitle: "Alle pakketten omvatten sport, 4K en Nederlandse en buitenlandse zenders. Hoe langer de duur, hoe lager de maandprijs.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Abonnementen vergelijken",
    title: "Abonnementen vergelijken: IPTV kopen met het beste aanbod",
    subtitle: "Abonnementen vergelijken is belangrijk. Hier ziet u het verschil tussen IPTV Compleet en andere aanbieders.",
    rows: [
      { feature: "Prijs per maand", us: "Vanaf €7,99", them: "€15 - €40" },
      { feature: "Gratis proefperiode", us: "Ja, 1 uur", them: "Alleen betaald" },
      { feature: "Nederlandstalige klantenservice", us: "24/7 via WhatsApp", them: "Zeer beperkt" },
      { feature: "Serverlocatie", us: "Nederland / België", them: "Buiten de EU" },
      { feature: "Activatietijd", us: "Binnen 5 minuten", them: "Uren tot dagen" },
      { feature: "Frequentie van zenderupdates", us: "Dagelijks", them: "Wekelijks / maandelijks" },
      { feature: "Niet goed, geld terug-garantie", us: "Ja", them: "Nee" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Beoordelingen",
    title: "Wat anderen zeggen over hun IPTV-aankoop",
    subtitle: "Ontdek waarom duizenden klanten hun IPTV-pakket bij ons kopen.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Klantenservice",
    title: "Klantenservice en veiligheid bij het kopen van IPTV",
    subtitle: "We nemen klantenservice en uw veiligheid serieus met deze maatregelen.",
    items: [
      { title: "SSL-versleutelde bestelling", desc: "Uw bestelling verloopt via een beveiligde verbinding. Alle gegevens worden versleuteld verzonden en nooit op onze servers opgeslagen." },
      { title: "Betaalmethode naar keuze", desc: "iDEAL (uw eigen bank), creditcard met 3D Secure of PayPal-kopersbescherming. Kies wat u vertrouwt." },
      { title: "Geen risico op datalekken", desc: "Uw persoonlijke gegevens worden strikt vertrouwelijk behandeld. Geen doorverkoop, geen profilering. Uw privacy staat voorop." },
      { title: "Transparante voorwaarden", desc: "Geen kleine lettertjes of verborgen clausules. Onze algemene voorwaarden zijn duidelijk: wat u ziet is wat u krijgt." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Uw vragen over het kopen van IPTV — onze antwoorden",
    subtitle: "De meest gestelde vragen door kopers.",
    faqs: [
      {
        question: "Is het veilig om IPTV te kopen via een website?",
        answer: "Ja, mits u bij een betrouwbare aanbieder koopt. Controleer op veilige betaalmethoden (iDEAL, kaart met 3D Secure), duidelijke contactgegevens en klantenservice via telefoon of WhatsApp. Wij voldoen aan alle beveiligingsnormen."
      },
      {
        question: "Wat kost een IPTV-abonnement gemiddeld per maand?",
        answer: "De prijs varieert van €7 tot €25 per maand, afhankelijk van de duur en het aantal gelijktijdige verbindingen. Met een jaarabonnement betaalt u het minst per maand. Vergelijk altijd de totale kosten en let op verborgen toeslagen."
      },
      {
        question: "Kan ik IPTV kopen en direct gebruiken?",
        answer: "Bij IPTV Compleet, ja. Na betaling ontvangt u binnen 5 minuten uw M3U-koppeling, Xtream Codes en een installatiegids. Geen wachttijd voor handmatige activatie. Download de app, voer de inloggegevens in en u streamt direct."
      },
      {
        question: "Wat is het verschil tussen IPTV kopen en een traditioneel tv-abonnement?",
        answer: "Bij IPTV koopt u een streamingdienst via internet, zonder kabel, schotel of vast abonnement. U heeft vrijwel altijd een breder aanbod (31.000+ zenders versus 50-100), 4K en VOD, tegen een lagere prijs en zonder jaarcontract."
      },
      {
        question: "Welke IPTV-app heb ik nodig om te kijken?",
        answer: "U kunt IPTV Smarters Pro, TiviMate, VLC Media Player, Kodi of Perfect Player gebruiken. Wij leveren een duidelijke installatiegids per apparaat. De meeste apps zijn gratis en eenvoudig te installeren via de appstore."
      },
      {
        question: "Hoeveel verbindingen heb ik nodig voor IPTV?",
        answer: "1 verbinding volstaat voor één tv tegelijk. Voor een huishouden met 2-3 tv's raden we een pakket met 2 tot 4 gelijktijdige verbindingen aan. Kijkt u ook op telefoon of tablet, dan heeft u een extra verbinding nodig."
      },
      {
        question: "Wat gebeurt er als IPTV niet werkt na de aankoop?",
        answer: "Onze supportafdeling is 24/7 beschikbaar via WhatsApp. We bieden ook een gedetailleerde installatiegids per apparaat. Als het technisch niet lukt, helpen we u op afstand. In het uiterste geval krijgt u uw geld terug."
      },
      {
        question: "Kan ik na de aankoop overstappen op een ander pakket?",
        answer: "Ja, u kunt op elk moment overstappen op meer verbindingen of een langer abonnement. Het verschil wordt eenvoudig aangepast. Uw dienst blijft beschikbaar zonder onderbreking tijdens de wijziging."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Meer informatie",
    title: "Waar wilt u meer over weten?",
    subtitle: "Verdiep u in de verschillende IPTV-onderwerpen en ontdek welke dienst het beste bij u past.",
    links: [LINK.home, LINK.abonnement, LINK.aanbieder, LINK.nederland, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Koop nu uw IPTV-pakket en bespaar direct",
    description: "Overstappen op IPTV is eenvoudig, voordelig en veilig. Kies uw abonnement, betaal en stream binnen 5 minuten duizenden zenders in 4K.",
  },
};

export default iptvKopen;
