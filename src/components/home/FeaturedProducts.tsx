
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Innovative Drone Solutions"
          subtitle="Our state-of-the-art drones are designed to address critical challenges across multiple sectors"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden card-hover">
              <div className="h-56 overflow-hidden bg-gray-200">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="mb-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    {product.category}
                  </span>
                </div>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group">
                  <Link to={product.path} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
