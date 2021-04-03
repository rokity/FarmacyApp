import React from "react";
import { Card, Button, Jumbotron, Container, Row} from 'react-bootstrap'
export default function Medicina() {
    return (
        <div>
            <h1>Cardiospirina</h1>
            <Container>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Title >Cardiospirina </Card.Title>
                        <Card.Img width="128" height="128" variant="top" src="https://www.nursetimes.org/wp-content/uploads/2016/07/cardioaspirina.jpg" />
                        <Card.Body>
                            <Card.Title>Cardiospirina</Card.Title>
                            <Card.Text>
                                <p class="font-weight-bold">Patologia :</p> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.
                        <p class="font-weight-bold">Guida all'uso :</p> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.
    </Card.Text>
                            <Button variant="danger">Non ordinabile</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            </div>
    );
}