import React from 'react';
import { ImageUpload } from './components/ImageUpload';
import { Wand2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Wand2 className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Image Denoiser</h1>
              <p className="text-sm text-gray-600">Powered by Generative Adversarial Networks</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ImageUpload />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600">
            Built with React and GAN Technology
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;