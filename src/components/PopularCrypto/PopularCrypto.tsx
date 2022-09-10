import React, {useState, useEffect} from 'react';
import './PopularCrypto.css';
import { BASE_URL } from '../../constants/urls';

const PopularCrypto: React.FC = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<any[]>([]);

  useEffect(() => {
    request();
  }, []);
  const request = () => {
    const response = fetch(`${BASE_URL}/assets?limit=3&offset=0`).then((resp) => {
      return resp.json();
    }).then((data) => {
      setCryptocurrencies(data.data);
      console.log(data.data);
    });
  };

  return (
    <ul>
      {cryptocurrencies.map((cryptocurrency, index) => (
        <li key={cryptocurrency.id}>{cryptocurrency.symbol}: {Number(cryptocurrency.priceUsd).toFixed(3)}USD</li>
      )
      )}
    </ul>
  );
};

export default PopularCrypto;
