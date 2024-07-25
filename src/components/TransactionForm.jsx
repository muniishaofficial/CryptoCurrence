

import React, { useState, useContext } from 'react';
import { CryptoContext } from '../Context/CryptoContext';
import './transaction.css'; 

const TransactionForm = () => {
  const { addTransaction } = useContext(CryptoContext);
  const [type, setType] = useState('buy');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    const transaction = {
      type,
      amount: parseFloat(amount),
      date: new Date().toLocaleString(),
    };
    addTransaction(transaction);
    setAmount('');
  };

  return (
    <div className="transaction-form-container">
      <h2 className="form-title">Add Transaction</h2>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <select
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
        </div>
        <button type="submit" className="submit-button">Add</button>
      </form>
    </div>
  );
};

export default TransactionForm;
