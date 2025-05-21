import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../data/colors';
import ColorCard from '../components/ColorCard';

const ColorsPage: React.FC = () => {
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
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--purple-dark)]">
          Colors (الألوان)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn colors in Arabic and English with fun examples! Tap on any color to explore.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {colors.map((color) => (
          <ColorCard
            key={color.id}
            id={color.id}
            name={color.name}
            arabicName={color.arabicName}
            transliteration={color.transliteration}
            hexCode={color.hexCode}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorsPage;