import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Join the <span className="text-yellow-300">Fittr Family</span> 🌟
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be the first to know about new programs, get exclusive tips, and connect with other families on their wellness journey!
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur text-white placeholder-white/60 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Get Started
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <span className="text-white/80">Or join our community:</span>
                  <div className="flex gap-4">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Telegram
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Welcome to the Family!</h3>
                <p className="text-white/90">
                  Check your inbox for a welcome email with next steps and exclusive content!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;