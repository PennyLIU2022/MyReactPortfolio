import React from "react";
import { Helmet } from "react-helmet";
import './App.css';
import PortfolioApp from './components/portfolioApp';

function App() {
  return (
    <div className="portfolio-app">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio</title>
      </Helmet>
      <PortfolioApp />
    </div>
  );
}

export default App;