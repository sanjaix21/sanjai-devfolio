import React from 'react';
import { Download } from 'lucide-react';

const AboutSection: React.FC = () => {
  const languages = [
    { name: 'Tamil', level: 'Native' },
    { name: 'Malayalam', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'English', level: 'Fluent' },
    { name: 'German', level: 'Basic' }
  ];

  const interests = ['Cooking', 'Coin collection', 'Formula-1', 'Reading'];

  return (
    <section id="about" className="section-padding bg-background-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="mb-4">
              I'm a Computer Science Engineering student with a strong passion for systems 
              programming and infrastructure automation. My expertise spans programming languages 
              like Go, Rust, and Python, alongside tools like Docker and Terraform for robust, 
              scalable deployments.
            </p>
            <p className="mb-4">
              Throughout my academic journey, I've focused on developing a deep understanding of 
              computer systems, networks, and efficient algorithm design. I enjoy building tools 
              that solve real problems while maintaining high standards for code quality and 
              performance.
            </p>
            <p>
              I'm constantly learning and exploring new technologies to expand my skills.
              Currently, I'm diving deeper into cloud architecture patterns and exploring the
              intersection of systems programming with DevOps practices.
            </p>

            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                className="btn btn-primary inline-flex items-center"
                download
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="card p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                {languages.map((language, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{language.name}</span>
                    <span className="text-text-light text-sm">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Personal Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;