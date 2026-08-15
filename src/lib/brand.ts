/**
 * Central Brand Configuration for Zette's Food 2 Go
 * Easily customizable for all contact details, links, product catalogs, and policies.
 */

import packImg from '../assets/images/zettes_longganisa_pack_1786812897443.jpg';
import founderImg from '../assets/images/zettes_founder_portrait_1786812910848.jpg';
import breakfastImg from '../assets/images/zettes_plated_breakfast_1786812922837.jpg';
import familyImg from '../assets/images/zettes_family_table_1786812937938.jpg';
import sizzleImg from '../assets/images/zettes_sizzle_pan_1786812957658.jpg';

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  tagline: string;
  badge: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  specs: {
    weight?: string;
    packCount?: string;
    storage?: string;
    shelfLife?: string;
  };
  pricePlaceholder?: string;
  primaryImage: string;
  secondaryImage: string;
  inStock: boolean;
  featured: boolean;
}

export const BRAND_CONFIG = {
  // Brand identity
  brandName: "Zette's Food 2 Go",
  founderName: "Zette",
  flagshipProduct: "Special Longganisa",
  tagline: "Good Food. Good Mood. Go Zette's.",
  supportingTagline: "Made with Love. Packed with Flavor.",
  tagalogCatchphrase: "Sarap na, sulit pa!",
  shortBio: "Behind Zette's Food 2 Go is Zette — the face and heart behind the brand. What started with a love for good food is becoming something made to be shared — one delicious bite at a time.",

  // Contact & Social links (Centralized placeholders)
  orderUrl: "#order-modal",
  messengerUrl: "https://m.me/zettesfood2go",
  facebookUrl: "https://facebook.com/zettesfood2go",
  instagramUrl: "https://instagram.com/zettesfood2go",
  instagramHandle: "@zettesfood2go",
  whatsappUrl: "https://wa.me/639170000000",
  phone: "+63 917 000 0000",
  email: "orders@zettesfood2go.com",
  location: "Metro Manila & Nearby Delivery Hubs, Philippines",
  businessHours: "Monday – Saturday: 8:00 AM – 6:00 PM (Orders & Deliveries)",
  deliveryAreas: "Metro Manila, Rizal, Cavite, Laguna, and designated provincial pickup points",

  // Color Palette Tokens
  colors: {
    primaryPurple: "#5B2A86",
    deepPurple: "#32124F",
    lightPurple: "#7A3DB4",
    primaryRed: "#D71920",
    brightRed: "#F2292E",
    warmWhite: "#FFF9F5",
    white: "#FFFFFF",
    dark: "#211A25"
  },

  // Assets mapping
  assets: {
    pack: packImg,
    founder: founderImg,
    breakfast: breakfastImg,
    family: familyImg,
    sizzle: sizzleImg
  },

  // Products catalog (Architected for seamless future product expansion)
  products: [
    {
      id: "special-longganisa",
      name: "Special Longganisa",
      slug: "special-longganisa",
      subtitle: "Homemade Filipino Pork Sausage",
      tagline: "Your next favorite meal starts here.",
      badge: "Signature Flagship",
      description: "Made to bring something delicious to the table — whether it's breakfast, merienda, family time, or a quick food trip. Expertly marinated with natural garlic, brown sugar, and spices, then vacuum-sealed fresh.",
      shortDescription: "Plump, savory-sweet artisanal longganisa made with genuine care and vacuum-packed frozen fresh.",
      highlights: [
        "Plump & juicy pork blend",
        "Perfect balance of savory garlic & sweetness",
        "Vacuum-sealed frozen freshness",
        "Zero artificial fillers",
        "Quick and easy stovetop preparation"
      ],
      specs: {
        weight: "Standard pack (approx. 500g / 12 pcs)",
        storage: "Keep frozen at -18°C",
        shelfLife: "Up to 3 months frozen",
        packCount: "Vacuum pack"
      },
      pricePlaceholder: "Special Introductory Pack",
      primaryImage: packImg,
      secondaryImage: breakfastImg,
      inStock: true,
      featured: true
    }
  ] as ProductItem[],

  // 4 Brand Pillars (Why Zette's)
  pillars: [
    {
      id: "love",
      title: "MADE WITH LOVE",
      desc: "Food created with genuine care, authentic dedication, and home-kitchen passion.",
      badge: "Heartcrafted"
    },
    {
      id: "flavor",
      title: "PACKED WITH FLAVOR",
      desc: "Because every bite should be worth remembering — caramelized savory-garlic bliss.",
      badge: "Rich Taste"
    },
    {
      id: "fresh",
      title: "FROZEN FRESH",
      desc: "Carefully sealed at peak preparation. Locked in flavor, ready whenever you are.",
      badge: "Peak Fresh"
    },
    {
      id: "togo",
      title: "FOOD TO GO",
      desc: "Easy to store, easy to bring, quick to cook, and wonderful to share with loved ones.",
      badge: "Easy Feast"
    }
  ],

  // 4 Food Moments
  foodMoments: [
    {
      id: "breakfast",
      title: "BREAKFAST",
      subtitle: "Start the day right.",
      desc: "The timeless Filipino morning classic — golden Longsilog with hot garlic sinangag, sunny egg, and spiced cane vinegar.",
      image: breakfastImg,
      tag: "Morning Glory"
    },
    {
      id: "merienda",
      title: "MERIENDA",
      subtitle: "Because cravings don't follow a schedule.",
      desc: "Mid-afternoon pick-me-up or midnight craving. Sizzled in 10 minutes, served with warm pandesal or steamed rice.",
      image: sizzleImg,
      tag: "Quick Cravings"
    },
    {
      id: "family",
      title: "FAMILY TABLE",
      subtitle: "Good food belongs in the middle of the table.",
      desc: "Sunday lunches, holiday breakfasts, and casual reunions where sharing a hot plate brings everyone closer.",
      image: familyImg,
      tag: "Shared Joy"
    },
    {
      id: "foodtrip",
      title: "FOOD TRIP",
      subtitle: "Pack it. Share it. Enjoy it.",
      desc: "Road trips, weekend getaways, out-of-town villas, or pasalubong for relatives. Easy to transport in a cooler.",
      image: packImg,
      tag: "Anywhere Feast"
    }
  ],

  // FAQs (Exact structure as requested, editable)
  faqItems: [
    {
      question: "What is Zette's Food 2 Go?",
      answer: "Zette's Food 2 Go is a personal, modern Filipino food brand created by Zette, dedicated to bringing delicious, comforting, home-crafted meals and food products directly to your dining table."
    },
    {
      question: "What is Special Longganisa?",
      answer: "Special Longganisa is our flagship homemade Filipino pork sausage — generously marinated with savory garlic, subtle sweetness, and authentic spices, vacuum-sealed frozen fresh so every bite is juicy and flavorful."
    },
    {
      question: "How can I order?",
      answer: "Ordering is easy! Click the 'Order Now' button anywhere on our website, select your quantity, or reach out to us directly through Facebook Messenger or Instagram. We will confirm your order details and delivery schedule immediately."
    },
    {
      question: "Where can I get Zette's Special Longganisa?",
      answer: "You can order directly online through our website and social channels. We arrange direct door-to-door deliveries across Metro Manila, surrounding provinces, and designated pickup hubs."
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes! We coordinate same-day or scheduled frozen courier delivery (via Grab Express, Lalamove, Borzo, or our dedicated delivery partners) to ensure your Special Longganisa arrives frozen and in prime condition."
    },
    {
      question: "How should I store the product?",
      answer: "Keep your Special Longganisa frozen in your freezer (-18°C or standard freezer compartment). When kept sealed and frozen, it maintains optimal freshness for up to 3 months."
    },
    {
      question: "How should I prepare the longganisa?",
      answer: "For the best caramelization: Place the sausages in a pan with 1/2 cup of water over medium heat. Simmer until water evaporates and the natural oils release. Gently roll the sausages in their own glaze until richly browned and sizzling!"
    },
    {
      question: "Can I order for events or gatherings?",
      answer: "Absolutely! We cater to family reunions, holiday gifts, corporate orders, and bulk party requirements. Contact us via Messenger or our order form for bulk pack arrangements and advance reservation."
    }
  ]
};
