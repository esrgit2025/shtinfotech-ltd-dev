
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-sht-dark-blue to-sht-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and about */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <a href="https://shtinfotech.in/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/lovable-uploads/4a9b5e54-debf-4c11-a116-9087210299b7.png" 
                  alt="SHT Infotech Logo" 
                  className="h-10 bg-white p-1 rounded-md"
                />
              </a>
              <span className="ml-2 text-xl font-semibold">SHT Infotech</span>
            </div>
            <p className="text-white/80 mb-4">
              Empowering Technology Since 1987. A diversified company providing solutions in electronics, 
              logistics, solar energy, investments, and real estate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Business Divisions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Divisions</h3>
            <ul className="space-y-2">
              <li className="text-white/80">SHT Infotech</li>
              <li className="text-white/80">SHT Logistics</li>
              <li className="text-white/80">SHT Solar Services</li>
              <li className="text-white/80">RE Groups</li>
              <li className="text-white/80">RE Builders and Land Promoters</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80">
              &copy; {currentYear} SHT Infotech India Private Limited. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#contact" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
                <Mail size={16} className="mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
