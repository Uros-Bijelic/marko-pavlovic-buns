import type { Language } from '@/context/LanguageContext';

export type BunProduct = {
  id: string;
  image: string;
  imageSize?: 'lg' | 'md';
  // extra padding to compensate for source photos cropped tighter to the product,
  // which otherwise render larger than other images of the same imageSize
  imageInset?: boolean;
  isSmallerBun?: boolean;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
};

export const buns: BunProduct[] = [
  {
    id: 'shokupan-600',
    image: '/shokupan.png',
    imageSize: 'lg',
    title: {
      sr: 'Shokupan 600 g',
      en: 'Shokupan 600 g',
    },
    subtitle: {
      sr: 'Tradicionalni japanski mlečni hleb pečen u Pullman kalupu.',
      en: 'Traditional Japanese milk bread baked in a Pullman tin.',
    },
    description: {
      sr: 'Izuzetno mekan, vazdušast i pravilnog pravougaonog oblika, savršen je za premium sendviče, tost i francuske prženice. Njegova fina tekstura omogućava ravnomerno pečenje i izuzetno prijatan zalogaj.',
      en: "Exceptionally soft, airy and perfectly rectangular in shape, it's ideal for premium sandwiches, toast and French toast. Its fine texture allows for even baking and a wonderfully pleasant bite.",
    },
  },
  {
    id: 'potato-bun-85',
    image: '/bun.png',
    imageSize: 'md',
    imageInset: true,
    isSmallerBun: true,
    title: {
      sr: 'Potato Bun 85 g',
      en: 'Potato Bun 85 g',
    },
    subtitle: {
      sr: 'Dostupan sa različitim vrstama posipa.',
      en: 'Available with different types of toppings.',
    },
    description: {
      sr: 'Idealan izbor za smash burgere i burgere do 180 g mesa. Mekan, lagan i stabilan da zadrži strukturu burgera do poslednjeg zalogaja.',
      en: "The ideal choice for smash burgers and burgers up to 180 g of meat. Soft, light and stable enough to hold the burger's structure to the very last bite.",
    },
  },
  {
    id: 'potato-bun-100',
    image: '/susam-bun.png',
    imageSize: 'md',
    title: {
      sr: 'Potato Bun 100 g',
      en: 'Potato Bun 100 g',
    },
    subtitle: {
      sr: 'Dostupan sa različitim vrstama posipa.',
      en: 'Available with different types of toppings.',
    },
    description: {
      sr: 'Razvijen za restoranske burgere od 180g mesa i više. Prečnika 11 cm, pruža idealan odnos veličine, strukture i mekoće za veće i bogatije burgere.',
      en: 'Developed for restaurant burgers with patties of 180 g and more. At 11 cm in diameter, it offers the ideal balance of size, structure and softness for bigger, richer burgers.',
    },
  },
];
