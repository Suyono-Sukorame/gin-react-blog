import React from 'react';
import { twMerge } from 'tailwind-merge';

const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'medium',
  showLabel = false,
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const variants = {
    primary: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    danger: 'bg-red-600',
  };
  
  const sizes = {
    small: 'h-1',
    medium: 'h-2',
    large: 'h-3',
  };
  
  return (
    <div className={twMerge('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>{value}%</span>
          <span>{max}%</span>
        </div>
      )}
      <div className={twMerge('w-full bg-gray-200 rounded-full overflow-hidden', sizes[size])}>
        <div
          className={twMerge(
            'h-full rounded-full transition-all duration-300',
            variants[variant]
          )}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;