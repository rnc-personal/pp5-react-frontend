import React from "react"
import { Container, Navbar, NavLink, Nav } from "react-bootstrap"
import styles from "../styles/MainNav.module.css"

const MainNav = () => {
    return (
        <Navbar className={styles.MainNav}>
            <Container>
                <Navbar.Brand>
                    <h1>BATTLEBOXES</h1>
                </Navbar.Brand>


                <Navbar.Collapse id="basic-navbar-nav">

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav