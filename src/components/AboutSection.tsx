import React from 'react';
import { Heart, Brain, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 text-gray-800">
            What is <span className="text-blue-600">Fittr Kids</span>?
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <strong className="text-blue-600">Fittr Kids</strong> is a health-first initiative designed to build stronger, healthier habits for children through fun fitness and simple nutrition. Our mission is to make wellness part of everyday family life — without pressure, punishment, or guilt.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥦</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Expert-guided nutrition</h3>
                <p className="text-gray-600">Child-friendly and parent-approved meal plans</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Movement-focused fitness</h3>
                <p className="text-gray-600">Games, challenges, and fun classes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Parent support</h3>
                <p className="text-gray-600">Help build healthy habits at home</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-800">
            Why It Matters <span className="text-orange-500">(Now More Than Ever)</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-3 text-gray-800">Rising childhood obesity & screen time</h4>
              <p className="text-gray-600">1 in 3 kids are inactive or not eating balanced meals regularly.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-3 text-gray-800">Poor habits begin early</h4>
              <p className="text-gray-600">Food relationships, energy levels, and mood are shaped young.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-3 text-gray-800">Kids learn best when families join in</h4>
              <p className="text-gray-600">Parent involvement creates better long-term results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;