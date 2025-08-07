import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ClipboardDocumentListIcon,
  ArrowRightIcon,
  ArrowDownTrayIcon,
  DocumentIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const TemplatesPage: React.FC = () => {
  const templates = [
    {
      title: 'ISO 9001 Quality Manual Template',
      description: 'Complete Quality Management System manual template with all required clauses',
      standard: 'ISO 9001:2015',
      downloads: '5,230',
      rating: 4.9,
      fileSize: '2.3 MB',
      format: 'Word/PDF',
      features: ['All required clauses', 'Customizable sections', 'Examples included', 'Audit-ready'],
      href: '/resources/templates/iso-9001-manual'
    },
    {
      title: 'ISO 27001 ISMS Documentation Set',
      description: 'Complete Information Security Management System documentation templates',
      standard: 'ISO 27001:2022',
      downloads: '4,120',
      rating: 4.8,
      fileSize: '3.1 MB',
      format: 'Word/PDF',
      features: ['Security policies', 'Risk assessment', 'Incident response', 'Training materials'],
      href: '/resources/templates/iso-27001-docs'
    },
    {
      title: 'ISO 14001 Environmental Procedures',
      description: 'Environmental Management System procedures and forms',
      standard: 'ISO 14001:2015',
      downloads: '3,890',
      rating: 4.7,
      fileSize: '1.8 MB',
      format: 'Word/PDF',
      features: ['Environmental aspects', 'Compliance procedures', 'Monitoring forms', 'Reporting templates'],
      href: '/resources/templates/iso-14001-procedures'
    },
    {
      title: 'ISO 45001 Safety Management Templates',
      description: 'Occupational Health and Safety Management System templates',
      standard: 'ISO 45001:2018',
      downloads: '3,450',
      rating: 4.6,
      fileSize: '2.5 MB',
      format: 'Word/PDF',
      features: ['Hazard identification', 'Risk assessment', 'Emergency procedures', 'Training records'],
      href: '/resources/templates/iso-45001-safety'
    },
    {
      title: 'ISO 50001 Energy Management Forms',
      description: 'Energy Management System forms and monitoring templates',
      standard: 'ISO 50001:2018',
      downloads: '2,340',
      rating: 4.5,
      fileSize: '1.6 MB',
      format: 'Word/PDF',
      features: ['Energy baseline', 'Performance indicators', 'Monitoring forms', 'Improvement plans'],
      href: '/resources/templates/iso-50001-energy'
    },
    {
      title: 'ISO 22301 Business Continuity Kit',
      description: 'Business Continuity Management System documentation kit',
      standard: 'ISO 22301:2019',
      downloads: '1,890',
      rating: 4.7,
      fileSize: '2.8 MB',
      format: 'Word/PDF',
      features: ['Business impact analysis', 'Recovery procedures', 'Testing templates', 'Documentation guide'],
      href: '/resources/templates/iso-22301-bcm'
    }
  ];

  const categories = [
    { name: 'Quality Management', count: 25, color: 'from-blue-500 to-cyan-500' },
    { name: 'Information Security', count: 18, color: 'from-purple-500 to-pink-500' },
    { name: 'Environmental', count: 15, color: 'from-green-500 to-emerald-500' },
    { name: 'Health & Safety', count: 12, color: 'from-orange-500 to-red-500' },
    { name: 'Energy Management', count: 8, color: 'from-yellow-500 to-orange-500' },
    { name: 'Business Continuity', count: 6, color: 'from-teal-500 to-green-500' }
  ];

  const popularTemplates = [
    {
      title: 'Internal Audit Checklist',
      downloads: '8,450',
      rating: 4.9
    },
    {
      title: 'Management Review Agenda',
      downloads: '6,230',
      rating: 4.8
    },
    {
      title: 'Corrective Action Form',
      downloads: '5,890',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Templates - StandardAccess</title>
        <meta name="description" content="Ready-to-use ISO documentation templates for all standards" />
      </Helmet>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            ISO Templates
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            & Documentation Tools
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use templates for ISO standards implementation. 
            Save time with professionally designed documentation templates.
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
                  <ClipboardDocumentListIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} templates</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Templates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Most Popular Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularTemplates.map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    Popular
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm font-medium mr-1">{template.rating}</span>
                    <StarIcon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                    {template.downloads} downloads
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                  Download Template
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {template.standard}
                </span>
                <div className="flex items-center text-yellow-500">
                  <span className="text-sm font-medium mr-1">{template.rating}</span>
                  <StarIcon className="h-4 w-4" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{template.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Downloads:</span>
                  <div className="text-gray-600">{template.downloads}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">File Size:</span>
                  <div className="text-gray-600">{template.fileSize}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Format:</span>
                  <div className="text-gray-600">{template.format}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Standard:</span>
                  <div className="text-gray-600">{template.standard}</div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {template.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={template.href}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Download Template
                <ArrowDownTrayIcon className="h-4 w-4 ml-2" />
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
          <h2 className="text-2xl font-bold mb-4">Need Custom Templates?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our AI-powered platform can generate customized templates based on your organization's specific needs and industry requirements.
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

export default TemplatesPage; 