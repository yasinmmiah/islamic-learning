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
  },
  // Birds
  {
    id: "eagle",
    name: "Eagle",
    arabicName: "نسر",
    transliteration: "nasr",
    description: "A large bird of prey with keen eyesight",
    category: "birds",
    habitat: "Mountains and forests",
    image: "https://images.pexels.com/photos/134074/pexels-photo-134074.jpeg",
    sound: "/audio/eagle_call.mp3",
    example: {
      sentence: "النسر يطير عالياً",
      transliteration: "an-nasru yatiru 'aliyan",
      meaning: "The eagle flies high",
      audio: "/audio/eagle_sentence.mp3"
    },
    audio: "/audio/eagle.mp3"
  },
  {
    id: "parrot",
    name: "Parrot",
    arabicName: "ببغاء",
    transliteration: "babagha",
    description: "A colorful tropical bird known for mimicking speech",
    category: "birds",
    habitat: "Tropical forests",
    image: "https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg",
    sound: "/audio/parrot_talk.mp3",
    example: {
      sentence: "الببغاء يتكلم",
      transliteration: "al-babagha'u yatakallam",
      meaning: "The parrot talks",
      audio: "/audio/parrot_sentence.mp3"
    },
    audio: "/audio/parrot.mp3"
  },
  {
    id: "peacock",
    name: "Peacock",
    arabicName: "طاووس",
    transliteration: "tawus",
    description: "A large colorful bird known for its beautiful tail feathers",
    category: "birds",
    habitat: "Forests and gardens",
    image: "https://images.pexels.com/photos/45911/peacock-plumage-bird-peafowl-45911.jpeg",
    sound: "/audio/peacock_call.mp3",
    example: {
      sentence: "الطاووس جميل جداً",
      transliteration: "at-tawusu jamilun jiddan",
      meaning: "The peacock is very beautiful",
      audio: "/audio/peacock_sentence.mp3"
    },
    audio: "/audio/peacock.mp3"
  },
  // Sea Animals
  {
    id: "dolphin",
    name: "Dolphin",
    arabicName: "دلفين",
    transliteration: "dulfin",
    description: "An intelligent marine mammal known for its playful behavior",
    category: "sea",
    habitat: "Oceans and seas",
    image: "https://images.pexels.com/photos/225869/pexels-photo-225869.jpeg",
    sound: "/audio/dolphin_click.mp3",
    example: {
      sentence: "الدلفين يسبح في البحر",
      transliteration: "ad-dulfinu yasbahu fil-bahr",
      meaning: "The dolphin swims in the sea",
      audio: "/audio/dolphin_sentence.mp3"
    },
    audio: "/audio/dolphin.mp3"
  },
  {
    id: "whale",
    name: "Whale",
    arabicName: "حوت",
    transliteration: "hut",
    description: "The largest animal on Earth, living in oceans",
    category: "sea",
    habitat: "Deep oceans",
    image: "https://images.pexels.com/photos/3369214/pexels-photo-3369214.jpeg",
    sound: "/audio/whale_song.mp3",
    example: {
      sentence: "الحوت أكبر حيوان",
      transliteration: "al-hutu akbaru hayawan",
      meaning: "The whale is the biggest animal",
      audio: "/audio/whale_sentence.mp3"
    },
    audio: "/audio/whale.mp3"
  },
  {
    id: "shark",
    name: "Shark",
    arabicName: "قرش",
    transliteration: "qirsh",
    description: "A large predatory fish with multiple rows of teeth",
    category: "sea",
    habitat: "Oceans worldwide",
    image: "https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg",
    sound: "/audio/shark_swim.mp3",
    example: {
      sentence: "القرش يسبح بسرعة",
      transliteration: "al-qirshu yasbahu bisur'ah",
      meaning: "The shark swims fast",
      audio: "/audio/shark_sentence.mp3"
    },
    audio: "/audio/shark.mp3"
  },
  // Insects
  {
    id: "butterfly",
    name: "Butterfly",
    arabicName: "فراشة",
    transliteration: "farasha",
    description: "A beautiful insect with colorful wings",
    category: "insects",
    habitat: "Gardens and meadows",
    image: "https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg",
    sound: "/audio/butterfly_wings.mp3",
    example: {
      sentence: "الفراشة جميلة",
      transliteration: "al-farashatu jamilah",
      meaning: "The butterfly is beautiful",
      audio: "/audio/butterfly_sentence.mp3"
    },
    audio: "/audio/butterfly.mp3"
  },
  {
    id: "bee",
    name: "Bee",
    arabicName: "نحلة",
    transliteration: "nahla",
    description: "A flying insect that makes honey",
    category: "insects",
    habitat: "Gardens and fields",
    image: "https://images.pexels.com/photos/2061/nature-flowers-plant-flowers.jpg",
    sound: "/audio/bee_buzz.mp3",
    example: {
      sentence: "النحلة تصنع العسل",
      transliteration: "an-nahlatu tasna'u al-'asal",
      meaning: "The bee makes honey",
      audio: "/audio/bee_sentence.mp3"
    },
    audio: "/audio/bee.mp3"
  },
  {
    id: "ant",
    name: "Ant",
    arabicName: "نملة",
    transliteration: "namla",
    description: "A small insect that lives in colonies",
    category: "insects",
    habitat: "Almost everywhere on land",
    image: "https://images.pexels.com/photos/52964/ant-macro-nature-insect-52964.jpeg",
    sound: "/audio/ant_walk.mp3",
    example: {
      sentence: "النملة تعمل بجد",
      transliteration: "an-namlatu ta'malu bijid",
      meaning: "The ant works hard",
      audio: "/audio/ant_sentence.mp3"
    },
    audio: "/audio/ant.mp3"
  }
];

export { animals }