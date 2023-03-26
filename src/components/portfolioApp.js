import React, { useState } from 'react';
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/footer/footer";
import AboutMe from "./pages/aboutMe/aboutMe";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import Resume from "./pages/resume/resume";

function PortfolioApp (){
  const [currentPage, setCurrentPage] = useState("about-me");

  const renderPage = () => {
    if (currentPage === "about-me") {
      return <AboutMe />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    } else {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default PortfolioApp;