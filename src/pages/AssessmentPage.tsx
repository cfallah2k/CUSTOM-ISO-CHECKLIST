import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  DocumentTextIcon,
  StarIcon
} from '@heroicons/react/24/outline';

import { useUser } from '../context/UserContext';
import UserOnboarding from '../components/Assessment/UserOnboarding';
import StandardSelection from '../components/Assessment/StandardSelection';
import AssessmentQuestions from '../components/Assessment/AssessmentQuestions';
import AssessmentResults from '../components/Assessment/AssessmentResults';
import CompanyProfileForm from '../components/Assessment/CompanyProfileForm';
import ComplianceChecklist from '../components/Assessment/ComplianceChecklist';

type AssessmentStep = 'overview' | 'onboarding' | 'selection' | 'questions' | 'results' | 'profile' | 'checklist';

const AssessmentPage: React.FC = () => {
  const { 
    userProfile, 
    setUserProfile, 
    selectedStandards, 
    setSelectedStandards, 
    assessmentResults, 
    setAssessmentResults,
    clearUserData 
  } = useUser();

  const [currentStep, setCurrentStep] = useState<AssessmentStep>('overview');
  const [defaultUserProfile] = useState({
    name: '',
    company: '',
    sector: '',
    companySize: '',
    role: '',
    experience: '',
    goals: [],
    challenges: []
  });

  const [companyProfile, setCompanyProfile] = useState({
    name: '',
    industry: '',
    size: 'SME' as 'Startup' | 'SME' | 'Enterprise',
    maturityLevel: 'Basic' as 'Basic' | 'Intermediate' | 'Advanced',
    description: '',
    selectedStandards: [] as string[]
  });

  const handleProfileUpdate = (profile: any) => {
    setUserProfile(profile);
  };

  const handleStandardSelection = (standardId: string) => {
    const currentStandards = selectedStandards;
    if (currentStandards.includes(standardId)) {
      setSelectedStandards(currentStandards.filter(id => id !== standardId));
    } else {
      setSelectedStandards([...currentStandards, standardId]);
    }
  };

  const handleOnboardingComplete = () => {
    setCurrentStep('selection');
  };

  const handleSelectionComplete = () => {
    setCurrentStep('questions');
  };

  const handleQuestionsComplete = (results: any[]) => {
    setAssessmentResults(results);
    setCurrentStep('results');
  };

  const handleProfileComplete = (profile: any) => {
    setCompanyProfile(profile);
    setCurrentStep('checklist');
  };

  const handleChecklistExport = (format: 'pdf' | 'csv') => {
    // Implementation for export functionality
    console.log(`Exporting checklist as ${format}`);
  };

  const handleChecklistSave = (checklist: any[]) => {
    // Implementation for saving checklist
    console.log('Saving checklist:', checklist);
  };

  const handleStartNewAssessment = () => {
    clearUserData();
    setCurrentStep('onboarding');
  };

  const handleStartChecklist = () => {
    setCurrentStep('profile');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'selection':
        setCurrentStep('onboarding');
        break;
      case 'questions':
        setCurrentStep('selection');
        break;
      case 'checklist':
        setCurrentStep('profile');
        break;
      default:
        break;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'overview':
        return (
          <div className="container-custom">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                ISO Assessment
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Get personalized recommendations for ISO standards that match your organization's needs
              </p>

              {/* Assessment Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Assessment Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-sm text-gray-600">ISO Standards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10 min</div>
                  <div className="text-sm text-gray-600">Completion Time</div>
                </div>
              </div>
            </motion.div>

            {/* Assessment Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <StarIcon className="h-6 w-6 text-yellow-500 mr-2" />
                Assessment Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <LightBulbIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Recommendations</h3>
                  <p className="text-gray-600">Get tailored ISO standard suggestions based on your industry, size, and goals.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Roadmap</h3>
                  <p className="text-gray-600">Receive a detailed plan with timelines, costs, and priority recommendations.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheckIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Assessment</h3>
                  <p className="text-gray-600">Identify potential challenges and get strategies to mitigate implementation risks.</p>
                </div>
              </div>
            </motion.div>

            {/* Assessment Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DocumentTextIcon className="h-6 w-6 text-primary-600 mr-2" />
                Assessment Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Profile Setup</h3>
                  <p className="text-sm text-gray-600">Tell us about your organization, industry, and goals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChartBarIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Standard Selection</h3>
                  <p className="text-sm text-gray-600">Choose relevant ISO standards for your business</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Assessment</h3>
                  <p className="text-sm text-gray-600">Answer detailed questions about readiness and resources</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LightBulbIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Results & Plan</h3>
                  <p className="text-sm text-gray-600">Get personalized recommendations and implementation plan</p>
                </div>
              </div>
            </motion.div>

            {/* What You'll Get */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2" />
                What You'll Get
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Results</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Detailed readiness analysis for each standard</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Implementation timeline and cost estimates</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Risk assessment and mitigation strategies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Priority recommendations for your industry</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Tools</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">AI-powered compliance checklist</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Step-by-step implementation guide</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Progress tracking and analytics</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Export and sharing capabilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-6">Take our comprehensive assessment to find the right ISO standards for your organization.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setCurrentStep('onboarding')}
                    className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ChartBarIcon className="h-5 w-5 mr-2" />
                    Start Assessment
                  </button>
                  <button
                    onClick={() => setCurrentStep('profile')}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <DocumentTextIcon className="h-5 w-5 mr-2" />
                    Create Checklist
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        );

      case 'onboarding':
        return (
          <UserOnboarding
            userProfile={userProfile || defaultUserProfile}
            onProfileUpdate={handleProfileUpdate}
            onNext={handleOnboardingComplete}
          />
        );

      case 'selection':
        return (
          <StandardSelection
            userProfile={userProfile!}
            selectedStandards={selectedStandards}
            onStandardSelection={handleStandardSelection}
            onNext={handleSelectionComplete}
            onBack={handleBack}
          />
        );

      case 'questions':
        return (
          <AssessmentQuestions
            selectedStandards={selectedStandards}
            onComplete={handleQuestionsComplete}
            onBack={handleBack}
          />
        );

      case 'results':
        return (
          <AssessmentResults
            userProfile={userProfile!}
            results={assessmentResults}
            onStartNewAssessment={handleStartNewAssessment}
            onStartChecklist={handleStartChecklist}
          />
        );

      case 'profile':
        return (
          <CompanyProfileForm
            profile={companyProfile}
            onProfileUpdate={setCompanyProfile}
            onNext={handleProfileComplete}
          />
        );

      case 'checklist':
        return (
          <ComplianceChecklist
            companyProfile={companyProfile}
            onExport={handleChecklistExport}
            onSave={handleChecklistSave}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>ISO Assessment - StandardAccess</title>
        <meta name="description" content="Take a comprehensive assessment to find the right ISO standards for your organization" />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {currentStep !== 'overview' && currentStep !== 'results' && currentStep !== 'checklist' && (
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">ISO Standards Assessment</h1>
            <p className="text-lg text-gray-600">
              Get personalized recommendations for ISO standards that match your organization's needs
            </p>
            <div className="mt-6">
              <button
                onClick={handleStartChecklist}
                className="btn-outline"
              >
                Generate Compliance Checklist
              </button>
            </div>
          </div>
        )}

        {currentStep === 'checklist' && (
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Compliance Checklist</h1>
            <p className="text-lg text-gray-600">
              Track your ISO compliance implementation progress
            </p>
          </div>
        )}

        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default AssessmentPage; 