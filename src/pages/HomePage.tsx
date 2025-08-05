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
  console.log('HomePage rendering...');

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
        transition: {
          duration: 0.5
        }
      }
    };

    return (
      <>
        <Helmet>
          <title>AU ISO Assessment Platform - African Union ISO Standards Evaluation</title>
          <meta name="description" content="Comprehensive ISO standards assessment platform for African Union fellows. Evaluate which ISO standards match your business needs and get implementation guidance." />
          <meta name="keywords" content="ISO standards, African Union, assessment, evaluation, quality management, environmental management, information security, business compliance" />
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
                  How the Assessment Works
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive assessment helps AU fellows identify the most relevant ISO standards for their business needs.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Business Analysis',
                    description: 'Answer questions about your business sector, size, and current operations to understand your needs.',
                    icon: ChartBarIcon,
                  },
                  {
                    step: '02',
                    title: 'Standard Matching',
                    description: 'Our algorithm matches your business profile with the most relevant ISO standards.',
                    icon: AcademicCapIcon,
                  },
                  {
                    step: '03',
                    title: 'Implementation Guide',
                    description: 'Get detailed implementation steps, costs, and timeline for each recommended standard.',
                    icon: ShieldCheckIcon,
                  },
                  {
                    step: '04',
                    title: 'Action Plan',
                    description: 'Receive a customized action plan with priorities and next steps for implementation.',
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

          {/* Success Stories Section */}
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
                  Fellow Success Stories
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See how other AU fellows have used our assessment to identify and implement the right ISO standards.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Sarah Mwangi',
                    role: 'Business Owner',
                    company: 'Kenya Tea Development Agency',
                    country: 'Kenya',
                    testimonial: 'The assessment helped me identify that ISO 9001 was perfect for our quality management needs. The implementation guide was invaluable.',
                    achievement: 'ISO 9001 Certified',
                    photo: '/testimonials/sarah-mwangi.jpg',
                  },
                  {
                    name: 'Emmanuel Osei',
                    role: 'Operations Manager',
                    company: 'Ghana Cocoa Board',
                    country: 'Ghana',
                    testimonial: 'Through the assessment, I discovered ISO 14001 was essential for our environmental compliance. The step-by-step guidance made implementation smooth.',
                    achievement: 'ISO 14001 Certified',
                    photo: '/testimonials/emmanuel-osei.jpg',
                  },
                  {
                    name: 'Fatima Hassan',
                    role: 'IT Director',
                    company: 'Nigerian Banking Corporation',
                    country: 'Nigeria',
                    testimonial: 'The assessment recommended ISO 27001 for our information security needs. The detailed cost breakdown helped with budgeting.',
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
  } catch (error) {
    console.error('HomePage error:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to AU ISO Assessment Platform
          </h1>
          <p className="text-gray-600 mb-4">
            We're experiencing some technical difficulties. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
};

export default HomePage; 