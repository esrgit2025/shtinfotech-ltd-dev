
import { useEffect, useRef } from 'react';
import TimelineItem from './TimelineItem';
import { 
  Building, 
  ShoppingBag, 
  Camera, 
  Smartphone, 
  Home, 
  Sun, 
  Truck
} from 'lucide-react';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        if (timelineRect.top < window.innerHeight * 0.8) {
          timelineRef.current.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on mount

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="timeline" className="section-padding bg-gradient-to-b from-white to-sht-light-blue">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key milestones in our evolution from an educational institution to a diversified business group</p>
        </div>

        <div ref={timelineRef} className="relative reveal">
          {/* Timeline connector line */}
          <div className="timeline-connector"></div>

          {/* Timeline items */}
          <TimelineItem
            year="1987"
            title="Foundation of Sacred Heart Technologies"
            description="Established by Mr. Emerson Irudayaraj, focusing on AMIE courses in Mechanical, Civil, EEE, and ECE, benefiting over 5,000 students."
            icon={Building}
            isLeft={true}
          />

          <TimelineItem
            year="2015"
            title="Launch of SHT Infotech"
            description="Expanded into home appliances and electronics retail, marking our first step into the technology retail market."
            icon={ShoppingBag}
            isLeft={false}
          />

          <TimelineItem
            year="2019"
            title="Expansion into CCTV Business"
            description="Secured major clients including over 136 SBI branches and 162 ICICI branches, establishing our presence in security solutions."
            icon={Camera}
            isLeft={true}
          />

          <TimelineItem
            year="2022"
            title="Wholesale Business Growth"
            description="Ventured into mobile phones wholesale and LED TV assembly, expanding our product portfolio and market reach."
            icon={Smartphone}
            isLeft={false}
          />

          <TimelineItem
            year="2023"
            title="Launch of RE Builders and Land Promoters"
            description="Entered the construction and real estate market, diversifying our business interests into property development."
            icon={Home}
            isLeft={true}
          />

          <TimelineItem
            year="2024"
            title="Introduction of SHT Solar Services"
            description="Implemented a structured distribution model with stockists for each district and regional distributors with showrooms."
            icon={Sun}
            isLeft={false}
          />

          <TimelineItem
            year="2025"
            title="Launch of SHT Logistics"
            description="Planned expansion into national and international shipping services, completing our integrated business ecosystem."
            icon={Truck}
            isLeft={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
