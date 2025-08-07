import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const HelpCenterPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'How do I start an ISO assessment?',
      answer: 'To start an ISO assessment, click on the "Assessment" tab in the navigation menu. You\'ll be guided through a series of questions about your organization, including your industry, company size, and current operations. Based on your responses, our AI will recommend the most relevant ISO standards for your business.'
    },
    {
      question: 'What ISO standards are available for assessment?',
      answer: 'We offer assessments for all major ISO standards including ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 27001 (Information Security), ISO 45001 (Occupational Health & Safety), ISO 50001 (Energy Management), and many more. Each standard is tailored to different industry needs and organizational requirements.'
    },
    {
      question: 'How accurate are the AI recommendations?',
      answer: 'Our AI-powered recommendations are based on comprehensive analysis of your organization\'s profile, industry best practices, and successful implementation patterns. The system continuously learns from user feedback and real-world case studies to improve accuracy. However, we recommend consulting with ISO experts for final implementation decisions.'
    },
    {
      question: 'Can I download my assessment results?',
      answer: 'Yes, you can download your assessment results in PDF format. The report includes your recommended ISO standards, implementation timeline, estimated costs, and next steps. You can also export your compliance checklist and progress tracking data.'
    },
    {
      question: 'How long does ISO implementation typically take?',
      answer: 'Implementation time varies based on the standard and organization size. Generally, ISO 9001 takes 8-12 months, ISO 27001 takes 10-14 months, and ISO 14001 takes 6-10 months. Our platform provides detailed timelines based on your specific circumstances.'
    },
    {
      question: 'What resources are available for implementation?',
      answer: 'We provide comprehensive resources including step-by-step implementation guides, downloadable templates, case studies from African organizations, training materials, and AI-powered assistance. All resources are designed specifically for African business contexts.'
    },
    {
      question: 'Is there support for small businesses?',
      answer: 'Absolutely! Our platform is specifically designed to make ISO standards accessible to MSMEs (Micro, Small, and Medium Enterprises). We offer simplified assessment processes, cost-effective implementation strategies, and resources tailored for smaller organizations with limited resources.'
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact our support team through multiple channels: email at support@standardaccess.com, phone at +234-803-516-7763, or through our live chat feature. We typically respond within 24 hours during business days.'
    }
  ];

  const categories = [
    {
      title: 'Getting Started',
      description: 'Learn how to use the platform and start your ISO journey',
      icon: BookOpenIcon,
      articles: 8
    },
    {
      title: 'Assessment Process',
      description: 'Understanding how our assessment works and interpreting results',
      icon: QuestionMarkCircleIcon,
      articles: 12
    },
    {
      title: 'Implementation Guide',
      description: 'Step-by-step guidance for implementing ISO standards',
      icon: ChatBubbleLeftRightIcon,
      articles: 15
    },
    {
      title: 'Technical Support',
      description: 'Help with platform features and technical issues',
      icon: PhoneIcon,
      articles: 6
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Helmet>
        <title>Help Center - StandardAccess</title>
        <meta name="description" content="Get help and support for using StandardAccess platform" />
      </Helmet>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Help Center
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            & Support
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions and get support for using StandardAccess. 
            We're here to help you succeed with ISO standards implementation.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="text-sm text-primary-600 font-medium">{category.articles} articles</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="bg-white rounded-lg border border-gray-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-6 opacity-90">
            Can't find what you're looking for? Our support team is here to help you succeed with ISO standards implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <EnvelopeIcon className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Email Support</h3>
              <p className="text-sm opacity-90">support@standardaccess.com</p>
              <p className="text-xs opacity-75">Response within 24 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <PhoneIcon className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Phone Support</h3>
              <p className="text-sm opacity-90">+234-803-516-7763</p>
              <p className="text-xs opacity-75">Mon-Fri, 9AM-5PM WAT</p>
            </div>
            <div className="flex flex-col items-center">
              <ChatBubbleLeftRightIcon className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Live Chat</h3>
              <p className="text-sm opacity-90">Available on platform</p>
              <p className="text-xs opacity-75">Real-time assistance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenterPage; 