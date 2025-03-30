
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-bhd-100/30 to-transparent -z-10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-100/30 to-transparent -z-10 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Revolutionizing</span> Industries with 
              <span className="text-bhd-600"> Cutting-Edge</span> Drone Solutions
            </h1>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Transforming Healthcare, Defense, and Agriculture through AI-Powered Drone Technology.
              <span className="block mt-2 font-medium text-bhd-700">Your Payload, Our Promise.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-bhd-600 hover:bg-bhd-700 text-white">
                <Link to="/products">Explore Our Solutions</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch 
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>MSME Registered: UDYAM-TN-34-0068877</p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="w-full h-full max-w-lg mx-auto">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Advanced Drone Technology" 
                  className="rounded-lg shadow-2xl animate-drone-float"
                />
                <div className="absolute inset-0 rounded-lg shadow-lg border border-white/30 pointer-events-none"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg border border-gray-100">
                <p className="font-medium text-bhd-700">Next-Gen AI Technology</p>
                <p className="text-sm text-gray-600">Precision & Reliability</p>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-white rounded-lg p-4 shadow-lg border border-gray-100">
                <p className="font-medium text-orange-600">Made in India</p>
                <p className="text-sm text-gray-600">Supporting Atmanirbhar Bharat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
