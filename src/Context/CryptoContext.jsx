

import React, { createContext, useState, useEffect } from 'react';

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {

  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem('balance');
    return storedBalance ? parseFloat(storedBalance) : 1000; 
  });

  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]);


  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = [...prevTransactions, transaction];

    
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

      return updatedTransactions;
    });

    setBalance((prevBalance) =>
      transaction.type === 'buy'
        ? prevBalance - transaction.amount
        : prevBalance + transaction.amount
    );
  };

  return (
    <CryptoContext.Provider value={{ balance, transactions, addTransaction }}>
      {children}
    </CryptoContext.Provider>
  );
};
