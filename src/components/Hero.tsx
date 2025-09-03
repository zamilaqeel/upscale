import React from 'react';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';

const Hero = () => {
  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      {/* Floating Acrylic Panel */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Acrylic Glass Panel */}
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-[32px] p-12 md:p-16 lg:p-20 border border-white/10 shadow-2xl shadow-black/20 hover:bg-white/8 transition-all duration-700 group">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5 rounded-[32px] opacity-60"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-white/20 shadow-lg hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-5 h-5 text-blue-300" />
              <span className="text-white/90 font-medium tracking-wide">HIPAA-Compliant Growth Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Build Trust.{' '}
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Patients Follow.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/85 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Upscale helps clinics attract ideal patients, boost bookings, and grow sustainably with proven HIPAA-compliant strategies.
            </p>

            {/* CTA Button */}
            <button 
              onClick={scrollToCTA}
              className="group relative bg-gradient-to-r from-blue-500 to-violet-500 text-white px-12 py-5 rounded-2xl text-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <span className="relative">Book a Call</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative" />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Clinics Served' },
            { number: '3x', label: 'Average Growth' },
            { number: '100%', label: 'HIPAA Compliant' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-xl hover:bg-white/8 hover:scale-105 transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-60"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;