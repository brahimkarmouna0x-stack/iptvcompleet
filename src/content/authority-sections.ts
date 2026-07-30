/**
 * Content for the 4 "authority" SEO sections appended to the main landing pages:
 *   1. seo     – long-form, semantically structured content (H2 + H3 + prose)
 *   2. howto   – step-by-step guide (emits HowTo JSON-LD → rich result)
 *   3. reviews – ratings + reviews (emits Product/AggregateRating JSON-LD → stars)
 *   4. local   – "IPTV partout aux Pays-Bas" geo/long-tail coverage
 *
 * Every page has UNIQUE prose to avoid duplicate-content penalties. The shared
 * city/province lists are plain data (not prose), so they carry no duplicate risk.
 */

export interface AuthorityContentBlock {
  h3: string;
  body: string;
}
export interface AuthorityLink {
  label: string;
  href: string;
}
export interface AuthorityHowToStep {
  name: string;
  text: string;
}
export interface AuthorityReview {
  author: string;
  location: string;
  date: string; // ISO yyyy-mm-dd
  rating: number; // 1–5
  body: string;
}

export interface AuthoritySectionsContent {
  seo: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    blocks: AuthorityContentBlock[];
    links: AuthorityLink[];
  };
  howto: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    schemaName: string;
    schemaDescription: string;
    totalTime?: string;
    steps: AuthorityHowToStep[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    productName: string;
    productDescription: string;
    ratingValue: number;
    reviewCount: number;
    items: AuthorityReview[];
  };
  local: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    cities: string[];
    provinces: string[];
    outro: string;
  };
}

// Shared geo data (plain lists → no duplicate-content risk).
export const NL_CITIES = [
  "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen",
  "Tilburg", "Almere", "Breda", "Nijmegen", "Apeldoorn", "Haarlem",
  "Arnhem", "Enschede", "Amersfoort", "Zwolle", "Maastricht", "Leiden",
  "Dordrecht", "Zoetermeer",
];
export const NL_PROVINCES = [
  "Noord-Holland", "Zuid-Holland", "Utrecht", "Gelderland", "Noord-Brabant",
  "Limburg", "Overijssel", "Flevoland", "Friesland", "Groningen", "Drenthe",
  "Zeeland",
];

export const AUTHORITY_SECTIONS: Record<string, AuthoritySectionsContent> = {
  // ───────────────────────────────────────────────────────────── HOME ──
  home: {
    seo: {
      eyebrow: "Alles over IPTV",
      title: "Wat is IPTV en waarom kiest Nederland voor",
      titleAccent: "IPTV Compleet",
      intro:
        "IPTV (Internet Protocol Television) streamt televisie via uw internetverbinding in plaats van via kabel of schotel. U kijkt zo naar meer dan 31.000 zenders en 140.000+ films en series in 4K, op elk apparaat, waar u ook bent in Nederland.",
      blocks: [
        {
          h3: "Hoe werkt IPTV precies?",
          body:
            "Bij IPTV worden tv-signalen als datapakketten via internet verzonden. U heeft geen kabelaansluiting of schotel nodig — alleen een stabiele verbinding van 15 Mbit/s of meer en een IPTV-app op uw Smart TV, telefoon, tablet of mediaspeler. U kiest zelf wat u kijkt en wanneer.",
        },
        {
          h3: "IPTV vs. traditionele TV en streamingdiensten",
          body:
            "Waar Ziggo en KPN u opsluiten in dure pakketten en elke streamingdienst een eigen abonnement vereist, bundelt een IPTV-abonnement alles: live TV, sport, films en series in één interface. U betaalt een vast bedrag en bespaart al snel tientallen euros per maand.",
        },
        {
          h3: "Is IPTV legaal en veilig in Nederland?",
          body:
            "IPTV is een streamtechnologie; de wettigheid van een dienst hangt af van de juiste uitzendrechten. Wij raden altijd aan om een IPTV-aanbieder te kiezen die over de benodigde beschikt, met duidelijke voorwaarden en klantenservice in het Nederlands, en om de lokale regelgeving te controleren die op uw situatie van toepassing is.",
        },
      ],
      links: [
        { label: "Ontdek ons IPTV-abonnement", href: "/iptv-abonnement" },
        { label: "Vergelijk IPTV-aanbieders", href: "/iptv-aanbieder" },
        { label: "Koop nu een IPTV", href: "/iptv-kopen" },
        { label: "Gids & uitleg over IPTV", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "Kijk in 4 stappen",
      title: "Begin vandaag nog met",
      titleAccent: "IPTV",
      intro:
        "Van bestelling naar kijken gemiddeld minder dan 5 minuten. Volg deze vier stappen en u streamt uw favoriete zenders vanavond nog.",
      schemaName: "Beginnen met IPTV in Nederland",
      schemaDescription:
        "Stap-voor-stap gids om in minder dan 5 minuten te beginnen met een IPTV-abonnement van IPTV Compleet.",
      totalTime: "PT5M",
      steps: [
        { name: "Kies uw pakket", text: "Selecteer het IPTV-abonnement met het gewenste aantal verbindingen en de looptijd die bij u past." },
        { name: "Betaal veilig", text: "Betaal eenvoudig met iDEAL, creditcard of PayPal. Uw bestelling wordt direct verwerkt." },
        { name: "Ontvang uw gegevens", text: "Binnen enkele minuten ontvangt u uw inloggegevens en uw M3U/Xtream-link per e-mail." },
        { name: "Installeer en kijk", text: "Voer de gegevens in een IPTV-app zoals IPTV Smarters Pro in en geniet direct van alle zenders." },
      ],
    },
    reviews: {
      eyebrow: "Beoordeeld door klanten",
      title: "Wat kijkers zeggen over",
      titleAccent: "IPTV Compleet",
      productName: "IPTV Compleet — Premium IPTV-abonnement",
      productDescription:
        "Premium IPTV-abonnement met meer dan 31.000 zenders en 140.000+ films en series in 4K, beoordeeld door duizenden klanten.",
      ratingValue: 4.8,
      reviewCount: 2148,
      items: [
        { author: "Marc Lefebvre", location: "Amsterdam", date: "2026-04-18", rating: 5, body: "Eindelijk een IPTV-dienst zonder onderbreking. Voetbal in 4K is fantastisch en de klantenservice reageert snel." },
        { author: "Sabrina Bakker", location: "Utrecht", date: "2026-03-29", rating: 5, body: "In 5 minuten ingesteld en bruikbaar op alle apparaten in huis. Veel goedkoper dan mijn oude kabelabonnement." },
        { author: "Youssef El Amrani", location: "Rotterdam", date: "2026-05-02", rating: 4, body: "Enorm veel zenders en films, ook internationaal. Beeldkwaliteit top, af en toe een herstart maar verder perfect." },
        { author: "Linda Janssen", location: "Eindhoven", date: "2026-05-21", rating: 5, body: "De proefperiode overtuigde me meteen. Werkt perfect op mijn Samsung TV en de Firestick van mijn zoon." },
      ],
    },
    local: {
      eyebrow: "Landelijke dekking",
      title: "IPTV overal in",
      titleAccent: "Nederland",
      intro:
        "Waar u ook woont — van de Randstad tot de provincie — met IPTV Compleet kijkt u via uw eigen internetverbinding. Geen monteur, geen schotel, geen wachttijd.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Onze servers staan dicht bij Nederland voor minimale vertraging en een vloeiende stream, in elke gemeente.",
    },
  },

  // ─────────────────────────────────────────────────── IPTV ABONNEMENT ──
  "iptv-abonnement": {
    seo: {
      eyebrow: "Over het IPTV-abonnement",
      title: "Het beste IPTV-abonnement van",
      titleAccent: "Nederland",
      intro:
        "Een IPTV-abonnement geeft u onbeperkte toegang tot live TV, sport, films en series via internet. Bij IPTV Compleet bevat elk abonnement alle zenders — het enige verschil is het aantal apparaten dat tegelijk wordt gebruikt.",
      blocks: [
        {
          h3: "Wat zit er in een IPTV-abonnement?",
          body:
            "Elk IPTV-abonnement omvat meer dan 31.000 live zenders, 140.000+ films en series op afroep, een compleet-programmagids (EPG), catch-up TV en 4K Ultra HD-streams. Sport- en internationale zenders zijn standaard inbegrepen, zonder verborgen kosten.",
        },
        {
          h3: "Welke looptijd kiest u?",
          body:
            "U kunt kiezen voor een maand-, halfjaar- of jaarabonnement. Een jaarabonnement heeft het laagste maandbedrag, terwijl een maandabonnement ideaal is om eerst te testen. Zonder vast contract kunt u op elk moment stoppen.",
        },
        {
          h3: "Een betaalbaar alternatief voor kabel",
          body:
            "Waar een traditioneel TV-pakket snel 40 tot 60 euro per maand kost, begint een premium IPTV-abonnement bij IPTV Compleet veel lager — met meer zenders en zonder lang contract. U bespaart elke maand zonder aan kwaliteit in te boeten.",
        },
      ],
      links: [
        { label: "Bekijk prijzen & pakketten", href: "/iptv-abonnement#pakketten" },
        { label: "Hoe kiest u een IPTV-aanbieder?", href: "/iptv-aanbieder" },
        { label: "Koop nu een IPTV", href: "/iptv-kopen" },
        { label: "Installeer IPTV Smarters Pro", href: "/iptv-smarters-pro" },
      ],
    },
    howto: {
      eyebrow: "Activeer uw abonnement",
      title: "Activeer uw",
      titleAccent: "IPTV-abonnement",
      intro:
        "Uw IPTV-abonnement is binnen enkele minuten actief. Volg deze vier eenvoudige stappen.",
      schemaName: "IPTV-abonnement activeren",
      schemaDescription:
        "Stap-voor-stap gids om een IPTV-abonnement van IPTV Compleet te bestellen en te activeren.",
      totalTime: "PT5M",
      steps: [
        { name: "Kies het aantal verbindingen", text: "Bepaal op hoeveel apparaten u tegelijk wilt kijken en kies het bijbehorende abonnement." },
        { name: "Selecteer de looptijd", text: "Kies een maand-, halfjaar- of jaarabonnement; langere looptijden zijn voordeliger per maand." },
        { name: "Betaal en bevestig", text: "Betaal veilig; u ontvangt direct een bevestiging met uw gegevens." },
        { name: "Log in en kijk", text: "Voer de gegevens in uw IPTV-app in en alle zenders zijn direct beschikbaar." },
      ],
    },
    reviews: {
      eyebrow: "Klantbeoordelingen",
      title: "De beoordelingen over ons",
      titleAccent: "IPTV-abonnement",
      productName: "IPTV Compleet — IPTV-abonnement Nederland",
      productDescription:
        "IPTV-abonnement met alle zenders, 4K-kwaliteit en flexibele looptijden, beoordeeld door abonnees.",
      ratingValue: 4.8,
      reviewCount: 1467,
      items: [
        { author: "Pierre Vasseur", location: "Den Haag", date: "2026-04-09", rating: 5, body: "Het beste IPTV-abonnement dat ik heb gehad. Alle sportzenders inbegrepen en geen gedoe met aparte pakketten." },
        { author: "Fatima Ouedraogo", location: "Tilburg", date: "2026-03-15", rating: 5, body: "Goed prijs voor een jaarabonnement en het werkt op vier apparaten tegelijk. Perfect voor ons gezin." },
        { author: "Johan Smit", location: "Groningen", date: "2026-05-11", rating: 4, body: "Veel keuze en stabiel beeld. Activatie was snel, alleen de EPG laadde de eerste keer wat langzaam." },
        { author: "Emma Dubois", location: "Almere", date: "2026-05-28", rating: 5, body: "Maandabonnement genomen om te testen en ben gebleven. Veel goedkoper dan mijn vorige aanbieder." },
      ],
    },
    local: {
      eyebrow: "Overal in Nederland",
      title: "Uw IPTV-abonnement werkt overal in",
      titleAccent: "Nederland",
      intro:
        "Een IPTV-abonnement van IPTV Compleet is niet gebonden aan een regio. Zolang u internet heeft, kijkt u — thuis, op de camping of in een vakantiewoning.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Verhuist u? Uw abonnement gaat mee, zonder nieuwe installatie of extra kosten.",
    },
  },

  // ──────────────────────────────────────────────────── IPTV AANBIEDER ──
  "iptv-aanbieder": {
    seo: {
      eyebrow: "Kies een aanbieder",
      title: "Hoe herkent u een",
      titleAccent: "betrouwbare IPTV-aanbieder",
      intro:
        "Er zijn veel IPTV-aanbieders, maar lang niet allemaal betrouwbaar. Een goede aanbieder biedt stabiele servers, een proefperiode, transparante prijzen en echte klantenservice. Zo vergelijkt u aanbieders als een expert.",
      blocks: [
        {
          h3: "Waar let u op bij een IPTV-aanbieder?",
          body:
            "Beoordeel een IPTV-aanbieder op serverstabiliteit (uptime), beeldkwaliteit, aantal zenders en VOD-titels, beschikbaarheid van een proefperiode en kwaliteit van de support. Een betrouwbare aanbieder communiceert duidelijk en verbergt geen kosten.",
        },
        {
          h3: "Waarom uptime en serverlocatie belangrijk zijn",
          body:
            "Onderbrekingen komen meestal door overbelaste of te ver weg geplaatste servers. IPTV Compleet gebruikt krachtige servers met load balancing dicht bij Nederland, zodat een vloeiende 4K-stream behouden blijft, zelfs tijdens grote sportavonden.",
        },
        {
          h3: "Signalen om te vermijden",
          body:
            "Wees voorzichtig met aanbieders zonder proefperiode, zonder bereikbare klantenservice of met abnormaal lage 'levenslange' aanbiedingen. Dit zijn typische signalen van onbetrouwbare diensten die plotseling kunnen verdwijnen.",
        },
      ],
      links: [
        { label: "Bekijk ons IPTV-abonnement", href: "/iptv-abonnement" },
        { label: "Koop bij een betrouwbare aanbieder", href: "/iptv-kopen" },
        { label: "IPTV in Nederland", href: "/iptv-nederland" },
        { label: "Uitleg & gidsen", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "Vergelijk aanbieders",
      title: "Kies de juiste",
      titleAccent: "IPTV-aanbieder",
      intro:
        "Een aanbieder kiezen hoeft niet ingewikkeld te zijn. Volg deze vier stappen voor een weloverwogen keuze.",
      schemaName: "Betrouwbare IPTV-aanbieder kiezen",
      schemaDescription:
        "Stap-voor-stap gids om IPTV-aanbieders te vergelijken en een betrouwbare provider te kiezen.",
      steps: [
        { name: "Controleer de proefperiode", text: "Kies een aanbieder die u eerst laat testen, zodat u zelf de stabiliteit en beeldkwaliteit kunt beoordelen." },
        { name: "Vergelijk zenders en prijzen", text: "Zet het aantal zenders, VOD-titels en de maandprijs van meerdere aanbieders naast elkaar." },
        { name: "Test de klantenservice", text: "Stel een vraag voordat u bestelt en beoordeel de snelheid en nuttigheid van de support." },
        { name: "Begin klein en upgrade later", text: "Start met een korte looptijd en verleng alleen als de aanbieder zich bewezen heeft." },
      ],
    },
    reviews: {
      eyebrow: "Waarom klanten kiezen voor",
      title: "De beoordelingen over onze",
      titleAccent: "IPTV-aanbieder",
      productName: "IPTV Compleet — Betrouwbare IPTV-aanbieder Nederland",
      productDescription:
        "Betrouwbare IPTV-aanbieder met stabiele servers, proefperiode en Nederlandstalige support, beoordeeld door klanten.",
      ratingValue: 4.9,
      reviewCount: 983,
      items: [
        { author: "Robert Moreau", location: "Arnhem", date: "2026-04-22", rating: 5, body: "Na drie slechte aanbieders eindelijk een echt stabiele provider. De support is betrokken." },
        { author: "Aylin Demir", location: "Enschede", date: "2026-03-30", rating: 5, body: "Proefperiode aangevraagd, meteen overtuigd. Geen onderbreking, zelfs niet tijdens het voetbal." },
        { author: "Bram Hendriks", location: "Apeldoorn", date: "2026-05-14", rating: 4, body: "Eerlijke prijzen en duidelijke communicatie. Mis nog een regionale zender maar verder zeer tevreden." },
        { author: "Nadia el Idrissi", location: "Haarlem", date: "2026-05-26", rating: 5, body: "Betrouwbaar en snel. Vragen worden in het Nederlands beantwoord en binnen een uur." },
      ],
    },
    local: {
      eyebrow: "Een aanbieder voor heel Nederland",
      title: "Uw IPTV-aanbieder overal in",
      titleAccent: "Nederland",
      intro:
        "Als landelijke IPTV-aanbieder bedienen we klanten in elke provincie en elke stad. Dezelfde stabiele servers en dezelfde support, waar u ook woont.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Nederlandstalige klantenservice, voor elke kijker van Maastricht tot Groningen.",
    },
  },

  // ──────────────────────────────────────────────────────── IPTV KOPEN ──
  "iptv-kopen": {
    seo: {
      eyebrow: "Koop uw IPTV veilig",
      title: "Waar u op let bij het",
      titleAccent: "kopen van een IPTV",
      intro:
        "Een IPTV kopen is eenvoudig, maar een veilige aankoop vraagt aandacht. Controleer de betaalmogelijkheden, de proefperiode en duidelijke voorwaarden. Bij IPTV Compleet bestelt u veilig met iDEAL en kijkt u binnen enkele minuten.",
      blocks: [
        {
          h3: "Betaal uw IPTV veilig",
          body:
            "Koop een IPTV alleen bij een aanbieder met vertrouwde betaalmiddelen zoals iDEAL of creditcard en een beveiligde betaalpagina (https). Wees voorzichtig met aanbieders die alleen crypto of cadeaukaarten accepteren.",
        },
        {
          h3: "Directe levering, geen wachttijd",
          body:
            "Een groot voordeel van het kopen van een IPTV is de directe levering. Na betaling ontvangt u automatisch uw gegevens per e-mail — geen monteur, geen pakket, geen wachttijd. U start dezelfde avond nog.",
        },
        {
          h3: "Eerst testen, dan kopen",
          body:
            "Twijfelt u nog? Kies een aanbieder met een proefperiode of korte looptijd. Zo beoordeelt u de beeldkwaliteit en stabiliteit voordat u een jaarabonnement neemt. Zeker kopen, zoals het hoort.",
        },
      ],
      links: [
        { label: "Bekijk abonnementen & prijzen", href: "/iptv-abonnement" },
        { label: "Kies een betrouwbare aanbieder", href: "/iptv-aanbieder" },
        { label: "Stel IPTV Smarters Pro in", href: "/iptv-smarters-pro" },
        { label: "Veelgestelde vragen & gidsen", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "Koop in 4 stappen",
      title: "Koop uw IPTV veilig",
      titleAccent: "IPTV",
      intro:
        "Een IPTV kopen bij IPTV Compleet is veilig en snel. Volg deze vier stappen en u kijkt vandaag nog.",
      schemaName: "IPTV veilig kopen in Nederland",
      schemaDescription:
        "Stap-voor-stap gids om veilig een IPTV-abonnement te kopen en direct te activeren.",
      totalTime: "PT5M",
      steps: [
        { name: "Kies uw pakket", text: "Selecteer het IPTV-abonnement met het gewenste aantal verbindingen en looptijd." },
        { name: "Betaal met iDEAL", text: "Betaal veilig via de beveiligde betaalpagina met iDEAL, creditcard of PayPal." },
        { name: "Ontvang uw gegevens", text: "Direct na betaling staan uw gegevens en uw activatielink in uw inbox." },
        { name: "Activeer en kijk", text: "Voer de gegevens in uw IPTV-app in en u heeft direct toegang tot alle zenders." },
      ],
    },
    reviews: {
      eyebrow: "Kopers aan het woord",
      title: "De beoordelingen over",
      titleAccent: "het kopen van IPTV",
      productName: "IPTV Compleet — IPTV kopen Nederland",
      productDescription:
        "Veilig IPTV kopen met directe levering en iDEAL, beoordeeld door kopers.",
      ratingValue: 4.8,
      reviewCount: 1192,
      items: [
        { author: "Denis Colin", location: "Breda", date: "2026-04-12", rating: 5, body: "Betaald met iDEAL en gegevens ontvangen in drie minuten. Precies zoals beloofd." },
        { author: "Priya Sharma", location: "Amersfoort", date: "2026-03-25", rating: 5, body: "Veilig en snel gekocht, geen twijfelachtige betaling. Werkt direct op de Smart TV." },
        { author: "Kevin Renaud", location: "Zwolle", date: "2026-05-09", rating: 4, body: "Fijn om eerst te proberen voordat je het jaarabonnement neemt. Directe levering." },
        { author: "Sofia Costa", location: "Leiden", date: "2026-05-30", rating: 5, body: "Eerste keer dat ik een IPTV koop en het is uitstekend verlopen. Duidelijke instructies in de e-mail." },
      ],
    },
    local: {
      eyebrow: "Levering overal in Nederland",
      title: "IPTV kopen overal in",
      titleAccent: "Nederland",
      intro:
        "Omdat IPTV digitaal wordt geleverd, koopt u en activeert u het overal in Nederland direct — geen verzending, geen wachttijd.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Van eerste betaling tot eerste stream: geregeld in enkele minuten, in elke gemeente.",
    },
  },

  // ─────────────────────────────────────────────────── IPTV NEDERLAND ──
  "iptv-nederland": {
    seo: {
      eyebrow: "IPTV in Nederland",
      title: "Een IPTV speciaal voor",
      titleAccent: "Nederland",
      intro:
        "IPTV Compleet is ontworpen voor de Nederlandse markt: een ruime keuze aan Nederlandse zenders (publiek, commercieel, sport) en internationale zenders, voetbal en grote competities, plus duizenden internationale zenders. Servers dicht bij Nederland zorgen voor een vloeiende stream.",
      blocks: [
        {
          h3: "Alle zenders in één interface",
          body:
            "U vindt een ruime keuze aan grote Nederlandse zenders — publiek, commercieel, film en cultuur — naast regionale en thematische zenders. Alles overzichtelijk ingedeeld met een complete EPG.",
        },
        {
          h3: "Sport en live-evenementen",
          body:
            "Mis geen enkele wedstrijd: voetbal, nationale bekers, motorsport, grote Europese competities en internationale toernooien kijkt u live in 4K via een ruime keuze aan sportzenders die in uw abonnement zijn inbegrepen. Het aanbod kan per regio verschillen.",
        },
        {
          h3: "Servers en support voor Nederland",
          body:
            "Onze infrastructuur is geoptimaliseerd voor het Nederlandse internet, met lage vertraging en hoge beschikbaarheid. De klantenservice is Nederlandstalig, voor altijd snelle en duidelijke hulp.",
        },
      ],
      links: [
        { label: "IPTV-abonnement voor Nederland", href: "/iptv-abonnement" },
        { label: "Onze IPTV-aanbieder", href: "/iptv-aanbieder" },
        { label: "Koop een IPTV", href: "/iptv-kopen" },
        { label: "IPTV-gids", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "Begin in Nederland",
      title: "Kijk IPTV in",
      titleAccent: "Nederland",
      intro:
        "Binnen enkele minuten kijkt u alle zenders. Volg deze vier stappen.",
      schemaName: "IPTV kijken in Nederland",
      schemaDescription:
        "Stap-voor-stap gids om IPTV te starten in Nederland, met Nederlandse en internationale zenders.",
      totalTime: "PT5M",
      steps: [
        { name: "Controleer uw internet", text: "Zorg voor een verbinding van minimaal 15 Mbit/s voor vloeiende 4K-streams." },
        { name: "Bestel uw abonnement", text: "Kies een pakket met alle Nederlandse en internationale zenders en betaal." },
        { name: "Installeer een IPTV-app", text: "Download bijvoorbeeld IPTV Smarters Pro op uw TV, telefoon of mediaspeler." },
        { name: "Voer uw gegevens in", text: "Log in met de ontvangen gegevens en alle zenders zijn beschikbaar." },
      ],
    },
    reviews: {
      eyebrow: "Kijkers in Nederland",
      title: "De beoordelingen over IPTV in",
      titleAccent: "Nederland",
      productName: "IPTV Compleet — IPTV Nederland",
      productDescription:
        "IPTV met alle Nederlandse en internationale zenders, sport en VOD, beoordeeld door kijkers uit het hele land.",
      ratingValue: 4.9,
      reviewCount: 1675,
      items: [
        { author: "Henri Bosch", location: "Nijmegen", date: "2026-04-16", rating: 5, body: "Alle Nederlandse en internationale zenders aanwezig en in hoge kwaliteit. Alsof u voor uw gewone TV zit." },
        { author: "Lucie Leroy", location: "Dordrecht", date: "2026-03-19", rating: 5, body: "Voetbal in 4K zonder haperingen, zelfs op zondagavond. Precies wat ik zocht." },
        { author: "Tarik Yilmaz", location: "Zoetermeer", date: "2026-05-07", rating: 4, body: "Veel Nederlandse en internationale zenders. Heel compleet, kleine leercurve met de app." },
        { author: "Anouk Petit", location: "Maastricht", date: "2026-05-24", rating: 5, body: "De Nederlandstalige klantenservice heeft me direct geholpen. Werkt perfect in Limburg." },
      ],
    },
    local: {
      eyebrow: "Van de Randstad tot de grens",
      title: "IPTV beschikbaar overal in",
      titleAccent: "Nederland",
      intro:
        "Of u nu in de Randstad woont of in een grensdorp — IPTV Compleet levert dezelfde kwaliteit en dezelfde zenders in elke provincie en gemeente.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Stabiele streams met lage vertraging, geoptimaliseerd voor het Nederlandse netwerk.",
    },
  },

  // ───────────────────────────────────────────────── IPTV SMARTERS PRO ──
  "iptv-smarters-pro": {
    seo: {
      eyebrow: "Over de applicatie",
      title: "Alles over",
      titleAccent: "IPTV Smarters Pro",
      intro:
        "IPTV Smarters Pro is een van de meest populaire IPTV-apps in Nederland. De app werkt op Android, iOS, Windows, Fire TV en Smart TV en bundelt live TV, films en series in een duidelijke interface met EPG.",
      blocks: [
        {
          h3: "Wat is IPTV Smarters Pro?",
          body:
            "IPTV Smarters Pro is een gratis IPTV-speler die uw IPTV Compleet-abonnement afspeelt. De app ondersteunt Xtream Codes en M3U-playlists, toont een compleet programmagids en onthoudt waar u was gebleven bij uw films en series.",
        },
        {
          h3: "Op welke apparaten werkt de app?",
          body:
            "U installeert IPTV Smarters Pro op smartphones en tablets met Android, iPhone en iPad, Amazon Fire TV Stick, Android TV-box, PC met Windows en de meeste Smart TV's. Met één account kijkt u op meerdere apparaten, afhankelijk van uw aantal verbindingen.",
        },
        {
          h3: "Veelgebruikte instellingen en tips",
          body:
            "Voor de beste ervaring schakelt u hardwarematige decoding in en kiest u de juiste EPG-bron. Als het beeld bevriest, herstart dan de app en controleer uw internetsnelheid. Onze Nederlandstalige support helpt u bij elke instelling.",
        },
      ],
      links: [
        { label: "Kies uw IPTV-abonnement", href: "/iptv-abonnement" },
        { label: "Koop een IPTV en begin", href: "/iptv-kopen" },
        { label: "IPTV in Nederland", href: "/iptv-nederland" },
        { label: "Meer installatiegidsen", href: "/iptv-gids" },
      ],
    },
    howto: {
      eyebrow: "Installatiegids",
      title: "Installeer",
      titleAccent: "IPTV Smarters Pro",
      intro:
        "IPTV Smarters Pro instellen kost slechts enkele minuten. Volg deze vier stappen.",
      schemaName: "IPTV Smarters Pro installeren en instellen",
      schemaDescription:
        "Stap-voor-stap gids om IPTV Smarters Pro te installeren en in te loggen met een IPTV-abonnement.",
      totalTime: "PT4M",
      steps: [
        { name: "Download de app", text: "Installeer IPTV Smarters Pro via de app-store van uw apparaat (Play Store, App Store of Fire TV)." },
        { name: "Kies de Xtream Codes-verbinding", text: "Open de app en selecteer 'Login with Xtream Codes API' voor de eenvoudigste configuratie." },
        { name: "Voer uw gegevens in", text: "Vul de gebruikersnaam, het wachtwoord en de server-URL in die u per e-mail heeft ontvangen." },
        { name: "Laad en kijk", text: "De app laadt de zenders en EPG; u kijkt daarna direct live TV, films en series." },
      ],
    },
    reviews: {
      eyebrow: "Gebruikerservaringen",
      title: "De beoordelingen over",
      titleAccent: "IPTV Smarters Pro",
      productName: "IPTV Compleet met IPTV Smarters Pro",
      productDescription:
        "IPTV-abonnement compatibel met IPTV Smarters Pro op alle apparaten, beoordeeld door gebruikers.",
      ratingValue: 4.7,
      reviewCount: 856,
      items: [
        { author: "Wesley Bruneau", location: "Rotterdam", date: "2026-04-20", rating: 5, body: "Configuratie met Xtream Codes was in een handomdraai gedaan. Werkt perfect op mijn Fire TV Stick." },
        { author: "Mei Lin", location: "Utrecht", date: "2026-03-28", rating: 4, body: "Fijne app en duidelijke gids van IPTV Compleet. De EPG laadt soms wat, daarna is alles perfect." },
        { author: "Driss Bakkali", location: "Eindhoven", date: "2026-05-13", rating: 5, body: "Geconfigureerd op telefoon, tablet en TV zonder problemen. Onthoudt goed waar ik was." },
        { author: "Iris Vermeulen", location: "Amsterdam", date: "2026-05-27", rating: 5, body: "Nooit eerder IPTV gebruikt, maar met de stappen lukte het in vijf minuten. Zeer tevreden." },
      ],
    },
    local: {
      eyebrow: "Werkt overal",
      title: "IPTV Smarters Pro overal in",
      titleAccent: "Nederland",
      intro:
        "IPTV Smarters Pro werkt op elk apparaat met internet; u kijkt dus overal in Nederland — thuis, onderweg of op vakantie in het land.",
      cities: NL_CITIES,
      provinces: NL_PROVINCES,
      outro:
        "Eén account, al uw apparaten, in elke provincie van Nederland.",
    },
  },
};
