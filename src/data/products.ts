import vanillaCandle from "@/assets/candle-vanilla.jpg";
import amberCandle from "@/assets/candle-amber.jpg";
import lavenderCandle from "@/assets/candle-lavender.jpg";
import sandalwoodCandle from "@/assets/candle-sandalwood.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  scent: string;
  burnTime: string;
  description: string;
  ingredients: string[];
  size: string;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Vanille Douce",
    price: 45,
    originalPrice: 55,
    image: vanillaCandle,
    scent: "Vanille Madagascar",
    burnTime: "45h",
    description: "Une bougie aux notes gourmandes de vanille pure de Madagascar, créant une atmosphère chaleureuse et réconfortante.",
    ingredients: ["Cire de soja naturelle", "Huile essentielle de vanille", "Mèche en coton bio"],
    size: "220g",
    isSale: true,
    category: "Gourmand"
  },
  {
    id: "2",
    name: "Ambre Mystique",
    price: 52,
    image: amberCandle,
    scent: "Ambre & Résine",
    burnTime: "50h",
    description: "Un parfum envoûtant d'ambre et de résines précieuses pour des soirées mystérieuses et sensuelles.",
    ingredients: ["Cire de soja naturelle", "Ambre gris", "Résine de benjoin", "Mèche en coton bio"],
    size: "250g",
    isNew: true,
    category: "Oriental"
  },
  {
    id: "3",
    name: "Lavande Provence",
    price: 38,
    image: lavenderCandle,
    scent: "Lavande de Provence",
    burnTime: "40h",
    description: "La pureté de la lavande provençale pour un moment de détente et de sérénité absolue.",
    ingredients: ["Cire de soja naturelle", "Huile essentielle de lavande", "Mèche en coton bio"],
    size: "200g",
    category: "Relaxant"
  },
  {
    id: "4",
    name: "Bois de Santal",
    price: 58,
    image: sandalwoodCandle,
    scent: "Santal & Cèdre",
    burnTime: "55h",
    description: "Un mélange sophistiqué de bois de santal et de cèdre pour une ambiance zen et raffinée.",
    ingredients: ["Cire de soja naturelle", "Huile de santal", "Essence de cèdre", "Mèche en bois"],
    size: "280g",
    isNew: true,
    category: "Boisé"
  }
];

export const categories = [
  "Tous",
  "Gourmand",
  "Oriental", 
  "Relaxant",
  "Boisé"
];