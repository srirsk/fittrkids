import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', action: scrollToTop },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Programs', action: () => scrollToSection('programs') },
    { label: 'Plans', action: () => scrollToSection('plans') },
    { label: 'Videos', action: () => scrollToSection('videos') },
    { label: 'Community', action: () => scrollToSection('community') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black">
              <span className="text-blue-600">FITTR</span>
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}> Kids</span>
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className={`font-semibold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-yellow-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started 🚀
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 mt-4 shadow-xl border border-blue-100">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started 🚀
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;