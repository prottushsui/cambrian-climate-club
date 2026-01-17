import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Member, ExecutiveMember, Advisor, Project, Achievement, Gallery } from '@/types/types';
import { ThemeProvider } from './ThemeContext';
import { NotificationProvider } from './NotificationContext';

// Define the shape of our app state
interface AppState {
  members: ExecutiveMember[];
  leadership: Member[];
  advisors: Advisor[];
  projects: Project[];
  achievements: Achievement[];
  galleries: Gallery[];
}

// Define actions for updating state
type AppAction =
  | { type: 'SET_MEMBERS'; payload: ExecutiveMember[] }
  | { type: 'SET_LEADERSHIP'; payload: Member[] }
  | { type: 'SET_ADVISORS'; payload: Advisor[] }
  | { type: 'SET_PROJECTS'; payload: Project[] }
  | { type: 'SET_ACHIEVEMENTS'; payload: Achievement[] }
  | { type: 'SET_GALLERIES'; payload: Gallery[] }
  | { type: 'RESET_STATE' };

// Initial state
const initialState: AppState = {
  members: [],
  leadership: [],
  advisors: [],
  projects: [],
  achievements: [],
  galleries: [],
};

// Reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_MEMBERS':
      return { ...state, members: action.payload };
    case 'SET_LEADERSHIP':
      return { ...state, leadership: action.payload };
    case 'SET_ADVISORS':
      return { ...state, advisors: action.payload };
    case 'SET_PROJECTS':
      return { ...state, projects: action.payload };
    case 'SET_ACHIEVEMENTS':
      return { ...state, achievements: action.payload };
    case 'SET_GALLERIES':
      return { ...state, galleries: action.payload };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};

// Create context
interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: ReactNode; initialState?: Partial<AppState> }> = ({
  children,
  initialState: initialAppState = {},
}) => {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    ...initialAppState,
  });

  return (
    <ThemeProvider>
      <NotificationProvider>
        <AppContext.Provider value={{ state, dispatch }}>
          {children}
        </AppContext.Provider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

// Custom hook to use the app context
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};