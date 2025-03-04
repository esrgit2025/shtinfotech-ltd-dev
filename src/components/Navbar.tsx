
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="https://shtinfotech.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="/lovable-uploads/4a9b5e54-debf-4c11-a116-9087210299b7.png" 
              alt="SHT Infotech"
              className="h-10 md:h-12"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
