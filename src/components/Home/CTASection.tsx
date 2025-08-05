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
      icon: UserPlusIcon,
      title: 'Join Fellowship',
      description: 'Apply for the African Union EAN Fellowship Program and connect with mentors and peers.',
      action: 'Apply Now',
      href: '/fellowship',
      color: 'from-secondary-600 to-secondary-700',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: GlobeAltIcon,
      title: 'Explore Standards',
      description: 'Browse our comprehensive library of ISO standards with detailed implementation guides.',
      action: 'Browse Standards',
      href: '/standards',
      color: 'from-accent-600 to-accent-700',
      bgColor: 'bg-accent-50',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your path to ISO excellence. Whether you're just starting or ready to advance, 
            we have the resources and support you need.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={itemVariants}
              className="group"
            >
              <div className={`card p-8 h-full ${option.bgColor} hover:shadow-large transition-all duration-300 group-hover:transform group-hover:scale-105`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                <Link
                  to={option.href}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${option.color} hover:shadow-medium transition-all duration-300 group-hover:transform group-hover:translate-x-1`}
                >
                  {option.action}
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Organization with ISO Standards
            </h3>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Join thousands of African professionals who have successfully implemented ISO standards 
              and achieved international recognition for their organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/assessment"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center group"
              >
                Start Free Assessment
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center group">
                <PlayIcon className="h-5 w-5 mr-2" />
                Watch Platform Demo
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Free Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Expert Support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.p variants={itemVariants} className="text-gray-500 mb-8">
            Trusted by organizations across Africa
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center space-x-8 md:space-x-16 opacity-60"
          >
            {[
              'African Union Commission',
              'African Development Bank',
              'UN Economic Commission for Africa',
              'African Standards Organization',
              'Regional Economic Communities',
            ].map((partner, index) => (
              <div key={partner} className="text-gray-400 font-medium text-sm">
                {partner}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 