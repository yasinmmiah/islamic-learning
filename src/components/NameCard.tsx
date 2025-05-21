import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface NameCardProps {
  id: string;
  number: number;
  name: string;
  arabicName: string;
  transliteration: string;
  meaning: string;
}

const NameCard: React.FC<NameCardProps> = ({
  id,
  number,
  name,
  arabicName,
  transliteration,
  meaning
}) => {
  const navigate = useNavigate();
  const { getProgress } = useProgress();
  const progress = getProgress(`name-${id}`);
  const completed = progress >= 100;

  return (
    <div
      className="card card-interactive relative"
      onClick={() => navigate(`/names/${id}`)}
    >
      <div
        className={`absolute ${completed ? 'block' : 'hidden'} top-2 right-2 text-[var(--warning)]`}
        title="Completed"
      >
        <Star fill="var(--warning)" />
      </div>
      <div className="p-4 flex flex-col items-center justify-center text-center">
        <div className="w-8 h-8 rounded-full bg-[var(--primary)]10 flex items-center justify-center mb-3">
          <span className="text-[var(--primary)] font-bold">{number}</span>
        </div>
        <p className="text-2xl font-bold mb-2 rtl">{arabicName}</p>
        <p className="text-lg mb-1">{transliteration}</p>
        <p className="text-sm text-[var(--neutral-600)]">{meaning}</p>
      </div>
      {progress > 0 && progress < 100 && (
        <div className="progress-bar m-2">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default NameCard;