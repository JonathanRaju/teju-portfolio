import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tejaswani.actress@gmail.com',
      link: 'mailto:tejaswani.actress@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Anantapur, Andhra Pradesh',
      link: 'https://maps.google.com/maps?q=Anantapur'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  const projectTypes = [
    'Feature Film',
    'Television Series',
    'Commercial/Advertisement',
    'Music Video',
    'Print Shoot',
    'Fashion Show',
    'Theater Production',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-6 text-center">
        <div className={`container mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-gold font-inter text-sm font-medium">Let's Collaborate</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            Get In <span className="text-cinematic">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? I'm excited to discuss your next project and explore creative possibilities together.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-6 text-center">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-subtle hover:shadow-elegant transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-gold/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-foreground mb-1">{info.label}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-gold transition-colors duration-300"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Note */}
            <div className="bg-gradient-gold/10 rounded-lg p-8 border border-gold/20">
              <h3 className="font-playfair font-semibold text-foreground mb-6 text-center text-xl">Availability</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-muted-foreground font-inter">Open for outstation shoots</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-muted-foreground font-inter">Flexible with timing</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-muted-foreground font-inter">Available for international projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-muted-foreground font-inter">Quick response guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;