import type { SixteenSectionContent } from "./types";

const LINK = {
  home: { label: "IPTV Compleet Home", href: "/", description: "Het beste IPTV-abonnement van Nederland met 31.000+ zenders." },
  kopen: { label: "IPTV Kopen", href: "/iptv-kopen", description: "Koop direct een IPTV-abonnement met veilige betaling en onmiddellijke activering." },
  abonnement: { label: "IPTV Abonnement", href: "/iptv-abonnement", description: "Vergelijk IPTV-abonnementen met flexibele looptijden." },
  aanbieder: { label: "IPTV Aanbieder", href: "/iptv-aanbieder", description: "Vergelijk IPTV-aanbieders en ontdek de beste keuze." },
  nederland: { label: "IPTV Nederland", href: "/iptv-nederland", description: "Alles over IPTV in Nederland: zenders, sport en installatie." },
};

const smartersPro: SixteenSectionContent = {
  slug: "iptv-smarters-pro",
  path: "/iptv-smarters-pro",
  meta: {
    title: "IPTV Smarters Pro ✓ Installatie- & Configuratiegids 2026",
    description: "Installatiegids voor IPTV Smarters Pro op Smart TV, Fire TV Stick, Android en iOS. Ontvang uw M3U-links en Xtream Codes voor onmiddellijke activering.",
    h1: "IPTV Smarters Pro – installatie- en configuratiegids voor elk apparaat",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "IPTV Smarters Pro · Stap voor stap",
    title: "Installeer IPTV Smarters Pro in een paar minuten",
    subtitle: "Volg onze duidelijke gids om IPTV Smarters Pro te installeren op uw Smart TV, Fire TV Stick, telefoon of tablet. Uitleg over M3U en Xtream Codes inbegrepen.",
    bg: "/images/hero-bg.webp",
    ctaPrimary: "Bekijk de installatiegids",
    ctaPrimaryHref: "#installatie",
    ctaSecondary: "M3U & Xtream Codes",
    ctaSecondaryHref: "#pakketten",
  },

  // ── Section 2: Trust bar ────────────────────────────────────────────────
  trustBar: {
    items: [
      { label: "gidsen per apparaat", value: "10+" },
      { label: "app-beoordeling", value: "4,5/5" },
      { label: "activeringen per dag", value: "100+" },
      { label: "Nederlandstalige ondersteuning", value: "24/7" },
    ],
  },

  // ── Section 3: Problem ──────────────────────────────────────────────────
  problem: {
    eyebrow: "Veelvoorkomende problemen",
    title: "Waarom de installatie van IPTV Smarters Pro soms mislukt",
    subtitle: "Veel gebruikers lopen vast bij de configuratie van IPTV Smarters Pro. Dit zijn de meest voorkomende obstakels.",
    pains: [
      { title: "IPTV Smarters Pro: het apparaat werkt niet met de app", desc: "Niet alle apparaten ondersteunen IPTV Smarters Pro. Of de app is beschikbaar maar werkt niet goed vanwege verouderde firmware of ontbrekende codecs." },
      { title: "IPTV Smarters Pro: de M3U-link of Xtream Codes werken niet", desc: "De ontvangen inloggegevens zijn verkeerd ingevoerd, bevatten een typfout, of de aanbieder heeft vage instructies gegeven. Resultaat: een zwart scherm." },
      { title: "IPTV Smarters Pro: de EPG (programmagids) laadt niet", desc: "Zonder een werkende elektronische programmagids mist u essentiële functies. U ziet alleen zendernummers zonder programmagegevens." },
      { title: "IPTV Smarters Pro: geen Nederlandstalige installatiehulp", desc: "Bij problemen staat u er alleen voor. YouTube-video's zijn in het Engels of verouderd. Stap-voor-stap gidsen in het Nederlands ontbreken." },
    ],
  },

  // ── Section 4: Solution ─────────────────────────────────────────────────
  solution: {
    eyebrow: "Onze aanpak",
    title: "Zo installeert u IPTV Smarters Pro zonder fouten",
    subtitle: "Met deze gestructureerde aanpak werkt IPTV Smarters Pro in 5 minuten op elk apparaat.",
    points: [
      { title: "IPTV Smarters Pro: kies de juiste versie van de app", desc: "IPTV Smarters Pro is beschikbaar voor Smart TV (Samsung, LG, Android TV), Fire TV Stick, iOS en Android. Download altijd de officiële versie uit de app-store van uw apparaat." },
      { title: "IPTV Smarters Pro: voer uw inloggegevens correct in", desc: "U ontvangt van ons een M3U-link en Xtream Codes. Kopieer ze exact — hoofdlettergevoelig — en plak ze in de app. Wij leveren duidelijke voorbeelden." },
      { title: "IPTV Smarters Pro: activeer de EPG-gids", desc: "Na het invoeren van uw inloggegevens laadt de app automatisch de programmagids. Controleer of de EPG-URL correct is voor volledige informatie." },
      { title: "IPTV Smarters Pro: hulp in het Nederlands bij elke stap", desc: "Ons supportteam begeleidt u via WhatsApp bij elke stap van de installatie. Stuur een foto van het probleem en we lossen het binnen 5 minuten op." },
    ],
  },

  // ── Section 5: Features ─────────────────────────────────────────────────
  features: {
    eyebrow: "App-functies",
    title: "Waarom IPTV Smarters Pro de beste IPTV-app is",
    subtitle: "Ontdek de functies die IPTV Smarters Pro tot de populairste IPTV-app maken.",
    features: [
      { title: "IPTV Smarters Pro: gebruiksvriendelijke interface", desc: "Een duidelijke en intuïtieve interface die direct laat zien hoe u zenders, films en de programmagids gebruikt. Geschikt voor alle leeftijden." },
      { title: "IPTV Smarters Pro: M3U- en Xtream Codes-ondersteuning", desc: "Twee manieren om uw IPTV-abonnement te koppelen. M3U voor eenvoudige afspeellijsten, Xtream Codes voor geavanceerde functies zoals EPG en VOD." },
      { title: "IPTV Smarters Pro: volledige EPG-integratie", desc: "Een complete programmagids met namen, beschrijvingen, tijden en genres. Zoek, filter en ontdek nieuwe programma's." },
      { title: "IPTV Smarters Pro: multi-scherm-ondersteuning", desc: "Kijk live tv en films op meerdere schermen tegelijk. Ideaal voor gezinnen waar iedereen zijn eigen programma op zijn eigen apparaat wil kijken." },
      { title: "IPTV Smarters Pro: catch-up en timeshift", desc: "Bekijk gemiste programma's met catch-up. Pauzeer en spoel live tv terug met timeshift. Ook beschikbaar voor Nederlandse en Franse zenders." },
      { title: "IPTV Smarters Pro: favorieten en ouderlijk toezicht", desc: "Maak uw eigen favorietenlijst met uw meest bekeken zenders. Stel ouderlijk toezicht in voor bepaalde zenders of inhoud." },
    ],
  },

  // ── Section 6: Why Us ───────────────────────────────────────────────────
  whyUs: {
    eyebrow: "Waarom wij",
    title: "Dit is waarom wij het beste werken met IPTV Smarters Pro",
    subtitle: "Onze service is volledig geoptimaliseerd voor IPTV Smarters Pro.",
    reasons: [
      { title: "IPTV Smarters Pro: vooraf geteste M3U & Xtream Codes", desc: "We testen elke M3U-link en elke Xtream Code voordat u deze ontvangt. Garantie dat het direct werkt in IPTV Smarters Pro op elk apparaat." },
      { title: "IPTV Smarters Pro: installatiegidsen in het Nederlands", desc: "Geen YouTube-video's in het Engels of verouderde forums. Wij bieden actuele stap-voor-stap gidsen in het Nederlands, met schermafbeeldingen per apparaat." },
      { title: "IPTV Smarters Pro: WhatsApp-hulp 24/7 voor installatie", desc: "Werkt het niet? Stuur een bericht en ons team helpt u op afstand met de installatie van IPTV Smarters Pro. Binnen 5 minuten antwoord." },
    ],
  },

  // ── Section 7: How It Works ─────────────────────────────────────────────
  how: {
    eyebrow: "Installatie in 3 stappen",
    title: "Zo installeert u IPTV Smarters Pro met IPTV Compleet",
    subtitle: "Volg deze 3 stappen en u kijkt binnen 5 minuten naar duizenden zenders.",
    steps: [
      { step: "01", title: "Download IPTV Smarters Pro", desc: "Ga naar de app-store van uw apparaat (Samsung Smart Hub, LG Content Store, Google Play, App Store of Amazon Appstore) en installeer de officiële IPTV Smarters Pro-app." },
      { step: "02", title: "IPTV Smarters Pro: voer uw inloggegevens in", desc: "Open de app en kies « Login with Xtream Codes » of « Load Your Playlist via M3U URL ». Voer de verstrekte inloggegevens exact in zoals ontvangen per e-mail of WhatsApp." },
      { step: "03", title: "IPTV Smarters Pro: begin met streamen", desc: "Na het laden van de afspeellijst verschijnen alle zenders, de EPG en de VOD-bibliotheek. Kies een zender en begin met kijken in 4K-kwaliteit." },
    ],
  },

  // ── Section 8: Device Compatibility ──────────────────────────────────────
  devices: {
    eyebrow: "Ondersteunde apparaten",
    title: "IPTV Smarters Pro werkt het beste op deze apparaten",
    subtitle: "IPTV Smarters Pro is beschikbaar voor de meeste moderne apparaten.",
    deviceGroups: [
      { name: "Smart TV", items: ["Samsung Smart TV (2017+)", "LG webOS (2018+)", "Android TV (Sony, Philips, TCL)", "Hisense VIDAA", "Panasonic"] },
      { name: "Streaming-apparaten", items: ["Amazon Fire TV Stick 4K Max", "Google Chromecast with Google TV", "Nvidia Shield TV Pro", "Formuler Z11", "Dune HD", "MAG 524"] },
      { name: "Mobiele apparaten", items: ["iPhone 12-16 (iOS 15+)", "iPad Pro/Air/Mini (iPadOS)", "Samsung Galaxy S23-25", "Google Pixel 7-9", "OnePlus 12/13", "Xiaomi 14T"] },
      { name: "Overige platforms", items: ["PC Windows (via BlueStacks)", "Mac (via Android-emulator)", "Linux (via Android-emulator)", "IPTV Smarters PC Edition"] },
    ],
    ctaText: "Bekijk de volledige installatiegids per apparaat",
  },

  // ── Section 9: Channels ─────────────────────────────────────────────────
  channels: {
    eyebrow: "Zenders in de app",
    title: "Dit zijn de zenders die u bekijkt via IPTV Smarters Pro",
    subtitle: "Een overzicht van het aanbod dat verschijnt in de app na het invoeren van uw inloggegevens.",
    channelGroups: [
      { name: "Frans & NL aanbod", items: ["Franse algemene zenders HD", "Franse bioscoopzenders HD", "Nederlandse publieke zenders HD", "Nederlandse commerciële zenders HD", "Sportzenders HD", "Voetbal HD", "Cultuur HD", "Comedy HD"] },
      { name: "Films & series (VOD)", items: ["Nieuwste bioscoopreleases", "Exclusieve originals", "Volledige series", "IMDb Top 250", "Documentaires", "Jeugdprogramma's"] },
      { name: "Internationaal sport", items: ["Britse sport", "Sport op aanvraag", "Amerikaanse sport", "Internationaal voetbal", "Europese sport", "Afrikaanse sport", "Oceanië sport"] },
      { name: "Nieuws & informatie", items: ["Internationaal nieuws", "Brits nieuws", "Frans nieuws", "24/7 nieuws", "Europees nieuws", "Arabische actualiteit"] },
    ],
  },

  // ── Section 10: Pricing ─────────────────────────────────────────────────
  pricing: {
    pillText: "Abonnementen",
    title: "Begin met IPTV Smarters Pro",
    subtitle: "Kies een abonnement en ontvang onmiddellijk uw M3U-link en Xtream Codes voor IPTV Smarters Pro.",
  },

  // ── Section 11: Comparison ────────────────────────────────────────────────
  comparison: {
    eyebrow: "M3U configureren",
    title: "IPTV Smarters Pro vergeleken met andere IPTV-apps",
    subtitle: "Waarom IPTV Smarters Pro de beste keuze is voor uw IPTV-abonnement.",
    rows: [
      { feature: "Gebruiksgemak", us: "Zeer eenvoudig", them: "Moeilijk tot gemiddeld" },
      { feature: "Ondersteunde apparaten", us: "Smart TV, Fire Stick, iOS, Android", them: "Beperkt tot 1-2 platforms" },
      { feature: "M3U-ondersteuning", us: "Ja, volledig", them: "Variabel" },
      { feature: "Xtream Codes API", us: "Ja", them: "Niet altijd" },
      { feature: "EPG-integratie", us: "Volledig automatisch", them: "Handmatig of afwezig" },
      { feature: "VOD-ondersteuning", us: "Ja, met zoekfunctie", them: "Beperkt" },
      { feature: "Multi-scherm", us: "Ja, onbeperkt", them: "Beperkt tot 1 scherm" },
    ],
  },

  // ── Section 12: Testimonials ─────────────────────────────────────────────
  testimonials: {
    eyebrow: "Beoordelingen",
    title: "Wat gebruikers zeggen over IPTV Smarters Pro + IPTV Compleet",
    subtitle: "Duizenden gebruikers installeren de app met onze hulp.",
  },

  // ── Section 13: Security & Reliability ────────────────────────────────────
  security: {
    eyebrow: "Ondersteuning",
    title: "Veilig gebruik van IPTV Smarters Pro",
    subtitle: "Wij zorgen voor de veiligheid van uw gegevens en uw apparaten.",
    items: [
      { title: "IPTV Smarters Pro: officiële app, geen APK", desc: "Download altijd IPTV Smarters Pro uit de officiële winkel van uw apparaat. Vermijd APK-bestanden van onbekende bronnen die malware kunnen bevatten." },
      { title: "IPTV Smarters Pro: beveiligde M3U-links", desc: "Uw persoonlijke M3U-link is uniek en mag niet worden gedeeld. Bij verdachte activiteit kunt u een nieuwe link aanvragen bij ons supportteam." },
      { title: "IPTV Smarters Pro: geen wachtwoorden opgeslagen", desc: "Uw inloggegevens worden alleen lokaal op uw apparaat opgeslagen. Wij slaan geen wachtwoorden op en delen geen gegevens met derden." },
      { title: "IPTV Smarters Pro: automatische updates", desc: "Houd IPTV Smarters Pro up-to-date voor de beste beveiliging en de nieuwste functies. Updates worden automatisch geïnstalleerd via de app-store." },
    ],
  },

  // ── Section 14: FAQ (exactly 8) ─────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen over IPTV Smarters Pro",
    subtitle: "De antwoorden op de meest gestelde vragen over installatie en gebruik.",
    faqs: [
      {
        question: "Wat is IPTV Smarters Pro precies?",
        answer: "IPTV Smarters Pro is een populaire waarmee u IPTV kunt kijken op verschillende apparaten. De app ondersteunt M3U-afspeellijsten en de Xtream Codes API. Hij is beschikbaar voor Smart TV, Fire TV Stick, iOS, Android en andere platforms."
      },
      {
        question: "Hoe installeer ik IPTV Smarters Pro op mijn Samsung Smart TV?",
        answer: "Ga naar de Samsung Smart Hub, zoek naar « IPTV Smarters Pro » in de app-store en installeer deze. Open de app, kies « Login with Xtream Codes » en voer uw inloggegevens in. Uw zenders worden automatisch geladen met de programmagids."
      },
      {
        question: "Wat is het verschil tussen M3U en Xtream Codes?",
        answer: "M3U is een afspeellijst-link met al uw zenders. U plakt de URL in de app en de zenders worden geladen. Xtream Codes is een API-methode waar u een gebruikersnaam, wachtwoord en server-URL invoert, voor een completere ervaring met EPG en VOD."
      },
      {
        question: "Waarom werkt IPTV Smarters Pro niet op mijn apparaat?",
        answer: "Dit kan komen door verouderde firmware, onvoldoende geheugen of een niet-compatibel systeemversie. Controleer of uw apparaat minimaal Android 7.0 of iOS 14 ondersteunt. Bij Smart TV moet de app beschikbaar zijn in de officiële winkel."
      },
      {
        question: "Hoe voeg ik mijn IPTV-abonnement toe aan IPTV Smarters Pro?",
        answer: "Open de app, klik op « Login » en kies « Xtream Codes API » of « M3U URL ». Voer uw inloggegevens in (server-URL, gebruikersnaam, wachtwoord of M3U-link). Na het laden verschijnt uw volledige zenderlijst met EPG en VOD."
      },
      {
        question: "Hoe krijg ik de EPG-gids aan de slag in IPTV Smarters Pro?",
        answer: "De EPG wordt automatisch geladen na het invoeren van uw Xtream Codes of M3U-link. Als de gids niet verschijnt, controleer dan of de EPG-URL correct is. Bij IPTV Compleet ontvangt u de juiste EPG-URL als onderdeel van uw configuratie."
      },
      {
        question: "Kan ik IPTV Smarters Pro op meerdere apparaten tegelijk gebruiken?",
        answer: "Ja, u kunt IPTV Smarters Pro op al uw apparaten installeren. Afhankelijk van uw abonnement kunt u tegelijk streamen op 1, 2, 3 of 4 apparaten. De app synchroniseert uw favorieten niet tussen apparaten."
      },
      {
        question: "Wat doe ik als IPTV Smarters Pro blijft onderbreken?",
        answer: "Controleer eerst uw internetverbinding (minimaal 25 Mbps voor HD, 50 Mbps voor 4K). Sluit andere bandbreedte-intensieve apps. Schakel « Hardware Decoding » in in de app-instellingen. Als het probleem aanhoudt, neem contact op met ons supportteam."
      },
    ],
  },

  // ── Section 15: Internal Linking Hub ──────────────────────────────────────
  internalLinks: {
    eyebrow: "Meer IPTV-hulppagina's",
    title: "IPTV Smarters Pro: ontdek meer over IPTV en onze diensten",
    subtitle: "Bekijk onze andere pagina's voor een compleet overzicht van ons aanbod.",
    links: [LINK.home, LINK.kopen, LINK.abonnement, LINK.aanbieder, LINK.nederland],
  },

  // ── Section 16: Final CTA ────────────────────────────────────────────────
  finalCta: {
    title: "Klaar om IPTV Smarters Pro te installeren?",
    description: "Kies een abonnement, ontvang onmiddellijk uw M3U-link en Xtream Codes, en stream duizenden zenders in 5 minuten op uw favoriete apparaat.",
  },
};

export default smartersPro;
