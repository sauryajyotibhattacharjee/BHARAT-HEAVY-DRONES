
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  path: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  category,
  image,
  path,
  className
}) => {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <div className="h-56 overflow-hidden bg-gray-200">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader>
        <div className="mb-2">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            {category}
          </span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group">
          <Link to={path} className="flex items-center justify-center gap-2">
            Learn More
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
