
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-bhd-400">Bharat</span> <span className="text-orange-400">Heavy Drones</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Revolutionizing Healthcare, Defense, and Agriculture with AI-Powered Drone Solutions
            </p>
            <p className="text-sm text-gray-400">MSME Registered: UDYAM-TN-34-0068877</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link>
              <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
              <Link to="/achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Products</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/products/healthcare" className="text-gray-300 hover:text-white transition-colors">Organ Delivery Drones</Link>
              <Link to="/products/agriculture" className="text-gray-300 hover:text-white transition-colors">Precision Agriculture Drones</Link>
              <Link to="/products/defense" className="text-gray-300 hover:text-white transition-colors">Defense FPV Drones</Link>
              <Link to="/products/defense" className="text-gray-300 hover:text-white transition-colors">Kamakaze & Quadcopter Drones</Link>
              <Link to="/products/defense" className="text-gray-300 hover:text-white transition-colors">3D Printed Ballistic Missiles</Link>
              <Link to="/products/defense" className="text-gray-300 hover:text-white transition-colors">Fire Fighting Drones</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Information</h4>
            <div className="space-y-3">
              <a href="mailto:bharatdronetech@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                <span>bharatdronetech@gmail.com</span>
              </a>
              <a href="tel:+917005580541" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+91 7005580541</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Bharat Drone Innovations, India</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mt-6 mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/channel/4300HS-5lZo?si=Sb4jY8vMFV-MkQun" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Bharat Heavy Drones. All Rights Reserved.</p>
          <p className="mt-2">Your Payload, Our Promise</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
