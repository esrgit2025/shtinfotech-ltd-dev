
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sht-light-blue to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Investment background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="section-container flex flex-col items-center justify-center text-center z-10">
        <div className="animate-fade-in">
          <img 
            src="/lovable-uploads/4a9b5e54-debf-4c11-a116-9087210299b7.png" 
            alt="SHT Infotech Logo" 
            className="w-72 md:w-96 lg:w-[500px] mb-10 animate-pulse-light mx-auto"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-sht-dark-blue to-sht-blue bg-clip-text text-transparent">
            SHT Infotech India Private Limited
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground/80">
            Empowering Technology Since 1987
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto shadow-xl">
            <h2 className="text-2xl font-semibold text-sht-blue mb-3">Investment Opportunity</h2>
            <p className="text-lg mb-4">Join our growing company with shares valued at ₹555 across five diversified business divisions.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-sht-light-blue p-3 rounded-lg">
                <span className="font-bold text-sht-blue">₹20,000,000</span>
                <p className="text-sm">Company Value</p>
              </div>
              <div className="bg-sht-light-blue p-3 rounded-lg">
                <span className="font-bold text-sht-blue">₹555</span>
                <p className="text-sm">Per Share</p>
              </div>
              <div className="bg-sht-light-blue p-3 rounded-lg">
                <span className="font-bold text-sht-blue">5</span>
                <p className="text-sm">Business Divisions</p>
              </div>
            </div>
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
