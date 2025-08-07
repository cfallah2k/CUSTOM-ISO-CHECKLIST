import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const TermsOfServicePage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using StandardAccess, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, please do not use our platform',
        'We reserve the right to modify these terms at any time with notice to users'
      ]
    },
    {
      title: 'Description of Service',
      content: [
        'StandardAccess provides AI-powered ISO standards assessment and guidance',
        'We offer implementation guides, templates, case studies, and training materials',
        'Our platform is designed specifically for African MSMEs and organizations',
        'Services include assessment tools, AI recommendations, and educational resources'
      ]
    },
    {
      title: 'User Responsibilities',
      content: [
        'Provide accurate and complete information during assessments',
        'Use the platform for legitimate business purposes only',
        'Maintain the confidentiality of your account credentials',
        'Comply with all applicable laws and regulations',
        'Not attempt to reverse engineer or compromise platform security'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content on StandardAccess is owned by us or our licensors',
        'Users retain ownership of their assessment data and responses',
        'You may use our resources for your organization\'s ISO implementation',
        'Redistribution of our content requires written permission',
        'Our AI algorithms and platform technology are proprietary'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'Our recommendations are for guidance purposes only',
        'We are not responsible for implementation outcomes or certification results',
        'Users should consult with qualified ISO experts for final decisions',
        'We provide no warranty of merchantability or fitness for purpose',
        'Liability is limited to the amount paid for our services'
      ]
    },
    {
      title: 'Data and Privacy',
      content: [
        'We collect and process data as described in our Privacy Policy',
        'Assessment data is used to provide personalized recommendations',
        'We implement appropriate security measures to protect your data',
        'You may request deletion of your data at any time',
        'We do not sell your personal information to third parties'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Terms of Service - StandardAccess</title>
        <meta name="description" content="Terms of Service for StandardAccess - AI-Powered ISO Guidance Tool for MSMEs" />
      </Helmet>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Please read these terms carefully before using StandardAccess. These terms govern your use of our platform.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: January 2024
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                These Terms of Service ("Terms") govern your use of StandardAccess, an AI-powered ISO guidance platform designed for African MSMEs. By using our platform, you agree to these terms.
              </p>

              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <ul className="space-y-2 text-gray-600">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12 p-6 bg-gray-50 rounded-lg"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@standardaccess.com</p>
                  <p><strong>Phone:</strong> +234-803-516-7763</p>
                  <p><strong>Address:</strong> Lagos, Nigeria</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 