import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CryptocurrencyList from './components/CryptocurrencyList/CryptocurrencyList';
import СryptocurrencyPage from './components/СryptocurrencyPage/СryptocurrencyPage';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<CryptocurrencyList/>}/>
          <Route path='/cryptpage' element={<СryptocurrencyPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
