
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLeft: boolean;
}

const TimelineItem = ({ year, title, description, icon: Icon, isLeft }: TimelineItemProps) => {
  return (
    <div className={`relative flex items-center mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline content */}
      <div className={`z-10 w-full md:w-1/2 ${isLeft ? 'md:pl-0 md:pr-12 text-right' : 'md:pl-12 md:pr-0'}`}>
        <div className="p-5 bg-white rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow h-full">
          <div className="bg-sht-light-blue inline-block px-3 py-1 rounded-full text-sht-blue font-semibold mb-2">
            {year}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      {/* Timeline icon */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-20">
        <div className="w-10 h-10 rounded-full bg-sht-blue text-white flex items-center justify-center shadow-md">
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
