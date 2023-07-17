import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import styles from "../styles/MainNav.module.css"

const MainNav = () => {
    return (
        <Navbar className={styles.MainNav}>
            <Container>
                <Navbar.Brand>
                    <h1>BATTLEBOXES</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link>
                            <span className="nav-link__text">
                                Home
                            </span>
                        </Nav.Link>
                        <Nav.Link>
                            <span className="nav-link__text">
                                Sign in
                            </span>
                        </Nav.Link>
                        <Nav.Link>
                            <span className="nav-link__text">
                                Sign up
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav