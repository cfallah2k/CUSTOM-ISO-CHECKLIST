import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

// Components
import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import StandardsPage from './pages/StandardsPage';
import StandardDetailPage from './pages/StandardDetailPage';
import SectorsPage from './pages/SectorsPage';
import AssessmentPage from './pages/AssessmentPage';
import AIPage from './pages/AIPage';
import ResourcesPage from './pages/ResourcesPage';
import ImplementationGuidesPage from './pages/ImplementationGuidesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import TemplatesPage from './pages/TemplatesPage';
import TrainingMaterialsPage from './pages/TrainingMaterialsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';

// Context
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

// Styles
import './index.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('ErrorBoundary caught error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Details:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We're working on fixing the problem. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="text-left text-sm text-gray-500 mb-4">
                <summary className="cursor-pointer">Error Details</summary>
                <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingScreen: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 flex items-center justify-center">
    <div className="text-center text-white">
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold text-xl">AU</span>
      </div>
      <h1 className="text-2xl font-bold mb-2">AU ISO Assessment Platform</h1>
      <p className="text-white/80">Loading...</p>
      <div className="mt-4">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  console.log('App component rendering...');
  
  useEffect(() => {
    console.log('App useEffect running...');
    // Simulate loading time and ensure all components are ready
    const timer = setTimeout(() => {
      console.log('App loading complete, setting isLoading to false');
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    console.log('App showing loading screen');
    return <LoadingScreen />;
  }
  
  console.log('App rendering main content');
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <UserProvider>
              <Router>
                <div className="min-h-screen bg-gray-50">
                  <Layout>
                    <Header />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/standards" element={<StandardsPage />} />
                        <Route path="/standards/:id" element={<StandardDetailPage />} />
                        <Route path="/sectors" element={<SectorsPage />} />
                        <Route path="/assessment" element={<AssessmentPage />} />
                        <Route path="/ai" element={<AIPage />} />
                        <Route path="/resources" element={<ResourcesPage />} />
                        <Route path="/implementation-guides" element={<ImplementationGuidesPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/templates" element={<TemplatesPage />} />
                        <Route path="/training-materials" element={<TrainingMaterialsPage />} />
                        <Route path="/help-center" element={<HelpCenterPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="/terms-of-service" element={<TermsOfServicePage />} />


                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </main>
                    <Footer />
                  </Layout>
                  <Toaster
                    position="top-right"
                    toastOptions={{
                      duration: 4000,
                      style: {
                        background: '#363636',
                        color: '#fff',
                      },
                      success: {
                        duration: 3000,
                        iconTheme: {
                          primary: '#22c55e',
                          secondary: '#fff',
                        },
                      },
                      error: {
                        duration: 5000,
                        iconTheme: {
                          primary: '#ef4444',
                          secondary: '#fff',
                        },
                      },
                    }}
                  />
                </div>
              </Router>
            </UserProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App; 