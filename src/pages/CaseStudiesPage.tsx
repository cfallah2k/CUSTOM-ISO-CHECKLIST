import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Nigerian Manufacturing Success',
      company: 'Lagos Manufacturing Co.',
      location: 'Lagos, Nigeria',
      industry: 'Manufacturing',
      standard: 'ISO 9001:2015',
      duration: '10 months',
      improvement: '35% efficiency increase',
      description: 'How a Nigerian manufacturer achieved ISO 9001 certification and improved operational efficiency by 35%',
      challenges: ['Limited resources', 'Staff training needs', 'Documentation gaps'],
      solutions: ['Phased implementation', 'Custom training program', 'Template library'],
      results: ['35% efficiency increase', '50% reduction in defects', 'Improved customer satisfaction'],
      href: '/resources/case-studies/nigerian-manufacturing'
    },
    {
      title: 'Kenyan Tech Startup Journey',
      company: 'Nairobi Tech Solutions',
      location: 'Nairobi, Kenya',
      industry: 'Information Technology',
      standard: 'ISO 27001:2022',
      duration: '12 months',
      improvement: 'Enhanced data security',
      description: 'A Kenyan tech startup implemented ISO 27001 to enhance data security and gain client trust',
      challenges: ['Limited cybersecurity expertise', 'Budget constraints', 'Client requirements'],
      solutions: ['Risk-based approach', 'Cloud security integration', 'Staff certification'],
      results: ['Zero security breaches', 'Increased client confidence', 'Competitive advantage'],
      href: '/resources/case-studies/kenyan-tech'
    },
    {
      title: 'Ghanaian Construction Safety',
      company: 'Accra Construction Ltd.',
      location: 'Accra, Ghana',
      industry: 'Construction',
      standard: 'ISO 45001:2018',
      duration: '8 months',
      improvement: 'Zero workplace accidents',
      description: 'Construction company achieved zero workplace accidents through ISO 45001 implementation',
      challenges: ['High-risk environment', 'Diverse workforce', 'Regulatory compliance'],
      solutions: ['Safety culture development', 'Comprehensive training', 'Regular audits'],
      results: ['Zero accidents in 12 months', 'Reduced insurance costs', 'Improved reputation'],
      href: '/resources/case-studies/ghanaian-construction'
    },
    {
      title: 'South African Energy Efficiency',
      company: 'Cape Town Energy Corp.',
      location: 'Cape Town, South Africa',
      industry: 'Energy',
      standard: 'ISO 50001:2018',
      duration: '9 months',
      improvement: '25% energy savings',
      description: 'Energy company achieved significant cost savings through ISO 50001 implementation',
      challenges: ['Complex energy systems', 'Data management', 'Stakeholder engagement'],
      solutions: ['Energy baseline establishment', 'Automated monitoring', 'Performance tracking'],
      results: ['25% energy cost reduction', 'Improved sustainability', 'Regulatory compliance'],
      href: '/resources/case-studies/south-african-energy'
    },
    {
      title: 'Egyptian Healthcare Quality',
      company: 'Cairo Medical Center',
      location: 'Cairo, Egypt',
      industry: 'Healthcare',
      standard: 'ISO 9001:2015',
      duration: '11 months',
      improvement: 'Improved patient outcomes',
      description: 'Healthcare facility improved patient care quality through ISO 9001 implementation',
      challenges: ['Complex processes', 'Staff resistance', 'Patient safety requirements'],
      solutions: ['Process standardization', 'Change management', 'Quality metrics'],
      results: ['Improved patient satisfaction', 'Reduced medical errors', 'Enhanced reputation'],
      href: '/resources/case-studies/egyptian-healthcare'
    },
    {
      title: 'Moroccan Food Safety',
      company: 'Casablanca Foods',
      location: 'Casablanca, Morocco',
      industry: 'Food Processing',
      standard: 'ISO 22000:2018',
      duration: '7 months',
      improvement: 'Enhanced food safety',
      description: 'Food processing company enhanced food safety and expanded export markets',
      challenges: ['Supply chain complexity', 'International standards', 'Documentation requirements'],
      solutions: ['HACCP integration', 'Supplier management', 'Traceability systems'],
      results: ['Expanded export markets', 'Zero food safety incidents', 'Improved efficiency'],
      href: '/resources/case-studies/moroccan-food'
    }
  ];

  const industries = [
    { name: 'Manufacturing', count: 15, color: 'from-blue-500 to-cyan-500' },
    { name: 'Technology', count: 12, color: 'from-purple-500 to-pink-500' },
    { name: 'Construction', count: 8, color: 'from-orange-500 to-red-500' },
    { name: 'Healthcare', count: 6, color: 'from-green-500 to-emerald-500' },
    { name: 'Energy', count: 4, color: 'from-yellow-500 to-orange-500' },
    { name: 'Food & Beverage', count: 5, color: 'from-teal-500 to-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Case Studies - StandardAccess</title>
        <meta name="description" content="Real-world case studies of successful ISO implementations across African organizations" />
      </Helmet>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Success Stories
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Across Africa
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how African organizations have successfully implemented ISO standards 
            and achieved remarkable improvements in their operations.
          </p>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Industry</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <BuildingOfficeIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-900">{industry.name}</div>
                <div className="text-xs text-gray-500">{industry.count} cases</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{study.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                    {study.company}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    {study.location}
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {study.standard}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{study.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Industry:</span>
                  <div className="text-gray-600">{study.industry}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Duration:</span>
                  <div className="text-gray-600">{study.duration}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Improvement:</span>
                  <div className="text-green-600 font-medium">{study.improvement}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Standard:</span>
                  <div className="text-gray-600">{study.standard}</div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <TrophyIcon className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={study.href}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Read Full Case Study
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-lg mb-6 opacity-90">
            Learn from these success stories and begin your own ISO implementation journey with our AI-powered guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/assessment"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Assessment
            </Link>
            <Link
              to="/ai"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              AI Assistant
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudiesPage; 