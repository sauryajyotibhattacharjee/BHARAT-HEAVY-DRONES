
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: [
        { name: 'Healthcare Drones', path: '/products/healthcare' },
        { name: 'Agriculture Drones', path: '/products/agriculture' },
        { name: 'Defense Drones', path: '/products/defense' },
        { name: 'All Products', path: '/products' },
      ]
    },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-display">
              <span className="text-bhd-600">Bharat</span> <span className="text-orange-500">Heavy Drones</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => 
              link.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      {link.name} <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900">
                    {link.dropdown.map((item, idx) => (
                      <Link to={item.path} key={idx}>
                        <DropdownMenuItem className="cursor-pointer">
                          {item.name}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  key={index} 
                  to={link.path} 
                  className="text-foreground hover:text-bhd-600 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              )
            )}
            <Button asChild className="bg-bhd-600 hover:bg-bhd-700">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => 
                link.dropdown ? (
                  <div key={index} className="space-y-2">
                    <div className="font-medium text-lg">{link.name}</div>
                    <div className="pl-4 space-y-2 border-l-2 border-bhd-200">
                      {link.dropdown.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.path} 
                          className="block text-foreground/80 hover:text-bhd-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={index} 
                    to={link.path} 
                    className="text-foreground hover:text-bhd-600 transition-colors font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button asChild className="w-full bg-bhd-600 hover:bg-bhd-700">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get In Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
