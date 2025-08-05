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
    sector: [sectors[0], sectors[2], sectors[1], sectors[3], sectors[4]], // Manufacturing, Technology, Healthcare, Financial Services, Agriculture
    description: 'ISO 9001 is the international standard for quality management systems (QMS). It provides a framework for organizations to ensure they meet customer and regulatory requirements while continuously improving their processes.',
    overview: 'ISO 9001 is the most widely used quality management standard in the world, with over 1 million organizations certified globally. It provides a systematic approach to managing business processes to ensure consistent quality and customer satisfaction.',
    purpose: 'To help organizations ensure they meet customer and other stakeholder needs within statutory and regulatory requirements related to a product or service.',
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
          'Nigerian Manufacturing Company improved customer satisfaction by 25%',
          'Kenyan Tech Startup reduced defects by 40%',
          'Ghanaian Agricultural Cooperative increased exports by 60%'
        ],
        resources: []
      },
      {
        id: 'planning-support',
        title: 'Planning & Support',
        description: 'Actions to address risks and opportunities, quality objectives, and resources needed for the QMS.',
        requirements: [
          'Identify and address risks and opportunities',
          'Establish quality objectives',
          'Plan changes to the QMS',
          'Provide necessary resources'
        ],
        implementation: [
          'Conduct risk assessment workshops',
          'Set SMART objectives',
          'Develop change management procedures',
          'Allocate budget and resources'
        ],
        benefits: [
          'Proactive risk management',
          'Clear performance targets',
          'Controlled change implementation',
          'Adequate resource allocation'
        ],
        challenges: [
          'Identifying all potential risks',
          'Setting realistic objectives',
          'Managing change resistance',
          'Securing adequate resources'
        ],
        examples: [
          'South African Bank reduced operational risks by 30%',
          'Egyptian Healthcare Provider improved patient safety',
          'Moroccan Food Processor enhanced food safety compliance'
        ],
        resources: []
      },
      {
        id: 'operation',
        title: 'Operation',
        description: 'Operational planning and control, requirements for products and services, design and development, and control of externally provided processes.',
        requirements: [
          'Plan and control operational processes',
          'Determine product and service requirements',
          'Control design and development',
          'Control external providers'
        ],
        implementation: [
          'Document operational procedures',
          'Establish customer requirements process',
          'Implement design controls',
          'Develop supplier management system'
        ],
        benefits: [
          'Consistent process execution',
          'Reduced errors and defects',
          'Improved customer satisfaction',
          'Better supplier relationships'
        ],
        challenges: [
          'Documenting complex processes',
          'Managing customer expectations',
          'Controlling design changes',
          'Monitoring supplier performance'
        ],
        examples: [
          'Tanzanian Textile Company reduced defects by 50%',
          'Ugandan Software Company improved delivery time by 35%',
          'Rwandan Construction Firm enhanced project quality'
        ],
        resources: []
      },
      {
        id: 'performance-evaluation',
        title: 'Performance Evaluation',
        description: 'Monitoring, measurement, analysis, evaluation, internal audit, and management review.',
        requirements: [
          'Monitor and measure processes',
          'Analyze and evaluate data',
          'Conduct internal audits',
          'Perform management reviews'
        ],
        implementation: [
          'Establish KPIs and metrics',
          'Implement data collection systems',
          'Develop audit program',
          'Schedule regular reviews'
        ],
        benefits: [
          'Data-driven decision making',
          'Continuous improvement',
          'Early problem detection',
          'Better resource allocation'
        ],
        challenges: [
          'Selecting relevant metrics',
          'Collecting accurate data',
          'Maintaining audit independence',
          'Ensuring review effectiveness'
        ],
        examples: [
          'Ethiopian Manufacturing Plant improved efficiency by 20%',
          'Senegalese Service Provider enhanced customer satisfaction',
          'Cameroonian Agricultural Company increased productivity'
        ],
        resources: []
      },
      {
        id: 'improvement',
        title: 'Improvement',
        description: 'Nonconformity and corrective action, and continual improvement.',
        requirements: [
          'Handle nonconformities',
          'Implement corrective actions',
          'Drive continual improvement',
          'Update QMS as needed'
        ],
        implementation: [
          'Establish nonconformity procedures',
          'Develop corrective action process',
          'Create improvement initiatives',
          'Update documentation'
        ],
        benefits: [
          'Reduced errors and defects',
          'Enhanced customer satisfaction',
          'Improved efficiency',
          'Sustainable growth'
        ],
        challenges: [
          'Identifying root causes',
          'Implementing effective solutions',
          'Maintaining improvement momentum',
          'Measuring improvement impact'
        ],
        examples: [
          'Nigerian Oil Company reduced incidents by 45%',
          'Kenyan Hospital improved patient outcomes',
          'Ghanaian Bank enhanced service quality'
        ],
        resources: []
      }
    ],
    requirements: [
      'Establish quality management system',
      'Demonstrate leadership commitment',
      'Set quality objectives',
      'Manage resources effectively',
      'Control operational processes',
      'Monitor and measure performance',
      'Drive continual improvement'
    ],
    benefits: [
      'Improved customer satisfaction',
      'Enhanced operational efficiency',
      'Reduced costs and waste',
      'Better market reputation',
      'Increased employee engagement',
      'Regulatory compliance',
      'Competitive advantage'
    ],
    implementation: [
      {
        id: 'preparation',
        title: 'Preparation Phase',
        description: 'Initial setup and planning for ISO 9001 implementation',
        duration: '2-3 months',
        resources: [],
        checklist: [
          'Obtain management commitment',
          'Appoint quality manager',
          'Conduct gap analysis',
          'Develop implementation plan',
          'Allocate resources'
        ],
        tips: [
          'Start with strong leadership commitment',
          'Conduct thorough gap analysis',
          'Set realistic timelines',
          'Involve all departments',
          'Plan for training needs'
        ]
      },
      {
        id: 'documentation',
        title: 'Documentation Phase',
        description: 'Creating quality management system documentation',
        duration: '3-4 months',
        resources: [],
        checklist: [
          'Develop quality manual',
          'Create procedures and work instructions',
          'Establish document control system',
          'Develop quality policy and objectives',
          'Create forms and records'
        ],
        tips: [
          'Keep documentation simple and practical',
          'Involve process owners in documentation',
          'Use clear, understandable language',
          'Ensure documentation is accessible',
          'Regularly review and update documents'
        ]
      },
      {
        id: 'implementation',
        title: 'Implementation Phase',
        description: 'Putting the quality management system into practice',
        duration: '4-6 months',
        resources: [],
        checklist: [
          'Train employees on new procedures',
          'Implement new processes',
          'Establish monitoring systems',
          'Conduct internal audits',
          'Address nonconformities'
        ],
        tips: [
          'Provide comprehensive training',
          'Start with pilot processes',
          'Monitor implementation progress',
          'Address issues promptly',
          'Celebrate early successes'
        ]
      },
      {
        id: 'certification',
        title: 'Certification Phase',
        description: 'Preparing for and undergoing certification audit',
        duration: '2-3 months',
        resources: [],
        checklist: [
          'Select certification body',
          'Conduct pre-assessment audit',
          'Address any findings',
          'Schedule certification audit',
          'Prepare for audit'
        ],
        tips: [
          'Choose a reputable certification body',
          'Conduct thorough pre-assessment',
          'Address all findings before certification',
          'Prepare audit team and documentation',
          'Maintain calm during audit'
        ]
      }
    ],
    certification: {
      process: [
        'Select certification body',
        'Submit application',
        'Conduct stage 1 audit (documentation review)',
        'Conduct stage 2 audit (implementation assessment)',
        'Address any nonconformities',
        'Receive certification decision',
        'Maintain certification through surveillance audits'
      ],
      requirements: [
        'Complete QMS implementation',
        'Conduct internal audits',
        'Perform management review',
        'Address all nonconformities',
        'Demonstrate continual improvement'
      ],
      duration: '6-12 months',
      cost: '$15,000 - $50,000',
      auditors: [
        'Accredited certification bodies',
        'Qualified lead auditors',
        'Technical experts as needed'
      ],
      validity: '3 years',
      renewal: 'Annual surveillance audits required'
    },
    cost: {
      implementation: '$25,000 - $100,000',
      certification: '$15,000 - $50,000',
      maintenance: '$5,000 - $20,000 annually',
      training: '$10,000 - $30,000',
      total: '$55,000 - $200,000',
      breakdown: [
        {
          item: 'Consulting Services',
          cost: '$20,000 - $80,000',
          description: 'External consultants for implementation support'
        },
        {
          item: 'Training',
          cost: '$10,000 - $30,000',
          description: 'Employee training on ISO 9001 requirements'
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
      },
      {
        id: 'kenyan-healthcare',
        title: 'Kenyan Healthcare Provider Enhances Patient Care with ISO 9001',
        company: 'Nairobi Medical Center',
        country: 'Kenya',
        sector: 'Healthcare',
        isoStandard: 'ISO 9001',
        challenge: 'The medical center experienced inconsistent patient care quality, medication errors, and patient safety incidents.',
        solution: 'Implemented ISO 9001 focusing on patient safety, care processes, and staff training to ensure consistent quality healthcare delivery.',
        results: [
          'Reduced medication errors by 80%',
          'Improved patient satisfaction by 50%',
          'Enhanced staff competency and confidence',
          'Reduced patient complaints by 70%',
          'Achieved regulatory compliance'
        ],
        lessons: [
          'Patient safety must be the priority',
          'Staff training is essential for healthcare quality',
          'Process standardization improves outcomes',
          'Regular audits maintain standards',
          'Patient feedback drives improvement'
        ],
        contact: 'admin@nairobihealthcare.com'
      },
      {
        id: 'ghanaian-agriculture',
        title: 'Ghanaian Agricultural Cooperative Expands Exports with ISO 9001',
        company: 'Kumasi Farmers Cooperative',
        country: 'Ghana',
        sector: 'Agriculture',
        isoStandard: 'ISO 9001',
        challenge: 'The cooperative struggled with inconsistent product quality, limited market access, and poor traceability affecting export opportunities.',
        solution: 'Implemented ISO 9001 focusing on quality control, traceability, and process standardization to meet international market requirements.',
        results: [
          'Increased export volume by 60%',
          'Improved product quality consistency',
          'Enhanced traceability systems',
          'Gained access to premium markets',
          'Increased farmer incomes by 40%'
        ],
        lessons: [
          'Quality standards open new markets',
          'Traceability builds customer trust',
          'Process standardization improves efficiency',
          'Training farmers is crucial for success',
          'Market requirements drive quality improvements'
        ],
        contact: 'info@kumasicooperative.com'
      }
    ],
    resources: [
      {
        id: 'iso-9001-guide',
        title: 'ISO 9001 Implementation Guide',
        type: 'guide',
        url: '/resources/iso-9001-implementation-guide.pdf',
        description: 'Comprehensive step-by-step guide for implementing ISO 9001',
        size: '2.5 MB',
        language: 'English',
        tags: ['implementation', 'guide', 'quality management']
      },
      {
        id: 'quality-manual-template',
        title: 'Quality Manual Template',
        type: 'template',
        url: '/resources/quality-manual-template.docx',
        description: 'Editable template for creating ISO 9001 quality manual',
        size: '1.2 MB',
        language: 'English',
        tags: ['template', 'documentation', 'quality manual']
      },
      {
        id: 'internal-audit-checklist',
        title: 'Internal Audit Checklist',
        type: 'checklist',
        url: '/resources/internal-audit-checklist.pdf',
        description: 'Comprehensive checklist for conducting internal audits',
        size: '800 KB',
        language: 'English',
        tags: ['audit', 'checklist', 'compliance']
      },
      {
        id: 'iso-9001-training',
        title: 'ISO 9001 Awareness Training',
        type: 'video',
        url: '/resources/iso-9001-training.mp4',
        description: 'Video training on ISO 9001 requirements and implementation',
        duration: '45 minutes',
        language: 'English',
        tags: ['training', 'video', 'awareness']
      }
    ],
    tags: ['quality management', 'customer satisfaction', 'process improvement', 'compliance'],
    difficulty: 'Intermediate',
    popularity: 95,
    africanContext: {
      relevance: 'ISO 9001 is highly relevant for African organizations seeking to improve quality, access international markets, and enhance competitiveness. Many African countries have adopted ISO 9001 as a national standard.',
      challenges: [
        'Limited awareness of quality management principles',
        'Resource constraints for implementation',
        'Lack of qualified consultants and auditors',
        'Cultural resistance to change',
        'Limited access to training and education'
      ],
      opportunities: [
        'Access to international markets and trade agreements',
        'Improved competitiveness and market positioning',
        'Enhanced customer trust and satisfaction',
        'Better resource utilization and efficiency',
        'Foundation for other management systems'
      ],
      successStories: [
        'Nigerian manufacturing sector increased exports by 40%',
        'Kenyan healthcare providers improved patient outcomes',
        'Ghanaian agricultural cooperatives accessed premium markets',
        'South African service providers enhanced customer satisfaction'
      ],
      localResources: [
        {
          id: 'african-iso-consultants',
          title: 'African ISO Consultants Directory',
          type: 'guide',
          url: '/resources/african-iso-consultants.pdf',
          description: 'Directory of qualified ISO consultants across Africa',
          language: 'English',
          tags: ['consultants', 'africa', 'directory']
        }
      ],
      regionalPartners: [
        'African Organization for Standardization (ARSO)',
        'National Standards Bodies',
        'Regional Economic Communities',
        'African Development Bank',
        'UN Economic Commission for Africa'
      ]
    },
    lastUpdated: '2024-01-15'
  }
]; 