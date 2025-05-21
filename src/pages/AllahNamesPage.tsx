import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allahNames } from '../data/allahNames';
import NameCard from '../components/NameCard';

const AllahNamesPage: React.FC = () => {
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
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-dark)]">
          Allah's Beautiful Names (أسماء الله الحسنى)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn the 99 beautiful names of Allah. Each name describes an attribute of Allah's perfection.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allahNames.map((name) => (
          <NameCard
            key={name.id}
            id={name.id}
            number={name.number}
            name={name.name}
            arabicName={name.arabicName}
            transliteration={name.transliteration}
            meaning={name.meaning}
          />
        ))}
      </div>
    </div>
  );
}

export default AllahNamesPage;