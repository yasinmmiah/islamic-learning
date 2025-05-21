import React from 'react';
import { ArrowLeft, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { duas } from '../data/duas';

const DuasPage: React.FC = () => {
  const navigate = useNavigate();

  // Group duas by category
  const duasByCategory = duas.reduce((acc, dua) => {
    if (!acc[dua.category]) {
      acc[dua.category] = [];
    }
    acc[dua.category].push(dua);
    return acc;
  }, {} as Record<string, typeof duas>);

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
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--accent-dark)]">
          Daily Duas (الدعاء)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn important supplications for different occasions. Tap on any dua to explore!
      </p>

      {Object.entries(duasByCategory).map(([category, categoryDuas]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-[var(--accent-dark)]">{category} Duas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryDuas.map((dua) => (
              <div 
                key={dua.id}
                className="card card-interactive"
                onClick={() => navigate(`/duas/${dua.id}`)}
              >
                <div className="flex items-center p-4 bg-[var(--accent)]10">
                  <div className="bg-[var(--accent)] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Moon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">{dua.title}</h3>
                    <p className="text-sm text-[var(--neutral-600)]">{dua.occasion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DuasPage;