import React from 'react';
import { Typography, Card, Table, Tag, Progress } from 'antd';
import { customers } from '../data/mockData';
import { calculateRiskScore } from '../utils/riskCalculator';

const { Title } = Typography;

const RiskAssessment = () => {
  const columns = [
    {
      title: 'Customer',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Credit Score',
      dataIndex: 'creditScore',
      key: 'creditScore',
      sorter: (a: any, b: any) => a.creditScore - b.creditScore,
    },
    {
      title: 'Debt-to-Income Ratio',
      key: 'debtRatio',
      render: (record: any) => {
        const ratio = ((record.outstandingLoans / (record.monthlyIncome * 12)) * 100).toFixed(1);
        return `${ratio}%`;
      },
      sorter: (a: any, b: any) => 
        (a.outstandingLoans / a.monthlyIncome) - (b.outstandingLoans / b.monthlyIncome),
    },
    {
      title: 'Repayment History',
      key: 'repaymentHistory',
      render: (record: any) => {
        const successRate = (record.loanRepaymentHistory.filter((x: number) => x === 1).length / 
          record.loanRepaymentHistory.length * 100).toFixed(1);
        return `${successRate}%`;
      },
    },
    {
      title: 'Risk Score',
      key: 'riskScore',
      render: (record: any) => {
        const risk = calculateRiskScore(record);
        return (
          <div className="space-y-2">
            <Progress
              percent={risk.score}
              size="small"
              strokeColor={risk.color}
              format={(percent) => `${percent}%`}
            />
            <Tag color={risk.color}>{risk.level.toUpperCase()}</Tag>
          </div>
        );
      },
      sorter: (a: any, b: any) => calculateRiskScore(a).score - calculateRiskScore(b).score,
    },
  ];

  return (
    <div className="space-y-6">
      <Title level={2}>Risk Assessment</Title>
      
      <Card>
        <Table
          dataSource={customers}
          columns={columns}
          rowKey="customerId"
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default RiskAssessment;