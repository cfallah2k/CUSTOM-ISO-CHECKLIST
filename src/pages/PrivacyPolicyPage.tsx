import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, company details) when you register or contact us',
        'Assessment data and responses to help provide ISO recommendations',
        'Usage data to improve our platform and services',
        'Technical information about your device and browser'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Provide personalized ISO standards recommendations',
        'Improve our AI-powered assessment platform',
        'Send relevant updates and resources about ISO standards',
        'Respond to your inquiries and provide support',
        'Analyze usage patterns to enhance user experience'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information',
        'Information may be shared with trusted partners who assist in platform operation',
        'Data may be disclosed if required by law or to protect our rights',
        'Aggregated, anonymized data may be used for research and improvement'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures',
        'Your data is encrypted during transmission and storage',
        'Regular security audits and updates are performed',
        'Access to personal data is limited to authorized personnel only'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request correction of inaccurate data',
        'Delete your account and associated data',
        'Opt-out of marketing communications',
        'Export your data in a portable format'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use essential cookies for platform functionality',
        'Analytics cookies help us improve our services',
        'You can control cookie preferences in your browser settings',
        'Third-party services may use cookies for analytics'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Privacy Policy - StandardAccess</title>
        <meta name="description" content="Privacy Policy for StandardAccess - AI-Powered ISO Guidance Tool for MSMEs" />
      </Helmet>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                StandardAccess ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered ISO guidance platform.
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
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@standardaccess.com</p>
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

export default PrivacyPolicyPage; 