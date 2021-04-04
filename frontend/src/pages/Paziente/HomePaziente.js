import React from "react";
import { Card, Button, CardDeck, Jumbotron, Container, Row } from 'react-bootstrap'
import { useHistory } from "react-router-dom";


export default function HomePaziente() {
    let history = useHistory();
    function ListaMedicine(event){
        event.preventDefault();
        history.push("/ListaMedicine")
    }
    function PromoFarmacia(event){
        event.preventDefault();
        history.push("/PromozioniFarmacia")
    }
    function MessaggiPaziente(event){
        event.preventDefault();
        history.push("/MessaggiPaziente")
    }
    function ModificaProfiloPaziente(event){
        event.preventDefault();
        history.push("/ModificaProfiloPaziente")
    }
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
                                <Button variant="primary" onClick={ListaMedicine}>Apri</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>Promo Farmacia</Card.Header>
                            <Card.Body>
                                <Card.Title>Lista Promozioni Farmacie Vicino a Te</Card.Title>

                                <Button variant="primary" onClick={PromoFarmacia}>Apri</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>Note</Card.Header>
                            <Card.Body>
                                <Card.Title>Note dal dottore, indicazioni sui farmaci</Card.Title>
                                <Button variant="primary" onClick={MessaggiPaziente}>Apri</Button>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Header>Profilo</Card.Header>
                            <Card.Body>
                                <Card.Title>Modifica Profilo, modifica impostazioni,assistenza</Card.Title>
                                <Button variant="primary" onClick={ModificaProfiloPaziente}>Apri</Button>
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