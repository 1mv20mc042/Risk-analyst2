# Risk-analyst2

# Credit Risk Analytics Dashboard

A comprehensive data visualization platform for credit risk assessment and financial insights. The application provides a dashboard for analyzing customer financial health, risk scores, and workflow management.

![Dashboard Screenshot](https://via.placeholder.com/800x450?text=Credit+Risk+Dashboard)

## 🚀 Features

- **Dashboard Overview**: Visual representation of key financial metrics including income vs. expenses trends and risk distribution.
- **Risk Assessment & Scoring**: Advanced algorithm to compute risk scores based on multiple factors with detailed visualizations.
- **Workflow Management**: Streamlined process for reviewing and updating customer status with built-in alerts for high-risk customers.
- **Real-time Analytics**: Live updates of financial metrics and risk indicators.
- **Customer Profiling**: Detailed customer financial health analysis and history tracking.

## 🛠️ Technologies Used

### Frontend
- React with TypeScript
- Ant Design for UI components
- Recharts for data visualization
- React Router for navigation
- Vite for fast development and building

### Backend
- Node.js with Express
- RESTful API architecture
- File-based data storage (JSON)
- TypeScript for type safety

## 🤖 AI-Assisted Development

This project was developed with assistance from AI tools:
- **Cursor**: Used for code completion, feature implementation suggestions, and error resolution
- **GitHub Copilot**: Assisted with developing complex components and algorithms

## 📋 Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git for version control

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/credit-risk-dashboard.git
cd credit-risk-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:3000

## 📁 Project Structure

```
credit-risk-dashboard/
├── public/                  # Static files
├── server/                  # Backend server
│   ├── data.json            # Sample customer data
│   └── index.js             # Express server setup
├── src/
│   ├── api/                 # API utilities
│   ├── components/          # React components
│   │   ├── dashboard/       # Dashboard components
│   │   ├── riskAssessment/  # Risk assessment components
│   │   └── workflow/        # Workflow management components
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main App component
│   └── index.tsx            # Entry point
└── package.json             # Project dependencies
```

## 📊 Risk Scoring Methodology

The risk score is calculated based on multiple factors:
- Credit score (30%): Lower score = higher risk
- Loan repayment history (30%): More missed payments = higher risk
- Loan to income ratio (25%): Higher ratio = higher risk
- Expense to income ratio (15%): Higher ratio = higher risk







