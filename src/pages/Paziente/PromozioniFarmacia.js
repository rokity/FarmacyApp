import React from "react";
import { Card, Button, Jumbotron, Container, Row} from 'react-bootstrap'



  export default function PromozioniFarmacia() {
      return (
            <div>
            <h1>Promozioni Farmacia</h1>
              <Container>
                  <Row>
                      <Card style={{ width: '18rem' }}>
                          <Card.Title >Cardiospirina </Card.Title>
                          <Card.Img width="128" height="128" variant="top" src="https://www.nursetimes.org/wp-content/uploads/2016/07/cardioaspirina.jpg" />
                          <Card.Body>
                              <Card.Title>Cardiospirina</Card.Title>
                              <Card.Text>
                                  <p class="font-weight-bold"> Sconto 30% </p>
                              </Card.Text>
                              <Button variant="primary">Ordina</Button>
                          </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }}>
                          <Card.Title >Moment </Card.Title>
                          <Card.Img width="128" height="128" variant="top" src="https://www.tuttofarma.it/50247-thickbox_default/moment-sospensione-orale-bustine-liquide-200mg-8-bustine.jpg" />
                          <Card.Body>
                              <Card.Title>Cardiospirina</Card.Title>
                              <Card.Text>
                                  <p class="font-weight-bold"> Sconto 50% </p>
                              </Card.Text>
                              <Button variant="primary">Ordina</Button>
                          </Card.Body>
                      </Card>
                  </Row>
              </Container>
              </div>
      );
  }