import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import PopularCrypto from '../PopularCrypto/PopularCrypto';
import './Layout.css';
import LogoIcon from '../LogoIcon/LogoIcon';
import { Outlet } from 'react-router-dom';
import PortfolioModal from '../Portfolio/PortfolioModal/PortfolioModal';

const Layout: React.FC = () => {

  return (
    <div className="wrapper">
      <div className="wrapper-header">
        <header >
          <LogoIcon/>
          <PopularCrypto/>
          <Portfolio />
        </header>
      </div>
      <hr/>
      <div className="wrapper-main">
        <Outlet/>
      </div>
      <PortfolioModal/>
    </div>
  );
};

export default Layout;
