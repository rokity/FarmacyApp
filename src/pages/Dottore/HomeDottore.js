import React from "react";
import { Card, Button, CardDeck, Jumbotron, Container, Row } from 'react-bootstrap'


export default function HomeDottore() {
    return (
        <div>
            <h1>Benvenuto Dott.Riccardo</h1>
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <CardDeck>
                        <Card className="text-center">
                            <Card.Header>Pazienti</Card.Header>
                            <Card.Body>
                                <Card.Title>Lista Pazienti che usano l'app</Card.Title>
                                <Button variant="primary">Apri</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>Ricette in Sospeso</Card.Header>
                            <Card.Body>
                                <Card.Title>Lista Ricetta in Sospeso</Card.Title>

                                <Button variant="primary">Apri</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>Nuovo Paziente</Card.Header>
                            <Card.Body>
                                <Card.Title>Aggiungi un nuovo paziente</Card.Title>
                                <Button variant="primary">Apri</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>

            </Container>
        </div>
    );
}