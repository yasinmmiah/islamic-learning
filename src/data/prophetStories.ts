export interface ProphetStory {
  id: string;
  name: string;
  arabicName: string;
  briefDescription: string;
  story: string[];
  mainLesson: string;
  image?: string;
  audio?: string;
}

export const prophetStories: ProphetStory[] = [
  {
    id: "adam",
    name: "Adam",
    arabicName: "آدم",
    briefDescription: "The first human and prophet",
    story: [
      "Allah created Adam from clay and taught him the names of everything.",
      "The angels were commanded to bow to Adam, but Iblis refused out of pride.",
      "Adam and Hawa lived in Paradise but were forbidden from one tree.",
      "Shaytan deceived them into eating from the forbidden tree.",
      "They sincerely repented and Allah forgave them.",
      "They were sent to Earth to establish human civilization."
    ],
    mainLesson: "Always turn to Allah in repentance when we make mistakes.",
    image: "/images/garden.png",
    audio: "/audio/adam_story.mp3"
  },
  {
    id: "idris",
    name: "Idris",
    arabicName: "إدريس",
    briefDescription: "Known for his wisdom and knowledge",
    story: [
      "Idris was among the earliest prophets after Adam.",
      "Allah blessed him with great knowledge and wisdom.",
      "He was the first to write with a pen.",
      "He taught people about astronomy and mathematics.",
      "Allah raised him to a high station.",
      "He was known for his patience and gratitude."
    ],
    mainLesson: "Seek knowledge and be grateful for Allah's blessings.",
    image: "/images/stars.png",
    audio: "/audio/idris_story.mp3"
  },
  {
    id: "nuh",
    name: "Nuh",
    arabicName: "نوح",
    briefDescription: "Built the ark and saved the believers",
    story: [
      "Nuh called his people to worship Allah for 950 years.",
      "Most people rejected his message and mocked him.",
      "Allah commanded him to build a large ark.",
      "He gathered believers and pairs of animals on the ark.",
      "A great flood came, saving only those who believed.",
      "His story teaches us about patience and perseverance."
    ],
    mainLesson: "Stay steadfast in your faith despite difficulties.",
    image: "/images/ark.png",
    audio: "/audio/nuh_story.mp3"
  },
  {
    id: "hud",
    name: "Hud",
    arabicName: "هود",
    briefDescription: "Prophet to the people of 'Ad",
    story: [
      "Hud was sent to the powerful tribe of 'Ad.",
      "His people were known for their tall buildings and strength.",
      "They were arrogant and worshipped idols.",
      "Hud called them to worship Allah alone.",
      "They rejected his message and faced a mighty wind.",
      "Only the believers were saved from destruction."
    ],
    mainLesson: "Power and strength mean nothing without faith in Allah.",
    image: "/images/wind.png",
    audio: "/audio/hud_story.mp3"
  },
  {
    id: "salih",
    name: "Salih",
    arabicName: "صالح",
    briefDescription: "Prophet to the people of Thamud",
    story: [
      "Salih was sent to the tribe of Thamud.",
      "They were skilled in carving houses from mountains.",
      "Allah gave them a miraculous camel as a sign.",
      "They were told not to harm the camel.",
      "They disobeyed and killed the camel.",
      "Their punishment was a mighty earthquake."
    ],
    mainLesson: "Respect Allah's signs and follow His commands.",
    image: "/images/mountains.png",
    audio: "/audio/salih_story.mp3"
  },
  {
    id: "ibrahim",
    name: "Ibrahim",
    arabicName: "إبراهيم",
    briefDescription: "The friend of Allah who built the Kaaba",
    story: [
      "Ibrahim questioned idol worship from a young age.",
      "He broke the idols to prove they were powerless.",
      "He was thrown into a fire but Allah saved him.",
      "He built the Kaaba with his son Ismail.",
      "He showed complete submission to Allah's commands.",
      "He is known as the father of many prophets."
    ],
    mainLesson: "Have complete trust in Allah and submit to His will.",
    image: "/images/kaaba.png",
    audio: "/audio/ibrahim_story.mp3"
  },
  {
    id: "lut",
    name: "Lut",
    arabicName: "لوط",
    briefDescription: "Prophet who called his people to righteousness",
    story: [
      "Lut was Ibrahim's nephew and a prophet.",
      "He was sent to people who committed evil deeds.",
      "He called them to stop their wrongdoing.",
      "They rejected his message and threatened him.",
      "Allah saved him and his family.",
      "His city was destroyed as punishment."
    ],
    mainLesson: "Stand firm against evil and follow Allah's guidance.",
    image: "/images/city.png",
    audio: "/audio/lut_story.mp3"
  },
  {
    id: "ismail",
    name: "Ismail",
    arabicName: "إسماعيل",
    briefDescription: "Son of Ibrahim who helped build the Kaaba",
    story: [
      "Ismail was Ibrahim's firstborn son.",
      "He and his mother Hajar were left in Makkah.",
      "The well of Zamzam sprang forth for them.",
      "He helped his father build the Kaaba.",
      "He showed great patience and obedience.",
      "He became the father of many Arab tribes."
    ],
    mainLesson: "Trust in Allah's plan and be patient.",
    image: "/images/zamzam.png",
    audio: "/audio/ismail_story.mp3"
  },
  {
    id: "ishaq",
    name: "Ishaq",
    arabicName: "إسحاق",
    briefDescription: "Son of Ibrahim and father of Yaqub",
    story: [
      "Ishaq was Ibrahim's second son.",
      "He was born when his parents were very old.",
      "He grew up to be a righteous prophet.",
      "He carried on his father's message.",
      "He was the father of Yaqub (Israel).",
      "Many later prophets came from his lineage."
    ],
    mainLesson: "Allah's blessings can come at any time.",
    image: "/images/family.png",
    audio: "/audio/ishaq_story.mp3"
  },
  {
    id: "yaqub",
    name: "Yaqub",
    arabicName: "يعقوب",
    briefDescription: "Son of Ishaq and father of Yusuf",
    story: [
      "Yaqub was also known as Israel.",
      "He had twelve sons, including Yusuf.",
      "He was tested with separation from Yusuf.",
      "He never lost hope in Allah's mercy.",
      "He showed great patience in hardship.",
      "He was finally reunited with Yusuf."
    ],
    mainLesson: "Never lose hope in Allah's mercy.",
    image: "/images/hope.png",
    audio: "/audio/yaqub_story.mp3"
  },
  {
    id: "yusuf",
    name: "Yusuf",
    arabicName: "يوسف",
    briefDescription: "The prophet known for his beauty and wisdom",
    story: [
      "Yusuf had a dream about eleven stars.",
      "His brothers threw him into a well out of jealousy.",
      "He was sold as a slave in Egypt.",
      "He was falsely imprisoned but remained patient.",
      "He became Egypt's treasurer through his wisdom.",
      "He forgave his brothers and reunited his family."
    ],
    mainLesson: "Be patient through hardship and forgive others.",
    image: "/images/well.png",
    audio: "/audio/yusuf_story.mp3"
  },
  {
    id: "ayyub",
    name: "Ayyub",
    arabicName: "أيوب",
    briefDescription: "The prophet known for his patience",
    story: [
      "Ayyub was blessed with wealth and children.",
      "He was tested with loss of health and wealth.",
      "He remained patient and grateful to Allah.",
      "He never complained about his difficulties.",
      "Allah restored his health and blessings.",
      "He became an example of perfect patience."
    ],
    mainLesson: "Be patient and grateful in all situations.",
    image: "/images/patience.png",
    audio: "/audio/ayyub_story.mp3"
  },
  {
    id: "shuaib",
    name: "Shuaib",
    arabicName: "شعيب",
    briefDescription: "Prophet who called for honest trade",
    story: [
      "Shuaib was sent to the people of Madyan.",
      "His people cheated in business dealings.",
      "He called them to be honest in trade.",
      "They threatened to expel him.",
      "They were punished for their dishonesty.",
      "The believers were saved with him."
    ],
    mainLesson: "Be honest in all your dealings.",
    image: "/images/trade.png",
    audio: "/audio/shuaib_story.mp3"
  },
  {
    id: "musa",
    name: "Musa",
    arabicName: "موسى",
    briefDescription: "Prophet who confronted Pharaoh",
    story: [
      "Musa was saved from Pharaoh as a baby.",
      "Allah spoke to him at Mount Tur.",
      "He was given miracles including his staff.",
      "He confronted Pharaoh with clear signs.",
      "He led the Children of Israel out of Egypt.",
      "He received the Torah from Allah."
    ],
    mainLesson: "Stand up for truth against tyranny.",
    image: "/images/sea.png",
    audio: "/audio/musa_story.mp3"
  },
  {
    id: "harun",
    name: "Harun",
    arabicName: "هارون",
    briefDescription: "Brother and helper of Musa",
    story: [
      "Harun was Musa's older brother.",
      "Allah made him a prophet alongside Musa.",
      "He helped Musa in his mission.",
      "He was known for his eloquent speech.",
      "He guided people while Musa was away.",
      "He was patient with his people."
    ],
    mainLesson: "Support others in doing good.",
    image: "/images/brothers.png",
    audio: "/audio/harun_story.mp3"
  },
  {
    id: "dhulkifl",
    name: "Dhul-Kifl",
    arabicName: "ذو الكفل",
    briefDescription: "The prophet who fulfilled his promises",
    story: [
      "He was known for his justice and wisdom.",
      "He made a promise to judge between people.",
      "He kept his word and judged fairly.",
      "He was patient in his duties.",
      "Allah praised him in the Quran.",
      "He set an example of trustworthiness."
    ],
    mainLesson: "Always keep your promises.",
    image: "/images/promise.png",
    audio: "/audio/dhulkifl_story.mp3"
  },
  {
    id: "dawud",
    name: "Dawud",
    arabicName: "داود",
    briefDescription: "Prophet given the Zabur and beautiful voice",
    story: [
      "Dawud defeated Jalut (Goliath) with a sling.",
      "Allah gave him kingdom and wisdom.",
      "He was given the Zabur (Psalms).",
      "Mountains and birds praised Allah with him.",
      "He was skilled in making armor.",
      "He judged with perfect justice."
    ],
    mainLesson: "Use your talents to serve Allah.",
    image: "/images/mountains.png",
    audio: "/audio/dawud_story.mp3"
  },
  {
    id: "sulaiman",
    name: "Sulaiman",
    arabicName: "سليمان",
    briefDescription: "Prophet who could speak to animals",
    story: [
      "Sulaiman inherited Dawud's kingdom.",
      "Allah gave him control over the wind.",
      "He could understand the language of animals.",
      "He had armies of humans, jinns, and birds.",
      "He built a magnificent temple.",
      "He remained humble despite his power."
    ],
    mainLesson: "Stay humble no matter how much power you have.",
    image: "/images/throne.png",
    audio: "/audio/sulaiman_story.mp3"
  },
  {
    id: "ilyas",
    name: "Ilyas",
    arabicName: "إلياس",
    briefDescription: "Prophet who called people away from idol worship",
    story: [
      "Ilyas was sent to the people of Ba'albak.",
      "His people worshipped an idol called Ba'al.",
      "He called them to worship Allah alone.",
      "Most people rejected his message.",
      "He remained steadfast in his mission.",
      "Allah honored him among later generations."
    ],
    mainLesson: "Stand firm in calling to the truth.",
    image: "/images/idol.png",
    audio: "/audio/ilyas_story.mp3"
  },
  {
    id: "alyasa",
    name: "Al-Yasa",
    arabicName: "اليسع",
    briefDescription: "Prophet who succeeded Ilyas",
    story: [
      "Al-Yasa was chosen by Allah after Ilyas.",
      "He continued the message of monotheism.",
      "He performed many miracles.",
      "He helped those in need.",
      "He taught people about Allah.",
      "He was patient with his people."
    ],
    mainLesson: "Continue the good work of others.",
    image: "/images/teaching.png",
    audio: "/audio/alyasa_story.mp3"
  },
  {
    id: "yunus",
    name: "Yunus",
    arabicName: "يونس",
    briefDescription: "Prophet swallowed by the whale",
    story: [
      "Yunus left his people in anger.",
      "He was swallowed by a large fish.",
      "He prayed to Allah from inside the fish.",
      "Allah saved him and caused him to be cast ashore.",
      "He returned to his people who then believed.",
      "His story teaches about repentance."
    ],
    mainLesson: "Never give up hope in Allah's mercy.",
    image: "/images/whale.png",
    audio: "/audio/yunus_story.mp3"
  },
  {
    id: "zakariya",
    name: "Zakariya",
    arabicName: "زكريا",
    briefDescription: "Guardian of Maryam and father of Yahya",
    story: [
      "Zakariya was a righteous prophet.",
      "He cared for Maryam in the temple.",
      "He prayed for a son in his old age.",
      "Allah blessed him with Yahya.",
      "He was given the good news while praying.",
      "He raised Yahya to be a prophet."
    ],
    mainLesson: "Never stop making dua to Allah.",
    image: "/images/prayer.png",
    audio: "/audio/zakariya_story.mp3"
  },
  {
    id: "yahya",
    name: "Yahya",
    arabicName: "يحيى",
    briefDescription: "Prophet known for his wisdom from childhood",
    story: [
      "Yahya was born to elderly parents.",
      "Allah gave him wisdom as a child.",
      "He was compassionate and pure-hearted.",
      "He confirmed the coming of Isa.",
      "He called people to righteousness.",
      "He stood firm for the truth."
    ],
    mainLesson: "Wisdom can come at any age.",
    image: "/images/wisdom.png",
    audio: "/audio/yahya_story.mp3"
  },
  {
    id: "isa",
    name: "Isa",
    arabicName: "عيسى",
    briefDescription: "Prophet born miraculously to Maryam",
    story: [
      "Isa was born miraculously to Maryam.",
      "He spoke as a baby in the cradle.",
      "Allah gave him many miracles.",
      "He healed the sick by Allah's permission.",
      "He called people to worship Allah alone.",
      "Allah raised him to the heavens."
    ],
    mainLesson: "All miracles happen by Allah's permission.",
    image: "/images/cradle.png",
    audio: "/audio/isa_story.mp3"
  },
  {
    id: "muhammad",
    name: "Muhammad",
    arabicName: "محمد",
    briefDescription: "The final prophet and messenger of Islam",
    story: [
      "Muhammad ﷺ was born in Makkah.",
      "He was known as Al-Amin (the trustworthy).",
      "He received the first revelation in Cave Hira.",
      "He faced many hardships spreading Islam.",
      "He migrated to Madinah and established the first Islamic state.",
      "His message completed Allah's religion for humanity."
    ],
    mainLesson: "Follow the perfect example of the Prophet ﷺ.",
    image: "/images/mosque.png",
    audio: "/audio/muhammad_story.mp3"
  }
];