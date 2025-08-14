import React, { useState, useEffect, useRef } from 'react';
import { Heart, Brain, Users, Zap, Star, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const features = [
    {
      emoji: '🥦',
      title: 'Expert-guided nutrition',
      description: 'Child-friendly and parent-approved meal plans',
      color: 'green',
      particles: ['🥕', '🍎', '🥬']
    },
    {
      emoji: '🏃',
      title: 'Movement-focused fitness',
      description: 'Games, challenges, and fun classes',
      color: 'blue',
      particles: ['⚽', '🏀', '🎾']
    },
    {
      emoji: '👨‍👩‍👧',
      title: 'Parent support',
      description: 'Help build healthy habits at home',
      color: 'purple',
      particles: ['❤️', '🏠', '🤝']
    }
  ];

  const whyItMatters = [
    {
      icon: Heart,
      title: 'Rising childhood obesity & screen time',
      description: '1 in 3 kids are inactive or not eating balanced meals regularly.',
      color: 'red',
      bgGradient: 'from-red-50 via-orange-50 to-red-50'
    },
    {
      icon: Brain,
      title: 'Poor habits begin early',
      description: 'Food relationships, energy levels, and mood are shaped young.',
      color: 'purple',
      bgGradient: 'from-purple-50 via-blue-50 to-purple-50'
    },
    {
      icon: Users,
      title: 'Kids learn best when families join in',
      description: 'Parent involvement creates better long-term results.',
      color: 'green',
      bgGradient: 'from-green-50 via-teal-50 to-green-50'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-300 to-orange-300 rounded-full opacity-20 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Interactive cursor glow */}
      <div 
        className="absolute pointer-events-none opacity-30 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title with staggered animation */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 relative">
              What is{' '}
              <span className="text-blue-600 relative inline-block group">
                Fittr Kids
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-orange-400 animate-pulse group-hover:animate-spin" />
              </span>
              ?
            </h2>
          </div>
          
          {/* Main content card with floating animation */}
          <div className={`bg-gradient-to-r from-blue-50 via-white to-orange-50 rounded-3xl p-8 md:p-12 mb-16 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:scale-[1.02] border border-blue-100`}>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 relative">
              <strong className="text-blue-600 relative">
                Fittr Kids
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping" />
              </strong> is a health-first initiative designed to build stronger, healthier habits for children through fun fitness and simple nutrition. Our mission is to make wellness part of everyday family life — without pressure, punishment, or guilt.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`text-center group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-110 relative`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Floating particles */}
                  {hoveredFeature === index && feature.particles.map((particle, pIndex) => (
                    <div
                      key={pIndex}
                      className="absolute animate-bounce opacity-70"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 50}%`,
                        animationDelay: `${pIndex * 300}ms`,
                        fontSize: '1.2rem'
                      }}
                    >
                      {particle}
                    </div>
                  ))}
                  
                  <div className={`bg-${feature.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative group-hover:animate-pulse transition-all duration-300 group-hover:scale-125 group-hover:bg-${feature.color}-200`}>
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {feature.emoji}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-ping" />
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second section title with bounce effect */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl md:text-4xl font-black text-gray-800 relative">
              Why It Matters{' '}
              <span className="text-orange-500 relative inline-block animate-bounce">
                (Now More Than Ever)
                <Star className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-spin" />
              </span>
            </h3>
          </div>
          
          {/* Cards with 3D hover effects */}
          <div className="grid md:grid-cols-3 gap-8">
            {whyItMatters.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.bgGradient} rounded-2xl p-8 text-center cursor-pointer transition-all duration-500 hover:shadow-2xl border border-white/50 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:rotate-1 hover:scale-105 relative overflow-hidden group`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0" />
                  
                  {/* Floating icon with multiple animations */}
                  <div className="relative mb-4">
                    <IconComponent 
                      className={`w-12 h-12 text-${item.color}-500 mx-auto transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`} 
                    />
                    {activeCard === index && (
                      <div className="absolute inset-0 animate-ping">
                        <IconComponent className={`w-12 h-12 text-${item.color}-300 mx-auto opacity-50`} />
                      </div>
                    )}
                    <Zap className={`absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce`} />
                  </div>
                  
                  <h4 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 relative">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Interactive corner accent */}
                  <div className={`absolute top-0 right-0 w-8 h-8 bg-${item.color}-200 rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;