import React from 'react';
import { Star, Megaphone, Palette, Search, Settings, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Star,
      title: 'Reputation Management',
      description: 'Build and protect your clinic\'s online reputation with strategic review management, crisis prevention, and trust-building initiatives.',
    },
    {
      icon: Megaphone,
      title: 'Targeted Lead Generation',
      description: 'Google & Meta Ads campaigns designed specifically for healthcare practices to attract qualified, high-intent patients.',
    },
    {
      icon: Palette,
      title: 'Brand Building',
      description: 'Develop a compelling brand identity that establishes trust, credibility, and differentiates your practice in the market.',
    },
    {
      icon: Search,
      title: 'Medical SEO',
      description: 'Dominate local search results with HIPAA-compliant SEO strategies tailored specifically for healthcare providers.',
    },
    {
      icon: Settings,
      title: 'CRM & Automation',
      description: 'Streamline patient communication, follow-ups, and appointment scheduling with compliant automation systems.',
    },
    {
      icon: Zap,
      title: 'ClinicAscend360™',
      description: 'Our comprehensive integrated growth system combining all services for complete clinic transformation and sustained growth.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-300 to-violet-400 bg-clip-text text-transparent">
              Growth Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Every service designed specifically for healthcare and aesthetic practices, 
            ensuring compliance while driving real, measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-2xl rounded-[28px] p-10 border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-500"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-violet-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 shadow-xl shadow-blue-500/30">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-200 transition-colors duration-300">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg group-hover:text-white/80 transition-colors duration-300">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;