import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { isoStandards, sectors } from '../data/isoStandards';

const SectorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the sector by ID
  const sector = sectors.find(s => s.id === id);
  
  if (!sector) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Sector Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The sector you're looking for doesn't exist.
          </p>
          <Link to="/sectors" className="btn-primary">
            Back to Sectors
          </Link>
        </div>
      </div>
    );
  }

  // Get standards for this sector
  const sectorStandards = isoStandards.filter(standard => 
    standard.sector.some(s => s.id === sector.id)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{sector.name} - ISO Standards | StandardAccess</title>
        <meta name="description" content={`Explore ${sector.name} ISO standards and implementation guidance for African organizations.`} />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom py-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link to="/sectors" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Sectors
          </Link>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <BuildingOfficeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{sector.name}</h1>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <DocumentTextIcon className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-gray-900">Standards</span>
                </div>
                <p className="text-2xl font-bold text-primary-600">{sectorStandards.length}</p>
                <p className="text-sm text-gray-600">Available standards</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <GlobeAltIcon className="h-5 w-5 text-secondary-600" />
                  <span className="font-semibold text-gray-900">Sector</span>
                </div>
                <p className="text-2xl font-bold text-secondary-600">{sector.name}</p>
                <p className="text-sm text-gray-600">Industry sector</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <ChartBarIcon className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Status</span>
                </div>
                <p className="text-2xl font-bold text-green-600">Active</p>
                <p className="text-sm text-gray-600">Available for assessment</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ISO Standards */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <DocumentTextIcon className="h-6 w-6 text-primary-600 mr-2" />
              ISO Standards for {sector.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectorStandards.map((standard) => (
                <motion.div
                  key={standard.id}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{standard.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      standard.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      standard.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {standard.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{standard.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <ClockIcon className="h-4 w-4" />
                      <span>{standard.timeline.total}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CurrencyDollarIcon className="h-4 w-4" />
                      <span>{standard.cost.total}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/standards/${standard.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More
                    <ArrowLeftIcon className="h-4 w-4 ml-1 rotate-180" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Take our comprehensive assessment to identify the best ISO standards for your {sector.name.toLowerCase()} organization and get personalized implementation guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Start Assessment
            </Link>
            <Link to="/ai" className="btn-secondary border-white text-white hover:bg-white/10">
              AI Assistant
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectorDetailPage;
