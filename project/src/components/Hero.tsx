import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              The Future of <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Crypto</span>, Simplified
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Experience the next generation of digital currency with our secure, fast, and intuitive platform designed for both beginners and experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center">
                Explore Now
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Main image with animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-full animate-pulse-slow animation-delay-1000"></div>
              <div className="absolute inset-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center">
                <div className="text-white text-7xl font-bold">₿</div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 right-0 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float">
                <div className="text-sm font-semibold">BTC Price</div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">$43,150.25</div>
              </div>
              
              <div className="absolute bottom-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-float animation-delay-500">
                <div className="text-sm font-semibold">ETH Price</div>
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400">$3,275.89</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute left-0 right-0 h-16 -bottom-1">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" fillOpacity="1" className="text-gray-100 dark:text-gray-800" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,224C672,224,768,192,864,176C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;