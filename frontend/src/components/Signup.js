import React, { useState } from 'react';
import { Form, Container, Row, Col, Card, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { registerUser } from '../api'; // Ensure this function is correctly defined in ../api

function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [msg, setMsg] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
    
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
    
        // Basic client-side validation
        if (password !== confirmPassword) {
            setMsg("Passwords do not match.");
            setValidated(true);
            return;
        }
    
        const signupbody = { email, username, password };
    
        try {
            const response = await registerUser(signupbody);
            if (response.ok) {
                setMsg("User registered successfully!");
                setTimeout(() => {
                    handleReset(); 
                }, 1000); 
            } else {
                const responseText = await response.text();
                // Customize messages based on the response
                if (responseText.includes("email")) {
                    setMsg("Email already in use.");
                } else if (responseText.includes("username")) {
                    setMsg("Username is already taken.");
                } else {
                    setMsg("Registration failed: " + responseText);
                }
            }
        } catch (error) {
            setMsg("An error occurred during registration.");
        }
    };

    const handleReset = () => {
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
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
                            <Card.Title className="text-center mb-4">Register</Card.Title>
                            {msg && <div className="alert alert-info">{msg}</div>}
                            <Form noValidate validated={validated} onSubmit={handleSignUp}>
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
                                <FloatingLabel label="Username" className="mb-3">
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
                                </FloatingLabel>
                                <FloatingLabel label="Create New Password" className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Create New Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ maxWidth: '400px' }}
                                        required
                                        isInvalid={validated && (!password || password.length < 6)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {password.length < 6 ? "Password must be at least 6 characters long." : "Please create a password."}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <FloatingLabel label="Confirm New Password" className="mb-3">
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
                                </FloatingLabel>
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
