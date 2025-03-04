
import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      
      // Reset submitted state after some time
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-sht-light-blue to-white">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in touch with our team for inquiries and collaboration opportunities</p>
        </div>
        
        <div ref={contactRef} className="grid lg:grid-cols-2 gap-12 reveal">
          {/* Contact information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Reach Out to Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-sht-light-blue flex items-center justify-center text-sht-blue">
                    <MapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Our Location</h4>
                    <p className="text-muted-foreground">
                      123 Technology Park, Chennai<br />
                      Tamil Nadu, India - 600001
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
                      +91 44 1234 5678<br />
                      +91 98765 43210
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
                      info@shtinfotech.com<br />
                      support@shtinfotech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-sht-blue/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167529336!2d80.06323372211518!3d13.04762755596424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52689fd353704b%3A0x2b12c048a726baf4!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1683569893635!5m2!1sen!2sus" 
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
          
          {/* Contact form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sht-blue focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sht-blue focus:border-transparent"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sht-blue focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sht-blue focus:border-transparent"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-sht-blue text-white rounded-lg font-medium hover:bg-sht-dark-blue transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <Check className="mr-2" size={18} />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
