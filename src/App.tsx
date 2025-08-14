import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import PlansSection from './components/PlansSection';
import VideoSection from './components/VideoSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <PlansSection />
      <VideoSection />
      <CommunitySection />
      <Footer />
      
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-4 right-4 z-40">
        <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
          💬 Chat with a Coach
        </button>
      </div>
    </div>
  );
}

export default App;