import { useState, useEffect } from 'react';
import { Play, ExternalLink, Calendar, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Import images
import professionalImage from '@/assets/tejaswani-professional.jpg';
import traditionalImage from '@/assets/tejaswani-pink-saree.jpg';
import casualImage from '@/assets/tejaswani-blue-dress.jpg';
import celebrationImage from '@/assets/tejaswani-celebration.jpg';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Corporate Campaign',
      category: 'commercial',
      type: 'Print Advertisement',
      image: professionalImage,
      year: 2024,
      location: 'Anantapur',
      description: 'Professional corporate styling for business campaign showcasing contemporary professional wear.',
      tags: ['Commercial', 'Professional', 'Print'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Cultural Heritage Series',
      category: 'traditional',
      type: 'Cultural Documentation',
      image: traditionalImage,
      year: 2024,
      location: 'Anantapur',
      description: 'Traditional Indian attire photography celebrating cultural heritage and timeless elegance.',
      tags: ['Traditional', 'Cultural', 'Heritage'],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Lifestyle Brand Shoot',
      category: 'lifestyle',
      type: 'Fashion Photography',
      image: casualImage,
      year: 2024,
      location: 'Anantapur',
      description: 'Contemporary casual wear shoot for lifestyle brand showcasing versatile modern styling.',
      tags: ['Fashion', 'Lifestyle', 'Contemporary'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Festival Collection',
      category: 'traditional',
      type: 'Festive Campaign',
      image: celebrationImage,
      year: 2024,
      location: 'Anantapur',
      description: 'Festive traditional wear collection featuring intricate designs and celebratory styling.',
      tags: ['Festival', 'Traditional', 'Celebration'],
      status: 'Completed'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'fashion', label: 'Fashion' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-6 text-center">
        <div className={`container mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            My <span className="text-cinematic">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of versatility, creativity, and professional excellence across various projects and collaborations
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-charcoal shadow-gold'
                    : 'bg-card text-foreground hover:bg-gold/20 hover:text-gold shadow-subtle'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <button className="bg-gold text-charcoal p-3 rounded-full hover:bg-gold-light transition-colors duration-300 mb-4">
                        <Play className="w-6 h-6" />
                      </button>
                      <p className="text-cream font-inter font-medium">View Project</p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-inter font-medium">
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gold font-inter font-medium mb-2">{item.type}</p>
                    </div>
                    <button className="p-2 text-muted-foreground hover:text-gold transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-inter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground font-inter">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-cream/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and bring creative visions to life. 
            Let's discuss how we can work together on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Start a Project
            </button>
            <button className="btn-outline">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;