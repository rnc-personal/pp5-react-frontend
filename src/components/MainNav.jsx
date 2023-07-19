import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import RGBBar from '../components/RGBBar';
import styles from "../styles/MainNav.module.css"

const MainNav = () => {
    return (
        <Navbar expand="md" fixed="top" className={styles.MainNav} >
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <h1>BATTLEBOXES</h1>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.NavBarToggler} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.NavLinkActive}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className={styles.NavLink}
                            activeClassName={styles.NavLinkActive}
                            to="/signin">
                            Sign in
                            </NavLink>
                        <NavLink
                            className={styles.NavLink}
                            activeClassName={styles.NavLinkActive}
                            to="/signup">
                            Sign up
                            </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <RGBBar className={styles.RGBBar} />
        </Navbar>
    )
}

export default MainNav