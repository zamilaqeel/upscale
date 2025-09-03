import React from 'react';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-[40px] p-12 md:p-20 border border-white/10 shadow-2xl shadow-black/30 hover:bg-white/8 hover:scale-102 transition-all duration-700 group">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-blue-500/5 to-violet-500/10 rounded-[40px] opacity-80"></div>
          
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 mb-10 border border-white/20 shadow-lg hover:scale-105 transition-all duration-300">
              <Calendar className="w-6 h-6 text-blue-300" />
              <span className="text-white/90 font-semibold tracking-wide">Free Strategy Session</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Let's Grow Your{' '}
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Clinic Together
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/85 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Ready to transform your practice? Schedule a free strategy call to discover 
              how we can help you attract more ideal patients and grow sustainably.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                'No commitment required',
                '30-minute consultation',
                'HIPAA-compliant discussion'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative bg-gradient-to-r from-blue-500 via-blue-600 to-violet-500 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-400 inline-flex items-center space-x-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
              <span className="relative">Schedule a Free Strategy Call</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative" />
            </button>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/70 mb-3 text-lg">Or reach out directly:</p>
              <a 
                href="mailto:michaelsimonge@upscaleorg.com" 
                className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-semibold text-xl hover:scale-105 inline-block transition-transform duration-200"
              >
                michaelsimonge@upscaleorg.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;