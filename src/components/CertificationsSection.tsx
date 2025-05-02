import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  url: string;
}

const certifications: Certification[] = [
  {
    id: 'r-programming',
    title: 'Programming in R',
    organization: 'DataCamp',
    date: 'March 2024',
    image: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://coursera.org/share/e037ae56110f9d06db1736d1497ce6d5'
  },
  {
    id: 'gen-ai',
    title: 'Generative AI with LLMs',
    organization: 'DeepLearning.AI',
    date: 'November 2023',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://coursera.org/share/97f80c9d56e4280eb8e8ad692789bacd'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    organization: 'AWS Training',
    date: 'October 2023',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020235304432354.pdf'
  },
];

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section-padding bg-background-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <a 
              key={cert.id} 
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card overflow-hidden group hover:translate-y-[-5px] transition-transform"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <Award className="mb-2" size={20} />
                    <h3 className="text-lg font-medium">{cert.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-text-light font-medium">{cert.organization}</span>
                  <div className="flex items-center text-text-lighter text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;