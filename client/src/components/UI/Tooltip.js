import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

const Tooltip = ({
  content,
  children,
  position = 'top',
  delay = 200,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({});
  const triggerRef = useRef(null);
  
  let timeout;
  
  const showTooltip = () => {
    timeout = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setCoords({
          left: rect.left + rect.width / 2,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          width: rect.width,
          height: rect.height,
        });
      }
      setIsVisible(true);
    }, delay);
  };
  
  const hideTooltip = () => {
    clearTimeout(timeout);
    setIsVisible(false);
  };
  
  const calculatePosition = () => {
    const tooltipWidth = 200; // Approximate width
    const tooltipHeight = 60; // Approximate height
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;
    
    let style = {};
    
    switch (position) {
      case 'top':
        style = {
          left: coords.left + scrollX - tooltipWidth / 2,
          top: coords.top + scrollY - tooltipHeight - 8,
        };
        break;
      case 'bottom':
        style = {
          left: coords.left + scrollX - tooltipWidth / 2,
          top: coords.bottom + scrollY + 8,
        };
        break;
      case 'left':
        style = {
          left: coords.left + scrollX - tooltipWidth - 8,
          top: coords.top + scrollY + (coords.height - tooltipHeight) / 2,
        };
        break;
      case 'right':
        style = {
          left: coords.right + scrollX + 8,
          top: coords.top + scrollY + (coords.height - tooltipHeight) / 2,
        };
        break;
      default:
        style = {
          left: coords.left + scrollX - tooltipWidth / 2,
          top: coords.top + scrollY - tooltipHeight - 8,
        };
    }
    
    return style;
  };
  
  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
      >
        {children}
      </span>
      
      {isVisible &&
        createPortal(
          <div
            className={twMerge(
              'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg max-w-xs',
              'transition-opacity duration-150',
              isVisible ? 'opacity-100' : 'opacity-0',
              className
            )}
            style={calculatePosition()}
          >
            {content}
            <div
              className={`absolute w-3 h-3 bg-gray-900 transform rotate-45 ${
                position === 'top' ? 'bottom-[-6px] left-1/2 -translate-x-1/2' :
                position === 'bottom' ? 'top-[-6px] left-1/2 -translate-x-1/2' :
                position === 'left' ? 'right-[-6px] top-1/2 -translate-y-1/2' :
                'left-[-6px] top-1/2 -translate-y-1/2'
              }`}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;