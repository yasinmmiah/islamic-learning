export interface EnglishLetter {
  id: string;
  position: number;
  letter: string;
  name: string;
  example: {
    word: string;
    image?: string;
    audio?: string;
  };
  audio?: string;
}

export const englishAlphabet: EnglishLetter[] = [
  {
    id: "a",
    position: 1,
    letter: "A",
    name: "A",
    example: {
      word: "Apple",
      image: "/images/apple.png",
      audio: "/audio/apple.mp3"
    },
    audio: "/audio/a.mp3"
  },
  {
    id: "b",
    position: 2,
    letter: "B",
    name: "B",
    example: {
      word: "Ball",
      image: "/images/ball.png",
      audio: "/audio/ball.mp3"
    },
    audio: "/audio/b.mp3"
  },
  {
    id: "c",
    position: 3,
    letter: "C",
    name: "C",
    example: {
      word: "Cat",
      image: "/images/cat.png",
      audio: "/audio/cat.mp3"
    },
    audio: "/audio/c.mp3"
  },
  {
    id: "d",
    position: 4,
    letter: "D",
    name: "D",
    example: {
      word: "Dog",
      image: "/images/dog.png",
      audio: "/audio/dog.mp3"
    },
    audio: "/audio/d.mp3"
  },
  {
    id: "e",
    position: 5,
    letter: "E",
    name: "E",
    example: {
      word: "Elephant",
      image: "/images/elephant.png",
      audio: "/audio/elephant.mp3"
    },
    audio: "/audio/e.mp3"
  },
  {
    id: "f",
    position: 6,
    letter: "F",
    name: "F",
    example: {
      word: "Fish",
      image: "/images/fish.png",
      audio: "/audio/fish.mp3"
    },
    audio: "/audio/f.mp3"
  },
  {
    id: "g",
    position: 7,
    letter: "G",
    name: "G",
    example: {
      word: "Giraffe",
      image: "/images/giraffe.png",
      audio: "/audio/giraffe.mp3"
    },
    audio: "/audio/g.mp3"
  },
  {
    id: "h",
    position: 8,
    letter: "H",
    name: "H",
    example: {
      word: "Horse",
      image: "/images/horse.png",
      audio: "/audio/horse.mp3"
    },
    audio: "/audio/h.mp3"
  },
  {
    id: "i",
    position: 9,
    letter: "I",
    name: "I",
    example: {
      word: "Ice Cream",
      image: "/images/ice-cream.png",
      audio: "/audio/ice-cream.mp3"
    },
    audio: "/audio/i.mp3"
  },
  {
    id: "j",
    position: 10,
    letter: "J",
    name: "J",
    example: {
      word: "Jellyfish",
      image: "/images/jellyfish.png",
      audio: "/audio/jellyfish.mp3"
    },
    audio: "/audio/j.mp3"
  },
  {
    id: "k",
    position: 11,
    letter: "K",
    name: "K",
    example: {
      word: "Kangaroo",
      image: "/images/kangaroo.png",
      audio: "/audio/kangaroo.mp3"
    },
    audio: "/audio/k.mp3"
  },
  {
    id: "l",
    position: 12,
    letter: "L",
    name: "L",
    example: {
      word: "Lion",
      image: "/images/lion.png",
      audio: "/audio/lion.mp3"
    },
    audio: "/audio/l.mp3"
  },
  {
    id: "m",
    position: 13,
    letter: "M",
    name: "M",
    example: {
      word: "Monkey",
      image: "/images/monkey.png",
      audio: "/audio/monkey.mp3"
    },
    audio: "/audio/m.mp3"
  },
  {
    id: "n",
    position: 14,
    letter: "N",
    name: "N",
    example: {
      word: "Nest",
      image: "/images/nest.png",
      audio: "/audio/nest.mp3"
    },
    audio: "/audio/n.mp3"
  },
  {
    id: "o",
    position: 15,
    letter: "O",
    name: "O",
    example: {
      word: "Orange",
      image: "/images/orange.png",
      audio: "/audio/orange.mp3"
    },
    audio: "/audio/o.mp3"
  },
  {
    id: "p",
    position: 16,
    letter: "P",
    name: "P",
    example: {
      word: "Penguin",
      image: "/images/penguin.png",
      audio: "/audio/penguin.mp3"
    },
    audio: "/audio/p.mp3"
  },
  {
    id: "q",
    position: 17,
    letter: "Q",
    name: "Q",
    example: {
      word: "Queen",
      image: "/images/queen.png",
      audio: "/audio/queen.mp3"
    },
    audio: "/audio/q.mp3"
  },
  {
    id: "r",
    position: 18,
    letter: "R",
    name: "R",
    example: {
      word: "Rabbit",
      image: "/images/rabbit.png",
      audio: "/audio/rabbit.mp3"
    },
    audio: "/audio/r.mp3"
  },
  {
    id: "s",
    position: 19,
    letter: "S",
    name: "S",
    example: {
      word: "Snake",
      image: "/images/snake.png",
      audio: "/audio/snake.mp3"
    },
    audio: "/audio/s.mp3"
  },
  {
    id: "t",
    position: 20,
    letter: "T",
    name: "T",
    example: {
      word: "Tiger",
      image: "/images/tiger.png",
      audio: "/audio/tiger.mp3"
    },
    audio: "/audio/t.mp3"
  },
  {
    id: "u",
    position: 21,
    letter: "U",
    name: "U",
    example: {
      word: "Umbrella",
      image: "/images/umbrella.png",
      audio: "/audio/umbrella.mp3"
    },
    audio: "/audio/u.mp3"
  },
  {
    id: "v",
    position: 22,
    letter: "V",
    name: "V",
    example: {
      word: "Violin",
      image: "/images/violin.png",
      audio: "/audio/violin.mp3"
    },
    audio: "/audio/v.mp3"
  },
  {
    id: "w",
    position: 23,
    letter: "W",
    name: "W",
    example: {
      word: "Whale",
      image: "/images/whale.png",
      audio: "/audio/whale.mp3"
    },
    audio: "/audio/w.mp3"
  },
  {
    id: "x",
    position: 24,
    letter: "X",
    name: "X",
    example: {
      word: "X-ray",
      image: "/images/xray.png",
      audio: "/audio/xray.mp3"
    },
    audio: "/audio/x.mp3"
  },
  {
    id: "y",
    position: 25,
    letter: "Y",
    name: "Y",
    example: {
      word: "Yacht",
      image: "/images/yacht.png",
      audio: "/audio/yacht.mp3"
    },
    audio: "/audio/y.mp3"
  },
  {
    id: "z",
    position: 26,
    letter: "Z",
    name: "Z",
    example: {
      word: "Zebra",
      image: "/images/zebra.png",
      audio: "/audio/zebra.mp3"
    },
    audio: "/audio/z.mp3"
  }
];