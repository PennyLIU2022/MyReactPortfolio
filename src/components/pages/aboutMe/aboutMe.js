import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../../assets/images/home-main.svg";
import "./aboutMe.css";

function aboutMe() {
    return(
        <section>
            <Container className="aboutme" id="aboutme">
                <Row className="algin-items-center">
                    <Col xs={12} md={6} xl={7} className="aboutme-header">
                        <span className="span">
                            Welcome to 
                            <strong className="name"> Penny's </strong>
                            Portfolio
                        </span>
                        <br />
                        {/* <p>
                            <h2>A Full-Stack Developer</h2>
                        </p> */}
                    </Col>

                    <Col xs={12} md={6} xl={5} style={{ paddingBottom: 20 }}> 
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