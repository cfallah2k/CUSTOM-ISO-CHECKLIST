import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { UserProfile, AssessmentResult } from '../../context/UserContext';

interface AssessmentResultsProps {
  userProfile: UserProfile;
  results: AssessmentResult[];
  onStartNewAssessment: () => void;
  onStartChecklist?: () => void;
}

const AssessmentResults: React.FC<AssessmentResultsProps> = ({
  userProfile,
  results,
  onStartNewAssessment,
  onStartChecklist
}) => {
  const sortedResults = results.sort((a, b) => b.matchScore - a.matchScore);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircleIcon className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h1>
        <p className="text-gray-600">Here are your personalized results and recommendations</p>
      </div>

      {/* User Profile Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Company:</strong> {userProfile.company}</p>
            <p><strong>Sector:</strong> {userProfile.sector}</p>
            <p><strong>Company Size:</strong> {userProfile.companySize}</p>
          </div>
          <div>
            <p><strong>Role:</strong> {userProfile.role}</p>
            <p><strong>Experience:</strong> {userProfile.experience}</p>
            <p><strong>Goals:</strong> {userProfile.goals.join(', ')}</p>
            <p><strong>Challenges:</strong> {userProfile.challenges.join(', ')}</p>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-primary-600">{results.length}</div>
          <div className="text-sm text-gray-500">Standards Assessed</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">
            {results.filter(r => r.priority === 'High').length}
          </div>
          <div className="text-sm text-gray-500">High Priority</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {Math.round(results.reduce((sum, r) => sum + r.matchScore, 0) / results.length)}%
          </div>
          <div className="text-sm text-gray-500">Average Readiness</div>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="space-y-6">
        {sortedResults.map((result, index) => (
          <motion.div
            key={result.standard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{result.standard}</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(result.priority)}`}>
                    {result.priority} Priority
                  </span>
                  <span className="text-sm text-gray-600">Match Score: {result.matchScore}%</span>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${getScoreColor(result.matchScore)}`}>
                  {result.matchScore}%
                </div>
                <div className="text-sm text-gray-500">Readiness Score</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                  Recommendations
                </h4>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <ArrowRightIcon className="h-4 w-4 text-primary-500 mr-2" />
                  Next Steps
                </h4>
                <ul className="space-y-2">
                  {result.nextSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <ArrowRightIcon className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-lg font-semibold text-gray-900">{result.timeline}</span>
                </div>
                <div className="text-sm text-gray-500">Timeline</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <CurrencyDollarIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-lg font-semibold text-gray-900">{result.cost}</span>
                </div>
                <div className="text-sm text-gray-500">Estimated Cost</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <ChartBarIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-lg font-semibold text-gray-900">{result.matchScore}%</span>
                </div>
                <div className="text-sm text-gray-500">Readiness</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onStartNewAssessment}
            className="btn-primary"
          >
            Start New Assessment
          </button>
          
          {onStartChecklist && (
            <button
              onClick={onStartChecklist}
              className="btn-outline"
            >
              Generate Compliance Checklist
            </button>
          )}
        </div>
        
        <div className="text-sm text-gray-500">
          <p>Need help understanding your results?</p>
          <p>Contact our ISO experts for personalized guidance.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AssessmentResults; 