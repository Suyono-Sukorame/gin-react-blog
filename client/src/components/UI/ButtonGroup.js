import React from 'react';
import { twMerge } from 'tailwind-merge';

const ButtonGroup = ({ 
  children, 
  orientation = 'horizontal',
  className = '' 
}) => {
  const baseClasses = 'inline-flex';
  
  const orientationClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  };
  
  const classes = twMerge(
    baseClasses,
    orientationClasses[orientation],
    className
  );
  
  // Add proper spacing and rounded corners to children
  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      let roundedClass = '';
      
      if (orientation === 'horizontal') {
        if (index === 0) {
          roundedClass = 'rounded-r-none';
        } else if (index === React.Children.count(children) - 1) {
          roundedClass = 'rounded-l-none';
        } else {
          roundedClass = 'rounded-none';
        }
        
        // Add border between buttons
        if (index > 0) {
          return React.cloneElement(child, {
            className: twMerge(child.props.className, roundedClass, 'border-l-0'),
          });
        }
      } else {
        if (index === 0) {
          roundedClass = 'rounded-b-none';
        } else if (index === React.Children.count(children) - 1) {
          roundedClass = 'rounded-t-none';
        } else {
          roundedClass = 'rounded-none';
        }
        
        // Add border between buttons
        if (index > 0) {
          return React.cloneElement(child, {
            className: twMerge(child.props.className, roundedClass, 'border-t-0'),
          });
        }
      }
      
      return React.cloneElement(child, {
        className: twMerge(child.props.className, roundedClass),
      });
    }
    return child;
  });
  
  return <div className={classes}>{enhancedChildren}</div>;
};

export default ButtonGroup;