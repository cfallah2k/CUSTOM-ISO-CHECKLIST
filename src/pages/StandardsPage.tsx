import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  LightBulbIcon
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

  return (
    <>
      <Helmet>
        <title>ISO Standards - AU ISO Fellowship Platform</title>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of ISO standards with detailed implementation guides, 
              case studies, and African-specific resources.
            </p>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-300 focus:border-primary-500"
                >
                  <option value="all">All Categories</option>
                  {isoCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                {/* Sector Filter */}
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-300 focus:border-primary-500"
                >
                  <option value="all">All Sectors</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="finance">Finance</option>
                  <option value="technology">Technology</option>
                  <option value="energy">Energy</option>
                  <option value="tourism">Tourism</option>
                </select>

                {/* Results Count */}
                <div className="flex items-center justify-center bg-gray-50 rounded-lg px-4 py-3">
                  <span className="text-sm text-gray-600">
                    {filteredStandards.length} standards found
                  </span>
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
                className="card-hover p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {standard.code}
                    </h3>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {standard.name}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Removed featured and status badges */}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {standard.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AcademicCapIcon className="h-4 w-4 text-primary-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {standard.category.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {standard.sector.slice(0, 3).map((sector: any) => (
                      <span key={sector.id} className="badge-secondary text-xs">
                        {sector.name}
                      </span>
                    ))}
                    {standard.sector.length > 3 && (
                      <span className="badge-secondary text-xs">
                        +{standard.sector.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <BookOpenIcon className="h-4 w-4" />
                      <span>{standard.resources.length} resources</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ShieldCheckIcon className="h-4 w-4" />
                      <span>{standard.popularity} certified</span>
                    </div>
                  </div>
                  <Link
                    to={`/standards/${standard.id}`}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredStandards.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <LightBulbIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No standards found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSector('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default StandardsPage; 