import React from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const FeaturesSection: React.FC = () => {
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
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: MagnifyingGlassIcon,
      title: 'Comprehensive Assessment',
      description: 'AI-powered assessment tools to identify the most relevant ISO standards for your organization and sector.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: DocumentTextIcon,
      title: 'Detailed Implementation Guides',
      description: 'Step-by-step guides with templates, checklists, and best practices tailored for African contexts.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Mentorship',
      description: 'Connect with experienced ISO professionals and mentors from across Africa for personalized guidance.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ChartBarIcon,
      title: 'Progress Tracking',
      description: 'Monitor your implementation progress with real-time dashboards and milestone tracking.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: GlobeAltIcon,
      title: 'Regional Resources',
      description: 'Access to local case studies, regional partners, and African-specific implementation strategies.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Certification Support',
      description: 'Complete guidance through the certification process with accredited auditors and consultants.',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: AcademicCapIcon,
      title: 'Training Programs',
      description: 'Comprehensive training modules, webinars, and workshops led by industry experts.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Hub',
      description: 'Collaborate with fellow professionals, share experiences, and discover innovative approaches.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides everything you need to successfully implement ISO standards, 
            with a focus on African contexts and regional best practices.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="card p-6 h-full hover:shadow-large transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">50+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO Standards</h3>
            <p className="text-gray-600">Comprehensive coverage of all major ISO standards across quality, environmental, security, and safety management.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-success-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">94%</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Success Rate</h3>
            <p className="text-gray-600">High success rate in ISO certification among our platform users and assessment participants.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">24/7</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Available</h3>
            <p className="text-gray-600">Round-the-clock support from our team of experts and community of professionals.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 