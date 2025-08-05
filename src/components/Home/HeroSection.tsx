import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  PlayIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm border border-white/30">
                <GlobeAltIcon className="h-4 w-4 mr-2" />
                African Union EAN Fellowship Program
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Empowering African
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Professionals
              </span>
              with ISO Standards
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
            >
              Comprehensive guidance for implementing international standards across all sectors. 
              Join thousands of African professionals advancing their careers and organizations.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                to="/assessment"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center group"
              >
                Start Your Assessment
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button className="btn-outline text-lg px-8 py-4 flex items-center justify-center group border-white text-white hover:bg-white hover:text-primary-600">
                <PlayIcon className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-8 text-white/80"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="h-5 w-5" />
                <span className="text-sm">50+ ISO Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <AcademicCapIcon className="h-5 w-5" />
                <span className="text-sm">10,000+ Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className="h-5 w-5" />
                <span className="text-sm">54 African Countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="card p-8 bg-white/95 backdrop-blur-sm shadow-2xl"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">AU</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ISO Fellowship Platform
                  </h3>
                  <p className="text-gray-600">
                    Your gateway to international standards
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: '🏭', title: 'Quality Management', standard: 'ISO 9001' },
                    { icon: '🌱', title: 'Environmental Management', standard: 'ISO 14001' },
                    { icon: '🔒', title: 'Information Security', standard: 'ISO 27001' },
                    { icon: '👷', title: 'Occupational Health & Safety', standard: 'ISO 45001' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.standard}</p>
                      </div>
                      <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Active Fellows</span>
                    <span className="font-semibold text-primary-600">2,847</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Certifications</span>
                    <span className="font-semibold text-success-600">1,234</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-accent-500 to-orange-500 text-white p-3 rounded-lg shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl">🏆</div>
                  <div className="text-xs font-medium">Success Rate</div>
                  <div className="text-lg font-bold">94%</div>
                </div>
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-secondary-500 to-purple-500 text-white p-3 rounded-lg shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl">🌍</div>
                  <div className="text-xs font-medium">Countries</div>
                  <div className="text-lg font-bold">54</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 