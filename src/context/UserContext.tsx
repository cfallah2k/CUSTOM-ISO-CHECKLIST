import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface UserProfile {
  name: string;
  company: string;
  sector: string;
  companySize: string;
  role: string;
  experience: string;
  goals: string[];
  challenges: string[];
  email?: string;
  phone?: string;
  country?: string;
}

export interface AssessmentResult {
  standard: string;
  score: number;
  recommendations: string[];
  nextSteps: string[];
  timeline: string;
  cost: string;
  priority: 'High' | 'Medium' | 'Low';
  matchScore: number;
}

interface UserContextType {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile) => void;
  assessmentResults: AssessmentResult[];
  setAssessmentResults: (results: AssessmentResult[]) => void;
  selectedStandards: string[];
  setSelectedStandards: (standards: string[]) => void;
  clearUserData: () => void;
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
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResult[]>([]);
  const [selectedStandards, setSelectedStandards] = useState<string[]>([]);

  const clearUserData = () => {
    setUserProfile(null);
    setAssessmentResults([]);
    setSelectedStandards([]);
  };

  const value = {
    userProfile,
    setUserProfile,
    assessmentResults,
    setAssessmentResults,
    selectedStandards,
    setSelectedStandards,
    clearUserData,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}; 