import { Button } from '@/components/ui/button';
import { ExternalLink, Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block text-foreground mb-2">Hello, I'm</span>
            <span className="block text-gradient">Your Full Stack Developer</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer | Automations | AI Integrations
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Transforming ideas into powerful web applications with 6+ years of programming experience 
            and 3+ years of full-stack development expertise.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              variant="hero"
              asChild
            >
              <a 
                href="https://www.upwork.com/freelancers/~01234567890abcdef" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Hire Me on Upwork
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:bg-primary/10 px-8 py-3 hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}