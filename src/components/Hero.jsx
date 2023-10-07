import React from 'react'
import { Button } from "react-bootstrap";

import styles from '../styles/Hero.module.css';
import btnStyles from "../styles/Button.module.css"



const Hero = ({ headline, subline }) => {
    return (
        <>
            <div className={styles.Hero}>
                <h1 className={styles.MegaHeader}>{headline}</h1>
                <h2 className={styles.HeroBlurb}>{subline}</h2>
            </div>
            <div className={styles.ButtonWrapper}>
                <Button className={btnStyles.Button} onClick={() => { }}>
                    SIGNUP
                </Button>

                <Button className={btnStyles.Button} onClick={() => { }}>
                    LOGIN
                </Button>

            </div>
            <hr className={styles.FullDivider} />
        </>
    )
}


export default Hero