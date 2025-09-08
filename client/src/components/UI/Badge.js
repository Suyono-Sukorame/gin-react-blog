import React from 'react';
import { twMerge } from 'tailwind-merge';

const Badge = ({
  children,
  variant = 'primary',
  size = 'medium',
  rounded = 'full',
  withDot = false,
  className = '',
}) => {
  const variants = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-cyan-100 text-cyan-800',
    light: 'bg-gray-50 text-gray-700',
    dark: 'bg-gray-800 text-white',
  };
  
  const sizes = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-2.5 py-0.5 text-sm',
    large: 'px-3 py-1 text-base',
  };
  
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };
  
  const classes = twMerge(
    'inline-flex items-center font-medium',
    variants[variant],
    sizes[size],
    roundedStyles[rounded],
    className
  );
  
  return (
    <span className={classes}>
      {withDot && (
        <svg className="mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
      )}
      {children}
    </span>
  );
};

export default Badge;