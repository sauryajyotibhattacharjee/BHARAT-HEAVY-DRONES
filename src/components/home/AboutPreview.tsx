
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const AboutPreview = () => {
  const highlights = [
    "Cutting-edge AI and autonomous systems",
    "Made in India, supporting Atmanirbhar Bharat",
    "Research-driven innovation",
    "Industry-specific customized solutions",
    "Focus on safety and reliability",
    "Expert team of engineers and professionals"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-bhd-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Industries with <span className="text-bhd-600">Innovative</span> Drone Technology
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Bharat Drone Innovations is a pioneering startup dedicated to transforming critical sectors through cutting-edge drone technology. We combine artificial intelligence, autonomous systems, and state-of-the-art engineering to create solutions that address pressing challenges in healthcare, defense, and agriculture.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="text-bhd-600 mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-bhd-600 hover:bg-bhd-700">
                <Link to="/about">About Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Drone Innovation" 
                className="rounded-lg shadow-xl"
              />
              
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-lg mb-1">Our Mission</p>
                <p className="text-sm text-gray-600">
                  Revolutionize industries with reliable, efficient, and innovative drone solutions while upholding the highest standards of safety, sustainability, and technological excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
