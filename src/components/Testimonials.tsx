import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Aesthetic Medicine Clinic',
      content: 'Upscale transformed our practice completely. We went from struggling to book appointments to having a 3-month waiting list within 90 days. Their HIPAA-compliant approach gave us complete peace of mind while delivering incredible results.',
      initials: 'SC'
    },
    {
      name: 'Dr. Michael Wong',
      title: 'Family Practice',
      content: 'The team at Upscale understands healthcare marketing like no one else. Their strategies are compliant, effective, and have helped us build genuine trust with our community. Our patient base has tripled in 6 months.',
      initials: 'MW'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Dermatology & Aesthetics',
      content: 'Working with Upscale was the best decision we made for our practice. Their ClinicAscend360™ system streamlined everything from lead generation to patient retention. We\'re now the top-rated clinic in our area.',
      initials: 'ER'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-300 to-violet-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Real results from real healthcare professionals who trusted us to grow their practices.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] p-12 md:p-16 border border-white/10 shadow-2xl shadow-black/20 hover:bg-white/8 transition-all duration-700 group">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5 rounded-[32px] opacity-60"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                {/* Star Rating */}
                <div className="flex justify-center space-x-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg"></div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-violet-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <span className="text-white font-bold text-lg">{testimonials[currentTestimonial].initials}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-xl">{testimonials[currentTestimonial].name}</div>
                    <div className="text-white/60 text-lg">{testimonials[currentTestimonial].title}</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-6">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Dots */}
                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-gradient-to-r from-blue-400 to-violet-400 scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;