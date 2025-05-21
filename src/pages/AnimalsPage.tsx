```typescript
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { animals } from '../data/animals';
import AnimalCard from '../components/AnimalCard';

const AnimalsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Animals' },
    { id: 'domestic', name: 'Domestic Animals' },
    { id: 'wild', name: 'Wild Animals' },
    { id: 'birds', name: 'Birds' },
    { id: 'sea', name: 'Sea Animals' },
    { id: 'insects', name: 'Insects' }
  ];

  const filteredAnimals = selectedCategory === 'all'
    ? animals
    : animals.filter(animal => animal.category === selectedCategory);

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
          Animals (الحيوانات)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn about different animals in Arabic and English! Tap on any animal to explore.
      </p>

      <div className="flex overflow-x-auto mb-6 pb-2">
        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-[var(--neutral-200)] text-[var(--neutral-700)] hover:bg-[var(--neutral-300)]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAnimals.map((animal) => (
          <AnimalCard
            key={animal.id}
            id={animal.id}
            name={animal.name}
            arabicName={animal.arabicName}
            transliteration={animal.transliteration}
            category={animal.category}
            image={animal.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
```