
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="https://shtinfotech.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="/lovable-uploads/4a9b5e54-debf-4c11-a116-9087210299b7.png" 
              alt="SHT Infotech"
              className="h-10 md:h-12"
            />
          </a>

          {/* Navigation Menu */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {/* About dropdown with sub-items */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px]">
                    <ul className="grid p-2 gap-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a 
                            href="https://shtinfotech.in/about/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-accent rounded-md"
                          >
                            About Us
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a 
                            href="https://shtinfotech-portfolio.lovable.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-accent rounded-md"
                          >
                            Company's Portfolio
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a 
                            href="https://sht-franchise-distribution-program.lovable.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-accent rounded-md"
                          >
                            Franchise Distribution Program
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Us */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="https://shtinfotech.in/contact/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground"
                    >
                      Contact Us
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Events */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="https://shtinfotech.in/events/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground"
                    >
                      Events
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Dealers' Registration Portal */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="https://shtinfotech.in/register/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground"
                    >
                      Dealers' Registration Portal
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Dealers' Login Portal */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                      href="https://shtinfotech.in/login/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground"
                    >
                      Dealers' Login Portal
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button - can be expanded later if needed */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
