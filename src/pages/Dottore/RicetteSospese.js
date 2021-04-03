import React from "react";
import { Card, Button, CardDeck, Jumbotron, Container, Row } from 'react-bootstrap'


export default function RicetteSospese() {
    return (
        <div>
            <div>
            <h1>Ricette Sospese</h1>
              <Container style={{marginTop:"20px"}}>
                  <Row>
                  <CardDeck>
                      <Card style={{ width: '18rem' }}>
                          <Card.Title >Cardiospirina </Card.Title>
                          <Card.Img width="128" height="128" variant="top" src="https://www.nursetimes.org/wp-content/uploads/2016/07/cardioaspirina.jpg" />
                          <Card.Body>
                              <Card.Title>Mario Rossi</Card.Title>
                              <Card.Text>
                                  <p class="font-weight-bold"> Malattie: E-beta talassemia </p>
                              </Card.Text>
                              <Button variant="primary">Accetta</Button>
                              <Button variant="danger">Rifiuta</Button>
                          </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }}>
                          <Card.Title >Moment </Card.Title>
                          <Card.Img width="128" height="128" variant="top" src="https://www.tuttofarma.it/50247-thickbox_default/moment-sospensione-orale-bustine-liquide-200mg-8-bustine.jpg" />
                          <Card.Body>
                              <Card.Title>Antonio Fuffa</Card.Title>
                              <Card.Text>
                                  <p class="font-weight-bold"> Malattie: Ectasia dell'orecchietta cardiaca destra </p>
                              </Card.Text>
                              <Button variant="primary">Accetta</Button>
                              <Button variant="danger">Rifiuta</Button>
                          </Card.Body>
                      </Card>
                      </CardDeck>
                  </Row>
              </Container>
              </div>
        </div>
    );
}