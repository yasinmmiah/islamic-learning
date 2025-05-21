import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Volume2 } from 'lucide-react';
import { prophetStories } from '../data/prophetStories';
import AudioButton from '../components/AudioButton';
import { useProgress } from '../context/ProgressContext';

const StoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const { updateProgress, completeActivity } = useProgress();
  
  const story = prophetStories.find(s => s.id === id);
  const progressId = `prophet-${id}`;
  
  useEffect(() => {
    // Update progress for visiting
    updateProgress(progressId, 30);
    
    // Complete when they reach the last page
    if (currentPage === story?.story.length) {
      completeActivity(progressId);
    }
  }, [id, currentPage, story, updateProgress, completeActivity, progressId]);
  
  if (!story) {
    return (
      <div className="text-center py-12">
        <p>Story not found</p>
        <button 
          onClick={() => navigate('/prophets')}
          className="btn-primary mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleNext = () => {
    if (currentPage < story.story.length) {
      setCurrentPage(currentPage + 1);
      updateProgress(progressId, 30 + ((currentPage + 1) / story.story.length) * 70);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Check if we're on the last page
  const isLastPage = currentPage === story.story.length;

  return (
    <div className="pb-8">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/prophets')}
          className="mr-4 p-2 rounded-full bg-[var(--neutral-200)] hover:bg-[var(--neutral-300)] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-dark)]">
          Prophet {story.name}
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="bg-[var(--primary-dark)] w-16 h-16 rounded-full flex items-center justify-center">
              <BookOpen size={32} className="text-white" />
            </div>
          </div>
          
          {!isLastPage ? (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-center">
                The Story of Prophet {story.name}
              </h2>
              
              <div className="bg-[var(--neutral-100)] p-6 rounded-lg min-h-[200px] flex items-center justify-center">
                <p className="text-lg leading-relaxed text-center">
                  {story.story[currentPage]}
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-center">
                The Lesson from Prophet {story.name}'s Story
              </h2>
              
              <div className="bg-[var(--primary)]10 p-6 rounded-lg min-h-[200px] flex items-center justify-center border-2 border-[var(--primary)]20">
                <p className="text-lg leading-relaxed text-center">
                  {story.mainLesson}
                </p>
              </div>
            </div>
          )}
          
          <div className="flex justify-center mb-6">
            <AudioButton 
              src={story.audio || '#'} 
              label="Listen to Story" 
              size="lg"
              color="var(--primary-dark)"
            />
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 py-2 px-4 rounded-full ${
                currentPage === 0 
                  ? 'bg-[var(--neutral-200)] text-[var(--neutral-500)] cursor-not-allowed' 
                  : 'bg-[var(--primary-dark)] text-white hover:bg-[var(--primary-dark)]'
              } transition-colors`}
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            
            <button 
              onClick={handleNext}
              disabled={isLastPage}
              className={`flex items-center gap-2 py-2 px-4 rounded-full ${
                isLastPage 
                  ? 'bg-[var(--neutral-200)] text-[var(--neutral-500)] cursor-not-allowed' 
                  : 'bg-[var(--primary-dark)] text-white hover:bg-[var(--primary-dark)]'
              } transition-colors`}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="flex space-x-2">
          {[...Array(story.story.length + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                updateProgress(progressId, 30 + (index / story.story.length) * 70);
              }}
              className={`w-3 h-3 rounded-full ${
                currentPage === index 
                  ? 'bg-[var(--primary-dark)]' 
                  : 'bg-[var(--neutral-300)]'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;