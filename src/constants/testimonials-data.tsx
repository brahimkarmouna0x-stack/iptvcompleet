export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  border: string;
  time: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Julien Moreau",
    role: "Premium gebruiker",
    content: "Echt geweldig! Aanvankelijk was ik sceptisch over IPTV, maar het werkt perfect. Geen onderbrekingen tijdens live voetbal, dat was het belangrijkste voor mij. De installatie op mijn Apple TV duurde 5 minuten.",
    time: "2 dagen geleden",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
  {
    name: "Camille Lefèvre",
    role: "Geverifieerde klant",
    content: "Eindelijk een aanbieder die alle zenders aanbiedt zonder het minste probleem. De kwaliteit van de films is werkelijk ongelooflijk. De zoekfunctie is soms een beetje langzaam op mijn oude Samsung TV, maar verder niets op aan te merken.",
    time: "1 week geleden",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.5,
    border: "border-rouge-500/30",
  },
  {
    name: "Thomas Girard",
    role: "Sportliefhebber",
    content: "Uitstekende service. Ik had een vraag over de betaling en kreeg bijna onmiddellijk een reactie via WhatsApp. Ik gebruik het nu een maand en ben helemaal overtuigd. Ik heb inmiddels mijn oude TV-abonnement opgezegd.",
    time: "3 weken geleden",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
  {
    name: "Sophie Dubois",
    role: "Geverifieerde klant",
    content: "Mijn man kijkt voetbal en ik mijn series — ideaal om tegelijk op twee schermen te kunnen kijken. De installatie vroeg wat nadenken voor een beginner zoals ik, maar de gids heeft me erg geholpen.",
    time: "1 maand geleden",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4.5,
    border: "border-france-400/30",
  },
  {
    name: "Maxime Laurent",
    role: "Premium abonnee",
    content: "De beste kwaliteit die ik tot nu toe heb gezien. Ik heb veel andere aanbieders geprobeerd, maar dit is de eerste die echt constante 4K levert zonder onderbrekingen. Aan te raden voor alle sportfans.",
    time: "2 maanden geleden",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    border: "border-rouge-500/30",
  },
  {
    name: "Léa Martin",
    role: "Geverifieerde klant",
    content: "Wat een genot om weer alle zenders te vinden nu ik in het buitenland woon. Het werkt perfect op iPad en PC. Geweldig!",
    time: "3 maanden geleden",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    border: "border-rouge-500/35",
  },
  {
    name: "Nicolas Bernard",
    role: "Geverifieerde klant",
    content: "De klantenservice is echt goud waard. Ze hebben me 's avonds laat geholpen met de installatie op mijn Formuler box. Het wisselen van zender is super snel, het lijkt net gewone kabeltelevisie.",
    time: "4 maanden geleden",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
];
