
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Shield, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';

const sectors = [
  {
    id: 1,
    title: "Healthcare",
    description: "Our healthcare drones revolutionize medical logistics with rapid organ delivery systems, emergency medical supply transport, and medical sample collection from remote areas.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600",
    link: "/products/healthcare"
  },
  {
    id: 2,
    title: "Defense",
    description: "Advanced surveillance drones, tactical reconnaissance systems, and border security solutions that enhance defense capabilities with cutting-edge technology.",
    icon: Shield,
    color: "bg-orange-50 text-orange-600",
    link: "/products/defense"
  },
  {
    id: 3,
    title: "Agriculture",
    description: "Precision agriculture drones for crop monitoring, automated pest control, soil analysis, and irrigation management to optimize farming operations.",
    icon: Leaf,
    color: "bg-green-50 text-green-600",
    link: "/products/agriculture"
  }
];

const SectorSolutions = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Industry-Specific Solutions"
          subtitle="Transforming critical sectors with purpose-built drone technology that addresses unique challenges"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {sectors.map((sector) => (
            <div 
              key={sector.id} 
              className="flex flex-col p-8 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${sector.color} rounded-lg flex items-center justify-center mb-6`}>
                <sector.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{sector.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{sector.description}</p>
              
              <Button asChild variant="ghost" className="self-start mt-auto group">
                <Link to={sector.link} className="flex items-center gap-2 p-0">
                  Explore Solutions
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorSolutions;
