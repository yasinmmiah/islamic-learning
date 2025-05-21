export interface Animal {
  id: string;
  name: string;
  arabicName: string;
  transliteration: string;
  description: string;
  category: 'domestic' | 'wild' | 'birds' | 'sea' | 'insects';
  habitat: string;
  image: string;
  sound?: string;
  example: {
    sentence: string;
    transliteration: string;
    meaning: string;
    audio?: string;
  };
  audio?: string;
}

export const animals: Animal[] = [
  {
    id: "cat",
    name: "Cat",
    arabicName: "قط",
    transliteration: "qitt",
    description: "A small domesticated carnivorous mammal",
    category: "domestic",
    habitat: "Human homes and urban areas",
    image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    sound: "/audio/cat_meow.mp3",
    example: {
      sentence: "القط يشرب الحليب",
      transliteration: "al-qittu yashrabu al-halib",
      meaning: "The cat drinks milk",
      audio: "/audio/cat_sentence.mp3"
    },
    audio: "/audio/cat.mp3"
  },
  {
    id: "lion",
    name: "Lion",
    arabicName: "أسد",
    transliteration: "asad",
    description: "A large wild cat of the African savanna",
    category: "wild",
    habitat: "African grasslands and savannas",
    image: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg",
    sound: "/audio/lion_roar.mp3",
    example: {
      sentence: "الأسد ملك الغابة",
      transliteration: "al-asadu maliku al-ghabah",
      meaning: "The lion is the king of the jungle",
      audio: "/audio/lion_sentence.mp3"
    },
    audio: "/audio/lion.mp3"
  },
  {
    id: "elephant",
    name: "Elephant",
    arabicName: "فيل",
    transliteration: "fil",
    description: "A large mammal with a long trunk",
    category: "wild",
    habitat: "African and Asian forests",
    image: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    sound: "/audio/elephant_trumpet.mp3",
    example: {
      sentence: "الفيل كبير جداً",
      transliteration: "al-filu kabirun jiddan",
      meaning: "The elephant is very big",
      audio: "/audio/elephant_sentence.mp3"
    },
    audio: "/audio/elephant.mp3"
  },
  {
    id: "camel",
    name: "Camel",
    arabicName: "جمل",
    transliteration: "jamal",
    description: "A large desert animal with one or two humps",
    category: "domestic",
    habitat: "Deserts and arid regions",
    image: "https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg",
    sound: "/audio/camel_grunt.mp3",
    example: {
      sentence: "الجمل في الصحراء",
      transliteration: "al-jamalu fi as-sahra",
      meaning: "The camel is in the desert",
      audio: "/audio/camel_sentence.mp3"
    },
    audio: "/audio/camel.mp3"
  },
  {
    id: "horse",
    name: "Horse",
    arabicName: "حصان",
    transliteration: "hisan",
    description: "A large domesticated mammal used for riding",
    category: "domestic",
    habitat: "Grasslands and human settlements",
    image: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg",
    sound: "/audio/horse_neigh.mp3",
    example: {
      sentence: "الحصان يجري سريعاً",
      transliteration: "al-hisanu yajri sari'an",
      meaning: "The horse runs fast",
      audio: "/audio/horse_sentence.mp3"
    },
    audio: "/audio/horse.mp3"
  }
];