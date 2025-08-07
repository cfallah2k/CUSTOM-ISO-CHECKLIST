import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ChartBarIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  ArrowRightIcon,
  ClockIcon,
  UsersIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { sectors } from '../data/sectors';
import { isoStandards } from '../data/isoStandards';

const SectorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSectors = sectors.filter(sector =>
    sector.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sector.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStandardsForSector = (sectorId: string) => {
    return isoStandards.filter(standard => 
      standard.sector.some(s => s.id === sectorId)
    );
  };

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

  const sectorInsights = [
    {
      sector: 'Manufacturing',
      insights: [
        'ISO 9001 is essential for quality management',
        'ISO 14001 helps with environmental compliance',
        'ISO 45001 improves workplace safety',
        'Focus on process optimization and efficiency'
      ]
    },
    {
      sector: 'Healthcare',
      insights: [
        'ISO 13485 for medical device quality',
        'ISO 27001 for patient data security',
        'ISO 9001 for service quality',
        'Emphasis on patient safety and compliance'
      ]
    },
    {
      sector: 'Finance',
      insights: [
        'ISO 27001 is critical for data security',
        'ISO 22301 for business continuity',
        'ISO 9001 for service excellence',
        'Focus on risk management and compliance'
      ]
    },
    {
      sector: 'Technology',
      insights: [
        'ISO 27001 for information security',
        'ISO 9001 for software quality',
        'ISO 14001 for green IT practices',
        'Emphasis on innovation and security'
      ]
    },
    {
      sector: 'Agriculture',
      insights: [
        'ISO 22000 for food safety',
        'ISO 14001 for environmental management',
        'ISO 9001 for quality assurance',
        'Focus on sustainable practices'
      ]
    }
  ];

  const getSectorInsights = (sectorName: string) => {
    return sectorInsights.find(insight => insight.sector === sectorName)?.insights || [];
  };

  const getSectorIcon = (sectorName: string) => {
    switch (sectorName.toLowerCase()) {
      case 'manufacturing': return BuildingOfficeIcon;
      case 'healthcare': return AcademicCapIcon;
      case 'finance': return ChartBarIcon;
      case 'technology': return LightBulbIcon;
      case 'agriculture': return GlobeAltIcon;
      default: return BuildingOfficeIcon;
    }
  };

  const getSectorColor = (sectorName: string) => {
    switch (sectorName.toLowerCase()) {
      case 'manufacturing': return 'from-blue-500 to-cyan-500';
      case 'healthcare': return 'from-green-500 to-emerald-500';
      case 'finance': return 'from-purple-500 to-pink-500';
      case 'technology': return 'from-orange-500 to-red-500';
      case 'agriculture': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>Sectors - StandardAccess</title>
        <meta name="description" content="Explore ISO standards by sector with industry-specific guidance and resources." />
      </Helmet>
      
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Sectors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore ISO standards and implementation guidance tailored to specific industry sectors across Africa.
            </p>

            {/* Sector Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{sectors.length}</div>
                <div className="text-sm text-gray-600">Industry Sectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">ISO Standards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="relative max-w-md mx-auto">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search sectors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-300 focus:border-primary-500"
              />
            </div>
          </motion.div>

          {/* Featured Sectors */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <StarIcon className="h-6 w-6 text-yellow-500 mr-2" />
              Featured Sectors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.slice(0, 6).map((sector) => {
                const IconComponent = getSectorIcon(sector.name);
                const sectorStandards = getStandardsForSector(sector.id);
                const insights = getSectorInsights(sector.name);
                
                return (
                  <motion.div
                    key={sector.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-soft p-6 hover:shadow-lg transition-all duration-200 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getSectorColor(sector.name)} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {sectorStandards.length} Standards
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{sector.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{sector.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Key Insights:</h4>
                      <ul className="space-y-1">
                        {insights.slice(0, 2).map((insight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircleIcon className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-600">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/sectors/${sector.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Explore Sector
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Implementation Guide */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <LightBulbIcon className="h-5 w-5 text-blue-600 mr-2" />
                Sector-Specific Implementation Guide
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <UsersIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">1. Assess Your Sector</h4>
                  <p className="text-sm text-gray-600">Identify the most relevant ISO standards for your industry sector</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ShieldCheckIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">2. Prioritize Standards</h4>
                  <p className="text-sm text-gray-600">Focus on the most critical standards for your business needs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ArrowTrendingUpIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">3. Implement & Certify</h4>
                  <p className="text-sm text-gray-600">Follow sector-specific best practices for successful implementation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sectors Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSectors.map((sector) => {
              const IconComponent = getSectorIcon(sector.name);
              const sectorStandards = getStandardsForSector(sector.id);
              const insights = getSectorInsights(sector.name);
              
              return (
                <motion.div
                  key={sector.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-soft p-6 hover:shadow-lg transition-all duration-200 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${getSectorColor(sector.name)} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                      {sectorStandards.length} Standards
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{sector.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{sector.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Standards:</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {sectorStandards.slice(0, 3).map((standard) => (
                        <span key={standard.id} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {standard.code}
                        </span>
                      ))}
                      {sectorStandards.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{sectorStandards.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Implementation Tips:</h4>
                    <ul className="space-y-1">
                      {insights.slice(0, 2).map((insight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4" />
                      <span>6-18 months</span>
                    </div>
                    <Link
                      to={`/sectors/${sector.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Explore Sector
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results */}
          {filteredSectors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BuildingOfficeIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No sectors found</h3>
              <p className="text-gray-600">Try adjusting your search criteria.</p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-6">Take our sector-specific assessment to find the right ISO standards for your industry.</p>
              <Link
                to="/assessment"
                className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Start Sector Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectorsPage; 