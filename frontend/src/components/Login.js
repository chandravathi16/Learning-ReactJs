import React, { useState } from 'react';
import { Form, Container, Row, Col, Card, Button, FloatingLabel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogin = async (e) => {
        e.preventDefault();
    
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
    
        const loginBody = { email, password };
    
        try {
            const response = await loginUser(loginBody);
            if (response.ok) {
                setMsg("Login successful!");
                setTimeout(() => {
                    handleReset();
                    navigate('/dashboard'); // suppose, Navigate to the dashboard page
                }, 1000); 
            } else {
                const responseText = await response.text();
                setMsg("Login failed: " + responseText);
            }
        } catch (error) {
            setMsg("An error occurred during login.");
        }
    };

    const handleReset = () => {
        setEmail('');
        setPassword('');
        setValidated(false);
        setMsg('');
    };

    return (
        <Container fluid
            className="d-flex justify-content-center align-items-center min-vh-100 px-4"
            style={{ 
                marginRight: 'auto', 
                marginLeft: 'auto', 
                maxWidth: '900px', 
                opacity: '1.0' 
            }}
        >
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Card 
                        className="p-4"
                        style={{
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                        }}
                    >
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Login</Card.Title>
                            {msg && <div className="alert alert-info">{msg}</div>}
                            <Form noValidate validated={validated} onSubmit={handleLogin}>
                                <FloatingLabel label="Email Address" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ maxWidth: '400px' }}
                                        required
                                        isInvalid={validated && !email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email address.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <FloatingLabel label="Password" className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ maxWidth: '400px' }}
                                        required
                                        isInvalid={validated && !password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a password.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <Form.Group className="text-center mb-3">
                                    <Button type="submit" className="btn btn-primary me-2">
                                        LogIn
                                    </Button>
                                    <Button type="button" onClick={handleReset} className="btn btn-secondary">
                                        Reset
                                    </Button>
                                </Form.Group>
                            </Form>
                            <div className="text-center mt-3">
                                <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
