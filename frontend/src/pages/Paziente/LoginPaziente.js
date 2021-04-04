import React, { useState } from "react";
import { Button, Form, } from 'react-bootstrap'
import { Redirect, withRouter } from 'react-router'
import { useHistory } from "react-router-dom";
import './../styles/LoginPaziente.css'

export default withRouter(function LoginPaziente() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        // return email.length > 0 && password.length > 0;
        return true;
    }

    function handleSubmit(event) {
        event.preventDefault();
        return <Redirect to="/"></Redirect>
    }

    function singIn(event){
        event.preventDefault();
        history.push("/NuovoPaziente")

    }
    return (
        <div className="Login">

            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" className="text-center">
                    <h2>Farmacy App</h2>
                    <h3>Login Paziente</h3>
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" variant="primary" disabled={!validateForm()}>
                    Login
                </Button>                
            </Form>
            <Form onSubmit={singIn} style={{marginTop:"20px"}}>
            <Button block size="lg" type="submit" variant="success" >
                    Crea nuovo account
                </Button>
            </Form>
        </div>
    );
})