import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Volume2, Moon } from 'lucide-react';
import { duas } from '../data/duas';
import AudioButton from '../components/AudioButton';
import { useProgress } from '../context/ProgressContext';

const DuaDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateProgress, completeActivity } = useProgress();
  
  const dua = duas.find(d => d.id === id);
  const progressId = `dua-${id}`;
  
  useEffect(() => {
    // Update progress just for visiting
    updateProgress(progressId, 30);
    
    // Complete when they visit and stay for a bit
    const timer = setTimeout(() => {
      completeActivity(progressId);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [id, updateProgress, completeActivity, progressId]);
  
  if (!dua) {
    return (
      <div className="text-center py-12">
        <p>Dua not found</p>
        <button 
          onClick={() => navigate('/duas')}
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
          onClick={() => navigate('/duas')}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--accent-dark)]">
          {dua.title}
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 flex flex-col items-center justify-center bg-[var(--accent)]10">
            <div className="bg-[var(--accent)] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Moon size={32} className="text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">{dua.title}</h2>
            <p className="text-[var(--neutral-600)] text-center">{dua.occasion}</p>
            
            <div className="mt-6">
              <AudioButton 
                src={dua.audio || '#'} 
                label="Listen to Dua" 
                size="lg"
                color="var(--accent)"
              />
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="font-bold mb-2">Arabic:</h3>
              <p className="text-xl rtl leading-relaxed">{dua.arabicText}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold mb-2">Transliteration:</h3>
              <p className="leading-relaxed">{dua.transliteration}</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Translation:</h3>
              <p className="leading-relaxed">{dua.translation}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-xl font-bold mb-4">When to Say This Dua</h2>
        <p className="mb-4">
          Say this dua during <strong>{dua.occasion}</strong>. It is a great practice to make this a regular part of your daily routine.
        </p>
        
        <div className="mt-6 flex justify-center">
          <button 
            className="btn-accent"
            onClick={() => completeActivity(progressId)}
          >
            I've Learned This Dua
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuaDetailPage;