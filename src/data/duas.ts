export interface Dua {
  id: string;
  title: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  category: string;
  occasion: string;
  audio?: string;
  image?: string;
}

export const duas: Dua[] = [
  {
    id: "morning",
    title: "Morning Dua",
    arabicText: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
    transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namootu, wa ilayka-n-nushoor",
    translation: "O Allah, by You we reach the morning and by You we reach the evening, by You we live and by You we die, and to You is the resurrection",
    category: "Daily",
    occasion: "Morning",
    audio: "/audio/morning_dua.mp3",
    image: "/images/sunrise.png"
  },
  {
    id: "evening",
    title: "Evening Dua",
    arabicText: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
    transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namootu, wa ilayka-l-maseer",
    translation: "O Allah, by You we reach the evening and by You we reach the morning, by You we live and by You we die, and to You is the final return",
    category: "Daily",
    occasion: "Evening",
    audio: "/audio/evening_dua.mp3",
    image: "/images/sunset.png"
  },
  {
    id: "before_eating",
    title: "Dua Before Eating",
    arabicText: "بِسْمِ اللهِ",
    transliteration: "Bismillah",
    translation: "In the name of Allah",
    category: "Food",
    occasion: "Before eating",
    audio: "/audio/bismillah.mp3",
    image: "/images/food.png"
  },
  {
    id: "after_eating",
    title: "Dua After Eating",
    arabicText: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    transliteration: "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana muslimin",
    translation: "All praise is for Allah who has given us food and drink and made us Muslims",
    category: "Food",
    occasion: "After eating",
    audio: "/audio/after_eating.mp3",
    image: "/images/gratitude.png"
  },
  {
    id: "before_sleeping",
    title: "Dua Before Sleeping",
    arabicText: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amootu wa ahya",
    translation: "In Your name, O Allah, I die and I live",
    category: "Daily",
    occasion: "Before sleeping",
    audio: "/audio/sleep_dua.mp3",
    image: "/images/moon.png"
  },
  {
    id: "waking_up",
    title: "Dua When Waking Up",
    arabicText: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushoor",
    translation: "All praise is for Allah who gave us life after causing us to die and unto Him is the resurrection",
    category: "Daily",
    occasion: "After waking up",
    audio: "/audio/waking_up.mp3",
    image: "/images/sunrise.png"
  },
  {
    id: "entering_home",
    title: "Dua When Entering Home",
    arabicText: "بِسْمِ اللهِ وَلَجْنَا، وَبِسْمِ اللهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'ala Rabbina tawakkalna",
    translation: "In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we rely",
    category: "Home",
    occasion: "Entering home",
    audio: "/audio/entering_home.mp3",
    image: "/images/home.png"
  },
  {
    id: "leaving_home",
    title: "Dua When Leaving Home",
    arabicText: "بِسْمِ اللهِ، تَوَكَّلْتُ عَلَى اللهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللهِ",
    transliteration: "Bismillah, tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah",
    translation: "In the name of Allah, I put my trust in Allah, and there is no might nor power except with Allah",
    category: "Home",
    occasion: "Leaving home",
    audio: "/audio/leaving_home.mp3",
    image: "/images/door.png"
  },
  {
    id: "parents",
    title: "Dua for Parents",
    arabicText: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbir hamhuma kama rabbayani saghira",
    translation: "My Lord, have mercy upon them as they brought me up when I was small",
    category: "Family",
    occasion: "For parents",
    audio: "/audio/parents_dua.mp3",
    image: "/images/family.png"
  },
  {
    id: "knowledge",
    title: "Dua for Knowledge",
    arabicText: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni ilma",
    translation: "My Lord, increase me in knowledge",
    category: "Learning",
    occasion: "For seeking knowledge",
    audio: "/audio/knowledge_dua.mp3",
    image: "/images/book.png"
  },
  {
    id: "entering_masjid",
    title: "Dua When Entering Masjid",
    arabicText: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahumma-ftah li abwaba rahmatik",
    translation: "O Allah, open for me the gates of Your mercy",
    category: "Worship",
    occasion: "Entering mosque",
    audio: "/audio/entering_masjid.mp3",
    image: "/images/mosque.png"
  },
  {
    id: "leaving_masjid",
    title: "Dua When Leaving Masjid",
    arabicText: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik",
    translation: "O Allah, I ask You of Your bounty",
    category: "Worship",
    occasion: "Leaving mosque",
    audio: "/audio/leaving_masjid.mp3",
    image: "/images/mosque_door.png"
  },
  {
    id: "protection",
    title: "Dua for Protection",
    arabicText: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-Sami'ul-'Alim",
    translation: "In the name of Allah, with Whose name nothing can harm on earth or in heaven, and He is the All-Hearing, All-Knowing",
    category: "Protection",
    occasion: "For protection",
    audio: "/audio/protection_dua.mp3",
    image: "/images/shield.png"
  },
  {
    id: "forgiveness",
    title: "Dua for Forgiveness",
    arabicText: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    transliteration: "Rabbana-ghfir li wa li-walidayya wa lil-mu'minina yawma yaqumul-hisab",
    translation: "Our Lord, forgive me and my parents and the believers on the Day when the account will be established",
    category: "Forgiveness",
    occasion: "Seeking forgiveness",
    audio: "/audio/forgiveness_dua.mp3",
    image: "/images/prayer.png"
  },
  {
    id: "anxiety",
    title: "Dua for Anxiety",
    arabicText: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
    translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers",
    category: "Distress",
    occasion: "When feeling anxious",
    audio: "/audio/anxiety_dua.mp3",
    image: "/images/calm.png"
  }
];