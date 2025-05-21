export interface Color {
  id: string;
  name: string;
  arabicName: string;
  transliteration: string;
  hexCode: string;
  example: {
    word: string;
    transliteration: string;
    meaning: string;
    image?: string;
    audio?: string;
  };
  audio?: string;
}

export const colors: Color[] = [
  {
    id: "red",
    name: "Red",
    arabicName: "أحمر",
    transliteration: "ahmar",
    hexCode: "#F44336",
    example: {
      word: "تفاحة حمراء",
      transliteration: "tuffahah hamra",
      meaning: "red apple",
      image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
      audio: "/audio/red_apple.mp3"
    },
    audio: "/audio/red.mp3"
  },
  {
    id: "dark-red",
    name: "Dark Red",
    arabicName: "أحمر غامق",
    transliteration: "ahmar ghamiq",
    hexCode: "#B71C1C",
    example: {
      word: "وردة حمراء غامقة",
      transliteration: "wardah hamra ghamiqa",
      meaning: "dark red rose",
      image: "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg",
      audio: "/audio/dark_red_rose.mp3"
    },
    audio: "/audio/dark_red.mp3"
  },
  {
    id: "blue",
    name: "Blue",
    arabicName: "أزرق",
    transliteration: "azraq",
    hexCode: "#2196F3",
    example: {
      word: "سماء زرقاء",
      transliteration: "sama zarqa",
      meaning: "blue sky",
      image: "https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg",
      audio: "/audio/blue_sky.mp3"
    },
    audio: "/audio/blue.mp3"
  },
  {
    id: "dark-blue",
    name: "Dark Blue",
    arabicName: "أزرق غامق",
    transliteration: "azraq ghamiq",
    hexCode: "#0D47A1",
    example: {
      word: "محيط أزرق غامق",
      transliteration: "muhit azraq ghamiq",
      meaning: "dark blue ocean",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
      audio: "/audio/dark_blue_ocean.mp3"
    },
    audio: "/audio/dark_blue.mp3"
  },
  {
    id: "light-blue",
    name: "Light Blue",
    arabicName: "أزرق فاتح",
    transliteration: "azraq fatih",
    hexCode: "#03A9F4",
    example: {
      word: "ماء صافي",
      transliteration: "ma safi",
      meaning: "clear water",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
      audio: "/audio/light_blue_water.mp3"
    },
    audio: "/audio/light_blue.mp3"
  },
  {
    id: "green",
    name: "Green",
    arabicName: "أخضر",
    transliteration: "akhdar",
    hexCode: "#4CAF50",
    example: {
      word: "شجرة خضراء",
      transliteration: "shajarah khadra",
      meaning: "green tree",
      image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
      audio: "/audio/green_tree.mp3"
    },
    audio: "/audio/green.mp3"
  },
  {
    id: "dark-green",
    name: "Dark Green",
    arabicName: "أخضر غامق",
    transliteration: "akhdar ghamiq",
    hexCode: "#1B5E20",
    example: {
      word: "غابة خضراء",
      transliteration: "ghabah khadra",
      meaning: "green forest",
      image: "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg",
      audio: "/audio/dark_green_forest.mp3"
    },
    audio: "/audio/dark_green.mp3"
  },
  {
    id: "light-green",
    name: "Light Green",
    arabicName: "أخضر فاتح",
    transliteration: "akhdar fatih",
    hexCode: "#8BC34A",
    example: {
      word: "ورقة خضراء",
      transliteration: "waraqa khadra",
      meaning: "green leaf",
      image: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg",
      audio: "/audio/light_green_leaf.mp3"
    },
    audio: "/audio/light_green.mp3"
  },
  {
    id: "yellow",
    name: "Yellow",
    arabicName: "أصفر",
    transliteration: "asfar",
    hexCode: "#FFEB3B",
    example: {
      word: "موز أصفر",
      transliteration: "mawz asfar",
      meaning: "yellow banana",
      image: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg",
      audio: "/audio/yellow_banana.mp3"
    },
    audio: "/audio/yellow.mp3"
  },
  {
    id: "gold",
    name: "Gold",
    arabicName: "ذهبي",
    transliteration: "dhahabi",
    hexCode: "#FFD700",
    example: {
      word: "خاتم ذهبي",
      transliteration: "khatim dhahabi",
      meaning: "gold ring",
      image: "https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg",
      audio: "/audio/gold_ring.mp3"
    },
    audio: "/audio/gold.mp3"
  },
  {
    id: "black",
    name: "Black",
    arabicName: "أسود",
    transliteration: "aswad",
    hexCode: "#212121",
    example: {
      word: "قط أسود",
      transliteration: "qitt aswad",
      meaning: "black cat",
      image: "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg",
      audio: "/audio/black_cat.mp3"
    },
    audio: "/audio/black.mp3"
  },
  {
    id: "white",
    name: "White",
    arabicName: "أبيض",
    transliteration: "abyad",
    hexCode: "#FFFFFF",
    example: {
      word: "ثلج أبيض",
      transliteration: "thalj abyad",
      meaning: "white snow",
      image: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg",
      audio: "/audio/white_snow.mp3"
    },
    audio: "/audio/white.mp3"
  },
  {
    id: "silver",
    name: "Silver",
    arabicName: "فضي",
    transliteration: "fiddi",
    hexCode: "#C0C0C0",
    example: {
      word: "قمر فضي",
      transliteration: "qamar fiddi",
      meaning: "silver moon",
      image: "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg",
      audio: "/audio/silver_moon.mp3"
    },
    audio: "/audio/silver.mp3"
  },
  {
    id: "brown",
    name: "Brown",
    arabicName: "بني",
    transliteration: "bunni",
    hexCode: "#795548",
    example: {
      word: "شوكولاتة بنية",
      transliteration: "shokolata bunniya",
      meaning: "brown chocolate",
      image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg",
      audio: "/audio/brown_chocolate.mp3"
    },
    audio: "/audio/brown.mp3"
  },
  {
    id: "dark-brown",
    name: "Dark Brown",
    arabicName: "بني غامق",
    transliteration: "bunni ghamiq",
    hexCode: "#3E2723",
    example: {
      word: "قهوة بنية",
      transliteration: "qahwa bunniya",
      meaning: "brown coffee",
      image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
      audio: "/audio/dark_brown_coffee.mp3"
    },
    audio: "/audio/dark_brown.mp3"
  },
  {
    id: "orange",
    name: "Orange",
    arabicName: "برتقالي",
    transliteration: "burtuqali",
    hexCode: "#FF9800",
    example: {
      word: "برتقالة",
      transliteration: "burtuqala",
      meaning: "orange (fruit)",
      image: "https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg",
      audio: "/audio/orange_fruit.mp3"
    },
    audio: "/audio/orange.mp3"
  },
  {
    id: "purple",
    name: "Purple",
    arabicName: "بنفسجي",
    transliteration: "banafsaji",
    hexCode: "#9C27B0",
    example: {
      word: "زهرة بنفسجية",
      transliteration: "zahra banafsajiya",
      meaning: "purple flower",
      image: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg",
      audio: "/audio/purple_flower.mp3"
    },
    audio: "/audio/purple.mp3"
  },
  {
    id: "dark-purple",
    name: "Dark Purple",
    arabicName: "بنفسجي غامق",
    transliteration: "banafsaji ghamiq",
    hexCode: "#4A148C",
    example: {
      word: "عنب بنفسجي",
      transliteration: "inab banafsaji",
      meaning: "purple grapes",
      image: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg",
      audio: "/audio/dark_purple_grapes.mp3"
    },
    audio: "/audio/dark_purple.mp3"
  },
  {
    id: "pink",
    name: "Pink",
    arabicName: "وردي",
    transliteration: "wardi",
    hexCode: "#E91E63",
    example: {
      word: "وردة وردية",
      transliteration: "warda wardiya",
      meaning: "pink rose",
      image: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg",
      audio: "/audio/pink_rose.mp3"
    },
    audio: "/audio/pink.mp3"
  },
  {
    id: "light-pink",
    name: "Light Pink",
    arabicName: "وردي فاتح",
    transliteration: "wardi fatih",
    hexCode: "#F8BBD0",
    example: {
      word: "زهرة وردية فاتحة",
      transliteration: "zahra wardiya fatiha",
      meaning: "light pink flower",
      image: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
      audio: "/audio/light_pink_flower.mp3"
    },
    audio: "/audio/light_pink.mp3"
  },
  {
    id: "gray",
    name: "Gray",
    arabicName: "رمادي",
    transliteration: "ramadi",
    hexCode: "#9E9E9E",
    example: {
      word: "فيل رمادي",
      transliteration: "fil ramadi",
      meaning: "gray elephant",
      image: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
      audio: "/audio/gray_elephant.mp3"
    },
    audio: "/audio/gray.mp3"
  }
];