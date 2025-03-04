
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      {/* Icon background */}
      <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-sht-blue/5 group-hover:bg-sht-blue/10 transition-colors duration-300"></div>
      
      {/* Icon */}
      <div className="relative mb-6 w-14 h-14 rounded-full bg-sht-light-blue flex items-center justify-center text-sht-blue group-hover:bg-sht-blue group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
