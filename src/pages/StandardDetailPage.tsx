import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PlayIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import { isoStandards } from '../data/isoStandards';

const StandardDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const standard = isoStandards.find(s => s.id === id);

  if (!standard) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Standard Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The ISO standard you're looking for doesn't exist.
          </p>
          <Link to="/standards" className="btn-primary">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Standards
          </Link>
        </div>
      </div>
    );
  }

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

  return (
    <>
      <Helmet>
        <title>{standard.code} - {standard.name} | AU ISO Assessment Platform</title>
        <meta name="description" content={standard.description} />
      </Helmet>
      
      <div className="section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link to="/standards" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Standards
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-white rounded-xl shadow-soft p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="badge-primary">{standard.category.name}</span>
                    </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                      {standard.code}
            </h1>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      {standard.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                  <div className="ml-8">
                    <div className="text-center p-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white">
                      <BookOpenIcon className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-2xl font-bold mb-2">{standard.resources.length}</div>
                      <div className="text-sm opacity-90">Resources Available</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <ShieldCheckIcon className="h-6 w-6 text-success-600" />
                    <div>
                      <div className="font-semibold text-gray-900">{standard.popularity}</div>
                      <div className="text-sm text-gray-600">Organizations Certified</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="h-6 w-6 text-primary-600" />
                    <div>
                      <div className="font-semibold text-gray-900">{standard.timeline.total}</div>
                      <div className="text-sm text-gray-600">Implementation Time</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <UserGroupIcon className="h-6 w-6 text-secondary-600" />
                    <div>
                      <div className="font-semibold text-gray-900">{standard.sector.length}</div>
                      <div className="text-sm text-gray-600">Applicable Sectors</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Key Benefits */}
                <motion.div variants={itemVariants} className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <LightBulbIcon className="h-6 w-6 text-accent-600 mr-2" />
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {standard.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Implementation Steps */}
                <motion.div variants={itemVariants} className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <AcademicCapIcon className="h-6 w-6 text-primary-600 mr-2" />
                    Implementation Steps
                  </h3>
                  <div className="space-y-4">
                    {standard.implementation.map((step: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Case Studies */}
                {standard.caseStudies && standard.caseStudies.length > 0 && (
                  <motion.div variants={itemVariants} className="card p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <DocumentTextIcon className="h-6 w-6 text-secondary-600 mr-2" />
                      African Case Studies
                    </h3>
                    <div className="space-y-6">
                      {standard.caseStudies.map((study, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{study.title}</h4>
                          <p className="text-gray-600 mb-3">{study.challenge}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="badge-success">{study.country}</span>
                            <span className="text-gray-500">{study.sector}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Applicable Sectors */}
                <motion.div variants={itemVariants} className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable Sectors</h3>
                  <div className="space-y-2">
                    {standard.sector.map((sector) => (
                      <span key={sector.id} className="badge-secondary block text-center">
                        {sector.name}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div variants={itemVariants} className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full btn-primary flex items-center justify-center">
                      <PlayIcon className="h-5 w-5 mr-2" />
                      Watch Implementation Guide
                    </button>
                    <button className="w-full btn-outline flex items-center justify-center">
                      <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                      Download Templates
                    </button>
                    <Link
                      to="/assessment"
                      className="w-full btn-secondary flex items-center justify-center"
                    >
                      <AcademicCapIcon className="h-5 w-5 mr-2" />
                      Take Assessment
                    </Link>
                  </div>
                </motion.div>

                {/* Related Resources */}
                <motion.div variants={itemVariants} className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h3>
                  <div className="space-y-3">
                    <Link to="/resources" className="block text-primary-600 hover:text-primary-700 font-medium">
                      Implementation Templates
                    </Link>
                    <Link to="/resources" className="block text-primary-600 hover:text-primary-700 font-medium">
                      Best Practices Guide
                    </Link>
                    <Link to="/resources" className="block text-primary-600 hover:text-primary-700 font-medium">
                      Certification Checklist
                    </Link>
                    <Link to="/assessment" className="block text-primary-600 hover:text-primary-700 font-medium">
                      Expert Mentorship
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StandardDetailPage; 