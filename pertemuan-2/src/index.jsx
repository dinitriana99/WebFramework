import React, { Component } from "react";
import { Card, Form, TabContainer, Row, Col, Image } from "react-bootstrap";

export default class FormBiodata extends Component{
    render(){
        return (
            <div>
                <Container style={{ marginTop: "100px"}}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm="4"></Col>
                                <Col sm="4">
                                    <Image
                                        src="dini.jpg"
                                        width="200px"
                                        height="300px"
                                        alt="Foto Biodata"
                                        rounded
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}