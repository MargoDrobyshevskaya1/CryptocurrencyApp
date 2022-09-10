import React from 'react';
import PortfolioIcon from './PortfolioIcon/PortfolioIcon';
import PortfolioInfo from './PortfolioInfo/PortfolioInfo';
import './Portfolio.css';

const Portfolio: React.FC = () => {

  return (
    <>
      <div className="wrapper-portfolio">
        <PortfolioInfo/>
        <PortfolioIcon/>
      </div>
    </>
  );
};

export default Portfolio;
