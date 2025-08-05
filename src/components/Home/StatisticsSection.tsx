import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  UserGroupIcon,
  GlobeAltIcon,
  TrophyIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const StatisticsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState({
    professionals: 0,
    countries: 0,
    certifications: 0,
    standards: 0,
    organizations: 0,
    resources: 0,
  });

  const stats = [
    {
      icon: UserGroupIcon,
      number: 15420,
      label: 'Professionals',
      suffix: '+',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GlobeAltIcon,
      number: 54,
      label: 'African Countries',
      suffix: '',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrophyIcon,
      number: 3247,
      label: 'Certifications',
      suffix: '+',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: AcademicCapIcon,
      number: 50,
      label: 'ISO Standards',
      suffix: '+',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BuildingOfficeIcon,
      number: 892,
      label: 'Organizations',
      suffix: '+',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: DocumentTextIcon,
      number: 1250,
      label: 'Resources',
      suffix: '+',
      color: 'from-teal-500 to-green-500',
    },
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        setCounts(prev => ({
          professionals: Math.min(prev.professionals + Math.ceil(15420 / steps), 15420),
          countries: Math.min(prev.countries + Math.ceil(54 / steps), 54),
          certifications: Math.min(prev.certifications + Math.ceil(3247 / steps), 3247),
          standards: Math.min(prev.standards + Math.ceil(50 / steps), 50),
          organizations: Math.min(prev.organizations + Math.ceil(892 / steps), 892),
          resources: Math.min(prev.resources + Math.ceil(1250 / steps), 1250),
        }));
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView]);

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
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Platform Impact
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform has empowered thousands of African professionals and organizations 
            to achieve international standards and drive sustainable development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {counts[stat.label.toLowerCase().replace(/\s+/g, '') as keyof typeof counts].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">94%</div>
            <div className="text-gray-300">Success Rate</div>
            <div className="text-sm text-gray-400 mt-1">ISO Certification</div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl font-bold text-success-400 mb-2">$2.3M</div>
            <div className="text-gray-300">Cost Savings</div>
            <div className="text-sm text-gray-400 mt-1">Average per Organization</div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl font-bold text-accent-400 mb-2">8.5</div>
            <div className="text-gray-300">Months Average</div>
            <div className="text-sm text-gray-400 mt-1">Time to Certification</div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl font-bold text-secondary-400 mb-2">156</div>
            <div className="text-gray-300">Expert Mentors</div>
            <div className="text-sm text-gray-400 mt-1">Across Africa</div>
          </motion.div>
        </motion.div>

        {/* Success Stories Preview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8">
            Success Stories Across Africa
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                country: 'Nigeria',
                achievement: 'ISO 9001 & 14001',
                impact: 'Improved efficiency by 35%',
                color: 'from-green-500 to-emerald-500',
              },
              {
                country: 'Kenya',
                achievement: 'ISO 27001',
                impact: 'Enhanced data security',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                country: 'Ghana',
                achievement: 'ISO 45001',
                impact: 'Zero workplace accidents',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((story, index) => (
              <motion.div
                key={story.country}
                variants={itemVariants}
                className={`bg-gradient-to-r ${story.color} p-6 rounded-lg text-white`}
              >
                <div className="text-2xl font-bold mb-2">{story.country}</div>
                <div className="text-lg mb-2">{story.achievement}</div>
                <div className="text-sm opacity-90">{story.impact}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection; 