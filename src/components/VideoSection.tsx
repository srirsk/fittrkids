import React from 'react';
import { Youtube, Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videos = [
    {
      title: '🥦 Healthy Eating Made Easy',
      thumbnail: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '8:45'
    },
    {
      title: '🏃 5-Minute Morning Moves',
      thumbnail: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '5:12'
    },
    {
      title: '🧘 Calm Kids – Mindfulness 101',
      thumbnail: 'https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '12:30'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Video Library <span className="text-red-500">Preview</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a taste of our fun and educational content for kids and parents
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-red-500" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            <Youtube className="w-6 h-6" />
            Visit Our YouTube Channel
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;