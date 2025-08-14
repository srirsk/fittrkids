import React, { useState } from 'react';
import { Check, Star, Crown } from 'lucide-react';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsent: () => void;
  programName: string;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ isOpen, onClose, onConsent, programName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative border-4 border-blue-200">
        <div className="text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🧒👨‍👩‍👧‍👦</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Parent Consent Required</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You're about to enroll in <strong className="text-blue-600">{programName}</strong>. 
            As this program involves children's health and fitness, we require parent/guardian consent before proceeding.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">Safe & Age-Appropriate Content</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">Certified Child Fitness Coaches</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">Parent Involvement Encouraged</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConsent}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              I Consent & Continue
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

  const handleEnrollClick = (programName: string) => {
    setModalState({ isOpen: true, program: programName });
  };

  const handleConsent = () => {
    setModalState({ isOpen: false, program: '' });
    // Here you would redirect to the actual enrollment/payment page
    alert(`Redirecting to enrollment for ${modalState.program}...`);
  };

  const closeModal = () => {
    setModalState({ isOpen: false, program: '' });
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            💪 <span className="text-blue-600">Fittr Kids Programs</span> – Choose What Fits Best!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border-2 border-green-200">
            <strong>"All our plans are guided by certified child nutritionists and fitness coaches. Designed with fun and safety in mind!"</strong>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Nutrition Only */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-green-200 transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                STARTER
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🥦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Nutrition Only</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Personalized meal plans for kids</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Habit trackers & healthy snack ideas</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Downloadable tools for parents</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Email support</span>
              </li>
            </ul>
            
            <button
              onClick={() => handleEnrollClick('Nutrition Only Plan')}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>
          
          {/* Nutrition + Group Workout */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-200 transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Star className="w-4 h-4" />
                POPULAR
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Nutrition + Group Workout</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700">Everything in Nutrition Only</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700">Weekly group classes (yoga, dance, HIIT)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700">Age-appropriate groups</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700">Led by certified kid fitness coaches</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700">Access to session calendar</span>
              </li>
            </ul>
            
            <button
              onClick={() => handleEnrollClick('Nutrition + Group Workout Plan')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Join Group Program
            </button>
          </div>
          
          {/* Nutrition + 1-on-1 Personal Training */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-200 transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Crown className="w-4 h-4" />
                PREMIUM
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Nutrition + 1-on-1 Personal Training</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">Everything in Plan 2</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">Private weekly sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">Customized workouts based on fitness level</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">Progress check-ins every 2 weeks</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">Parent coaching + involvement tips</span>
              </li>
            </ul>
            
            <button
              onClick={() => handleEnrollClick('Nutrition + 1-on-1 Personal Training Plan')}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Personal Plan
            </button>
          </div>
        </div>
      </div>
      
      <ConsentModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        onConsent={handleConsent}
        programName={modalState.program}
      />
    </section>
  );
};

export default ProgramsSection;