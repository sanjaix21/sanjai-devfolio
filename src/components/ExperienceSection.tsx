import React from 'react';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description?: string;
  type: 'education' | 'experience';
}

const timelineItems: TimelineItem[] = [
  {
    id: 'gfg',
    title: 'Technical Content Writer',
    organization: 'GeeksforGeeks',
    period: 'June 2024',
    description: 'Created high-quality technical content on programming topics like Go, Rust, and systems programming.',
    type: 'experience',
  },
  {
    id: 'lpu',
    title: 'BTech, Computer Science and Engineering',
    organization: 'Lovely Professional University',
    period: '2022 - 2026 (Expected)',
    description: 'Pursuing a degree in Computer Science with a focus on systems programming and distributed systems.',
    type: 'education',
  },
  {
    id: 'grn',
    title: 'High School Diploma',
    organization: 'GRN MHSS',
    period: '2021',
    description: 'Completed senior secondary education with a focus on science and mathematics.',
    type: 'education',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {timelineItems.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="ml-2">
                  <div className="flex items-center mb-1">
                    {item.type === 'education' ? (
                      <GraduationCap size={18} className="text-primary mr-2" />
                    ) : (
                      <Briefcase size={18} className="text-primary mr-2" />
                    )}
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-text-lighter mr-2" />
                    <span className="text-text-light text-sm">{item.period}</span>
                  </div>
                  
                  <p className="text-text-light font-medium mb-1">{item.organization}</p>
                  
                  {item.description && (
                    <p className="text-text-light text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;