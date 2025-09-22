import { useState, useEffect } from 'react';
import { X, Download, Heart, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Import all images
import blueDress from '@/assets/tejaswani-blue-dress.jpg';
import whitePortrait from '@/assets/tejaswani-white-portrait.jpg';
import pinkSaree from '@/assets/tejaswani-pink-saree.jpg';
import redTraditional from '@/assets/tejaswani-red-traditional.jpg';
import maroonLehenga from '@/assets/tejaswani-maroon-lehenga.jpg';
import naturalLook from '@/assets/tejaswani-natural-look.jpg';
import professional from '@/assets/tejaswani-professional.jpg';
import celebration from '@/assets/tejaswani-celebration.jpg';
import magentaCasual from '@/assets/tejaswani-magenta-casual.jpg';
import yellowRooftop from '@/assets/tejaswani-yellow-rooftop.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    {
      id: 1,
      src: professional,
      alt: 'Professional Business Look',
      category: 'professional',
      title: 'Executive Style',
      description: 'Corporate and professional styling'
    },
    {
      id: 2,
      src: pinkSaree,
      alt: 'Traditional Pink Saree',
      category: 'traditional',
      title: 'Elegant Traditional',
      description: 'Classical Indian attire with modern flair'
    },
    {
      id: 3,
      src: whitePortrait,
      alt: 'Contemporary Portrait',
      category: 'portrait',
      title: 'Studio Portrait',
      description: 'Professional headshot session'
    },
    {
      id: 4,
      src: blueDress,
      alt: 'Casual Blue Dress',
      category: 'casual',
      title: 'Casual Elegance',
      description: 'Relaxed yet sophisticated styling'
    },
    {
      id: 5,
      src: maroonLehenga,
      alt: 'Celebration Lehenga',
      category: 'traditional',
      title: 'Festival Wear',
      description: 'Traditional celebration outfit'
    },
    {
      id: 6,
      src: yellowRooftop,
      alt: 'Urban Rooftop Shoot',
      category: 'lifestyle',
      title: 'City Vibes',
      description: 'Urban lifestyle photography'
    },
    {
      id: 7,
      src: naturalLook,
      alt: 'Natural Outdoor Look',
      category: 'natural',
      title: 'Au Naturel',
      description: 'Authentic and natural styling'
    },
    {
      id: 8,
      src: redTraditional,
      alt: 'Red Traditional Wear',
      category: 'traditional',
      title: 'Heritage Style',
      description: 'Classic traditional ensemble'
    },
    {
      id: 9,
      src: celebration,
      alt: 'Celebration Moment',
      category: 'lifestyle',
      title: 'Joyful Moments',
      description: 'Candid celebration photography'
    },
    {
      id: 10,
      src: magentaCasual,
      alt: 'Casual Magenta Top',
      category: 'casual',
      title: 'Everyday Chic',
      description: 'Comfortable yet stylish look'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'professional', label: 'Professional' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'casual', label: 'Casual' },
    { id: 'natural', label: 'Natural' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (item: any) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-6 text-center">
        <div className={`container mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            Photo <span className="text-cinematic">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection showcasing versatility in style, expression, and artistic vision
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
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  filter === category.id
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

      {/* Gallery Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(item)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-cream">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-inter font-medium">View Full Size</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-card rounded-b-lg">
                  <h3 className="font-playfair font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-inter">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-charcoal-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-charcoal/80 text-cream rounded-full hover:bg-charcoal transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="bg-background rounded-lg overflow-hidden shadow-dramatic">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      {selectedImage.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gold/10 text-gold rounded-full hover:bg-gold/20 transition-colors duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-gold/10 text-gold rounded-full hover:bg-gold/20 transition-colors duration-300">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;