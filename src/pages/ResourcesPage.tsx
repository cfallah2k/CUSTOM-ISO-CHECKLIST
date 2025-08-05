import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Resources - AU ISO Fellowship Platform</title>
        <meta name="description" content="Access comprehensive resources, templates, and guides for ISO standards implementation." />
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
              Resources Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive resources, templates, guides, and case studies for ISO standards implementation.
            </p>
            <div className="mt-8">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                <p className="text-lg opacity-90">
                  Our comprehensive resource library is under development. 
                  This will include templates, guides, case studies, and training materials.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage; 