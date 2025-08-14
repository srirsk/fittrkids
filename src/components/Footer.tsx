import React from 'react';
import { Heart, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white">
                <span className="text-blue-400">FITTR</span> Kids
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Building stronger, healthier habits for children through fun fitness and simple nutrition. 
              Making wellness part of everyday family life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors duration-300">Programs</a></li>
              <li><a href="#videos" className="text-gray-300 hover:text-white transition-colors duration-300">YouTube</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:hello@fittrkids.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  hello@fittrkids.com
                </a>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-sm text-gray-300 mb-2">💬 Need quick help?</p>
                <button className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300">
                  Chat with a Coach
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 FITTR Kids. All rights reserved. Made with ❤️ for healthy families.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;