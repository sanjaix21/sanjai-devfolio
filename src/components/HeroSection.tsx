import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-2 slide-up">Hello, I'm</p>
            <h1 className="font-bold mb-3 slide-up">
              Sanjai MS
              <span className="inline-block ml-2 animate-waving-hand">👋</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-text-light mb-4 slide-up">
              Computer Science Engineering Student
            </h2>
            <p className="text-text-light mb-6 max-w-lg slide-up">
              Passionate about building efficient, scalable solutions with Go and Rust.
              I combine technical expertise with strong problem-solving skills to create 
              meaningful software that solves real-world problems.
            </p>
            
            <div className="flex space-x-4 mb-8 slide-up">
              <a 
                href="https://github.com/sanjaix21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/sanjai-satheesh-mohan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sanjaix21@gmail.com" 
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 slide-up">
              <a 
                href="#about" 
                className="btn btn-primary"
              >
                About Me
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg fade-in">
                <img 
                  src="/profile.jpg"
                  alt="Sanjai MS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary rounded-full -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-primary" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
