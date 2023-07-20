import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import RGBBar from '../components/RGBBar';
import stylesNav from "../styles/MainNav.module.css"

const MainNav = () => {
    return (
        <Navbar expand="md" fixed="top" className={stylesNav.MainNav} >
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <h1>BATTLEBOXES</h1>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={stylesNav.NavBarToggler} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={stylesNav.NavLink}
                            activeClassName={stylesNav.NavLinkActive}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className={stylesNav.NavLink}
                            activeClassName={stylesNav.NavLinkActive}
                            to="/signin">
                            Sign in
                            </NavLink>
                        <NavLink
                            className={stylesNav.NavLink}
                            activeClassName={stylesNav.NavLinkActive}
                            to="/signup">
                            Sign up
                            </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <RGBBar className={stylesNav.RGBBar} />
        </Navbar>
    )
}

export default MainNav