
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle2, AlertCircle, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <SectionHeading 
            title="About Bharat Heavy Drones"
            subtitle="Pioneering the future of drone technology in India"
          />
          
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="Bharat Heavy Drones" 
              className="w-full h-auto rounded-xl shadow-lg mb-12"
            />
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-700 mb-8">
              Bharat Drone Innovations is a pioneering drone technology startup dedicated to transforming critical sectors like healthcare, defense, and agriculture. We leverage cutting-edge artificial intelligence, autonomous systems, and state-of-the-art engineering to address some of the most pressing challenges in these industries. From delivering life-saving medical supplies in record time to securing borders with advanced surveillance drones, and optimizing agricultural processes for better yields, we are committed to creating a better future through innovative drone solutions.
            </p>
            
            <p className="text-lg text-gray-700 mb-12">
              Our startup thrives on creativity, passion, and a problem-solving approach. Every drone we design is a testament to our vision of empowering industries and communities with cutting-edge technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-bhd-100 text-bhd-600 rounded-full flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-700">
                  Revolutionize industries with reliable, efficient, and innovative drone solutions while upholding the highest standards of safety, sustainability, and technological excellence.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-700">
                  Establish Bharat Drone Innovations as India's leading provider of autonomous drone systems, driving advancements in healthcare, defense, and agriculture on a national and global scale.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Research-Driven Innovation</h3>
                  <p className="text-gray-700">
                    We continuously invest in research and development to push the boundaries of what's possible with drone technology, focusing on solving real-world problems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety and Reliability</h3>
                  <p className="text-gray-700">
                    Our drones undergo rigorous testing to ensure they meet the highest standards of safety and reliability, essential for critical operations in healthcare and defense.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry-Specific Solutions</h3>
                  <p className="text-gray-700">
                    We develop purpose-built drones tailored to the unique requirements of each sector, ensuring optimal performance and outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Supporting Atmanirbhar Bharat</h3>
                  <p className="text-gray-700">
                    We're proud to contribute to India's self-reliance by developing indigenous drone technology that reduces dependency on imports and creates local expertise.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100 mb-16">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
                  <p className="text-gray-700">
                    At Bharat Drone Innovations, we are committed to ethical innovation, responsible use of technology, and making a positive impact on society. We believe in transparent practices, sustainable development, and creating solutions that benefit humanity while respecting privacy and security concerns.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">MSME Registered</h2>
            <p className="text-lg text-gray-700 mb-8">
              We are proudly registered under the MSME scheme with registration number UDYAM-TN-34-0068877, reflecting our commitment to contribute to India's economic growth and technological advancement.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
