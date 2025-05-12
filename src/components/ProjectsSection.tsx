import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 'pman',
    name: 'PMan',
    description: 'A terminal-based process manager built in Go, with an intuitive TUI that allows users to monitor and manage system processes with keyboard shortcuts and real-time updates.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Go', 'TUI', 'Systems Programming'],
    githubUrl: 'https://github.com/sanjaix21/pman',
  },
  {
    id: 'go-interpreter',
    name: 'Go-Interpreter',
    description: 'A custom programming language interpreter written in Go, featuring lexical analysis, parsing, and evaluation. Implements a REPL for interactive usage and supports variables, functions, and control flow.',
    image: 'gopher.jpg',
    technologies: ['Go', 'Interpreter Design', 'Compiler Theory'],
    githubUrl: 'https://github.com/sanjaix21/go-interpreter',
  },
  {
    id: 'devops-training-wheels',
    name: 'DevOps Training Wheels',
    description: 'A comprehensive toolkit for DevOps beginners, providing templates and automation scripts for AWS infrastructure, containerization with Docker, and configuration management with Terraform.',
    image: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
    technologies: ['Terraform', 'Docker', 'AWS', 'IaaC'],
    githubUrl: 'https://github.com/sanjaix21/devops_tw',
    liveUrl: 'https://example.com/devops-demo',
  },
];

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding bg-background-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="card overflow-hidden group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                        aria-label={`View live demo of ${project.name}`}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-text-light mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
