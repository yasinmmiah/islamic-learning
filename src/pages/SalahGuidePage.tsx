import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AudioButton from '../components/AudioButton';

const steps = [
  {
    id: 1,
    title: "Takbir",
    arabicTitle: "تكبير",
    description: "Stand facing the Qibla (direction of the Kaaba) and raise your hands to your ears, saying 'Allahu Akbar'.",
    audio: "/audio/takbir.mp3",
  },
  {
    id: 2,
    title: "Standing Position",
    arabicTitle: "قيام",
    description: "Place your right hand over your left hand on your chest and recite Surah Al-Fatiha.",
    audio: "/audio/fatiha.mp3",
  },
  {
    id: 3,
    title: "Bowing",
    arabicTitle: "ركوع",
    description: "Bend forward at the waist with your back straight, placing your hands on your knees, and say 'Subhana Rabbiyal Azeem' three times.",
    audio: "/audio/rukoo.mp3",
  },
  {
    id: 4,
    title: "Standing Again",
    arabicTitle: "قيام",
    description: "Rise to standing position saying 'Sami Allahu liman hamidah', then 'Rabbana lakal hamd'.",
    audio: "/audio/qiyam.mp3",
  },
  {
    id: 5,
    title: "Prostration",
    arabicTitle: "سجود",
    description: "Go down to the ground, placing your forehead, nose, palms, knees, and toes on the floor. Say 'Subhana Rabbiyal A'la' three times.",
    audio: "/audio/sujood.mp3",
  },
  {
    id: 6,
    title: "Sitting",
    arabicTitle: "جلوس",
    description: "Sit up with your right foot propped up and left foot tucked under, saying 'Allahu Akbar'.",
    audio: "/audio/sitting.mp3",
  },
  {
    id: 7,
    title: "Second Prostration",
    arabicTitle: "سجود",
    description: "Perform a second prostration saying 'Allahu Akbar', then 'Subhana Rabbiyal A'la' three times.",
    audio: "/audio/sujood.mp3",
  },
  {
    id: 8,
    title: "Completing Prayer",
    arabicTitle: "تشهد وسلام",
    description: "In the final sitting position, recite the Tashahhud, send blessings upon the Prophet, and conclude by turning your head to the right and left saying 'Assalamu alaikum wa rahmatullah'.",
    audio: "/audio/salam.mp3",
  }
];

const SalahGuidePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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
          Salah Guide (الصلاة)
        </h1>
      </div>

      <p className="mb-6 text-[var(--neutral-700)]">
        Learn the steps of prayer (Salah) with this simple guide.
      </p>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              Step {steps[currentStep].id}: {steps[currentStep].title}
            </h2>
            <p className="rtl text-lg">{steps[currentStep].arabicTitle}</p>
          </div>
          
          <div className="bg-[var(--neutral-100)] p-4 rounded-lg mb-6">
            <p className="leading-relaxed">{steps[currentStep].description}</p>
          </div>
          
          <div className="flex justify-center mb-6">
            <AudioButton 
              src={steps[currentStep].audio || '#'} 
              label="Listen" 
              size="lg"
              color="var(--primary)"
            />
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 py-2 px-4 rounded-full ${
                currentStep === 0 
                  ? 'bg-[var(--neutral-200)] text-[var(--neutral-500)] cursor-not-allowed' 
                  : 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
              } transition-colors`}
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            
            <button 
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className={`flex items-center gap-2 py-2 px-4 rounded-full ${
                currentStep === steps.length - 1 
                  ? 'bg-[var(--neutral-200)] text-[var(--neutral-500)] cursor-not-allowed' 
                  : 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
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
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full ${
                currentStep === index 
                  ? 'bg-[var(--primary)]' 
                  : 'bg-[var(--neutral-300)]'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalahGuidePage;