import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/BuildImage.module.css";

const BuildImage = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} className={styles.Svg}/>}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default BuildImage;