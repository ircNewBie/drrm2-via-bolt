import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from './components/layout/Navigation';
import { Dashboard } from './components/Dashboard/index'; // Updated import path
import { ReportForm } from './components/ReportForm';
import { LandingPage } from './components/LandingPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Dashboard 
                      reports={[]} 
                      onReportClick={(report) => console.log('Report clicked:', report)} 
                    />
                  </div>
                } 
              />
              <Route 
                path="/new-report" 
                element={
                  <div className="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-6">Submit New Report</h2>
                    <ReportForm onSubmit={(data) => console.log('Form submitted:', data)} />
                  </div>
                } 
              />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;