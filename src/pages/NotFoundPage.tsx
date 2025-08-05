import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - AU ISO Fellowship Platform</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="btn-primary flex items-center"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline flex items-center"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Go Back
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'ISO Standards',
                  description: 'Browse our comprehensive library of ISO standards',
                  href: '/standards',
                },
                {
                  title: 'Assessment',
                  description: 'Take our assessment to find relevant standards',
                  href: '/assessment',
                },
                {
                  title: 'Fellowship',
                  description: 'Join the African Union EAN Fellowship Program',
                  href: '/fellowship',
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="card p-6 hover:shadow-large transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage; 