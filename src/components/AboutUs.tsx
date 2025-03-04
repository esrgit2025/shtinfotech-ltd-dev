
import { Building, Award, TrendingUp, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">Our journey from educational services to a diverse business conglomerate</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-sht-light-blue to-white rounded-2xl shadow-sm border border-sht-blue/10">
              <Building className="text-sht-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Our Foundation</h3>
              <p className="text-muted-foreground">
                Founded in 1987 by <span className="font-bold text-sht-blue">Mr. Emerson Irudayaraj, CEO of SHT Infotech P Ltd</span>, 
                as Sacred Heart Technologies, we began our journey by offering AMIE courses in Mechanical, Civil, EEE, and ECE, 
                successfully nurturing over 5,000 students toward their professional goals.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-sht-light-blue to-white rounded-2xl shadow-sm border border-sht-blue/10">
              <TrendingUp className="text-sht-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Evolution & Growth</h3>
              <p className="text-muted-foreground">
                In 2015, we expanded our vision and evolved into SHT Infotech, 
                venturing into home appliances and electronics retail. This marked the 
                beginning of our diversification strategy that has led to the creation 
                of a robust business ecosystem spanning multiple industries.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-sht-light-blue to-white rounded-2xl shadow-sm border border-sht-blue/10">
              <Award className="text-sht-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Our Value & Reach</h3>
              <p className="text-muted-foreground">
                Today, SHT Infotech India Private Limited stands as a company valued at 
                Rs. 20,000,000 with a share price of Rs. 555. Our business operations are 
                strategically divided across five key divisions, each focusing on specific 
                market segments to deliver specialized products and services.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-sht-light-blue to-white rounded-2xl shadow-sm border border-sht-blue/10">
              <Lightbulb className="text-sht-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Our Business Divisions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-sht-blue mr-2">•</span>
                  <span>SHT Infotech (CCTV and Electronics)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sht-blue mr-2">•</span>
                  <span>SHT Logistics (Logistics and Transport)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sht-blue mr-2">•</span>
                  <span>SHT Solar Services (Solar Products)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sht-blue mr-2">•</span>
                  <span>RE Groups (Investments and Holdings)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sht-blue mr-2">•</span>
                  <span>RE Builders and Land Promoters (Construction and Real Estate)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
