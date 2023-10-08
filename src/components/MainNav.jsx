import {React} from "react";
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import RGBBar from '../components/RGBBar';
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";

import stylesNav from "../styles/MainNav.module.css"

const MainNav = () => {

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const createBuildLink = (
        <NavLink
            className={stylesNav.NavLink}
            activeClassName={stylesNav.NavLinkActive}
            to="/builds/create"
        >
            CREATE YOUR BUILD
        </NavLink>
    );

    const loggedInMenu =
        <>
            {currentUser && createBuildLink}

            <NavLink
                className={stylesNav.NavLink}
                activeClassName={stylesNav.NavLinkActive}
                to="/following">
                LATEST
            </NavLink>

            <NavLink
                className={stylesNav.NavLink}
                activeClassName={stylesNav.NavLinkActive}
                to="/builds">
                DISCOVER
            </NavLink>

            <NavLink
                className={stylesNav.NavLink}
                activeClassName={stylesNav.NavLinkActive}
                to="/saved">
                SAVED
            </NavLink>
            <NavLink
                onClick={handleSignOut}
                className={stylesNav.NavLink}
                to="/">
                SIGN OUT
            </NavLink>

        </>;

    const loggedOutMenu = (
        <>
            <NavLink
                className={stylesNav.NavLink}
                activeClassName={stylesNav.NavLinkActive}
                to="/signin">
            SIGN IN
            </NavLink>
            <NavLink
                className={stylesNav.NavLink}
                activeClassName={stylesNav.NavLinkActive}
                to="/signup">
               SIGN UP
            </NavLink>
        </>
    );

    return (
        <Navbar expand="md" fixed="top" className={stylesNav.MainNav} >
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <h1>BATTLEBOXES</h1>
                    </Navbar.Brand>
                </NavLink>

                
                <Navbar.Toggle
                    className={stylesNav.NavBarToggler}
                    aria-controls="basic-navbar-nav"
                />
                
                 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left align-items-center"  >

                        {currentUser ? loggedInMenu : loggedOutMenu}
                    </Nav>
                </Navbar.Collapse>
                 
            </Container>
            <RGBBar className={stylesNav.RGBBar} />
        </Navbar>
    )
}

export default MainNav