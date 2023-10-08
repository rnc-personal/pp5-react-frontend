import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import React, { useState } from 'react';
import styles from '../styles/BuildGallery.module.css';

function BuildGallery({ id, allImages }) {
    const [currentMainImage, setCurrentMainImage] = useState(0);
    const imagesArr = allImages;

    const nextImage = (index) => {
        setCurrentMainImage(index);
    };

    return (
        <>
            <div className={styles.MainImageWrapper}>
                <Link to={`/builds/${id}`}>
                    <img src={imagesArr[currentMainImage]} className={styles.MainImage} alt="Main" />
                </Link>
            </div>

            <div className={styles.GalleryWrapper}>
                {imagesArr.map((image, index) => (
                    <img
                        src={image}
                        className={styles.GalleryImage}
                        key={index}
                        alt={`Gallery__${index}`}
                        onClick={() => nextImage(index)}
                    />
                ))}
            </div>
        </>
    );
}

export default BuildGallery;
