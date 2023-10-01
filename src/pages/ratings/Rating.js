import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/Comment.module.css";
import { Popout } from "../../components/Popout";


import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "../comments/CommentEditForm";

const Rating = (props) => {
    const { id, creator, rating_value } = props;
    return (
        <>
            <hr />
            <Media>
                <span className={styles.Owner}>{creator} Rated this build {rating_value}</span>
            </Media>
        </>
    );
};

export default Rating;