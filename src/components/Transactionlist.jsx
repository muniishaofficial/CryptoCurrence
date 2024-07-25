

import React, { useContext } from 'react';
import { CryptoContext } from '../Context/CryptoContext';

const TransactionList = () => {
  const { transactions } = useContext(CryptoContext);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type} ${transaction.amount} - {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
