import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  PlayIcon,
  UserPlusIcon,
  AcademicCapIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const CTASection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const ctaOptions = [
    {
      icon: AcademicCapIcon,
      title: 'Start Assessment',
      description: 'Take our comprehensive assessment to identify the most relevant ISO standards for your organization.',
      action: 'Begin Assessment',
      href: '/assessment',
      color: 'from-primary-600 to-primary-700',
      bgColor: 'bg-primary-50',
    },
    {
      icon: GlobeAltIcon,
      title: 'Explore Standards',
      description: 'Browse our comprehensive library of ISO standards with detailed implementation guides.',
      action: 'Browse Standards',
      href: '/standards',
      color: 'from-secondary-600 to-secondary-700',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: UserPlusIcon,
      title: 'Sector Guidance',
      description: 'Find sector-specific ISO guidance tailored to your industry and business needs.',
      action: 'View Sectors',
      href: '/sectors',
      color: 'from-accent-600 to-accent-700',
      bgColor: 'bg-accent-50',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Organization?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your path to ISO excellence and start your journey towards international standards compliance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={itemVariants}
              className={`${option.bgColor} rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-6`}>
                <option.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>
              
              <Link
                to={option.href}
                className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${option.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5`}
              >
                {option.action}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Expert Guidance?
            </h3>
            <p className="text-lg lg:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Access our comprehensive resources library with implementation guides, templates, and case studies from successful African organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Resources
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                <PlayIcon className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 