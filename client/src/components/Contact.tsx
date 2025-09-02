import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm here to help you build something amazing. 
              Let's discuss your project and create exceptional digital experiences together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Send Me a Message
                </h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    rows={6}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-6">
                  Prefer to reach out directly? I'm available through multiple channels 
                  and always happy to discuss new opportunities.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      your.email@example.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Usually respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      +1 (234) 567-8900
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available Mon-Fri, 9AM-6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Remote Worldwide
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Working across all timezones
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/yourusername', label: 'GitHub' },
                    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/yourusername', label: 'Twitter' }
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    Available for New Projects
                  </span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-300">
                  Currently accepting new client projects for Q4 2024 and Q1 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}