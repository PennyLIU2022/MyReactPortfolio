import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

function NavBar ({ currentPage, handlePageChange }) {
  const [scrolled, setScrolled] = useState(false);

  function onScroll(){
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand> Penny Liu </Navbar.Brand>

            {/* Navbar.Toggle and Navbar.Collapse helps to get the mobile friendly navbar  */}
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link className={currentPage === "aboutMe" ?"active navbar-link": "navbar-link"} onClick={() => handlePageChange("about-me")}>
                        About Me
                    </Nav.Link>
                    <Nav.Link className={currentPage === "portfolio" ?"active navbar-link": "navbar-link"} onClick={() => handlePageChange("portfolio")}>
                        Portfolio
                    </Nav.Link>
                    <Nav.Link className={currentPage === "contact" ?"active navbar-link": "navbar-link"} onClick={() => handlePageChange("contact")}>
                        Contact
                    </Nav.Link>
                    <Nav.Link className={currentPage === "resume" ?"active navbar-link": "navbar-link"} onClick={() => handlePageChange("resume")}>
                        Resume
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Container>
    </Navbar>
  ); 

}

export default NavBar;