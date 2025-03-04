
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Investment', href: '#investment' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/4a9b5e54-debf-4c11-a116-9087210299b7.png" 
              alt="SHT Infotech"
              className="h-10 md:h-12"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground hover:text-sht-blue transition-colors" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } bg-white shadow-md`}
      >
        <nav className="flex flex-col py-4 px-4 sm:px-6">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="py-3 px-4 text-foreground hover:text-sht-blue hover:bg-sht-light-blue transition-colors rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
