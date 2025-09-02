import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import taskManagerImage from '@/assets/project-taskmanager.jpg';
import aiChatImage from '@/assets/project-ai-chat.jpg';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and Stripe.',
      image: ecommerceImage,
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop kanban boards, and team collaboration features.',
      image: taskManagerImage,
      tech: ['Vue 3', 'Express.js', 'PostgreSQL', 'Socket.io', 'Vuetify'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://taskmanager-demo.vercel.app',
      featured: true
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing, context awareness, and integration with multiple AI providers.',
      image: aiChatImage,
      tech: ['Next.js', 'OpenAI API', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/ai-chat-assistant',
      demo: 'https://ai-chat-demo.vercel.app',
      featured: false
    }
  ];

  const otherProjects = [
    {
      title: 'Automation Workflow Builder',
      description: 'Visual workflow builder for business process automation using n8n and custom integrations.',
      tech: ['React', 'n8n', 'Docker', 'PostgreSQL'],
      github: 'https://github.com/yourusername/workflow-builder',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Business intelligence dashboard with real-time data visualization and custom reporting.',
      tech: ['Angular', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/analytics-dashboard',
    },
    {
      title: 'Social Media Automation Tool',
      description: 'Multi-platform social media management with scheduling, analytics, and content optimization.',
      tech: ['Django', 'Celery', 'Redis', 'React', 'PostgreSQL'],
      github: 'https://github.com/yourusername/social-automation',
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 transition-colors duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single Featured Project (AI Chat) */}
        <div className="mb-16">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={project.title}
              className="project-card max-w-4xl mx-auto"
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      className="bg-primary hover:bg-primary/90 transition-colors duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold mb-3 text-foreground">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:text-primary/80"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
