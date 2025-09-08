import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimes, FaExclamationCircle } from 'react-icons/fa';

const Toast = ({
  message,
  type = 'info',
  duration = 5000,
  onClose,
  position = 'top-right',
  isOpen = false,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration]);
  
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };
  
  const icons = {
    success: FaCheckCircle,
    warning: FaExclamationTriangle,
    error: FaExclamationCircle,
    info: FaInfoCircle,
  };
  
  const styles = {
    success: 'bg-green-100 border-green-400 text-green-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
  };
  
  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };
  
  const Icon = icons[type];
  
  if (!isVisible) return null;
  
  return createPortal(
    <div
      className={twMerge(
        'fixed flex items-center p-4 border rounded-lg shadow-lg max-w-sm z-50 transition-all duration-300',
        styles[type],
        positions[position],
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      )}
    >
      <Icon className="flex-shrink-0 mr-3" />
      <div className="flex-1">{message}</div>
      <button
        onClick={handleClose}
        className="ml-4 text-gray-500 hover:text-gray-700"
      >
        <FaTimes />
      </button>
    </div>,
    document.body
  );
};

// Toast Container to manage multiple toasts
export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          isOpen={true}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          position={toast.position}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
};

// Hook for using toast
export const useToast = () => {
  const [toasts, setToasts] = useState([]);
  
  const addToast = (message, options = {}) => {
    const id = Date.now();
    const toast = {
      id,
      message,
      type: options.type || 'info',
      duration: options.duration || 5000,
      position: options.position || 'top-right',
    };
    
    setToasts((prev) => [...prev, toast]);
    
    return id;
  };
  
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  
  const toast = {
    success: (message, options) => addToast(message, { ...options, type: 'success' }),
    error: (message, options) => addToast(message, { ...options, type: 'error' }),
    warning: (message, options) => addToast(message, { ...options, type: 'warning' }),
    info: (message, options) => addToast(message, { ...options, type: 'info' }),
  };
  
  return { toasts, toast, removeToast };
};

export default Toast;