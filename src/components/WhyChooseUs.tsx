import React from 'react';
import { CheckCircle, Clock, Award, Users, Shield, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliance Guaranteed',
      description: 'Every campaign, strategy, and communication is designed with strict HIPAA compliance from day one, protecting patient privacy and your clinic\'s reputation.',
    },
    {
      icon: Clock,
      title: 'Results Within 90 Days',
      description: 'Our proven methodologies deliver measurable growth and increased bookings within the first 3 months, with many clients seeing results even sooner.',
    },
    {
      icon: Award,
      title: 'Healthcare Expertise',
      description: 'Specialized knowledge in medical and aesthetic practice marketing with years of industry experience and deep understanding of patient psychology.',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Strategies',
      description: 'Every decision backed by comprehensive analytics and performance data, ensuring optimal ROI and sustainable growth for your practice.',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Card */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] p-12 md:p-16 border border-white/10 shadow-2xl shadow-black/20 hover:bg-white/8 transition-all duration-700">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-violet-500/5 rounded-[32px] opacity-60"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-blue-300 to-violet-400 bg-clip-text text-transparent">
                  Upscale?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
                We understand the unique challenges of healthcare marketing and provide solutions 
                that build trust while driving sustainable, compliant growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-400 hover:scale-102"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/25">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">{feature.title}</h3>
                        <p className="text-white/70 leading-relaxed text-lg group-hover:text-white/80 transition-colors duration-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;