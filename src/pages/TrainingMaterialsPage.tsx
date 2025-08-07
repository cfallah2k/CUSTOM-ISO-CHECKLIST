import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  PlayIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const TrainingMaterialsPage: React.FC = () => {
  const trainingCourses = [
    {
      title: 'ISO 9001 Foundation Course',
      description: 'Complete introduction to Quality Management Systems and ISO 9001 requirements',
      duration: '8 hours',
      level: 'Beginner',
      rating: 4.8,
      students: '2,450',
      format: 'Video + PDF',
      features: ['Comprehensive overview', 'Real-world examples', 'Interactive quizzes', 'Certificate included'],
      href: '/resources/training/iso-9001-foundation'
    },
    {
      title: 'ISO 27001 Information Security',
      description: 'In-depth training on Information Security Management Systems',
      duration: '12 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: '1,890',
      format: 'Video + PDF',
      features: ['Risk assessment', 'Security controls', 'Implementation guide', 'Case studies'],
      href: '/resources/training/iso-27001-security'
    },
    {
      title: 'ISO 14001 Environmental Management',
      description: 'Environmental Management System training for organizations',
      duration: '10 hours',
      level: 'Intermediate',
      rating: 4.7,
      students: '1,670',
      format: 'Video + PDF',
      features: ['Environmental aspects', 'Compliance requirements', 'Monitoring procedures', 'Best practices'],
      href: '/resources/training/iso-14001-environmental'
    },
    {
      title: 'ISO 45001 Safety Management',
      description: 'Occupational Health and Safety Management System training',
      duration: '9 hours',
      level: 'Intermediate',
      rating: 4.6,
      students: '1,340',
      format: 'Video + PDF',
      features: ['Hazard identification', 'Risk assessment', 'Safety procedures', 'Emergency response'],
      href: '/resources/training/iso-45001-safety'
    },
    {
      title: 'ISO 50001 Energy Management',
      description: 'Energy Management System implementation training',
      duration: '7 hours',
      level: 'Intermediate',
      rating: 4.5,
      students: '890',
      format: 'Video + PDF',
      features: ['Energy baseline', 'Performance indicators', 'Monitoring systems', 'Improvement strategies'],
      href: '/resources/training/iso-50001-energy'
    },
    {
      title: 'ISO 22301 Business Continuity',
      description: 'Business Continuity Management System training',
      duration: '11 hours',
      level: 'Advanced',
      rating: 4.7,
      students: '720',
      format: 'Video + PDF',
      features: ['Business impact analysis', 'Recovery strategies', 'Testing procedures', 'Documentation'],
      href: '/resources/training/iso-22301-bcm'
    }
  ];

  const categories = [
    { name: 'Foundation Courses', count: 12, color: 'from-blue-500 to-cyan-500' },
    { name: 'Advanced Training', count: 8, color: 'from-purple-500 to-pink-500' },
    { name: 'Specialized Topics', count: 15, color: 'from-green-500 to-emerald-500' },
    { name: 'Certification Prep', count: 6, color: 'from-orange-500 to-red-500' },
    { name: 'Webinars', count: 20, color: 'from-yellow-500 to-orange-500' },
    { name: 'Workshops', count: 10, color: 'from-teal-500 to-green-500' }
  ];

  const featuredMaterials = [
    {
      title: 'ISO Standards Overview Webinar',
      type: 'Webinar',
      duration: '1 hour',
      attendees: '1,200+',
      rating: 4.9
    },
    {
      title: 'Implementation Best Practices',
      type: 'Workshop',
      duration: '3 hours',
      attendees: '450+',
      rating: 4.8
    },
    {
      title: 'Audit Preparation Guide',
      type: 'Guide',
      duration: '2 hours',
      attendees: '890+',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Training Materials - StandardAccess</title>
        <meta name="description" content="Comprehensive training materials and courses for ISO standards implementation" />
      </Helmet>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Training Materials
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            & Educational Resources
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive training materials designed to help you understand and implement ISO standards effectively. 
            From beginner courses to advanced workshops.
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
                  <AcademicCapIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} courses</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Materials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Training Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMaterials.map((material, index) => (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {material.type}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm font-medium mr-1">{material.rating}</span>
                    <StarIcon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{material.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {material.duration}
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    {material.attendees}
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                  Access Material
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Courses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trainingCourses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {course.level}
                </span>
                <div className="flex items-center text-yellow-500">
                  <span className="text-sm font-medium mr-1">{course.rating}</span>
                  <StarIcon className="h-4 w-4" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Duration:</span>
                  <div className="text-gray-600">{course.duration}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Students:</span>
                  <div className="text-gray-600">{course.students}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Format:</span>
                  <div className="text-gray-600">{course.format}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Level:</span>
                  <div className="text-gray-600">{course.level}</div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Course Features:</h4>
                <ul className="space-y-1">
                  {course.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <PlayIcon className="h-3 w-3 text-primary-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={course.href}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Start Course
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
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our comprehensive training materials are designed to make ISO standards accessible and implementable for African organizations.
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

export default TrainingMaterialsPage; 