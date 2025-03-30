
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, Phone } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-bhd-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          
          <p className="text-xl mb-8 text-white/90">
            Contact us today to discuss how our drone solutions can address your specific needs and revolutionize your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button asChild size="lg" variant="outline" className="bg-white text-bhd-600 hover:bg-gray-100 border-white">
              <Link to="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </Button>
            
            <a href="mailto:bharatdronetech@gmail.com" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white rounded-md px-4 py-2 transition-colors duration-200">
              <Mail size={18} />
              <span>bharatdronetech@gmail.com</span>
            </a>
            
            <a href="tel:+917005580541" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white rounded-md px-4 py-2 transition-colors duration-200">
              <Phone size={18} />
              <span>+91 7005580541</span>
            </a>
          </div>
          
          <p className="text-white/80">
            Let's collaborate to bring innovation to your doorstep!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
