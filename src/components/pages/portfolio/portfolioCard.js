import { Card, Button, Col, Row } from "react-bootstrap";
import React from "react";
import "./portfolio.css";

function PortfolioCard(props){
    return (
        <Card className = "projectCard">
            <Card.Img variant="top" src={props.img} alt="card-img" className="card-img"/>

            <Card.Body className="card-body">

                <Row>
                    <Card.Title className="project-title">
                        <h3> <strong>{props.title}</strong> </h3>
                    </Card.Title>

                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.info}
                    </Card.Text>

                    <Col style={{display:"flex", justifyContent:"space-evenly"}}>
                        <Button variant="primary" href={props.ghLink} target="_blank"> Github </Button>
                        {"\n"}
                        {"\n"}
                        <Button variant="primary" href={props.appLink} target="_blank"> APP </Button>
                    </Col>
                </Row>
                

            </Card.Body>
        </Card>
    )
};

export default PortfolioCard;