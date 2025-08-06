import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const HeroSection: React.FC = () => {
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

  try {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/90 to-secondary-600/90">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"></div>
          </div>
        </div>

        <div className="relative z-10 container-custom min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white/90 backdrop-blur-sm">
                  <SparklesIcon className="h-4 w-4 mr-2" />
                  AI-Powered ISO Compliance Platform
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                World's First AI-Powered
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-100">
                  ISO Compliance Platform
                </span>
                for African Organizations
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
              >
                Get intelligent AI recommendations, predictive analytics, and automated checklist generation 
                for seamless ISO implementation. Powered by advanced machine learning for optimal results.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Link
                  to="/assessment"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Start Your Assessment
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <button className="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center border-white text-white hover:bg-white hover:text-primary-600">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-6 text-white/80"
              >
                <div className="flex items-center">
                  <GlobeAltIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm">Trusted by 15K+ Professionals</span>
                </div>
                <div className="flex items-center">
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm">54 African Countries</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              variants={itemVariants}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GlobeAltIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">ISO Assessment Platform</h3>
                    <p className="text-white/80 mb-4">Comprehensive evaluation of your organization's readiness for ISO standards implementation</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Quality Management</span>
                        <span className="text-secondary-300">✓</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Environmental</span>
                        <span className="text-secondary-300">✓</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Information Security</span>
                        <span className="text-secondary-300">✓</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full opacity-60"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection error:', error);
    return (
      <section className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome to AU ISO Assessment Platform</h1>
          <p className="text-xl mb-6">Empowering African organizations through ISO excellence</p>
          <Link to="/assessment" className="btn-primary bg-white text-primary-600">
            Start Your Assessment
          </Link>
        </div>
      </section>
    );
  }
};

export default HeroSection; 