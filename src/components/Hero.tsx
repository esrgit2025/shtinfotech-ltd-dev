
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-sht-light-blue to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="section-container flex flex-col items-center justify-center text-center">
        <div className="animate-fade-in">
          <img 
            src="/lovable-uploads/4a9b5e54-debf-4c11-a116-9087210299b7.png" 
            alt="SHT Infotech Logo" 
            className="w-60 md:w-72 lg:w-96 mb-8 animate-pulse-light"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-sht-dark-blue to-sht-blue bg-clip-text text-transparent">
            SHT Infotech India Private Limited
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground/80">
            Empowering Technology Since 1987
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#about" 
              className="px-6 py-3 bg-sht-blue text-white rounded-full font-medium hover:bg-sht-dark-blue transition-colors shadow-md hover:shadow-xl"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-sht-blue border border-sht-blue rounded-full font-medium hover:bg-sht-light-blue transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sht-blue animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </a>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-sht-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-sht-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
