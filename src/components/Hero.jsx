import React from 'react'
import styles from '../styles/Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <h1 className={styles.MegaHeader}>SHARE YOUR BATTLEBOX!</h1>
            <h2 className={styles.HeroBlurb}>SIGN UP TO SHARE YOUR KILLER BUILD AND SEE WHAT OTHER USERS HAVE CREATED</h2>
        </div>
    )
}

{/* <Hero className={styles.App}/> */}

export default Hero