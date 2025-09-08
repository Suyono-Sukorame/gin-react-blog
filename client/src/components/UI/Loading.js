import React from 'react';
import { twMerge } from 'tailwind-merge';

const Loading = ({ 
  type = 'spinner',
  size = 'medium',
  text = 'Loading...',
  className = '' 
}) => {
  const sizes = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };
  
  if (type === 'spinner') {
    return (
      <div className={twMerge('flex items-center justify-center', className)}>
        <div
          className={twMerge(
            'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
            sizes[size]
          )}
        ></div>
        {text && <span className="ml-2 text-gray-600">{text}</span>}
      </div>
    );
  }
  
  if (type === 'dots') {
    return (
      <div className={twMerge('flex items-center justify-center space-x-1', className)}>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        {text && <span className="ml-2 text-gray-600">{text}</span>}
      </div>
    );
  }
  
  if (type === 'skeleton') {
    return (
      <div className={twMerge('animate-pulse', className)}>
        <div className="bg-gray-200 rounded h-4 w-3/4 mb-2"></div>
        <div className="bg-gray-200 rounded h-4 w-1/2"></div>
      </div>
    );
  }
  
  return null;
};

export default Loading;