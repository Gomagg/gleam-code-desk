import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">
                Full Stack Developer
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creating exceptional digital experiences with modern technologies, 
                automation, and AI integrations. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Github className="h-5 w-5" />, href: 'https://github.com/yourusername', label: 'GitHub' },
                  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                  { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
                  { icon: <Mail className="h-5 w-5" />, href: 'mailto:your.email@example.com', label: 'Email' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'Home', href: 'hero' },
                  { label: 'Tech Stack', href: 'tech-stack' },
                  { label: 'Projects', href: 'projects' },
                  { label: 'About', href: 'about' },
                  { label: 'Contact', href: 'contact' }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      const element = document.getElementById(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Full-Stack Web Development</p>
                <p>Process Automation</p>
                <p>AI Integration</p>
                <p>Database Design</p>
                <p>API Development</p>
                <p>Performance Optimization</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Full Stack Developer Portfolio. All rights reserved.
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <span>Built with</span>
                <Heart className="h-4 w-4 text-red-500 mx-1" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}