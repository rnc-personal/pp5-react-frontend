import React from 'react'
import styles from '../../styles/FeaturedBuilder.module.css'

function FeaturedBuilder() {
  return (
    <div className={styles.FeaturedBuilderWrapper}>
        <img className={styles.FeaturedBuilderImage} src="https://via.placeholder.com/200x200" alt="Some Text" />
        <div className={styles.FeaturedBuilderText}>
            <h1 className={styles.FeaturedBuilderTitle}>Featured Builder</h1>
            <p className={styles.FeaturedBuilderDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}

export default FeaturedBuilder