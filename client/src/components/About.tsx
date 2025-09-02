import { Code, Zap, Users, Award } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: <Code className="h-6 w-6" />,
      number: '6+',
      label: 'Years Programming',
      description: 'Extensive experience in web development'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      number: '3+',
      label: 'Years Full-Stack',
      description: 'Professional full-stack development'
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: '50+',
      label: 'Projects Completed',
      description: 'Successful client deliveries'
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Committed to excellence'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate full-stack developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                My Journey
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over <strong className="text-foreground">6 years of programming experience</strong> and 
                  <strong className="text-foreground"> 3+ years specializing in full-stack development</strong>, 
                  I've evolved from writing my first "Hello World" to architecting complex web applications 
                  that serve thousands of users.
                </p>
                
                <p>
                  My expertise spans the entire development spectrum - from crafting pixel-perfect user 
                  interfaces with <strong className="text-foreground">React, Vue, and Angular</strong> to 
                  building robust backend systems with <strong className="text-foreground">Node.js, Django, 
                  and Flask</strong>.
                </p>
                
                <p>
                  What sets me apart is my passion for <strong className="text-foreground">automation 
                  and AI integrations</strong>. I specialize in creating intelligent workflows using 
                  platforms like n8n, Make, and Zapier, helping businesses streamline their processes 
                  and increase productivity.
                </p>
                
                <p>
                  I believe in writing <strong className="text-foreground">clean, maintainable code</strong> 
                  that not only works today but scales for tomorrow. Every project is an opportunity to 
                  learn something new and deliver exceptional value to my clients.
                </p>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Core Values
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Quality-First Approach',
                    'Continuous Learning',
                    'Client Collaboration',
                    'Innovation & Creativity'
                  ].map((value, index) => (
                    <div 
                      key={value} 
                      className="flex items-center space-x-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">
                By the Numbers
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Skills Highlight */}
              <div className="mt-8 p-6 bg-card border border-border rounded-xl">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  What I Excel At
                </h4>
                <div className="space-y-3">
                  {[
                    { skill: 'Full-Stack Development', level: 95 },
                    { skill: 'Automation & Workflows', level: 90 },
                    { skill: 'AI Integration', level: 85 },
                    { skill: 'Database Design', level: 90 }
                  ].map((item, index) => (
                    <div key={item.skill} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">{item.skill}</span>
                        <span className="text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${item.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}