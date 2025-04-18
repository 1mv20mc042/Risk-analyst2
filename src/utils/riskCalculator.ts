export const calculateRiskScore = (customer: {
  creditScore: number;
  loanRepaymentHistory: number[];
  outstandingLoans: number;
  monthlyIncome: number;
}): { score: number; level: 'low' | 'medium' | 'high'; color: string } => {
  // Credit score weight (30%)
  const creditScoreWeight = 0.3;
  const normalizedCreditScore = (customer.creditScore / 850) * 100;

  // Repayment history weight (40%)
  const repaymentWeight = 0.4;
  const repaymentScore = (customer.loanRepaymentHistory.reduce((a, b) => a + b, 0) / 
    customer.loanRepaymentHistory.length) * 100;

  // Debt to income ratio weight (30%)
  const debtRatioWeight = 0.3;
  const debtToIncomeRatio = (customer.outstandingLoans / (customer.monthlyIncome * 12)) * 100;
  const normalizedDebtRatio = Math.max(0, 100 - debtToIncomeRatio);

  // Calculate final risk score
  const riskScore = (
    normalizedCreditScore * creditScoreWeight +
    repaymentScore * repaymentWeight +
    normalizedDebtRatio * debtRatioWeight
  );

  // Determine risk level and color
  let level: 'low' | 'medium' | 'high';
  let color: string;

  if (riskScore >= 75) {
    level = 'low';
    color = '#52c41a';
  } else if (riskScore >= 50) {
    level = 'medium';
    color = '#faad14';
  } else {
    level = 'high';
    color = '#f5222d';
  }

  return {
    score: Math.round(riskScore),
    level,
    color
  };
};