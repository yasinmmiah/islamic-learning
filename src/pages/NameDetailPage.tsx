import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { allahNames } from '../data/allahNames';
import AudioButton from '../components/AudioButton';
import { useProgress } from '../context/ProgressContext';

const NameDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateProgress, completeActivity } = useProgress();
  
  const name = allahNames.find(n => n.id === id);
  const progressId = `name-${id}`;
  
  useEffect(() => {
    if (name) {
      updateProgress(progressId, 30);
      
      const timer = setTimeout(() => {
        completeActivity(progressId);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [name, progressId, updateProgress, completeActivity]);
  
  if (!name) {
    return (
      <div className="text-center py-12">
        <p>Name not found</p>
        <button 
          onClick={() => navigate('/names')}
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
          onClick={() => navigate('/names')}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-dark)]">
          {name.name}
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[var(--primary)]10 flex items-center justify-center mx-auto mb-4">
              <span className="text-[var(--primary)] text-2xl font-bold">{name.number}</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 rtl">{name.arabicName}</h2>
            <p className="text-2xl mb-2">{name.transliteration}</p>
            <p className="text-xl text-[var(--neutral-600)]">{name.meaning}</p>
          </div>

          <div className="flex justify-center mb-8">
            <AudioButton 
              src={name.audio || '#'} 
              label="Listen to Pronunciation" 
              size="lg"
              color="var(--primary)"
            />
          </div>

          <div className="bg-[var(--primary)]5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Explanation:</h3>
            <p className="text-lg leading-relaxed">{name.explanation}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
        <button 
          className="btn-primary"
          onClick={() => completeActivity(progressId)}
        >
          I've Learned This Name
        </button>
      </div>
    </div>
  );
};

export default NameDetailPage;