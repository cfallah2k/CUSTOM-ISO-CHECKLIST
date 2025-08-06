import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { UserProfile } from '../../context/UserContext';
import { isoStandards } from '../../data/isoStandards';


interface StandardSelectionProps {
  userProfile: UserProfile;
  selectedStandards: string[];
  onStandardSelection: (standardId: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const StandardSelection: React.FC<StandardSelectionProps> = ({
  userProfile,
  selectedStandards,
  onStandardSelection,
  onNext,
  onBack
}) => {
  const getRecommendedStandards = (): string[] => {
    const recommendations: string[] = [];
    
    // Always recommend ISO 9001 for quality management
    recommendations.push('iso-9001');
    
    // Sector-based recommendations
    switch (userProfile.sector) {
      case 'Manufacturing':
        recommendations.push('iso-14001', 'iso-45001', 'iso-50001');
        break;
      case 'Healthcare':
        recommendations.push('iso-13485', 'iso-27001', 'iso-45001');
        break;
      case 'Technology':
        recommendations.push('iso-27001', 'iso-20000-1', 'iso-9001');
        break;
      case 'Financial Services':
        recommendations.push('iso-27001', 'iso-31000', 'iso-9001');
        break;
      case 'Agriculture':
        recommendations.push('iso-14001', 'iso-22000', 'iso-45001');
        break;
      case 'Construction':
        recommendations.push('iso-45001', 'iso-14001', 'iso-50001');
        break;
      case 'Education':
        recommendations.push('iso-21001', 'iso-27001', 'iso-9001');
        break;
      case 'Transportation':
        recommendations.push('iso-28000', 'iso-14001', 'iso-45001');
        break;
    }

    // Goal-based recommendations
    userProfile.goals.forEach(goal => {
      if (goal.includes('environmental') && !recommendations.includes('iso-14001')) {
        recommendations.push('iso-14001');
      }
      if (goal.includes('security') && !recommendations.includes('iso-27001')) {
        recommendations.push('iso-27001');
      }
      if (goal.includes('safety') && !recommendations.includes('iso-45001')) {
        recommendations.push('iso-45001');
      }
      if (goal.includes('energy') && !recommendations.includes('iso-50001')) {
        recommendations.push('iso-50001');
      }
    });

    return [...new Set(recommendations)];
  };

  const recommendedStandards = getRecommendedStandards();

  const renderStandardCard = (standard: any, isRecommended: boolean = false) => {
    const isSelected = selectedStandards.includes(standard.id);
    
    return (
      <motion.div
        key={standard.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
          isSelected 
            ? 'border-primary-500 bg-primary-50' 
            : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
        } ${isRecommended ? 'ring-2 ring-secondary-200' : ''}`}
        onClick={() => onStandardSelection(standard.id)}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900">{standard.name}</h3>
            {isRecommended && (
              <StarIcon className="h-4 w-4 text-secondary-500" />
            )}
          </div>
          {isSelected && <CheckCircleIcon className="h-5 w-5 text-primary-600" />}
        </div>
        <p className="text-sm text-gray-600 mb-3">{standard.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Difficulty: {standard.difficulty}</span>
          <span>Popularity: {standard.popularity}</span>
        </div>
        {isRecommended && (
          <div className="mt-2 text-xs text-secondary-600 font-medium">
            ★ Recommended for your sector
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ChartBarIcon className="h-8 w-8 text-accent-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recommended ISO Standards</h2>
        <p className="text-gray-600">Based on your profile, we recommend these standards for assessment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {recommendedStandards.map(standardId => {
          const standard = isoStandards.find(s => s.id === standardId);
          return standard ? renderStandardCard(standard, true) : null;
        })}
      </div>

      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Other Available Standards</h3>
        <p className="text-gray-600 mb-4">You can also select additional standards for assessment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {isoStandards
          .filter(standard => !recommendedStandards.includes(standard.id))
          .map(standard => renderStandardCard(standard))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="btn-secondary flex items-center space-x-2"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Back</span>
        </button>
        <button
          onClick={onNext}
          disabled={selectedStandards.length === 0}
          className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Start Assessment</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default StandardSelection; 