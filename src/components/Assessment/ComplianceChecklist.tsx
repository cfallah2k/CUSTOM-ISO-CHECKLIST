import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  DocumentArrowDownIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';
import { isoStandards } from '../../data/isoStandards';
import { exportToCSV, exportToPDF } from '../../utils/exportUtils';

interface ChecklistItem {
  id: string;
  standard: string;
  clause: string;
  requirement: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Not Applicable';
  notes: string;
  dueDate?: string;
  assignedTo?: string;
}

interface CompanyProfile {
  name: string;
  industry: string;
  size: 'Startup' | 'SME' | 'Enterprise';
  maturityLevel: 'Basic' | 'Intermediate' | 'Advanced';
  description: string;
  selectedStandards: string[];
}

interface ComplianceChecklistProps {
  companyProfile: CompanyProfile;
  onExport: (format: 'pdf' | 'csv') => void;
  onSave: (checklist: ChecklistItem[]) => void;
}

const ComplianceChecklist: React.FC<ComplianceChecklistProps> = ({
  companyProfile,
  onExport,
  onSave
}) => {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'not-started' | 'in-progress' | 'completed'>('all');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateChecklist = useCallback(() => {
    setIsGenerating(true);
    
    const newChecklistItems: ChecklistItem[] = [];
    
    companyProfile.selectedStandards.forEach(standardId => {
      const standard = isoStandards.find(s => s.id === standardId);
      if (!standard) return;

      // Generate items based on standard requirements
      standard.requirements.forEach((requirement, index) => {
        const priority = determinePriority(requirement, companyProfile);
        const notes = generateCustomNotes(requirement, companyProfile);
        
        newChecklistItems.push({
          id: `${standardId}-req-${index}`,
          standard: standard.code,
          clause: `Clause ${index + 1}`,
          requirement: requirement,
          priority,
          status: 'Not Started',
          notes
        });
      });

      // Generate items based on implementation steps
      standard.implementation.forEach((step, index) => {
        const priority = determinePriority(step.title, companyProfile);
        const notes = generateCustomNotes(step.description, companyProfile);
        
        newChecklistItems.push({
          id: `${standardId}-impl-${index}`,
          standard: standard.code,
          clause: 'Implementation',
          requirement: step.title,
          priority,
          status: 'Not Started',
          notes
        });
      });
    });

    setChecklistItems(newChecklistItems);
    setIsGenerating(false);
  }, [companyProfile]);

  // Generate checklist based on selected standards and company profile
  useEffect(() => {
    if (companyProfile.selectedStandards.length > 0) {
      generateChecklist();
    }
  }, [companyProfile, generateChecklist]);

  const determinePriority = (requirement: string, profile: CompanyProfile): 'High' | 'Medium' | 'Low' => {
    const highPriorityKeywords = ['security', 'safety', 'compliance', 'legal', 'regulatory', 'critical'];
    const mediumPriorityKeywords = ['quality', 'process', 'management', 'documentation'];
    
    const lowerRequirement = requirement.toLowerCase();
    
    // Check for high priority keywords
    if (highPriorityKeywords.some(keyword => lowerRequirement.includes(keyword))) {
      return 'High';
    }
    
    // Check for medium priority keywords
    if (mediumPriorityKeywords.some(keyword => lowerRequirement.includes(keyword))) {
      return 'Medium';
    }
    
    // Adjust based on company size and maturity
    if (profile.size === 'Enterprise' || profile.maturityLevel === 'Advanced') {
      return 'High';
    }
    
    return 'Low';
  };

  const generateCustomNotes = (requirement: string, profile: CompanyProfile): string => {
    const notes = [];
    
    // Size-based recommendations
    if (profile.size === 'Startup') {
      notes.push('Focus on essential requirements first. Consider phased implementation.');
    } else if (profile.size === 'SME') {
      notes.push('Balance implementation with operational needs. Consider external support.');
    } else if (profile.size === 'Enterprise') {
      notes.push('Comprehensive implementation recommended. Consider dedicated compliance team.');
    }
    
    // Industry-specific notes
    if (profile.industry.toLowerCase().includes('finance')) {
      notes.push('High regulatory scrutiny. Ensure robust documentation.');
    } else if (profile.industry.toLowerCase().includes('healthcare')) {
      notes.push('Patient safety critical. Prioritize quality and safety requirements.');
    } else if (profile.industry.toLowerCase().includes('technology')) {
      notes.push('Focus on information security and data protection.');
    }
    
    // Maturity-based recommendations
    if (profile.maturityLevel === 'Basic') {
      notes.push('Start with foundational requirements. Build capabilities gradually.');
    } else if (profile.maturityLevel === 'Advanced') {
      notes.push('Leverage existing systems. Focus on optimization and continuous improvement.');
    }
    
    return notes.join(' ');
  };

  const updateItemStatus = (itemId: string, status: ChecklistItem['status']) => {
    setChecklistItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, status } : item
      )
    );
  };

  const getFilteredItems = () => {
    return checklistItems.filter(item => {
      const matchesFilter = filter === 'all' || item.priority.toLowerCase() === filter;
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'not-started' && item.status === 'Not Started') ||
        (statusFilter === 'in-progress' && item.status === 'In Progress') ||
        (statusFilter === 'completed' && item.status === 'Completed');
      
      return matchesFilter && matchesStatus;
    });
  };

  const getProgressStats = () => {
    const total = checklistItems.length;
    const completed = checklistItems.filter(item => item.status === 'Completed').length;
    const inProgress = checklistItems.filter(item => item.status === 'In Progress').length;
    const notStarted = checklistItems.filter(item => item.status === 'Not Started').length;
    
    return {
      total,
      completed,
      inProgress,
      notStarted,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'High':
        return <ShieldCheckIcon className="h-4 w-4 text-red-500" />;
      case 'Medium':
        return <CogIcon className="h-4 w-4 text-yellow-500" />;
      case 'Low':
        return <ComputerDesktopIcon className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Not Started':
        return 'bg-gray-100 text-gray-800';
      case 'Not Applicable':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = getProgressStats();

  if (isGenerating) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Generating your customized compliance checklist...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Compliance Checklist</h2>
            <p className="text-gray-600">Customized for {companyProfile.name}</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => {
                exportToCSV(checklistItems, companyProfile.name);
                onExport('csv');
              }}
              className="btn-outline flex items-center"
            >
              <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
              Export CSV
            </button>
            <button
              onClick={() => {
                exportToPDF(checklistItems, companyProfile.name);
                onExport('pdf');
              }}
              className="btn-outline flex items-center"
            >
              <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4">
            <div className="flex items-center">
              <ChartBarIcon className="h-8 w-8 text-primary-600 mr-3" />
              <div>
                <p className="text-sm text-primary-600">Overall Progress</p>
                <p className="text-2xl font-bold text-primary-900">{stats.percentage}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-green-600">Completed</p>
                <p className="text-2xl font-bold text-green-900">{stats.completed}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center">
              <CogIcon className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-blue-600">In Progress</p>
                <p className="text-2xl font-bold text-blue-900">{stats.inProgress}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center">
              <ClipboardDocumentListIcon className="h-8 w-8 text-gray-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Total Items</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{stats.completed} of {stats.total} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-600 to-primary-700 h-2 rounded-full transition-all duration-300"
              style={{ width: `${stats.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Status</option>
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-4">
        {getFilteredItems().map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {getPriorityIcon(item.priority)}
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    {item.standard} - {item.clause}
                  </span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.requirement}
                </h3>
                
                {item.notes && (
                  <p className="text-sm text-gray-600 mb-3 bg-gray-50 p-3 rounded">
                    <strong>Notes:</strong> {item.notes}
                  </p>
                )}
              </div>
              
              <div className="ml-4">
                <select
                  value={item.status}
                  onChange={(e) => updateItemStatus(item.id, e.target.value as ChecklistItem['status'])}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {getFilteredItems().length === 0 && (
        <div className="text-center py-12">
          <ClipboardDocumentListIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No items match your current filters.</p>
        </div>
      )}
    </div>
  );
};

export default ComplianceChecklist; 