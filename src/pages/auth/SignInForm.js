import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

function SignInForm() {

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });

    const { username, password } = signInData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/login/", signInData);
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data)
        };
    }

        return (
            <>
                <Row className={styles.Row}>
                    <Col className="my-auto p-0 p-md-2" md={6}>
                        <Container className={`${appStyles.Content} p-4 `}>
                            <h1 className={styles.Header}>SIGN IN</h1>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="username">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Username" name="username" className={styles.Input} value={username} onChange={handleChange} />
                                </Form.Group>

                                {errors.username?.map((message, idx) => (<p key={idx} >{message}</p>))}

                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" className={styles.Input} value={password} onChange={handleChange} />
                                </Form.Group>

                                {errors.password?.map((message, idx) => (<p key={idx} >{message}</p>))}

                                <Button type="submit"  className={btnStyles.Button}>
                                    SUBMIT
                                </Button>
                                {errors.non_field_errors?.map((message, idx) => (<p key={idx} className="mt-3">{message}</p>))}
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