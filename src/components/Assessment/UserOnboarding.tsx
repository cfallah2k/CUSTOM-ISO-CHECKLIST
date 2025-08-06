import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserIcon, 
  GlobeAltIcon,
  ArrowRightIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { UserProfile } from '../../context/UserContext';
import { sectors } from '../../data/sectors';

interface UserOnboardingProps {
  userProfile: UserProfile;
  onProfileUpdate: (profile: UserProfile) => void;
  onNext: () => void;
  onBack?: () => void;
}

const UserOnboarding: React.FC<UserOnboardingProps> = ({
  userProfile,
  onProfileUpdate,
  onNext,
  onBack
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const companySizes = [
    '1-10 employees (Startup)',
    '11-50 employees (Small)',
    '51-200 employees (Medium)',
    '201-1000 employees (Large)',
    '1000+ employees (Enterprise)'
  ];

  const experienceLevels = [
    'Beginner (0-2 years)',
    'Intermediate (3-5 years)',
    'Advanced (6-10 years)',
    'Expert (10+ years)'
  ];

  const commonGoals = [
    'Improve quality management',
    'Enhance environmental performance',
    'Strengthen information security',
    'Improve workplace safety',
    'Reduce operational costs',
    'Access new markets',
    'Meet regulatory requirements',
    'Improve customer satisfaction',
    'Enhance supply chain management',
    'Implement energy efficiency'
  ];

  const commonChallenges = [
    'Limited budget for implementation',
    'Lack of internal expertise',
    'Complex regulatory requirements',
    'Resistance to change',
    'Resource constraints',
    'Time constraints',
    'Supply chain coordination',
    'Technology limitations',
    'Stakeholder alignment',
    'Measuring ROI'
  ];

  const handleProfileUpdate = (field: keyof UserProfile, value: string | string[]) => {
    onProfileUpdate({ ...userProfile, [field]: value });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return userProfile.name && userProfile.company && userProfile.sector && 
               userProfile.companySize && userProfile.role && userProfile.experience;
      case 2:
        return userProfile.goals.length > 0;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Yourself</h2>
              <p className="text-gray-600">Help us understand your organization to provide personalized ISO recommendations</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={userProfile.name}
                    onChange={(e) => handleProfileUpdate('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    value={userProfile.company}
                    onChange={(e) => handleProfileUpdate('company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Sector *</label>
                <select
                  value={userProfile.sector}
                  onChange={(e) => handleProfileUpdate('sector', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select your sector</option>
                  {sectors.map(sector => (
                    <option key={sector.id} value={sector.name}>{sector.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Size *</label>
                  <select
                    value={userProfile.companySize}
                    onChange={(e) => handleProfileUpdate('companySize', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select company size</option>
                    {companySizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Role *</label>
                  <input
                    type="text"
                    value={userProfile.role}
                    onChange={(e) => handleProfileUpdate('role', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., Manager, Director, CEO"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
                <select
                  value={userProfile.experience}
                  onChange={(e) => handleProfileUpdate('experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select experience level</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setCurrentStep(2)}
                disabled={!canProceed()}
                className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Continue</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Goals & Challenges</h2>
              <p className="text-gray-600">Select your primary goals and challenges to help us tailor recommendations</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">What are your primary goals? (Select all that apply)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {commonGoals.map(goal => (
                    <label key={goal} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userProfile.goals.includes(goal)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleProfileUpdate('goals', [...userProfile.goals, goal]);
                          } else {
                            handleProfileUpdate('goals', userProfile.goals.filter(g => g !== goal));
                          }
                        }}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">What are your main challenges? (Select all that apply)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {commonChallenges.map(challenge => (
                    <label key={challenge} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={userProfile.challenges.includes(challenge)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleProfileUpdate('challenges', [...userProfile.challenges, challenge]);
                          } else {
                            handleProfileUpdate('challenges', userProfile.challenges.filter(c => c !== challenge));
                          }
                        }}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="btn-secondary flex items-center space-x-2"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                onClick={onNext}
                disabled={!canProceed()}
                className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Continue</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      {renderStep()}
    </div>
  );
};

export default UserOnboarding; 