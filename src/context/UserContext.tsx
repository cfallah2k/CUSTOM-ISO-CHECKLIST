import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, UserPreferences } from '@/types/iso';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  preferences: UserPreferences;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: Partial<User>) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

const defaultPreferences: UserPreferences = {
  language: 'en',
  theme: 'auto',
  notifications: {
    email: true,
    push: true,
    sms: false,
    frequency: 'weekly',
  },
  accessibility: {
    fontSize: 'medium',
    highContrast: false,
    screenReader: false,
    keyboardNavigation: true,
  },
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    const saved = localStorage.getItem('userPreferences');
    return saved ? JSON.parse(saved) : defaultPreferences;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('user');
      setIsAuthenticated(false);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }, [preferences]);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - in real app, this would come from API
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        role: 'fellow',
        country: 'Nigeria',
        sector: ['Technology', 'Manufacturing'],
        interests: ['ISO 9001', 'ISO 14001', 'ISO 27001'],
        profile: {
          bio: 'Experienced professional in quality management systems',
          experience: '5+ years in ISO implementation',
          education: ['BSc Computer Science', 'MSc Quality Management'],
          certifications: ['ISO 9001 Lead Auditor'],
          skills: ['Quality Management', 'Process Improvement', 'Auditing'],
          photo: '/avatars/john-doe.jpg',
        },
        progress: {
          completedStandards: ['ISO 9001'],
          currentLearning: ['ISO 14001'],
          achievements: [
            {
              id: '1',
              title: 'ISO 9001 Certified',
              description: 'Successfully completed ISO 9001 certification',
              date: '2024-01-15',
              icon: '🏆',
            },
          ],
          certificates: [
            {
              id: '1',
              standard: 'ISO 9001',
              issueDate: '2024-01-15',
              expiryDate: '2027-01-15',
              status: 'active',
              url: '/certificates/iso-9001.pdf',
            },
          ],
        },
        preferences,
      };

      setUser(mockUser);
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (userData: Partial<User>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock registration - in real app, this would create a new user
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name || '',
        email: userData.email || '',
        role: 'fellow',
        country: userData.country || '',
        sector: userData.sector || [],
        interests: userData.interests || [],
        profile: {
          bio: '',
          experience: '',
          education: [],
          certifications: [],
          skills: [],
          photo: '',
        },
        progress: {
          completedStandards: [],
          currentLearning: [],
          achievements: [],
          certificates: [],
        },
        preferences,
      };

      setUser(newUser);
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    }
  };

  const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...newPreferences }));
  };

  const value = {
    user,
    setUser,
    preferences,
    updatePreferences,
    isAuthenticated,
    login,
    logout,
    register,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}; 