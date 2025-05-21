export interface ArabicLetter {
  id: string;
  position: number;
  letter: string;
  name: string;
  englishName: string;
  transliteration: string;
  example: {
    word: string;
    transliteration: string;
    meaning: string;
    audio?: string;
  };
  audio?: string;
}

export const arabicAlphabet: ArabicLetter[] = [
  {
    id: "alif",
    position: 1,
    letter: "أ",
    name: "ألف",
    englishName: "A (Alif)",
    transliteration: "a",
    example: {
      word: "أسد",
      transliteration: "asad",
      meaning: "lion",
      audio: "/audio/asad.mp3"
    },
    audio: "/audio/alif.mp3"
  },
  {
    id: "ba",
    position: 2,
    letter: "ب",
    name: "باء",
    englishName: "B (Ba)",
    transliteration: "b",
    example: {
      word: "باب",
      transliteration: "baab",
      meaning: "door",
      audio: "/audio/baab.mp3"
    },
    audio: "/audio/ba.mp3"
  },
  {
    id: "ta",
    position: 3,
    letter: "ت",
    name: "تاء",
    englishName: "T (Ta)",
    transliteration: "t",
    example: {
      word: "تمر",
      transliteration: "tamr",
      meaning: "dates",
      audio: "/audio/tamr.mp3"
    },
    audio: "/audio/ta.mp3"
  },
  {
    id: "tha",
    position: 4,
    letter: "ث",
    name: "ثاء",
    englishName: "Th (Tha)",
    transliteration: "th",
    example: {
      word: "ثعلب",
      transliteration: "tha'lab",
      meaning: "fox",
      audio: "/audio/thalab.mp3"
    },
    audio: "/audio/tha.mp3"
  },
  {
    id: "jeem",
    position: 5,
    letter: "ج",
    name: "جيم",
    englishName: "J (Jim)",
    transliteration: "j",
    example: {
      word: "جمل",
      transliteration: "jamal",
      meaning: "camel",
      audio: "/audio/jamal.mp3"
    },
    audio: "/audio/jeem.mp3"
  },
  {
    id: "ha",
    position: 6,
    letter: "ح",
    name: "حاء",
    englishName: "H (Ha, deep h)",
    transliteration: "ḥ",
    example: {
      word: "حوت",
      transliteration: "hoot",
      meaning: "whale",
      audio: "/audio/hoot.mp3"
    },
    audio: "/audio/ha.mp3"
  },
  {
    id: "kha",
    position: 7,
    letter: "خ",
    name: "خاء",
    englishName: "Kh (Kha)",
    transliteration: "kh",
    example: {
      word: "خبز",
      transliteration: "khubz",
      meaning: "bread",
      audio: "/audio/khubz.mp3"
    },
    audio: "/audio/kha.mp3"
  },
  {
    id: "dal",
    position: 8,
    letter: "د",
    name: "دال",
    englishName: "D (Dal)",
    transliteration: "d",
    example: {
      word: "دب",
      transliteration: "dubb",
      meaning: "bear",
      audio: "/audio/dubb.mp3"
    },
    audio: "/audio/dal.mp3"
  },
  {
    id: "dhal",
    position: 9,
    letter: "ذ",
    name: "ذال",
    englishName: "Dh (Dhal)",
    transliteration: "dh",
    example: {
      word: "ذئب",
      transliteration: "dhi'b",
      meaning: "wolf",
      audio: "/audio/dhib.mp3"
    },
    audio: "/audio/dhal.mp3"
  },
  {
    id: "ra",
    position: 10,
    letter: "ر",
    name: "راء",
    englishName: "R (Ra)",
    transliteration: "r",
    example: {
      word: "رمان",
      transliteration: "rummaan",
      meaning: "pomegranate",
      audio: "/audio/rumman.mp3"
    },
    audio: "/audio/ra.mp3"
  },
  {
    id: "zay",
    position: 11,
    letter: "ز",
    name: "زاي",
    englishName: "Z (Zay)",
    transliteration: "z",
    example: {
      word: "زرافة",
      transliteration: "zaraafah",
      meaning: "giraffe",
      audio: "/audio/zarafah.mp3"
    },
    audio: "/audio/zay.mp3"
  },
  {
    id: "seen",
    position: 12,
    letter: "س",
    name: "سين",
    englishName: "S (Sin)",
    transliteration: "s",
    example: {
      word: "سمك",
      transliteration: "samak",
      meaning: "fish",
      audio: "/audio/samak.mp3"
    },
    audio: "/audio/seen.mp3"
  },
  {
    id: "sheen",
    position: 13,
    letter: "ش",
    name: "شين",
    englishName: "Sh (Shin)",
    transliteration: "sh",
    example: {
      word: "شمس",
      transliteration: "shams",
      meaning: "sun",
      audio: "/audio/shams.mp3"
    },
    audio: "/audio/sheen.mp3"
  },
  {
    id: "sad",
    position: 14,
    letter: "ص",
    name: "صاد",
    englishName: "Ṣ (Sad, emphatic s)",
    transliteration: "ṣ",
    example: {
      word: "صقر",
      transliteration: "saqr",
      meaning: "falcon",
      audio: "/audio/saqr.mp3"
    },
    audio: "/audio/sad.mp3"
  },
  {
    id: "dad",
    position: 15,
    letter: "ض",
    name: "ضاد",
    englishName: "Ḍ (Dad, emphatic d)",
    transliteration: "ḍ",
    example: {
      word: "ضفدع",
      transliteration: "difda'",
      meaning: "frog",
      audio: "/audio/difdaa.mp3"
    },
    audio: "/audio/dad.mp3"
  },
  {
    id: "ta_emphatic",
    position: 16,
    letter: "ط",
    name: "طاء",
    englishName: "Ṭ (Ta, emphatic t)",
    transliteration: "ṭ",
    example: {
      word: "طائر",
      transliteration: "taa'ir",
      meaning: "bird",
      audio: "/audio/tair.mp3"
    },
    audio: "/audio/ta_emphatic.mp3"
  },
  {
    id: "za_emphatic",
    position: 17,
    letter: "ظ",
    name: "ظاء",
    englishName: "Ẓ (Za, emphatic z)",
    transliteration: "ẓ",
    example: {
      word: "ظبي",
      transliteration: "dhaby",
      meaning: "deer",
      audio: "/audio/dhaby.mp3"
    },
    audio: "/audio/za_emphatic.mp3"
  },
  {
    id: "ayn",
    position: 18,
    letter: "ع",
    name: "عين",
    englishName: "' (Ayn, voiced pharyngeal)",
    transliteration: "'",
    example: {
      word: "عين",
      transliteration: "'ayn",
      meaning: "eye",
      audio: "/audio/ayn_word.mp3"
    },
    audio: "/audio/ayn.mp3"
  },
  {
    id: "ghayn",
    position: 19,
    letter: "غ",
    name: "غين",
    englishName: "Gh (Ghayn)",
    transliteration: "gh",
    example: {
      word: "غزال",
      transliteration: "ghazaal",
      meaning: "gazelle",
      audio: "/audio/ghazal.mp3"
    },
    audio: "/audio/ghayn.mp3"
  },
  {
    id: "fa",
    position: 20,
    letter: "ف",
    name: "فاء",
    englishName: "F (Fa)",
    transliteration: "f",
    example: {
      word: "فيل",
      transliteration: "feel",
      meaning: "elephant",
      audio: "/audio/feel.mp3"
    },
    audio: "/audio/fa.mp3"
  },
  {
    id: "qaf",
    position: 21,
    letter: "ق",
    name: "قاف",
    englishName: "Q (Qaf)",
    transliteration: "q",
    example: {
      word: "قمر",
      transliteration: "qamar",
      meaning: "moon",
      audio: "/audio/qamar.mp3"
    },
    audio: "/audio/qaf.mp3"
  },
  {
    id: "kaf",
    position: 22,
    letter: "ك",
    name: "كاف",
    englishName: "K (Kaf)",
    transliteration: "k",
    example: {
      word: "كتاب",
      transliteration: "kitaab",
      meaning: "book",
      audio: "/audio/kitab.mp3"
    },
    audio: "/audio/kaf.mp3"
  },
  {
    id: "lam",
    position: 23,
    letter: "ل",
    name: "لام",
    englishName: "L (Lam)",
    transliteration: "l",
    example: {
      word: "ليمون",
      transliteration: "laymoon",
      meaning: "lemon",
      audio: "/audio/laymun.mp3"
    },
    audio: "/audio/lam.mp3"
  },
  {
    id: "meem",
    position: 24,
    letter: "م",
    name: "ميم",
    englishName: "M (Mim)",
    transliteration: "m",
    example: {
      word: "موز",
      transliteration: "mawz",
      meaning: "banana",
      audio: "/audio/mawz.mp3"
    },
    audio: "/audio/meem.mp3"
  },
  {
    id: "noon",
    position: 25,
    letter: "ن",
    name: "نون",
    englishName: "N (Nun)",
    transliteration: "n",
    example: {
      word: "نمل",
      transliteration: "naml",
      meaning: "ant",
      audio: "/audio/naml.mp3"
    },
    audio: "/audio/noon.mp3"
  },
  {
    id: "waw",
    position: 26,
    letter: "و",
    name: "واو",
    englishName: "W (Waw)",
    transliteration: "w",
    example: {
      word: "وردة",
      transliteration: "wardah",
      meaning: "rose",
      audio: "/audio/wardah.mp3"
    },
    audio: "/audio/waw.mp3"
  },
  {
    id: "ha_end",
    position: 27,
    letter: "ه",
    name: "هاء",
    englishName: "H (Ha, soft h)",
    transliteration: "h",
    example: {
      word: "هلال",
      transliteration: "hilaal",
      meaning: "crescent",
      audio: "/audio/hilal.mp3"
    },
    audio: "/audio/ha_end.mp3"
  },
  {
    id: "hamza",
    position: 28,
    letter: "ء",
    name: "همزة",
    englishName: "' (Hamza, glottal stop)",
    transliteration: "'",
    example: {
      word: "سماء",
      transliteration: "samaa'",
      meaning: "sky",
      audio: "/audio/samaa.mp3"
    },
    audio: "/audio/hamza.mp3"
  },
  {
    id: "ya",
    position: 29,
    letter: "ي",
    name: "ياء",
    englishName: "Y (Ya)",
    transliteration: "y",
    example: {
      word: "يد",
      transliteration: "yad",
      meaning: "hand",
      audio: "/audio/yad.mp3"
    },
    audio: "/audio/ya.mp3"
  }
];