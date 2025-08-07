import { ISOStandard, ISOCategory } from '../types/iso';

// ISO Categories
export const isoCategories: ISOCategory[] = [
  {
    id: 'quality-management',
    name: 'Quality Management',
    description: 'Standards for quality management systems and processes',
    icon: 'CheckCircleIcon',
    color: 'primary'
  },
  {
    id: 'environmental-management',
    name: 'Environmental Management',
    description: 'Standards for environmental management and sustainability',
    icon: 'LeafIcon',
    color: 'green'
  },
  {
    id: 'health-safety',
    name: 'Health & Safety',
    description: 'Standards for occupational health and safety management',
    icon: 'ShieldCheckIcon',
    color: 'red'
  },
  {
    id: 'energy-management',
    name: 'Energy Management',
    description: 'Standards for energy efficiency and management',
    icon: 'BoltIcon',
    color: 'yellow'
  },
  {
    id: 'business-continuity',
    name: 'Business Continuity',
    description: 'Standards for business continuity and disaster recovery',
    icon: 'ArrowPathIcon',
    color: 'blue'
  },
  {
    id: 'anti-bribery',
    name: 'Anti-Bribery',
    description: 'Standards for anti-bribery and corruption management',
    icon: 'ExclamationTriangleIcon',
    color: 'orange'
  },
  {
    id: 'risk-management',
    name: 'Risk Management',
    description: 'Standards for risk management and governance',
    icon: 'ChartBarIcon',
    color: 'purple'
  },
  {
    id: 'social-responsibility',
    name: 'Social Responsibility',
    description: 'Standards for social responsibility and sustainability',
    icon: 'HeartIcon',
    color: 'pink'
  },
  {
    id: 'information-security',
    name: 'Information Security',
    description: 'Standards for information security and data protection',
    icon: 'LockClosedIcon',
    color: 'indigo'
  },
  {
    id: 'it-service-management',
    name: 'IT Service Management',
    description: 'Standards for IT service management and governance',
    icon: 'ComputerDesktopIcon',
    color: 'cyan'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    description: 'Standards for supply chain security and management',
    icon: 'TruckIcon',
    color: 'teal'
  },
  {
    id: 'technical-engineering',
    name: 'Technical & Engineering',
    description: 'Standards for technical and engineering applications',
    icon: 'WrenchScrewdriverIcon',
    color: 'gray'
  },
  {
    id: 'compliance-legal',
    name: 'Compliance & Legal',
    description: 'Standards for compliance management and legal requirements',
    icon: 'ScaleIcon',
    color: 'slate'
  },
  {
    id: 'health-pharma',
    name: 'Health & Pharma',
    description: 'Standards for healthcare and pharmaceutical industries',
    icon: 'BeakerIcon',
    color: 'rose'
  },
  {
    id: 'industry-specific',
    name: 'Industry Specific',
    description: 'Standards for specific industry applications',
    icon: 'BuildingOfficeIcon',
    color: 'stone'
  },
  {
    id: 'innovation-quality',
    name: 'Innovation & Quality',
    description: 'Standards for innovation management and quality improvement',
    icon: 'LightBulbIcon',
    color: 'amber'
  }
];

// Sectors
export const sectors = [
  { 
    id: 'manufacturing', 
    name: 'Manufacturing',
    description: 'Manufacturing and production industries',
    icon: 'CogIcon',
    color: 'primary',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-50001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-27001', 'iso-27002', 'iso-27005', 'iso-27701', 'iso-27017', 'iso-27018', 'iso-20000-1', 'iso-25010', 'iso-38500', 'iso-28000', 'iso-20252', 'iso-10002', 'iso-55001', 'iso-8000', 'iso-8573', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-13485', 'iso-15189', 'iso-10993', 'iso-ts-16949', 'iso-20121', 'iso-37120', 'iso-4217', 'iso-3166', 'iso-56002', 'iso-10004', 'iso-9241', 'iso-13485', 'iso-15189', 'iso-10993', 'iso-ts-16949', 'iso-20121', 'iso-37120', 'iso-4217', 'iso-3166', 'iso-56002', 'iso-10004', 'iso-9241']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Healthcare and medical services',
    icon: 'HeartIcon',
    color: 'red',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-27001', 'iso-13485', 'iso-15189', 'iso-10993', 'iso-20000-1', 'iso-25010', 'iso-38500', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-26000', 'iso-31000', 'iso-22301', 'iso-37001', 'iso-50001', 'iso-10002', 'iso-10004', 'iso-9241']
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Information technology and software development',
    icon: 'ComputerDesktopIcon',
    color: 'blue',
    isoStandards: ['iso-27001', 'iso-27002', 'iso-27005', 'iso-27701', 'iso-27017', 'iso-27018', 'iso-20000-1', 'iso-25010', 'iso-38500', 'iso-9001', 'iso-14001', 'iso-45001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-8000', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-10002', 'iso-10004', 'iso-9241', 'iso-56002']
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Banking, insurance, and financial services',
    icon: 'BanknotesIcon',
    color: 'green',
    isoStandards: ['iso-27001', 'iso-27002', 'iso-27005', 'iso-27701', 'iso-27017', 'iso-27018', 'iso-20000-1', 'iso-25010', 'iso-38500', 'iso-9001', 'iso-14001', 'iso-45001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-4217', 'iso-3166', 'iso-10002', 'iso-10004', 'iso-56002']
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Educational institutions and training organizations',
    icon: 'AcademicCapIcon',
    color: 'purple',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-27001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-20000-1', 'iso-25010', 'iso-38500', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-10002', 'iso-10004', 'iso-9241', 'iso-56002']
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Public sector and government organizations',
    icon: 'BuildingLibraryIcon',
    color: 'slate',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-27001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-20000-1', 'iso-25010', 'iso-38500', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-37120', 'iso-3166', 'iso-10002', 'iso-10004', 'iso-56002']
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Retail and consumer goods',
    icon: 'ShoppingBagIcon',
    color: 'orange',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-27001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-28000', 'iso-20252', 'iso-10002', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-4217', 'iso-3166', 'iso-10004', 'iso-56002']
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Construction and infrastructure development',
    icon: 'BuildingOfficeIcon',
    color: 'amber',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-50001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-55001', 'iso-8573', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-10002', 'iso-10004', 'iso-56002']
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Transportation and logistics',
    icon: 'TruckIcon',
    color: 'teal',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-50001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-28000', 'iso-55001', 'iso-8573', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-10002', 'iso-10004', 'iso-56002']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Agriculture and food production',
    icon: 'LeafIcon',
    color: 'emerald',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-50001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-55001', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-10002', 'iso-10004', 'iso-56002']
  },
  {
    id: 'creative-cultural',
    name: 'Creative & Cultural Industries',
    description: 'Arts, entertainment, media, and cultural organizations',
    icon: 'FilmIcon',
    color: 'violet',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-27001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-20121', 'iso-20000-1', 'iso-25010', 'iso-38500', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-10002', 'iso-10004', 'iso-9241', 'iso-56002']
  },
  {
    id: 'mining-minerals',
    name: 'Mining & Minerals',
    description: 'Mining, minerals processing, and extractive industries',
    icon: 'CubeIcon',
    color: 'amber',
    isoStandards: ['iso-9001', 'iso-14001', 'iso-45001', 'iso-50001', 'iso-22301', 'iso-37001', 'iso-31000', 'iso-26000', 'iso-55001', 'iso-8573', 'iso-37301', 'iso-37002', 'iso-19011', 'iso-10002', 'iso-10004', 'iso-56002']
  }
];

// ISO Standards
export const isoStandards: ISOStandard[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001',
    name: 'Quality Management Systems',
    fullName: 'ISO 9001:2015 - Quality management systems — Requirements',
    version: '2015',
    year: 2015,
    category: isoCategories[0],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9]],
    description: 'ISO 9001 is the international standard for quality management systems (QMS).',
    overview: 'ISO 9001 helps organizations improve customer satisfaction and efficiency.',
    purpose: 'To provide organizations with a framework for quality management.',
    scope: 'This International Standard specifies requirements for a quality management system.',
    keyPrinciples: [
      'Customer focus',
      'Leadership',
      'Engagement of people',
      'Process approach',
      'Improvement',
      'Evidence-based decision making',
      'Relationship management'
    ],
    sections: [
      {
        id: 'context-leadership',
        title: 'Context of the Organization & Leadership',
        description: 'Understanding the organization and its context.',
        requirements: [
          'Determine external and internal issues',
          'Identify interested parties and their needs',
          'Define the scope of the QMS',
          'Establish quality policy'
        ],
        implementation: [
          'Conduct organizational context analysis',
          'Identify stakeholders and their requirements',
          'Define QMS boundaries',
          'Develop quality policy'
        ],
        benefits: [
          'Clear quality direction',
          'Stakeholder engagement',
          'Defined scope and boundaries',
          'Leadership commitment'
        ],
        challenges: [
          'Identifying all stakeholders',
          'Balancing stakeholder interests',
          'Defining appropriate scope',
          'Ensuring leadership commitment'
        ],
        examples: [
          'Example 1: Documenting organizational context',
          'Example 2: Identifying key stakeholders',
          'Example 3: Defining scope boundaries',
          'Example 4: Establishing quality policy'
        ],
        resources: [
          {
            id: 'context-template',
            title: 'Context Template',
            type: 'template',
            description: 'Template for context implementation',
            url: '/resources/context-template.docx',
            size: '156 KB',
            duration: '1 hour',
            language: 'English',
            tags: ['template', 'context', 'implementation']
          }
        ]
      }
    ],
        requirements: [
      'Quality policy',
      'Quality objectives',
      'Process approach',
      'Continual improvement'
    ],
    benefits: [
      'Improved customer satisfaction',
      'Enhanced efficiency',
      'Better process control',
      'Increased competitiveness'
        ],
        implementation: [
      {
        id: 'step-1',
        title: 'Gap Analysis',
        description: 'Assess current quality management practices',
        duration: '2-4 weeks',
        resources: [
          {
            id: 'gap-analysis-template',
            title: 'Gap Analysis Template',
            type: 'template',
            description: 'Template for conducting gap analysis',
            url: '/resources/gap-analysis-template.xlsx',
            size: '156 KB',
            duration: '2 hours',
            language: 'English',
            tags: ['template', 'gap-analysis', 'assessment']
          }
        ],
        checklist: [
          'Review current processes',
          'Identify gaps and opportunities',
          'Document findings',
          'Create action plan'
        ],
        tips: [
          'Involve key stakeholders',
          'Use systematic approach',
          'Document everything',
          'Train personnel'
        ]
      }
    ],
    certification: {
      process: ['Gap analysis', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Quality manual', 'Procedures', 'Work instructions', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$5,000 - $15,000',
      auditors: ['Accredited certification bodies', 'Lead auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$15,000 - $50,000',
      certification: '$5,000 - $15,000',
      maintenance: '$3,000 - $8,000',
      training: '$2,000 - $5,000',
      total: '$25,000 - $78,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$15,000 - $50,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$5,000 - $15,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$3,000 - $8,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Initial assessment', 'Gap analysis', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'nigerian-manufacturing',
        title: 'Nigerian Manufacturing Company Achieves ISO 9001 Certification',
        company: 'Lagos Manufacturing Ltd',
        country: 'Nigeria',
        sector: 'Manufacturing',
        isoStandard: 'ISO 9001',
        challenge: 'The company faced quality issues and customer complaints.',
        solution: 'Implemented ISO 9001 quality management system.',
        results: [
          'Reduced customer complaints by 60%',
          'Improved on-time delivery from 75% to 95%',
          'Increased customer satisfaction scores by 40%'
        ],
        lessons: [
          'Strong leadership commitment is crucial',
          'Employee involvement drives success',
          'Customer focus improves market position'
        ],
        contact: 'info@lagosmanufacturing.com'
      }
    ],
    resources: [
      {
        id: 'iso-9001-guide',
        title: 'ISO 9001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 9001',
        url: '/resources/iso-9001-implementation-guide.pdf',
        size: '2.3 MB',
        duration: '2 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'quality management']
      }
    ],
    tags: ['quality management', 'process improvement', 'customer satisfaction'],
    difficulty: 'Intermediate',
    popularity: 3247,
    africanContext: {
      relevance: 'ISO 9001 is highly relevant for African businesses seeking to improve quality.',
        challenges: [
        'Limited resources for implementation',
        'Lack of qualified consultants',
        'Resistance to change'
      ],
      opportunities: [
        'Access to international markets',
        'Improved customer trust',
        'Enhanced competitiveness'
      ],
      successStories: [
        'Nigerian manufacturing companies achieving export certification',
        'Kenyan healthcare providers improving patient care'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'National standards bodies'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001',
    name: 'Environmental Management Systems',
    fullName: 'ISO 14001:2015 - Environmental management systems — Requirements with guidance for use',
    version: '2015',
    year: 2015,
    category: isoCategories[1],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9]],
    description: 'ISO 14001 is the international standard for environmental management systems (EMS).',
    overview: 'ISO 14001 helps organizations improve environmental performance and sustainability.',
    purpose: 'To provide organizations with a framework for environmental management.',
    scope: 'This International Standard specifies requirements for an environmental management system.',
    keyPrinciples: [
      'Environmental policy',
      'Planning',
      'Implementation and operation',
      'Checking and corrective action',
      'Management review',
      'Continual improvement'
    ],
    sections: [
      {
        id: 'environmental-policy',
        title: 'Environmental Policy & Planning',
        description: 'Establishing environmental policy and planning for environmental management.',
        requirements: [
          'Develop environmental policy',
          'Identify environmental aspects',
          'Determine compliance obligations',
          'Set environmental objectives'
        ],
        implementation: [
          'Conduct environmental review',
          'Identify significant aspects',
          'Establish environmental policy',
          'Set measurable objectives'
        ],
        benefits: [
          'Clear environmental direction',
          'Compliance with regulations',
          'Resource efficiency',
          'Stakeholder confidence'
        ],
        challenges: [
          'Identifying all environmental aspects',
          'Balancing economic and environmental goals',
          'Ensuring regulatory compliance',
          'Measuring environmental performance'
        ],
        examples: [
          'Example 1: Environmental policy development',
          'Example 2: Aspect identification process',
          'Example 3: Objective setting framework',
          'Example 4: Compliance assessment'
        ],
        resources: [
          {
            id: 'environmental-policy-template',
            title: 'Environmental Policy Template',
            type: 'template',
            description: 'Template for environmental policy development',
            url: '/resources/environmental-policy-template.docx',
            size: '145 KB',
            duration: '1 hour',
            language: 'English',
            tags: ['template', 'environmental', 'policy']
          }
        ]
      }
    ],
        requirements: [
      'Environmental policy',
      'Environmental aspects identification',
      'Legal compliance',
      'Environmental objectives'
    ],
    benefits: [
      'Reduced environmental impact',
      'Compliance with regulations',
      'Cost savings through efficiency',
      'Enhanced reputation'
        ],
        implementation: [
      {
        id: 'step-1',
        title: 'Environmental Review',
        description: 'Assess current environmental performance and impacts',
        duration: '2-4 weeks',
        resources: [
          {
            id: 'environmental-review-template',
            title: 'Environmental Review Template',
            type: 'template',
            description: 'Template for conducting environmental review',
            url: '/resources/environmental-review-template.xlsx',
            size: '178 KB',
            duration: '3 hours',
            language: 'English',
            tags: ['template', 'environmental', 'review']
          }
        ],
        checklist: [
          'Review current environmental practices',
          'Identify environmental aspects and impacts',
          'Assess compliance with regulations',
          'Document findings and opportunities'
        ],
        tips: [
          'Involve environmental experts',
          'Consider all operational activities',
          'Document regulatory requirements',
          'Engage stakeholders'
        ]
      }
    ],
    certification: {
      process: ['Environmental review', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Environmental manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$5,000 - $15,000',
      auditors: ['Accredited certification bodies', 'Environmental auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$20,000 - $60,000',
      certification: '$5,000 - $15,000',
      maintenance: '$4,000 - $10,000',
      training: '$3,000 - $6,000',
      total: '$32,000 - $91,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$20,000 - $60,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$5,000 - $15,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$4,000 - $10,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Environmental review', 'Aspect identification', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'kenyan-textile',
        title: 'Kenyan Textile Company Reduces Environmental Impact',
        company: 'Nairobi Textiles Ltd',
        country: 'Kenya',
        sector: 'Manufacturing',
        isoStandard: 'ISO 14001',
        challenge: 'The company faced environmental compliance issues and high energy costs.',
        solution: 'Implemented ISO 14001 environmental management system.',
        results: [
          'Reduced energy consumption by 25%',
          'Decreased water usage by 30%',
          'Achieved full regulatory compliance',
          'Reduced waste disposal costs by 40%'
        ],
        lessons: [
          'Environmental management drives efficiency',
          'Regulatory compliance builds trust',
          'Resource efficiency reduces costs',
          'Stakeholder engagement is crucial'
        ],
        contact: 'info@nairobitextiles.com'
      }
    ],
    resources: [
      {
        id: 'iso-14001-guide',
        title: 'ISO 14001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 14001',
        url: '/resources/iso-14001-implementation-guide.pdf',
        size: '2.8 MB',
        duration: '2.5 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'environmental management']
      }
    ],
    tags: ['environmental management', 'sustainability', 'compliance'],
    difficulty: 'Intermediate',
    popularity: 2156,
    africanContext: {
      relevance: 'ISO 14001 is crucial for African businesses facing environmental challenges.',
        challenges: [
        'Limited environmental expertise',
        'Regulatory complexity',
        'Resource constraints'
      ],
      opportunities: [
        'Access to green markets',
        'Improved regulatory compliance',
        'Enhanced sustainability credentials'
      ],
      successStories: [
        'South African mining companies reducing environmental impact',
        'Ghanaian agricultural firms improving sustainability'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Environmental protection agencies'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001',
    name: 'Occupational Health and Safety Management Systems',
    fullName: 'ISO 45001:2018 - Occupational health and safety management systems — Requirements with guidance for use',
    version: '2018',
    year: 2018,
    category: isoCategories[2],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9]],
    description: 'ISO 45001 is the international standard for occupational health and safety management systems.',
    overview: 'ISO 45001 helps organizations provide safe and healthy workplaces.',
    purpose: 'To provide organizations with a framework for OH&S management.',
    scope: 'This International Standard specifies requirements for an occupational health and safety management system.',
    keyPrinciples: [
      'Leadership and worker participation',
      'Planning',
      'Support and operation',
      'Performance evaluation',
      'Improvement'
    ],
    sections: [
      {
        id: 'ohs-policy-planning',
        title: 'OH&S Policy & Planning',
        description: 'Establishing OH&S policy and planning for health and safety management.',
        requirements: [
          'Develop OH&S policy',
          'Identify hazards and risks',
          'Determine compliance obligations',
          'Set OH&S objectives'
        ],
        implementation: [
          'Conduct OH&S review',
          'Identify significant hazards',
          'Establish OH&S policy',
          'Set measurable objectives'
        ],
        benefits: [
          'Clear safety direction',
          'Compliance with regulations',
          'Risk reduction',
          'Stakeholder confidence'
        ],
        challenges: [
          'Identifying all hazards',
          'Balancing safety and productivity',
          'Ensuring regulatory compliance',
          'Measuring safety performance'
        ],
        examples: [
          'Example 1: OH&S policy development',
          'Example 2: Hazard identification process',
          'Example 3: Objective setting framework',
          'Example 4: Compliance assessment'
        ],
        resources: [
          {
            id: 'ohs-policy-template',
            title: 'OH&S Policy Template',
            type: 'template',
            description: 'Template for OH&S policy development',
            url: '/resources/ohs-policy-template.docx',
            size: '148 KB',
            duration: '1 hour',
            language: 'English',
            tags: ['template', 'ohs', 'policy']
          }
        ]
      }
    ],
    requirements: [
      'OH&S policy',
      'Hazard identification',
      'Risk assessment',
      'OH&S objectives'
    ],
    benefits: [
      'Reduced workplace injuries',
      'Improved safety culture',
      'Compliance with regulations',
      'Enhanced reputation'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'OH&S Review',
        description: 'Assess current health and safety practices',
        duration: '2-4 weeks',
        resources: [
          {
            id: 'ohs-review-template',
            title: 'OH&S Review Template',
            type: 'template',
            description: 'Template for conducting OH&S review',
            url: '/resources/ohs-review-template.xlsx',
            size: '165 KB',
            duration: '3 hours',
            language: 'English',
            tags: ['template', 'ohs', 'review']
          }
        ],
        checklist: [
          'Review current safety practices',
          'Identify hazards and risks',
          'Assess compliance with regulations',
          'Document findings and opportunities'
        ],
        tips: [
          'Involve workers in the process',
          'Consider all workplace activities',
          'Document regulatory requirements',
          'Engage safety experts'
        ]
      }
    ],
    certification: {
      process: ['OH&S review', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['OH&S manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$6,000 - $18,000',
      auditors: ['Accredited certification bodies', 'OH&S auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$25,000 - $75,000',
      certification: '$6,000 - $18,000',
      maintenance: '$5,000 - $12,000',
      training: '$4,000 - $8,000',
      total: '$40,000 - $113,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$25,000 - $75,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$6,000 - $18,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$5,000 - $12,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['OH&S review', 'Hazard identification', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'south-african-mining',
        title: 'South African Mining Company Improves Safety Record',
        company: 'Johannesburg Mining Corp',
        country: 'South Africa',
        sector: 'Manufacturing',
        isoStandard: 'ISO 45001',
        challenge: 'The company faced high injury rates and safety compliance issues.',
        solution: 'Implemented ISO 45001 occupational health and safety management system.',
        results: [
          'Reduced workplace injuries by 70%',
          'Improved safety culture scores by 50%',
          'Achieved full regulatory compliance',
          'Reduced insurance costs by 30%'
        ],
        lessons: [
          'Worker participation is crucial',
          'Leadership commitment drives success',
          'Safety culture takes time to build',
          'Regular training is essential'
        ],
        contact: 'info@johannesburgmining.com'
      }
    ],
    resources: [
      {
        id: 'iso-45001-guide',
        title: 'ISO 45001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 45001',
        url: '/resources/iso-45001-implementation-guide.pdf',
        size: '3.1 MB',
        duration: '3 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'occupational health and safety']
      }
    ],
    tags: ['occupational health and safety', 'workplace safety', 'risk management'],
    difficulty: 'Intermediate',
    popularity: 1892,
    africanContext: {
      relevance: 'ISO 45001 is essential for African businesses to improve workplace safety.',
      challenges: [
        'Limited safety expertise',
        'Regulatory complexity',
        'Resource constraints'
      ],
      opportunities: [
        'Improved worker safety',
        'Enhanced regulatory compliance',
        'Reduced insurance costs'
      ],
      successStories: [
        'Nigerian construction companies reducing accidents',
        'Kenyan manufacturing firms improving safety culture'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Occupational safety authorities'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-50001',
    code: 'ISO 50001',
    name: 'Energy Management Systems',
    fullName: 'ISO 50001:2018 - Energy management systems — Requirements with guidance for use',
    version: '2018',
    year: 2018,
    category: isoCategories[3],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9]],
    description: 'ISO 50001 is the international standard for energy management systems.',
    overview: 'ISO 50001 helps organizations improve energy performance and efficiency.',
    purpose: 'To provide organizations with a framework for energy management.',
    scope: 'This International Standard specifies requirements for an energy management system.',
    keyPrinciples: [
      'Energy policy',
      'Energy planning',
      'Implementation and operation',
      'Performance evaluation',
      'Management review',
      'Continual improvement'
    ],
    sections: [
      {
        id: 'energy-policy-planning',
        title: 'Energy Policy & Planning',
        description: 'Establishing energy policy and planning for energy management.',
        requirements: [
          'Develop energy policy',
          'Conduct energy review',
          'Identify energy performance indicators',
          'Set energy objectives'
        ],
        implementation: [
          'Conduct energy review',
          'Identify significant energy uses',
          'Establish energy policy',
          'Set measurable objectives'
        ],
        benefits: [
          'Clear energy direction',
          'Compliance with regulations',
          'Cost reduction',
          'Stakeholder confidence'
        ],
        challenges: [
          'Identifying all energy uses',
          'Balancing efficiency and productivity',
          'Ensuring regulatory compliance',
          'Measuring energy performance'
        ],
        examples: [
          'Example 1: Energy policy development',
          'Example 2: Energy review process',
          'Example 3: Performance indicator framework',
          'Example 4: Objective setting'
        ],
        resources: [
          {
            id: 'energy-policy-template',
            title: 'Energy Policy Template',
            type: 'template',
            description: 'Template for energy policy development',
            url: '/resources/energy-policy-template.docx',
            size: '152 KB',
            duration: '1 hour',
            language: 'English',
            tags: ['template', 'energy', 'policy']
          }
        ]
      }
    ],
    requirements: [
      'Energy policy',
      'Energy review',
      'Energy performance indicators',
      'Energy objectives'
    ],
    benefits: [
      'Reduced energy costs',
      'Improved energy efficiency',
      'Compliance with regulations',
      'Enhanced sustainability'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'Energy Review',
        description: 'Assess current energy performance and consumption',
        duration: '2-4 weeks',
        resources: [
          {
            id: 'energy-review-template',
            title: 'Energy Review Template',
            type: 'template',
            description: 'Template for conducting energy review',
            url: '/resources/energy-review-template.xlsx',
            size: '142 KB',
            duration: '2.5 hours',
            language: 'English',
            tags: ['template', 'energy', 'review']
          }
        ],
        checklist: [
          'Review current energy practices',
          'Identify energy consumption patterns',
          'Assess energy efficiency opportunities',
          'Document findings and opportunities'
        ],
        tips: [
          'Involve energy experts',
          'Consider all energy sources',
          'Document energy data',
          'Engage stakeholders'
        ]
      }
    ],
    certification: {
      process: ['Energy review', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Energy manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$5,000 - $15,000',
      auditors: ['Accredited certification bodies', 'Energy auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$20,000 - $60,000',
      certification: '$5,000 - $15,000',
      maintenance: '$4,000 - $10,000',
      training: '$3,000 - $6,000',
      total: '$32,000 - $91,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$20,000 - $60,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$5,000 - $15,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$4,000 - $10,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Energy review', 'Performance indicators', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'ghanaian-manufacturing',
        title: 'Ghanaian Manufacturing Company Reduces Energy Costs',
        company: 'Accra Manufacturing Ltd',
        country: 'Ghana',
        sector: 'Manufacturing',
        isoStandard: 'ISO 50001',
        challenge: 'The company faced high energy costs and inefficiency.',
        solution: 'Implemented ISO 50001 energy management system.',
        results: [
          'Reduced energy costs by 35%',
          'Improved energy efficiency by 25%',
          'Achieved energy savings of $50,000 annually',
          'Enhanced sustainability credentials'
        ],
        lessons: [
          'Energy management drives cost savings',
          'Data-driven approach is essential',
          'Employee engagement is crucial',
          'Continuous monitoring is key'
        ],
        contact: 'info@accramanufacturing.com'
      }
    ],
    resources: [
      {
        id: 'iso-50001-guide',
        title: 'ISO 50001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 50001',
        url: '/resources/iso-50001-implementation-guide.pdf',
        size: '2.9 MB',
        duration: '2.5 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'energy management']
      }
    ],
    tags: ['energy management', 'efficiency', 'sustainability'],
    difficulty: 'Intermediate',
    popularity: 1456,
    africanContext: {
      relevance: 'ISO 50001 is crucial for African businesses facing energy challenges.',
      challenges: [
        'Limited energy expertise',
        'Infrastructure constraints',
        'Data collection challenges'
      ],
      opportunities: [
        'Reduced energy costs',
        'Improved efficiency',
        'Enhanced sustainability'
      ],
      successStories: [
        'Nigerian industrial companies reducing energy costs',
        'Kenyan commercial buildings improving efficiency'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Energy regulatory authorities'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-22301',
    code: 'ISO 22301',
    name: 'Business Continuity Management',
    fullName: 'ISO 22301:2019 - Security and resilience — Business continuity management systems — Requirements',
    version: '2019',
    year: 2019,
    category: isoCategories[4],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9]],
    description: 'ISO 22301 is the international standard for business continuity management systems.',
    overview: 'ISO 22301 helps organizations ensure preparedness and recovery from disruptive incidents.',
    purpose: 'To provide organizations with a framework for business continuity management.',
    scope: 'This International Standard specifies requirements for a business continuity management system.',
    keyPrinciples: [
      'Leadership and commitment',
      'Business continuity policy',
      'Business impact analysis',
      'Risk assessment',
      'Business continuity strategies',
      'Business continuity plans'
    ],
    sections: [
      {
        id: 'bc-policy-planning',
        title: 'Business Continuity Policy & Planning',
        description: 'Establishing business continuity policy and planning for resilience.',
        requirements: [
          'Develop business continuity policy',
          'Conduct business impact analysis',
          'Assess risks and threats',
          'Develop business continuity strategies'
        ],
        implementation: [
          'Conduct business impact analysis',
          'Identify critical functions',
          'Establish business continuity policy',
          'Develop recovery strategies'
        ],
        benefits: [
          'Enhanced resilience',
          'Reduced downtime',
          'Stakeholder confidence',
          'Regulatory compliance'
        ],
        challenges: [
          'Identifying all critical functions',
          'Balancing cost and resilience',
          'Ensuring plan effectiveness',
          'Maintaining plan currency'
        ],
        examples: [
          'Example 1: Business impact analysis',
          'Example 2: Risk assessment process',
          'Example 3: Recovery strategy development',
          'Example 4: Plan testing framework'
        ],
        resources: [
          {
            id: 'bc-policy-template',
            title: 'Business Continuity Policy Template',
            type: 'template',
            description: 'Template for business continuity policy development',
            url: '/resources/bc-policy-template.docx',
            size: '156 KB',
            duration: '1 hour',
            language: 'English',
            tags: ['template', 'business continuity', 'policy']
          }
        ]
      }
    ],
    requirements: [
      'Business continuity policy',
      'Business impact analysis',
      'Risk assessment',
      'Business continuity plans'
    ],
    benefits: [
      'Enhanced organizational resilience',
      'Reduced downtime and losses',
      'Improved stakeholder confidence',
      'Regulatory compliance'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'Business Impact Analysis',
        description: 'Assess critical business functions and their dependencies',
        duration: '3-6 weeks',
        resources: [
          {
            id: 'bia-template',
            title: 'Business Impact Analysis Template',
            type: 'template',
            description: 'Template for conducting business impact analysis',
            url: '/resources/bia-template.xlsx',
            size: '189 KB',
            duration: '4 hours',
            language: 'English',
            tags: ['template', 'business impact', 'analysis']
          }
        ],
        checklist: [
          'Identify critical business functions',
          'Assess dependencies and interdependencies',
          'Determine recovery time objectives',
          'Document findings and recommendations'
        ],
        tips: [
          'Involve key stakeholders',
          'Consider all business functions',
          'Document assumptions clearly',
          'Validate findings with management'
        ]
      }
    ],
    certification: {
      process: ['Business impact analysis', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Business continuity manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$8,000 - $25,000',
      auditors: ['Accredited certification bodies', 'Business continuity auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$30,000 - $100,000',
      certification: '$8,000 - $25,000',
      maintenance: '$6,000 - $15,000',
      training: '$5,000 - $10,000',
      total: '$49,000 - $150,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$30,000 - $100,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$8,000 - $25,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$6,000 - $15,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Business impact analysis', 'Risk assessment', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'nigerian-bank',
        title: 'Nigerian Bank Enhances Business Continuity',
        company: 'Lagos Bank Ltd',
        country: 'Nigeria',
        sector: 'Finance',
        isoStandard: 'ISO 22301',
        challenge: 'The bank faced risks from cyber attacks and natural disasters.',
        solution: 'Implemented ISO 22301 business continuity management system.',
        results: [
          'Reduced downtime by 80%',
          'Improved recovery time from 72 hours to 4 hours',
          'Enhanced customer confidence',
          'Achieved regulatory compliance'
        ],
        lessons: [
          'Regular testing is essential',
          'Stakeholder engagement is crucial',
          'Technology redundancy is key',
          'Continuous improvement drives success'
        ],
        contact: 'info@lagosbank.com'
      }
    ],
    resources: [
      {
        id: 'iso-22301-guide',
        title: 'ISO 22301 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 22301',
        url: '/resources/iso-22301-implementation-guide.pdf',
        size: '3.4 MB',
        duration: '3.5 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'business continuity']
      }
    ],
    tags: ['business continuity', 'disaster recovery', 'resilience'],
    difficulty: 'Advanced',
    popularity: 1234,
    africanContext: {
      relevance: 'ISO 22301 is crucial for African businesses facing various risks.',
      challenges: [
        'Limited expertise in business continuity',
        'Resource constraints',
        'Infrastructure challenges'
      ],
      opportunities: [
        'Enhanced resilience',
        'Improved stakeholder confidence',
        'Regulatory compliance'
      ],
      successStories: [
        'South African banks improving resilience',
        'Kenyan telecom companies reducing downtime'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Business continuity associations'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-37001',
    code: 'ISO 37001',
    name: 'Anti-Bribery Management Systems',
    fullName: 'ISO 37001:2016 - Anti-bribery management systems — Requirements with guidance for use',
    version: '2016',
    year: 2016,
    category: isoCategories[5],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9]],
    description: 'ISO 37001 is the international standard for anti-bribery management systems.',
    overview: 'ISO 37001 helps organizations prevent, detect, and respond to bribery.',
    purpose: 'To provide organizations with a framework for anti-bribery management.',
    scope: 'This International Standard specifies requirements for an anti-bribery management system.',
    keyPrinciples: [
      'Anti-bribery policy',
      'Risk assessment',
      'Due diligence',
      'Financial controls',
      'Reporting and investigation',
      'Training and awareness'
    ],
    sections: [
      {
        id: 'anti-bribery-policy',
        title: 'Anti-Bribery Policy & Risk Assessment',
        description: 'Establishing anti-bribery policy and conducting risk assessment.',
      requirements: [
          'Develop anti-bribery policy',
          'Conduct bribery risk assessment',
          'Implement due diligence procedures',
          'Establish financial controls'
        ],
        implementation: [
          'Conduct bribery risk assessment',
          'Identify high-risk areas',
          'Establish anti-bribery policy',
          'Implement controls'
        ],
        benefits: [
          'Reduced bribery risk',
          'Enhanced reputation',
          'Regulatory compliance',
          'Stakeholder confidence'
        ],
        challenges: [
          'Identifying all bribery risks',
          'Balancing business and compliance',
          'Ensuring policy effectiveness',
          'Maintaining awareness'
        ],
        examples: [
          'Example 1: Anti-bribery policy development',
          'Example 2: Risk assessment process',
          'Example 3: Due diligence procedures',
          'Example 4: Control implementation'
        ],
        resources: [
          {
            id: 'anti-bribery-policy-template',
            title: 'Anti-Bribery Policy Template',
            type: 'template',
            description: 'Template for anti-bribery policy development',
            url: '/resources/anti-bribery-policy-template.docx',
            size: '162 KB',
            duration: '1.5 hours',
            language: 'English',
            tags: ['template', 'anti-bribery', 'policy']
          }
        ]
      }
    ],
    requirements: [
      'Anti-bribery policy',
      'Bribery risk assessment',
      'Due diligence procedures',
      'Financial controls'
    ],
    benefits: [
      'Reduced bribery risk',
      'Enhanced reputation',
      'Regulatory compliance',
      'Stakeholder confidence'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'Bribery Risk Assessment',
        description: 'Assess bribery risks and vulnerabilities',
        duration: '2-4 weeks',
        resources: [
          {
            id: 'bribery-risk-template',
            title: 'Bribery Risk Assessment Template',
            type: 'template',
            description: 'Template for conducting bribery risk assessment',
            url: '/resources/bribery-risk-template.xlsx',
            size: '178 KB',
            duration: '3 hours',
            language: 'English',
            tags: ['template', 'bribery', 'risk assessment']
          }
        ],
        checklist: [
          'Review current anti-bribery practices',
          'Identify bribery risks and vulnerabilities',
          'Assess compliance with regulations',
          'Document findings and recommendations'
        ],
        tips: [
          'Involve legal experts',
          'Consider all business relationships',
          'Document risk factors clearly',
          'Engage stakeholders'
        ]
      }
    ],
    certification: {
      process: ['Bribery risk assessment', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Anti-bribery manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$10,000 - $30,000',
      auditors: ['Accredited certification bodies', 'Anti-bribery auditors', 'Legal experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$40,000 - $120,000',
      certification: '$10,000 - $30,000',
      maintenance: '$8,000 - $20,000',
      training: '$6,000 - $12,000',
      total: '$64,000 - $182,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$40,000 - $120,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$10,000 - $30,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$8,000 - $20,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Bribery risk assessment', 'Policy development', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'kenyan-construction',
        title: 'Kenyan Construction Company Implements Anti-Bribery System',
        company: 'Nairobi Construction Ltd',
        country: 'Kenya',
        sector: 'Construction',
        isoStandard: 'ISO 37001',
        challenge: 'The company faced bribery risks in government contracts.',
        solution: 'Implemented ISO 37001 anti-bribery management system.',
        results: [
          'Reduced bribery incidents by 90%',
          'Enhanced reputation and trust',
          'Improved contract success rate',
          'Achieved regulatory compliance'
        ],
        lessons: [
          'Strong leadership commitment is essential',
          'Regular training is crucial',
          'Clear policies drive compliance',
          'Monitoring and reporting are key'
        ],
        contact: 'info@nairobiconstruction.com'
      }
    ],
    resources: [
      {
        id: 'iso-37001-guide',
        title: 'ISO 37001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 37001',
        url: '/resources/iso-37001-implementation-guide.pdf',
        size: '3.2 MB',
        duration: '3 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'anti-bribery']
      }
    ],
    tags: ['anti-bribery', 'compliance', 'ethics'],
    difficulty: 'Advanced',
    popularity: 987,
    africanContext: {
      relevance: 'ISO 37001 is essential for African businesses to combat corruption.',
      challenges: [
        'Cultural resistance to change',
        'Limited legal expertise',
        'Resource constraints'
      ],
      opportunities: [
        'Enhanced reputation',
        'Improved business relationships',
        'Regulatory compliance'
      ],
      successStories: [
        'Nigerian oil companies improving compliance',
        'Ghanaian mining firms reducing corruption risks'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Anti-corruption agencies'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-31000',
    code: 'ISO 31000',
    name: 'Risk Management Guidelines',
    fullName: 'ISO 31000:2018 - Risk management — Guidelines',
    version: '2018',
    year: 2018,
    category: isoCategories[6],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9]],
    description: 'ISO 31000 provides principles and framework for managing risk effectively.',
    overview: 'ISO 31000 helps organizations identify, assess, and manage risks.',
    purpose: 'To provide organizations with a framework for risk management.',
    scope: 'This International Standard provides guidelines for managing risk.',
    keyPrinciples: [
      'Integrated',
      'Structured and comprehensive',
      'Customized',
      'Inclusive',
      'Dynamic',
      'Best available information',
      'Human and cultural factors',
      'Continual improvement'
    ],
    sections: [
      {
        id: 'risk-framework',
        title: 'Risk Management Framework',
        description: 'Establishing risk management framework and process.',
        requirements: [
          'Develop risk management framework',
          'Establish risk management process',
          'Define risk criteria',
          'Implement risk treatment'
        ],
        implementation: [
          'Establish risk management policy',
          'Define risk criteria',
          'Implement risk assessment process',
          'Develop risk treatment plans'
        ],
        benefits: [
          'Improved decision making',
          'Enhanced resilience',
          'Better resource allocation',
          'Stakeholder confidence'
        ],
        challenges: [
          'Identifying all risks',
          'Balancing risk and opportunity',
          'Ensuring framework effectiveness',
          'Maintaining risk awareness'
        ],
        examples: [
          'Example 1: Risk management policy',
          'Example 2: Risk assessment process',
          'Example 3: Recovery strategy development',
          'Example 4: Plan testing framework'
        ],
        resources: [
          {
            id: 'risk-framework-template',
            title: 'Risk Management Framework Template',
            type: 'template',
            description: 'Template for risk management framework development',
            url: '/resources/risk-framework-template.docx',
            size: '168 KB',
            duration: '2 hours',
            language: 'English',
            tags: ['template', 'risk management', 'framework']
          }
        ]
      }
    ],
    requirements: [
      'Risk management framework',
      'Risk management process',
      'Risk criteria',
      'Risk treatment'
    ],
    benefits: [
      'Improved decision making',
      'Enhanced resilience',
      'Better resource allocation',
      'Stakeholder confidence'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'Risk Assessment',
        description: 'Identify and assess risks to the organization',
        duration: '3-6 weeks',
        resources: [
          {
            id: 'risk-assessment-template',
            title: 'Risk Assessment Template',
            type: 'template',
            description: 'Template for conducting risk assessment',
            url: '/resources/risk-assessment-template.xlsx',
            size: '195 KB',
            duration: '4 hours',
            language: 'English',
            tags: ['template', 'risk', 'assessment']
          }
        ],
        checklist: [
          'Identify all potential risks',
          'Assess risk likelihood and impact',
          'Evaluate risk criteria',
          'Document risk register'
        ],
        tips: [
          'Involve key stakeholders',
          'Use systematic approach',
          'Consider all risk categories',
          'Document assumptions clearly'
        ]
      }
    ],
    certification: {
      process: ['Risk assessment', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Risk management manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$8,000 - $25,000',
      auditors: ['Accredited certification bodies', 'Risk management auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$25,000 - $80,000',
      certification: '$8,000 - $25,000',
      maintenance: '$5,000 - $15,000',
      training: '$4,000 - $8,000',
      total: '$42,000 - $128,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$25,000 - $80,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$8,000 - $25,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$5,000 - $15,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Risk assessment', 'Framework development', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'south-african-bank',
        title: 'South African Bank Implements Risk Management',
        company: 'Cape Town Bank Ltd',
        country: 'South Africa',
        sector: 'Finance',
        isoStandard: 'ISO 31000',
        challenge: 'The bank faced complex risks from market volatility and regulatory changes.',
        solution: 'Implemented ISO 31000 risk management framework.',
        results: [
          'Improved risk-based decision making',
          'Enhanced regulatory compliance',
          'Reduced risk incidents by 40%',
          'Improved stakeholder confidence'
        ],
        lessons: [
          'Risk culture is crucial',
          'Regular risk reviews are essential',
          'Stakeholder engagement drives success',
          'Continuous improvement is key'
        ],
        contact: 'info@capetownbank.com'
      }
    ],
    resources: [
      {
        id: 'iso-31000-guide',
        title: 'ISO 31000 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 31000',
        url: '/resources/iso-31000-implementation-guide.pdf',
        size: '3.0 MB',
        duration: '3 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'risk management']
      }
    ],
    tags: ['risk management', 'governance', 'decision making'],
    difficulty: 'Intermediate',
    popularity: 1654,
    africanContext: {
      relevance: 'ISO 31000 is crucial for African businesses facing various risks.',
      challenges: [
        'Limited risk management expertise',
        'Resource constraints',
        'Data availability issues'
      ],
      opportunities: [
        'Improved decision making',
        'Enhanced resilience',
        'Better resource allocation'
      ],
      successStories: [
        'Nigerian banks improving risk management',
        'Kenyan insurance companies enhancing resilience'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Risk management associations'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-26000',
    code: 'ISO 26000',
    name: 'Social Responsibility Guidance',
    fullName: 'ISO 26000:2010 - Guidance on social responsibility',
    version: '2010',
    year: 2010,
    category: isoCategories[7],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9], sectors[10], sectors[11]],
    description: 'ISO 26000 provides guidance on social responsibility.',
    overview: 'ISO 26000 helps organizations operate in a socially responsible manner.',
    purpose: 'To provide organizations with guidance on social responsibility.',
    scope: 'This International Standard provides guidance on social responsibility.',
    keyPrinciples: [
      'Accountability',
      'Transparency',
      'Ethical behavior',
      'Respect for stakeholder interests',
      'Respect for the rule of law',
      'Respect for international norms of behavior',
      'Respect for human rights'
    ],
    sections: [
      {
        id: 'sr-framework',
        title: 'Social Responsibility Framework',
        description: 'Establishing social responsibility framework and principles.',
        requirements: [
          'Develop social responsibility policy',
          'Identify stakeholders',
          'Assess social impacts',
          'Implement social responsibility initiatives'
        ],
        implementation: [
          'Establish social responsibility policy',
          'Identify key stakeholders',
          'Assess social impacts',
          'Develop action plans'
        ],
        benefits: [
          'Enhanced reputation',
          'Improved stakeholder relationships',
          'Better community engagement',
          'Sustainable business practices'
        ],
        challenges: [
          'Identifying all stakeholders',
          'Balancing business and social goals',
          'Measuring social impact',
          'Ensuring long-term commitment'
        ],
        examples: [
          'Example 1: Social responsibility policy',
          'Example 2: Stakeholder engagement process',
          'Example 3: Impact assessment framework',
          'Example 4: Community development initiatives'
        ],
        resources: [
          {
            id: 'sr-framework-template',
            title: 'Social Responsibility Framework Template',
            type: 'template',
            description: 'Template for social responsibility framework development',
            url: '/resources/sr-framework-template.docx',
            size: '172 KB',
            duration: '2 hours',
            language: 'English',
            tags: ['template', 'social responsibility', 'framework']
          }
        ]
      }
    ],
    requirements: [
      'Social responsibility policy',
      'Stakeholder identification',
      'Social impact assessment',
      'Social responsibility initiatives'
    ],
    benefits: [
      'Enhanced reputation',
      'Improved stakeholder relationships',
      'Better community engagement',
      'Sustainable business practices'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'Social Impact Assessment',
        description: 'Assess social impacts and stakeholder needs',
        duration: '2-4 weeks',
        resources: [
          {
            id: 'social-impact-template',
            title: 'Social Impact Assessment Template',
            type: 'template',
            description: 'Template for conducting social impact assessment',
            url: '/resources/social-impact-template.xlsx',
            size: '185 KB',
            duration: '3 hours',
            language: 'English',
            tags: ['template', 'social impact', 'assessment']
          }
        ],
        checklist: [
          'Identify key stakeholders',
          'Assess social impacts',
          'Evaluate community needs',
          'Document findings and recommendations'
        ],
        tips: [
          'Engage with communities',
          'Consider long-term impacts',
          'Document stakeholder feedback',
          'Develop action plans'
        ]
      }
    ],
    certification: {
      process: ['Social impact assessment', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Social responsibility manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$6,000 - $20,000',
      auditors: ['Accredited certification bodies', 'Social responsibility auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$20,000 - $60,000',
      certification: '$6,000 - $20,000',
      maintenance: '$4,000 - $12,000',
      training: '$3,000 - $6,000',
      total: '$33,000 - $98,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$20,000 - $60,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$6,000 - $20,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$4,000 - $12,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Social impact assessment', 'Policy development', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'ghanaian-mining',
        title: 'Ghanaian Mining Company Enhances Social Responsibility',
        company: 'Accra Mining Corp',
        country: 'Ghana',
        sector: 'Manufacturing',
        isoStandard: 'ISO 26000',
        challenge: 'The company faced community concerns about environmental and social impacts.',
        solution: 'Implemented ISO 26000 social responsibility framework.',
        results: [
          'Improved community relationships',
          'Enhanced reputation and trust',
          'Reduced community conflicts',
          'Achieved sustainable development goals'
        ],
        lessons: [
          'Community engagement is crucial',
          'Long-term commitment is essential',
          'Transparency builds trust',
          'Sustainable practices drive success'
        ],
        contact: 'info@accramining.com'
      }
    ],
    resources: [
      {
        id: 'iso-26000-guide',
        title: 'ISO 26000 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 26000',
        url: '/resources/iso-26000-implementation-guide.pdf',
        size: '2.8 MB',
        duration: '2.5 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'social responsibility']
      }
    ],
    tags: ['social responsibility', 'sustainability', 'stakeholder engagement'],
    difficulty: 'Intermediate',
    popularity: 1432,
    africanContext: {
      relevance: 'ISO 26000 is essential for African businesses to demonstrate social responsibility.',
      challenges: [
        'Limited social responsibility expertise',
        'Resource constraints',
        'Community engagement complexity'
      ],
      opportunities: [
        'Enhanced reputation',
        'Improved community relationships',
        'Sustainable business practices'
      ],
      successStories: [
        'Nigerian oil companies improving community relations',
        'Kenyan agricultural firms enhancing sustainability'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Social responsibility organizations'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-27001',
    code: 'ISO/IEC 27001',
    name: 'Information Security Management Systems',
    fullName: 'ISO/IEC 27001:2013 - Information technology — Security techniques — Information security management systems — Requirements',
    version: '2013',
    year: 2013,
    category: isoCategories[8],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9], sectors[10], sectors[11]],
    description: 'ISO/IEC 27001 is the international standard for information security management systems.',
    overview: 'ISO/IEC 27001 helps organizations protect information assets.',
    purpose: 'To provide organizations with a framework for information security management.',
    scope: 'This International Standard specifies requirements for an information security management system.',
    keyPrinciples: [
      'Information security policy',
      'Risk assessment',
      'Security controls',
      'Incident management',
      'Business continuity',
      'Compliance'
    ],
    sections: [
      {
        id: 'information-security-policy',
        title: 'Information Security Policy & Risk Assessment',
        description: 'Establishing information security policy and conducting risk assessment.',
        requirements: [
          'Develop information security policy',
          'Conduct information security risk assessment',
          'Implement security controls',
          'Establish incident management procedures'
        ],
        implementation: [
          'Conduct information security risk assessment',
          'Identify information assets',
          'Establish information security policy',
          'Implement security controls'
        ],
        benefits: [
          'Enhanced information security',
          'Reduced security incidents',
          'Regulatory compliance',
          'Stakeholder confidence'
        ],
        challenges: [
          'Identifying all information assets',
          'Balancing security and usability',
          'Ensuring regulatory compliance',
          'Maintaining security awareness'
        ],
        examples: [
          'Example 1: Information security policy development',
          'Example 2: Risk assessment process',
          'Example 3: Security control implementation',
          'Example 4: Incident management procedures'
        ],
        resources: [
          {
            id: 'information-security-policy-template',
            title: 'Information Security Policy Template',
            type: 'template',
            description: 'Template for information security policy development',
            url: '/resources/information-security-policy-template.docx',
            size: '175 KB',
            duration: '2 hours',
            language: 'English',
            tags: ['template', 'information security', 'policy']
          }
        ]
      }
    ],
    requirements: [
      'Information security policy',
      'Information security risk assessment',
      'Security controls',
      'Incident management procedures'
    ],
    benefits: [
      'Enhanced information security',
      'Reduced security incidents',
      'Regulatory compliance',
      'Stakeholder confidence'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'Information Security Risk Assessment',
        description: 'Assess information security risks and vulnerabilities',
        duration: '3-6 weeks',
        resources: [
          {
            id: 'information-security-risk-template',
            title: 'Information Security Risk Assessment Template',
            type: 'template',
            description: 'Template for conducting information security risk assessment',
            url: '/resources/information-security-risk-template.xlsx',
            size: '198 KB',
            duration: '4 hours',
            language: 'English',
            tags: ['template', 'information security', 'risk assessment']
          }
        ],
        checklist: [
          'Identify information assets',
          'Assess security risks and vulnerabilities',
          'Evaluate security controls',
          'Document findings and recommendations'
        ],
        tips: [
          'Involve IT security experts',
          'Consider all information assets',
          'Document risk factors clearly',
          'Engage stakeholders'
        ]
      }
    ],
    certification: {
      process: ['Information security risk assessment', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Information security manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$12,000 - $35,000',
      auditors: ['Accredited certification bodies', 'Information security auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$50,000 - $150,000',
      certification: '$12,000 - $35,000',
      maintenance: '$10,000 - $25,000',
      training: '$8,000 - $15,000',
      total: '$80,000 - $225,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$50,000 - $150,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$12,000 - $35,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$10,000 - $25,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Information security risk assessment', 'Policy development', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'nigerian-bank-security',
        title: 'Nigerian Bank Enhances Information Security',
        company: 'Abuja Bank Ltd',
        country: 'Nigeria',
        sector: 'Finance',
        isoStandard: 'ISO/IEC 27001',
        challenge: 'The bank faced increasing cyber threats and regulatory requirements.',
        solution: 'Implemented ISO/IEC 27001 information security management system.',
        results: [
          'Reduced security incidents by 75%',
          'Enhanced customer trust and confidence',
          'Achieved regulatory compliance',
          'Improved incident response time'
        ],
        lessons: [
          'Strong security culture is essential',
          'Regular training is crucial',
          'Incident response planning is key',
          'Continuous monitoring is important'
        ],
        contact: 'info@abujabank.com'
      }
    ],
    resources: [
      {
        id: 'iso-27001-guide',
        title: 'ISO/IEC 27001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO/IEC 27001',
        url: '/resources/iso-27001-implementation-guide.pdf',
        size: '3.6 MB',
        duration: '4 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'information security']
      }
    ],
    tags: ['information security', 'cybersecurity', 'data protection'],
    difficulty: 'Advanced',
    popularity: 2876,
    africanContext: {
      relevance: 'ISO/IEC 27001 is crucial for African businesses facing cyber threats.',
      challenges: [
        'Limited cybersecurity expertise',
        'Infrastructure constraints',
        'Resource limitations'
      ],
      opportunities: [
        'Enhanced information security',
        'Improved customer trust',
        'Regulatory compliance'
      ],
      successStories: [
        'South African banks improving cybersecurity',
        'Kenyan fintech companies enhancing security'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Cybersecurity organizations'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-31000',
    code: 'ISO 31000',
    name: 'Risk Management Guidelines',
    fullName: 'ISO 31000:2018 - Risk management — Guidelines',
    version: '2018',
    year: 2018,
    category: isoCategories[6],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9], sectors[10], sectors[11]],
    description: 'ISO 31000 provides principles and framework for managing risk effectively.',
    overview: 'ISO 31000 helps organizations identify, assess, and manage risks.',
    purpose: 'To provide organizations with a framework for risk management.',
    scope: 'This International Standard provides guidelines for managing risk.',
    keyPrinciples: [
      'Integrated',
      'Structured and comprehensive',
      'Customized',
      'Inclusive',
      'Dynamic',
      'Best available information',
      'Human and cultural factors',
      'Continual improvement'
    ],
    sections: [
      {
        id: 'risk-framework',
        title: 'Risk Management Framework',
        description: 'Establishing risk management framework and process.',
        requirements: [
          'Develop risk management framework',
          'Establish risk management process',
          'Define risk criteria',
          'Implement risk treatment'
        ],
        implementation: [
          'Establish risk management policy',
          'Define risk criteria',
          'Implement risk assessment process',
          'Develop risk treatment plans'
        ],
        benefits: [
          'Improved decision making',
          'Enhanced resilience',
          'Better resource allocation',
          'Stakeholder confidence'
        ],
        challenges: [
          'Identifying all risks',
          'Balancing risk and opportunity',
          'Ensuring framework effectiveness',
          'Maintaining risk awareness'
        ],
        examples: [
          'Example 1: Risk management policy',
          'Example 2: Risk assessment process',
          'Example 3: Risk treatment strategies',
          'Example 4: Monitoring and review'
        ],
        resources: [
          {
            id: 'risk-framework-template',
            title: 'Risk Management Framework Template',
        type: 'template',
            description: 'Template for risk management framework development',
            url: '/resources/risk-framework-template.docx',
            size: '168 KB',
            duration: '2 hours',
        language: 'English',
            tags: ['template', 'risk management', 'framework']
          }
        ]
      }
    ],
    requirements: [
      'Risk management framework',
      'Risk management process',
      'Risk criteria',
      'Risk treatment'
    ],
    benefits: [
      'Improved decision making',
      'Enhanced resilience',
      'Better resource allocation',
      'Stakeholder confidence'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'Risk Assessment',
        description: 'Identify and assess risks to the organization',
        duration: '3-6 weeks',
        resources: [
          {
            id: 'risk-assessment-template',
            title: 'Risk Assessment Template',
            type: 'template',
            description: 'Template for conducting risk assessment',
            url: '/resources/risk-assessment-template.xlsx',
            size: '195 KB',
            duration: '4 hours',
        language: 'English',
            tags: ['template', 'risk', 'assessment']
          }
        ],
        checklist: [
          'Identify all potential risks',
          'Assess risk likelihood and impact',
          'Evaluate risk criteria',
          'Document risk register'
        ],
        tips: [
          'Involve key stakeholders',
          'Use systematic approach',
          'Consider all risk categories',
          'Document assumptions clearly'
        ]
      }
    ],
    certification: {
      process: ['Risk assessment', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Risk management manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$8,000 - $25,000',
      auditors: ['Accredited certification bodies', 'Risk management auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$25,000 - $80,000',
      certification: '$8,000 - $25,000',
      maintenance: '$5,000 - $15,000',
      training: '$4,000 - $8,000',
      total: '$42,000 - $128,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$25,000 - $80,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$8,000 - $25,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$5,000 - $15,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Risk assessment', 'Framework development', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'south-african-bank',
        title: 'South African Bank Implements Risk Management',
        company: 'Cape Town Bank Ltd',
        country: 'South Africa',
        sector: 'Finance',
        isoStandard: 'ISO 31000',
        challenge: 'The bank faced complex risks from market volatility and regulatory changes.',
        solution: 'Implemented ISO 31000 risk management framework.',
        results: [
          'Improved risk-based decision making',
          'Enhanced regulatory compliance',
          'Reduced risk incidents by 40%',
          'Improved stakeholder confidence'
        ],
        lessons: [
          'Risk culture is crucial',
          'Regular risk reviews are essential',
          'Stakeholder engagement drives success',
          'Continuous improvement is key'
        ],
        contact: 'info@capetownbank.com'
      }
    ],
    resources: [
      {
        id: 'iso-31000-guide',
        title: 'ISO 31000 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO 31000',
        url: '/resources/iso-31000-implementation-guide.pdf',
        size: '3.0 MB',
        duration: '3 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'risk management']
      }
    ],
    tags: ['risk management', 'governance', 'decision making'],
    difficulty: 'Intermediate',
    popularity: 1654,
    africanContext: {
      relevance: 'ISO 31000 is crucial for African businesses facing various risks.',
      challenges: [
        'Limited risk management expertise',
        'Resource constraints',
        'Data availability issues'
      ],
      opportunities: [
        'Improved decision making',
        'Enhanced resilience',
        'Better resource allocation'
      ],
      successStories: [
        'Nigerian banks improving risk management',
        'Kenyan insurance companies enhancing resilience'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Risk management associations'
      ]
    },
    lastUpdated: '2024-01-15'
  },
  {
    id: 'iso-27002',
    code: 'ISO/IEC 27002',
    name: 'Information Security Controls',
    fullName: 'ISO/IEC 27002:2022 - Information security, cybersecurity and privacy protection — Information security controls',
    version: '2022',
    year: 2022,
    category: isoCategories[8],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7], sectors[8], sectors[9], sectors[10], sectors[11]],
    description: 'ISO/IEC 27002 provides guidelines for information security controls.',
    overview: 'ISO/IEC 27002 helps organizations implement effective information security controls.',
    purpose: 'To provide organizations with guidelines for information security controls.',
    scope: 'This International Standard provides guidelines for information security controls.',
    keyPrinciples: [
      'Security policy',
      'Organization of information security',
      'Human resource security',
      'Asset management',
      'Access control',
      'Cryptography',
      'Physical and environmental security',
      'Operations security',
      'Communications security',
      'System acquisition, development and maintenance',
      'Supplier relationships',
      'Information security incident management',
      'Information security aspects of business continuity management',
      'Compliance'
    ],
    sections: [
      {
        id: 'security-controls',
        title: 'Information Security Controls',
        description: 'Implementing comprehensive information security controls.',
        requirements: [
          'Develop security control framework',
          'Implement organizational controls',
          'Establish human resource security',
          'Manage information assets'
        ],
        implementation: [
          'Assess current security controls',
          'Identify control gaps',
          'Implement required controls',
          'Monitor control effectiveness'
        ],
        benefits: [
          'Enhanced information security',
          'Reduced security risks',
          'Regulatory compliance',
          'Stakeholder confidence'
        ],
        challenges: [
          'Implementing all required controls',
          'Balancing security and usability',
          'Ensuring control effectiveness',
          'Maintaining control currency'
        ],
        examples: [
          'Example 1: Security policy development',
          'Example 2: Access control implementation',
          'Example 3: Incident management procedures',
          'Example 4: Compliance monitoring'
        ],
        resources: [
          {
            id: 'security-controls-template',
            title: 'Security Controls Template',
            type: 'template',
            description: 'Template for implementing security controls',
            url: '/resources/security-controls-template.docx',
            size: '182 KB',
            duration: '2.5 hours',
            language: 'English',
            tags: ['template', 'security controls', 'implementation']
          }
        ]
      }
    ],
    requirements: [
      'Security control framework',
      'Organizational controls',
      'Human resource security',
      'Asset management'
    ],
    benefits: [
      'Enhanced information security',
      'Reduced security risks',
      'Regulatory compliance',
      'Stakeholder confidence'
    ],
    implementation: [
      {
        id: 'step-1',
        title: 'Security Control Assessment',
        description: 'Assess current security controls and identify gaps',
        duration: '2-4 weeks',
        resources: [
          {
            id: 'security-control-assessment-template',
            title: 'Security Control Assessment Template',
            type: 'template',
            description: 'Template for conducting security control assessment',
            url: '/resources/security-control-assessment-template.xlsx',
            size: '205 KB',
            duration: '3.5 hours',
            language: 'English',
            tags: ['template', 'security controls', 'assessment']
          }
        ],
        checklist: [
          'Review current security controls',
          'Identify control gaps',
          'Assess control effectiveness',
          'Document findings and recommendations'
        ],
        tips: [
          'Involve security experts',
          'Consider all control categories',
          'Document control requirements clearly',
          'Engage stakeholders'
        ]
      }
    ],
    certification: {
      process: ['Security control assessment', 'Documentation', 'Implementation', 'Internal audit', 'Management review', 'Certification audit'],
      requirements: ['Security controls manual', 'Procedures', 'Records', 'Management commitment'],
      duration: '6-12 months',
      cost: '$10,000 - $30,000',
      auditors: ['Accredited certification bodies', 'Information security auditors', 'Technical experts'],
      validity: '3 years',
      renewal: 'Recertification audit every 3 years'
    },
    cost: {
      implementation: '$40,000 - $120,000',
      certification: '$10,000 - $30,000',
      maintenance: '$8,000 - $20,000',
      training: '$6,000 - $12,000',
      total: '$64,000 - $182,000',
      breakdown: [
        {
          item: 'Implementation',
          cost: '$40,000 - $120,000',
          description: 'Initial implementation costs'
        },
        {
          item: 'Certification',
          cost: '$10,000 - $30,000',
          description: 'Certification audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$8,000 - $20,000',
          description: 'Ongoing maintenance costs'
        }
      ]
    },
    timeline: {
      total: '6-12 months',
      phases: [
        {
          phase: 'Planning',
          duration: '1-2 months',
          activities: ['Security control assessment', 'Framework development', 'Planning']
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: ['System implementation', 'Documentation', 'Training']
        },
        {
          phase: 'Certification',
          duration: '1-2 months',
          activities: ['Internal audit', 'Management review', 'Certification audit']
        }
      ]
    },
    caseStudies: [
      {
        id: 'kenyan-fintech',
        title: 'Kenyan Fintech Company Implements Security Controls',
        company: 'Nairobi Fintech Ltd',
        country: 'Kenya',
        sector: 'Technology',
        isoStandard: 'ISO/IEC 27002',
        challenge: 'The company needed to implement comprehensive security controls for regulatory compliance.',
        solution: 'Implemented ISO/IEC 27002 information security controls.',
        results: [
          'Enhanced security posture',
          'Achieved regulatory compliance',
          'Improved customer trust',
          'Reduced security incidents'
        ],
        lessons: [
          'Comprehensive control implementation is essential',
          'Regular control monitoring is crucial',
          'Employee training drives success',
          'Continuous improvement is key'
        ],
        contact: 'info@nairobifintech.com'
      }
    ],
    resources: [
      {
        id: 'iso-27002-guide',
        title: 'ISO/IEC 27002 Implementation Guide',
          type: 'guide',
        description: 'Comprehensive step-by-step guide for implementing ISO/IEC 27002',
        url: '/resources/iso-27002-implementation-guide.pdf',
        size: '3.8 MB',
        duration: '4.5 hours',
          language: 'English',
        tags: ['implementation', 'guide', 'information security controls']
      }
    ],
    tags: ['information security', 'cybersecurity', 'security controls'],
    difficulty: 'Advanced',
    popularity: 2345,
    africanContext: {
      relevance: 'ISO/IEC 27002 is essential for African businesses implementing security controls.',
      challenges: [
        'Limited security expertise',
        'Resource constraints',
        'Infrastructure limitations'
      ],
      opportunities: [
        'Enhanced security posture',
        'Improved regulatory compliance',
        'Better customer trust'
      ],
      successStories: [
        'South African banks implementing security controls',
        'Nigerian fintech companies enhancing security'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Cybersecurity organizations'
      ]
    },
    lastUpdated: '2024-01-15'
  }
]; 

export default isoStandards;
