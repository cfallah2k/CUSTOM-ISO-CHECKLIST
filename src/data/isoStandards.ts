import { ISOStandard, ISOCategory } from '../types/iso';

// ISO Categories
export const isoCategories: ISOCategory[] = [
  {
    id: 'quality-management',
    name: 'Quality Management',
    description: 'Standards for quality management systems and processes',
    icon: 'CheckCircleIcon',
    color: 'primary'
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
    isoStandards: ['iso-9001']
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
    sector: [sectors[0]],
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
  }
]; 

export default isoStandards;
