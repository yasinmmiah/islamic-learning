import React from 'react';
import { Code, Github, ExternalLink, Mail } from 'lucide-react';

const DevelopersPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-[var(--primary-dark)]">
        For Developers
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[var(--primary)]10 rounded-full flex items-center justify-center">
              <Code className="text-[var(--primary)]" size={32} />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Lead Developer</h2>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[var(--primary-dark)]">Yasin Mohammed Miah</h3>
            <a 
              href="mailto:yasin@iqrahost.com"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
            >
              <Mail size={16} />
              yasin@iqrahost.com
            </a>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Open Source Project</h2>
          <p className="text-lg text-center mb-8">
            Noor Kids is an open-source project built with modern web technologies. We welcome contributions from developers who want to help improve Islamic education for children.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="https://github.com/yasinmmiah/islamic-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-[var(--neutral-800)] text-white rounded-lg hover:bg-[var(--neutral-900)] transition-colors"
            >
              <Github size={24} />
              <span>View on GitHub</span>
            </a>

            <a
              href="https://docs.noorkids.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
            >
              <ExternalLink size={24} />
              <span>Documentation</span>
            </a>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
              <ul className="list-disc list-inside space-y-2 text-[var(--neutral-600)]">
                <li>React with TypeScript</li>
                <li>Vite for building and development</li>
                <li>Tailwind CSS for styling</li>
                <li>Supabase for backend and authentication</li>
                <li>Lucide React for icons</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Getting Started</h3>
              <div className="bg-[var(--neutral-800)] text-white p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`git clone https://github.com/yasinmmiah/islamic-learning.git
cd islamic-learning
npm install
npm run dev`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Contributing</h3>
              <p className="text-[var(--neutral-600)]">
                We welcome contributions! Please read our contributing guidelines on GitHub before submitting pull requests.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">API Access</h2>
          <p className="text-lg mb-6">
            We provide a REST API for developers who want to integrate Noor Kids content into their applications. Contact us for API access and documentation.
          </p>

          <div className="flex justify-center">
            <a
              href="mailto:api@noorkids.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
            >
              <ExternalLink size={20} />
              <span>Request API Access</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersPage;