import React from 'react';
import { Typography, Row, Col, Card, Statistic, Table } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { customers } from '../data/mockData';
import { calculateRiskScore } from '../utils/riskCalculator';
import { DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

const { Title } = Typography;

const Dashboard = () => {
  const totalIncome = customers.reduce((sum, customer) => sum + customer.monthlyIncome, 0);
  const totalExpenses = customers.reduce((sum, customer) => sum + customer.monthlyExpenses, 0);
  const averageRiskScore = Math.round(
    customers.reduce((sum, customer) => sum + calculateRiskScore(customer).score, 0) / customers.length
  );

  const riskDistribution = customers.map(customer => ({
    name: customer.name,
    riskScore: calculateRiskScore(customer).score
  }));

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
      title: 'Monthly Income',
      dataIndex: 'monthlyIncome',
      key: 'monthlyIncome',
      render: (value: number) => `$${value.toLocaleString()}`,
    },
    {
      title: 'Risk Score',
      key: 'riskScore',
      render: (_, record: any) => {
        const risk = calculateRiskScore(record);
        return <span style={{ color: risk.color }}>{risk.score}</span>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div className="space-y-6">
      <Title level={2}>Financial Dashboard</Title>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Total Monthly Income"
              value={totalIncome}
              prefix={<DollarSign className="w-4 h-4" />}
              precision={2}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Total Monthly Expenses"
              value={totalExpenses}
              prefix={<TrendingUp className="w-4 h-4" />}
              precision={2}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Average Risk Score"
              value={averageRiskScore}
              prefix={<AlertTriangle className="w-4 h-4" />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Card title="Risk Score Distribution">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={riskDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="riskScore" fill="#1677ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Customer Overview">
        <Table
          dataSource={customers}
          columns={columns}
          rowKey="customerId"
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default Dashboard;