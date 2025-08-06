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
  ChartBarIcon
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

  return (
    <>
      <Helmet>
        <title>Sectors - AU ISO Assessment Platform</title>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore ISO standards and implementation guidance tailored to specific industry sectors across Africa.
            </p>
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

          {/* Sectors Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSectors.map((sector) => {
              const sectorStandards = getStandardsForSector(sector.id);
              
              return (
                <motion.div
                  key={sector.id}
                  variants={itemVariants}
                  className="card-hover p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${sector.color} rounded-lg flex items-center justify-center mr-4`}>
                      <span className="text-2xl">{sector.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{sector.name}</h3>
                      <p className="text-sm text-gray-600">{sectorStandards.length} ISO Standards</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {sector.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Standards:</h4>
                    <div className="flex flex-wrap gap-1">
                      {sectorStandards.slice(0, 3).map((standard) => (
                        <span key={standard.id} className="badge-primary text-xs">
                          {standard.code}
                        </span>
                      ))}
                      {sectorStandards.length > 3 && (
                        <span className="badge-secondary text-xs">
                          +{sectorStandards.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <BuildingOfficeIcon className="h-4 w-4" />
                        <span>{sectorStandards.length} standards</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GlobeAltIcon className="h-4 w-4" />
                        <span>African focus</span>
                      </div>
                    </div>
                    <Link
                      to={`/sectors/${sector.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Explore Sector
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredSectors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <LightBulbIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No sectors found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms to find what you're looking for.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="btn-primary"
              >
                Clear Search
              </button>
            </motion.div>
          )}

          {/* Sector Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Sector-Specific Guidance?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each sector has unique challenges and opportunities. Our tailored guidance helps organizations implement ISO standards effectively.
                </p>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: AcademicCapIcon,
                  title: 'Industry Expertise',
                  description: 'Access to sector-specific case studies and best practices from African organizations.'
                },
                {
                  icon: ChartBarIcon,
                  title: 'Tailored Implementation',
                  description: 'Step-by-step guidance adapted to your sector\'s unique requirements and challenges.'
                },
                {
                  icon: LightBulbIcon,
                  title: 'Innovation Focus',
                  description: 'Discover how ISO standards drive innovation and competitiveness in your sector.'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectorsPage; 