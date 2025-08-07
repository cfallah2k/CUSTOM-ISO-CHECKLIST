import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface AssessmentResultsProps {
  userProfile: any;
  results: any[];
  onStartNewAssessment: () => void;
  onStartChecklist: () => void;
}

const AssessmentResults: React.FC<AssessmentResultsProps> = ({
  userProfile,
  results,
  onStartNewAssessment,
  onStartChecklist
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-blue-600 bg-blue-100';
    if (score >= 40) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Moderate';
    return 'Needs Improvement';
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Very Complex': return 'text-red-600 bg-red-100';
      case 'Complex': return 'text-orange-600 bg-orange-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Simple': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ChartBarIcon className="h-8 w-8 text-primary-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Assessment Results</h2>
        <p className="text-lg text-gray-600">
          Comprehensive analysis of your ISO implementation readiness
        </p>
      </div>

      {/* Overall Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overall Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {results.length}
            </div>
            <div className="text-sm text-gray-600">Standards Assessed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {Math.round(results.reduce((sum, r) => sum + r.overallScore, 0) / results.length)}%
            </div>
            <div className="text-sm text-gray-600">Average Readiness</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {results.filter(r => r.priority === 'High Priority' || r.priority === 'Critical Priority').length}
            </div>
            <div className="text-sm text-gray-600">High Priority Standards</div>
          </div>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="space-y-6">
        {results.map((result, index) => (
          <motion.div
            key={result.standard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {result.standard.replace('iso-', 'ISO ').toUpperCase()}
                </h3>
                <p className="text-gray-600">
                  Comprehensive assessment results and recommendations
                </p>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(result.overallScore)}`}>
                  {getScoreLabel(result.overallScore)} ({result.overallScore}%)
                </div>
              </div>
            </div>

            {/* Category Scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Awareness</span>
                  <span className={`text-sm font-medium ${getScoreColor(result.categoryScores.awareness)}`}>
                    {result.categoryScores.awareness}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${result.categoryScores.awareness}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Readiness</span>
                  <span className={`text-sm font-medium ${getScoreColor(result.categoryScores.readiness)}`}>
                    {result.categoryScores.readiness}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${result.categoryScores.readiness}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Resources</span>
                  <span className={`text-sm font-medium ${getScoreColor(result.categoryScores.resources)}`}>
                    {result.categoryScores.resources}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-600 h-2 rounded-full"
                    style={{ width: `${result.categoryScores.resources}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Risk Level</span>
                  <span className={`text-sm font-medium ${getRiskColor(result.riskLevel)}`}>
                    {result.riskLevel}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      result.riskLevel === 'Critical' ? 'bg-red-600' :
                      result.riskLevel === 'High' ? 'bg-orange-600' :
                      result.riskLevel === 'Medium' ? 'bg-yellow-600' : 'bg-green-600'
                    }`}
                    style={{ width: `${result.categoryScores.risk}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Implementation</span>
                  <span className={`text-sm font-medium ${getScoreColor(result.categoryScores.implementation)}`}>
                    {result.categoryScores.implementation}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${result.categoryScores.implementation}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Sector Alignment</span>
                  <span className={`text-sm font-medium ${getScoreColor(result.categoryScores.sectorAlignment)}`}>
                    {result.categoryScores.sectorAlignment}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${result.categoryScores.sectorAlignment}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <ClockIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-700">Timeline</div>
                <div className="text-lg font-semibold text-blue-600">{result.timeline}</div>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CurrencyDollarIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-700">Estimated Cost</div>
                <div className="text-lg font-semibold text-green-600">{result.cost}</div>
              </div>
              
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <ShieldCheckIcon className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-700">Complexity</div>
                <div className={`text-lg font-semibold ${getComplexityColor(result.implementationComplexity)}`}>
                  {result.implementationComplexity}
                </div>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <ChartBarIcon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-700">Estimated ROI</div>
                <div className="text-lg font-semibold text-purple-600">{result.estimatedROI}</div>
              </div>
            </div>

            {/* Recommendations and Next Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <LightBulbIcon className="h-5 w-5 text-yellow-600 mr-2" />
                  Key Recommendations
                </h4>
                <ul className="space-y-2">
                  {result.recommendations.map((rec: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <ArrowRightIcon className="h-5 w-5 text-blue-600 mr-2" />
                  Next Steps
                </h4>
                <ul className="space-y-2">
                  {result.nextSteps.map((step: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Critical Success Factors and Challenges */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                  Critical Success Factors
                </h4>
                <ul className="space-y-2">
                  {result.criticalSuccessFactors.map((factor: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 text-orange-600 mr-2" />
                  Potential Challenges
                </h4>
                <ul className="space-y-2">
                  {result.potentialChallenges.map((challenge: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sector-Specific Insights */}
            {result.sectorSpecificInsights.length > 0 && (
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <GlobeAltIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  Sector-Specific Insights
                </h4>
                <ul className="space-y-2">
                  {result.sectorSpecificInsights.map((insight: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onStartChecklist}
          className="btn-primary flex items-center justify-center space-x-2"
        >
          <DocumentTextIcon className="h-5 w-5" />
          <span>Generate Compliance Checklist</span>
        </button>
        
        <button
          onClick={onStartNewAssessment}
          className="btn-outline flex items-center justify-center space-x-2"
        >
          <ChartBarIcon className="h-5 w-5" />
          <span>Start New Assessment</span>
        </button>
      </div>
    </motion.div>
  );
};

export default AssessmentResults; 