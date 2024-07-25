import React, { useContext } from 'react';
import { CryptoContext } from '../Context/CryptoContext';
import './Dashboard.css'; // Import CSS styles
import TransactionForm from './TransactionForm';

const Dashboard = () => {
  const { balance, transactions } = useContext(CryptoContext);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="balance">
        <p>Current Balance:</p>
        <h3>${balance.toFixed(2)}</h3>
      </div>
      {/* <button className="add-transaction-button">Add Transaction</button> */}
      <TransactionForm/>
      <div className="transactions">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(-5).map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;