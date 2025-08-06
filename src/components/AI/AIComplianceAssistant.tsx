import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  DocumentTextIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

interface AIRecommendation {
  type: 'priority' | 'timeline' | 'resource' | 'risk' | 'opportunity';
  title: string;
  description: string;
  confidence: number;
  actionItems: string[];
}

interface AIComplianceAssistantProps {
  companyProfile: any;
  selectedStandards: string[];
  currentChecklist: any[];
  onRecommendation: (recommendation: AIRecommendation) => void;
}

const AIComplianceAssistant: React.FC<AIComplianceAssistantProps> = ({
  companyProfile,
  selectedStandards,
  currentChecklist,
  onRecommendation
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'ai', message: string}>>([]);
  const [userInput, setUserInput] = useState('');

  const generateAIRecommendations = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aiRecommendations: AIRecommendation[] = [
      {
        type: 'priority',
        title: 'High Priority Implementation Strategy',
        description: `Based on your ${companyProfile.size} size and ${companyProfile.industry} industry, I recommend focusing on security and compliance requirements first.`,
        confidence: 0.92,
        actionItems: [
          'Implement ISO 27001 security controls within 3 months',
          'Establish compliance monitoring dashboard',
          'Train key personnel on security protocols'
        ]
      },
      {
        type: 'timeline',
        title: 'Optimized Implementation Timeline',
        description: 'AI analysis suggests a phased approach will reduce implementation time by 40% while maintaining quality.',
        confidence: 0.88,
        actionItems: [
          'Phase 1: Core requirements (Months 1-3)',
          'Phase 2: Advanced controls (Months 4-6)',
          'Phase 3: Optimization (Months 7-9)'
        ]
      },
      {
        type: 'risk',
        title: 'Risk Assessment & Mitigation',
        description: 'Identified 3 high-risk areas requiring immediate attention based on your industry profile.',
        confidence: 0.95,
        actionItems: [
          'Data protection compliance gaps',
          'Supply chain security vulnerabilities',
          'Regulatory reporting requirements'
        ]
      },
      {
        type: 'opportunity',
        title: 'Competitive Advantage Opportunities',
        description: 'AI analysis reveals 5 areas where ISO certification can give you market advantage.',
        confidence: 0.87,
        actionItems: [
          'Leverage certification for client proposals',
          'Use compliance as marketing differentiator',
          'Implement sustainability practices for ESG benefits'
        ]
      }
    ];
    
    setRecommendations(aiRecommendations);
    setIsAnalyzing(false);
  };

  const handleAIChat = async (message: string) => {
    const userMessage = { type: 'user' as const, message };
    setChatHistory(prev => [...prev, userMessage]);
    setUserInput('');
    
    // Simulate AI response
    const aiResponse = await generateAIResponse(message);
    const aiMessage = { type: 'ai' as const, message: aiResponse };
    setChatHistory(prev => [...prev, aiMessage]);
  };

  const generateAIResponse = async (message: string): Promise<string> => {
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const responses = [
      "Based on your company profile, I recommend focusing on risk management first. Would you like me to analyze your current risk exposure?",
      "I can help you optimize your implementation timeline. Let me analyze your current progress and suggest improvements.",
      "I've identified some compliance gaps in your current setup. Should I generate a detailed mitigation plan?",
      "Your industry has specific regulatory requirements. Let me create a customized compliance roadmap for you.",
      "I can help you leverage your ISO certification for competitive advantage. Would you like to see market opportunities?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case 'priority':
        return <LightBulbIcon className="h-6 w-6 text-yellow-500" />;
      case 'timeline':
        return <ArrowPathIcon className="h-6 w-6 text-blue-500" />;
      case 'risk':
        return <DocumentTextIcon className="h-6 w-6 text-red-500" />;
      case 'opportunity':
        return <SparklesIcon className="h-6 w-6 text-green-500" />;
      default:
        return <LightBulbIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-600';
    if (confidence >= 0.8) return 'text-yellow-600';
    return 'text-orange-600';
  };

  return (
    <div className="space-y-6">
      {/* AI Assistant Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <SparklesIcon className="h-8 w-8" />
          <div>
            <h2 className="text-2xl font-bold">AI Compliance Assistant</h2>
            <p className="text-purple-100">Powered by advanced AI to optimize your ISO implementation</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="font-semibold">Smart Analysis</div>
            <div className="text-purple-100">AI-powered risk assessment</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="font-semibold">Predictive Insights</div>
            <div className="text-purple-100">Timeline optimization</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="font-semibold">Continuous Learning</div>
            <div className="text-purple-100">Adapts to your progress</div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">AI-Powered Recommendations</h3>
          <button
            onClick={generateAIRecommendations}
            disabled={isAnalyzing}
            className="btn-primary flex items-center"
          >
            {isAnalyzing ? (
              <>
                <ArrowPathIcon className="h-4 w-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <SparklesIcon className="h-4 w-4 mr-2" />
                Generate AI Insights
              </>
            )}
          </button>
        </div>

        {recommendations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-3 mb-3">
                  {getRecommendationIcon(rec.type)}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                  </div>
                  <div className={`text-sm font-medium ${getConfidenceColor(rec.confidence)}`}>
                    {Math.round(rec.confidence * 100)}% confidence
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-gray-700">Action Items:</h5>
                  <ul className="space-y-1">
                    {rec.actionItems.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* AI Chat Interface */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2 text-primary-600" />
          AI Compliance Chat
        </h3>
        
        <div className="border border-gray-200 rounded-lg h-64 overflow-y-auto p-4 mb-4">
          {chatHistory.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <ChatBubbleLeftRightIcon className="h-12 w-12 mx-auto mb-2 text-gray-300" />
              <p>Ask me anything about your ISO implementation!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && userInput.trim() && handleAIChat(userInput)}
            placeholder="Ask about compliance, timelines, risks..."
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={() => userInput.trim() && handleAIChat(userInput)}
            disabled={!userInput.trim()}
            className="btn-primary"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIComplianceAssistant; 