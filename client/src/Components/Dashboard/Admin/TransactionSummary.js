import React, { useState, useEffect } from 'react';
// import './TransactionSummary.css'; // Importing the CSS file

const TransactionSummary = () => {
  // Example transaction data (replace this with your actual data)
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Transaction 1', amount: 100 },
    { id: 2, description: 'Transaction 2', amount: -50 },
    { id: 3, description: 'Transaction 3', amount: 75 },
  ]);

  return (
    <div className="transaction-summary">
      <h2>Transaction Summary</h2>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <span className="transaction-description">{transaction.description}: </span>
            <span className={`transaction-amount ${transaction.amount < 0 ? 'negative' : ''}`}>
              ${Math.abs(transaction.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionSummary;
