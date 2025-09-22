import { useEffect, useState } from 'react';
import { MapPin, GraduationCap, Languages, Calendar, Heart, Trophy } from 'lucide-react';
import Navigation from '@/components/Navigation';
import aboutImage from '@/assets/tejaswani-pink-saree.jpg';
import naturalImage from '@/assets/tejaswani-natural-look.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: MapPin, label: 'Based in', value: 'Anantapur' },
    { icon: Calendar, label: 'Age', value: '21 Years' },
    { icon: GraduationCap, label: 'Education', value: 'GNM Nursing' },
    { icon: Languages, label: 'Languages', value: 'Telugu, English' },
  ];

  const skills = [
    { category: 'Acting Styles', items: ['Drama', 'Comedy', 'Emotional Scenes', 'Character Acting'] },
    { category: 'Wardrobe', items: ['Indian Traditional', 'Western Contemporary', 'Period Costumes', 'Casual Wear'] },
    { category: 'Experience', items: ['Print Shoots', 'Music Albums', 'Calendar Shoots', 'Ramp Shows'] },
    { category: 'Availability', items: ['Local Shoots', 'Outstation Projects', 'Flexible Timing', 'International Ready'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
                  Meet <span className="text-cinematic">Tejaswani</span>
                </h1>
                <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                  A passionate actress with a unique blend of professional healthcare background and artistic talent
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="bg-card rounded-lg p-6 shadow-subtle hover:shadow-elegant transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <stat.icon className="w-8 h-8 text-gold mb-3" />
                    <div className="text-sm text-muted-foreground font-inter">{stat.label}</div>
                    <div className="text-lg font-playfair font-semibold text-foreground">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Personal Statement */}
              <div className="bg-gradient-gold/10 rounded-lg p-8 border border-gold/20">
                <Heart className="w-8 h-8 text-gold mb-4" />
                <blockquote className="text-lg font-cormorant italic text-foreground leading-relaxed">
                  "I believe in bringing authenticity to every role, drawing from my diverse life experiences 
                  and educational background in healthcare to create compelling, relatable characters that 
                  resonate with audiences."
                </blockquote>
                <cite className="text-gold font-inter font-medium mt-4 block">- Tejaswani</cite>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="gallery-item">
                <img 
                  src={aboutImage}
                  alt="Tejaswani in Traditional Attire"
                  className="w-full h-[600px] object-cover rounded-lg"
                />
              </div>
              {/* Floating Image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 gallery-item animate-float">
                <img 
                  src={naturalImage}
                  alt="Tejaswani Natural Look"
                  className="w-full h-full object-cover rounded-lg border-4 border-background shadow-dramatic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-cream/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Trophy className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my acting capabilities and professional versatility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="bg-background rounded-lg p-6 shadow-elegant hover:shadow-dramatic transition-all duration-300 section-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li 
                      key={item}
                      className="text-muted-foreground font-inter flex items-center"
                    >
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse" 
                           style={{ animationDelay: `${itemIndex * 0.2}s` }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              View Portfolio
            </button>
            <button className="btn-outline">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;