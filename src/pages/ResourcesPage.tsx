import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  BookOpenIcon,
  ArrowRightIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Implementation Guides',
      description: 'Step-by-step guides for implementing ISO standards in your organization',
      icon: DocumentTextIcon,
      href: '/resources/guides',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      count: '25+ Guides'
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples of successful ISO implementations across Africa',
      icon: BookOpenIcon,
      href: '/resources/case-studies',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      count: '50+ Cases'
    },
    {
      title: 'Templates',
      description: 'Ready-to-use templates for documentation and compliance requirements',
      icon: ClipboardDocumentListIcon,
      href: '/resources/templates',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      count: '100+ Templates'
    },
    {
      title: 'Training Materials',
      description: 'Comprehensive training resources for ISO standards education',
      icon: AcademicCapIcon,
      href: '/resources/training',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      count: '75+ Materials'
    }
  ];

  const featuredResources = [
    {
      title: 'ISO 9001 Implementation Guide',
      description: 'Complete guide to implementing Quality Management Systems',
      type: 'Guide',
      downloadCount: '2,450',
      href: '/resources/guides/iso-9001'
    },
    {
      title: 'Nigerian Manufacturing Case Study',
      description: 'How a Nigerian manufacturer achieved ISO 9001 certification',
      type: 'Case Study',
      downloadCount: '1,890',
      href: '/resources/case-studies/nigerian-manufacturing'
    },
    {
      title: 'ISO 27001 Documentation Templates',
      description: 'Complete set of templates for Information Security Management',
      type: 'Templates',
      downloadCount: '3,200',
      href: '/resources/templates/iso-27001'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Resources - StandardAccess</title>
        <meta name="description" content="Comprehensive ISO resources including implementation guides, case studies, templates, and training materials" />
      </Helmet>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            ISO Resources
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              & Implementation Tools
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access comprehensive resources to help you implement ISO standards successfully. 
            From step-by-step guides to real-world case studies, we've got everything you need.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <Link to={category.href}>
                <div className={`${category.bgColor} rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group-hover:scale-105`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600">{category.count}</span>
                    <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {resource.type}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                    {resource.downloadCount}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <Link
                  to={resource.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  View Resource
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Access Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our comprehensive resources are designed to make ISO implementation accessible and successful for African organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/assessment"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Assessment
            </Link>
            <Link
              to="/ai"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              AI Assistant
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage; 