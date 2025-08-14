import React, { useState, useEffect, useRef } from 'react';
import { Heart, Brain, Users, Zap, Star, Sparkles, Check, Crown, ChevronRight, Gift } from 'lucide-react';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsent: () => void;
  programName: string;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ isOpen, onClose, onConsent, programName }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 animate-bounce opacity-80`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      )}

      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative border-4 border-blue-200 transform shadow-2xl">
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-blue-200">
            <span className="text-4xl">🧒👨‍👩‍👧‍👦</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Parent Consent Required</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You're about to enroll in <strong className="text-blue-600">{programName}</strong>. 
            As this program involves children's health and fitness, we require parent/guardian consent before proceeding.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 mb-6">
            {[
              'Safe & Age-Appropriate Content',
              'Certified Child Fitness Coaches',
              'Parent Involvement Encouraged'
            ].map((text, index) => (
              <div key={index} className={`flex items-center gap-3 mb-2 last:mb-0`}>
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">{text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300 hover:border-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={onConsent}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            >
              I Consent & Continue ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramsSection: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; program: string }>({
    isOpen: false,
    program: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleEnrollClick = (programName: string) => {
    setModalState({ isOpen: true, program: programName });
  };

  const handleConsent = () => {
    setModalState({ isOpen: false, program: '' });
    alert(`🎉 Welcome to ${modalState.program}! Redirecting to enrollment...`);
  };

  const closeModal = () => {
    setModalState({ isOpen: false, program: '' });
  };

  const programs = [
    {
      id: 'nutrition',
      badge: { text: 'STARTER', color: 'from-green-500 to-emerald-600', icon: '🌱' },
      emoji: '🥦',
      title: 'Nutrition Only',
      description: 'Perfect foundation for healthy eating habits',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      buttonGradient: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      features: [
        'Personalized meal plans for kids',
        'Habit trackers & healthy snack ideas',
        'Downloadable tools for parents',
        'Email support'
      ],
      particles: ['🥕', '🍎', '🥬', '🥝'],
      buttonText: 'Start Nutrition Journey'
    },
    {
      id: 'group',
      badge: { text: 'POPULAR', color: 'from-blue-500 to-indigo-600', icon: '⭐' },
      emoji: '👥',
      title: 'Nutrition + Group Workout',
      description: 'Fun group activities with personalized nutrition',
      bgGradient: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      buttonGradient: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      features: [
        'Everything in Nutrition Only',
        'Weekly group classes (yoga, dance, HIIT)',
        'Age-appropriate groups',
        'Led by certified kid fitness coaches',
        'Access to session calendar'
      ],
      particles: ['⚽', '🏀', '🎾', '🏃‍♂️'],
      buttonText: 'Join the Fun!'
    },
    {
      id: 'personal',
      badge: { text: 'PREMIUM', color: 'from-purple-500 to-pink-600', icon: '👑' },
      emoji: '🎯',
      title: 'Nutrition + 1-on-1 Personal Training',
      description: 'Complete personalized health & fitness experience',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      buttonGradient: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      features: [
        'Everything in Plan 2',
        'Private weekly sessions',
        'Customized workouts based on fitness level',
        'Progress check-ins every 2 weeks',
        'Parent coaching + involvement tips'
      ],
      particles: ['🏆', '💪', '⚡', '🎖️'],
      buttonText: 'Go Premium!'
    }
  ];

  return (
    <>
      {/* About Section */}
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
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-300 to-orange-300 rounded-full opacity-20 animate-bounce"
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
            {/* Main Title */}
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
            
            {/* Main content card */}
            <div className={`bg-gradient-to-r from-blue-50 via-white to-orange-50 rounded-3xl p-8 md:p-12 mb-16 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:scale-[1.02] border border-blue-100`}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 relative">
                <strong className="text-blue-600 relative">
                  Fittr Kids
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping" />
                </strong> is a health-first initiative designed to build stronger, healthier habits for children through fun fitness and simple nutrition. Our mission is to make wellness part of everyday family life — without pressure, punishment, or guilt.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { emoji: '🥦', title: 'Expert-guided nutrition', description: 'Child-friendly and parent-approved meal plans', color: 'green', particles: ['🥕', '🍎', '🥬'] },
                  { emoji: '🏃', title: 'Movement-focused fitness', description: 'Games, challenges, and fun classes', color: 'blue', particles: ['⚽', '🏀', '🎾'] },
                  { emoji: '👨‍👩‍👧', title: 'Parent support', description: 'Help build healthy habits at home', color: 'purple', particles: ['❤️', '🏠', '🤝'] }
                ].map((feature, index) => (
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
            
            {/* Second section title */}
            <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 relative">
                Why It Matters{' '}
                <span className="text-orange-500 relative inline-block animate-bounce">
                  (Now More Than Ever)
                  <Star className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-spin" />
                </span>
              </h3>
            </div>
            
            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: 'Rising childhood obesity & screen time', description: '1 in 3 kids are inactive or not eating balanced meals regularly.', color: 'red', bgGradient: 'from-red-50 via-orange-50 to-red-50' },
                { icon: Brain, title: 'Poor habits begin early', description: 'Food relationships, energy levels, and mood are shaped young.', color: 'purple', bgGradient: 'from-purple-50 via-blue-50 to-purple-50' },
                { icon: Users, title: 'Kids learn best when families join in', description: 'Parent involvement creates better long-term results.', color: 'green', bgGradient: 'from-green-50 via-teal-50 to-green-50' }
              ].map((item, index) => {
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
                    
                    {/* Floating icon */}
                    <div className="relative mb-4">
                      <IconComponent 
                        className={`w-12 h-12 text-${item.color}-500 mx-auto transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`} 
                      />
                      {activeCard === index && (
                        <div className="absolute inset-0 animate-ping">
                          <IconComponent className={`w-12 h-12 text-${item.color}-300 mx-auto opacity-50`} />
                        </div>
                      )}
                      <Zap className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce" />
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

      {/* Programs Section */}
      <section 
        id="programs" 
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Interactive cursor trail */}
        <div 
          className="absolute pointer-events-none opacity-20 transition-all duration-300"
          style={{
            left: mousePosition.x - 75,
            top: mousePosition.y - 75,
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)',
            borderRadius: '50%'
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 relative">
              💪 <span className="text-blue-600">Fittr Kids Programs</span> – Choose What Fits Best!
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Gift className="w-8 h-8 text-orange-500" />
              </div>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
              <strong>"All our plans are guided by certified child nutritionists and fitness coaches. Designed with fun and safety in mind!"</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`bg-gradient-to-br ${program.bgGradient} rounded-3xl p-8 shadow-xl border-4 ${program.borderColor} transform transition-all duration-500 relative overflow-hidden group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105 hover:rotate-1`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Floating particles */}
                {hoveredCard === index && program.particles.map((particle, pIndex) => (
                  <div
                    key={pIndex}
                    className="absolute animate-bounce opacity-80 z-20"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${pIndex * 200}ms`,
                      fontSize: '1.5rem'
                    }}
                  >
                    {particle}
                  </div>
                ))}

                {/* Animated background sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`bg-gradient-to-r ${program.badge.color} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate-bounce`}>
                    <span>{program.badge.icon}</span>
                    {program.badge.text}
                  </div>
                </div>
                
                <div className="text-center mb-6 relative z-10">
                  <div className={`bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 ${program.borderColor}`}>
                    <span className="text-4xl group-hover:animate-bounce">{program.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {program.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8 relative z-10">
                  {program.features.map((feature, fIndex) => (
                    <li 
                      key={fIndex} 
                      className={`flex items-center gap-3 transition-all duration-300 ${hoveredCard === index ? 'translate-x-2' : ''}`}
                      style={{ transitionDelay: `${fIndex * 100}ms` }}
                    >
                      <Check className={`w-5 h-5 ${program.id === 'nutrition' ? 'text-green-500' : program.id === 'group' ? 'text-blue-500' : 'text-purple-500'} flex-shrink-0`} />
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleEnrollClick(`${program.title} Plan`)}
                  className={`w-full bg-gradient-to-r ${program.buttonGradient} text-white py-4 rounded-2xl font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group/btn`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {program.buttonText}
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 group-hover/btn:animate-pulse" />
                </button>
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-purple-500 animate-spin" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <ConsentModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          onConsent={handleConsent}
          programName={modalState.program}
        />
      </section>
    </>
  );
};

export default ProgramsSection;