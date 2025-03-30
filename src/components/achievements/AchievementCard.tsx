
import React from 'react';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AchievementCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  image,
  className
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md",
      className
    )}>
      {image && (
        <div className="h-56 overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Trophy size={24} />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
