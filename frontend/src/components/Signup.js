import React, { useState } from 'react';
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            // Handle sign-up logic here
        }
        setValidated(true);
    };

    const handleReset = () => {
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setValidated(false);
    };

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center min-vh-100 px-4"
            style={{ 
                marginRight: 'auto', 
                marginLeft: 'auto', 
                maxWidth: '1000px', opacity: '1.0'
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
                            <Card.Title className="text-center mb-4">Register</Card.Title>
                            <Form noValidate validated={validated} onSubmit={handleSignUp}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
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
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        style={{ maxWidth: '400px' }}
                                        required
                                        isInvalid={validated && !username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a username.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Create New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Create New Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ maxWidth: '400px' }}
                                        required
                                        isInvalid={validated && !password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please create a password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm New Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        style={{ maxWidth: '400px' }}
                                        required
                                        isInvalid={validated && (password !== confirmPassword || !confirmPassword)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {password !== confirmPassword ? "Passwords do not match." : "Please confirm your password."}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="text-center mb-3">
                                    <Button type="submit" className="btn btn-primary me-2">
                                        Sign Up
                                    </Button>
                                    <Button type="button" onClick={handleReset} className="btn btn-secondary">
                                        Reset
                                    </Button>
                                </Form.Group>
                            </Form>
                            <div className="text-center mt-3">
                                <p>Already have an account? <Link to="/login">Log In</Link></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
