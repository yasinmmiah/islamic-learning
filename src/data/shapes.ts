export interface Shape {
  id: string;
  name: string;
  arabicName: string;
  transliteration: string;
  description: string;
  sides: number;
  image: string;
  example: {
    word: string;
    transliteration: string;
    meaning: string;
    image: string;
    audio?: string;
  };
  audio?: string;
}

export const shapes: Shape[] = [
  {
    id: "circle",
    name: "Circle",
    arabicName: "دائرة",
    transliteration: "da'irah",
    description: "A round shape with no corners or edges",
    sides: 0,
    image: "https://images.pexels.com/photos/5726832/pexels-photo-5726832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "القمر",
      transliteration: "al-qamar",
      meaning: "the moon",
      image: "https://images.pexels.com/photos/2098176/pexels-photo-2098176.jpeg",
      audio: "/audio/moon_example.mp3"
    },
    audio: "/audio/circle.mp3"
  },
  {
    id: "square",
    name: "Square",
    arabicName: "مربع",
    transliteration: "murabba",
    description: "A shape with four equal sides and four right angles",
    sides: 4,
    image: "https://images.pexels.com/photos/5726833/pexels-photo-5726833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "الكعبة",
      transliteration: "al-ka'bah",
      meaning: "the Kaaba",
      image: "https://images.pexels.com/photos/14550264/pexels-photo-14550264.jpeg",
      audio: "/audio/kaaba_example.mp3"
    },
    audio: "/audio/square.mp3"
  },
  {
    id: "triangle",
    name: "Triangle",
    arabicName: "مثلث",
    transliteration: "muthallath",
    description: "A shape with three sides and three angles",
    sides: 3,
    image: "https://images.pexels.com/photos/5726834/pexels-photo-5726834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "الهرم",
      transliteration: "al-haram",
      meaning: "the pyramid",
      image: "https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg",
      audio: "/audio/pyramid_example.mp3"
    },
    audio: "/audio/triangle.mp3"
  },
  {
    id: "rectangle",
    name: "Rectangle",
    arabicName: "مستطيل",
    transliteration: "mustateel",
    description: "A shape with four sides and four right angles",
    sides: 4,
    image: "https://images.pexels.com/photos/5726835/pexels-photo-5726835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "الباب",
      transliteration: "al-baab",
      meaning: "the door",
      image: "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg",
      audio: "/audio/door_example.mp3"
    },
    audio: "/audio/rectangle.mp3"
  },
  {
    id: "pentagon",
    name: "Pentagon",
    arabicName: "خماسي",
    transliteration: "khumaasi",
    description: "A shape with five sides and five angles",
    sides: 5,
    image: "https://images.pexels.com/photos/5726836/pexels-photo-5726836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "نجمة",
      transliteration: "najmah",
      meaning: "star",
      image: "https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg",
      audio: "/audio/star_example.mp3"
    },
    audio: "/audio/pentagon.mp3"
  },
  {
    id: "hexagon",
    name: "Hexagon",
    arabicName: "سداسي",
    transliteration: "sudaasi",
    description: "A shape with six sides and six angles",
    sides: 6,
    image: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "خلية النحل",
      transliteration: "khaliyyat an-nahl",
      meaning: "honeycomb",
      image: "https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg",
      audio: "/audio/honeycomb_example.mp3"
    },
    audio: "/audio/hexagon.mp3"
  },
  {
    id: "octagon",
    name: "Octagon",
    arabicName: "ثماني",
    transliteration: "thumaani",
    description: "A shape with eight sides and eight angles",
    sides: 8,
    image: "https://images.pexels.com/photos/5726838/pexels-photo-5726838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "علامة التوقف",
      transliteration: "alaamat at-tawaqquf",
      meaning: "stop sign",
      image: "https://images.pexels.com/photos/39080/stop-sign-stop-sign-warning-traffic-39080.jpeg",
      audio: "/audio/stop_sign_example.mp3"
    },
    audio: "/audio/octagon.mp3"
  },
  {
    id: "star",
    name: "Star",
    arabicName: "نجمة",
    transliteration: "najmah",
    description: "A pointed shape with multiple points",
    sides: 5,
    image: "https://images.pexels.com/photos/5726839/pexels-photo-5726839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "نجوم السماء",
      transliteration: "nujoom as-samaa",
      meaning: "stars in the sky",
      image: "https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg",
      audio: "/audio/stars_example.mp3"
    },
    audio: "/audio/star.mp3"
  },
  {
    id: "crescent",
    name: "Crescent",
    arabicName: "هلال",
    transliteration: "hilaal",
    description: "A curved shape like the new moon",
    sides: 0,
    image: "https://images.pexels.com/photos/5726840/pexels-photo-5726840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    example: {
      word: "الهلال",
      transliteration: "al-hilaal",
      meaning: "the crescent moon",
      image: "https://images.pexels.com/photos/2098176/pexels-photo-2098176.jpeg",
      audio: "/audio/crescent_example.mp3"
    },
    audio: "/audio/crescent.mp3"
  }
];