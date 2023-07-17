import React from "react"
import { Navbar } from "react-bootstrap"
import styles from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <Navbar className={styles.Nav}>
        <div>
          <h1>Testing</h1>
        </div>
  </Navbar>
  )
}

export default Nav