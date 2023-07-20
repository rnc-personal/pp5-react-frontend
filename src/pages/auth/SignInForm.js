import React from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

function SignInForm() {

    return (
        <>
            <Row className={styles.Row}>
                <Col className="my-auto p-0 p-md-2" md={6}>
                    <Container className={`${appStyles.Content} p-4 `}>
                        <h1 className={styles.Header}>SIGN IN</h1>

                        <Form>
                            <Form.Group controlId="username">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" name="username" className={styles.Input}/>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" className={styles.Input}/>
                            </Form.Group>
                            <Button type="submit">
                                SUBMIT
                            </Button>
                        </Form>

                    </Container>
                    <Container className={`mt-3 ${appStyles.Content}`}>
                        <Link className={styles.Link} to="/signup">
                            Don't have an account? <span>Sign up now!</span>
                        </Link>
                    </Container>
                </Col>
            </Row>
            <Row className={styles.Row}>
                <Col
                    md={6}
                    className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
                >
                    <h2>PlaceHolder for IMG/Cube</h2>
                </Col>
            </Row>
        </>
    );
}

export default SignInForm;