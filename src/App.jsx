import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Signup from './components/signUp';
import Login from './components/Login';
import { CryptoProvider } from './Context/CryptoContext';

const App = () => {
  return (
    <CryptoProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
       </CryptoProvider>
  );
};

export default App;
