import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardDocumentListIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

interface AssessmentQuestionsProps {
  selectedStandards: string[];
  onComplete: (results: any[]) => void;
  onBack: () => void;
}

interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  weight: number;
  riskFactor?: boolean;
  sectorSpecific?: string[];
}

interface AssessmentResult {
  standard: string;
  overallScore: number;
  categoryScores: {
    awareness: number;
    readiness: number;
    resources: number;
    risk: number;
    implementation: number;
    sectorAlignment: number;
  };
  recommendations: string[];
  nextSteps: string[];
  timeline: string;
  cost: string;
  priority: string;
  matchScore: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  implementationComplexity: 'Simple' | 'Moderate' | 'Complex' | 'Very Complex';
  estimatedROI: string;
  criticalSuccessFactors: string[];
  potentialChallenges: string[];
  sectorSpecificInsights: string[];
}

const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({
  selectedStandards,
  onComplete,
  onBack
}) => {
  const [currentStandardIndex, setCurrentStandardIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  const generateComprehensiveAssessmentQuestions = (standardId: string): Question[] => {
    const baseQuestions: Question[] = [
      // Awareness & Knowledge
      {
        id: `${standardId}-awareness`,
        category: 'awareness',
        question: 'How familiar are you with this ISO standard and its requirements?',
        options: ['Not familiar at all', 'Basic understanding', 'Moderately familiar', 'Very familiar', 'Expert level'],
        weight: 1.2
      },
      {
        id: `${standardId}-knowledge-depth`,
        category: 'awareness',
        question: 'How well do you understand the specific clauses and requirements of this standard?',
        options: ['No understanding', 'Basic overview', 'Good understanding', 'Detailed knowledge', 'Expert knowledge'],
        weight: 1.1
      },
      {
        id: `${standardId}-benefits-understanding`,
        category: 'awareness',
        question: 'How well do you understand the business benefits of implementing this standard?',
        options: ['No understanding', 'Basic awareness', 'Good understanding', 'Clear understanding', 'Expert knowledge'],
        weight: 1.0
      },

      // Organizational Readiness
      {
        id: `${standardId}-readiness`,
        category: 'readiness',
        question: 'How ready is your organization to implement this standard?',
        options: ['Not ready at all', 'Somewhat ready', 'Moderately ready', 'Very ready', 'Fully prepared'],
        weight: 1.3
      },
      {
        id: `${standardId}-leadership-support`,
        category: 'readiness',
        question: 'How strong is the leadership support for implementing this standard?',
        options: ['No support', 'Limited support', 'Moderate support', 'Strong support', 'Full commitment'],
        weight: 1.4
      },
      {
        id: `${standardId}-change-readiness`,
        category: 'readiness',
        question: 'How ready is your organization for the changes required by this standard?',
        options: ['Resistant to change', 'Some resistance', 'Neutral', 'Open to change', 'Embraces change'],
        weight: 1.2
      },

      // Resource Availability
      {
        id: `${standardId}-budget`,
        category: 'resources',
        question: 'What level of budget can you allocate for implementation and certification?',
        options: ['Very limited budget', 'Limited budget', 'Moderate budget', 'Good budget', 'Excellent budget'],
        weight: 1.3
      },
      {
        id: `${standardId}-human-resources`,
        category: 'resources',
        question: 'How many dedicated staff can you allocate to the implementation project?',
        options: ['No dedicated staff', '1-2 part-time staff', '2-3 full-time staff', '4-6 full-time staff', 'Large dedicated team'],
        weight: 1.2
      },
      {
        id: `${standardId}-expertise`,
        category: 'resources',
        question: 'What level of internal expertise do you have for this standard?',
        options: ['No expertise', 'Basic knowledge', 'Some expertise', 'Good expertise', 'Expert level'],
        weight: 1.1
      },

      // Risk Assessment
      {
        id: `${standardId}-compliance-risk`,
        category: 'risk',
        question: 'What is your current level of compliance risk without this standard?',
        options: ['Very low risk', 'Low risk', 'Moderate risk', 'High risk', 'Critical risk'],
        weight: 1.4,
        riskFactor: true
      },
      {
        id: `${standardId}-market-pressure`,
        category: 'risk',
        question: 'How much market pressure do you face to implement this standard?',
        options: ['No pressure', 'Low pressure', 'Moderate pressure', 'High pressure', 'Critical pressure'],
        weight: 1.2,
        riskFactor: true
      },
      {
        id: `${standardId}-regulatory-requirements`,
        category: 'risk',
        question: 'How critical are regulatory requirements for your business?',
        options: ['Not critical', 'Somewhat important', 'Important', 'Very important', 'Critical'],
        weight: 1.3,
        riskFactor: true
      },

      // Implementation Complexity
      {
        id: `${standardId}-process-complexity`,
        category: 'implementation',
        question: 'How complex are your current processes that would be affected by this standard?',
        options: ['Very simple', 'Simple', 'Moderate complexity', 'Complex', 'Very complex'],
        weight: 1.1
      },
      {
        id: `${standardId}-technology-readiness`,
        category: 'implementation',
        question: 'How ready is your technology infrastructure for this standard?',
        options: ['Not ready', 'Basic readiness', 'Moderate readiness', 'Good readiness', 'Excellent readiness'],
        weight: 1.2
      },
      {
        id: `${standardId}-documentation`,
        category: 'implementation',
        question: 'How well documented are your current processes and procedures?',
        options: ['Not documented', 'Poorly documented', 'Somewhat documented', 'Well documented', 'Excellent documentation'],
        weight: 1.0
      },

      // Sector Alignment
      {
        id: `${standardId}-sector-relevance`,
        category: 'sectorAlignment',
        question: 'How relevant is this standard to your specific sector and industry?',
        options: ['Not relevant', 'Somewhat relevant', 'Relevant', 'Very relevant', 'Critical for sector'],
        weight: 1.3,
        sectorSpecific: ['manufacturing', 'healthcare', 'finance', 'technology', 'agriculture']
      },
      {
        id: `${standardId}-competitive-advantage`,
        category: 'sectorAlignment',
        question: 'How much competitive advantage would this standard provide in your sector?',
        options: ['No advantage', 'Minor advantage', 'Moderate advantage', 'Significant advantage', 'Major advantage'],
        weight: 1.2,
        sectorSpecific: ['manufacturing', 'healthcare', 'finance', 'technology', 'agriculture']
      }
    ];

    // Add standard-specific questions
    const standardSpecificQuestions: Question[] = [];
    
    if (standardId.includes('9001')) {
      standardSpecificQuestions.push(
        {
          id: `${standardId}-quality-culture`,
          category: 'readiness',
          question: 'How strong is your organization\'s quality culture?',
          options: ['No quality focus', 'Basic quality awareness', 'Moderate quality culture', 'Strong quality culture', 'Excellence in quality'],
          weight: 1.3
        },
        {
          id: `${standardId}-customer-focus`,
          category: 'readiness',
          question: 'How well do you understand and meet customer requirements?',
          options: ['Poor understanding', 'Basic understanding', 'Good understanding', 'Excellent understanding', 'Exceeds expectations'],
          weight: 1.2
        }
      );
    }

    if (standardId.includes('14001')) {
      standardSpecificQuestions.push(
        {
          id: `${standardId}-environmental-impact`,
          category: 'readiness',
          question: 'How significant is your organization\'s environmental impact?',
          options: ['Minimal impact', 'Low impact', 'Moderate impact', 'High impact', 'Very high impact'],
          weight: 1.3
        },
        {
          id: `${standardId}-environmental-awareness`,
          category: 'awareness',
          question: 'How aware is your organization of environmental issues and regulations?',
          options: ['Not aware', 'Basic awareness', 'Good awareness', 'Strong awareness', 'Expert knowledge'],
          weight: 1.1
        }
      );
    }

    if (standardId.includes('45001')) {
      standardSpecificQuestions.push(
        {
          id: `${standardId}-safety-culture`,
          category: 'readiness',
          question: 'How strong is your organization\'s safety culture?',
          options: ['Poor safety culture', 'Basic safety awareness', 'Good safety culture', 'Strong safety culture', 'Excellence in safety'],
          weight: 1.4
        },
        {
          id: `${standardId}-incident-history`,
          category: 'risk',
          question: 'What is your organization\'s recent safety incident history?',
          options: ['Many incidents', 'Some incidents', 'Few incidents', 'Very few incidents', 'No incidents'],
          weight: 1.3,
          riskFactor: true
        }
      );
    }

    if (standardId.includes('27001')) {
      standardSpecificQuestions.push(
        {
          id: `${standardId}-data-security`,
          category: 'readiness',
          question: 'How critical is data security to your business operations?',
          options: ['Not critical', 'Somewhat important', 'Important', 'Very important', 'Critical'],
          weight: 1.4
        },
        {
          id: `${standardId}-cyber-threats`,
          category: 'risk',
          question: 'How vulnerable is your organization to cyber threats?',
          options: ['Very vulnerable', 'Vulnerable', 'Moderately secure', 'Well secured', 'Highly secured'],
          weight: 1.3,
          riskFactor: true
        }
      );
    }

    return [...baseQuestions, ...standardSpecificQuestions];
  };

  const calculateDetailedScore = (standardId: string): AssessmentResult => {
    const questions = generateComprehensiveAssessmentQuestions(standardId);
    const categoryScores: { [key: string]: { total: number; max: number; count: number } } = {};
    
    // Initialize category scores
    questions.forEach(q => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { total: 0, max: 0, count: 0 };
      }
    });

    // Calculate scores for each category
    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer !== undefined) {
        const weightedScore = answer * q.weight;
        categoryScores[q.category].total += weightedScore;
        categoryScores[q.category].max += 4 * q.weight; // Max score is 4 (0-4 scale)
        categoryScores[q.category].count++;
      }
    });

    // Calculate percentage scores for each category
    const calculatedScores: { [key: string]: number } = {};
    Object.keys(categoryScores).forEach(category => {
      const { total, max, count } = categoryScores[category];
      calculatedScores[category] = count > 0 ? Math.round((total / max) * 100) : 0;
    });

    // Calculate overall score (weighted average)
    const overallScore = Math.round(
      Object.values(calculatedScores).reduce((sum, score) => sum + score, 0) / Object.keys(calculatedScores).length
    );

    // Generate detailed recommendations based on scores
    const recommendations = generateDetailedRecommendations(standardId, calculatedScores, overallScore);
    const nextSteps = generateNextSteps(calculatedScores, overallScore);
    const riskLevel = calculateRiskLevel(calculatedScores);
    const implementationComplexity = calculateImplementationComplexity(calculatedScores);
    const estimatedROI = calculateEstimatedROI(overallScore, standardId);
    const criticalSuccessFactors = generateCriticalSuccessFactors(calculatedScores);
    const potentialChallenges = generatePotentialChallenges(calculatedScores);
    const sectorSpecificInsights = generateSectorInsights(standardId, calculatedScores);

    return {
      standard: standardId,
      overallScore,
      categoryScores: {
        awareness: calculatedScores.awareness || 0,
        readiness: calculatedScores.readiness || 0,
        resources: calculatedScores.resources || 0,
        risk: calculatedScores.risk || 0,
        implementation: calculatedScores.implementation || 0,
        sectorAlignment: calculatedScores.sectorAlignment || 0
      },
      recommendations,
      nextSteps,
      timeline: calculateTimeline(overallScore),
      cost: calculateCost(overallScore, standardId),
      priority: calculatePriority(overallScore, calculatedScores.risk || 0),
      matchScore: overallScore,
      riskLevel,
      implementationComplexity,
      estimatedROI,
      criticalSuccessFactors,
      potentialChallenges,
      sectorSpecificInsights
    };
  };

  const generateDetailedRecommendations = (standardId: string, categoryScores: { [key: string]: number }, overallScore: number): string[] => {
    const recommendations: string[] = [];

    if (overallScore >= 85) {
      recommendations.push(
        'Excellent readiness for immediate implementation',
        'Consider accelerated certification timeline',
        'Strong foundation for successful implementation',
        'High potential for achieving certification within 6-12 months'
      );
    } else if (overallScore >= 70) {
      recommendations.push(
        'Good readiness with targeted improvements needed',
        'Focus on identified gaps before implementation',
        'Consider phased implementation approach',
        'Strong potential for success with proper planning'
      );
    } else if (overallScore >= 50) {
      recommendations.push(
        'Moderate readiness - significant preparation required',
        'Invest in training and education programs',
        'Build organizational capability before implementation',
        'Consider starting with basic standards first'
      );
    } else {
      recommendations.push(
        'Limited readiness - extensive preparation needed',
        'Focus on foundational improvements first',
        'Consider starting with basic quality management',
        'Invest in organizational development before ISO implementation'
      );
    }

    // Category-specific recommendations
    if (categoryScores.awareness && categoryScores.awareness < 60) {
      recommendations.push('Invest in comprehensive training and education programs');
    }
    if (categoryScores.readiness && categoryScores.readiness < 60) {
      recommendations.push('Strengthen leadership commitment and change management');
    }
    if (categoryScores.resources && categoryScores.resources < 60) {
      recommendations.push('Secure adequate budget and human resources for implementation');
    }
    if (categoryScores.risk && categoryScores.risk > 70) {
      recommendations.push('Address high-risk areas as immediate priority');
    }

    return recommendations;
  };

  const generateNextSteps = (categoryScores: { [key: string]: number }, overallScore: number): string[] => {
    const nextSteps: string[] = [];

    if (overallScore >= 70) {
      nextSteps.push(
        'Form implementation project team',
        'Develop detailed implementation plan',
        'Allocate resources and budget',
        'Begin documentation development'
      );
    } else {
      nextSteps.push(
        'Conduct gap analysis',
        'Develop training and education plan',
        'Strengthen organizational foundation',
        'Build internal expertise'
      );
    }

    return nextSteps;
  };

  const calculateRiskLevel = (categoryScores: { [key: string]: number }): 'Low' | 'Medium' | 'High' | 'Critical' => {
    const riskScore = categoryScores.risk || 0;
    if (riskScore >= 80) return 'Critical';
    if (riskScore >= 60) return 'High';
    if (riskScore >= 40) return 'Medium';
    return 'Low';
  };

  const calculateImplementationComplexity = (categoryScores: { [key: string]: number }): 'Simple' | 'Moderate' | 'Complex' | 'Very Complex' => {
    const readinessScore = categoryScores.readiness || 0;
    const implementationScore = categoryScores.implementation || 0;
    const avgScore = (readinessScore + implementationScore) / 2;

    if (avgScore >= 80) return 'Simple';
    if (avgScore >= 60) return 'Moderate';
    if (avgScore >= 40) return 'Complex';
    return 'Very Complex';
  };

  const calculateEstimatedROI = (overallScore: number, standardId: string): string => {
    if (overallScore >= 80) return 'High ROI (200-300% within 2 years)';
    if (overallScore >= 60) return 'Good ROI (150-200% within 2-3 years)';
    if (overallScore >= 40) return 'Moderate ROI (100-150% within 3-4 years)';
    return 'Low ROI (50-100% within 4-5 years)';
  };

  const generateCriticalSuccessFactors = (categoryScores: { [key: string]: number }): string[] => {
    const factors: string[] = [];
    
    if (categoryScores.leadership && categoryScores.leadership < 70) {
      factors.push('Strong leadership commitment and support');
    }
    if (categoryScores.resources && categoryScores.resources < 70) {
      factors.push('Adequate resource allocation and budget');
    }
    if (categoryScores.expertise && categoryScores.expertise < 70) {
      factors.push('Building internal expertise and capabilities');
    }
    if (categoryScores.change && categoryScores.change < 70) {
      factors.push('Effective change management and communication');
    }

    return factors;
  };

  const generatePotentialChallenges = (categoryScores: { [key: string]: number }): string[] => {
    const challenges: string[] = [];
    
    if (categoryScores.resources && categoryScores.resources < 60) {
      challenges.push('Limited budget and resource constraints');
    }
    if (categoryScores.expertise && categoryScores.expertise < 60) {
      challenges.push('Lack of internal expertise and knowledge');
    }
    if (categoryScores.change && categoryScores.change < 60) {
      challenges.push('Resistance to change and cultural barriers');
    }
    if (categoryScores.time && categoryScores.time < 60) {
      challenges.push('Time constraints and competing priorities');
    }

    return challenges;
  };

  const generateSectorInsights = (standardId: string, categoryScores: { [key: string]: number }): string[] => {
    const insights: string[] = [];
    
    if (standardId.includes('9001')) {
      insights.push('Quality management is fundamental for all sectors');
      insights.push('Customer focus drives competitive advantage');
    }
    if (standardId.includes('14001')) {
      insights.push('Environmental responsibility is increasingly important');
      insights.push('Sustainability practices enhance market position');
    }
    if (standardId.includes('45001')) {
      insights.push('Workplace safety is critical for operational excellence');
      insights.push('Safety culture reduces costs and improves productivity');
    }
    if (standardId.includes('27001')) {
      insights.push('Information security is crucial in digital transformation');
      insights.push('Data protection builds customer trust');
    }

    return insights;
  };

  const calculateTimeline = (overallScore: number): string => {
    if (overallScore >= 85) return '6-9 months';
    if (overallScore >= 70) return '9-12 months';
    if (overallScore >= 50) return '12-18 months';
    return '18-24 months';
  };

  const calculateCost = (overallScore: number, standardId: string): string => {
    const baseCost = standardId.includes('9001') ? '$15,000-$30,000' :
                    standardId.includes('14001') ? '$20,000-$40,000' :
                    standardId.includes('45001') ? '$25,000-$50,000' :
                    standardId.includes('27001') ? '$30,000-$60,000' : '$20,000-$40,000';

    if (overallScore >= 80) return baseCost;
    if (overallScore >= 60) return `+20% additional cost`;
    if (overallScore >= 40) return `+40% additional cost`;
    return `+60% additional cost`;
  };

  const calculatePriority = (overallScore: number, riskScore: number): string => {
    if (riskScore >= 70) return 'Critical Priority';
    if (overallScore >= 70) return 'High Priority';
    if (overallScore >= 50) return 'Medium Priority';
    return 'Low Priority';
  };

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNext = () => {
    const currentStandardId = selectedStandards[currentStandardIndex];
    const questions = generateComprehensiveAssessmentQuestions(currentStandardId);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Move to next standard or complete
      if (currentStandardIndex < selectedStandards.length - 1) {
        setCurrentStandardIndex(prev => prev + 1);
        setCurrentQuestionIndex(0);
      } else {
        // Complete assessment
        const results = selectedStandards.map(standardId => 
          calculateDetailedScore(standardId)
        );
        onComplete(results);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentStandardIndex > 0) {
      setCurrentStandardIndex(prev => prev - 1);
      const currentStandardId = selectedStandards[currentStandardIndex - 1];
      const questions = generateComprehensiveAssessmentQuestions(currentStandardId);
      setCurrentQuestionIndex(questions.length - 1);
    }
  };

  const currentStandardId = selectedStandards[currentStandardIndex];
  const questions = generateComprehensiveAssessmentQuestions(currentStandardId);
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = selectedStandards.reduce((total, standardId) => {
    return total + generateComprehensiveAssessmentQuestions(standardId).length;
  }, 0);
  const currentQuestionNumber = selectedStandards
    .slice(0, currentStandardIndex)
    .reduce((total, standardId) => total + generateComprehensiveAssessmentQuestions(standardId).length, 0) + currentQuestionIndex + 1;

  const canProceed = answers[currentQuestion.id] !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ClipboardDocumentListIcon className="h-8 w-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Comprehensive Assessment: {currentStandardId.replace('iso-', 'ISO ').toUpperCase()}
        </h2>
        <p className="text-gray-600 mb-4">
          Question {currentQuestionNumber} of {totalQuestions}
        </p>
        
        {/* Enhanced Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className="bg-primary-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-500">
          <span>Standard {currentStandardIndex + 1} of {selectedStandards.length}</span>
          <span>{Math.round((currentQuestionNumber / totalQuestions) * 100)}% Complete</span>
        </div>

        {/* Category Indicator */}
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {currentQuestion.category.charAt(0).toUpperCase() + currentQuestion.category.slice(1)} Assessment
          </span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex-shrink-0">
            {currentQuestion.riskFactor ? (
              <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
            ) : currentQuestion.category === 'resources' ? (
              <CurrencyDollarIcon className="h-6 w-6 text-green-500" />
            ) : currentQuestion.category === 'timeline' ? (
              <ClockIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <ChartBarIcon className="h-6 w-6 text-purple-500" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {currentQuestion.question}
            </h3>
            {currentQuestion.sectorSpecific && (
              <p className="text-sm text-gray-500 mb-3">
                This question is particularly relevant for: {currentQuestion.sectorSpecific.join(', ')}
              </p>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <label 
              key={index} 
              className={`flex items-center space-x-3 cursor-pointer p-4 rounded-lg border transition-all duration-200 ${
                answers[currentQuestion.id] === index
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name={currentQuestion.id}
                value={index}
                checked={answers[currentQuestion.id] === index}
                onChange={() => handleAnswer(currentQuestion.id, index)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="text-gray-700 flex-1">{option}</span>
              {answers[currentQuestion.id] === index && (
                <CheckCircleIcon className="h-5 w-5 text-primary-600" />
              )}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={currentStandardIndex === 0 && currentQuestionIndex === 0 ? onBack : handlePrevious}
          className="btn-secondary flex items-center space-x-2"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>{currentStandardIndex === 0 && currentQuestionIndex === 0 ? 'Back' : 'Previous'}</span>
        </button>
        
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>
            {currentStandardIndex === selectedStandards.length - 1 && currentQuestionIndex === questions.length - 1
              ? 'Complete Assessment'
              : 'Next'
            }
          </span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default AssessmentQuestions; 