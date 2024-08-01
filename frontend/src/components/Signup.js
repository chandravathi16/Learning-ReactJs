import { Form, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Signup() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100">
                <Col md={6} lg={4} className="d-flex justify-content-center">
                    <Card className="p-4 w-100">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Sign Up</Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                        
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                
                                <Form.Group className="text-center">
                                    <Form.Control type="submit" value="Sign Up" className="btn btn-primary" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
