import React from "react";
import { Form, Row, Col, Button, FormControl, Container, ListGroup } from 'react-bootstrap'

export default function ListaPazienti() {
    return (
        <div>
            <h1>Lista Pazienti </h1>
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Mario Rossi" className="mr-sm-2" />
                    </Col>
                    <Col>
                        <Button type="submit" className="mb-2">
                            Search
                        </Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>Luca Francesco</ListGroup.Item>
                            <ListGroup.Item>Antonio Tuia</ListGroup.Item>
                            <ListGroup.Item>Mario Cipollino</ListGroup.Item>
                            <ListGroup.Item>Agata Marmo</ListGroup.Item>
                            <ListGroup.Item>Cincia Allegra</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}