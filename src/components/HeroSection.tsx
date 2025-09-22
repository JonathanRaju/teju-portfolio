import { useEffect, useState } from 'react';
import { ChevronDown, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/tejaswani-professional.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Tejaswani Professional Portrait"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0 bg-gradient-spotlight animate-spotlight"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {/* Intro Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6 animate-glow">
          <Star className="w-4 h-4 text-gold fill-gold animate-pulse" />
          <span className="text-cream font-inter text-sm font-medium">Professional Actress</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-cream mb-6 animate-fade-in">
          <span className="block">Tejaswani</span>
          <span className="block text-cinematic animate-float">Sriramoju</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-cream/90 font-inter font-light mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Bringing stories to life through authentic performances and captivating screen presence
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-scale-in">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-gold">21</div>
            <div className="text-cream/80 font-inter text-sm">Years Old</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-gold">5'3"</div>
            <div className="text-cream/80 font-inter text-sm">Height</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-gold">2+</div>
            <div className="text-cream/80 font-inter text-sm">Languages</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            className="btn-hero group"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View Portfolio
          </Button>
          <Button 
            variant="outline" 
            className="btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="animate-bounce text-cream/70 hover:text-gold transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-gold rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-gold/60 rounded-full animate-pulse delay-1000 opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-gold rounded-full animate-pulse delay-2000 opacity-80"></div>
    </section>
  );
};

export default HeroSection;