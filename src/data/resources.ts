import { Resource } from '../types/iso';

export const resources: Resource[] = [
  // ISO 9001 Resources
  {
    id: 'iso-9001-implementation-guide',
    title: 'ISO 9001 Implementation Guide',
    type: 'guide',
    url: '/resources/iso-9001-implementation-guide.pdf',
    description: 'Comprehensive step-by-step guide for implementing ISO 9001 quality management system',
    size: '2.5 MB',
    language: 'English',
    tags: ['ISO 9001', 'implementation', 'guide', 'quality management']
  },
  {
    id: 'quality-manual-template',
    title: 'Quality Manual Template',
    type: 'template',
    url: '/resources/quality-manual-template.docx',
    description: 'Editable template for creating ISO 9001 quality manual with all required sections',
    size: '1.2 MB',
    language: 'English',
    tags: ['ISO 9001', 'template', 'quality manual', 'documentation']
  },
  {
    id: 'internal-audit-checklist',
    title: 'Internal Audit Checklist',
    type: 'checklist',
    url: '/resources/internal-audit-checklist.pdf',
    description: 'Comprehensive checklist for conducting internal audits according to ISO 9001 requirements',
    size: '800 KB',
    language: 'English',
    tags: ['ISO 9001', 'audit', 'checklist', 'compliance']
  },
  {
    id: 'iso-9001-training-video',
    title: 'ISO 9001 Awareness Training',
    type: 'video',
    url: '/resources/iso-9001-training.mp4',
    description: 'Video training on ISO 9001 requirements and implementation best practices',
    duration: '45 minutes',
    language: 'English',
    tags: ['ISO 9001', 'training', 'video', 'awareness']
  },
  {
    id: 'corrective-action-template',
    title: 'Corrective Action Form Template',
    type: 'template',
    url: '/resources/corrective-action-template.docx',
    description: 'Template for documenting and tracking corrective actions and preventive actions',
    size: '500 KB',
    language: 'English',
    tags: ['ISO 9001', 'template', 'corrective action', 'preventive action']
  },
  {
    id: 'management-review-template',
    title: 'Management Review Template',
    type: 'template',
    url: '/resources/management-review-template.docx',
    description: 'Template for conducting and documenting management reviews',
    size: '600 KB',
    language: 'English',
    tags: ['ISO 9001', 'template', 'management review', 'leadership']
  },

  // ISO 14001 Resources
  {
    id: 'iso-14001-implementation-guide',
    title: 'ISO 14001 Implementation Guide',
    type: 'guide',
    url: '/resources/iso-14001-implementation-guide.pdf',
    description: 'Comprehensive guide for implementing ISO 14001 environmental management system',
    size: '3.0 MB',
    language: 'English',
    tags: ['ISO 14001', 'implementation', 'guide', 'environmental management']
  },
  {
    id: 'environmental-policy-template',
    title: 'Environmental Policy Template',
    type: 'template',
    url: '/resources/environmental-policy-template.docx',
    description: 'Template for developing environmental policy and objectives',
    size: '400 KB',
    language: 'English',
    tags: ['ISO 14001', 'template', 'environmental policy', 'sustainability']
  },
  {
    id: 'aspect-impact-assessment',
    title: 'Environmental Aspects and Impacts Assessment',
    type: 'tool',
    url: '/resources/aspect-impact-assessment.xlsx',
    description: 'Excel tool for identifying and evaluating environmental aspects and impacts',
    size: '1.5 MB',
    language: 'English',
    tags: ['ISO 14001', 'tool', 'environmental aspects', 'assessment']
  },

  // ISO 27001 Resources
  {
    id: 'iso-27001-implementation-guide',
    title: 'ISO 27001 Implementation Guide',
    type: 'guide',
    url: '/resources/iso-27001-implementation-guide.pdf',
    description: 'Comprehensive guide for implementing ISO 27001 information security management system',
    size: '2.8 MB',
    language: 'English',
    tags: ['ISO 27001', 'implementation', 'guide', 'information security']
  },
  {
    id: 'information-security-policy',
    title: 'Information Security Policy Template',
    type: 'template',
    url: '/resources/information-security-policy.docx',
    description: 'Template for developing comprehensive information security policy',
    size: '700 KB',
    language: 'English',
    tags: ['ISO 27001', 'template', 'information security', 'policy']
  },
  {
    id: 'risk-assessment-tool',
    title: 'Information Security Risk Assessment Tool',
    type: 'tool',
    url: '/resources/risk-assessment-tool.xlsx',
    description: 'Excel-based tool for conducting information security risk assessments',
    size: '2.0 MB',
    language: 'English',
    tags: ['ISO 27001', 'tool', 'risk assessment', 'security']
  },

  // ISO 45001 Resources
  {
    id: 'iso-45001-implementation-guide',
    title: 'ISO 45001 Implementation Guide',
    type: 'guide',
    url: '/resources/iso-45001-implementation-guide.pdf',
    description: 'Comprehensive guide for implementing ISO 45001 occupational health and safety management system',
    size: '2.7 MB',
    language: 'English',
    tags: ['ISO 45001', 'implementation', 'guide', 'occupational health and safety']
  },
  {
    id: 'ohs-policy-template',
    title: 'OH&S Policy Template',
    type: 'template',
    url: '/resources/ohs-policy-template.docx',
    description: 'Template for developing occupational health and safety policy',
    size: '500 KB',
    language: 'English',
    tags: ['ISO 45001', 'template', 'OH&S policy', 'safety']
  },
  {
    id: 'hazard-identification-tool',
    title: 'Hazard Identification and Risk Assessment Tool',
    type: 'tool',
    url: '/resources/hazard-identification-tool.xlsx',
    description: 'Excel tool for identifying hazards and assessing risks in the workplace',
    size: '1.8 MB',
    language: 'English',
    tags: ['ISO 45001', 'tool', 'hazard identification', 'risk assessment']
  },

  // Sector-Specific Resources
  {
    id: 'manufacturing-quality-guide',
    title: 'Manufacturing Quality Management Guide',
    type: 'guide',
    url: '/resources/manufacturing-quality-guide.pdf',
    description: 'Sector-specific guide for implementing quality management in manufacturing',
    size: '2.2 MB',
    language: 'English',
    tags: ['manufacturing', 'quality management', 'sector-specific', 'guide']
  },
  {
    id: 'healthcare-quality-guide',
    title: 'Healthcare Quality Management Guide',
    type: 'guide',
    url: '/resources/healthcare-quality-guide.pdf',
    description: 'Sector-specific guide for implementing quality management in healthcare',
    size: '2.4 MB',
    language: 'English',
    tags: ['healthcare', 'quality management', 'sector-specific', 'guide']
  },
  {
    id: 'technology-security-guide',
    title: 'Technology Information Security Guide',
    type: 'guide',
    url: '/resources/technology-security-guide.pdf',
    description: 'Sector-specific guide for implementing information security in technology companies',
    size: '2.1 MB',
    language: 'English',
    tags: ['technology', 'information security', 'sector-specific', 'guide']
  },

  // Training Materials
  {
    id: 'iso-awareness-training',
    title: 'ISO Standards Awareness Training',
    type: 'video',
    url: '/resources/iso-awareness-training.mp4',
    description: 'Comprehensive training video covering ISO standards fundamentals',
    duration: '60 minutes',
    language: 'English',
    tags: ['training', 'video', 'awareness', 'fundamentals']
  },
  {
    id: 'internal-auditor-training',
    title: 'Internal Auditor Training Course',
    type: 'video',
    url: '/resources/internal-auditor-training.mp4',
    description: 'Training course for developing internal audit skills and competencies',
    duration: '90 minutes',
    language: 'English',
    tags: ['training', 'video', 'internal audit', 'skills']
  },
  {
    id: 'leadership-training',
    title: 'Leadership in ISO Implementation',
    type: 'video',
    url: '/resources/leadership-training.mp4',
    description: 'Training for leaders and managers on their role in ISO implementation',
    duration: '45 minutes',
    language: 'English',
    tags: ['training', 'video', 'leadership', 'management']
  },

  // Templates and Forms
  {
    id: 'procedure-template',
    title: 'Procedure Template',
    type: 'template',
    url: '/resources/procedure-template.docx',
    description: 'Standard template for writing ISO procedures and work instructions',
    size: '300 KB',
    language: 'English',
    tags: ['template', 'procedure', 'work instruction', 'documentation']
  },
  {
    id: 'form-template',
    title: 'Form Template Collection',
    type: 'template',
    url: '/resources/form-template-collection.zip',
    description: 'Collection of common forms and records templates for ISO implementation',
    size: '1.5 MB',
    language: 'English',
    tags: ['template', 'forms', 'records', 'documentation']
  },
  {
    id: 'gap-analysis-template',
    title: 'Gap Analysis Template',
    type: 'template',
    url: '/resources/gap-analysis-template.xlsx',
    description: 'Excel template for conducting gap analysis against ISO requirements',
    size: '800 KB',
    language: 'English',
    tags: ['template', 'gap analysis', 'assessment', 'planning']
  },

  // Tools and Calculators
  {
    id: 'cost-calculator',
    title: 'ISO Implementation Cost Calculator',
    type: 'tool',
    url: '/resources/cost-calculator.xlsx',
    description: 'Excel tool for estimating ISO implementation costs and ROI',
    size: '1.2 MB',
    language: 'English',
    tags: ['tool', 'cost calculator', 'ROI', 'planning']
  },
  {
    id: 'timeline-planner',
    title: 'Implementation Timeline Planner',
    type: 'tool',
    url: '/resources/timeline-planner.xlsx',
    description: 'Excel tool for planning and tracking ISO implementation timeline',
    size: '900 KB',
    language: 'English',
    tags: ['tool', 'timeline', 'planning', 'project management']
  },
  {
    id: 'kpi-dashboard',
    title: 'KPI Dashboard Template',
    type: 'tool',
    url: '/resources/kpi-dashboard.xlsx',
    description: 'Excel dashboard for tracking key performance indicators',
    size: '1.0 MB',
    language: 'English',
    tags: ['tool', 'KPI', 'dashboard', 'monitoring']
  },

  // African Context Resources
  {
    id: 'african-iso-consultants',
    title: 'African ISO Consultants Directory',
    type: 'guide',
    url: '/resources/african-iso-consultants.pdf',
    description: 'Directory of qualified ISO consultants and auditors across Africa',
    size: '1.8 MB',
    language: 'English',
    tags: ['africa', 'consultants', 'directory', 'local resources']
  },
  {
    id: 'african-case-studies',
    title: 'African ISO Success Stories',
    type: 'guide',
    url: '/resources/african-case-studies.pdf',
    description: 'Collection of successful ISO implementation case studies from African organizations',
    size: '2.3 MB',
    language: 'English',
    tags: ['africa', 'case studies', 'success stories', 'examples']
  },
  {
    id: 'regional-partners',
    title: 'Regional Partners and Resources',
    type: 'guide',
    url: '/resources/regional-partners.pdf',
    description: 'Directory of regional partners, training providers, and support organizations',
    size: '1.5 MB',
    language: 'English',
    tags: ['africa', 'regional partners', 'support', 'resources']
  },

  // Checklists and Assessment Tools
  {
    id: 'pre-assessment-checklist',
    title: 'Pre-Assessment Checklist',
    type: 'checklist',
    url: '/resources/pre-assessment-checklist.pdf',
    description: 'Comprehensive checklist for preparing for ISO certification assessment',
    size: '600 KB',
    language: 'English',
    tags: ['checklist', 'pre-assessment', 'certification', 'preparation']
  },
  {
    id: 'documentation-checklist',
    title: 'Documentation Checklist',
    type: 'checklist',
    url: '/resources/documentation-checklist.pdf',
    description: 'Checklist for ensuring all required documentation is in place',
    size: '500 KB',
    language: 'English',
    tags: ['checklist', 'documentation', 'compliance', 'requirements']
  },
  {
    id: 'implementation-checklist',
    title: 'Implementation Readiness Checklist',
    type: 'checklist',
    url: '/resources/implementation-checklist.pdf',
    description: 'Checklist for assessing readiness to begin ISO implementation',
    size: '700 KB',
    language: 'English',
    tags: ['checklist', 'implementation', 'readiness', 'assessment']
  },

  // Webinars and Presentations
  {
    id: 'iso-9001-webinar',
    title: 'ISO 9001 Implementation Webinar',
    type: 'video',
    url: '/resources/iso-9001-webinar.mp4',
    description: 'Recorded webinar on ISO 9001 implementation best practices',
    duration: '75 minutes',
    language: 'English',
    tags: ['webinar', 'video', 'ISO 9001', 'best practices']
  },
  {
    id: 'african-perspective-webinar',
    title: 'ISO Standards: African Perspective',
    type: 'video',
    url: '/resources/african-perspective-webinar.mp4',
    description: 'Webinar discussing ISO implementation challenges and opportunities in Africa',
    duration: '60 minutes',
    language: 'English',
    tags: ['webinar', 'video', 'africa', 'perspective']
  },
  {
    id: 'certification-process-webinar',
    title: 'ISO Certification Process Explained',
    type: 'video',
    url: '/resources/certification-process-webinar.mp4',
    description: 'Webinar explaining the ISO certification process and requirements',
    duration: '50 minutes',
    language: 'English',
    tags: ['webinar', 'video', 'certification', 'process']
  }
];

export const resourceCategories = [
  {
    id: 'guides',
    name: 'Implementation Guides',
    description: 'Comprehensive guides for implementing ISO standards',
    icon: '📚',
    resources: resources.filter(r => r.type === 'guide')
  },
  {
    id: 'templates',
    name: 'Templates & Forms',
    description: 'Editable templates and forms for ISO documentation',
    icon: '📄',
    resources: resources.filter(r => r.type === 'template')
  },
  {
    id: 'tools',
    name: 'Tools & Calculators',
    description: 'Interactive tools and calculators for ISO implementation',
    icon: '🛠️',
    resources: resources.filter(r => r.type === 'tool')
  },
  {
    id: 'checklists',
    name: 'Checklists',
    description: 'Comprehensive checklists for ISO compliance',
    icon: '✅',
    resources: resources.filter(r => r.type === 'checklist')
  },
  {
    id: 'training',
    name: 'Training Materials',
    description: 'Videos, webinars, and training courses',
    icon: '🎓',
    resources: resources.filter(r => r.type === 'video')
  },
  {
    id: 'african-context',
    name: 'African Context',
    description: 'Resources specific to African organizations',
    icon: '🌍',
    resources: resources.filter(r => r.tags.includes('africa'))
  }
];

export const getResourcesByStandard = (standard: string): Resource[] => {
  return resources.filter(resource => 
    resource.tags.some(tag => tag.toLowerCase().includes(standard.toLowerCase()))
  );
};

export const getResourcesBySector = (sector: string): Resource[] => {
  const sectorKeywords = {
    manufacturing: ['manufacturing', 'production', 'quality'],
    healthcare: ['healthcare', 'medical', 'patient'],
    technology: ['technology', 'software', 'IT', 'information security'],
    'financial-services': ['financial', 'banking', 'security'],
    agriculture: ['agriculture', 'food', 'farming']
  };
  
  const keywords = sectorKeywords[sector as keyof typeof sectorKeywords] || [];
  return resources.filter(resource => 
    keywords.some(keyword => 
      resource.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))
    )
  );
}; 