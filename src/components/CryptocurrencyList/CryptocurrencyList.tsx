import React, {useState} from 'react';
import CryptocurrencyItem from '../СryptocurrencyItem/CryptocurrencyItem';
import './CryptocurrencyList.css';

const CryptocurrencyList: React.FC = () => {
  return (
    <>
      <main>
        <CryptocurrencyItem/>
      </main>
    </>
  );
};

export default CryptocurrencyList;
