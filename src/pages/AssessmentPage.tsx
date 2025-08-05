import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  LightBulbIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { assessmentQuestions, generateAssessmentResult } from '../data/assessments';

interface Answer {
  questionId: string;
  answer: string;
}

const AssessmentPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnswer = (questionId: string, answer: string) => {
    const existingAnswerIndex = answers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex >= 0) {
      const newAnswers = [...answers];
      newAnswers[existingAnswerIndex].answer = answer;
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, { questionId, answer }]);
    }
  };

  const handleNext = () => {
    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Generate results - convert answers to numbers and provide default parameters
      const answerValues = answers.map(a => {
        const question = assessmentQuestions.find(q => q.id === a.questionId);
        const optionIndex = question?.options.findIndex(o => o === a.answer) || 0;
        // Convert option index to a score (0-3 scale)
        return optionIndex;
      });
      
      const weights = Array(answers.length).fill(1); // Equal weights for now
      const assessmentResults = generateAssessmentResult(answerValues, weights, 'manufacturing', 'medium');
      setResults(assessmentResults);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResults(false);
    setResults(null);
  };

  const currentQuestion = assessmentQuestions[currentStep];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id)?.answer;

  const progress = ((currentStep + 1) / assessmentQuestions.length) * 100;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (showResults && results) {
    return (
      <>
        <Helmet>
          <title>Assessment Results - AU ISO Fellowship Platform</title>
          <meta name="description" content="Your personalized ISO standards assessment results and recommendations." />
        </Helmet>

        <div className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Your Assessment Results
                </h1>
                <p className="text-xl text-gray-600">
                  Based on your responses, here are your personalized recommendations
                </p>
              </div>

              {/* Results Summary */}
              <motion.div variants={itemVariants} className="card p-8 mb-8">
                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                       <AcademicCapIcon className="h-8 w-8 text-white" />
                     </div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommended Standard</h3>
                     <p className="text-primary-600 font-medium">{results.standard}</p>
                   </div>
                   <div className="text-center">
                     <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                       <ChartBarIcon className="h-8 w-8 text-white" />
                     </div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment Score</h3>
                     <p className="text-secondary-600 font-medium">{results.score}%</p>
                   </div>
                   <div className="text-center">
                     <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                       <LightBulbIcon className="h-8 w-8 text-white" />
                     </div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
                     <p className="text-accent-600 font-medium">{results.timeline}</p>
                   </div>
                 </div>

                                 <div className="text-center">
                   <h2 className="text-2xl font-bold text-gray-900 mb-4">
                     Recommendations
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {results.recommendations.map((recommendation: string, index: number) => (
                       <div key={index} className="bg-gray-50 rounded-lg p-4 text-left">
                         <h3 className="font-semibold text-gray-900 mb-2">Recommendation {index + 1}</h3>
                         <p className="text-gray-600 text-sm">{recommendation}</p>
                       </div>
                     ))}
                   </div>
                 </div>
              </motion.div>

                             {/* Next Steps */}
               <motion.div variants={itemVariants} className="card p-8 mb-8">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
                 <div className="space-y-4">
                   {results.nextSteps.map((step: string, index: number) => (
                     <div key={index} className="flex items-start space-x-4">
                       <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                         {index + 1}
                       </div>
                       <div>
                         <p className="text-gray-700">{step}</p>
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                   <div className="flex items-center justify-between">
                     <span className="font-semibold text-gray-900">Estimated Cost:</span>
                     <span className="text-primary-600 font-bold">{results.cost}</span>
                   </div>
                 </div>
               </motion.div>

              {/* Next Steps */}
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <button onClick={handleRestart} className="btn-outline mr-4">
                  <ArrowLeftIcon className="h-5 w-5 mr-2" />
                  Retake Assessment
                </button>
                <button className="btn-primary">
                  Download Full Report
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>ISO Standards Assessment - AU ISO Fellowship Platform</title>
        <meta name="description" content="Take our comprehensive assessment to identify the most relevant ISO standards for your organization." />
      </Helmet>

      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                ISO Standards Assessment
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Answer a few questions to identify the most relevant ISO standards for your organization 
                and receive personalized implementation guidance.
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Question {currentStep + 1} of {assessmentQuestions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
            </motion.div>

            {/* Question Card */}
            <motion.div variants={itemVariants} className="card p-8 mb-8">
                             <div className="mb-6">
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">
                   {currentQuestion.question}
                 </h2>
               </div>

                             <div className="space-y-4">
                 {currentQuestion.options.map((option, index) => (
                   <label
                     key={index}
                     className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                       currentAnswer === option
                         ? 'border-primary-600 bg-primary-50'
                         : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                     }`}
                   >
                     <input
                       type="radio"
                       name={`question-${currentQuestion.id}`}
                       value={option}
                       checked={currentAnswer === option}
                       onChange={() => handleAnswer(currentQuestion.id, option)}
                       className="sr-only"
                     />
                     <div className={`w-5 h-5 border-2 rounded-full mr-4 flex items-center justify-center ${
                       currentAnswer === option
                         ? 'border-primary-600 bg-primary-600'
                         : 'border-gray-300'
                     }`}>
                       {currentAnswer === option && (
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                       )}
                     </div>
                     <div className="flex-1">
                       <div className="font-medium text-gray-900">{option}</div>
                     </div>
                   </label>
                 ))}
               </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={!currentAnswer}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  !currentAnswer
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {currentStep === assessmentQuestions.length - 1 ? 'Get Results' : 'Next'}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AssessmentPage; 