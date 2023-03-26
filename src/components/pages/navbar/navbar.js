import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

function navbar ({ currentPage, handlePageChange }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand>Penny Liu </Navbar.Brand>

                {/* Navbar.Toggle and Navbar.Collapse helps to get the mobile friendly navbar  */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavLink className={currentPage === "aboutMe" ?"active navbar-link": "navbar-link"} onClick={() => handlePageChange("about-me")}>
                            About Me
                        </NavLink>
                        <NavLink className={currentPage === "portfolio" ?"active navbar-link": "navbar-link"} onClick={() => handlePageChange("portfolio")}>
                            Portfolio
                        </NavLink>
                        <NavLink className={currentPage === "contact" ?"active navbar-link": "navbar-link"} onClick={() => handlePageChange("contact")}>
                            Contact
                        </NavLink>
                        <NavLink className={currentPage === "resume" ?"active navbar-link": "navbar-link"} onClick={() => handlePageChange("resume")}>
                            Resume
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default navbar;