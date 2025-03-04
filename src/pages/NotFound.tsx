
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sht-light-blue to-white p-4">
      <div className="text-center max-w-md">
        <img 
          src="/lovable-uploads/4a9b5e54-debf-4c11-a116-9087210299b7.png" 
          alt="SHT Infotech Logo" 
          className="w-32 mx-auto mb-8"
        />
        
        <h1 className="text-6xl font-bold text-sht-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-sht-blue text-white rounded-full font-medium hover:bg-sht-dark-blue transition-colors shadow-md"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
