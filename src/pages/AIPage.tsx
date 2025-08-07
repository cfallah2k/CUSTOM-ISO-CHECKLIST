import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import AIComplianceAssistant from '../components/AI/AIComplianceAssistant';
import AIPredictiveAnalytics from '../components/AI/AIPredictiveAnalytics';
import ComplianceChecklist from '../components/Assessment/ComplianceChecklist';
import CompanyProfileForm from '../components/Assessment/CompanyProfileForm';

type AISection = 'overview' | 'assistant' | 'analytics' | 'checklist' | 'profile';

const AIPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AISection>('overview');
  const [companyProfile, setCompanyProfile] = useState({
    name: '',
    industry: '',
    size: 'SME' as 'Startup' | 'SME' | 'Enterprise',
    maturityLevel: 'Basic' as 'Basic' | 'Intermediate' | 'Advanced',
    description: '',
    selectedStandards: [] as string[]
  });

  const handleProfileComplete = (profile: any) => {
    setCompanyProfile(profile);
    setCurrentSection('checklist');
  };

  const handleChecklistExport = (format: 'pdf' | 'csv') => {
    console.log(`Exporting checklist as ${format}`);
  };

  const handleChecklistSave = (checklist: any[]) => {
    console.log('Saving checklist:', checklist);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'assistant':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <button
                onClick={() => setCurrentSection('overview')}
                className="flex items-center text-primary-600 hover:text-primary-700 mb-4"
              >
                <ArrowRightIcon className="h-4 w-4 mr-2 rotate-180" />
                Back to AI Overview
              </button>
            </div>
            <AIComplianceAssistant
              companyProfile={companyProfile}
              selectedStandards={companyProfile.selectedStandards || []}
              currentChecklist={[]}
              onRecommendation={(recommendation) => {
                console.log('AI Recommendation:', recommendation);
              }}
            />
          </div>
        );

      case 'analytics':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <button
                onClick={() => setCurrentSection('overview')}
                className="flex items-center text-primary-600 hover:text-primary-700 mb-4"
              >
                <ArrowRightIcon className="h-4 w-4 mr-2 rotate-180" />
                Back to AI Overview
              </button>
            </div>
            <AIPredictiveAnalytics
              companyProfile={companyProfile}
              selectedStandards={companyProfile.selectedStandards || []}
              currentProgress={0}
            />
          </div>
        );

      case 'profile':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <button
                onClick={() => setCurrentSection('overview')}
                className="flex items-center text-primary-600 hover:text-primary-700 mb-4"
              >
                <ArrowRightIcon className="h-4 w-4 mr-2 rotate-180" />
                Back to AI Overview
              </button>
            </div>
            <CompanyProfileForm
              profile={companyProfile}
              onProfileUpdate={setCompanyProfile}
              onNext={handleProfileComplete}
            />
          </div>
        );

      case 'checklist':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <button
                onClick={() => setCurrentSection('overview')}
                className="flex items-center text-primary-600 hover:text-primary-700 mb-4"
              >
                <ArrowRightIcon className="h-4 w-4 mr-2 rotate-180" />
                Back to AI Overview
              </button>
            </div>
            <ComplianceChecklist
              companyProfile={companyProfile}
              onExport={handleChecklistExport}
              onSave={handleChecklistSave}
            />
          </div>
        );

      default:
        return (
          <div className="container-custom">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                  <SparklesIcon className="h-4 w-4 mr-2" />
                  AI-Powered ISO Guidance
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                AI Assistant
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  for ISO Compliance
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto"
              >
                Get intelligent AI recommendations, predictive analytics, and personalized guidance
                for seamless ISO implementation. Powered by advanced machine learning.
              </motion.p>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                onClick={() => setCurrentSection('assistant')}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Compliance Assistant</h3>
                <p className="text-gray-600 mb-4">Get personalized guidance and recommendations for your ISO implementation journey.</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>Start Chat</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                onClick={() => setCurrentSection('analytics')}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">AI-powered insights for implementation success and cost optimization.</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <span>View Analytics</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                onClick={() => setCurrentSection('profile')}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardDocumentListIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Checklist</h3>
                <p className="text-gray-600 mb-4">Track your ISO compliance implementation progress with AI-powered checklists.</p>
                <div className="flex items-center text-purple-600 text-sm font-medium">
                  <span>Create Checklist</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <CogIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Recommendations</h3>
                <p className="text-gray-600 mb-4">Intelligent recommendations based on your company profile and industry.</p>
                <div className="flex items-center text-orange-600 text-sm font-medium">
                  <span>Coming Soon</span>
                  <CheckCircleIcon className="h-4 w-4 ml-1" />
                </div>
              </motion.div>
            </div>

            {/* Enhanced Features Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-blue-600 mr-2" />
                  AI-Powered Chat Assistant
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                    Real-time ISO guidance and answers
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                    Personalized recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                    Context-aware responses
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                    24/7 availability
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <DocumentTextIcon className="h-5 w-5 text-green-600 mr-2" />
                  Smart Compliance Tracking
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                    AI-generated checklists
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                    Progress tracking and analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                    Export to PDF/CSV
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                    Priority-based recommendations
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-6">Begin your ISO compliance journey with AI-powered guidance.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setCurrentSection('assistant')}
                    className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                    Start AI Chat
                  </button>
                  <button 
                    onClick={() => setCurrentSection('profile')}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
                    Create Checklist
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>AI Assistant - StandardAccess</title>
        <meta name="description" content="AI-powered ISO guidance and compliance assistance" />
      </Helmet>

      {renderSection()}
    </div>
  );
};

export default AIPage; 