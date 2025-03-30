
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  description,
  imageSrc,
  linkedin,
  twitter,
  email,
  className
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-bhd-600 font-medium mb-3">{title}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-bhd-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition-colors"
            >
              <Twitter size={18} />
            </a>
          )}
          
          {email && (
            <a 
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
