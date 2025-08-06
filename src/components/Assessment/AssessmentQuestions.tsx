import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardDocumentListIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface AssessmentQuestionsProps {
  selectedStandards: string[];
  onComplete: (results: any[]) => void;
  onBack: () => void;
}

interface Question {
  id: string;
  question: string;
  options: string[];
}

const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({
  selectedStandards,
  onComplete,
  onBack
}) => {
  const [currentStandardIndex, setCurrentStandardIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  const generateAssessmentQuestions = (standardId: string): Question[] => {
    return [
      {
        id: `${standardId}-awareness`,
        question: 'How familiar are you with this ISO standard?',
        options: ['Not familiar at all', 'Somewhat familiar', 'Moderately familiar', 'Very familiar', 'Expert level']
      },
      {
        id: `${standardId}-readiness`,
        question: 'How ready is your organization to implement this standard?',
        options: ['Not ready at all', 'Somewhat ready', 'Moderately ready', 'Very ready', 'Fully prepared']
      },
      {
        id: `${standardId}-resources`,
        question: 'What level of resources can you allocate to implementation?',
        options: ['Very limited', 'Limited', 'Moderate', 'Good', 'Excellent']
      },
      {
        id: `${standardId}-timeline`,
        question: 'What is your preferred implementation timeline?',
        options: ['6 months or less', '6-12 months', '12-18 months', '18-24 months', '24+ months']
      },
      {
        id: `${standardId}-priority`,
        question: 'How high is this standard on your priority list?',
        options: ['Low priority', 'Somewhat important', 'Important', 'Very important', 'Critical priority']
      }
    ];
  };

  const calculateScore = (standardId: string): number => {
    const questions = generateAssessmentQuestions(standardId);
    let totalScore = 0;
    let answeredQuestions = 0;

    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer !== undefined) {
        totalScore += answer;
        answeredQuestions++;
      }
    });

    return answeredQuestions > 0 ? Math.round((totalScore / (answeredQuestions * 4)) * 100) : 0;
  };

  const generateRecommendations = (standardId: string, score: number) => {
    const recommendations: string[] = [];
    const nextSteps: string[] = [];

    if (score >= 80) {
      recommendations.push('Excellent readiness for implementation', 'Consider immediate certification planning', 'Strong foundation for success');
      nextSteps.push('Begin implementation planning', 'Allocate resources', 'Set up project team');
    } else if (score >= 60) {
      recommendations.push('Good readiness with some preparation needed', 'Focus on identified gaps', 'Consider phased implementation');
      nextSteps.push('Address knowledge gaps', 'Strengthen foundation', 'Plan implementation phases');
    } else if (score >= 40) {
      recommendations.push('Moderate readiness - significant preparation required', 'Consider training and education first', 'Build organizational capability');
      nextSteps.push('Invest in training', 'Build internal expertise', 'Strengthen organizational foundation');
    } else {
      recommendations.push('Limited readiness - extensive preparation needed', 'Consider starting with basic standards', 'Focus on foundational improvements');
      nextSteps.push('Start with basic standards', 'Invest in education', 'Build organizational readiness');
    }

    return {
      standard: standardId,
      score,
      recommendations,
      nextSteps,
      timeline: score >= 80 ? '6-12 months' : score >= 60 ? '12-18 months' : score >= 40 ? '18-24 months' : '24+ months',
      cost: score >= 80 ? 'Standard cost' : score >= 60 ? 'Moderate additional cost' : score >= 40 ? 'Significant additional cost' : 'High additional cost',
      priority: score >= 80 ? 'High' : score >= 60 ? 'Medium' : 'Low',
      matchScore: score
    };
  };

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNext = () => {
    const currentStandardId = selectedStandards[currentStandardIndex];
    const questions = generateAssessmentQuestions(currentStandardId);
    
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
          generateRecommendations(standardId, calculateScore(standardId))
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
      const questions = generateAssessmentQuestions(currentStandardId);
      setCurrentQuestionIndex(questions.length - 1);
    }
  };

  const currentStandardId = selectedStandards[currentStandardIndex];
  const questions = generateAssessmentQuestions(currentStandardId);
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = selectedStandards.reduce((total, standardId) => {
    return total + generateAssessmentQuestions(standardId).length;
  }, 0);
  const currentQuestionNumber = selectedStandards
    .slice(0, currentStandardIndex)
    .reduce((total, standardId) => total + generateAssessmentQuestions(standardId).length, 0) + currentQuestionIndex + 1;

  const canProceed = answers[currentQuestion.id] !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ClipboardDocumentListIcon className="h-8 w-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Assessment: {currentStandardId.replace('iso-', 'ISO ').toUpperCase()}
        </h2>
        <p className="text-gray-600 mb-4">
          Question {currentQuestionNumber} of {totalQuestions}
        </p>
        
        {/* Progress Bar */}
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
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          {currentQuestion.question}
        </h3>
        
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