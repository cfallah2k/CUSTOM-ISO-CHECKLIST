import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  PlayIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const HeroSection: React.FC = () => {
  console.log('HeroSection rendering...');

  try {
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
      <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 container-custom min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white/90 backdrop-blur-sm">
                  <AcademicCapIcon className="h-4 w-4 mr-2" />
                  African Union EAN Fellowship Program
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Empowering African
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Professionals
                </span>
                Through ISO Excellence
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              >
                Comprehensive ISO standards guidance, implementation support, and certification pathways 
                designed specifically for African organizations and professionals.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Link
                  to="/assessment"
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-100 flex items-center justify-center group"
                >
                  Start Your Assessment
                  <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 flex items-center justify-center group">
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
                  <span className="text-sm">Trusted by 15K+ Professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GlobeAltIcon className="h-5 w-5" />
                  <span className="text-sm">54 African Countries</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Elements */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: AcademicCapIcon, label: 'ISO Standards', value: '50+' },
                      { icon: ShieldCheckIcon, label: 'Certifications', value: '3,247+' },
                      { icon: GlobeAltIcon, label: 'Countries', value: '54' },
                      { icon: AcademicCapIcon, label: 'Professionals', value: '15K+' },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        className="text-center text-white"
                      >
                        <stat.icon className="h-8 w-8 mx-auto mb-2 text-white/80" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-white/70">{stat.label}</div>
                      </motion.div>
                    ))}
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
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20"
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
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20"
              />
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
      <section className="min-h-screen bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome to AU ISO Fellowship Platform</h1>
          <p className="text-xl mb-6">Empowering African professionals through ISO excellence</p>
          <Link to="/assessment" className="btn-primary bg-white text-primary-600">
            Start Your Assessment
          </Link>
        </div>
      </section>
    );
  }
};

export default HeroSection; 