import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Pencil, Volume as VolumeUp, BookOpen } from 'lucide-react';
import { arabicAlphabet } from '../data/arabicAlphabet';
import { englishAlphabet } from '../data/englishAlphabet';
import ActivityCard from '../components/ActivityCard';
import TracingCanvas from '../components/TracingCanvas';
import AudioButton from '../components/AudioButton';
import { useProgress } from '../context/ProgressContext';

interface LetterDetailPageProps {
  type: 'arabic' | 'english';
}

const LetterDetailPage: React.FC<LetterDetailPageProps> = ({ type }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateProgress, completeActivity } = useProgress();
  
  const alphabetData = type === 'arabic' ? arabicAlphabet : englishAlphabet;
  const letter = alphabetData.find(l => l.id === id);
  
  const progressId = `${type}-${id}`;
  
  useEffect(() => {
    // Update progress just for visiting
    updateProgress(progressId, 20);
  }, [id, type, updateProgress, progressId]);
  
  if (!letter) {
    return (
      <div className="text-center py-12">
        <p>Letter not found</p>
        <button 
          onClick={() => navigate(`/${type}`)}
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

  return (
    <div className="pb-8">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate(`/${type}`)}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold" style={{ 
          color: type === 'arabic' ? 'var(--primary-dark)' : 'var(--secondary-dark)' 
        }}>
          {letter.name}
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 flex flex-col items-center justify-center" style={{ 
            backgroundColor: type === 'arabic' ? 'var(--primary-light)10' : 'var(--secondary-light)10'
          }}>
            <p className={`text-[120px] font-bold ${type === 'arabic' ? 'rtl' : ''}`}>
              {letter.letter}
            </p>
            <div className="mt-4">
              <AudioButton 
                src={letter.audio || '#'} 
                label="Listen" 
                size="lg"
                color={type === 'arabic' ? 'var(--primary)' : 'var(--secondary)'}
              />
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Learn & Practice</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <ActivityCard
                title="Trace"
                icon={<Pencil size={20} />}
                color={type === 'arabic' ? 'var(--primary)' : 'var(--secondary)'}
                onClick={() => updateProgress(progressId, 50)}
                description="Practice writing"
              />
              
              <ActivityCard
                title="Listen"
                icon={<VolumeUp size={20} />}
                color={type === 'arabic' ? 'var(--primary)' : 'var(--secondary)'}
                onClick={() => updateProgress(progressId, 70)}
                description="Hear pronunciation"
              />
            </div>
            
            {type === 'arabic' && letter.example && (
              <div className="mt-4 p-4 bg-[var(--neutral-100)] rounded-lg">
                <h3 className="font-bold mb-2">Example Word:</h3>
                <p className="text-xl rtl mb-1">{letter.example.word}</p>
                <p className="text-sm text-[var(--neutral-600)]">
                  {letter.example.transliteration} - {letter.example.meaning}
                </p>
                {letter.example.audio && (
                  <div className="mt-2">
                    <AudioButton 
                      src={letter.example.audio} 
                      label="Listen to Example" 
                      size="sm"
                      color="var(--primary)"
                    />
                  </div>
                )}
              </div>
            )}
            
            {type === 'english' && letter.example && (
              <div className="mt-4 p-4 bg-[var(--neutral-100)] rounded-lg">
                <h3 className="font-bold mb-2">Example Word:</h3>
                <p className="text-xl mb-1">{letter.example.word}</p>
                {letter.example.audio && (
                  <div className="mt-2">
                    <AudioButton 
                      src={letter.example.audio} 
                      label="Listen to Example" 
                      size="sm"
                      color="var(--secondary)"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-xl font-bold mb-4">Practice Tracing</h2>
        <p className="mb-4 text-[var(--neutral-600)]">Use your finger or mouse to trace the letter:</p>
        
        <div className="flex justify-center">
          <TracingCanvas 
            template={type === 'arabic' ? letter.id : letter.id.toLowerCase()} 
            width={300}
            height={300}
            color={type === 'arabic' ? 'var(--primary)' : 'var(--secondary)'}
            onComplete={handleTraceComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default LetterDetailPage;