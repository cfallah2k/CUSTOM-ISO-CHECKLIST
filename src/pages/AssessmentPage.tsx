import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { useUser } from '../context/UserContext';
import UserOnboarding from '../components/Assessment/UserOnboarding';
import StandardSelection from '../components/Assessment/StandardSelection';
import AssessmentQuestions from '../components/Assessment/AssessmentQuestions';
import AssessmentResults from '../components/Assessment/AssessmentResults';
import CompanyProfileForm from '../components/Assessment/CompanyProfileForm';
import ComplianceChecklist from '../components/Assessment/ComplianceChecklist';

type AssessmentStep = 'onboarding' | 'selection' | 'questions' | 'results' | 'profile' | 'checklist';

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
            onProfileUpdate={handleProfileComplete}
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
      <div className="container-custom">
        <Helmet>
          <title>ISO Assessment - AU ISO Assessment Platform</title>
          <meta name="description" content="Take a comprehensive assessment to find the right ISO standards for your organization" />
        </Helmet>

        <div className="max-w-4xl mx-auto">
          {currentStep !== 'results' && currentStep !== 'checklist' && (
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
    </div>
  );
};

export default AssessmentPage; 