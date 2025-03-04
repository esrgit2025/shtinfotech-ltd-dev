
import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLeft?: boolean;
}

const TimelineItem = ({ year, title, description, icon: Icon, isLeft = true }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`relative flex md:items-center md:justify-center mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
    >
      {/* Content */}
      <div 
        className={`
          z-10 ml-16 md:ml-0 md:w-5/12 
          ${isLeft ? 'md:mr-auto md:text-right md:pr-8' : 'md:ml-auto md:text-left md:pl-8'}
          ${isVisible ? (isLeft ? 'animate-fade-in-right' : 'animate-fade-in-left') : ''}
        `}
      >
        <div className="bg-white shadow-md rounded-xl p-6 border border-sht-blue/10">
          <span className="inline-block py-1 px-3 rounded-full bg-sht-blue/10 text-sht-blue font-medium text-sm mb-3">
            {year}
          </span>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Icon */}
      <div 
        className={`
          absolute left-0 md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2
          w-10 h-10 rounded-full bg-sht-blue flex items-center justify-center text-white z-20
          shadow-md
          ${isVisible ? 'animate-scale-in' : ''}
        `}
      >
        <Icon size={20} />
      </div>
    </div>
  );
};

export default TimelineItem;
