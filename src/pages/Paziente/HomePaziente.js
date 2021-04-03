import React from "react";
import { Card, Button, CardDeck, Jumbotron, Container, Row } from 'react-bootstrap'


export default function HomePaziente() {
    return (
        <div>
            <h1>Benvenuto Riccardo</h1>
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <CardDeck>
                        <Card className="text-center">
                            <Card.Header>Medicine</Card.Header>
                            <Card.Body>
                                <Card.Title>Lista Medicine Prescritte</Card.Title>
                                <Button variant="primary">Apri</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>Promo Farmacia</Card.Header>
                            <Card.Body>
                                <Card.Title>Lista Promozioni Farmacie Vicino a Te</Card.Title>

                                <Button variant="primary">Apri</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>Note</Card.Header>
                            <Card.Body>
                                <Card.Title>Note dal dottore, indicazioni sui farmaci</Card.Title>
                                <Button variant="primary">Apri</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>
                <Row style={{marginTop:"20px"}}>
                    <Jumbotron fluid>
                        <h1>Pubblicitàààà!!</h1>
                        <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id lobortis tortor. Donec pretium sem ac accumsan consectetur. Sed mi urna, rhoncus tristique dui sed, varius varius mauris. 
                    </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                </Row>
            </Container>
        </div>
    );
}