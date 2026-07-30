import { Link } from ".";
import {
  getIptvGermanPath,
  IPTV_GERMAN_PAGES,
} from "@/content/iptv-german-pages";

export const NAV_LINKS: Link[] = [
  {
    label: "IPTV Compleet",
    href: "/",
  },
  {
    label: "Prijzen",
    href: "#prijzen",
  },
  {
    label: "IPTV kopen",
    href: "/iptv-kopen",
  },
  {
    label: "Abonnement",
    href: "/iptv-abonnement",
  },
  {
    label: "Aanbieder",
    href: "/iptv-aanbieder",
  },
  {
    label: "IPTV Nederland",
    href: "/iptv-nederland",
  },
  {
    label: "IPTV Smarters Pro",
    href: "/iptv-smarters-pro",
  },
  {
    label: "Contact",
    href: "/support/contact",
  },
];
export const productsFooterLinks: Link[] = [
  {
    label: "Voordelen",
    href: "/#voordelen",
  },
  {
    label: "Prijzen",
    href: "/#prijzen",
  },
  {
    label: "Zenders",
    href: "/#kanalen",
  },
  {
    label: "Pakketten",
    href: "/#pakketten",
  },
];

export const supportFooterLinks: Link[] = [
  {
    label: "Helpcentrum",
    href: "/support",
  },
  {
    label: "Installatiegidsen",
    href: "/support/guides",
  },
  {
    label: "Contact",
    href: "/support/contact",
  },
  {
    label: "Systeemstatus",
    href: "/support/status",
  },
  {
    label: "Over ons",
    href: "/over-ons",
  },
];

export const categories = [
  {
    name: "Sport",
    count: "Honderden sportzenders",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Films",
    count: "Duizenden films",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Series",
    count: "Duizenden series",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Documentaires",
    count: "Grote selectie",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Kinderzenders",
    count: "Veilig en gevarieerd",
    image:
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Internationale zenders",
    count: "190+ landen",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
];

export const features = [
  {
    title: "Ultra HD 4K streaming",
    description:
      "Haarscherpe 4K-resolutie met HDR-ondersteuning. Ervaar elk beeld met adembenemende details.",
    icon: "tv",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Supersnelle servers",
    description:
      "Wereldwijd CDN-netwerk met 99,9% uptime. De inhoud wordt gestreamd vanaf de dichtstbijzijnde server.",
    icon: "server",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
  {
    title: "Geen onderbrekingen",
    description:
      "Adaptieve streamingtechnologie zorgt voor vloeiende weergave, zelfs bij een tragere internetverbinding.",
    icon: "bolt",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Multi-apparaten",
    description:
      "Kijk op Smart TV, smartphone, tablet of laptop. Naadloze synchronisatie tussen al je apparaten.",
    icon: "mobile",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
  {
    title: "Zenders van over de hele wereld",
    description:
      "Toegang tot content uit meer dan 190 landen. Lokale en internationale zenders verzameld op één plek.",
    icon: "globe",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Klantenservice 24/7",
    description:
      "Expert-ondersteuning dag en nacht. Gemiddelde responstijd van minder dan 5 minuten.",
    icon: "headset",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
];

export const faqs = [
  {
    question: "Wat is een IPTV-abonnement precies?",
    answer:
      "Een IPTV-abonnement (Internet Protocol Television) geeft je toegang tot live tv-zenders, films en series via je internetverbinding, in plaats van via de traditionele kabel of schotel. Met IPTV Compleet kijk je op elk apparaat, waar je ook bent, met meer dan 31.000 zenders en een uitgebreide VOD-bibliotheek in 4K — compleet in één abonnement.",
  },
  {
    question: "Welke apparaten worden ondersteund?",
    answer:
      "IPTV Compleet werkt op vrijwel elk modern apparaat: Smart TV (Samsung, LG, Sony), smartphones en tablets Android, iPhone en iPad, computers met Windows en Mac, Amazon Fire TV Stick, Android TV-box, Chromecast en MAG-apparaten. We ondersteunen ook populaire IPTV-apps zoals IPTV Smarters Pro, TiviMate en VLC.",
  },
  {
    question: "Hoe stel ik mijn IPTV-abonnement in?",
    answer:
      "De installatie duurt minder dan 5 minuten. Na je bestelling ontvang je direct een e-mail met je M3U-afspeellijst-URL en je Xtream Codes API-invoergegevens. Voer deze gegevens in bij je favoriete IPTV-app en je kunt meteen kijken. Ons supportteam begeleidt je 24/7 bij de installatie.",
  },
  {
    question: "Is een gratis proefperiode beschikbaar?",
    answer:
      "Ja! We bieden een gratis IPTV-proefperiode zodat je onze dienst kunt uitproberen voordat je een beslissing neemt. De proefperiode geeft volledige toegang tot alle zenders en VOD-content. Neem contact op met ons supportteam via WhatsApp om je gratis proefperiode aan te vragen.",
  },
  {
    question: "Kan ik tegelijkertijd op meerdere apparaten kijken?",
    answer:
      "Ja! Afhankelijk van je abonnement kun je tegelijk streamen op 1 tot 4 apparaten. Zo kan het hele gezin tegelijk verschillende programma's kijken op verschillende apparaten, zonder onderbrekingen.",
  },
  {
    question: "Welke internetsnelheid heb ik nodig voor IPTV?",
    answer:
      "Voor optimale streaming raden we aan: SD-kwaliteit (10 Mbps), HD-kwaliteit (15 Mbps) en 4K Ultra HD (25 Mbps). Onze adaptieve streamingtechnologie past de kwaliteit automatisch aan je verbinding aan om onderbrekingen te voorkomen.",
  },
  {
    question: "Wat is de beste IPTV-aanbieder in Nederland?",
    answer:
      "De beste IPTV-aanbieder biedt een stabiele verbinding, 4K-kwaliteit, een ruime keuze aan Nederlandse, Franse en internationale zenders, snelle servers en betrouwbare klantenservice 24/7. IPTV Compleet combineert dit alles met concurrerende prijzen en een gratis proefperiode, waardoor we tot de beste premium IPTV-aanbieders van Nederland behoren.",
  },
  {
    question: "Is IPTV legaal in Nederland?",
    answer:
      "IPTV is een technologie voor televisiedistributie via internet. De legaliteit van een dienst hangt af van het bezit van de juiste uitzendrechten. We raden je aan om altijd een dienst te kiezen die over de vereiste rechten beschikt en de lokale regelgeving te controleren die op jouw situatie van toepassing is.",
  },
  {
    question: "Welke zenders zijn beschikbaar?",
    answer:
      "Ons aanbod omvat een ruime keuze aan populaire Nederlandse zenders (publieke, privé, entertainment en sport) evenals veel Franse zenders (generalistisch, publiek, film en sport). Daarnaast heb je toegang tot duizenden internationale zenders uit meer dan 190 landen. Het beschikbare aanbod kan variëren per regio.",
  },
  {
    question: "Kan ik live sport kijken via IPTV?",
    answer:
      "Onze pakketten bieden een ruime keuze aan live sportzenders: voetbal, autosport, tennis en vele andere sporten, in HD en 4K. Het aanbod aan zenders kan variëren per regio en kan veranderen.",
  },
  {
    question: "Wat is het verschil tussen IPTV en traditionele kabeltelevisie?",
    answer:
      "Bij traditionele kabeltelevisie betaal je een vast bedrag via een coaxkabel of schotel. IPTV streamt de content via internet, waardoor je veel meer zenders, films en series krijgt voor een lagere prijs, zonder vast contract en bruikbaar op al je apparaten.",
  },
  {
    question: "Hoe bestel ik een IPTV-abonnement?",
    answer:
      "Je kiest eenvoudig een pakket op onze prijzenpagina, selecteert het aantal verbindingen en de looptijd, en rondt de bestelling af. Vervolgens ontvang je je gegevens per e-mail. Een IPTV-abonnement bij IPTV Compleet bestel je in enkele minuten.",
  },
  {
    question: "Welke IPTV-speler of -app raden jullie aan?",
    answer:
      "Populaire IPTV-spelers zijn IPTV Smarters Pro, TiviMate en VLC. Op Fire TV Stick werkt IPTV Smarters Pro uitstekend, terwijl TiviMate de favoriet is op Android TV. We voorzien je van een duidelijke handleiding voor elke app.",
  },
  {
    question: "Ondersteunen jullie 4K- en 8K-streaming?",
    answer:
      "Ja. Een groot deel van ons aanbod is beschikbaar in 4K Ultra HD met HDR, en een selectie aan content zelfs in 8K. Voor 4K raden we een minimale internetsnelheid van 25 Mbps aan voor een vloeiende ervaring zonder onderbrekingen.",
  },
  {
    question: "Is IPTV Compleet een goedkoop IPTV-abonnement?",
    answer:
      "We bieden premium IPTV aan tegen concurrerende prijzen. Hoe langer de gekozen looptijd, hoe lager de maandelijkse kosten. Zo bieden we een van de voordeligste en betrouwbaarste IPTV-abonnementen van Nederland, zonder compromissen op kwaliteit.",
  },
  {
    question: "Hoe vergelijk ik verschillende IPTV-abonnementen?",
    answer:
      "Bij het vergelijken van IPTV-abonnementen let je op beeldkwaliteit (HD/4K), het aantal zenders, de stabiliteit van de servers, het aantal gelijktijdige verbindingen, de klantenservice en de prijs. Op onze prijzenpagina staat alles duidelijk naast elkaar.",
  },
  {
    question: "Werkt IPTV ook met een VPN?",
    answer:
      "Ja, onze dienst werkt uitstekend met een VPN. Een VPN kan zelfs handig zijn als je internetprovider bepaalde streams beperkt. De streamingkwaliteit kan enigszins variëren afhankelijk van de gekozen VPN-server.",
  },
  {
    question: "Heb ik ook toegang tot films en series op afroep (VOD)?",
    answer:
      "Uiteraard. Naast live tv heb je toegang tot een uitgebreide VOD-bibliotheek met films en series, inclusief de nieuwste releases. Kijk wanneer het jou uitkomt, met ondertiteling indien beschikbaar.",
  },
  {
    question: "Wat gebeurt er als een zender niet werkt?",
    answer:
      "Onze servers worden 24/7 gemonitord en problemen worden doorgaans binnen enkele minuten opgelost. Werkt een zender toch niet? Neem contact op via WhatsApp of e-mail; ons supportteam is dag en nacht beschikbaar.",
  },
  {
    question: "Is mijn betaling veilig?",
    answer:
      "Alle betalingen lopen via een beveiligde verbinding. We behandelen je gegevens zorgvuldig en delen deze nooit met derden. Bekijk ons privacybeleid voor meer informatie over de bescherming van je gegevens.",
  },
  {
    question: "Kan ik mijn IPTV-abonnement verlengen of upgraden?",
    answer:
      "Ja, je kunt je abonnement op elk moment verlengen of upgraden naar meer verbindingen of een langere looptijd. Neem contact op met ons supportteam en wij regelen de wijziging zonder onderbreking van je dienst.",
  },
  {
    question: "Hoe zeg ik mijn abonnement op?",
    answer:
      "Je kunt op elk moment opzeggen door contact op te nemen met ons supportteam. Er zijn geen opzegkosten of verborgen kosten. Je dienst blijft actief tot het einde van je huidige facturatieperiode.",
  },
];
export const FOOTER_PAGES: Link[] = IPTV_GERMAN_PAGES.map((page) => ({
  label: page.keyword.toLowerCase(),
  href: getIptvGermanPath(page.slug),
}));
