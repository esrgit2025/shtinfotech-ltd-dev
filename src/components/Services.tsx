
import { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { 
  Camera, 
  Tv, 
  Sun, 
  Truck, 
  Building 
} from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (servicesRef.current) {
        const servicesRect = servicesRef.current.getBoundingClientRect();
        if (servicesRect.top < window.innerHeight * 0.75) {
          servicesRef.current.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on mount

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions across multiple industries to meet diverse needs</p>
        </div>

        <div 
          ref={servicesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal"
        >
          <ServiceCard
            title="CCTV Solutions"
            description="Wholesale & retail security camera systems with specialized installation services for corporate clients, backed by our experience with over 298 corporate installations."
            icon={Camera}
          />
          
          <ServiceCard
            title="Home Appliances & Electronics"
            description="Comprehensive range of electronics including TVs, laptops, and mobile phones, offering both retail sales and wholesale distribution with value-added services."
            icon={Tv}
          />
          
          <ServiceCard
            title="Solar Services"
            description="Structured distribution network for solar products with stockists and regional distributors, making sustainable energy solutions accessible across the country."
            icon={Sun}
          />
          
          <ServiceCard
            title="Logistics Services"
            description="Efficient national and international shipping services designed to streamline supply chains and provide reliable transport solutions for businesses of all sizes."
            icon={Truck}
          />
          
          <ServiceCard
            title="Construction & Real Estate"
            description="Quality construction projects and real estate development through RE Builders and Land Promoters, with a focus on creating value and sustainable development."
            icon={Building}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
