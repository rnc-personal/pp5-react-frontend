import React from "react";
import styles from "../styles/UserProfileImage.module.css";

const UserProfileImage = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.PFImage}
        src={src}
        height={height}
        width={height}

      />
      {text}
    </span>
  );
};

export default UserProfileImage;