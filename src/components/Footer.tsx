import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background-alt border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-text-light">
              © {currentYear} Sanjai MS. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-text-light">
            <p>Built with</p>
            <Heart size={16} className="mx-1 text-error" />
            <p>and React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;