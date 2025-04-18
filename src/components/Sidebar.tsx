import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, AlertTriangle, GitBranch } from 'lucide-react';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '/risk-assessment',
      icon: <AlertTriangle className="w-5 h-5" />,
      label: <Link to="/risk-assessment">Risk Assessment</Link>,
    },
    {
      key: '/workflow',
      icon: <GitBranch className="w-5 h-5" />,
      label: <Link to="/workflow">Workflow</Link>,
    },
  ];

  return (
    <Sider
      theme="light"
      className="min-h-screen border-r border-gray-200"
      width={250}
    >
      <div className="h-16 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-xl font-semibold text-blue-600">Credit Risk</h1>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        className="border-r-0"
      />
    </Sider>
  );
}

export default Sidebar;