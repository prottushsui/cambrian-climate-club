import React from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon, 
  action, 
  className = '' 
}) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center p-8 text-center rounded-lg bg-gray-50 dark:bg-gray-800 ${className}`}
      role="status"
      aria-live="polite"
    >
      {icon && <div className="mb-4 text-gray-400 dark:text-gray-500">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default EmptyState;