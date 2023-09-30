import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {

    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        password1: "",
        password2: ""
    })

    const { username, password1, password2 } = signUpFormData;
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpFormData({
            ...signUpFormData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpFormData);
            history.push("/");
        } catch (err) {
            const responseErrors = err.response?.data;
            if (responseErrors) {
                setErrors(responseErrors);
                console.log(`Error on Submit: ${JSON.stringify(responseErrors)}`);
            } else {
                console.log("Unknown error occurred:", err);
            }
        }
    };

    return (
        <>
            <Row className={styles.Row}>
                <Col className="my-auto py-2 p-md-2" md={6}>
                    <Container className={`${appStyles.Content} p-4 `}>
                        <h1 className={styles.Header}>SIGN UP</h1>

                        <Form onSubmit={handleSubmit} >
                            <Form.Group controlId="username">
                                <Form.Label className="d-none">EMAIL:</Form.Label>
                                <Form.Control className={styles.Input} type="text" placeholder="USERNAME" name="username" value={username} onChange={handleChange} />
                            </Form.Group>

                            {errors.username?.map((message, idx) => (<p key={idx}>{message}</p>))}

                            <Form.Group controlId="password-1">
                                <Form.Label className="d-none">PASSWORD</Form.Label>
                                <Form.Control className={styles.Input} type="password" placeholder="SET A PASSWORD" name="password1" value={password1} onChange={handleChange} />
                            </Form.Group>

                            {errors.password1?.map((message, idx) => (<p key={idx}>{message}</p>))}

                            <Form.Group controlId="password-2">
                                <Form.Label className="d-none">CONFIRM PASSWORD</Form.Label>
                                <Form.Control className={styles.Input} type="password" placeholder="CONFIRM YOUR PASSWORD" name="password2" value={password2} onChange={handleChange} />
                            </Form.Group>

                            {errors.password2?.map((message, idx) => (<p key={idx}>{message}</p>))}

                            <Button className={btnStyles.Button} type="submit">
                                SUBMIT
                            </Button>
                            {errors.non_field_errors?.map((message, idx) => (<p key={idx} className="mt-3">{message}</p>))}
                          </Form>  
                    </Container>
                    <Container className={`mt-3 ${appStyles.Content}`}>
                        <Link className={styles.Link} to="/signin">
                            Already have an account? <span>Sign in</span>
                        </Link>
                    </Container>
                </Col>
            </Row>
            <Row className={styles.Row}>
                <Col md={6} className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}></Col>
            </Row>
        </>
    );
};

export default SignUpForm;