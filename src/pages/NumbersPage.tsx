import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { numbers } from '../data/numbers';
import NumberCard from '../components/NumberCard';

const NumbersPage: React.FC = () => {
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
          Numbers (١٢٣)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn to count from 1 to 10 in English and Arabic. Tap on any number to explore!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {numbers.map((number) => (
          <NumberCard
            key={number.id}
            id={number.id}
            number={number.number}
            arabicNumber={number.arabicNumber}
            color="var(--purple)"
          />
        ))}
      </div>
    </div>
  );
};

export default NumbersPage;