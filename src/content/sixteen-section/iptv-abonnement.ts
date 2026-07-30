import type { SixteenSectionContent } from "./types";

const LINK = {
  home: { label: "IPTV Compleet", href: "/", description: "De beste IPTV-service van Nederland met 31.000+ zenders en 4K." },
  kopen: { label: "IPTV Kopen", href: "/iptv-kopen", description: "Koop direct een IPTV-abonnement met veilige betaling." },
  aanbieder: { label: "IPTV Aanbieder", href: "/iptv-aanbieder", description: "Vergelijk IPTV-aanbieders en ontdek de beste keuze." },
  nederland: { label: "IPTV Nederland", href: "/iptv-nederland", description: "Alles over IPTV in Nederland: zenders, sport en installatie." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "Installatiehandleiding IPTV Smarters Pro voor al uw apparaten." },
};

const abonnement: SixteenSectionContent = {
  slug: "iptv-abonnement",
  path: "/iptv-abonnement",
  meta: {
    title: "IPTV-abonnement ☑ De Beste Keuze in Nederland",
    description: "Het beste IPTV-abonnement in Nederland: 31.000+ zenders, alle sport & films, 4K-kwaliteit en 24/7 ondersteuning. Flexibele looptijden zonder jaarcontract. Gratis proefperiode.",
    h1: "IPTV-abonnement – vergelijk en kies de beste",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV-abonnement · Vergelijken loont",
    title: "IPTV-abonnement: het beste IPTV-abonnement voor uw situatie",
    subtitle: "Op zoek naar een IPTV-abonnement? Maak de juiste keuze dankzij onze heldere vergelijking van diensten, prijzen en mogelijkheden. Alle pakketten getest op kwaliteit.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Vergelijk abonnementen",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Start de gratis proefperiode",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "abonnementsvormen", value: "3" },
      { label: "servers nabij Nederland", value: "99,9%" },
      { label: "Google-beoordeling", value: "4,9/5" },
      { label: "tevreden abonnees", value: "10.000+" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Bekende frustraties",
    title: "IPTV-abonnement: waarom uw huidige TV-abonnement niet meer volstaat",
    subtitle: "De manier waarop we tv kijken is veranderd. Toch bieden traditionele aanbieders nog steeds hetzelfde beperkte model.",
    pains: [
      { title: "IPTV-abonnement: vaste kosten die blijven stijgen", desc: "Elk jaar verhoogt uw TV-aanbieder de prijzen terwijl het aanbod gelijk blijft. U betaalt nu 70 euro of meer voor zenders die u nauwelijks bekijkt." },
      { title: "IPTV-abonnement: geen flexibiliteit in looptijd", desc: "Een abonnement bij een traditionele aanbieder dwingt u tot langlopende contracten. Bij verhuizing of gewijzigde behoeften betaalt u een hoge boete." },
      { title: "IPTV-abonnement: beperkt tot slechts één apparaat", desc: "Wilt u op meerdere tv's kijken of onderweg op uw telefoon? Bij de meeste aanbieders betaalt u elke extra aansluiting apart. Duur en gecompliceerd." },
      { title: "IPTV-abonnement: sport en films ontbreken", desc: "Uw abonnement dekt niet de essentiele sportzenders of nieuwe films. Voor elke toevoeging betaalt u een duur themapakket." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "",
    title: "IPTV-abonnement: een modern IPTV-abonnement lost deze problemen op",
    subtitle: "Een goede IPTV-aanbieder biedt alles in één pakket, zonder uitzondering.",
    points: [
      { title: "IPTV-abonnement: alles inbegrepen, geen themapakketten", desc: "Sport, films, 4K, Franse en Nederlandse zenders en internationale zenders — alles inbegrepen in de standaardprijs. Geen dure toeslagen zoals bij kabelaanbieders." },
      { title: "IPTV-abonnement: opzegbaar op elk moment zonder boete", desc: "Geen jaarcontract. U kiest of u per maand, per kwartaal of per jaar betaalt. Opzegging is eenvoudig en gratis." },
      { title: "IPTV-abonnement: gelijktijdig kijken op meerdere apparaten", desc: "Een IPTV-abonnement met 2, 3 of 4 verbindingen. Het hele gezin kijkt waar en wanneer het wil — zonder extra aansluitingskosten." },
      { title: "IPTV-abonnement: duizenden zenders zonder verborgen kosten", desc: "Geen toeslag voor sportzenders, internationale zenders of 4K. Uw maandbedrag is vast en dekt het volledige aanbod." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Inbegrepen bij elk abonnement",
    title: "Deze functies standaard inbegrepen bij elk IPTV-abonnement",
    subtitle: "Ongeacht het gekozen pakket, deze voordelen zijn altijd inbegrepen.",
    features: [
      { title: "IPTV-abonnement: 31.000+ live tv-zenders", desc: "Van het Franse en Nederlandse aanbod tot internationale zenders uit meer dan 190 landen. Altijd iets om naar te kijken, in elke taal en voor elk publiek." },
      { title: "IPTV-abonnement: 140.000+ films & series (VOD)", desc: "Een uitgebreide video-on-demand-bibliotheek die dagelijks wordt aangevuld. Nieuwste releases, klassiekers en volledige series — zonder extra kosten." },
      { title: "IPTV-abonnement: 4K & Ultra HD-streams", desc: "De hoogste beeldkwaliteit voor sport, films en documentaires. HDR-ondersteuning voor realistische kleuren en contrasten." },
      { title: "IPTV-abonnement: elektronische programmagids (EPG)", desc: "Een heldere gids met programmagegevens van alle zenders. Zoek, filter en ontdek wat er nu, straks en morgen wordt uitgezonden." },
      { title: "IPTV-abonnement: anti-freeze & nul onderbrekingen", desc: "Speciale software minimaliseert onderbrekingen en stabiliseert de stream. Zelfs tijdens piekuren en live sport kijkt u zonder onderbreking." },
      { title: "IPTV-abonnement: 24/7 klantenservice", desc: "Ons team is altijd bereikbaar via WhatsApp, e-mail of telefoon. Reactie binnen 5 minuten, 7 dagen per week." },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Onze belofte",
    title: "Drie redenen om een IPTV-abonnement af te sluiten bij IPTV Compleet",
    subtitle: "Waarom kiezen steeds meer huishoudens voor ons abonnementsmodel?",
    reasons: [
      { title: "IPTV-abonnement: de laagste prijs per zender", desc: "Bereken het zelf: voor 10 tot 15 euro per maand ontvangt u meer dan 31.000 zenders. Dat is 0,0003 euro per zender. Bij de concurrent betaalt u tot 1 euro per zender per maand." },
      { title: "IPTV-abonnement: geen verschil tussen de pakketten", desc: "Sommige aanbieders reserveren sport of 4K voor duurdere pakketten. Bij ons heeft u alles in elk abonnement. Het enige verschil: de looptijd en het aantal verbindingen." },
      { title: "IPTV-abonnement: altijd up-to-date", desc: "Uw IPTV-abonnement wordt dagelijks bijgewerkt met nieuwe zenders, VOD-toevoegingen en verbeteringen. Nooit meer wachten of handmatige installatie." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Aanmeldproces",
    title: "IPTV-abonnement: start uw IPTV-abonnement in 3 stappen",
    subtitle: "Van aanmelding tot streamen in minder dan 10 minuten. Geen gecompliceerde installatie.",
    steps: [
      { step: "01", title: "IPTV-abonnement: kies uw looptijd", desc: "Bekijk de abonnementen per maand, 3 maanden, 6 maanden of 12 maanden. Hoe langer de looptijd, hoe lager de maandelijkse prijs. U kunt altijd verlengen of opzeggen." },
      { step: "02", title: "IPTV-abonnement: selecteer het aantal verbindingen", desc: "Kies tussen 1, 2, 3 of 4 gelijktijdige streams. Voor een gemiddeld huishouden zijn 2 verbindingen ideaal: een voor de woonkamer en een voor de slaapkamer." },
      { step: "03", title: "IPTV-abonnement: betaal en stream direct", desc: "Na betaling via iDEAL, creditcard of PayPal ontvangt u uw inloggegevens. Voer de M3U-link of de Xtream Codes in in uw favoriete IPTV-app en begin met kijken." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Bijna alle apparaten",
    title: "IPTV-abonnement: uw IPTV-abonnement werkt op al deze apparaten",
    subtitle: "IPTV-abonnement: thuis of onderweg, op het apparaat van uw keuze.",
    deviceGroups: [
      { name: "Smart TV", items: ["Samsung Tizen TV", "LG ThinQ webOS", "Sony Android TV", "Philips Smart TV", "Panasonic My Home Screen", "TCL Roku TV"] },
      { name: "Streaming-apparaten", items: ["Fire TV Stick Max", "Apple TV HD/4K", "Nvidia Shield Pro", "Chromecast Gen 4", "Formuler Z11", "MAG 524w2"] },
      { name: "Mobiel & tablet", items: ["iPhone 15/16 Pro", "iPad Air", "Samsung Galaxy S25", "Xiaomi 14T", "Huawei MatePad", "OnePlus 13"] },
      { name: "Software & apps", items: ["IPTV Smarters Pro", "TiviMate Premium", "VLC Media Player", "Perfect Player", "Kodi Matrix", "IPTV Extreme"] },
    ],
    ctaText: "Volledige compatibiliteitslijst",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Zenderaanbod",
    title: "IPTV-abonnement: welke zenders ontvangt u met uw IPTV-abonnement?",
    subtitle: "Een overzicht van het uitgebreide aanbod dat in elk pakket is inbegrepen.",
    channelGroups: [
      { name: "Franse zenders", items: ["Algemene zenders HD", "Cinema & cultuur HD", "Sportzenders", "Voetbalzenders", "Francophone zenders", "Premium cinema"] },
      { name: "Sportzenders", items: ["Live sport", "Voetbal", "Internationale sport", "Motorsport", "Vechtsporten", "Sport op aanvraag"] },
      { name: "Films & series", items: ["Cinema-zenders", "Premium series", "Amusementszenders", "Cinema op aanvraag", "Recente films", "Arthouse cinema"] },
      { name: "Internationale zenders", items: ["Brits nieuws", "Internationaal nieuws", "Arabisch nieuws", "Duitse zenders", "Frans nieuws", "NL openbare zenders"] },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Onze prijzen",
    title: "IPTV-abonnement: kies uw IPTV-abonnement",
    subtitle: "Alle pakketten zijn volledig inbegrepen. Geen toeslag voor sport, 4K of Franse en Nederlandse zenders.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Kosten & vergelijking",
    title: "IPTV-abonnement: IPTV Compleet versus andere IPTV-abonnementen",
    subtitle: "Een objectieve vergelijking tussen onze dienst en andere aanbieders.",
    rows: [
      { feature: "Maandprijs (kortste looptijd)", us: "vanaf 12,99 EUR", them: "14,99 EUR - 29,99 EUR" },
      { feature: "Maandprijs (langste looptijd)", us: "vanaf 7,99 EUR", them: "9,99 EUR - 19,99 EUR" },
      { feature: "Gratis proefperiode", us: "Ja, 1 uur", them: "Nee / alleen betaald" },
      { feature: "Serverlocatie", us: "Eigen servers NL & BE", them: "Gedeeld EU / buiten EU" },
      { feature: "Vernieuwingsfrequentie zenders", us: "Dagelijks", them: "Wekelijks" },
      { feature: "Klantenservice", us: "24/7 WhatsApp, telefoon", them: "Beperkt of in het Engels" },
      { feature: "Tevredenheidsgarantie", us: "Ja, onvoorwaardelijk", them: "Nee" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Ervaringen",
    title: "IPTV-abonnement: wat abonnees zeggen over hun IPTV-abonnement",
    subtitle: "IPTV-abonnement: duizenden mensen zijn u voorgegaan.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Een veilig abonnement",
    title: "IPTV-abonnement: uw IPTV-abonnement volledig veilig",
    subtitle: "Wij hanteren de strengste normen op het gebied van veiligheid en betrouwbaarheid.",
    items: [
      { title: "IPTV-abonnement: 99,9% serverbeschikbaarheid", desc: "Onze servers draaien op een redundanter netwerk met automatische failover. Als een server uitvalt, wordt u binnen enkele milliseconden doorgeschakeld naar een back-upserver." },
      { title: "IPTV-abonnement: veilige betalingen", desc: "Wij werken met Mollie en Stripe, twee van de veiligste betaalverwerkers van Europa. Uw financiele gegevens verlaten nooit hun beveiligde omgeving." },
      { title: "IPTV-abonnement: geen tracking of profilering", desc: "Wij registreren uw kijkgeschiedenis niet en delen geen gegevens met adverteerders. Uw privacy wordt volledig gerespecteerd." },
      { title: "IPTV-abonnement: AVG-compliant", desc: "Wij voldoen aan de Algemene Verordening Gegevensbescherming. U heeft altijd toegang tot uw gegevens en controle erover." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Veelgestelde vragen over een IPTV-abonnement",
    subtitle: "IPTV-abonnement: de antwoorden op de meest gestelde vragen.",
    faqs: [
      {
        question: "Wat is het beste IPTV-abonnement in Nederland?",
        answer: "Het beste abonnement hangt af van uw kijkgedrag. Voor één tv volstaat een abonnement met 1 verbinding. Voor gezinnen adviseren wij 2 tot 4 verbindingen zodat ieder op het eigen apparaat kan kijken zonder onderbreking. Alle abonnementen bieden hetzelfde zenderaanbod."
      },
      {
        question: "Kan ik een IPTV-abonnement afsluiten zonder jaarcontract?",
        answer: "Ja, bij IPTV Compleet heeft u de keuze uit flexibele looptijden: opzegbaar per maand, 3 maanden, 6 maanden of 12 maanden. Hoe langer de looptijd, hoe lager de maandelijkse prijs. Opzegging is altijd mogelijk zonder boete."
      },
      {
        question: "Hoeveel kost een IPTV-abonnement per maand in 2026?",
        answer: "Een IPTV-abonnement kost tussen 7,99 EUR en 12,99 EUR per maand afhankelijk van de gekozen looptijd. Dit omvat alle zenders, sportzenders en de VOD-bibliotheek. Geen verborgen kosten voor 4K of extra apparaten."
      },
      {
        question: "Sport inbegrepen: welke sportzenders bevat het IPTV-abonnement?",
        answer: "Ja, een ruime selectie sportzenders is inbegrepen: voetbal, motorsport, motorsport, basketbal, vechtsporten en vele andere disciplines, evenals internationale sportzenders. Het beschikbare aanbod kan per regio verschillen."
      },
      {
        question: "Hoe zeg ik mijn IPTV-abonnement op?",
        answer: "Opzeggen is eenvoudig. Stuur een bericht via WhatsApp of een e-mail naar ons supportteam. Uw abonnement wordt direct opgezeggen en u betaalt niets meer. Geen opzegtermijn of boete. U kijkt tot het einde van de betaalde periode."
      },
      {
        question: "Kan ik meerdere IPTV-abonnementen op hetzelfde apparaat gebruiken?",
        answer: "Ja, de meeste IPTV-apps ondersteunen meerdere playlists. U schakelt eenvoudig tussen verschillende M3U-links of Xtream Codes. Handig als u bijvoorbeeld een apart abonnement heeft voor een vakantiewoning."
      },
      {
        question: "Wat is het verschil tussen 1, 2, 3 of 4 verbindingen?",
        answer: "Het aantal verbindingen bepaalt hoeveel apparaten tegelijk kunnen streamen. Met 1 verbinding kijkt u op één scherm. Met 4 verbindingen kunnen vier verschillende apparaten onafhankelijk verschillende zenders bekijken."
      },
      {
        question: "Ontvang ik een aankoopbewijs voor mijn IPTV-abonnement?",
        answer: "Ja, u ontvangt een betalingsbevestiging per e-mail met de details van uw aankoop, de gekozen looptijd en de startdatum. Deze dient tevens als garantiebewijs."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Ontdek ook",
    title: "IPTV-abonnement: alles over IPTV en abonnementen",
    subtitle: "Verdiep uzelf met onze andere pagina's voor een compleet beeld van onze dienst.",
    links: [LINK.home, LINK.kopen, LINK.aanbieder, LINK.nederland, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "IPTV-abonnement: kies nu het IPTV-abonnement dat bij u past",
    description: "Start vandaag nog met het beste IPTV-abonnement van Nederland. Direct toegang tot alle zenders, sport en films — zonder jaarcontract.",
  },
};

export default abonnement;
