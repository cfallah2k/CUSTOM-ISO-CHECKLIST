import { QuizQuestion, AssessmentResult } from '../types/iso';

export const assessmentQuestions: QuizQuestion[] = [
  // ISO 9001 Assessment Questions
  {
    id: 'q1',
    question: 'What is the primary purpose of ISO 9001?',
    options: [
      'To reduce costs',
      'To ensure customer satisfaction and consistent quality',
      'To increase profits',
      'To comply with regulations only'
    ],
    correctAnswer: 1,
    explanation: 'ISO 9001 focuses on ensuring customer satisfaction and consistent quality through systematic quality management.',
    category: 'ISO 9001',
    difficulty: 'easy'
  },
  {
    id: 'q2',
    question: 'Which of the following is NOT a key principle of ISO 9001?',
    options: [
      'Customer focus',
      'Leadership',
      'Process approach',
      'Cost reduction'
    ],
    correctAnswer: 3,
    explanation: 'Cost reduction is not one of the seven key principles of ISO 9001. The principles focus on quality management fundamentals.',
    category: 'ISO 9001',
    difficulty: 'easy'
  },
  {
    id: 'q3',
    question: 'What is the purpose of internal audits in ISO 9001?',
    options: [
      'To find employees to blame',
      'To evaluate compliance and effectiveness of the QMS',
      'To reduce costs',
      'To impress customers'
    ],
    correctAnswer: 1,
    explanation: 'Internal audits evaluate compliance with ISO 9001 requirements and the effectiveness of the quality management system.',
    category: 'ISO 9001',
    difficulty: 'medium'
  },
  {
    id: 'q4',
    question: 'How often should management reviews be conducted according to ISO 9001?',
    options: [
      'Only when problems occur',
      'At planned intervals',
      'Once every 5 years',
      'Only during certification audits'
    ],
    correctAnswer: 1,
    explanation: 'Management reviews should be conducted at planned intervals to ensure the QMS remains suitable, adequate, and effective.',
    category: 'ISO 9001',
    difficulty: 'medium'
  },
  {
    id: 'q5',
    question: 'What is the main benefit of implementing ISO 9001 for African organizations?',
    options: [
      'Reduced costs only',
      'Access to international markets and improved competitiveness',
      'Faster production',
      'Lower employee wages'
    ],
    correctAnswer: 1,
    explanation: 'ISO 9001 helps African organizations access international markets and improve competitiveness through quality management.',
    category: 'ISO 9001',
    difficulty: 'medium'
  },
  {
    id: 'q6',
    question: 'Which document is NOT typically part of ISO 9001 documentation?',
    options: [
      'Quality manual',
      'Procedures',
      'Work instructions',
      'Employee salary records'
    ],
    correctAnswer: 3,
    explanation: 'Employee salary records are not part of ISO 9001 documentation. The standard focuses on quality management documentation.',
    category: 'ISO 9001',
    difficulty: 'easy'
  },
  {
    id: 'q7',
    question: 'What is the purpose of corrective actions in ISO 9001?',
    options: [
      'To punish employees',
      'To eliminate the cause of nonconformities and prevent recurrence',
      'To reduce costs',
      'To speed up production'
    ],
    correctAnswer: 1,
    explanation: 'Corrective actions eliminate the cause of nonconformities and prevent their recurrence, improving the QMS.',
    category: 'ISO 9001',
    difficulty: 'medium'
  },
  {
    id: 'q8',
    question: 'Which of the following is a requirement for ISO 9001 certification?',
    options: [
      'Having a large budget',
      'Demonstrating leadership commitment and establishing a QMS',
      'Having international customers',
      'Being a large organization'
    ],
    correctAnswer: 1,
    explanation: 'ISO 9001 requires leadership commitment and the establishment of a quality management system, regardless of organization size.',
    category: 'ISO 9001',
    difficulty: 'medium'
  },
  {
    id: 'q9',
    question: 'What is the typical duration for ISO 9001 implementation?',
    options: [
      '1-2 months',
      '6-18 months',
      '5-10 years',
      'Only during audits'
    ],
    correctAnswer: 1,
    explanation: 'ISO 9001 implementation typically takes 6-18 months, depending on organization size and complexity.',
    category: 'ISO 9001',
    difficulty: 'medium'
  },
  {
    id: 'q10',
    question: 'Which sector would benefit MOST from ISO 9001 implementation?',
    options: [
      'Only manufacturing',
      'All sectors including manufacturing, healthcare, services, and agriculture',
      'Only large companies',
      'Only international companies'
    ],
    correctAnswer: 1,
    explanation: 'ISO 9001 benefits all sectors including manufacturing, healthcare, services, and agriculture, regardless of size.',
    category: 'ISO 9001',
    difficulty: 'easy'
  }
];

export const sectorAssessmentCriteria = {
  manufacturing: {
    questions: [
      {
        id: 'mfg1',
        question: 'What is your organization\'s current quality management approach?',
        options: [
          'No formal quality system',
          'Basic quality control',
          'Quality management system in place',
          'Certified to ISO 9001 or equivalent'
        ],
        weight: 0.2
      },
      {
        id: 'mfg2',
        question: 'How do you currently manage supplier quality?',
        options: [
          'No supplier management',
          'Basic supplier evaluation',
          'Formal supplier quality program',
          'Comprehensive supplier management system'
        ],
        weight: 0.15
      },
      {
        id: 'mfg3',
        question: 'What is your approach to process control?',
        options: [
          'No process controls',
          'Basic quality checks',
          'Statistical process control',
          'Comprehensive process management'
        ],
        weight: 0.2
      },
      {
        id: 'mfg4',
        question: 'How do you handle customer complaints?',
        options: [
          'No formal process',
          'Basic complaint handling',
          'Formal complaint management system',
          'Comprehensive customer feedback system'
        ],
        weight: 0.15
      },
      {
        id: 'mfg5',
        question: 'What is your current approach to continuous improvement?',
        options: [
          'No improvement initiatives',
          'Reactive problem solving',
          'Proactive improvement programs',
          'Comprehensive continuous improvement culture'
        ],
        weight: 0.15
      },
      {
        id: 'mfg6',
        question: 'How do you manage environmental aspects?',
        options: [
          'No environmental management',
          'Basic compliance',
          'Environmental management system',
          'Comprehensive environmental program'
        ],
        weight: 0.15
      }
    ],
    recommendations: {
      beginner: [
        'Start with ISO 9001 implementation',
        'Focus on basic quality management principles',
        'Establish simple process controls',
        'Begin supplier evaluation program',
        'Implement basic customer feedback system'
      ],
      intermediate: [
        'Enhance existing quality management system',
        'Implement statistical process control',
        'Develop comprehensive supplier management',
        'Establish formal improvement programs',
        'Consider ISO 14001 integration'
      ],
      advanced: [
        'Optimize integrated management system',
        'Implement advanced quality tools',
        'Develop supplier partnerships',
        'Establish innovation programs',
        'Consider additional ISO standards'
      ]
    }
  },
  healthcare: {
    questions: [
      {
        id: 'hc1',
        question: 'What is your current approach to patient safety?',
        options: [
          'No formal safety program',
          'Basic safety protocols',
          'Comprehensive safety management',
          'Advanced safety culture'
        ],
        weight: 0.25
      },
      {
        id: 'hc2',
        question: 'How do you manage patient data and privacy?',
        options: [
          'No data protection',
          'Basic privacy measures',
          'Formal data protection program',
          'Comprehensive information security'
        ],
        weight: 0.2
      },
      {
        id: 'hc3',
        question: 'What is your approach to quality of care?',
        options: [
          'No quality management',
          'Basic quality measures',
          'Formal quality management system',
          'Comprehensive quality program'
        ],
        weight: 0.2
      },
      {
        id: 'hc4',
        question: 'How do you handle medical device management?',
        options: [
          'No device management',
          'Basic device tracking',
          'Formal device management system',
          'Comprehensive device program'
        ],
        weight: 0.15
      },
      {
        id: 'hc5',
        question: 'What is your approach to staff training and competency?',
        options: [
          'No formal training',
          'Basic training programs',
          'Comprehensive training system',
          'Advanced competency management'
        ],
        weight: 0.2
      }
    ],
    recommendations: {
      beginner: [
        'Implement basic quality management system',
        'Establish patient safety protocols',
        'Develop data protection measures',
        'Begin staff training programs',
        'Implement basic device management'
      ],
      intermediate: [
        'Enhance quality management system',
        'Implement comprehensive safety program',
        'Develop information security system',
        'Establish competency management',
        'Consider ISO 13485 for devices'
      ],
      advanced: [
        'Optimize integrated management system',
        'Implement advanced safety technologies',
        'Develop comprehensive security program',
        'Establish continuous improvement culture',
        'Consider additional healthcare standards'
      ]
    }
  },
  technology: {
    questions: [
      {
        id: 'tech1',
        question: 'What is your current approach to software quality?',
        options: [
          'No quality management',
          'Basic testing',
          'Formal quality assurance',
          'Comprehensive quality program'
        ],
        weight: 0.25
      },
      {
        id: 'tech2',
        question: 'How do you manage information security?',
        options: [
          'No security measures',
          'Basic security',
          'Formal security program',
          'Comprehensive security management'
        ],
        weight: 0.25
      },
      {
        id: 'tech3',
        question: 'What is your approach to project management?',
        options: [
          'No formal project management',
          'Basic project tracking',
          'Formal project management',
          'Advanced project management'
        ],
        weight: 0.2
      },
      {
        id: 'tech4',
        question: 'How do you handle customer requirements?',
        options: [
          'No formal process',
          'Basic requirements gathering',
          'Formal requirements management',
          'Comprehensive requirements program'
        ],
        weight: 0.15
      },
      {
        id: 'tech5',
        question: 'What is your approach to continuous improvement?',
        options: [
          'No improvement process',
          'Basic improvement',
          'Formal improvement program',
          'Comprehensive improvement culture'
        ],
        weight: 0.15
      }
    ],
    recommendations: {
      beginner: [
        'Implement basic quality management',
        'Establish security protocols',
        'Develop project management processes',
        'Begin requirements management',
        'Start improvement initiatives'
      ],
      intermediate: [
        'Enhance quality management system',
        'Implement comprehensive security',
        'Develop advanced project management',
        'Establish formal requirements process',
        'Consider ISO 27001 certification'
      ],
      advanced: [
        'Optimize integrated management system',
        'Implement advanced security technologies',
        'Develop agile methodologies',
        'Establish innovation programs',
        'Consider additional tech standards'
      ]
    }
  }
};

export const assessmentScoring = {
  calculateScore: (answers: number[], weights: number[]): number => {
    let totalScore = 0;
    let totalWeight = 0;
    
    answers.forEach((answer, index) => {
      const score = (answer / 3) * 100; // Convert to percentage
      totalScore += score * weights[index];
      totalWeight += weights[index];
    });
    
    return totalWeight > 0 ? totalScore / totalWeight : 0;
  },
  
  getRecommendations: (score: number, sector: string): string[] => {
    if (score < 40) {
      return sectorAssessmentCriteria[sector as keyof typeof sectorAssessmentCriteria]?.recommendations.beginner || [];
    } else if (score < 70) {
      return sectorAssessmentCriteria[sector as keyof typeof sectorAssessmentCriteria]?.recommendations.intermediate || [];
    } else {
      return sectorAssessmentCriteria[sector as keyof typeof sectorAssessmentCriteria]?.recommendations.advanced || [];
    }
  },
  
  getTimeline: (score: number): string => {
    if (score < 40) {
      return '12-18 months';
    } else if (score < 70) {
      return '8-12 months';
    } else {
      return '6-8 months';
    }
  },
  
  getCost: (score: number, organizationSize: string): string => {
    const baseCosts = {
      small: { low: '$25,000 - $50,000', medium: '$40,000 - $75,000', high: '$60,000 - $100,000' },
      medium: { low: '$50,000 - $100,000', medium: '$75,000 - $150,000', high: '$100,000 - $200,000' },
      large: { low: '$100,000 - $200,000', medium: '$150,000 - $300,000', high: '$200,000 - $400,000' }
    };
    
    if (score < 40) {
      return baseCosts[organizationSize as keyof typeof baseCosts]?.high || '$100,000 - $200,000';
    } else if (score < 70) {
      return baseCosts[organizationSize as keyof typeof baseCosts]?.medium || '$75,000 - $150,000';
    } else {
      return baseCosts[organizationSize as keyof typeof baseCosts]?.low || '$50,000 - $100,000';
    }
  }
};

export const generateAssessmentResult = (
  answers: number[], 
  weights: number[], 
  sector: string, 
  organizationSize: string
): AssessmentResult => {
  const score = assessmentScoring.calculateScore(answers, weights);
  const recommendations = assessmentScoring.getRecommendations(score, sector);
  const timeline = assessmentScoring.getTimeline(score);
  const cost = assessmentScoring.getCost(score, organizationSize);
  
  return {
    standard: 'ISO 9001',
    score: Math.round(score),
    recommendations,
    nextSteps: [
      'Conduct detailed gap analysis',
      'Develop implementation plan',
      'Allocate resources and budget',
      'Appoint implementation team',
      'Begin training and awareness programs'
    ],
    timeline,
    cost
  };
}; 