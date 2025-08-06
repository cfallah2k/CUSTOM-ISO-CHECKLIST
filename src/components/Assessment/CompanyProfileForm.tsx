import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface CompanyProfile {
  name: string;
  industry: string;
  size: 'Startup' | 'SME' | 'Enterprise';
  maturityLevel: 'Basic' | 'Intermediate' | 'Advanced';
  description: string;
  selectedStandards: string[];
}

interface CompanyProfileFormProps {
  profile: CompanyProfile;
  onProfileUpdate: (profile: CompanyProfile) => void;
  onNext: (profile: CompanyProfile) => void;
}

const CompanyProfileForm: React.FC<CompanyProfileFormProps> = ({
  profile,
  onProfileUpdate,
  onNext
}) => {
  const [formData, setFormData] = useState<CompanyProfile>(profile);

  const handleInputChange = (field: keyof CompanyProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProfileUpdate(formData);
    onNext(formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Profile</h2>
        <p className="text-gray-600 mb-8">Tell us about your organization to generate a customized compliance checklist.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your company name"
              required
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry/Sector *
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary-500"
              required
            >
              <option value="">Select your industry</option>
              <option value="Technology">Technology & Software</option>
              <option value="Finance">Finance & Banking</option>
              <option value="Healthcare">Healthcare & Medical</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail & E-commerce</option>
              <option value="Creative">Creative & Cultural Industries</option>
              <option value="Mining">Mining & Minerals</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Company Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: 'Startup', label: 'Startup', desc: '1-10 employees' },
                { value: 'SME', label: 'SME', desc: '11-250 employees' },
                { value: 'Enterprise', label: 'Enterprise', desc: '250+ employees' }
              ].map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleInputChange('size', option.value)}
                  className={`p-4 border-2 rounded-lg cursor-pointer ${
                    formData.size === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Maturity Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maturity Level *
            </label>
            <div className="space-y-3">
              {[
                { value: 'Basic', label: 'Basic', desc: 'Limited formal processes' },
                { value: 'Intermediate', label: 'Intermediate', desc: 'Some formal processes' },
                { value: 'Advanced', label: 'Advanced', desc: 'Well-established processes' }
              ].map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleInputChange('maturityLevel', option.value)}
                  className={`p-4 border-2 rounded-lg cursor-pointer ${
                    formData.maturityLevel === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.desc}</div>
                    </div>
                    {formData.maturityLevel === option.value && (
                      <CheckCircleIcon className="h-5 w-5 text-primary-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary-500"
              placeholder="Briefly describe your business activities..."
            />
          </div>

          {/* ISO Standards */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select ISO Standards *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: 'iso-9001', name: 'ISO 9001', desc: 'Quality Management' },
                { id: 'iso-14001', name: 'ISO 14001', desc: 'Environmental Management' },
                { id: 'iso-45001', name: 'ISO 45001', desc: 'Health & Safety' },
                { id: 'iso-27001', name: 'ISO 27001', desc: 'Information Security' },
                { id: 'iso-50001', name: 'ISO 50001', desc: 'Energy Management' },
                { id: 'iso-22301', name: 'ISO 22301', desc: 'Business Continuity' }
              ].map((standard) => (
                <div
                  key={standard.id}
                  onClick={() => {
                    const current = formData.selectedStandards;
                    const updated = current.includes(standard.id)
                      ? current.filter(id => id !== standard.id)
                      : [...current, standard.id];
                    handleInputChange('selectedStandards', updated);
                  }}
                  className={`p-3 border-2 rounded-lg cursor-pointer ${
                    formData.selectedStandards.includes(standard.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{standard.name}</div>
                      <div className="text-sm text-gray-600">{standard.desc}</div>
                    </div>
                    {formData.selectedStandards.includes(standard.id) && (
                      <CheckCircleIcon className="h-4 w-4 text-primary-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!formData.name || !formData.industry || !formData.size || !formData.maturityLevel || formData.selectedStandards.length === 0}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate Compliance Checklist
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyProfileForm; 