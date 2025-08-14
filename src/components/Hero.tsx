import React from 'react';
import { Play, Zap } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden font-['Baloo_2']"
      style={{
        background: 'linear-gradient(to bottom right, #AEE6FF, #FFF8D6)',
      }}
    >
      {/* Background Lottie Animations */}
      <div className="absolute top-10 left-10 w-32 h-32">
        <DotLottieReact
          src="https://lottie.host/10c3d60e-d0ab-4c62-bde3-0b1466134080/tYYuLoRwph.lottie"
          loop
          autoplay
        />
      </div>
      <div className="absolute bottom-10 right-10 w-36 h-36">
        <DotLottieReact
          src="https://lottie.host/10c3d60e-d0ab-4c62-bde3-0b1466134080/tYYuLoRwph.lottie"
          loop
          autoplay
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-purple-900 mb-6 leading-tight tracking-tight">
          <span className="text-pink-500">Strong Bodies.</span>
          <br />
          <span className="text-orange-500">Smart Habits.</span>
          <br />
          <span className="text-green-500">Happy Kids!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
          Fun fitness and nutrition programs designed for kids and parents together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('programs')}
            className="group bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Zap className="w-6 h-6 group-hover:animate-pulse" />
            Start Your Plan 💪
          </button>

          <button
            onClick={() => scrollToSection('videos')}
            className="group bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-6 h-6 group-hover:animate-pulse" />
            Watch a Session 🎥
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
