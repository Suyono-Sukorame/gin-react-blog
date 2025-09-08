import React from 'react';
import { twMerge } from 'tailwind-merge';

const Avatar = ({
  src,
  alt = 'Avatar',
  size = 'medium',
  shape = 'circle',
  status = null,
  statusPosition = 'bottom-right',
  className = '',
  fallback = null,
  ...props
}) => {
  const [imgError, setImgError] = React.useState(false);
  
  const sizes = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    medium: 'h-10 w-10',
    large: 'h-12 w-12',
    xl: 'h-16 w-16',
    '2xl': 'h-24 w-24',
  };
  
  const shapes = {
    circle: 'rounded-full',
    square: 'rounded',
  };
  
  const statusSizes = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    medium: 'h-2.5 w-2.5',
    large: 'h-3 w-3',
    xl: 'h-4 w-4',
  };
  
  const statusStyles = {
    online: 'bg-green-500',
    offline: 'bg-gray-300',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  };
  
  const statusPositions = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
  };
  
  const handleError = () => {
    setImgError(true);
  };
  
  const showFallback = !src || imgError;
  
  return (
    <div className={twMerge('relative inline-block', className)}>
      {showFallback && fallback ? (
        <div
          className={twMerge(
            'flex items-center justify-center bg-gray-300 text-gray-600 font-semibold',
            sizes[size],
            shapes[shape]
          )}
          {...props}
        >
          {fallback}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={handleError}
          className={twMerge(
            'object-cover',
            sizes[size],
            shapes[shape]
          )}
          {...props}
        />
      )}
      
      {status && (
        <span
          className={twMerge(
            'absolute border-2 border-white rounded-full',
            statusStyles[status],
            statusSizes[size],
            statusPositions[statusPosition]
          )}
        />
      )}
    </div>
  );
};

export default Avatar;