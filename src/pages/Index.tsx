import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import { Camera, Heart, Star, Award, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import featured images
import featuredImage1 from '@/assets/tejaswani-professional.jpg';
import featuredImage2 from '@/assets/tejaswani-pink-saree.jpg';
import featuredImage3 from '@/assets/tejaswani-blue-dress.jpg';

const Index = () => {
  const featuredWork = [
    {
      image: featuredImage1,
      title: 'Professional Portfolio',
      category: 'Corporate Styling',
      description: 'Contemporary professional looks for business campaigns'
    },
    {
      image: featuredImage2,
      title: 'Traditional Elegance',
      category: 'Cultural Heritage',
      description: 'Celebrating Indian traditions with modern flair'
    },
    {
      image: featuredImage3,
      title: 'Lifestyle Photography',
      category: 'Fashion & Style',
      description: 'Versatile contemporary styling for lifestyle brands'
    }
  ];

  const highlights = [
    {
      icon: Star,
      number: '21',
      label: 'Years Young',
      description: 'Fresh perspective with mature professionalism'
    },
    {
      icon: Camera,
      number: '10+',
      label: 'Photo Shoots',
      description: 'Diverse portfolio across multiple genres'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Dedication',
      description: 'Committed to excellence in every project'
    },
    {
      icon: Globe,
      number: '2',
      label: 'Languages',
      description: 'Telugu and English fluency'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Work Section */}
      <section id="portfolio" className="py-16 px-6 bg-cream/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Featured <span className="text-cinematic">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into my versatile portfolio showcasing different styles and artistic expressions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((work, index) => (
              <div
                key={work.title}
                className="gallery-item group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-cream">
                      <div className="text-gold font-inter text-sm font-medium mb-2">{work.category}</div>
                      <h3 className="text-xl font-playfair font-bold mb-2">{work.title}</h3>
                      <p className="text-cream/90 text-sm">{work.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="btn-hero"
              onClick={() => window.location.href = '/portfolio'}
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              At a <span className="text-cinematic">Glance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key highlights that define my professional journey and capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.label}
                className="text-center bg-card rounded-lg p-8 shadow-elegant hover:shadow-dramatic transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
                  <highlight.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-3xl font-playfair font-bold text-foreground mb-2">
                  {highlight.number}
                </div>
                <div className="text-lg font-inter font-semibold text-foreground mb-2">
                  {highlight.label}
                </div>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-6 bg-gradient-hero text-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Passion Meets <span className="text-gold">Professionalism</span>
              </h2>
              <p className="text-cream/90 font-inter text-lg leading-relaxed mb-6">
                With a unique background in healthcare and a passion for the arts, I bring a distinctive 
                perspective to every role. My journey from nursing education to acting reflects my 
                commitment to excellence and my ability to connect with diverse audiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-gold" />
                  <span className="font-inter">Authentic and versatile performances</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="font-inter">Comfortable with all genres and styles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gold" />
                  <span className="font-inter">Available for national and international projects</span>
                </div>
              </div>
              <Button 
                className="bg-gold text-charcoal hover:bg-gold-light px-8 py-4"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Me
              </Button>
            </div>
            <div className="relative">
              <div className="gallery-item animate-float">
                <img
                  src={featuredImage2}
                  alt="Tejaswani Portrait"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Let's Create Something <span className="text-cinematic">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'm excited to collaborate on your next project 
            and deliver performances that captivate and inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-hero"
              onClick={() => window.location.href = '/contact'}
            >
              Start a Project
            </Button>
            <Button 
              className="btn-outline"
              onClick={() => window.location.href = '/gallery'}
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
