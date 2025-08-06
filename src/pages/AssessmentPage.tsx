import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { useUser } from '../context/UserContext';
import UserOnboarding from '../components/Assessment/UserOnboarding';
import StandardSelection from '../components/Assessment/StandardSelection';
import AssessmentQuestions from '../components/Assessment/AssessmentQuestions';
import AssessmentResults from '../components/Assessment/AssessmentResults';

type AssessmentStep = 'onboarding' | 'selection' | 'questions' | 'results';

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

  const [currentStep, setCurrentStep] = useState<AssessmentStep>('onboarding');
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

  const handleStartNewAssessment = () => {
    clearUserData();
    setCurrentStep('onboarding');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'selection':
        setCurrentStep('onboarding');
        break;
      case 'questions':
        setCurrentStep('selection');
        break;
      default:
        break;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
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
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <Helmet>
          <title>ISO Assessment - AU ISO Assessment Platform</title>
          <meta name="description" content="Take a comprehensive assessment to find the right ISO standards for your organization" />
        </Helmet>

        <div className="max-w-4xl mx-auto">
          {currentStep !== 'results' && (
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">ISO Standards Assessment</h1>
              <p className="text-lg text-gray-600">
                Get personalized recommendations for ISO standards that match your organization's needs
              </p>
            </div>
          )}

          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage; 