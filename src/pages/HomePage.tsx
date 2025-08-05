import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  ChartBarIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import HeroSection from '../components/Home/HeroSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import StatisticsSection from '../components/Home/StatisticsSection';
import CTASection from '../components/Home/CTASection';

const HomePage: React.FC = () => {
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

  return (
    <>
      <Helmet>
        <title>AU ISO Fellowship Platform - African Union EAN Fellowship Program</title>
        <meta name="description" content="Comprehensive ISO standards guidance for African professionals across all sectors. Join the African Union EAN Fellowship Program to advance your career and contribute to Africa's development." />
        <meta name="keywords" content="ISO standards, African Union, EAN Fellowship, quality management, environmental management, information security, occupational health and safety, Africa, professional development" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* How It Works Section */}
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
                How It Works
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive platform guides you through every step of ISO implementation, from initial assessment to certification.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assess Your Needs',
                  description: 'Take our comprehensive assessment to identify which ISO standards are most relevant to your sector and organization.',
                  icon: ChartBarIcon,
                },
                {
                  step: '02',
                  title: 'Learn & Plan',
                  description: 'Access detailed guides, templates, and resources to understand implementation requirements and create your roadmap.',
                  icon: AcademicCapIcon,
                },
                {
                  step: '03',
                  title: 'Implement & Monitor',
                  description: 'Follow step-by-step implementation guides with progress tracking and milestone monitoring.',
                  icon: ShieldCheckIcon,
                },
                {
                  step: '04',
                  title: 'Certify & Maintain',
                  description: 'Navigate the certification process and learn how to maintain compliance for long-term success.',
                  icon: LightBulbIcon,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from African professionals who have successfully implemented ISO standards in their organizations.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dr. Sarah Mwangi',
                  role: 'Quality Manager',
                  company: 'Kenya Tea Development Agency',
                  country: 'Kenya',
                  testimonial: 'The AU ISO Fellowship platform provided comprehensive guidance that helped us achieve ISO 9001 certification in just 8 months. The African context made all the difference.',
                  achievement: 'ISO 9001 Certified',
                  photo: '/testimonials/sarah-mwangi.jpg',
                },
                {
                  name: 'Emmanuel Osei',
                  role: 'Environmental Officer',
                  company: 'Ghana Cocoa Board',
                  country: 'Ghana',
                  testimonial: 'Implementing ISO 14001 was challenging, but the platform\'s step-by-step guidance and local resources made it achievable. Our environmental impact has improved significantly.',
                  achievement: 'ISO 14001 Certified',
                  photo: '/testimonials/emmanuel-osei.jpg',
                },
                {
                  name: 'Fatima Hassan',
                  role: 'IT Security Manager',
                  company: 'Nigerian Banking Corporation',
                  country: 'Nigeria',
                  testimonial: 'The ISO 27001 implementation guide was invaluable. We now have robust information security practices that meet international standards while being cost-effective.',
                  achievement: 'ISO 27001 Certified',
                  photo: '/testimonials/fatima-hassan.jpg',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={itemVariants}
                  className="card p-6 hover:shadow-large transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}, {testimonial.country}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center justify-between">
                    <span className="badge-success">{testimonial.achievement}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
};

export default HomePage; 