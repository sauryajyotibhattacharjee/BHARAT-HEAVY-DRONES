
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/products/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const products = [
    {
      id: 1,
      title: "Organ Delivery Drone",
      description: "An autonomous drone with AI-regulated compartments for life-saving organ delivery, ensuring optimal conditions during transit.",
      image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Organ%20Delivery%20Drone",
      path: "/products/healthcare",
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Precision Agriculture Drone",
      description: "High-end drone technology for crop monitoring, pest control, and farm automation to optimize yields and reduce resource usage.",
      image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Agriculture%20Drone",
      path: "/products/agriculture",
      category: "Agriculture"
    },
    {
      id: 3,
      title: "Defense FPV Surveillance Drone",
      description: "AI-powered FPV drones for enhanced security and tactical operations with real-time intelligence gathering capabilities.",
      image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Defense%20Drone",
      path: "/products/defense",
      category: "Defense"
    },
    {
      id: 4,
      title: "Kamikaze Drone",
      description: "Lightweight, durable, and cost-effective drone built using 3D printing and carbon fiber materials, designed for precision strikes and high-risk defense missions.",
      image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Kamikaze%20Drone",
      path: "/products/defense",
      category: "Defense"
    },
    {
      id: 5,
      title: "Quadcopter Surveillance Drone",
      description: "Combines 3D-printed parts and carbon fiber frames for unmatched agility and resilience with high-definition imaging and real-time data transmission.",
      image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Quadcopter%20Drone",
      path: "/products/defense",
      category: "Defense"
    },
    {
      id: 6,
      title: "3D Printed Ballistic Missiles",
      description: "Innovative defense solution leveraging cutting-edge 3D printing technologies for precision, cost efficiency, and rapid deployment.",
      image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Ballistic%20Missiles",
      path: "/products/defense",
      category: "Defense"
    },
    {
      id: 7,
      title: "Agniveer V Fire Fighting Drone",
      description: "Advanced drone system designed for fire detection, monitoring, and extinguishing operations in challenging environments.",
      image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Fire%20Fighting%20Drone",
      path: "/products/speciality",
      category: "Speciality"
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeTab);

  return (
    <Layout>
      <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <SectionHeading 
            title="Our Products"
            subtitle="Innovative drone solutions designed to transform industries"
          />
          
          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="defense">Defense</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Custom Drone Solutions</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Beyond our standard product offerings, we specialize in developing custom drone solutions tailored to your specific requirements. Whether you need a specialized payload, enhanced range, or unique capabilities, our team of experts can design and build the perfect drone for your application.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Request a Custom Solution</h3>
              <p className="text-gray-700 mb-6">
                Contact us today to discuss your unique drone requirements. Our team will work closely with you to understand your needs and develop a solution that exceeds your expectations.
              </p>
              <a 
                href="mailto:bharatdronetech@gmail.com" 
                className="inline-flex items-center justify-center bg-bhd-600 hover:bg-bhd-700 text-white rounded-md px-6 py-3 font-medium transition-colors duration-200"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
