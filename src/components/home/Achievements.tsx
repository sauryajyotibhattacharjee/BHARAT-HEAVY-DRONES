
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trophy, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const achievements = [
  {
    title: "Winner of Ideation Hackathon, Tripura (2024)",
    description: "Recognized for our innovative organ delivery drone project that addresses critical healthcare challenges."
  },
  {
    title: "Finalist in Startup Challenge, 3DPCOE Hackathon (2024)",
    description: "Showcased our advanced drone technologies for precision agriculture and defense applications in Guwahati."
  },
  {
    title: "Drone Model Showcased at IMC 2024",
    description: "Our drone model garnered significant attention for innovative applications in defense, agriculture, and healthcare."
  }
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Achievements"
          subtitle="Recognition of our innovation and commitment to excellence in drone technology"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <Trophy size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/achievements" className="flex items-center gap-2">
              View All Achievements
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
