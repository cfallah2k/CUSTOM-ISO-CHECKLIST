import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  ArrowRightIcon,
  ArrowDownTrayIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ImplementationGuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'ISO 9001:2015 Quality Management System',
      description: 'Complete implementation guide for Quality Management Systems',
      duration: '8-12 months',
      difficulty: 'Intermediate',
      downloads: '3,450',
      rating: 4.8,
      features: ['Step-by-step implementation', 'Documentation templates', 'Audit preparation', 'Case studies'],
      href: '/resources/guides/iso-9001'
    },
    {
      title: 'ISO 14001:2015 Environmental Management',
      description: 'Environmental Management System implementation guide',
      duration: '6-10 months',
      difficulty: 'Intermediate',
      downloads: '2,890',
      rating: 4.7,
      features: ['Environmental impact assessment', 'Compliance checklists', 'Monitoring procedures', 'Reporting templates'],
      href: '/resources/guides/iso-14001'
    },
    {
      title: 'ISO 27001:2022 Information Security',
      description: 'Information Security Management System guide',
      duration: '10-14 months',
      difficulty: 'Advanced',
      downloads: '4,120',
      rating: 4.9,
      features: ['Risk assessment framework', 'Security controls', 'Incident response', 'Training materials'],
      href: '/resources/guides/iso-27001'
    },
    {
      title: 'ISO 45001:2018 Occupational Health & Safety',
      description: 'OH&S Management System implementation guide',
      duration: '8-12 months',
      difficulty: 'Intermediate',
      downloads: '2,340',
      rating: 4.6,
      features: ['Hazard identification', 'Risk assessment', 'Emergency procedures', 'Training programs'],
      href: '/resources/guides/iso-45001'
    },
    {
      title: 'ISO 50001:2018 Energy Management',
      description: 'Energy Management System implementation guide',
      duration: '6-9 months',
      difficulty: 'Intermediate',
      downloads: '1,890',
      rating: 4.5,
      features: ['Energy baseline establishment', 'Performance indicators', 'Monitoring systems', 'Improvement plans'],
      href: '/resources/guides/iso-50001'
    },
    {
      title: 'ISO 22301:2019 Business Continuity',
      description: 'Business Continuity Management System guide',
      duration: '9-12 months',
      difficulty: 'Advanced',
      downloads: '1,670',
      rating: 4.7,
      features: ['Business impact analysis', 'Recovery strategies', 'Testing procedures', 'Documentation templates'],
      href: '/resources/guides/iso-22301'
    }
  ];

  const categories = [
    { name: 'Quality Management', count: 8, color: 'from-blue-500 to-cyan-500' },
    { name: 'Environmental', count: 6, color: 'from-green-500 to-emerald-500' },
    { name: 'Information Security', count: 4, color: 'from-purple-500 to-pink-500' },
    { name: 'Health & Safety', count: 5, color: 'from-orange-500 to-red-500' },
    { name: 'Energy Management', count: 3, color: 'from-teal-500 to-green-500' },
    { name: 'Business Continuity', count: 3, color: 'from-indigo-500 to-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Implementation Guides - StandardAccess</title>
        <meta name="description" content="Comprehensive ISO implementation guides with step-by-step instructions, templates, and best practices" />
      </Helmet>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Implementation Guides
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              for ISO Standards
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Step-by-step implementation guides designed specifically for African organizations. 
            Each guide includes templates, checklists, and real-world examples.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <DocumentTextIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} guides</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guides Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {guide.difficulty}
                </span>
                <div className="flex items-center text-yellow-500">
                  <span className="text-sm font-medium mr-1">{guide.rating}</span>
                  <span className="text-xs">★</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{guide.description}</p>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {guide.duration}
                </div>
                <div className="flex items-center">
                  <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                  {guide.downloads}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {guide.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={guide.href}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View Guide
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need Custom Implementation Support?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our AI-powered platform can provide personalized implementation guidance based on your organization's specific needs.
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

export default ImplementationGuidesPage; 