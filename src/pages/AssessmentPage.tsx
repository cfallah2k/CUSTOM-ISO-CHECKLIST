import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const AssessmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ISO Assessment - AU ISO Fellowship Platform</title>
        <meta name="description" content="Take our comprehensive assessment to identify the most relevant ISO standards for your organization." />
      </Helmet>
      
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ISO Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take our comprehensive assessment to identify the most relevant ISO standards for your organization.
            </p>
            <div className="mt-8">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                <p className="text-lg opacity-90">
                  Our AI-powered assessment tool is under development. 
                  This will help identify the most relevant ISO standards for your organization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AssessmentPage; 