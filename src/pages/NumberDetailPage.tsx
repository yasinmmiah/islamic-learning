import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Pencil, Volume as VolumeUp, Hash } from 'lucide-react';
import { numbers } from '../data/numbers';
import ActivityCard from '../components/ActivityCard';
import TracingCanvas from '../components/TracingCanvas';
import AudioButton from '../components/AudioButton';
import { useProgress } from '../context/ProgressContext';

const NumberDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateProgress, completeActivity } = useProgress();
  
  const number = numbers.find(n => n.id === id);
  const progressId = `number-${id}`;
  
  useEffect(() => {
    // Update progress just for visiting
    updateProgress(progressId, 20);
  }, [id, updateProgress, progressId]);
  
  if (!number) {
    return (
      <div className="text-center py-12">
        <p>Number not found</p>
        <button 
          onClick={() => navigate('/numbers')}
          className="btn-primary mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleTraceComplete = () => {
    completeActivity(progressId);
  };

  // Create an array of items for counting visualization
  const countItems = Array(parseInt(number.number)).fill('🔵');

  return (
    <div className="pb-8">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/numbers')}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--purple-dark)]">
          {number.name} ({number.arabicName})
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 flex flex-col items-center justify-center bg-[var(--purple)]10">
            <div className="flex items-center space-x-4">
              <p className="text-[120px] font-bold">{number.number}</p>
              <p className="text-[80px] rtl">{number.arabicNumber}</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <AudioButton 
                src={number.audio || '#'} 
                label={number.name} 
                size="md"
                color="var(--purple)"
              />
              <AudioButton 
                src={number.arabicAudio || '#'} 
                label={number.arabicName} 
                size="md"
                color="var(--purple-dark)"
              />
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Learn & Practice</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <ActivityCard
                title="Trace"
                icon={<Pencil size={20} />}
                color="var(--purple)"
                onClick={() => updateProgress(progressId, 50)}
                description="Practice writing"
              />
              
              <ActivityCard
                title="Count"
                icon={<Hash size={20} />}
                color="var(--purple)"
                onClick={() => updateProgress(progressId, 70)}
                description="Learn to count"
              />
            </div>
            
            <div className="mt-6 p-4 bg-[var(--neutral-100)] rounded-lg">
              <h3 className="font-bold mb-3">Count with me:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {countItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="text-2xl animate-float" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-xl font-bold mb-4">Practice Tracing</h2>
        <p className="mb-4 text-[var(--neutral-600)]">Use your finger or mouse to trace the number:</p>
        
        <div className="flex justify-center">
          <TracingCanvas 
            template={id || 'circle'} 
            width={300}
            height={300}
            color="var(--purple)"
            onComplete={handleTraceComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default NumberDetailPage;