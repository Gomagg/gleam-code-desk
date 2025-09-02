import { 
  Code, 
  Database, 
  Cloud, 
  Zap, 
  Layers, 
  Workflow,
  CreditCard,
  Bot,
  Terminal,
  Palette
} from 'lucide-react';

export function TechStack() {
  const techCategories = [
    {
      title: 'Frontend & Frameworks',
      icon: <Code className="h-6 w-6" />,
      techs: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Vue 3', icon: '💚' },
        { name: 'Tailwind CSS', icon: '🎨' },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="h-6 w-6" />,
      techs: [
        { name: 'Node.js (MERN)', icon: '🟢' },
        { name: 'Angular (MEAN)', icon: '🔴' },
        { name: 'Django', icon: '🐍' },
        { name: 'Flask', icon: '🧪' },
      ]
    },
    {
      title: 'Automation Tools',
      icon: <Workflow className="h-6 w-6" />,
      techs: [
        { name: 'n8n Automation', icon: '🔗' },
        { name: 'Make Automation', icon: '🔧' },
        { name: 'Zapier', icon: '⚡' },
      ]
    },
    {
      title: 'Development & Cloud',
      icon: <Cloud className="h-6 w-6" />,
      techs: [
        { name: 'Supabase', icon: '🟢' },
        { name: 'Stripe', icon: '💳' },
        { name: 'Replit', icon: '📦' },
        { name: 'Cursor', icon: '📝' },
        { name: 'Bolt', icon: '⚡' },
        { name: 'Lovable', icon: '💖' },
        { name: 'Base44', icon: '🏗️' },
      ]
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Tech Stack & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern web technologies, automation platforms, and development tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="space-y-6"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Tech Items */}
              <div className="space-y-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="tech-icon group cursor-pointer"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TypeScript',
              'GraphQL',
              'REST APIs',
              'PostgreSQL',
              'MongoDB',
              'Redis',
              'Docker',
              'AWS',
              'Vercel',
              'GitHub Actions',
              'Figma',
              'AI Integrations'
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary transition-colors duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}