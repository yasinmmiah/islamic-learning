```typescript
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { animals } from '../data/animals';
import AudioButton from '../components/AudioButton';
import { useProgress } from '../context/ProgressContext';

const AnimalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateProgress, completeActivity } = useProgress();
  
  const animal = animals.find(a => a.id === id);
  const progressId = `animal-${id}`;
  
  useEffect(() => {
    if (animal) {
      updateProgress(progressId, 30);
      
      const timer = setTimeout(() => {
        completeActivity(progressId);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [animal, progressId, updateProgress, completeActivity]);
  
  if (!animal) {
    return (
      <div className="text-center py-12">
        <p>Animal not found</p>
        <button 
          onClick={() => navigate('/animals')}
          className="btn-primary mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="pb-8">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/animals')}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-dark)]">
          {animal.name} ({animal.arabicName})
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6">
            <div className="mb-6">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">{animal.name}</h2>
              <p className="text-xl rtl mb-2">{animal.arabicName}</p>
              <p className="text-lg text-[var(--neutral-600)]">{animal.transliteration}</p>
              <p className="mt-4">{animal.description}</p>
              <p className="mt-2 text-[var(--neutral-600)]">
                Habitat: {animal.habitat}
              </p>
            </div>
            
            <div className="mt-6 flex justify-center gap-4">
              <AudioButton 
                src={animal.audio || '#'} 
                label="Listen to Name" 
                size="lg"
                color="var(--primary)"
              />
              {animal.sound && (
                <AudioButton 
                  src={animal.sound} 
                  label="Animal Sound" 
                  size="lg"
                  color="var(--accent)"
                />
              )}
            </div>
          </div>
          
          <div className="p-6 bg-[var(--neutral-100)]">
            <h3 className="text-xl font-bold mb-4">Example Sentence:</h3>
            
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl rtl mb-2">{animal.example.sentence}</p>
              <p className="mb-2">{animal.example.transliteration}</p>
              <p className="text-[var(--neutral-600)]">{animal.example.meaning}</p>
              
              {animal.example.audio && (
                <div className="mt-4 flex justify-center">
                  <AudioButton 
                    src={animal.example.audio} 
                    label="Listen to Example" 
                    size="md"
                    color="var(--primary)"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
        <button 
          className="btn-primary"
          onClick={() => completeActivity(progressId)}
        >
          I've Learned About This Animal
        </button>
      </div>
    </div>
  );
};

export default AnimalDetailPage;
```