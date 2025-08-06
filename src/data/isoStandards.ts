import { ISOStandard, ISOCategory } from '../types/iso';
import { sectors } from './sectors';

export const isoCategories: ISOCategory[] = [
  {
    id: 'quality-management',
    name: 'Quality Management',
    description: 'Standards for quality management systems and processes',
    icon: '🏭',
    color: '#3B82F6',
  },
  {
    id: 'environmental-management',
    name: 'Environmental Management',
    description: 'Standards for environmental management and sustainability',
    icon: '🌱',
    color: '#10B981',
  },
  {
    id: 'information-security',
    name: 'Information Security',
    description: 'Standards for information security and data protection',
    icon: '🔒',
    color: '#8B5CF6',
  },
  {
    id: 'occupational-health-safety',
    name: 'Occupational Health & Safety',
    description: 'Standards for workplace health and safety management',
    icon: '👷',
    color: '#F59E0B',
  },
  {
    id: 'energy-management',
    name: 'Energy Management',
    description: 'Standards for energy management and efficiency',
    icon: '⚡',
    color: '#EF4444',
  },
  {
    id: 'food-safety',
    name: 'Food Safety',
    description: 'Standards for food safety management systems',
    icon: '🍽️',
    color: '#06B6D4',
  },
  {
    id: 'business-continuity',
    name: 'Business Continuity',
    description: 'Standards for business continuity and disaster recovery',
    icon: '🔄',
    color: '#8B5CF6',
  },
  {
    id: 'compliance-risk',
    name: 'Compliance & Risk Management',
    description: 'Standards for compliance and risk management',
    icon: '⚖️',
    color: '#F59E0B',
  },
  {
    id: 'it-service-management',
    name: 'IT Service Management',
    description: 'Standards for IT service management and governance',
    icon: '💻',
    color: '#10B981',
  },
  {
    id: 'medical-devices',
    name: 'Medical Devices',
    description: 'Standards for medical device quality and safety',
    icon: '🏥',
    color: '#EF4444',
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Management',
    description: 'Standards for supply chain security and management',
    icon: '📦',
    color: '#06B6D4',
  },
  {
    id: 'innovation-management',
    name: 'Innovation Management',
    description: 'Standards for innovation and development processes',
    icon: '💡',
    color: '#8B5CF6',
  },
];

export const isoStandards: ISOStandard[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001',
    name: 'Quality Management Systems',
    fullName: 'ISO 9001:2015 - Quality management systems — Requirements',
    version: '2015',
    year: 2015,
    category: isoCategories[0],
    sector: [sectors[0], sectors[2], sectors[1], sectors[3], sectors[4]],
    description: 'ISO 9001 is the international standard for quality management systems (QMS). It provides a framework for organizations to ensure they meet customer and regulatory requirements while continuously improving their processes.',
    overview: 'ISO 9001 is the most widely used quality management standard in the world, with over 1 million organizations certified globally.',
    purpose: 'To help organizations ensure they meet customer and other stakeholder needs within statutory and regulatory requirements.',
    scope: 'This International Standard specifies requirements for a quality management system when an organization needs to demonstrate its ability to consistently provide products and services that meet customer and applicable statutory and regulatory requirements.',
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
        description: 'Understanding the organization and its context, leadership and commitment, quality policy, and organizational roles and responsibilities.',
        requirements: [
          'Determine external and internal issues relevant to the QMS',
          'Identify interested parties and their requirements',
          'Establish quality policy and objectives',
          'Assign responsibilities and authorities'
        ],
        implementation: [
          'Conduct stakeholder analysis',
          'Develop quality policy statement',
          'Create organizational structure',
          'Define roles and responsibilities'
        ],
        benefits: [
          'Clear organizational direction',
          'Improved stakeholder relationships',
          'Better resource allocation',
          'Enhanced decision-making'
        ],
        challenges: [
          'Identifying all relevant stakeholders',
          'Balancing conflicting requirements',
          'Maintaining leadership commitment',
          'Ensuring policy alignment'
        ],
        examples: [
          'Quality policy statement',
          'Organizational chart',
          'Job descriptions',
          'Stakeholder register'
        ],
        resources: []
      }
    ],
    requirements: [
      'Establish quality management system',
      'Define quality policy and objectives',
      'Implement process approach',
      'Ensure customer focus',
      'Maintain continual improvement'
    ],
    benefits: [
      'Improved customer satisfaction',
      'Enhanced process efficiency',
      'Better risk management',
      'Increased market access',
      'Reduced costs through waste elimination'
    ],
    implementation: [
      {
        id: 'gap-analysis',
        title: 'Gap Analysis',
        description: 'Assess current processes against ISO 9001 requirements',
        duration: '2-3 weeks',
        resources: [],
        checklist: [
          'Review current quality processes',
          'Identify gaps against ISO 9001 requirements',
          'Document findings and recommendations',
          'Prioritize improvement areas'
        ],
        tips: [
          'Involve key stakeholders in the analysis',
          'Use a systematic approach to review processes',
          'Document all findings thoroughly',
          'Focus on high-impact improvements first'
        ]
      },
      {
        id: 'documentation-development',
        title: 'Documentation Development',
        description: 'Create quality manual, procedures, and work instructions',
        duration: '3-4 months',
        resources: [],
        checklist: [
          'Develop quality manual',
          'Create process procedures',
          'Write work instructions',
          'Establish document control system'
        ],
        tips: [
          'Keep documentation simple and practical',
          'Involve process owners in writing procedures',
          'Use clear, concise language',
          'Include examples and templates'
        ]
      }
    ],
    certification: {
      process: [
        'Pre-assessment audit',
        'Documentation review',
        'On-site audit',
        'Nonconformity resolution',
        'Certification decision'
      ],
      requirements: [
        'Complete implementation of ISO 9001 requirements',
        'Documented quality management system',
        'Internal audit program',
        'Management review process',
        'Corrective action system'
      ],
      duration: '2-3 months for initial certification',
      cost: '$15,000 - $50,000',
      auditors: [
        'Accredited certification bodies',
        'Qualified lead auditors',
        'Technical experts'
      ],
      validity: '3 years with annual surveillance audits',
      renewal: 'Re-certification audit every 3 years'
    },
    cost: {
      implementation: '$10,000 - $30,000',
      certification: '$15,000 - $50,000',
      maintenance: '$5,000 - $20,000 annually',
      training: '$3,000 - $10,000',
      total: '$33,000 - $110,000',
      breakdown: [
        {
          item: 'Consultation',
          cost: '$10,000 - $30,000',
          description: 'Professional guidance and support'
        },
        {
          item: 'Documentation',
          cost: '$5,000 - $15,000',
          description: 'Creating quality manual, procedures, and forms'
        },
        {
          item: 'Certification',
          cost: '$15,000 - $50,000',
          description: 'Certification body fees and audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$5,000 - $20,000 annually',
          description: 'Ongoing audits, training, and system maintenance'
        }
      ]
    },
    timeline: {
      total: '8-18 months',
      phases: [
        {
          phase: 'Preparation',
          duration: '2-3 months',
          activities: [
            'Management commitment',
            'Gap analysis',
            'Resource allocation',
            'Implementation planning'
          ]
        },
        {
          phase: 'Documentation',
          duration: '3-4 months',
          activities: [
            'Quality manual development',
            'Procedure writing',
            'Form creation',
            'Document control setup'
          ]
        },
        {
          phase: 'Implementation',
          duration: '4-6 months',
          activities: [
            'Employee training',
            'Process implementation',
            'Internal audits',
            'Corrective actions'
          ]
        },
        {
          phase: 'Certification',
          duration: '2-3 months',
          activities: [
            'Pre-assessment audit',
            'Certification audit',
            'Nonconformity resolution',
            'Certification decision'
          ]
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
        challenge: 'The company faced quality issues, customer complaints, and lost market share due to inconsistent product quality and delivery delays.',
        solution: 'Implemented ISO 9001 quality management system with focus on process standardization, employee training, and customer feedback integration.',
        results: [
          'Reduced customer complaints by 60%',
          'Improved on-time delivery from 75% to 95%',
          'Increased customer satisfaction scores by 40%',
          'Reduced production costs by 15%',
          'Gained access to international markets'
        ],
        lessons: [
          'Strong leadership commitment is crucial',
          'Employee involvement drives success',
          'Customer focus improves market position',
          'Process standardization reduces errors',
          'Continuous improvement sustains benefits'
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
      },
      {
        id: 'quality-manual-template',
        title: 'Quality Manual Template',
        type: 'template',
        description: 'Editable template for creating your quality manual',
        url: '/resources/quality-manual-template.docx',
        size: '156 KB',
        duration: '1 hour',
        language: 'English',
        tags: ['template', 'documentation', 'quality manual']
      }
    ],
    tags: ['quality management', 'process improvement', 'customer satisfaction', 'continual improvement'],
    difficulty: 'Intermediate',
    africanContext: {
      relevance: 'ISO 9001 is highly relevant for African businesses seeking to improve quality, access international markets, and enhance competitiveness.',
      challenges: [
        'Limited resources for implementation',
        'Lack of qualified consultants',
        'Resistance to change',
        'Limited understanding of quality management'
      ],
      opportunities: [
        'Access to international markets',
        'Improved customer trust',
        'Enhanced competitiveness',
        'Better supplier relationships'
      ],
      successStories: [
        'Nigerian manufacturing companies achieving export certification',
        'Kenyan healthcare providers improving patient care',
        'Ghanaian agricultural firms accessing premium markets'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'National standards bodies',
        'Regional quality associations'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 3247
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001',
    name: 'Environmental Management Systems',
    fullName: 'ISO 14001:2015 - Environmental management systems — Requirements with guidance for use',
    version: '2015',
    year: 2015,
    category: isoCategories[1],
    sector: [sectors[0], sectors[4], sectors[5], sectors[6]],
    description: 'ISO 14001 is the international standard for environmental management systems (EMS). It provides a framework for organizations to manage their environmental responsibilities systematically.',
    overview: 'ISO 14001 helps organizations improve their environmental performance through more efficient use of resources and reduction of waste.',
    purpose: 'To provide organizations with a framework for environmental protection, pollution prevention, and sustainable development.',
    scope: 'This International Standard specifies the requirements for an environmental management system that an organization can use to enhance its environmental performance.',
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
        id: 'context-leadership',
        title: 'Context of the Organization & Leadership',
        description: 'Understanding the organization and its context, interested parties, scope of the EMS, and leadership commitment.',
        requirements: [
          'Determine external and internal issues',
          'Identify interested parties and their needs',
          'Define the scope of the EMS',
          'Establish environmental policy'
        ],
        implementation: [
          'Conduct environmental context analysis',
          'Identify stakeholders and their concerns',
          'Define EMS boundaries',
          'Develop environmental policy'
        ],
        benefits: [
          'Clear environmental direction',
          'Stakeholder engagement',
          'Defined scope and boundaries',
          'Leadership commitment'
        ],
        challenges: [
          'Identifying all environmental aspects',
          'Balancing stakeholder interests',
          'Defining appropriate scope',
          'Ensuring policy commitment'
        ],
        examples: [
          'Environmental policy statement',
          'Stakeholder register',
          'Scope definition',
          'Organizational structure'
        ],
        resources: []
      }
    ],
    requirements: [
      'Establish environmental management system',
      'Define environmental policy and objectives',
      'Identify environmental aspects and impacts',
      'Ensure compliance with environmental regulations',
      'Maintain continual improvement'
    ],
    benefits: [
      'Reduced environmental impact',
      'Compliance with environmental regulations',
      'Improved resource efficiency',
      'Enhanced corporate reputation',
      'Cost savings through waste reduction'
    ],
    implementation: [
      {
        id: 'environmental-assessment',
        title: 'Environmental Aspects Assessment',
        description: 'Identify and evaluate environmental aspects and impacts',
        duration: '2-3 weeks',
        resources: [],
        checklist: [
          'Identify all environmental aspects',
          'Evaluate significance of impacts',
          'Document findings',
          'Prioritize improvement areas'
        ],
        tips: [
          'Involve environmental experts',
          'Consider all operational activities',
          'Document all findings thoroughly',
          'Focus on significant aspects first'
        ]
      },
      {
        id: 'legal-compliance',
        title: 'Legal Compliance Review',
        description: 'Identify and understand applicable environmental regulations',
        duration: '1-2 weeks',
        resources: [],
        checklist: [
          'Identify applicable regulations',
          'Review compliance status',
          'Document requirements',
          'Develop compliance plan'
        ],
        tips: [
          'Consult with legal experts',
          'Keep up with regulatory changes',
          'Document compliance evidence',
          'Plan for future requirements'
        ]
      }
    ],
    certification: {
      process: [
        'Pre-assessment audit',
        'Documentation review',
        'On-site audit',
        'Nonconformity resolution',
        'Certification decision'
      ],
      requirements: [
        'Complete implementation of ISO 14001 requirements',
        'Documented environmental management system',
        'Environmental aspects assessment',
        'Compliance with environmental regulations',
        'Management review process'
      ],
      duration: '2-3 months for initial certification',
      cost: '$18,000 - $60,000',
      auditors: [
        'Accredited certification bodies',
        'Qualified lead auditors',
        'Environmental experts'
      ],
      validity: '3 years with annual surveillance audits',
      renewal: 'Re-certification audit every 3 years'
    },
    cost: {
      implementation: '$12,000 - $35,000',
      certification: '$18,000 - $60,000',
      maintenance: '$6,000 - $25,000 annually',
      training: '$4,000 - $12,000',
      total: '$40,000 - $132,000',
      breakdown: [
        {
          item: 'Environmental Assessment',
          cost: '$8,000 - $25,000',
          description: 'Environmental aspects analysis and compliance review'
        },
        {
          item: 'System Development',
          cost: '$10,000 - $30,000',
          description: 'Developing environmental management system'
        },
        {
          item: 'Certification',
          cost: '$18,000 - $60,000',
          description: 'Certification body fees and audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$6,000 - $25,000 annually',
          description: 'Ongoing audits, monitoring, and system maintenance'
        }
      ]
    },
    timeline: {
      total: '10-20 months',
      phases: [
        {
          phase: 'Environmental Assessment',
          duration: '2-3 months',
          activities: [
            'Environmental aspects identification',
            'Compliance obligation review',
            'Stakeholder analysis',
            'Baseline establishment'
          ]
        },
        {
          phase: 'System Development',
          duration: '4-6 months',
          activities: [
            'Environmental policy development',
            'Objective setting',
            'Procedure development',
            'Documentation creation'
          ]
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: [
            'Employee training',
            'Operational controls implementation',
            'Emergency procedures',
            'Monitoring systems'
          ]
        },
        {
          phase: 'Certification',
          duration: '2-3 months',
          activities: [
            'Pre-assessment audit',
            'Certification audit',
            'Nonconformity resolution',
            'Certification decision'
          ]
        }
      ]
    },
    caseStudies: [
      {
        id: 'ghana-cocoa',
        title: 'Ghana Cocoa Board Implements ISO 14001 for Sustainable Agriculture',
        company: 'Ghana Cocoa Board',
        country: 'Ghana',
        sector: 'Agriculture',
        isoStandard: 'ISO 14001',
        challenge: 'The cocoa industry faced environmental challenges including deforestation, soil degradation, and water pollution from agricultural practices.',
        solution: 'Implemented ISO 14001 focusing on sustainable farming practices, waste management, and environmental conservation.',
        results: [
          'Reduced water usage by 40%',
          'Improved soil health and fertility',
          'Reduced chemical pesticide use by 60%',
          'Enhanced biodiversity on farms',
          'Achieved sustainable certification'
        ],
        lessons: [
          'Sustainable practices improve yields',
          'Environmental management reduces costs',
          'Stakeholder engagement is crucial',
          'Training farmers is essential',
          'Monitoring systems drive improvement'
        ],
        contact: 'sustainability@ghanacocoa.com'
      }
    ],
    resources: [
      {
        id: 'iso-14001-guide',
        title: 'ISO 14001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing environmental management systems',
        url: '/resources/iso-14001-implementation-guide.pdf',
        size: '2.8 MB',
        duration: '3 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'environmental management']
      },
      {
        id: 'environmental-aspects-template',
        title: 'Environmental Aspects Assessment Template',
        type: 'template',
        description: 'Template for identifying and evaluating environmental aspects',
        url: '/resources/environmental-aspects-template.xlsx',
        size: '245 KB',
        duration: '30 minutes',
        language: 'English',
        tags: ['template', 'assessment', 'environmental aspects']
      }
    ],
    tags: ['environmental management', 'sustainability', 'compliance', 'resource efficiency'],
    difficulty: 'Intermediate',
    africanContext: {
      relevance: 'ISO 14001 is crucial for African businesses facing environmental challenges and seeking sustainable development.',
      challenges: [
        'Limited environmental expertise',
        'Complex regulatory requirements',
        'Resource constraints',
        'Limited stakeholder awareness'
      ],
      opportunities: [
        'Access to green markets',
        'Enhanced sustainability credentials',
        'Improved resource efficiency',
        'Better community relations'
      ],
      successStories: [
        'Ghanaian cocoa producers achieving sustainable certification',
        'Kenyan tea estates improving environmental performance',
        'South African mining companies reducing environmental impact'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'Environmental protection agencies',
        'Sustainable development organizations'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 2156
  },
  {
    id: 'iso-27001',
    code: 'ISO 27001',
    name: 'Information Security Management',
    fullName: 'ISO 27001:2013 - Information technology — Security techniques — Information security management systems — Requirements',
    version: '2013',
    year: 2013,
    category: isoCategories[2],
    sector: [sectors[1], sectors[3], sectors[7], sectors[8]],
    description: 'ISO 27001 is the international standard for information security management systems (ISMS). It provides a framework for managing and protecting sensitive information.',
    overview: 'ISO 27001 helps organizations establish, implement, maintain, and continually improve an information security management system to protect their information assets.',
    purpose: 'To provide organizations with a framework for managing information security risks and protecting sensitive information assets.',
    scope: 'This International Standard specifies the requirements for establishing, implementing, maintaining, and continually improving an information security management system.',
    keyPrinciples: [
      'Information security policy',
      'Risk assessment and treatment',
      'Security controls',
      'Management commitment',
      'Continual improvement',
      'Compliance with requirements'
    ],
    sections: [
      {
        id: 'context-leadership',
        title: 'Context of the Organization & Leadership',
        description: 'Understanding the organization and its context, interested parties, scope of the ISMS, and leadership commitment.',
        requirements: [
          'Determine external and internal issues',
          'Identify interested parties and their needs',
          'Define the scope of the ISMS',
          'Establish information security policy'
        ],
        implementation: [
          'Conduct organizational context analysis',
          'Identify stakeholders and their concerns',
          'Define ISMS boundaries',
          'Develop information security policy'
        ],
        benefits: [
          'Clear security direction',
          'Stakeholder understanding',
          'Defined scope and boundaries',
          'Leadership commitment'
        ],
        challenges: [
          'Identifying all information assets',
          'Balancing security and usability',
          'Defining appropriate scope',
          'Ensuring policy commitment'
        ],
        examples: [
          'Information security policy statement',
          'Stakeholder register',
          'Scope definition',
          'Organizational structure'
        ],
        resources: []
      }
    ],
    requirements: [
      'Establish information security management system',
      'Define information security policy and objectives',
      'Identify information security risks',
      'Implement security controls',
      'Maintain continual improvement'
    ],
    benefits: [
      'Enhanced information security',
      'Reduced security risks',
      'Compliance with regulations',
      'Improved customer trust',
      'Better incident response'
    ],
    implementation: [
      {
        id: 'security-assessment',
        title: 'Information Security Assessment',
        description: 'Identify and evaluate information security risks and assets',
        duration: '3-4 weeks',
        resources: [],
        checklist: [
          'Identify all information assets',
          'Conduct risk assessment',
          'Evaluate security controls',
          'Document findings'
        ],
        tips: [
          'Involve IT security experts',
          'Consider all information types',
          'Document all findings thoroughly',
          'Focus on high-risk areas first'
        ]
      },
      {
        id: 'security-policy',
        title: 'Security Policy Development',
        description: 'Develop comprehensive information security policies and procedures',
        duration: '2-3 months',
        resources: [],
        checklist: [
          'Develop security policy framework',
          'Create security procedures',
          'Establish access controls',
          'Define incident response procedures'
        ],
        tips: [
          'Align with business objectives',
          'Involve key stakeholders',
          'Keep policies practical and clear',
          'Include examples and templates'
        ]
      }
    ],
    certification: {
      process: [
        'Pre-assessment audit',
        'Documentation review',
        'On-site audit',
        'Nonconformity resolution',
        'Certification decision'
      ],
      requirements: [
        'Complete implementation of ISO 27001 requirements',
        'Documented information security management system',
        'Risk assessment and treatment',
        'Security controls implementation',
        'Management review process'
      ],
      duration: '3-4 months for initial certification',
      cost: '$25,000 - $80,000',
      auditors: [
        'Accredited certification bodies',
        'Qualified lead auditors',
        'Information security experts'
      ],
      validity: '3 years with annual surveillance audits',
      renewal: 'Re-certification audit every 3 years'
    },
    cost: {
      implementation: '$20,000 - $50,000',
      certification: '$25,000 - $80,000',
      maintenance: '$10,000 - $30,000 annually',
      training: '$5,000 - $15,000',
      total: '$60,000 - $175,000',
      breakdown: [
        {
          item: 'Security Assessment',
          cost: '$15,000 - $40,000',
          description: 'Information security risk assessment and gap analysis'
        },
        {
          item: 'System Development',
          cost: '$20,000 - $50,000',
          description: 'Developing information security management system'
        },
        {
          item: 'Certification',
          cost: '$25,000 - $80,000',
          description: 'Certification body fees and audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$10,000 - $30,000 annually',
          description: 'Ongoing audits, monitoring, and system maintenance'
        }
      ]
    },
    timeline: {
      total: '12-24 months',
      phases: [
        {
          phase: 'Security Assessment',
          duration: '2-3 months',
          activities: [
            'Information asset inventory',
            'Risk assessment',
            'Gap analysis',
            'Stakeholder analysis'
          ]
        },
        {
          phase: 'System Development',
          duration: '4-6 months',
          activities: [
            'Security policy development',
            'Control implementation',
            'Procedure development',
            'Documentation creation'
          ]
        },
        {
          phase: 'Implementation',
          duration: '6-12 months',
          activities: [
            'Employee training',
            'Control implementation',
            'Incident response setup',
            'Monitoring systems'
          ]
        },
        {
          phase: 'Certification',
          duration: '2-3 months',
          activities: [
            'Pre-assessment audit',
            'Certification audit',
            'Nonconformity resolution',
            'Certification decision'
          ]
        }
      ]
    },
    caseStudies: [
      {
        id: 'nigerian-banking',
        title: 'Nigerian Banking Corporation Enhances Data Security with ISO 27001',
        company: 'Nigerian Banking Corporation',
        country: 'Nigeria',
        sector: 'Financial Services',
        isoStandard: 'ISO 27001',
        challenge: 'The bank faced increasing cyber threats, regulatory requirements, and customer demands for enhanced data security.',
        solution: 'Implemented ISO 27001 focusing on data protection, access controls, and incident response capabilities.',
        results: [
          'Reduced security incidents by 75%',
          'Enhanced customer trust and confidence',
          'Improved regulatory compliance',
          'Better incident response times',
          'Gained competitive advantage'
        ],
        lessons: [
          'Security is a business enabler',
          'Employee training is crucial',
          'Regular security updates are essential',
          'Incident response planning saves time',
          'Customer trust is invaluable'
        ],
        contact: 'security@nigerianbanking.com'
      }
    ],
    resources: [
      {
        id: 'iso-27001-guide',
        title: 'ISO 27001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing information security management systems',
        url: '/resources/iso-27001-implementation-guide.pdf',
        size: '3.2 MB',
        duration: '4 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'information security']
      },
      {
        id: 'security-risk-template',
        title: 'Information Security Risk Assessment Template',
        type: 'template',
        description: 'Template for conducting information security risk assessments',
        url: '/resources/security-risk-assessment-template.xlsx',
        size: '456 KB',
        duration: '30 minutes',
        language: 'English',
        tags: ['template', 'risk assessment', 'security']
      }
    ],
    tags: ['information security', 'cybersecurity', 'data protection', 'risk management'],
    difficulty: 'Advanced',
    africanContext: {
      relevance: 'ISO 27001 is critical for African businesses facing increasing cyber threats and regulatory requirements.',
      challenges: [
        'Limited cybersecurity expertise',
        'Complex technical requirements',
        'Resource constraints',
        'Rapidly evolving threats'
      ],
      opportunities: [
        'Enhanced data protection',
        'Improved customer trust',
        'Better regulatory compliance',
        'Competitive advantage'
      ],
      successStories: [
        'Nigerian banks improving data security',
        'Kenyan fintech companies gaining trust',
        'South African tech firms accessing global markets'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'National cybersecurity agencies',
        'Regional security organizations'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 1892
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001',
    name: 'Occupational Health and Safety Management',
    fullName: 'ISO 45001:2018 - Occupational health and safety management systems — Requirements with guidance for use',
    version: '2018',
    year: 2018,
    category: isoCategories[3],
    sector: [sectors[0], sectors[4], sectors[5], sectors[6]],
    description: 'ISO 45001 is the international standard for occupational health and safety management systems (OHSMS). It provides a framework for managing workplace health and safety risks.',
    overview: 'ISO 45001 helps organizations improve their occupational health and safety performance and prevent work-related injuries and ill health.',
    purpose: 'To provide organizations with a framework for managing occupational health and safety risks and improving workplace safety.',
    scope: 'This International Standard specifies requirements for an occupational health and safety management system to enable an organization to proactively improve its OH&S performance.',
    keyPrinciples: [
      'Leadership and worker participation',
      'Risk-based approach',
      'Continual improvement',
      'Compliance with requirements',
      'Worker consultation and participation',
      'Prevention of work-related injury and ill health'
    ],
    sections: [
      {
        id: 'context-leadership',
        title: 'Context of the Organization & Leadership',
        description: 'Understanding the organization and its context, interested parties, scope of the OH&S management system, and leadership commitment.',
        requirements: [
          'Determine external and internal issues',
          'Identify interested parties and their needs',
          'Define the scope of the OH&S management system',
          'Establish OH&S policy'
        ],
        implementation: [
          'Conduct organizational context analysis',
          'Identify stakeholders and their concerns',
          'Define OH&S system boundaries',
          'Develop OH&S policy'
        ],
        benefits: [
          'Clear safety direction',
          'Stakeholder understanding',
          'Defined scope and boundaries',
          'Leadership commitment'
        ],
        challenges: [
          'Identifying all safety risks',
          'Balancing safety and productivity',
          'Defining appropriate scope',
          'Ensuring policy commitment'
        ],
        examples: [
          'OH&S policy statement',
          'Stakeholder register',
          'Scope definition',
          'Organizational structure'
        ],
        resources: []
      }
    ],
    requirements: [
      'Establish occupational health and safety management system',
      'Define OH&S policy and objectives',
      'Identify OH&S risks and opportunities',
      'Implement OH&S controls',
      'Maintain continual improvement'
    ],
    benefits: [
      'Reduced workplace accidents',
      'Improved worker health and safety',
      'Compliance with safety regulations',
      'Enhanced corporate reputation',
      'Reduced insurance costs'
    ],
    implementation: [
      {
        id: 'safety-assessment',
        title: 'OH&S Risk Assessment',
        description: 'Identify and evaluate occupational health and safety risks',
        duration: '2-3 weeks',
        resources: [],
        checklist: [
          'Identify all workplace hazards',
          'Assess risk levels',
          'Evaluate existing controls',
          'Document findings'
        ],
        tips: [
          'Involve workers in the assessment',
          'Consider all work activities',
          'Document all findings thoroughly',
          'Focus on high-risk areas first'
        ]
      },
      {
        id: 'safety-policy',
        title: 'OH&S Policy Development',
        description: 'Develop comprehensive occupational health and safety policies and procedures',
        duration: '2-3 months',
        resources: [],
        checklist: [
          'Develop OH&S policy framework',
          'Create safety procedures',
          'Establish emergency procedures',
          'Define incident reporting procedures'
        ],
        tips: [
          'Align with business objectives',
          'Involve workers in development',
          'Keep policies practical and clear',
          'Include examples and templates'
        ]
      }
    ],
    certification: {
      process: [
        'Pre-assessment audit',
        'Documentation review',
        'On-site audit',
        'Nonconformity resolution',
        'Certification decision'
      ],
      requirements: [
        'Complete implementation of ISO 45001 requirements',
        'Documented OH&S management system',
        'Risk assessment and treatment',
        'OH&S controls implementation',
        'Management review process'
      ],
      duration: '2-3 months for initial certification',
      cost: '$20,000 - $60,000',
      auditors: [
        'Accredited certification bodies',
        'Qualified lead auditors',
        'OH&S experts'
      ],
      validity: '3 years with annual surveillance audits',
      renewal: 'Re-certification audit every 3 years'
    },
    cost: {
      implementation: '$15,000 - $40,000',
      certification: '$20,000 - $60,000',
      maintenance: '$8,000 - $25,000 annually',
      training: '$4,000 - $12,000',
      total: '$47,000 - $137,000',
      breakdown: [
        {
          item: 'Safety Assessment',
          cost: '$10,000 - $25,000',
          description: 'OH&S risk assessment and gap analysis'
        },
        {
          item: 'System Development',
          cost: '$15,000 - $40,000',
          description: 'Developing OH&S management system'
        },
        {
          item: 'Certification',
          cost: '$20,000 - $60,000',
          description: 'Certification body fees and audit costs'
        },
        {
          item: 'Maintenance',
          cost: '$8,000 - $25,000 annually',
          description: 'Ongoing audits, training, and system maintenance'
        }
      ]
    },
    timeline: {
      total: '10-18 months',
      phases: [
        {
          phase: 'Safety Assessment',
          duration: '2-3 months',
          activities: [
            'Workplace hazard identification',
            'Risk assessment',
            'Gap analysis',
            'Stakeholder analysis'
          ]
        },
        {
          phase: 'System Development',
          duration: '3-4 months',
          activities: [
            'OH&S policy development',
            'Objective setting',
            'Procedure development',
            'Documentation creation'
          ]
        },
        {
          phase: 'Implementation',
          duration: '4-8 months',
          activities: [
            'Worker training',
            'Control implementation',
            'Emergency procedures',
            'Monitoring systems'
          ]
        },
        {
          phase: 'Certification',
          duration: '2-3 months',
          activities: [
            'Pre-assessment audit',
            'Certification audit',
            'Nonconformity resolution',
            'Certification decision'
          ]
        }
      ]
    },
    caseStudies: [
      {
        id: 'kenyan-construction',
        title: 'Kenyan Construction Company Improves Safety with ISO 45001',
        company: 'Nairobi Construction Ltd',
        country: 'Kenya',
        sector: 'Construction',
        isoStandard: 'ISO 45001',
        challenge: 'The construction company experienced frequent workplace accidents, injuries, and regulatory compliance issues.',
        solution: 'Implemented ISO 45001 focusing on hazard identification, risk assessment, and worker safety training.',
        results: [
          'Reduced workplace accidents by 70%',
          'Improved worker safety awareness',
          'Enhanced regulatory compliance',
          'Reduced insurance premiums',
          'Improved project completion rates'
        ],
        lessons: [
          'Worker involvement is crucial',
          'Safety training saves lives',
          'Risk assessment prevents accidents',
          'Leadership commitment drives success',
          'Continuous improvement sustains benefits'
        ],
        contact: 'safety@nairobiconstruction.com'
      }
    ],
    resources: [
      {
        id: 'iso-45001-guide',
        title: 'ISO 45001 Implementation Guide',
          type: 'guide',
        description: 'Comprehensive guide for implementing occupational health and safety management systems',
        url: '/resources/iso-45001-implementation-guide.pdf',
        size: '2.9 MB',
        duration: '3 hours',
          language: 'English',
        tags: ['implementation', 'guide', 'occupational health and safety']
      },
      {
        id: 'safety-risk-template',
        title: 'OH&S Risk Assessment Template',
        type: 'template',
        description: 'Template for conducting occupational health and safety risk assessments',
        url: '/resources/safety-risk-assessment-template.xlsx',
        size: '312 KB',
        duration: '45 minutes',
        language: 'English',
        tags: ['template', 'risk assessment', 'safety']
      }
    ],
    tags: ['occupational health and safety', 'workplace safety', 'risk management', 'worker protection'],
    difficulty: 'Intermediate',
    africanContext: {
      relevance: 'ISO 45001 is essential for African businesses seeking to improve workplace safety and protect workers.',
      challenges: [
        'Limited safety expertise',
        'Complex regulatory requirements',
        'Resource constraints',
        'Cultural resistance to change'
      ],
      opportunities: [
        'Improved worker safety',
        'Enhanced regulatory compliance',
        'Reduced insurance costs',
        'Better corporate reputation'
      ],
      successStories: [
        'Kenyan construction companies reducing accidents',
        'Nigerian manufacturing firms improving safety',
        'Ghanaian mining companies protecting workers'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'National safety agencies',
        'Regional safety organizations'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 1654
  },
  {
    id: 'iso-22301',
    code: 'ISO 22301',
    name: 'Business Continuity Management Systems',
    fullName: 'ISO 22301:2019 - Security and resilience — Business continuity management systems — Requirements',
    version: '2019',
    year: 2019,
    category: isoCategories[6], // Business Continuity
    sector: [sectors[0], sectors[2], sectors[3], sectors[4], sectors[5], sectors[6], sectors[7]],
    description: 'ISO 22301 provides a framework for business continuity management to help organizations prepare for, respond to, and recover from disruptive incidents.',
    overview: 'ISO 22301 helps organizations establish, implement, maintain, and improve a business continuity management system to protect against, reduce the likelihood of, and ensure recovery from disruptive incidents.',
    purpose: 'To help organizations establish, implement, maintain, and improve a business continuity management system to protect against, reduce the likelihood of, and ensure recovery from disruptive incidents.',
    scope: 'This International Standard specifies requirements for a business continuity management system to enable an organization to establish, implement, maintain, and improve a business continuity management system.',
    keyPrinciples: [
      'Business impact analysis',
      'Risk assessment',
      'Business continuity strategy',
      'Incident response',
      'Recovery procedures',
      'Testing and exercising',
      'Continual improvement'
    ],
    requirements: [
      'Business impact analysis',
      'Risk assessment and treatment',
      'Business continuity strategy',
      'Incident response procedures',
      'Recovery procedures',
      'Testing and exercising',
      'Management review'
    ],
    benefits: [
      'Enhanced resilience to disruptive incidents',
      'Reduced downtime and financial losses',
      'Improved stakeholder confidence',
      'Better regulatory compliance',
      'Enhanced reputation and trust',
      'Reduced insurance costs',
      'Improved operational efficiency'
    ],
    challenges: [
      'Complex implementation requirements',
      'Resource allocation for testing',
      'Stakeholder engagement',
      'Ongoing maintenance',
      'Integration with existing systems'
    ],
    sections: [
      {
        id: 'context-leadership',
        title: 'Context and Leadership',
        description: 'Understanding organizational context and establishing leadership commitment for business continuity.',
        requirements: [
          'Understanding organization and context',
          'Needs and expectations of interested parties',
          'Scope of the business continuity management system',
          'Business continuity management system',
          'Leadership and commitment',
          'Business continuity policy',
          'Organizational roles, responsibilities and authorities'
        ],
        implementation: [
          'Conduct business impact analysis',
          'Identify critical business functions',
          'Establish leadership commitment',
          'Develop business continuity policy',
          'Assign roles and responsibilities'
        ],
        benefits: [
          'Clear business continuity direction',
          'Strong leadership commitment',
          'Well-defined scope and boundaries',
          'Clear roles and responsibilities'
        ],
        challenges: [
          'Securing top management commitment',
          'Defining appropriate scope',
          'Identifying all critical functions'
        ],
        examples: [
          'Business continuity policy statements',
          'Organizational charts with BC roles',
          'Stakeholder analysis documents'
        ],
        resources: [
          'Business continuity policy templates',
          'Stakeholder analysis tools',
          'Leadership commitment guidelines'
        ]
      }
    ],
    implementation: [
      {
        id: 'business-impact-analysis',
        title: 'Business Impact Analysis',
        description: 'Conduct comprehensive business impact analysis',
        duration: '2-3 months',
        resources: ['BC consultants', 'Impact analysis tools', 'Stakeholder input'],
        checklist: [
          'Identify critical business functions',
          'Assess impact of disruptions',
          'Determine recovery time objectives',
          'Define recovery point objectives'
        ],
        tips: [
          'Involve all departments in analysis',
          'Consider both financial and non-financial impacts',
          'Review historical incident data',
          'Engage with key stakeholders'
        ]
      },
      {
        id: 'risk-assessment',
        title: 'Risk Assessment',
        description: 'Conduct risk assessment for business continuity',
        duration: '1-2 months',
        resources: ['Risk assessment tools', 'Expert input', 'Historical data'],
        checklist: [
          'Identify potential threats',
          'Assess likelihood and impact',
          'Evaluate existing controls',
          'Develop risk treatment plans'
        ],
        tips: [
          'Consider both internal and external threats',
          'Include natural disasters and cyber threats',
          'Review industry-specific risks',
          'Document all assumptions'
        ]
      },
      {
        id: 'strategy-development',
        title: 'BC Strategy Development',
        description: 'Develop business continuity strategies',
        duration: '2-3 months',
        resources: ['Strategy templates', 'Expert consultation', 'Stakeholder input'],
        checklist: [
          'Develop recovery strategies',
          'Identify resource requirements',
          'Establish communication procedures',
          'Define escalation processes'
        ],
        tips: [
          'Align with business objectives',
          'Consider cost-benefit analysis',
          'Involve key stakeholders',
          'Document all procedures'
        ]
      },
      {
        id: 'implementation-testing',
        title: 'Implementation and Testing',
        description: 'Implement and test business continuity procedures',
        duration: '3-4 months',
        resources: ['Testing procedures', 'Training materials', 'Exercise scenarios'],
        checklist: [
          'Implement recovery procedures',
          'Conduct regular exercises',
          'Train personnel',
          'Review and improve procedures'
        ],
        tips: [
          'Start with tabletop exercises',
          'Gradually increase complexity',
          'Involve all relevant personnel',
          'Document lessons learned'
        ]
      }
    ],
    certification: {
      process: 'Third-party certification audit by accredited certification body',
      requirements: [
        'Complete BCMS implementation',
        'Internal audit completion',
        'Management review completion',
        'Corrective action implementation'
      ],
      validity: '3 years with annual surveillance audits',
      cost: '$15,000 - $45,000',
      timeline: '2-3 months for initial certification',
      auditors: 'Accredited business continuity management system auditors'
    },
    cost: {
      implementation: '$25,000 - $75,000',
      certification: '$15,000 - $45,000',
      maintenance: '$8,000 - $20,000 annually',
      breakdown: {
        'Initial Assessment': '$5,000 - $15,000',
        'System Development': '$10,000 - $25,000',
        'Implementation': '$8,000 - $25,000',
        'Training': '$2,000 - $8,000',
        'Certification': '$15,000 - $45,000'
      }
    },
    timeline: {
      total: '8-12 months',
      phases: [
        {
          phase: 'Business Impact Analysis',
          duration: '2-3 months',
          activities: [
            'Critical function identification',
            'Impact assessment',
            'Recovery objective definition',
            'Stakeholder analysis'
          ]
        },
        {
          phase: 'Strategy Development',
          duration: '2-3 months',
          activities: [
            'Recovery strategy development',
            'Resource identification',
            'Communication planning',
            'Procedure development'
          ]
        },
        {
          phase: 'Implementation',
          duration: '3-4 months',
          activities: [
            'Procedure implementation',
            'Training and awareness',
            'Testing and exercising',
            'Documentation'
          ]
        },
        {
          phase: 'Certification',
          duration: '2-3 months',
          activities: [
            'Internal audit',
            'Management review',
            'Certification audit',
            'Certification decision'
          ]
        }
      ]
    },
    caseStudies: [
      {
        id: 'nigerian-bank-bc',
        title: 'Nigerian Bank Implements Business Continuity Management',
        company: 'Lagos Commercial Bank',
        country: 'Nigeria',
        sector: 'Financial Services',
        isoStandard: 'ISO 22301',
        challenge: 'The bank needed to ensure continuous operations during power outages, cyber attacks, and other disruptive incidents.',
        solution: 'Implemented ISO 22301 focusing on business impact analysis, risk assessment, and recovery procedures.',
        results: [
          'Reduced downtime by 85%',
          'Improved incident response time',
          'Enhanced customer confidence',
          'Reduced financial losses',
          'Improved regulatory compliance'
        ],
        lessons: [
          'Business impact analysis is crucial',
          'Regular testing is essential',
          'Stakeholder engagement drives success',
          'Continuous improvement sustains benefits',
          'Technology plays a key role'
        ],
        contact: 'bc@lagoscommercialbank.com'
      }
    ],
    resources: [
      {
        id: 'iso-22301-guide',
        title: 'ISO 22301 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing business continuity management systems',
        url: '/resources/iso-22301-implementation-guide.pdf',
        size: '3.1 MB',
        duration: '4 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'business continuity']
      },
      {
        id: 'bc-impact-template',
        title: 'Business Impact Analysis Template',
        type: 'template',
        description: 'Template for conducting business impact analysis',
        url: '/resources/business-impact-analysis-template.xlsx',
        size: '298 KB',
        duration: '1 hour',
        language: 'English',
        tags: ['template', 'business impact analysis', 'continuity']
      }
    ],
    tags: ['business continuity', 'disaster recovery', 'resilience', 'incident management'],
    difficulty: 'Advanced',
    africanContext: {
      relevance: 'ISO 22301 is crucial for African businesses seeking to improve resilience and ensure business continuity.',
      challenges: [
        'Limited BC expertise',
        'Resource constraints',
        'Infrastructure limitations',
        'Complex regulatory requirements'
      ],
      opportunities: [
        'Enhanced business resilience',
        'Improved stakeholder confidence',
        'Better regulatory compliance',
        'Reduced financial losses'
      ],
      successStories: [
        'Nigerian banks improving resilience',
        'Kenyan telecom companies ensuring continuity',
        'Ghanaian manufacturing firms reducing downtime'
      ],
      localResources: [],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'National business continuity organizations',
        'Regional resilience organizations'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 1456
  },
  {
    id: 'iso-50001',
    code: 'ISO 50001',
    name: 'Energy Management Systems',
    fullName: 'ISO 50001:2018 - Energy management systems — Requirements with guidance for use',
    version: '2018',
    year: 2018,
    category: isoCategories[4],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4]],
    description: 'ISO 50001 provides a framework for energy management systems to help organizations improve energy performance, increase energy efficiency, and reduce costs.',
    overview: 'ISO 50001 is an international standard that specifies requirements for establishing, implementing, maintaining, and improving an energy management system (EnMS). The standard provides a systematic approach to achieving continual improvement in energy performance, energy efficiency, and energy conservation.',
    benefits: [
      'Reduce energy costs and consumption',
      'Improve energy efficiency',
      'Enhance environmental performance',
      'Demonstrate commitment to sustainability',
      'Comply with energy regulations',
      'Improve competitive advantage',
      'Reduce carbon footprint'
    ],
    requirements: [
      'Energy policy and objectives',
      'Energy planning and implementation',
      'Energy performance monitoring',
      'Management review and improvement',
      'Documentation and records',
      'Internal audits and corrective actions'
    ],
    sections: [
      {
        id: 'energy-policy',
        title: 'Energy Policy',
        description: 'Establish energy policy and objectives aligned with organizational goals',
        content: 'The organization must establish an energy policy that provides a framework for action and setting energy objectives and targets.',
        examples: [
          'Commitment to energy efficiency',
          'Compliance with energy regulations',
          'Continuous improvement in energy performance'
        ],
        resources: ['Energy policy template', 'Policy development guide']
      },
      {
        id: 'energy-planning',
        title: 'Energy Planning',
        description: 'Plan energy management activities and identify energy performance opportunities',
        content: 'Energy planning involves identifying energy aspects, legal requirements, and opportunities for improving energy performance.',
        examples: [
          'Energy consumption analysis',
          'Energy efficiency opportunities',
          'Energy performance indicators'
        ],
        resources: ['Energy planning checklist', 'Performance indicators guide']
      },
      {
        id: 'energy-implementation',
        title: 'Implementation and Operation',
        description: 'Implement energy management system and operational controls',
        content: 'Implementation involves establishing operational controls, competence, training, and communication procedures.',
        examples: [
          'Energy monitoring systems',
          'Staff training programs',
          'Operational procedures'
        ],
        resources: ['Implementation guide', 'Training materials']
      },
      {
        id: 'energy-monitoring',
        title: 'Monitoring and Measurement',
        description: 'Monitor energy performance and measure results against objectives',
        content: 'Regular monitoring and measurement of energy performance indicators and energy consumption.',
        examples: [
          'Energy consumption tracking',
          'Performance indicator monitoring',
          'Regular energy audits'
        ],
        resources: ['Monitoring tools', 'Audit checklists']
      }
    ],
    implementation: [
      {
        id: 'energy-gap-analysis',
        title: 'Energy Gap Analysis',
        description: 'Conduct comprehensive analysis of current energy management practices',
        duration: '2-4 weeks',
        resources: ['Energy audit tools', 'Gap analysis templates'],
        checklist: [
          'Review current energy consumption',
          'Identify energy management gaps',
          'Assess regulatory requirements',
          'Evaluate energy efficiency opportunities'
        ],
        tips: [
          'Involve energy management team',
          'Use energy monitoring tools',
          'Consider all energy sources',
          'Document current practices'
        ]
      },
      {
        id: 'energy-policy-development',
        title: 'Energy Policy Development',
        description: 'Develop energy policy and establish energy objectives',
        duration: '3-6 weeks',
        resources: ['Policy templates', 'Stakeholder engagement tools'],
        checklist: [
          'Define energy policy scope',
          'Establish energy objectives',
          'Set energy performance indicators',
          'Define roles and responsibilities'
        ],
        tips: [
          'Align with business strategy',
          'Involve senior management',
          'Consider stakeholder expectations',
          'Make objectives measurable'
        ]
      },
      {
        id: 'energy-system-implementation',
        title: 'Energy Management System Implementation',
        description: 'Implement energy management system and operational controls',
        duration: '3-6 months',
        resources: ['Implementation guides', 'Training materials'],
        checklist: [
          'Establish operational controls',
          'Implement monitoring systems',
          'Train personnel',
          'Establish communication procedures'
        ],
        tips: [
          'Start with high-impact areas',
          'Provide comprehensive training',
          'Establish clear procedures',
          'Monitor progress regularly'
        ]
      },
      {
        id: 'energy-certification',
        title: 'Certification Preparation',
        description: 'Prepare for certification audit and achieve ISO 50001 certification',
        duration: '2-3 months',
        resources: ['Certification guides', 'Audit preparation tools'],
        checklist: [
          'Conduct internal audits',
          'Review management system',
          'Prepare certification audit',
          'Address audit findings'
        ],
        tips: [
          'Choose accredited certification body',
          'Prepare documentation thoroughly',
          'Train audit team',
          'Plan audit schedule carefully'
        ]
      }
    ],
    certification: {
      process: 'Third-party certification audit by accredited certification body',
      requirements: [
        'Complete implementation of energy management system',
        'Documented procedures and records',
        'Internal audit program',
        'Management review meetings',
        'Corrective action procedures'
      ],
      auditors: 'Accredited energy management system auditors',
      validity: '3 years with annual surveillance audits',
      cost: '$15,000 - $25,000',
      timeline: '6-12 months'
    },
    cost: {
      implementation: '$20,000 - $50,000',
      certification: '$15,000 - $25,000',
      maintenance: '$5,000 - $10,000 annually',
      training: '$3,000 - $8,000',
      consulting: '$10,000 - $30,000',
      total: '$53,000 - $123,000'
    },
    timeline: {
      planning: '1-2 months',
      implementation: '6-12 months',
      certification: '2-3 months',
      total: '9-17 months'
    },
    caseStudies: [
      {
        id: 'south-african-manufacturing-energy',
        title: 'South African Manufacturing Company Reduces Energy Costs',
        company: 'Pretoria Manufacturing Ltd',
        country: 'South Africa',
        sector: 'Manufacturing',
        isoStandard: 'ISO 50001',
        challenge: 'High energy costs and inefficient energy management practices affecting profitability.',
        solution: 'Implemented ISO 50001 focusing on energy monitoring, efficiency improvements, and staff training.',
        results: [
          'Reduced energy costs by 25%',
          'Improved energy efficiency by 30%',
          'Enhanced environmental performance',
          'Achieved regulatory compliance',
          'Improved competitive position'
        ],
        lessons: [
          'Energy monitoring is crucial',
          'Staff engagement drives success',
          'Continuous improvement is essential',
          'Technology investment pays off',
          'Regular audits maintain performance'
        ],
        contact: 'energy@pretoriamanufacturing.co.za'
      }
    ],
    resources: [
      {
        id: 'iso-50001-guide',
        title: 'ISO 50001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing energy management systems',
        url: '/resources/iso-50001-implementation-guide.pdf',
        size: '2.8 MB',
        duration: '3 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'energy management']
      },
      {
        id: 'energy-audit-template',
        title: 'Energy Audit Template',
        type: 'template',
        description: 'Template for conducting energy audits and assessments',
        url: '/resources/energy-audit-template.xlsx',
        size: '245 KB',
        duration: '1 hour',
        language: 'English',
        tags: ['template', 'energy audit', 'assessment']
      }
    ],
    tags: ['energy management', 'efficiency', 'sustainability', 'cost reduction'],
    difficulty: 'Intermediate',
    africanContext: {
      relevance: 'ISO 50001 is essential for African organizations seeking to reduce energy costs and improve sustainability.',
      challenges: [
        'Limited energy management expertise',
        'High energy costs',
        'Infrastructure limitations',
        'Regulatory complexity'
      ],
      opportunities: [
        'Significant cost savings',
        'Improved competitiveness',
        'Enhanced sustainability',
        'Better regulatory compliance'
      ],
      successStories: [
        'South African manufacturers reducing costs',
        'Nigerian oil companies improving efficiency',
        'Kenyan textile companies saving energy'
      ],
      localResources: [],
      regionalPartners: [
        'African Energy Commission (AFREC)',
        'National energy authorities',
        'Regional energy organizations'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 1234
  },
  {
    id: 'iso-37001',
    code: 'ISO 37001',
    name: 'Anti-Bribery Management Systems',
    fullName: 'ISO 37001:2016 - Anti-bribery management systems — Requirements with guidance for use',
    version: '2016',
    year: 2016,
    category: isoCategories[7],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4]],
    description: 'ISO 37001 provides a framework for anti-bribery management systems to help organizations prevent, detect, and respond to bribery.',
    overview: 'ISO 37001 is an international standard that specifies requirements for establishing, implementing, maintaining, reviewing, and improving an anti-bribery management system. The standard provides a framework for organizations to prevent, detect, and respond to bribery.',
    benefits: [
      'Prevent bribery and corruption',
      'Demonstrate commitment to ethical business',
      'Reduce legal and reputational risks',
      'Enhance stakeholder confidence',
      'Improve compliance with anti-bribery laws',
      'Protect against financial losses',
      'Strengthen corporate governance'
    ],
    requirements: [
      'Anti-bribery policy and objectives',
      'Risk assessment and due diligence',
      'Anti-bribery controls and procedures',
      'Training and awareness programs',
      'Monitoring and review processes',
      'Incident reporting and investigation'
    ],
    sections: [
      {
        id: 'anti-bribery-policy',
        title: 'Anti-Bribery Policy',
        description: 'Establish anti-bribery policy and commitment to ethical business practices',
        content: 'The organization must establish an anti-bribery policy that demonstrates commitment to preventing bribery and corruption.',
        examples: [
          'Zero-tolerance policy',
          'Commitment to ethical business',
          'Clear reporting procedures'
        ],
        resources: ['Anti-bribery policy template', 'Policy development guide']
      },
      {
        id: 'bribery-risk-assessment',
        title: 'Bribery Risk Assessment',
        description: 'Assess bribery risks and implement appropriate controls',
        content: 'Regular assessment of bribery risks including internal and external factors that may create opportunities for bribery.',
        examples: [
          'Risk identification and analysis',
          'Due diligence procedures',
          'Risk mitigation strategies'
        ],
        resources: ['Risk assessment tools', 'Due diligence checklists']
      },
      {
        id: 'anti-bribery-controls',
        title: 'Anti-Bribery Controls',
        description: 'Implement controls to prevent and detect bribery',
        content: 'Establish controls including financial controls, non-financial controls, and human resource controls.',
        examples: [
          'Financial controls and procedures',
          'Gift and hospitality policies',
          'Third-party due diligence'
        ],
        resources: ['Control frameworks', 'Procedure templates']
      },
      {
        id: 'bribery-monitoring',
        title: 'Monitoring and Review',
        description: 'Monitor anti-bribery performance and review effectiveness',
        content: 'Regular monitoring of anti-bribery controls and periodic review of the anti-bribery management system.',
        examples: [
          'Regular audits and reviews',
          'Performance monitoring',
          'Continuous improvement'
        ],
        resources: ['Monitoring tools', 'Audit checklists']
      }
    ],
    implementation: [
      {
        id: 'bribery-gap-analysis',
        title: 'Anti-Bribery Gap Analysis',
        description: 'Assess current anti-bribery practices and identify gaps',
        duration: '3-4 weeks',
        resources: ['Gap analysis tools', 'Risk assessment templates'],
        checklist: [
          'Review current anti-bribery practices',
          'Identify bribery risks',
          'Assess regulatory requirements',
          'Evaluate control effectiveness'
        ],
        tips: [
          'Involve legal and compliance teams',
          'Consider all business relationships',
          'Assess high-risk areas',
          'Document current controls'
        ]
      },
      {
        id: 'bribery-policy-development',
        title: 'Anti-Bribery Policy Development',
        description: 'Develop comprehensive anti-bribery policy and procedures',
        duration: '4-6 weeks',
        resources: ['Policy templates', 'Procedure guides'],
        checklist: [
          'Define anti-bribery policy',
          'Establish reporting procedures',
          'Develop control procedures',
          'Define roles and responsibilities'
        ],
        tips: [
          'Align with business strategy',
          'Involve senior management',
          'Consider stakeholder expectations',
          'Make procedures practical'
        ]
      },
      {
        id: 'bribery-system-implementation',
        title: 'Anti-Bribery System Implementation',
        description: 'Implement anti-bribery management system and controls',
        duration: '4-6 months',
        resources: ['Implementation guides', 'Training materials'],
        checklist: [
          'Implement anti-bribery controls',
          'Establish monitoring procedures',
          'Train personnel',
          'Establish reporting mechanisms'
        ],
        tips: [
          'Focus on high-risk areas',
          'Provide comprehensive training',
          'Establish clear procedures',
          'Monitor effectiveness regularly'
        ]
      },
      {
        id: 'bribery-certification',
        title: 'Certification Preparation',
        description: 'Prepare for certification audit and achieve ISO 37001 certification',
        duration: '2-3 months',
        resources: ['Certification guides', 'Audit preparation tools'],
        checklist: [
          'Conduct internal audits',
          'Review management system',
          'Prepare certification audit',
          'Address audit findings'
        ],
        tips: [
          'Choose accredited certification body',
          'Prepare documentation thoroughly',
          'Train audit team',
          'Plan audit schedule carefully'
        ]
      }
    ],
    certification: {
      process: 'Third-party certification audit by accredited certification body',
      requirements: [
        'Complete implementation of anti-bribery management system',
        'Documented procedures and records',
        'Internal audit program',
        'Management review meetings',
        'Corrective action procedures'
      ],
      auditors: 'Accredited anti-bribery management system auditors',
      validity: '3 years with annual surveillance audits',
      cost: '$20,000 - $35,000',
      timeline: '6-12 months'
    },
    cost: {
      implementation: '$25,000 - $60,000',
      certification: '$20,000 - $35,000',
      maintenance: '$8,000 - $15,000 annually',
      training: '$5,000 - $12,000',
      consulting: '$15,000 - $40,000',
      total: '$73,000 - $167,000'
    },
    timeline: {
      planning: '1-2 months',
      implementation: '6-12 months',
      certification: '2-3 months',
      total: '9-17 months'
    },
    caseStudies: [
      {
        id: 'ghanaian-construction-anti-bribery',
        title: 'Ghanaian Construction Company Implements Anti-Bribery System',
        company: 'Accra Construction Group',
        country: 'Ghana',
        sector: 'Construction',
        isoStandard: 'ISO 37001',
        challenge: 'Need to prevent bribery in government contracts and maintain ethical business practices.',
        solution: 'Implemented ISO 37001 focusing on risk assessment, due diligence, and anti-bribery controls.',
        results: [
          'Enhanced ethical business practices',
          'Reduced bribery risks',
          'Improved stakeholder confidence',
          'Enhanced compliance with laws',
          'Protected company reputation'
        ],
        lessons: [
          'Risk assessment is crucial',
          'Training is essential',
          'Monitoring is continuous',
          'Leadership commitment drives success',
          'Regular reviews maintain effectiveness'
        ],
        contact: 'compliance@accraconstruction.gh'
      }
    ],
    resources: [
      {
        id: 'iso-37001-guide',
        title: 'ISO 37001 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing anti-bribery management systems',
        url: '/resources/iso-37001-implementation-guide.pdf',
        size: '3.2 MB',
        duration: '4 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'anti-bribery']
      },
      {
        id: 'bribery-risk-template',
        title: 'Bribery Risk Assessment Template',
        type: 'template',
        description: 'Template for conducting bribery risk assessments',
        url: '/resources/bribery-risk-assessment-template.xlsx',
        size: '312 KB',
        duration: '1 hour',
        language: 'English',
        tags: ['template', 'risk assessment', 'anti-bribery']
      }
    ],
    tags: ['anti-bribery', 'corruption prevention', 'ethical business', 'compliance'],
    difficulty: 'Advanced',
    africanContext: {
      relevance: 'ISO 37001 is crucial for African organizations seeking to prevent corruption and maintain ethical business practices.',
      challenges: [
        'Limited anti-bribery expertise',
        'Complex regulatory environment',
        'Cultural considerations',
        'Resource constraints'
      ],
      opportunities: [
        'Enhanced ethical reputation',
        'Improved stakeholder confidence',
        'Better regulatory compliance',
        'Reduced legal risks'
      ],
      successStories: [
        'Ghanaian construction companies',
        'Nigerian oil companies',
        'Kenyan financial institutions'
      ],
      localResources: [],
      regionalPartners: [
        'African Union Anti-Corruption Commission',
        'National anti-corruption agencies',
        'Regional compliance organizations'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 987
  },
  {
    id: 'iso-31000',
    code: 'ISO 31000',
    name: 'Risk Management',
    fullName: 'ISO 31000:2018 - Risk management — Guidelines',
    version: '2018',
    year: 2018,
    category: isoCategories[7],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4]],
    description: 'ISO 31000 provides guidelines for risk management to help organizations create and protect value.',
    overview: 'ISO 31000 is an international standard that provides guidelines for risk management. It helps organizations create and protect value by managing risks, improving performance, encouraging innovation, and supporting the achievement of objectives.',
    benefits: [
      'Improve decision-making processes',
      'Enhance organizational resilience',
      'Protect and create value',
      'Improve performance and efficiency',
      'Encourage innovation and learning',
      'Support achievement of objectives',
      'Reduce uncertainty and threats'
    ],
    requirements: [
      'Risk management framework',
      'Risk management process',
      'Leadership and commitment',
      'Integration into organizational processes',
      'Continual improvement',
      'Communication and consultation'
    ],
    sections: [
      {
        id: 'risk-framework',
        title: 'Risk Management Framework',
        description: 'Establish risk management framework and governance structure',
        content: 'The organization must establish a risk management framework that provides the foundations and organizational arrangements for designing, implementing, monitoring, reviewing, and continually improving risk management.',
        examples: [
          'Risk management policy',
          'Risk governance structure',
          'Integration with business processes'
        ],
        resources: ['Risk framework template', 'Governance guide']
      },
      {
        id: 'risk-process',
        title: 'Risk Management Process',
        description: 'Implement systematic risk management process',
        content: 'The risk management process involves communication and consultation, establishing context, risk assessment, risk treatment, monitoring and review.',
        examples: [
          'Risk identification and analysis',
          'Risk evaluation and treatment',
          'Monitoring and review procedures'
        ],
        resources: ['Risk process guide', 'Assessment tools']
      },
      {
        id: 'risk-integration',
        title: 'Integration and Implementation',
        description: 'Integrate risk management into organizational processes',
        content: 'Risk management should be integrated into all organizational processes and activities to ensure effective implementation.',
        examples: [
          'Strategic planning integration',
          'Operational process integration',
          'Performance management integration'
        ],
        resources: ['Integration guide', 'Implementation tools']
      },
      {
        id: 'risk-monitoring',
        title: 'Monitoring and Review',
        description: 'Monitor and review risk management effectiveness',
        content: 'Regular monitoring and review of the risk management framework and process to ensure continued effectiveness.',
        examples: [
          'Performance monitoring',
          'Framework reviews',
          'Process improvements'
        ],
        resources: ['Monitoring tools', 'Review checklists']
      }
    ],
    implementation: [
      {
        id: 'risk-gap-analysis',
        title: 'Risk Management Gap Analysis',
        description: 'Assess current risk management practices and identify gaps',
        duration: '3-4 weeks',
        resources: ['Gap analysis tools', 'Assessment templates'],
        checklist: [
          'Review current risk practices',
          'Identify risk management gaps',
          'Assess organizational readiness',
          'Evaluate stakeholder needs'
        ],
        tips: [
          'Involve key stakeholders',
          'Consider all risk types',
          'Assess organizational culture',
          'Document current practices'
        ]
      },
      {
        id: 'risk-framework-development',
        title: 'Risk Framework Development',
        description: 'Develop comprehensive risk management framework',
        duration: '4-6 weeks',
        resources: ['Framework templates', 'Policy guides'],
        checklist: [
          'Define risk management policy',
          'Establish governance structure',
          'Define roles and responsibilities',
          'Develop risk criteria'
        ],
        tips: [
          'Align with business strategy',
          'Involve senior management',
          'Consider stakeholder expectations',
          'Make framework practical'
        ]
      },
      {
        id: 'risk-process-implementation',
        title: 'Risk Process Implementation',
        description: 'Implement risk management process across organization',
        duration: '3-6 months',
        resources: ['Implementation guides', 'Training materials'],
        checklist: [
          'Implement risk assessment process',
          'Establish monitoring procedures',
          'Train personnel',
          'Integrate with business processes'
        ],
        tips: [
          'Start with high-priority areas',
          'Provide comprehensive training',
          'Establish clear procedures',
          'Monitor effectiveness regularly'
        ]
      },
      {
        id: 'risk-continuous-improvement',
        title: 'Continuous Improvement',
        description: 'Establish continuous improvement of risk management',
        duration: 'Ongoing',
        resources: ['Improvement tools', 'Review frameworks'],
        checklist: [
          'Regular performance reviews',
          'Framework updates',
          'Process improvements',
          'Stakeholder feedback'
        ],
        tips: [
          'Monitor key indicators',
          'Learn from incidents',
          'Update based on changes',
          'Maintain stakeholder engagement'
        ]
      }
    ],
    certification: {
      process: 'Self-assessment and internal audit (no formal certification)',
      requirements: [
        'Established risk management framework',
        'Documented risk management process',
        'Regular monitoring and review',
        'Continuous improvement procedures'
      ],
      auditors: 'Internal auditors and risk management professionals',
      validity: 'Continuous with regular reviews',
      cost: '$5,000 - $15,000',
      timeline: '3-6 months'
    },
    cost: {
      implementation: '$15,000 - $40,000',
      certification: '$5,000 - $15,000',
      maintenance: '$3,000 - $8,000 annually',
      training: '$4,000 - $10,000',
      consulting: '$8,000 - $25,000',
      total: '$35,000 - $98,000'
    },
    timeline: {
      planning: '1-2 months',
      implementation: '3-6 months',
      certification: '1-2 months',
      total: '5-10 months'
    },
    caseStudies: [
      {
        id: 'kenyan-bank-risk-management',
        title: 'Kenyan Bank Implements Comprehensive Risk Management',
        company: 'Nairobi Commercial Bank',
        country: 'Kenya',
        sector: 'Financial Services',
        isoStandard: 'ISO 31000',
        challenge: 'Need to improve risk management practices and enhance decision-making processes.',
        solution: 'Implemented ISO 31000 focusing on risk framework, assessment processes, and integration with business processes.',
        results: [
          'Improved decision-making processes',
          'Enhanced organizational resilience',
          'Better risk identification and treatment',
          'Improved stakeholder confidence',
          'Reduced operational losses'
        ],
        lessons: [
          'Framework is foundation for success',
          'Integration is crucial',
          'Training drives adoption',
          'Continuous improvement is essential',
          'Leadership commitment is key'
        ],
        contact: 'risk@nairobicommercialbank.co.ke'
      }
    ],
    resources: [
      {
        id: 'iso-31000-guide',
        title: 'ISO 31000 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing risk management frameworks',
        url: '/resources/iso-31000-implementation-guide.pdf',
        size: '2.9 MB',
        duration: '3 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'risk management']
      },
      {
        id: 'risk-assessment-template',
        title: 'Risk Assessment Template',
        type: 'template',
        description: 'Template for conducting risk assessments',
        url: '/resources/risk-assessment-template.xlsx',
        size: '267 KB',
        duration: '1 hour',
        language: 'English',
        tags: ['template', 'risk assessment', 'management']
      }
    ],
    tags: ['risk management', 'decision making', 'resilience', 'governance'],
    difficulty: 'Intermediate',
    africanContext: {
      relevance: 'ISO 31000 is essential for African organizations seeking to improve decision-making and enhance resilience.',
      challenges: [
        'Limited risk management expertise',
        'Resource constraints',
        'Complex business environment',
        'Cultural considerations'
      ],
      opportunities: [
        'Improved decision-making',
        'Enhanced resilience',
        'Better resource allocation',
        'Reduced losses and costs'
      ],
      successStories: [
        'Kenyan banks improving risk management',
        'Nigerian oil companies enhancing resilience',
        'South African manufacturers reducing losses'
      ],
      localResources: [],
      regionalPartners: [
        'African Risk Management Association',
        'National risk management organizations',
        'Regional governance bodies'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 1123
  },
  {
    id: 'iso-26000',
    code: 'ISO 26000',
    name: 'Social Responsibility',
    fullName: 'ISO 26000:2010 - Guidance on social responsibility',
    version: '2010',
    year: 2010,
    category: isoCategories[7],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4]],
    description: 'ISO 26000 provides guidance on social responsibility to help organizations contribute to sustainable development.',
    overview: 'ISO 26000 is an international standard that provides guidance on social responsibility. It helps organizations understand social responsibility and translate principles into effective actions.',
    benefits: [
      'Enhance reputation and credibility',
      'Improve stakeholder relationships',
      'Contribute to sustainable development',
      'Increase competitive advantage',
      'Improve risk management',
      'Enhance employee engagement',
      'Support community development'
    ],
    requirements: [
      'Understanding social responsibility',
      'Principles of social responsibility',
      'Core subjects and issues',
      'Integration throughout organization',
      'Communication and stakeholder engagement',
      'Continual improvement'
    ],
    sections: [
      {
        id: 'sr-principles',
        title: 'Social Responsibility Principles',
        description: 'Understand and apply social responsibility principles',
        content: 'The organization must understand and apply the principles of social responsibility including accountability, transparency, ethical behavior, respect for stakeholder interests, respect for rule of law, respect for international norms of behavior, and respect for human rights.',
        examples: [
          'Accountability and transparency',
          'Ethical business practices',
          'Stakeholder engagement'
        ],
        resources: ['Principles guide', 'Ethics framework']
      },
      {
        id: 'sr-core-subjects',
        title: 'Core Subjects and Issues',
        description: 'Address core subjects of social responsibility',
        content: 'The organization must address core subjects including organizational governance, human rights, labor practices, the environment, fair operating practices, consumer issues, and community involvement and development.',
        examples: [
          'Human rights protection',
          'Environmental responsibility',
          'Community development'
        ],
        resources: ['Core subjects guide', 'Implementation tools']
      },
      {
        id: 'sr-integration',
        title: 'Integration and Implementation',
        description: 'Integrate social responsibility throughout organization',
        content: 'Social responsibility should be integrated throughout the organization and its relationships.',
        examples: [
          'Policy integration',
          'Process integration',
          'Performance monitoring'
        ],
        resources: ['Integration guide', 'Implementation tools']
      },
      {
        id: 'sr-communication',
        title: 'Communication and Stakeholder Engagement',
        description: 'Communicate and engage with stakeholders',
        content: 'The organization should communicate its social responsibility commitments and engage with stakeholders.',
        examples: [
          'Stakeholder dialogue',
          'Transparency reporting',
          'Community engagement'
        ],
        resources: ['Communication tools', 'Engagement guides']
      }
    ],
    implementation: [
      {
        id: 'sr-assessment',
        title: 'Social Responsibility Assessment',
        description: 'Assess current social responsibility practices',
        duration: '3-4 weeks',
        resources: ['Assessment tools', 'Stakeholder analysis templates'],
        checklist: [
          'Review current practices',
          'Identify stakeholders',
          'Assess social impacts',
          'Evaluate opportunities'
        ],
        tips: [
          'Involve diverse stakeholders',
          'Consider local context',
          'Assess material issues',
          'Document current practices'
        ]
      },
      {
        id: 'sr-policy-development',
        title: 'Social Responsibility Policy Development',
        description: 'Develop social responsibility policy and strategy',
        duration: '4-6 weeks',
        resources: ['Policy templates', 'Strategy guides'],
        checklist: [
          'Define social responsibility policy',
          'Identify core subjects',
          'Set objectives and targets',
          'Define implementation approach'
        ],
        tips: [
          'Align with business strategy',
          'Involve stakeholders',
          'Consider local context',
          'Make commitments realistic'
        ]
      },
      {
        id: 'sr-implementation',
        title: 'Social Responsibility Implementation',
        description: 'Implement social responsibility throughout organization',
        duration: '6-12 months',
        resources: ['Implementation guides', 'Training materials'],
        checklist: [
          'Integrate into policies',
          'Implement core subjects',
          'Engage stakeholders',
          'Monitor performance'
        ],
        tips: [
          'Start with high-impact areas',
          'Provide comprehensive training',
          'Establish clear procedures',
          'Monitor progress regularly'
        ]
      },
      {
        id: 'sr-communication-engagement',
        title: 'Communication and Engagement',
        description: 'Establish communication and stakeholder engagement',
        duration: 'Ongoing',
        resources: ['Communication tools', 'Engagement guides'],
        checklist: [
          'Develop communication strategy',
          'Engage with stakeholders',
          'Report on performance',
          'Respond to feedback'
        ],
        tips: [
          'Be transparent and honest',
          'Engage meaningfully',
          'Report regularly',
          'Learn from feedback'
        ]
      }
    ],
    certification: {
      process: 'Self-assessment and stakeholder verification (no formal certification)',
      requirements: [
        'Established social responsibility policy',
        'Implementation of core subjects',
        'Stakeholder engagement',
        'Performance monitoring and reporting'
      ],
      auditors: 'Stakeholders and social responsibility professionals',
      validity: 'Continuous with regular reviews',
      cost: '$5,000 - $15,000',
      timeline: '6-12 months'
    },
    cost: {
      implementation: '$20,000 - $50,000',
      certification: '$5,000 - $15,000',
      maintenance: '$5,000 - $10,000 annually',
      training: '$4,000 - $10,000',
      consulting: '$10,000 - $25,000',
      total: '$44,000 - $110,000'
    },
    timeline: {
      planning: '1-2 months',
      implementation: '6-12 months',
      certification: '2-3 months',
      total: '9-17 months'
    },
    caseStudies: [
      {
        id: 'ethiopian-textile-social-responsibility',
        title: 'Ethiopian Textile Company Enhances Social Responsibility',
        company: 'Addis Textile Manufacturing',
        country: 'Ethiopia',
        sector: 'Manufacturing',
        isoStandard: 'ISO 26000',
        challenge: 'Need to improve social responsibility practices and enhance community relationships.',
        solution: 'Implemented ISO 26000 focusing on core subjects, stakeholder engagement, and community development.',
        results: [
          'Enhanced community relationships',
          'Improved employee satisfaction',
          'Better environmental practices',
          'Enhanced reputation',
          'Increased stakeholder confidence'
        ],
        lessons: [
          'Stakeholder engagement is crucial',
          'Local context matters',
          'Transparency builds trust',
          'Community involvement drives success',
          'Continuous improvement is essential'
        ],
        contact: 'csr@addistextile.et'
      }
    ],
    resources: [
      {
        id: 'iso-26000-guide',
        title: 'ISO 26000 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing social responsibility',
        url: '/resources/iso-26000-implementation-guide.pdf',
        size: '3.0 MB',
        duration: '4 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'social responsibility']
      },
      {
        id: 'sr-assessment-template',
        title: 'Social Responsibility Assessment Template',
        type: 'template',
        description: 'Template for conducting social responsibility assessments',
        url: '/resources/social-responsibility-assessment-template.xlsx',
        size: '289 KB',
        duration: '1 hour',
        language: 'English',
        tags: ['template', 'social responsibility', 'assessment']
      }
    ],
    tags: ['social responsibility', 'sustainability', 'stakeholder engagement', 'community development'],
    difficulty: 'Intermediate',
    africanContext: {
      relevance: 'ISO 26000 is crucial for African organizations seeking to enhance social responsibility and community development.',
      challenges: [
        'Limited social responsibility expertise',
        'Resource constraints',
        'Complex stakeholder landscape',
        'Cultural considerations'
      ],
      opportunities: [
        'Enhanced community relationships',
        'Improved reputation',
        'Better stakeholder engagement',
        'Sustainable development'
      ],
      successStories: [
        'Ethiopian textile companies',
        'Kenyan agricultural firms',
        'Nigerian manufacturing companies'
      ],
      localResources: [],
      regionalPartners: [
        'African Union Social Development Commission',
        'National social responsibility organizations',
        'Regional development agencies'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 876
  },
  {
    id: 'iso-iec-27002',
    code: 'ISO/IEC 27002',
    name: 'Information Security Controls',
    fullName: 'ISO/IEC 27002:2022 - Information security, cybersecurity and privacy protection — Information security controls',
    version: '2022',
    year: 2022,
    category: isoCategories[2],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4]],
    description: 'ISO/IEC 27002 provides guidelines for organizational information security controls and information security risk management.',
    overview: 'ISO/IEC 27002 is an international standard that provides guidelines for organizational information security controls and information security risk management. It provides a comprehensive set of information security control objectives and a catalogue of controls.',
    benefits: [
      'Implement effective information security controls',
      'Protect sensitive information assets',
      'Reduce information security risks',
      'Comply with security regulations',
      'Enhance customer confidence',
      'Improve business continuity',
      'Support ISO/IEC 27001 implementation'
    ],
    requirements: [
      'Information security policy',
      'Organizational controls',
      'People controls',
      'Physical controls',
      'Technological controls',
      'Risk assessment and treatment'
    ],
    sections: [
      {
        id: 'is-controls-organizational',
        title: 'Organizational Controls',
        description: 'Implement organizational information security controls',
        content: 'Organizational controls include information security policies, roles and responsibilities, and organizational processes.',
        examples: [
          'Information security policies',
          'Roles and responsibilities',
          'Organizational processes'
        ],
        resources: ['Organizational controls guide', 'Policy templates']
      },
      {
        id: 'is-controls-people',
        title: 'People Controls',
        description: 'Implement people-related information security controls',
        content: 'People controls include screening, terms and conditions of employment, and information security awareness, education and training.',
        examples: [
          'Background screening',
          'Employment terms',
          'Security awareness training'
        ],
        resources: ['People controls guide', 'Training materials']
      },
      {
        id: 'is-controls-physical',
        title: 'Physical Controls',
        description: 'Implement physical and environmental security controls',
        content: 'Physical controls include secure areas, equipment security, and supporting utilities.',
        examples: [
          'Secure areas',
          'Equipment security',
          'Supporting utilities'
        ],
        resources: ['Physical controls guide', 'Security checklists']
      },
      {
        id: 'is-controls-technological',
        title: 'Technological Controls',
        description: 'Implement technological information security controls',
        content: 'Technological controls include access control, cryptography, and system and application security.',
        examples: [
          'Access control systems',
          'Cryptographic controls',
          'System security'
        ],
        resources: ['Technological controls guide', 'Security tools']
      }
    ],
    implementation: [
      {
        id: 'is-controls-assessment',
        title: 'Information Security Controls Assessment',
        description: 'Assess current information security controls and identify gaps',
        duration: '3-4 weeks',
        resources: [
          {
            id: 'assessment-tools',
            title: 'Assessment Tools',
            type: 'tool',
            description: 'Tools for assessing information security controls',
            url: '/resources/assessment-tools.zip',
            size: '2.1 MB',
            duration: '2 hours',
            language: 'English',
            tags: ['assessment', 'tools', 'security controls']
          },
          {
            id: 'control-evaluation-templates',
            title: 'Control Evaluation Templates',
            type: 'template',
            description: 'Templates for evaluating information security controls',
            url: '/resources/control-evaluation-templates.xlsx',
            size: '156 KB',
            duration: '1 hour',
            language: 'English',
            tags: ['template', 'evaluation', 'security controls']
          }
        ],
        checklist: [
          'Review current controls',
          'Identify control gaps',
          'Assess control effectiveness',
          'Evaluate risk exposure'
        ],
        tips: [
          'Involve IT and security teams',
          'Consider all control categories',
          'Assess control maturity',
          'Document current state'
        ]
      },
      {
        id: 'is-controls-selection',
        title: 'Control Selection and Implementation',
        description: 'Select and implement appropriate information security controls',
        duration: '4-6 months',
        resources: [
          {
            id: 'control-selection-guides',
            title: 'Control Selection Guides',
            type: 'guide',
            description: 'Guides for selecting appropriate information security controls',
            url: '/resources/control-selection-guides.pdf',
            size: '1.8 MB',
            duration: '3 hours',
            language: 'English',
            tags: ['guide', 'control selection', 'security']
          },
          {
            id: 'implementation-tools',
            title: 'Implementation Tools',
            type: 'tool',
            description: 'Tools for implementing information security controls',
            url: '/resources/implementation-tools.zip',
            size: '3.2 MB',
            duration: '2 hours',
            language: 'English',
            tags: ['tool', 'implementation', 'security controls']
          }
        ],
        checklist: [
          'Select appropriate controls',
          'Implement organizational controls',
          'Implement people controls',
          'Implement physical controls',
          'Implement technological controls'
        ],
        tips: [
          'Align with business needs',
          'Consider risk assessment results',
          'Prioritize high-impact controls',
          'Ensure control integration'
        ]
      },
      {
        id: 'is-controls-monitoring',
        title: 'Control Monitoring and Review',
        description: 'Monitor and review information security controls effectiveness',
        duration: 'Ongoing',
        resources: [
          {
            id: 'monitoring-tools',
            title: 'Monitoring Tools',
            type: 'tool',
            description: 'Tools for monitoring information security controls',
            url: '/resources/monitoring-tools.zip',
            size: '2.5 MB',
            duration: '2 hours',
            language: 'English',
            tags: ['tool', 'monitoring', 'security controls']
          },
          {
            id: 'review-frameworks',
            title: 'Review Frameworks',
            type: 'guide',
            description: 'Frameworks for reviewing information security controls',
            url: '/resources/review-frameworks.pdf',
            size: '1.2 MB',
            duration: '1 hour',
            language: 'English',
            tags: ['guide', 'review', 'frameworks']
          }
        ],
        checklist: [
          'Monitor control performance',
          'Review control effectiveness',
          'Update controls as needed',
          'Report on control status'
        ],
        tips: [
          'Establish monitoring procedures',
          'Regular control reviews',
          'Update based on changes',
          'Maintain control documentation'
        ]
      },
      {
        id: 'is-controls-improvement',
        title: 'Continuous Improvement',
        description: 'Continuously improve information security controls',
        duration: 'Ongoing',
        resources: ['Improvement tools', 'Best practice guides'],
        checklist: [
          'Identify improvement opportunities',
          'Implement control enhancements',
          'Update control procedures',
          'Share lessons learned'
        ],
        tips: [
          'Learn from incidents',
          'Stay updated on threats',
          'Benchmark against best practices',
          'Involve stakeholders'
        ]
      }
    ],
    certification: {
      process: 'Part of ISO/IEC 27001 certification (not standalone)',
      requirements: [
        'Implementation of selected controls',
        'Control effectiveness monitoring',
        'Regular control reviews',
        'Integration with ISMS'
      ],
      auditors: 'ISO/IEC 27001 auditors',
      validity: 'As part of ISO/IEC 27001 certification',
      cost: 'Included in ISO/IEC 27001 certification',
      timeline: 'As part of ISO/IEC 27001 implementation'
    },
    cost: {
      implementation: '$15,000 - $40,000',
      certification: 'Included in ISO/IEC 27001',
      maintenance: '$3,000 - $8,000 annually',
      training: '$4,000 - $10,000',
      consulting: '$8,000 - $25,000',
      total: '$30,000 - $83,000'
    },
    timeline: {
      planning: '1-2 months',
      implementation: '4-6 months',
      certification: 'As part of ISO/IEC 27001',
      total: '5-8 months'
    },
    caseStudies: [
      {
        id: 'nigerian-bank-security-controls',
        title: 'Nigerian Bank Implements Comprehensive Security Controls',
        company: 'Lagos Digital Bank',
        country: 'Nigeria',
        sector: 'Financial Services',
        isoStandard: 'ISO/IEC 27002',
        challenge: 'Need to implement comprehensive information security controls to protect customer data and comply with regulations.',
        solution: 'Implemented ISO/IEC 27002 controls focusing on organizational, people, physical, and technological controls.',
        results: [
          'Enhanced information security posture',
          'Reduced security incidents',
          'Improved regulatory compliance',
          'Enhanced customer confidence',
          'Better risk management'
        ],
        lessons: [
          'Control selection is crucial',
          'People controls are essential',
          'Monitoring drives effectiveness',
          'Integration with ISMS is key',
          'Continuous improvement is vital'
        ],
        contact: 'security@lagosdigitalbank.ng'
      }
    ],
    resources: [
      {
        id: 'iso-27002-guide',
        title: 'ISO/IEC 27002 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing information security controls',
        url: '/resources/iso-27002-implementation-guide.pdf',
        size: '3.1 MB',
        duration: '4 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'information security controls']
      },
      {
        id: 'security-controls-template',
        title: 'Security Controls Assessment Template',
        type: 'template',
        description: 'Template for assessing information security controls',
        url: '/resources/security-controls-assessment-template.xlsx',
        size: '298 KB',
        duration: '1 hour',
        language: 'English',
        tags: ['template', 'security controls', 'assessment']
      }
    ],
    tags: ['information security', 'security controls', 'cybersecurity', 'risk management'],
    difficulty: 'Advanced',
    africanContext: {
      relevance: 'ISO/IEC 27002 is crucial for African organizations seeking to implement effective information security controls.',
      challenges: [
        'Limited cybersecurity expertise',
        'Resource constraints',
        'Complex threat landscape',
        'Regulatory requirements'
      ],
      opportunities: [
        'Enhanced security posture',
        'Improved compliance',
        'Better risk management',
        'Enhanced customer trust'
      ],
      successStories: [
        'Nigerian banks improving security',
        'Kenyan fintech companies',
        'South African financial institutions'
      ],
      localResources: [],
      regionalPartners: [
        'African Cybersecurity Organizations',
        'National cybersecurity agencies',
        'Regional security bodies'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 1345
  },
  {
    id: 'iso-iec-27005',
    code: 'ISO/IEC 27005',
    name: 'Information Security Risk Management',
    fullName: 'ISO/IEC 27005:2022 - Information security, cybersecurity and privacy protection — Guidance on managing information security risks',
    version: '2022',
    year: 2022,
    category: isoCategories[2],
    sector: [sectors[0], sectors[1], sectors[2], sectors[3], sectors[4]],
    description: 'ISO/IEC 27005 provides guidelines for information security risk management to help organizations manage information security risks effectively.',
    overview: 'ISO/IEC 27005 is an international standard that provides guidelines for information security risk management. It helps organizations establish, implement, maintain, and continually improve information security risk management.',
    benefits: [
      'Improve information security risk management',
      'Enhance decision-making processes',
      'Protect information assets',
      'Comply with security regulations',
      'Improve resource allocation',
      'Enhance stakeholder confidence',
      'Support business objectives'
    ],
    requirements: [
      'Information security risk management framework',
      'Risk assessment process',
      'Risk treatment process',
      'Risk acceptance criteria',
      'Risk monitoring and review',
      'Communication and consultation'
    ],
    sections: [
      {
        id: 'is-risk-framework',
        title: 'Information Security Risk Management Framework',
        description: 'Establish information security risk management framework',
        content: 'The organization must establish an information security risk management framework that provides the foundation for managing information security risks.',
        examples: [
          'Risk management policy',
          'Risk governance structure',
          'Risk criteria and methodology'
        ],
        resources: ['Risk framework template', 'Governance guide']
      },
      {
        id: 'is-risk-assessment',
        title: 'Information Security Risk Assessment',
        description: 'Conduct systematic information security risk assessments',
        content: 'Risk assessment involves risk identification, risk analysis, and risk evaluation to understand information security risks.',
        examples: [
          'Asset identification',
          'Threat and vulnerability analysis',
          'Risk evaluation and prioritization'
        ],
        resources: ['Risk assessment tools', 'Analysis frameworks']
      },
      {
        id: 'is-risk-treatment',
        title: 'Information Security Risk Treatment',
        description: 'Implement risk treatment strategies and controls',
        content: 'Risk treatment involves selecting and implementing appropriate risk treatment options and controls.',
        examples: [
          'Risk treatment options',
          'Control selection',
          'Implementation planning'
        ],
        resources: ['Risk treatment guide', 'Control selection tools']
      },
      {
        id: 'is-risk-monitoring',
        title: 'Risk Monitoring and Review',
        description: 'Monitor and review information security risks',
        content: 'Regular monitoring and review of information security risks and risk treatment effectiveness.',
        examples: [
          'Risk monitoring procedures',
          'Regular risk reviews',
          'Risk treatment effectiveness'
        ],
        resources: ['Monitoring tools', 'Review frameworks']
      }
    ],
    implementation: [
      {
        id: 'is-risk-framework-development',
        title: 'Risk Framework Development',
        description: 'Develop information security risk management framework',
        duration: '3-4 weeks',
        resources: ['Framework templates', 'Policy guides'],
        checklist: [
          'Define risk management policy',
          'Establish governance structure',
          'Define risk criteria',
          'Develop risk methodology'
        ],
        tips: [
          'Align with business objectives',
          'Involve key stakeholders',
          'Consider organizational context',
          'Make framework practical'
        ]
      },
      {
        id: 'is-risk-assessment-implementation',
        title: 'Risk Assessment Implementation',
        description: 'Implement systematic risk assessment process',
        duration: '4-6 weeks',
        resources: ['Assessment tools', 'Analysis frameworks'],
        checklist: [
          'Identify information assets',
          'Analyze threats and vulnerabilities',
          'Evaluate risk levels',
          'Prioritize risks'
        ],
        tips: [
          'Use structured approach',
          'Involve technical experts',
          'Consider business context',
          'Document assessment process'
        ]
      },
      {
        id: 'is-risk-treatment-implementation',
        title: 'Risk Treatment Implementation',
        description: 'Implement risk treatment strategies and controls',
        duration: '3-6 months',
        resources: ['Treatment guides', 'Control frameworks'],
        checklist: [
          'Select treatment options',
          'Implement controls',
          'Monitor effectiveness',
          'Review and update'
        ],
        tips: [
          'Prioritize high-risk items',
          'Consider cost-effectiveness',
          'Ensure control integration',
          'Monitor treatment effectiveness'
        ]
      },
      {
        id: 'is-risk-monitoring-establishment',
        title: 'Risk Monitoring Establishment',
        description: 'Establish risk monitoring and review procedures',
        duration: 'Ongoing',
        resources: ['Monitoring tools', 'Review frameworks'],
        checklist: [
          'Establish monitoring procedures',
          'Define review frequency',
          'Implement reporting mechanisms',
          'Update risk assessments'
        ],
        tips: [
          'Monitor key risk indicators',
          'Regular risk reviews',
          'Update based on changes',
          'Maintain risk documentation'
        ]
      }
    ],
    certification: {
      process: 'Part of ISO/IEC 27001 certification (not standalone)',
      requirements: [
        'Established risk management framework',
        'Systematic risk assessment process',
        'Risk treatment implementation',
        'Regular monitoring and review'
      ],
      auditors: 'ISO/IEC 27001 auditors',
      validity: 'As part of ISO/IEC 27001 certification',
      cost: 'Included in ISO/IEC 27001 certification',
      timeline: 'As part of ISO/IEC 27001 implementation'
    },
    cost: {
      implementation: '$12,000 - $35,000',
      certification: 'Included in ISO/IEC 27001',
      maintenance: '$2,000 - $6,000 annually',
      training: '$3,000 - $8,000',
      consulting: '$6,000 - $20,000',
      total: '$23,000 - $69,000'
    },
    timeline: {
      planning: '1-2 months',
      implementation: '3-6 months',
      certification: 'As part of ISO/IEC 27001',
      total: '4-8 months'
    },
    caseStudies: [
      {
        id: 'kenyan-fintech-risk-management',
        title: 'Kenyan Fintech Company Implements Information Security Risk Management',
        company: 'Nairobi Digital Payments',
        country: 'Kenya',
        sector: 'Financial Services',
        isoStandard: 'ISO/IEC 27005',
        challenge: 'Need to implement systematic information security risk management to protect digital payment systems.',
        solution: 'Implemented ISO/IEC 27005 focusing on risk framework, assessment process, and treatment strategies.',
        results: [
          'Improved risk management processes',
          'Enhanced decision-making',
          'Better resource allocation',
          'Reduced security incidents',
          'Enhanced stakeholder confidence'
        ],
        lessons: [
          'Framework provides foundation',
          'Systematic assessment is crucial',
          'Treatment must be practical',
          'Monitoring drives effectiveness',
          'Continuous improvement is essential'
        ],
        contact: 'risk@nairobidigitalpayments.co.ke'
      }
    ],
    resources: [
      {
        id: 'iso-27005-guide',
        title: 'ISO/IEC 27005 Implementation Guide',
        type: 'guide',
        description: 'Comprehensive guide for implementing information security risk management',
        url: '/resources/iso-27005-implementation-guide.pdf',
        size: '2.8 MB',
        duration: '3 hours',
        language: 'English',
        tags: ['implementation', 'guide', 'information security risk management']
      },
      {
        id: 'is-risk-assessment-template',
        title: 'Information Security Risk Assessment Template',
        type: 'template',
        description: 'Template for conducting information security risk assessments',
        url: '/resources/is-risk-assessment-template.xlsx',
        size: '245 KB',
        duration: '1 hour',
        language: 'English',
        tags: ['template', 'risk assessment', 'information security']
      }
    ],
    tags: ['information security', 'risk management', 'cybersecurity', 'risk assessment'],
    difficulty: 'Advanced',
    africanContext: {
      relevance: 'ISO/IEC 27005 is essential for African organizations seeking to implement systematic information security risk management.',
      challenges: [
        'Limited cybersecurity expertise',
        'Resource constraints',
        'Complex threat landscape',
        'Regulatory requirements'
      ],
      opportunities: [
        'Improved risk management',
        'Better decision-making',
        'Enhanced security posture',
        'Reduced security incidents'
      ],
      successStories: [
        'Kenyan fintech companies',
        'Nigerian digital banks',
        'South African financial institutions'
      ],
      localResources: [],
      regionalPartners: [
        'African Cybersecurity Organizations',
        'National cybersecurity agencies',
        'Regional security bodies'
      ]
    },
    lastUpdated: '2024-01-15',
    popularity: 1123
  }
]; 