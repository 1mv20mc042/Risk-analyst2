import React, { useState } from 'react';
import { Typography, Card, Table, Select, message, Tag } from 'antd';
import { customers } from '../data/mockData';
import { calculateRiskScore } from '../utils/riskCalculator';

const { Title } = Typography;

const Workflow = () => {
  const [customerData, setCustomerData] = useState(customers);

  const handleStatusChange = (customerId: string, newStatus: string) => {
    setCustomerData(prev => 
      prev.map(customer => 
        customer.customerId === customerId 
          ? { ...customer, status: newStatus as 'Review' | 'Approved' | 'Rejected' }
          : customer
      )
    );
    message.success(`Status updated for customer ${customerId}`);
  };

  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      key: 'customerId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Risk Level',
      key: 'riskLevel',
      render: (record: any) => {
        const risk = calculateRiskScore(record);
        return <Tag color={risk.color}>{risk.level.toUpperCase()}</Tag>;
      },
      filters: [
        { text: 'High Risk', value: 'high' },
        { text: 'Medium Risk', value: 'medium' },
        { text: 'Low Risk', value: 'low' },
      ],
      onFilter: (value: string, record: any) => 
        calculateRiskScore(record).level === value,
    },
    {
      title: 'Current Status',
      key: 'status',
      render: (record: any) => (
        <Select
          value={record.status}
          style={{ width: 120 }}
          onChange={(value) => handleStatusChange(record.customerId, value)}
          options={[
            { value: 'Review', label: 'Review' },
            { value: 'Approved', label: 'Approved' },
            { value: 'Rejected', label: 'Rejected' },
          ]}
        />
      ),
      filters: [
        { text: 'Review', value: 'Review' },
        { text: 'Approved', value: 'Approved' },
        { text: 'Rejected', value: 'Rejected' },
      ],
      onFilter: (value: string, record: any) => record.status === value,
    },
  ];

  return (
    <div className="space-y-6">
      <Title level={2}>Workflow Management</Title>
      
      <Card>
        <Table
          dataSource={customerData}
          columns={columns}
          rowKey="customerId"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
};

export default Workflow;