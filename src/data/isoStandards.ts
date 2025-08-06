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
  }
]; 