import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/20 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">Upscale</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium tracking-wide hover:scale-105"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="relative bg-gradient-to-r from-blue-500 to-violet-500 text-white px-8 py-3 rounded-2xl font-semibold tracking-wide hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Book a Call</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <nav className="px-6 py-8 space-y-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-white/80 hover:text-white transition-colors duration-200 w-full text-left font-medium text-lg"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-white/80 hover:text-white transition-colors duration-200 w-full text-left font-medium text-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-white/80 hover:text-white transition-colors duration-200 w-full text-left font-medium text-lg"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="bg-gradient-to-r from-blue-500 to-violet-500 text-white px-8 py-4 rounded-2xl w-full text-center font-semibold hover:shadow-lg transition-all duration-300"
              >
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;