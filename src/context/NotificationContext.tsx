import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  title?: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(({ type, message, title, duration = 5000 }: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newNotification = { id, type, message, title };
    
    setNotifications((prev) => [...prev, newNotification]);
    
    // Auto-remove notification after duration
    if (duration > 0) {
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, duration);
    }
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <div className="fixed top-4 right-4 z-[1000] space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-lg max-w-sm w-full transform transition-all duration-300 ${
              notification.type === 'success'
                ? 'bg-green-100 border border-green-300 text-green-800'
                : notification.type === 'error'
                ? 'bg-red-100 border border-red-300 text-red-800'
                : notification.type === 'warning'
                ? 'bg-yellow-100 border border-yellow-300 text-yellow-800'
                : 'bg-blue-100 border border-blue-300 text-blue-800'
            }`}
            role="alert"
            aria-live="polite"
          >
            {notification.title && <h3 className="font-bold">{notification.title}</h3>}
            <p>{notification.message}</p>
            <button
              onClick={() => removeNotification(notification.id)}
              className="absolute top-2 right-2 text-current hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};