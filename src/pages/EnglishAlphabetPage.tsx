import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { englishAlphabet } from '../data/englishAlphabet';
import LetterCard from '../components/LetterCard';

const EnglishAlphabetPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-8">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/')}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--secondary-dark)]">
          English Alphabet (ABC)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn the English alphabet with fun pronunciation and tracing activities. Tap on any letter to explore!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {englishAlphabet.map((letter) => (
          <LetterCard
            key={letter.id}
            id={letter.id}
            letter={letter.letter}
            type="english"
            color="var(--secondary)"
          />
        ))}
      </div>
    </div>
  );
};

export default EnglishAlphabetPage;