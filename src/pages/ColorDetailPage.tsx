import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Palette } from 'lucide-react';
import { colors } from '../data/colors';
import AudioButton from '../components/AudioButton';
import { useProgress } from '../context/ProgressContext';

const ColorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateProgress, completeActivity } = useProgress();
  
  const color = colors.find(c => c.id === id);
  const progressId = `color-${id}`;
  
  useEffect(() => {
    if (color) {
      updateProgress(progressId, 30);
      
      const timer = setTimeout(() => {
        completeActivity(progressId);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [color, progressId, updateProgress, completeActivity]);
  
  if (!color) {
    return (
      <div className="text-center py-12">
        <p>Color not found</p>
        <button 
          onClick={() => navigate('/colors')}
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
          onClick={() => navigate('/colors')}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: color.hexCode }}>
          {color.name} ({color.arabicName})
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 flex flex-col items-center justify-center">
            <div 
              className="w-32 h-32 rounded-full mb-6"
              style={{ 
                backgroundColor: color.hexCode,
                border: color.hexCode === '#FFFFFF' ? '2px solid #E0E0E0' : 'none'
              }}
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">{color.name}</h2>
              <p className="text-xl rtl mb-2">{color.arabicName}</p>
              <p className="text-lg text-[var(--neutral-600)]">{color.transliteration}</p>
            </div>
            
            <div className="mt-6">
              <AudioButton 
                src={color.audio || '#'} 
                label="Listen" 
                size="lg"
                color={color.hexCode}
              />
            </div>
          </div>
          
          <div className="p-6 bg-[var(--neutral-100)]">
            <h3 className="text-xl font-bold mb-4">Example:</h3>
            
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src={color.example.image}
                alt={color.example.meaning}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
            
            <div className="text-center">
              <p className="text-xl rtl mb-2">{color.example.word}</p>
              <p className="mb-2">{color.example.transliteration}</p>
              <p className="text-[var(--neutral-600)]">{color.example.meaning}</p>
              
              {color.example.audio && (
                <div className="mt-4">
                  <AudioButton 
                    src={color.example.audio} 
                    label="Listen to Example" 
                    size="md"
                    color={color.hexCode}
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
          style={{ 
            backgroundColor: color.hexCode,
            color: ['#FFFFFF', '#FFEB3B'].includes(color.hexCode) ? '#212121' : '#FFFFFF'
          }}
        >
          I've Learned This Color
        </button>
      </div>
    </div>
  );
};

export default ColorDetailPage;