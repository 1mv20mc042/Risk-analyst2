import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import RiskAssessment from './pages/RiskAssessment';
import Workflow from './pages/Workflow';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Sidebar />
        <Layout>
          <Content className="p-6 bg-gray-50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/risk-assessment" element={<RiskAssessment />} />
              <Route path="/workflow" element={<Workflow />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;