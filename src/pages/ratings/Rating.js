import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/Comment.module.css";
import { Popout } from "../../components/Popout";


import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "../comments/CommentEditForm";

const Rating = (props) => {
    const { id,  user, rating_value } = props;
    return (
        <>
            <hr />
            <Media>
                <Link to={`/profiles/${id}`}>
                    <span className={styles.Owner}>{user}</span>
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <hr/>
                    {rating_value ? (
                        <p>{rating_value}</p>

                    ) : (
                        <p>{rating_value}</p>
                    )}
                </Media.Body>
            </Media>
        </>
    );
};

export default Rating;