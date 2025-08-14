import React from 'react';
import { Users, Play, BookOpen } from 'lucide-react';

const PlansSection: React.FC = () => {
  const plans = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      emoji: '👫',
      title: 'Parent & Kid Plans',
      description: 'Shared goals, workouts & meal ideas',
      features: 'Includes habit trackers + printable fun sheets',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      emoji: '🧍',
      title: 'Group Sessions for Kids',
      description: 'Dance, yoga, fitness games',
      features: 'Ages 5–8, 9–12, and teens • Weekly schedule',
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: <Play className="w-8 h-8 text-purple-600" />,
      emoji: '🧠',
      title: 'On-Demand Video Sessions',
      description: 'Nutrition & fitness videos',
      features: 'Watch anytime on YouTube',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Our <span className="text-orange-500">Plans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect program for your family's fitness journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${plan.bgColor} rounded-3xl p-8 shadow-xl border-2 border-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="text-center mb-6">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">{plan.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{plan.title}</h3>
                <p className="text-lg text-gray-700 font-medium mb-2">{plan.description}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{plan.features}</p>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg text-white py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            <BookOpen className="w-6 h-6" />
            See All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;