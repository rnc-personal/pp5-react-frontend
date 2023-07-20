import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>SIGN UP</h1>

                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">USERNAME:</Form.Label>
                            <Form.Control className={styles.Input} type="TEXT" placeholder="USERNAME" name="username"/>
                        </Form.Group>

                        <Form.Group controlId="password-1">
                            <Form.Label className="d-none">PASSWORD</Form.Label>
                            <Form.Control className={styles.Input} type="password-1" placeholder="SET A PASSWORD" name="password-1"/>
                        </Form.Group>

                        <Form.Group controlId="password-2">
                            <Form.Label className="d-none">CONFIRM PASSWORD</Form.Label>
                            <Form.Control className={styles.Input} type="password" placeholder="CONFIRM YOUR PASSWORD" name="password-2"/>
                        </Form.Group>

                        <Button className={btnStyles.Button} type="submit">
                            SUBMIT
                        </Button>
                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signin">
                        Already have an account? <span>Sign in</span>
                    </Link>
                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
                <div>
                    IMG/Cube Here
                </div>
            </Col>
        </Row>
    );
};

export default SignUpForm;