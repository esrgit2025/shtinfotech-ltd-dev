
import { useRef, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (contactRef.current) {
        const contactRect = contactRef.current.getBoundingClientRect();
        if (contactRect.top < window.innerHeight * 0.75) {
          contactRef.current.classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on mount

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-sht-light-blue to-white">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in touch with our team for inquiries and collaboration opportunities</p>
        </div>
        
        <div ref={contactRef} className="reveal">
          {/* Contact information */}
          <div className="glass-card p-8 rounded-2xl space-y-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Reach Out to Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-sht-light-blue flex items-center justify-center text-sht-blue">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Our Location</h4>
                  <p className="text-muted-foreground">
                    No. 1E/52, Chinnakannupuram,<br />
                    Tuticorin - 628 002, Tamil Nadu, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-sht-light-blue flex items-center justify-center text-sht-blue">
                  <Phone size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Phone Number</h4>
                  <p className="text-muted-foreground">
                    +91 87601 87309
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-sht-light-blue flex items-center justify-center text-sht-blue">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email Address</h4>
                  <p className="text-muted-foreground">
                    shtinfotech@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Maps Embed - Updated to point to Tuticorin */}
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-sht-blue/10 mt-8 max-w-3xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126573.04217798228!2d78.07199509023435!3d8.764670199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ee67b8f12823%3A0x39a87fbcc63067f6!2sTuticorin%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711366898061!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SHT Infotech Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
