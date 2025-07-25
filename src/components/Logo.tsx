import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  linkTo?: string;
  className?: string;
  isAuthenticated?: boolean;
  isDarkMode?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true, 
  linkTo = '/',
  className = '',
  isAuthenticated = false,
  isDarkMode = false
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  // Choose logo based on authentication status
  const logoSource = isAuthenticated ? '/qb_logoc.png' : '/qb_logo.png';

  // Determine text color based on dark mode and existing className
  const getTextColor = () => {
    if (className.includes('text-white')) return 'text-white';
    if (isDarkMode) return 'text-white';
    return 'text-gray-900';
  };

  const logoElement = (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img 
        src={logoSource} 
        alt="Quant Basket Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
      {showText && (
        <span className={`font-bold ${textSizes[size]} ${getTextColor()}`}>
          Quant Basket
        </span>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="hover:opacity-80 transition-opacity">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
};

export default Logo; 