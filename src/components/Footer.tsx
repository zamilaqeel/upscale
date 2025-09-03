import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative">
      {/* Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {/* Footer Content */}
      <div className="bg-white/5 backdrop-blur-2xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
                <span className="text-white font-bold text-3xl tracking-tight">Upscale</span>
              </div>
              <p className="text-white/70 leading-relaxed text-lg mb-8 max-w-md">
                Your clinic's growth partner, delivering HIPAA-compliant marketing solutions 
                that build trust and drive sustainable practice growth.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:michaelsimonge@upscaleorg.com"
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group shadow-lg"
                >
                  <Mail className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-xl mb-8">Quick Links</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 text-lg"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 text-lg"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 text-lg"
                >
                  Book a Call
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-xl mb-8">Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <a 
                      href="mailto:michaelsimonge@upscaleorg.com"
                      className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-lg"
                    >
                      michaelsimonge@upscaleorg.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-12 mt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-lg">
                © 2025 Upscale. All rights reserved. HIPAA-compliant marketing solutions.
              </div>
              <div className="flex space-x-8 text-lg">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-105 transform">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-105 transform">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-105 transform">
                  HIPAA Compliance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;