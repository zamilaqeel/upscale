import React from 'react';
import { Shield, Heart, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main About Card */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] p-12 md:p-16 border border-white/10 shadow-2xl shadow-black/20 mb-16 hover:bg-white/8 transition-all duration-700">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-violet-500/5 rounded-[32px] opacity-60"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Your Clinic's{' '}
              <span className="bg-gradient-to-r from-blue-300 to-violet-400 bg-clip-text text-transparent">
                Growth Partner
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed font-light">
              Upscale acts as your clinic's growth partner — delivering HIPAA-compliant strategies 
              tailored specifically for healthcare and aesthetic practices. We understand the unique 
              challenges of medical marketing and provide solutions that build trust while driving results.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: 'HIPAA Compliant',
              description: 'Every strategy designed with strict compliance standards'
            },
            {
              icon: Heart,
              title: 'Healthcare Focused',
              description: 'Specialized expertise in medical practice marketing'
            },
            {
              icon: Target,
              title: 'Results Driven',
              description: 'Proven strategies that deliver measurable outcomes'
            },
            {
              icon: Award,
              title: 'Industry Leading',
              description: 'Recognized expertise in clinic growth and patient acquisition'
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/25">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;