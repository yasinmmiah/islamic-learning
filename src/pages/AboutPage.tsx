import React from 'react';
import { Book, Heart, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-[var(--primary-dark)]">
        About Noor Kids
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[var(--primary)]10 rounded-full flex items-center justify-center">
              <Book className="text-[var(--primary)]" size={32} />
            </div>
          </div>

          <p className="text-lg text-center mb-8">
            Noor Kids is an interactive Islamic learning platform designed to make learning fun and engaging for young Muslims.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary)]10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-[var(--primary)]" size={24} />
              </div>
              <h3 className="font-bold mb-2">Interactive Learning</h3>
              <p className="text-[var(--neutral-600)]">
                Fun and engaging activities to learn Arabic, English, and Islamic values
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary)]10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[var(--primary)]" size={24} />
              </div>
              <h3 className="font-bold mb-2">Islamic Values</h3>
              <p className="text-[var(--neutral-600)]">
                Learn about Allah, prophets, duas, and important Islamic teachings
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary)]10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[var(--primary)]" size={24} />
              </div>
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-[var(--neutral-600)]">
                Join a growing community of young learners and their families
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            To provide an engaging and comprehensive Islamic learning experience that helps children develop a strong foundation in their faith while making learning fun and interactive.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            For any questions or feedback, please email us at:{' '}
            <a 
              href="mailto:yasin@iqrahost.com" 
              className="text-[var(--primary)] hover:underline"
            >
              yasin@iqrahost.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;