import React, { useState } from 'react';
import './TransactionSummary.css'; // Importing the CSS file
import './Shared/Footer.js';
import './Shared/Navbar.js'


const TransactionSummary = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, name:'John Doe', description: 'Transaction 1', amount: 100 },
    { id: 2, name:'Jane Doe', description: 'Transaction 2', amount: -50 },
    { id: 3, name:'Job Doe', description: 'Transaction 3', amount: 75 },
  ]);

  const addTransaction = async (newTransaction) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error('Failed to add transaction');
      }

      const addedTransaction = await response.json();
      setTransactions([...transactions, { ...newTransaction, id: addedTransaction.id }]);
    } catch (error) {
      console.log('Error adding transaction:', error);
    }
  };

  return (
    <div className="transaction-summary">
      <h2>Transaction Summary</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.name}</td>
              <td>{transaction.description}</td>
              <td className={transaction.amount < 0 ? 'negative' : ''}>
                ${Math.abs(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn' onClick={() => addTransaction({ name: 'New Transaction', description: 'New Description', amount: 50 })}>Add Transaction</button>
    </div>
  );
};

export default TransactionSummary;

