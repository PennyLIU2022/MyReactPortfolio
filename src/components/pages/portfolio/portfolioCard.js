import { Card, Button, Col } from "react-bootstrap";
import React from "react";
import "./portfolio.css";

function PortfolioCard(props){
    return (
        <Card className = "projectCard">
            <Card.Img variant="top" src={props.img} alt="card-img" className="card-img"/>

            <Card.Body className="card-body">
                <Card.Title>
                    <h3> <strong>{props.title}</strong> </h3>
                </Card.Title>

                <Card.Text>
                    {props.info}
                </Card.Text>

                <Col style={{display:"flex", justifyContent:"space-evenly"}}>
                    <Button variant="primary" href={props.ghLink} target="_blank"> Github </Button>
                    {"\n"}
                    {"\n"}
                    <Button variant="primary" href={props.appLink} target="_blank"> APP </Button>
                </Col>

            </Card.Body>
        </Card>
    )
};

export default PortfolioCard;