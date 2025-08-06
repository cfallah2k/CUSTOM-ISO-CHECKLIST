export interface ChecklistItem {
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

export const exportToCSV = (checklistItems: ChecklistItem[], companyName: string): void => {
  // Create CSV headers
  const headers = [
    'Standard',
    'Clause',
    'Requirement',
    'Priority',
    'Status',
    'Notes',
    'Due Date',
    'Assigned To'
  ];

  // Convert checklist items to CSV rows
  const csvRows = checklistItems.map(item => [
    item.standard,
    item.clause,
    `"${item.requirement.replace(/"/g, '""')}"`, // Escape quotes in requirement text
    item.priority,
    item.status,
    `"${item.notes.replace(/"/g, '""')}"`, // Escape quotes in notes
    item.dueDate || '',
    item.assignedTo || ''
  ]);

  // Combine headers and rows
  const csvContent = [headers, ...csvRows]
    .map(row => row.join(','))
    .join('\n');

  // Create and download the file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `${companyName}_ISO_Compliance_Checklist_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToPDF = (checklistItems: ChecklistItem[], companyName: string): void => {
  // Placeholder for PDF export functionality
  // This would typically use a library like jsPDF or react-pdf
  console.log('PDF export functionality would be implemented here');
  alert('PDF export functionality is coming soon!');
};

export const generateChecklistReport = (checklistItems: ChecklistItem[]) => {
  const total = checklistItems.length;
  const completed = checklistItems.filter(item => item.status === 'Completed').length;
  const inProgress = checklistItems.filter(item => item.status === 'In Progress').length;
  const notStarted = checklistItems.filter(item => item.status === 'Not Started').length;
  const notApplicable = checklistItems.filter(item => item.status === 'Not Applicable').length;

  const highPriority = checklistItems.filter(item => item.priority === 'High').length;
  const mediumPriority = checklistItems.filter(item => item.priority === 'Medium').length;
  const lowPriority = checklistItems.filter(item => item.priority === 'Low').length;

  return {
    summary: {
      total,
      completed,
      inProgress,
      notStarted,
      notApplicable,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    },
    priorities: {
      high: highPriority,
      medium: mediumPriority,
      low: lowPriority
    },
    byStandard: checklistItems.reduce((acc, item) => {
      if (!acc[item.standard]) {
        acc[item.standard] = { total: 0, completed: 0, inProgress: 0, notStarted: 0 };
      }
      acc[item.standard].total++;
      
      // Handle status counting safely
      switch (item.status) {
        case 'Completed':
          acc[item.standard].completed++;
          break;
        case 'In Progress':
          acc[item.standard].inProgress++;
          break;
        case 'Not Started':
          acc[item.standard].notStarted++;
          break;
      }
      
      return acc;
    }, {} as Record<string, { total: number; completed: number; inProgress: number; notStarted: number }>)
  };
}; 