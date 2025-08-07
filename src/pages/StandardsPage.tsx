import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  StarIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { isoStandards, isoCategories } from '../data/isoStandards';

const StandardsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSector, setSelectedSector] = useState<string>('all');

  const filteredStandards = useMemo(() => {
    return isoStandards.filter(standard => {
      const matchesSearch = standard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           standard.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           standard.code.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || standard.category.id === selectedCategory;
      const matchesSector = selectedSector === 'all' || standard.sector.some((s: any) => s.id === selectedSector);
      
      return matchesSearch && matchesCategory && matchesSector;
    });
  }, [searchTerm, selectedCategory, selectedSector]);

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

  const featuredStandards = isoStandards.filter(standard => 
    ['iso-9001', 'iso-14001', 'iso-45001', 'iso-27001'].includes(standard.id)
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Expert': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <>
      <Helmet>
        <title>ISO Standards - StandardAccess</title>
        <meta name="description" content="Browse comprehensive ISO standards with detailed implementation guides, case studies, and African-specific resources." />
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
              ISO Standards Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive collection of ISO standards with detailed implementation guides, 
              case studies, and African-specific resources.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{isoStandards.length}+</div>
                <div className="text-sm text-gray-600">ISO Standards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{isoCategories.length}</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Implementation Guides</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Case Studies</div>
              </div>
            </div>
          </motion.div>

          {/* Featured Standards */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <StarIcon className="h-6 w-6 text-yellow-500 mr-2" />
              Featured Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredStandards.map((standard) => (
                <motion.div
                  key={standard.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-soft p-6 hover:shadow-lg transition-all duration-200 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <ShieldCheckIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(standard.difficulty)}`}>
                      {standard.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.code}</h3>
                  <p className="text-sm text-gray-600 mb-4">{standard.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {standard.timeline.total}
                    </span>
                    <span className="flex items-center">
                      <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                      {standard.cost.total}
                    </span>
                  </div>
                  <Link
                    to={`/standards/${standard.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Learn More
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="bg-white rounded-xl shadow-soft p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search standards..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-300 focus:border-primary-500"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-300 focus:border-primary-500"
                >
                  <option value="all">All Categories</option>
                  {isoCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>

                {/* Sector Filter */}
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-300 focus:border-primary-500"
                >
                  <option value="all">All Sectors</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="technology">Technology</option>
                  <option value="agriculture">Agriculture</option>
                </select>

                {/* Difficulty Filter */}
                <select
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-300 focus:border-primary-500"
                >
                  <option value="all">All Difficulties</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Implementation Tips */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <LightBulbIcon className="h-5 w-5 text-blue-600 mr-2" />
                Implementation Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Start with Basics</h4>
                    <p className="text-sm text-gray-600">Begin with ISO 9001 for quality management foundation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phased Approach</h4>
                    <p className="text-sm text-gray-600">Implement standards in phases to manage complexity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Get Expert Help</h4>
                    <p className="text-sm text-gray-600">Consider consulting with ISO implementation experts</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Standards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredStandards.map((standard) => (
              <motion.div
                key={standard.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-soft p-6 hover:shadow-lg transition-all duration-200 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <ShieldCheckIcon className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(standard.difficulty)}`}>
                    {standard.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.code}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{standard.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {standard.timeline.total}
                  </span>
                  <span className="flex items-center">
                    <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                    {standard.cost.total}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{standard.category.name}</span>
                    <GlobeAltIcon className="h-4 w-4 text-gray-400" />
                  </div>
                  <Link
                    to={`/standards/${standard.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View Details
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredStandards.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpenIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No standards found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
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
              <p className="text-lg mb-6">Take our comprehensive assessment to find the right ISO standards for your organization.</p>
              <Link
                to="/assessment"
                className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Start Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StandardsPage; 