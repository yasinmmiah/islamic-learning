import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { shapes } from '../data/shapes';
import AudioButton from '../components/AudioButton';
import { useProgress } from '../context/ProgressContext';
import TracingCanvas from '../components/TracingCanvas';

const ShapeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateProgress, completeActivity } = useProgress();
  
  const shape = shapes.find(s => s.id === id);
  const progressId = `shape-${id}`;
  
  useEffect(() => {
    if (shape) {
      updateProgress(progressId, 30);
      
      const timer = setTimeout(() => {
        completeActivity(progressId);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [shape, progressId, updateProgress, completeActivity]);
  
  if (!shape) {
    return (
      <div className="text-center py-12">
        <p>Shape not found</p>
        <button 
          onClick={() => navigate('/shapes')}
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
          onClick={() => navigate('/shapes')}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--secondary-dark)]">
          {shape.name} ({shape.arabicName})
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 flex flex-col items-center justify-center">
            <div className="mb-6">
              <TracingCanvas 
                template={shape.id}
                width={200}
                height={200}
                color="var(--secondary)"
                onComplete={() => updateProgress(progressId, 70)}
              />
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">{shape.name}</h2>
              <p className="text-xl rtl mb-2">{shape.arabicName}</p>
              <p className="text-lg text-[var(--neutral-600)]">{shape.transliteration}</p>
              <p className="mt-4">{shape.description}</p>
              {shape.sides > 0 && (
                <p className="mt-2 text-[var(--neutral-600)]">
                  Number of sides: {shape.sides}
                </p>
              )}
            </div>
            
            <div className="mt-6">
              <AudioButton 
                src={shape.audio || '#'} 
                label="Listen" 
                size="lg"
                color="var(--secondary)"
              />
            </div>
          </div>
          
          <div className="p-6 bg-[var(--neutral-100)]">
            <h3 className="text-xl font-bold mb-4">Example:</h3>
            
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src={shape.example.image}
                alt={shape.example.meaning}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
            
            <div className="text-center">
              <p className="text-xl rtl mb-2">{shape.example.word}</p>
              <p className="mb-2">{shape.example.transliteration}</p>
              <p className="text-[var(--neutral-600)]">{shape.example.meaning}</p>
              
              {shape.example.audio && (
                <div className="mt-4">
                  <AudioButton 
                    src={shape.example.audio} 
                    label="Listen to Example" 
                    size="md"
                    color="var(--secondary)"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
        <button 
          className="btn-secondary"
          onClick={() => completeActivity(progressId)}
        >
          I've Learned This Shape
        </button>
      </div>
    </div>
  );
};

export default ShapeDetailPage;