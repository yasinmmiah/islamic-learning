import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, Gamepad2, Palette, Volume2 } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import { useProgress } from '../context/ProgressContext';
import RewardBadge from '../components/RewardBadge';
import ColoringCanvas from '../components/ColoringCanvas';

const GAMES = [
  {
    id: 'memory',
    title: 'Memory Game',
    description: 'Match the letters and sounds',
    icon: <Book size={20} />,
    color: 'var(--secondary-dark)'
  },
  {
    id: 'coloring',
    title: 'Coloring Book',
    description: 'Color Islamic patterns',
    icon: <Palette size={20} />,
    color: 'var(--purple)'
  },
  {
    id: 'sounds',
    title: 'Animal Sounds',
    description: 'Learn animal names in Arabic',
    icon: <Volume2 size={20} />,
    color: 'var(--accent)'
  },
  {
    id: 'puzzles',
    title: 'Simple Puzzles',
    description: 'Drag and drop puzzles',
    icon: <Gamepad2 size={20} />,
    color: 'var(--primary)'
  }
];

const COLORING_TEMPLATES = [
  {
    id: 'geometric',
    title: 'Geometric Pattern',
    description: 'Color a beautiful Islamic geometric pattern'
  },
  {
    id: 'mosque',
    title: 'Mosque',
    description: 'Color a simple mosque design'
  },
  {
    id: 'flower',
    title: 'Flower Pattern',
    description: 'Color a floral Islamic pattern'
  }
];

const PlaceholderGame: React.FC<{ title: string; onComplete: () => void }> = ({ title, onComplete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="mb-6 text-[var(--neutral-600)]">
        This is a placeholder for the {title.toLowerCase()}. In a complete app, an interactive game would be here!
      </p>
      <button 
        className="btn-secondary"
        onClick={onComplete}
      >
        Complete Game
      </button>
    </div>
  );
};

const ColoringGame: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  if (!selectedTemplate) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Choose a Pattern</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COLORING_TEMPLATES.map((template) => (
            <div
              key={template.id}
              className="card card-interactive p-4 text-center"
              onClick={() => setSelectedTemplate(template.id)}
            >
              <h3 className="font-bold mb-2">{template.title}</h3>
              <p className="text-sm text-[var(--neutral-600)]">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setSelectedTemplate(null)}
          className="flex items-center text-[var(--purple)]"
        >
          <ArrowLeft size={16} className="mr-1" />
          Choose Another Pattern
        </button>
        <h2 className="text-xl font-bold">
          {COLORING_TEMPLATES.find(t => t.id === selectedTemplate)?.title}
        </h2>
      </div>
      
      <ColoringCanvas
        template={selectedTemplate}
        width={600}
        height={600}
        onComplete={onComplete}
      />
    </div>
  );
};

const GamesPage: React.FC = () => {
  const navigate = useNavigate();
  const { completeActivity, getProgress } = useProgress();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
  };

  const handleGameComplete = () => {
    if (selectedGame) {
      completeActivity(`game-${selectedGame}`);
      setSelectedGame(null);
    }
  };

  const completedGamesCount = GAMES.filter(game => 
    getProgress(`game-${game.id}`) >= 100
  ).length;

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
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--secondary-dark)]">
          Fun Games
        </h1>
      </div>

      {selectedGame ? (
        <>
          <button 
            onClick={() => setSelectedGame(null)}
            className="flex items-center mb-6 text-[var(--secondary-dark)]"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to games
          </button>
          
          {selectedGame === 'coloring' ? (
            <ColoringGame onComplete={handleGameComplete} />
          ) : (
            <PlaceholderGame 
              title={GAMES.find(game => game.id === selectedGame)?.title || 'Game'} 
              onComplete={handleGameComplete}
            />
          )}
        </>
      ) : (
        <>
          <p className="mb-6 text-[var(--neutral-700)]">
            Play fun games that help you learn Islamic values and improve your skills!
          </p>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 p-6">
            <h2 className="text-xl font-bold mb-6 text-center">Your Rewards</h2>
            
            <div className="flex justify-center space-x-8 mb-4">
              <RewardBadge 
                type="star" 
                achieved={completedGamesCount >= 1}
                label="Beginner"
              />
              
              <RewardBadge 
                type="medal" 
                achieved={completedGamesCount >= 2}
                label="Explorer"
              />
              
              <RewardBadge 
                type="trophy" 
                achieved={completedGamesCount >= 4}
                label="Champion"
              />
            </div>
            
            <p className="text-center text-[var(--neutral-600)]">
              Complete games to earn rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GAMES.map((game) => (
              <ActivityCard
                key={game.id}
                title={game.title}
                icon={game.icon}
                color={game.color}
                onClick={() => handleGameSelect(game.id)}
                description={game.description}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GamesPage;