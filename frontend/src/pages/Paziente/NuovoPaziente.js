import React, { useState } from "react";
import { Button, Container, Form, Col, Row } from 'react-bootstrap'

export default function NuovoPaziente() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0 && address.length>0 && state.length>0 && city.length>0 && zip.length>0;
    }

    function handleSubmit(event){
        event.preventDefault();
        
    }


    return (
        <Container>
            <Row>
                <Col><h1>Nuovo Paziente</h1></Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}/>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="New York" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="state">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." 
                                value={state}
                                onChange={(e) => setState(e.target.value)}>
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="zip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control placeholder="00501" 
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>
                        {/* <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                        <Button variant="primary" type="submit" disabled={!validateForm()}>
                            Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}