import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { arabicAlphabet } from '../data/arabicAlphabet';
import LetterCard from '../components/LetterCard';

const ArabicAlphabetPage: React.FC = () => {
  const navigate = useNavigate();

  // Sort the alphabet in reverse order to display from right to left
  const sortedAlphabet = [...arabicAlphabet].reverse();

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
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-dark)]">
          Arabic Alphabet (الحروف الهجائية)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn the Arabic alphabet with fun pronunciation and tracing activities. Tap on any letter to explore!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 rtl">
        {sortedAlphabet.map((letter) => (
          <LetterCard
            key={letter.id}
            id={letter.id}
            letter={letter.letter}
            transliteration={letter.transliteration}
            englishName={letter.englishName}
            type="arabic"
          />
        ))}
      </div>
    </div>
  );
};

export default ArabicAlphabetPage;