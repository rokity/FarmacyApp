import React, { useState, useEffect } from "react";
import { Container, Card, CardDeck, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

export default function Medicina(props) {
  let history = useHistory();

  function LoginPaziente() {
    history.push("/LoginPaziente")
  }

  function LoginDottore() {
    history.push("/LoginDottore")
  }

  return (

    <div>
      <h1>Benvenuto in FarmacyApp</h1>
      <Container style={{ marginTop: "20px" }} className="text-center">
        <Row>
          <CardDeck>
            <Card className="text-center">
              <Card.Header>Paziente</Card.Header>
              <Card.Body>
                <Card.Title>Clicca qua sotto e scopri come prenotare le tue ricette comodamente da casa</Card.Title>
                <Button variant="primary" onClick={LoginPaziente}>Apri</Button>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Card.Header>Dottore</Card.Header>
              <Card.Body>
                <Card.Title>Sei un Dottore? Scopri come ridurre la sala d'attesa usando la ricetta elettronica ed interagendo direttamente con i pazienti.</Card.Title>

                <Button variant="primary" onClick={LoginDottore}>Apri</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
}

