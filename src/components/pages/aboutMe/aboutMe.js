import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../../assets/images/home-main.svg";
import "./aboutMe.css";

function aboutMe() {
    return(
        <section>
            <Container className="aboutme" id="aboutme">
                <Row>
                    <Col md={7} className="aboutme-header">
                        <h1 style={{ paddingBottom: 15 }}>
                            Welcome to 
                            <strong className="name">Penny's</strong>
                            Portfolio
                        </h1>

                        <div style={{ padding: 50, textAlign: "left" }}>
                            <h2>A Full-Stack Developer</h2>
                        </div>
                    </Col>

                    <Col md={5} style={{ paddingBottom: 20 }}> 
                      <img 
                        src={homeLogo}
                        alt="home picture"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                      />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default aboutMe;