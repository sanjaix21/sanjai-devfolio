import React from 'react';

interface Skill {
  name: string;
  level: number; // 1-5 scale
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'Go', level: 5 },
      { name: 'Rust', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'C', level: 3 },
      { name: 'C++', level: 3 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'AWS', level: 4 },
      { name: 'Terraform', level: 4 },
      { name: 'Docker', level: 5 },
      { name: 'Git', level: 5 },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Analysis', level: 5 },
      { name: 'Clear Communication', level: 4 },
      { name: 'Team Collaboration', level: 4 },
    ],
  },
  {
    name: 'Other',
    skills: [
      { name: 'Linux', level: 5 },
      { name: 'Networking', level: 4 },
      { name: 'Operating Systems', level: 4 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 hover:translate-y-[-5px] transition-transform">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text-lighter text-sm">
                        {skill.level === 1 && 'Basic'}
                        {skill.level === 2 && 'Intermediate'}
                        {skill.level === 3 && 'Proficient'}
                        {skill.level === 4 && 'Advanced'}
                        {skill.level === 5 && 'Expert'}
                      </span>
                    </div>
                    <div className="skill-level">
                      <div 
                        className="skill-level-fill" 
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;