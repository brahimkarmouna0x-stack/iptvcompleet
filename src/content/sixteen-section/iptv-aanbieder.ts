import type { SixteenSectionContent } from "./types";

const LINK = {
  home: { label: "IPTV Compleet Home", href: "/", description: "Het beste IPTV-abonnement van Nederland met 31.000+ zenders." },
  kopen: { label: "IPTV Kopen", href: "/iptv-kopen", description: "IPTV kopen met veilige betaling, directe activering en gratis proefperiode." },
  abonnement: { label: "IPTV Abonnement", href: "/iptv-abonnement", description: "Vergelijk IPTV-abonnementen met flexibele looptijden." },
  nederland: { label: "IPTV Nederland", href: "/iptv-nederland", description: "Alles over IPTV in Nederland: zenders, sport en installatie." },
  smarters: { label: "IPTV Smarters Pro", href: "/iptv-smarters-pro", description: "Installatiegids voor IPTV Smarters Pro op elk apparaat." },
};

const aanbieder: SixteenSectionContent = {
  slug: "iptv-aanbieder",
  path: "/iptv-aanbieder",
  meta: {
    title: "IPTV Aanbieder ✓ Beste IPTV Aanbieder Nederland 2026",
    description: "Op zoek naar de beste IPTV-aanbieder van Nederland? Vergelijk alle aanbieders, prijzen en diensten. IPTV Compleet scoort 4,9/5. Ontdek waarom.",
    h1: "De beste IPTV-aanbieder van Nederland – volledige vergelijking",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Aanbieder · Vergelijk & kies",
    title: "IPTV Aanbieder: welke IPTV-aanbieder past het beste bij u?",
    subtitle: "De IPTV-markt in Nederland groeit snel. Maar niet alle aanbieders bieden dezelfde kwaliteit. Ontdek waar u op moet letten en maak een weloverwogen keuze.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Vergelijk alle aanbieders",
    ctaPrimaryHref: "#pakketten",
    ctaSecondary: "Probeer de beste",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "beoordeling op Google", value: "4,9/5" },
      { label: "actieve verbindingen", value: "10.000+" },
      { label: "serverbeschikbaarheid", value: "99,9%" },
      { label: "Nederlandstalige klantenservice", value: "24/7" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Het probleem met IPTV-aanbieders",
    title: "Waarom veel IPTV-aanbieders niet aan uw verwachtingen voldoen",
    subtitle: "De keuze van een IPTV-aanbieder bepaalt uw volledige kijkervaring. Dit zijn de valkuilen.",
    pains: [
      { title: "IPTV Aanbieder: overbelaste servers en slechte prestaties", desc: "Veel IPTV-aanbieders gebruiken goedkope gedeelde servers in het buitenland. Het resultaat: lange laadtijden, blokkades tijdens piekuren en slechte beeldkwaliteit." },
      { title: "IPTV Aanbieder: afwezige of trage klantenservice", desc: "Bij problemen kunt u vaak alleen een e-mail sturen en dagen wachten op een antwoord. Geen telefoonnummer, geen WhatsApp-support, geen hulp in het Nederlands." },
      { title: "IPTV Aanbieder: onbetrouwbare betalingssystemen", desc: "Sommige aanbieders vragen om cryptocurrency, een overschrijving naar een buitenlandse rekening of bieden geen bekende betaalmethoden. Uw geld is niet veilig." },
      { title: "IPTV Aanbieder: zenders die niet werken", desc: "Niets is frustrerender dan te betalen voor een dienst waarvan de zenders offline zijn of van slechte kwaliteit. Zonder goede klantenservice staat u er alleen voor." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "Waar moet u op letten?",
    title: "IPTV Aanbieder: de kenmerken van een goede IPTV-aanbieder",
    subtitle: "Met deze checklist herkent u een professionele en betrouwbare IPTV-aanbieder in Nederland.",
    points: [
      { title: "IPTV Aanbieder: schone serverinfrastructuur in de buurt van Nederland", desc: "Een serieuze IPTV-aanbieder investeert in eigen servers in Nederland en België. Dit garandeert de laagste latentie, de hoogste beschikbaarheid en de snelste zenderwisselingen." },
      { title: "IPTV Aanbieder: snel Nederlandstalig support", desc: "De beste aanbieders bieden ondersteuning in het Nederlands via WhatsApp, telefoon en e-mail. Een responstijd van maximaal 5 minuten bij storingen of vragen." },
      { title: "IPTV Aanbieder: duidelijke prijzen zonder verrassingen", desc: "Transparante tarieven zonder activeringskosten, verzendkosten of verplichte maandelijkse toeslagen. Wat beloofd wordt, wordt nagekomen." },
      { title: "IPTV Aanbieder: geverifieerde beoordelingen en tevreden klanten", desc: "Een betrouwbare IPTV-aanbieder heeft positieve, onafhankelijk geverifieerde beoordelingen op Google, Trustpilot of andere platforms. Vraag ernaar en verifieer ze." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "Vergelijk aanbieders",
    title: "Deze criteria onderscheiden goede van slechte IPTV-aanbieders",
    subtitle: "Let op deze kenmerken wanneer u IPTV-aanbieders vergelijkt.",
    features: [
      { title: "IPTV Aanbieder: stabiliteit en fluxkwaliteit", desc: "Een goede aanbieder levert stabiele 4K-flux via eigen premium servers. Vraag altijd naar de serverlocatie, bandbreedte en capaciteit tijdens piekuren." },
      { title: "IPTV Aanbieder: omvang van het zenderaanbod", desc: "31.000+ zenders uit meer dan 190 landen, met bijzondere aandacht voor het Franse en Nederlandse aanbod en live sport. Het aanbod moet compleet en actueel zijn." },
      { title: "IPTV Aanbieder: ondersteunde apparaten", desc: "Een professionele IPTV-aanbieder ondersteunt vrijwel alle apparaten: Smart TV's, streaming-boxen, smartphones, tablets en computers. Van Samsung tot Apple TV." },
      { title: "IPTV Aanbieder: eenvoudige installatie en handleidingen", desc: "De aanbieder biedt duidelijke stap-voor-stap installatiehandleidingen per apparaat. Zelfs voor niet-technische gebruikers moet starten eenvoudig zijn." },
      { title: "IPTV Aanbieder: veel meer dan live TV", desc: "Naast live zenders biedt de beste aanbieder ook een uitgebreide VOD-bibliotheek met films en series, catch-up TV en een EPG-gids." },
      { title: "IPTV Aanbieder: gratis proefperiode als kwaliteitsgarantie", desc: "Een goede IPTV-aanbieder biedt een gratis proefperiode om de dienst te testen voordat u een betaald abonnement neemt. Zonder creditcard en zonder risico." },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Waarom wij",
    title: "IPTV Aanbieder: de beste IPTV-aanbieder met een beoordeling van 4,9/5",
    subtitle: "Dit maakt ons uniek in het Nederlandse IPTV-landschap.",
    reasons: [
      { title: "IPTV Aanbieder: schone servers in Nederland & België", desc: "Andere aanbieders huren gedeelde servers in Frankrijk of Duitsland. Wij hebben eigen servers in Nederland en België, speciaal geoptimaliseerd voor IPTV-streaming." },
      { title: "IPTV Aanbieder: toegewijde Nederlandstalige klantenservice", desc: "Wij beantwoorden elke vraag binnen 5 minuten via WhatsApp. Ons team bestaat uit echte Nederlandstalige adviseurs, geen chatbots of geautomatiseerde systemen." },
      { title: "IPTV Aanbieder: alles inbegrepen, geen themapakketten", desc: "Bij veel aanbieders betaalt u extra voor sport, films of 4K. Bij IPTV Compleet zit alles in elk abonnement. Eén vast bedrag voor het volledige aanbod." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Wissel in 3 stappen",
    title: "IPTV Aanbieder: word klant bij de beste IPTV-aanbieder",
    subtitle: "Overstappen naar een betere IPTV-aanbieder is eenvoudig en snel.",
    steps: [
      { step: "01", title: "IPTV Aanbieder: vergelijk en kies", desc: "Bekijk onze abonnementen en vergelijk ze met andere aanbieders. Kijk naar de prijs, het aanbod, de klantenservice en de stabiliteit. U zult zien dat IPTV Compleet op alle vlakken beter is." },
      { step: "02", title: "IPTV Aanbieder: meld u aan via WhatsApp", desc: "Vragen? Stel ze direct via WhatsApp. Ons team helpt u bij het kiezen en beantwoordt al uw vragen voordat u koopt. Persoonlijk advies zonder commerciële druk." },
      { step: "03", title: "IPTV Aanbieder: kijk direct in 4K", desc: "Na aanmelding ontvangt u direct al uw inloggegevens. Download de app, voer de gegevens in en begin met kijken. De Nederlandstalige klantenservice staat klaar voor hulp bij de installatie." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Apparaatondersteuning",
    title: "Elke goede IPTV-aanbieder ondersteunt deze apparaten",
    subtitle: "Controleer of uw apparaten worden ondersteund door de IPTV-aanbieder van uw keuze.",
    deviceGroups: [
      { name: "Smart TV Platforms", items: ["Samsung Tizen", "LG webOS", "Android TV / Google TV", "Apple tvOS", "Philips Saphi", "Panasonic My Home Screen"] },
      { name: "Externe streaming-apparaten", items: ["Fire TV Stick Lite/HD/4K", "Google Chromecast", "Nvidia Shield TV", "Apple TV 4K", "Formuler GTV/Z11", "MAG 520/524"] },
      { name: "Smartphones en tablets", items: ["iPhone en iPad (iOS)", "Samsung Galaxy (Android)", "Google Pixel", "Huawei P-serie", "Xiaomi tablets", "OnePlus / Oppo"] },
      { name: "Software / apps", items: ["TiviMate", "IPTV Smarters Pro", "VLC", "Kodi", "Perfect Player", "IMPlayer"] },
    ],
    ctaText: "Bekijk de installatiehandleiding",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Het aanbod van de beste IPTV-aanbieder",
    title: "IPTV Aanbieder: wat kunt u verwachten van het aanbod?",
    subtitle: "Als IPTV-aanbieder met eigen servers garanderen wij dit aanbod.",
    channelGroups: [
      { name: "Frankrijk & Nederland", items: ["FR HD Algemene zenders", "FR HD Publieke zenders", "Cinema HD", "Amusement HD", "NL HD Publieke zenders", "NL HD Partiële zenders", "Sportzenders HD", "Documentaires HD"] },
      { name: "Sport (internationaal)", items: ["Britse sport", "Italiaanse & Spaanse sport", "Internationaal voetbal", "Portugese sport", "Noord-Amerikaanse sport", "Afrikaanse sport", "Oceanische sport"] },
      { name: "Amusement", items: ["Amerikaanse series", "Fictiezenders", "Comedie", "Sciencefiction", "Amusement & celebrities", "Actiezenders", "Thrillerzenders"] },
      { name: "Documentaires / cultuur", items: ["Geschiedeniszenders", "Wetenschap & ontdekking", "Natuur & dieren", "Wildleven", "Samenleving & cultuur", "Ontdekking & natuur", "Reizen"] },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Transparante prijzen",
    title: "IPTV Aanbieder: de tarieven van de beste IPTV-aanbieder",
    subtitle: "Vergelijk onze prijzen met die van andere aanbieders. U ziet direct het verschil in kwaliteit en prijs.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "Vergelijking van aanbieders",
    title: "IPTV Compleet versus andere IPTV-aanbieders in Nederland",
    subtitle: "Een objectieve vergelijking tussen de meest gebruikte IPTV-aanbieders in Nederland.",
    rows: [
      { feature: "Schone servers NL/BE", us: "Ja", them: "Nee, gedeeld" },
      { feature: "Nederlandstalige klantenservice", us: "24/7, reactie <5 min", them: "Beperkt of afwezig" },
      { feature: "Gratis proefperiode", us: "1 uur, zonder kaart", them: "Nee" },
      { feature: "4K-flux", us: "Inbegrepen", them: "Betaald of afwezig" },
      { feature: "Tevredenheidsgarantie", us: "Ja", them: "Nee" },
      { feature: "Activeringstijd", us: "<5 minuten", them: "1-48 uur" },
      { feature: "Google-beoordelingen", us: "4,9/5 (1.200+ beoordelingen)", them: "Geen of <4,0" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Ervaringen",
    title: "IPTV Aanbieder: waarom klanten ons de beste IPTV-aanbieder vinden",
    subtitle: "Lees wat onze klanten zeggen over IPTV Compleet als IPTV-aanbieder.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Veiligheid voorop",
    title: "Een betrouwbare IPTV-aanbieder garandeert uw veiligheid",
    subtitle: "Dit zijn de veiligheidsnormen die een goede IPTV-aanbieder hanteert.",
    items: [
      { title: "IPTV Aanbieder: bescherming tegen DDoS-aanvallen", desc: "Onze servers worden 24/7 beschermd door geavanceerde firewallsystemen die DDoS-aanvallen automatisch detecteren en afslaan. Uw flux blijft ononderbroken." },
      { title: "IPTV Aanbieder: veilige betalingsverwerking", desc: "Wij gebruiken uitsluitend gecertificeerde betalingsdienstverleners (Mollie, Stripe) met 3D Secure. Uw kaart- en bankgegevens worden veilig verwerkt." },
      { title: "IPTV Aanbieder: naleving van privacywetgeving", desc: "Wij houden ons aan de AVG en hebben een actueel privacybeleid. Uw gegevens worden niet verkocht of voor commerciële doeleinden gebruikt." },
      { title: "IPTV Aanbieder: transparante algemene voorwaarden", desc: "Geen kleine lettertjes. Onze algemene voorwaarden zijn duidelijk en volledig in het Nederlands. U weet precies waar u aan toe bent." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "IPTV Aanbieder: uw vragen over IPTV-aanbieders",
    subtitle: "De antwoorden op de meest gestelde vragen over het kiezen van een IPTV-aanbieder.",
    faqs: [
      {
        question: "Wat is de beste IPTV-aanbieder van Nederland?",
        answer: "Op basis van onafhankelijke beoordelingen, serverkwaliteit, klantenservice en prijs-kwaliteitverhouding wordt IPTV Compleet beschouwd als de beste IPTV-aanbieder van Nederland. Met een Google-beoordeling van 4,9/5 en eigen servers in de buurt van Nederland, scoren we beter dan alle andere aanbieders."
      },
      {
        question: "Waar moet u op letten bij het kiezen van een IPTV-aanbieder?",
        answer: "Kijk naar de serverlocatie (schone servers dichtbij Nederland zijn beter), de klantenservice (24/7 in het Nederlands), de betaalmethoden (iDEAL, creditcard, PayPal), de gratis proefperiode, beoordelingen op onafhankelijke platforms en de transparantie van de algemene voorwaarden."
      },
      {
        question: "Zijn alle IPTV-aanbieders even betrouwbaar?",
        answer: "Nee, de betrouwbaarheid varieert enorm. Sommige aanbieders gebruiken gedeelde servers in het buitenland, wat leidt tot overbelasting en storingen. Kies altijd een aanbieder met eigen servers dichtbij Nederland, een bewezen trackrecord en geverifieerde beoordelingen van echte klanten."
      },
      {
        question: "Hoe herkent u een onbetrouwbare IPTV-aanbieder?",
        answer: "Waarschuwingssignalen zijn: geen Nederlandstalige klantenservice, alleen betaling in cryptocurrency, geen beoordelingen op Google/Trustpilot, geen gratis proefperiode, vaag geformuleerde algemene voorwaarden en prijzen die ver onder het marktniveau liggen."
      },
      {
        question: "Biedt IPTV Compleet een gratis proefperiode aan?",
        answer: "Ja, als beste IPTV-aanbieder vinden wij het belangrijk dat u de dienst kunt testen voordat u een abonnement neemt. U ontvangt een gratis proefperiode van een uur met volledige toegang tot alle zenders, sport en VOD. Zonder creditcard en zonder verplichtingen."
      },
      {
        question: "Kan ik mijn abonnement bij IPTV Compleet wijzigen?",
        answer: "Ja, u kunt op elk moment upgraden naar meer verbindingen of een ander abonnement. Ons regelt dit in enkele minuten. Het wijzigen van uw betaalgegevens is ook eenvoudig via uw klantportaal."
      },
      {
        question: "Hoe snel wordt mijn account geactiveerd na betaling?",
        answer: "Bij IPTV Compleet wordt uw account binnen 5 minuten geactiveerd. U ontvangt direct uw M3U-link en Xtream Codes via e-mail en WhatsApp. Dat is aanzienlijk sneller dan het gemiddelde van 1 tot 48 uur bij andere IPTV-aanbieders."
      },
      {
        question: "Wat gebeurt er als ik overstap naar een andere IPTV-aanbieder?",
        answer: "Overstappen is eenvoudig. U kunt uw huidige abonnement opzeggen en direct bij ons beginnen. Wij helpen u bij de overgang en de installatie. Zolang uw huidige abonnement loopt, kunt u beide diensten parallel gebruiken voor een vloeiende overgang."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Meer informatie",
    title: "IPTV Aanbieder: verdiep u in IPTV via onze andere pagina's",
    subtitle: "Ontdek meer over onze dienst, abonnementen en installatie.",
    links: [LINK.home, LINK.kopen, LINK.abonnement, LINK.nederland, LINK.smarters],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Word klant bij de beste IPTV-aanbieder van Nederland",
    description: "Waarom genoegen nemen met minder? Kies IPTV Compleet en ervaar het verschil. Beoordeling van 4,9/5, schone servers en Nederlandstalige klantenservice 24/7.",
  },
};

export default aanbieder;
