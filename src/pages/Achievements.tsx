
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import AchievementCard from '@/components/achievements/AchievementCard';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner of Ideation Hackathon, Tripura (2024)",
      description: "Bharat Heavy Drones emerged as the winner of the Ideation Hackathon held in Tripura. The event highlighted innovative solutions, and our organ delivery drone project received high praise for addressing critical healthcare challenges.",
      image: "https://placeholder.pics/svg/800x400/DEDEDE/555555/Ideation%20Hackathon%20Winner"
    },
    {
      title: "Finalist in Startup Challenge, 3DPCOE Hackathon (2024, Guwahati)",
      description: "As a finalist in the prestigious Startup Challenge at the 3DPCOE Hackathon, organized by TIE Delhi, we showcased our advanced drone technologies, emphasizing precision agriculture and defense applications.",
      image: "https://placeholder.pics/svg/800x400/DEDEDE/555555/3DPCOE%20Hackathon%20Finalist"
    },
    {
      title: "Drone Model Showcased at IMC 2024",
      description: "Our drone model was featured at the Indian Mobile Congress (IMC) 2024, where it garnered significant attention for its innovative applications in defense, agriculture, and medical purposes. The showcase reinforced our commitment to revolutionizing these sectors.",
      image: "https://placeholder.pics/svg/800x400/DEDEDE/555555/IMC%202024%20Showcase"
    },
    {
      title: "Recognized for Innovations in Defense, Agriculture, and Healthcare",
      description: "Bharat Heavy Drones has been widely recognized for pioneering advancements in drone technology. Our AI-powered autonomous drones continue to set benchmarks in defense, agriculture, and healthcare sectors."
    }
  ];

  return (
    <Layout>
      <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <SectionHeading 
            title="Our Achievements"
            subtitle="Recognition and milestones in our journey of innovation"
          />
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <AchievementCard 
                  key={index}
                  title={achievement.title}
                  description={achievement.description}
                  image={achievement.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg text-gray-700 mb-8">
              Beyond awards and recognition, our greatest achievement is the positive impact our drone solutions have on various industries. From enabling faster medical deliveries to enhancing agricultural efficiency and strengthening national security, we take pride in creating technology that makes a difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-bhd-600">Healthcare</h3>
                <p className="text-gray-700">
                  Reduced delivery times for critical medical supplies, leading to improved patient outcomes in emergency situations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Defense</h3>
                <p className="text-gray-700">
                  Enhanced surveillance and security capabilities for defense applications, contributing to national security efforts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-green-600">Agriculture</h3>
                <p className="text-gray-700">
                  Improved crop monitoring and management, leading to increased yields and reduced resource wastage for farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
