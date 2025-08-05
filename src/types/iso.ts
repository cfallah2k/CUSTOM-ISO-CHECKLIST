export interface ISOSection {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  implementation: string[];
  benefits: string[];
  challenges: string[];
  examples: string[];
  resources: Resource[];
}

export interface ISOStandard {
  id: string;
  code: string;
  name: string;
  fullName: string;
  version: string;
  year: number;
  category: ISOCategory;
  sector: Sector[];
  description: string;
  overview: string;
  purpose: string;
  scope: string;
  keyPrinciples: string[];
  sections: ISOSection[];
  requirements: string[];
  benefits: string[];
  implementation: ImplementationStep[];
  certification: CertificationInfo;
  cost: CostInfo;
  timeline: TimelineInfo;
  caseStudies: CaseStudy[];
  resources: Resource[];
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  popularity: number;
  africanContext: AfricanContext;
  lastUpdated: string;
}

export interface ISOCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  isoStandards: string[];
}

export interface ImplementationStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  resources: Resource[];
  checklist: string[];
  tips: string[];
}

export interface CertificationInfo {
  process: string[];
  requirements: string[];
  duration: string;
  cost: string;
  auditors: string[];
  validity: string;
  renewal: string;
}

export interface CostInfo {
  implementation: string;
  certification: string;
  maintenance: string;
  training: string;
  total: string;
  breakdown: CostBreakdown[];
}

export interface CostBreakdown {
  item: string;
  cost: string;
  description: string;
}

export interface TimelineInfo {
  total: string;
  phases: TimelinePhase[];
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  activities: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  country: string;
  sector: string;
  isoStandard: string;
  challenge: string;
  solution: string;
  results: string[];
  lessons: string[];
  contact: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'document' | 'video' | 'template' | 'tool' | 'guide' | 'checklist';
  url: string;
  description: string;
  size?: string;
  duration?: string;
  language: string;
  tags: string[];
}

export interface AfricanContext {
  relevance: string;
  challenges: string[];
  opportunities: string[];
  successStories: string[];
  localResources: Resource[];
  regionalPartners: string[];
}

export interface FellowshipProgram {
  id: string;
  name: string;
  description: string;
  duration: string;
  sectors: Sector[];
  isoStandards: string[];
  benefits: string[];
  requirements: string[];
  application: ApplicationProcess;
  mentors: Mentor[];
  alumni: Alumni[];
}

export interface ApplicationProcess {
  steps: string[];
  documents: string[];
  deadline: string;
  criteria: string[];
  interview: string[];
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  country: string;
  expertise: string[];
  isoStandards: string[];
  bio: string;
  photo: string;
  contact: string;
}

export interface Alumni {
  id: string;
  name: string;
  cohort: string;
  currentRole: string;
  company: string;
  country: string;
  achievements: string[];
  testimonial: string;
  photo: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'fellow' | 'mentor' | 'admin' | 'guest';
  country: string;
  sector: string[];
  interests: string[];
  profile: UserProfile;
  progress: UserProgress;
  preferences: UserPreferences;
}

export interface UserProfile {
  bio: string;
  experience: string;
  education: string[];
  certifications: string[];
  skills: string[];
  photo: string;
}

export interface UserProgress {
  completedStandards: string[];
  currentLearning: string[];
  achievements: Achievement[];
  certificates: Certificate[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface Certificate {
  id: string;
  standard: string;
  issueDate: string;
  expiryDate: string;
  status: 'active' | 'expired' | 'pending';
  url: string;
}

export interface UserPreferences {
  language: string;
  theme: 'light' | 'dark' | 'auto';
  notifications: NotificationSettings;
  accessibility: AccessibilitySettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  frequency: 'daily' | 'weekly' | 'monthly';
}

export interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

export interface SearchFilters {
  category?: string;
  sector?: string[];
  difficulty?: string[];
  cost?: string;
  duration?: string;
  tags?: string[];
}

export interface ComparisonResult {
  standards: ISOStandard[];
  similarities: string[];
  differences: ComparisonDifference[];
  recommendation: string;
}

export interface ComparisonDifference {
  aspect: string;
  standard1: string;
  standard2: string;
  impact: string;
}

export interface AssessmentResult {
  standard: string;
  score: number;
  recommendations: string[];
  nextSteps: string[];
  timeline: string;
  cost: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeTaken: number;
  recommendations: string[];
} 