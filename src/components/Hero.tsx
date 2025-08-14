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
      className="relative min-h-screen overflow-hidden font-['Baloo_2'] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503457574462-bd27054394c1?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Playfully Scattered Lottie Animations */}
      <div className="absolute top-12 left-20 w-24 h-24">
        <DotLottieReact
          src="https://lottie.host/10c3d60e-d0ab-4c62-bde3-0b1466134080/tYYuLoRwph.lottie"
          loop
          autoplay
        />
      </div>
      <div className="absolute top-1/3 right-16 w-28 h-28 rotate-12">
        <DotLottieReact
          src="https://lottie.host/10c3d60e-d0ab-4c62-bde3-0b1466134080/tYYuLoRwph.lottie"
          loop
          autoplay
        />
      </div>
      <div className="absolute bottom-24 left-1/4 w-20 h-20 -rotate-6">
        <DotLottieReact
          src="https://lottie.host/10c3d60e-d0ab-4c62-bde3-0b1466134080/tYYuLoRwph.lottie"
          loop
          autoplay
        />
      </div>
      <div className="absolute bottom-16 right-1/3 w-24 h-24 rotate-3">
        <DotLottieReact
          src="https://lottie.host/10c3d60e-d0ab-4c62-bde3-0b1466134080/tYYuLoRwph.lottie"
          loop
          autoplay
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center text-white">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
          <span className="bg-sky-500 px-4 py-1 rounded-md inline-block transform -rotate-2 shadow-lg">
            Strong Bodies.
          </span>
          <br />
          <span className="bg-pink-500 px-4 py-1 rounded-md inline-block transform rotate-1 shadow-lg">
            Smart Habits.
          </span>
          <br />
          <span className="bg-green-500 px-4 py-1 rounded-md inline-block transform -rotate-1 shadow-lg">
            Happy Kids!
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Fun fitness and nutrition programs designed for kids and parents together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('programs')}
            className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Zap className="w-6 h-6 group-hover:animate-pulse text-pink-500" />
            Start Your Plan 💪
          </button>

          <button
            onClick={() => scrollToSection('videos')}
            className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-6 h-6 group-hover:animate-pulse text-yellow-500" />
            Watch a Session 🎥
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
