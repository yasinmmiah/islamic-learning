import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { prophetStories } from '../data/prophetStories';

const ProphetStoriesPage: React.FC = () => {
  const navigate = useNavigate();

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
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-dark)]">
          Prophet Stories (قصص الأنبياء)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn about the prophets through simple, age-appropriate stories. Tap on any story to explore!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prophetStories.map((story) => (
          <div 
            key={story.id}
            className="card card-interactive"
            onClick={() => navigate(`/prophets/${story.id}`)}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[var(--primary-dark)] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{story.name}</h3>
                  <p className="text-sm rtl">{story.arabicName}</p>
                </div>
              </div>
              
              <p className="text-[var(--neutral-600)]">{story.briefDescription}</p>
              
              <div className="mt-4 text-sm text-[var(--primary-dark)] font-semibold">
                Read the full story →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProphetStoriesPage;