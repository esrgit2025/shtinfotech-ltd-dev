
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Reach out to us for inquiries, partnerships, or services</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-sht-blue/10">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sht-blue focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sht-blue focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sht-blue focus:border-transparent outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sht-blue focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-sht-blue text-white rounded-lg font-medium hover:bg-sht-dark-blue transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Map and contact info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-sht-blue/10">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-sht-blue mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium">Office Location</h4>
                    <p className="text-muted-foreground">
                      123 Business Park, Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-sht-blue mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-muted-foreground">info@shtinfotech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-sht-blue mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-4 border border-sht-blue/10">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe 
                  title="SHT Infotech Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089883275!2d79.9288258931192!3d13.047985828350468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655975865228!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
