import { Sector } from '@/types/iso';

export const sectors: Sector[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'ISO standards for manufacturing industries including automotive, electronics, textiles, and food processing',
    icon: '🏭',
    color: '#3B82F6',
    isoStandards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 22000']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'ISO standards for healthcare providers, medical devices, and pharmaceutical industries',
    icon: '🏥',
    color: '#10B981',
    isoStandards: ['ISO 9001', 'ISO 13485', 'ISO 14001', 'ISO 45001', 'ISO 27001']
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'ISO standards for software development, IT services, and digital transformation',
    icon: '💻',
    color: '#8B5CF6',
    isoStandards: ['ISO 9001', 'ISO 27001', 'ISO 14001', 'ISO 45001', 'ISO 20000']
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'ISO standards for banking, insurance, and financial technology companies',
    icon: '🏦',
    color: '#F59E0B',
    isoStandards: ['ISO 9001', 'ISO 27001', 'ISO 14001', 'ISO 45001', 'ISO 20022']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'ISO standards for farming, food production, and agricultural supply chains',
    icon: '🌾',
    color: '#06B6D4',
    isoStandards: ['ISO 9001', 'ISO 14001', 'ISO 22000', 'ISO 45001', 'ISO 50001']
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'ISO standards for construction companies, engineering firms, and infrastructure projects',
    icon: '🏗️',
    color: '#EF4444',
    isoStandards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 19650']
  },
  {
    id: 'education',
    name: 'Education',
    description: 'ISO standards for educational institutions, training providers, and e-learning platforms',
    icon: '🎓',
    color: '#8B5CF6',
    isoStandards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'ISO 21001']
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'ISO standards for logistics, transportation, and supply chain management',
    icon: '🚚',
    color: '#F97316',
    isoStandards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 28000', 'ISO 50001']
  }
];

export const sectorGuidance = {
  manufacturing: {
    overview: 'Manufacturing is a critical sector for African economic development, contributing significantly to GDP and employment across the continent. ISO standards help manufacturers improve quality, reduce waste, and access international markets.',
    keyChallenges: [
      'Quality consistency and product reliability',
      'Supply chain management and supplier quality',
      'Environmental compliance and sustainability',
      'Workplace safety and occupational health',
      'Energy efficiency and cost optimization',
      'Market access and international trade'
    ],
    isoPriorities: [
      {
        standard: 'ISO 9001',
        priority: 'High',
        reason: 'Essential for quality management and customer satisfaction',
        benefits: ['Improved product quality', 'Reduced defects', 'Enhanced customer trust', 'Access to new markets']
      },
      {
        standard: 'ISO 14001',
        priority: 'High',
        reason: 'Critical for environmental compliance and sustainability',
        benefits: ['Environmental compliance', 'Reduced waste', 'Cost savings', 'Enhanced reputation']
      },
      {
        standard: 'ISO 45001',
        priority: 'High',
        reason: 'Essential for workplace safety and risk management',
        benefits: ['Reduced accidents', 'Improved safety culture', 'Regulatory compliance', 'Lower insurance costs']
      },
      {
        standard: 'ISO 50001',
        priority: 'Medium',
        reason: 'Important for energy efficiency and cost reduction',
        benefits: ['Energy cost savings', 'Improved efficiency', 'Environmental benefits', 'Competitive advantage']
      },
      {
        standard: 'ISO 22000',
        priority: 'Medium',
        reason: 'Relevant for food and beverage manufacturing',
        benefits: ['Food safety compliance', 'Supply chain control', 'Customer confidence', 'Market access']
      }
    ],
    implementationTips: [
      'Start with ISO 9001 as the foundation',
      'Integrate environmental and safety management',
      'Focus on process standardization',
      'Invest in employee training',
      'Establish supplier quality programs',
      'Monitor and measure key performance indicators'
    ],
    caseStudies: [
      {
        title: 'Nigerian Automotive Parts Manufacturer',
        company: 'Lagos Auto Parts Ltd',
        challenge: 'Facing quality issues and losing customers to international competitors',
        solution: 'Implemented ISO 9001 and ISO 14001 integrated management system',
        results: [
          'Reduced defects by 60%',
          'Improved customer satisfaction by 45%',
          'Reduced environmental impact by 30%',
          'Gained access to European markets',
          'Increased revenue by 40%'
        ]
      },
      {
        title: 'Kenyan Textile Manufacturer',
        company: 'Nairobi Textiles Co',
        challenge: 'Struggling with inconsistent quality and high waste levels',
        solution: 'Implemented ISO 9001 with focus on process improvement and waste reduction',
        results: [
          'Reduced waste by 50%',
          'Improved quality consistency',
          'Enhanced worker safety',
          'Increased productivity by 25%',
          'Expanded export markets'
        ]
      }
    ],
    resources: [
      {
        title: 'Manufacturing Quality Manual Template',
        type: 'template',
        description: 'Comprehensive quality manual template for manufacturing organizations'
      },
      {
        title: 'Manufacturing Process Control Guide',
        type: 'guide',
        description: 'Step-by-step guide for implementing process controls in manufacturing'
      },
      {
        title: 'Supplier Quality Management Checklist',
        type: 'checklist',
        description: 'Checklist for managing supplier quality and performance'
      }
    ]
  },
  healthcare: {
    overview: 'Healthcare is a critical sector requiring the highest standards of quality, safety, and patient care. ISO standards help healthcare providers improve patient outcomes, ensure safety, and maintain regulatory compliance.',
    keyChallenges: [
      'Patient safety and quality of care',
      'Regulatory compliance and accreditation',
      'Data security and privacy protection',
      'Medical device safety and reliability',
      'Environmental impact and sustainability',
      'Staff training and competency'
    ],
    isoPriorities: [
      {
        standard: 'ISO 9001',
        priority: 'High',
        reason: 'Essential for quality management and patient safety',
        benefits: ['Improved patient outcomes', 'Enhanced care quality', 'Reduced medical errors', 'Better patient satisfaction']
      },
      {
        standard: 'ISO 13485',
        priority: 'High',
        reason: 'Critical for medical device manufacturers and suppliers',
        benefits: ['Regulatory compliance', 'Product safety', 'Market access', 'Customer confidence']
      },
      {
        standard: 'ISO 27001',
        priority: 'High',
        reason: 'Essential for protecting patient data and information security',
        benefits: ['Data protection', 'Privacy compliance', 'Risk management', 'Patient trust']
      },
      {
        standard: 'ISO 14001',
        priority: 'Medium',
        reason: 'Important for environmental management in healthcare',
        benefits: ['Environmental compliance', 'Waste reduction', 'Cost savings', 'Sustainability']
      },
      {
        standard: 'ISO 45001',
        priority: 'Medium',
        reason: 'Important for workplace safety in healthcare environments',
        benefits: ['Staff safety', 'Risk reduction', 'Regulatory compliance', 'Improved workplace']
      }
    ],
    implementationTips: [
      'Focus on patient safety as the primary objective',
      'Integrate quality and information security management',
      'Ensure staff training and competency',
      'Establish clear procedures and protocols',
      'Monitor and measure patient outcomes',
      'Maintain regulatory compliance'
    ],
    caseStudies: [
      {
        title: 'Kenyan Hospital Network',
        company: 'Nairobi Healthcare Group',
        challenge: 'Experiencing inconsistent care quality and patient safety incidents',
        solution: 'Implemented ISO 9001 and ISO 27001 integrated management system',
        results: [
          'Reduced medical errors by 70%',
          'Improved patient satisfaction by 60%',
          'Enhanced data security and privacy',
          'Achieved regulatory accreditation',
          'Increased operational efficiency'
        ]
      },
      {
        title: 'Ghanaian Medical Device Company',
        company: 'Accra Medical Devices Ltd',
        challenge: 'Struggling with product quality and market access',
        solution: 'Implemented ISO 13485 for medical device quality management',
        results: [
          'Improved product quality and reliability',
          'Gained regulatory approval',
          'Expanded market access',
          'Enhanced customer confidence',
          'Increased sales by 50%'
        ]
      }
    ],
    resources: [
      {
        title: 'Healthcare Quality Management Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing quality management in healthcare'
      },
      {
        title: 'Patient Safety Protocol Template',
        type: 'template',
        description: 'Template for developing patient safety protocols and procedures'
      },
      {
        title: 'Healthcare Data Security Checklist',
        type: 'checklist',
        description: 'Checklist for ensuring data security and privacy in healthcare'
      }
    ]
  },
  technology: {
    overview: 'The technology sector is rapidly growing in Africa, with increasing demand for software development, IT services, and digital solutions. ISO standards help tech companies ensure quality, security, and customer satisfaction.',
    keyChallenges: [
      'Software quality and reliability',
      'Information security and data protection',
      'Customer satisfaction and user experience',
      'Project management and delivery',
      'Innovation and continuous improvement',
      'Talent acquisition and retention'
    ],
    isoPriorities: [
      {
        standard: 'ISO 9001',
        priority: 'High',
        reason: 'Essential for quality management and customer satisfaction',
        benefits: ['Improved software quality', 'Enhanced customer satisfaction', 'Better project delivery', 'Reduced defects']
      },
      {
        standard: 'ISO 27001',
        priority: 'High',
        reason: 'Critical for information security and data protection',
        benefits: ['Data security', 'Customer trust', 'Regulatory compliance', 'Risk management']
      },
      {
        standard: 'ISO 20000',
        priority: 'Medium',
        reason: 'Important for IT service management and delivery',
        benefits: ['Service quality', 'Customer satisfaction', 'Process improvement', 'Operational efficiency']
      },
      {
        standard: 'ISO 14001',
        priority: 'Medium',
        reason: 'Relevant for environmental sustainability in tech',
        benefits: ['Environmental responsibility', 'Cost savings', 'Reputation enhancement', 'Sustainability']
      },
      {
        standard: 'ISO 45001',
        priority: 'Low',
        reason: 'Less critical for office-based tech companies',
        benefits: ['Workplace safety', 'Employee well-being', 'Risk management', 'Compliance']
      }
    ],
    implementationTips: [
      'Focus on software development lifecycle',
      'Implement robust security measures',
      'Establish clear project management processes',
      'Invest in employee training and development',
      'Monitor customer satisfaction and feedback',
      'Embrace agile and continuous improvement'
    ],
    caseStudies: [
      {
        title: 'Nigerian Software Development Company',
        company: 'Lagos Tech Solutions',
        challenge: 'Facing quality issues and customer complaints about software reliability',
        solution: 'Implemented ISO 9001 and ISO 27001 integrated management system',
        results: [
          'Reduced software bugs by 65%',
          'Improved customer satisfaction by 55%',
          'Enhanced data security',
          'Increased project delivery success rate',
          'Expanded client base by 40%'
        ]
      },
      {
        title: 'Kenyan Fintech Startup',
        company: 'Nairobi Digital Payments',
        challenge: 'Struggling with security concerns and regulatory compliance',
        solution: 'Implemented ISO 27001 for information security management',
        results: [
          'Enhanced data security and privacy',
          'Achieved regulatory compliance',
          'Gained customer trust',
          'Expanded market reach',
          'Increased user adoption by 80%'
        ]
      }
    ],
    resources: [
      {
        title: 'Software Development Quality Guide',
        type: 'guide',
        description: 'Guide for implementing quality management in software development'
      },
      {
        title: 'Information Security Policy Template',
        type: 'template',
        description: 'Template for developing information security policies and procedures'
      },
      {
        title: 'Software Testing Checklist',
        type: 'checklist',
        description: 'Comprehensive checklist for software testing and quality assurance'
      }
    ]
  },
  financialServices: {
    overview: 'Financial services are critical for economic development in Africa, with increasing focus on digital banking, mobile money, and financial inclusion. ISO standards help financial institutions ensure security, compliance, and customer trust.',
    keyChallenges: [
      'Regulatory compliance and risk management',
      'Information security and data protection',
      'Customer trust and service quality',
      'Operational efficiency and cost control',
      'Digital transformation and innovation',
      'Financial crime prevention'
    ],
    isoPriorities: [
      {
        standard: 'ISO 9001',
        priority: 'High',
        reason: 'Essential for service quality and customer satisfaction',
        benefits: ['Improved service quality', 'Enhanced customer satisfaction', 'Operational efficiency', 'Competitive advantage']
      },
      {
        standard: 'ISO 27001',
        priority: 'High',
        reason: 'Critical for information security and regulatory compliance',
        benefits: ['Data security', 'Regulatory compliance', 'Customer trust', 'Risk management']
      },
      {
        standard: 'ISO 14001',
        priority: 'Medium',
        reason: 'Important for environmental responsibility and sustainability',
        benefits: ['Environmental compliance', 'Cost savings', 'Reputation enhancement', 'Sustainability']
      },
      {
        standard: 'ISO 45001',
        priority: 'Medium',
        reason: 'Important for workplace safety and employee well-being',
        benefits: ['Workplace safety', 'Employee satisfaction', 'Risk management', 'Compliance']
      },
      {
        standard: 'ISO 20022',
        priority: 'Low',
        reason: 'Relevant for payment systems and financial messaging',
        benefits: ['Payment efficiency', 'Interoperability', 'Cost reduction', 'Standardization']
      }
    ],
    implementationTips: [
      'Focus on regulatory compliance and risk management',
      'Implement robust security measures',
      'Establish clear service delivery processes',
      'Invest in employee training and development',
      'Monitor customer satisfaction and feedback',
      'Embrace digital transformation'
    ],
    caseStudies: [
      {
        title: 'South African Bank',
        company: 'Cape Town Banking Group',
        challenge: 'Facing security concerns and regulatory compliance issues',
        solution: 'Implemented ISO 27001 and ISO 9001 integrated management system',
        results: [
          'Enhanced data security and privacy',
          'Achieved regulatory compliance',
          'Improved customer trust',
          'Reduced operational risks',
          'Increased customer satisfaction'
        ]
      },
      {
        title: 'Nigerian Digital Bank',
        company: 'Lagos Digital Bank',
        challenge: 'Struggling with service quality and customer complaints',
        solution: 'Implemented ISO 9001 focusing on service quality and customer satisfaction',
        results: [
          'Improved service quality by 45%',
          'Enhanced customer satisfaction',
          'Reduced customer complaints by 60%',
          'Increased customer retention',
          'Expanded market share'
        ]
      }
    ],
    resources: [
      {
        title: 'Financial Services Quality Guide',
        type: 'guide',
        description: 'Guide for implementing quality management in financial services'
      },
      {
        title: 'Information Security Policy Template',
        type: 'template',
        description: 'Template for developing information security policies for financial institutions'
      },
      {
        title: 'Regulatory Compliance Checklist',
        type: 'checklist',
        description: 'Checklist for ensuring regulatory compliance in financial services'
      }
    ]
  },
  agriculture: {
    overview: 'Agriculture is a vital sector for African economies, providing food security and employment. ISO standards help agricultural organizations improve quality, ensure food safety, and access international markets.',
    keyChallenges: [
      'Food safety and quality control',
      'Environmental sustainability and resource management',
      'Market access and international trade',
      'Supply chain management and traceability',
      'Climate change adaptation and resilience',
      'Technology adoption and innovation'
    ],
    isoPriorities: [
      {
        standard: 'ISO 9001',
        priority: 'High',
        reason: 'Essential for quality management and market access',
        benefits: ['Improved product quality', 'Market access', 'Customer satisfaction', 'Operational efficiency']
      },
      {
        standard: 'ISO 22000',
        priority: 'High',
        reason: 'Critical for food safety and regulatory compliance',
        benefits: ['Food safety', 'Regulatory compliance', 'Customer confidence', 'Market access']
      },
      {
        standard: 'ISO 14001',
        priority: 'High',
        reason: 'Important for environmental management and sustainability',
        benefits: ['Environmental compliance', 'Sustainability', 'Resource efficiency', 'Cost savings']
      },
      {
        standard: 'ISO 45001',
        priority: 'Medium',
        reason: 'Important for workplace safety in agricultural operations',
        benefits: ['Workplace safety', 'Risk reduction', 'Employee well-being', 'Compliance']
      },
      {
        standard: 'ISO 50001',
        priority: 'Medium',
        reason: 'Relevant for energy efficiency in agricultural operations',
        benefits: ['Energy efficiency', 'Cost reduction', 'Environmental benefits', 'Sustainability']
      }
    ],
    implementationTips: [
      'Focus on food safety and quality control',
      'Implement traceability systems',
      'Establish environmental management practices',
      'Invest in employee training and safety',
      'Monitor and measure key performance indicators',
      'Embrace sustainable practices'
    ],
    caseStudies: [
      {
        title: 'Ghanaian Cocoa Cooperative',
        company: 'Kumasi Cocoa Farmers Cooperative',
        challenge: 'Struggling with quality consistency and market access',
        solution: 'Implemented ISO 9001 and ISO 22000 integrated management system',
        results: [
          'Improved product quality consistency',
          'Enhanced food safety compliance',
          'Gained access to premium markets',
          'Increased farmer incomes by 40%',
          'Improved traceability systems'
        ]
      },
      {
        title: 'Kenyan Tea Producer',
        company: 'Nairobi Tea Estates',
        challenge: 'Facing environmental compliance and sustainability issues',
        solution: 'Implemented ISO 14001 for environmental management',
        results: [
          'Reduced environmental impact by 35%',
          'Improved resource efficiency',
          'Enhanced sustainability practices',
          'Gained certification for premium markets',
          'Increased operational efficiency'
        ]
      }
    ],
    resources: [
      {
        title: 'Agricultural Quality Management Guide',
        type: 'guide',
        description: 'Guide for implementing quality management in agriculture'
      },
      {
        title: 'Food Safety Management Template',
        type: 'template',
        description: 'Template for developing food safety management systems'
      },
      {
        title: 'Agricultural Traceability Checklist',
        type: 'checklist',
        description: 'Checklist for implementing traceability in agricultural supply chains'
      }
    ]
  }
}; 