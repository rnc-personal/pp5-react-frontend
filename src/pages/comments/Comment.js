import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/Comment.module.css";
import { Popout } from "../../components/Popout";
import EditForm from "./EditForm";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
    const { profile_id, profile_image, creator, updated_at, content, id, setBuild, setComments } = props;
    const [showEditForm, setShowEditForm] = useState(false);

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === creator;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}`);
            setBuild((prevBuild) => ({
                results: [
                    {
                        ...prevBuild.results[0],
                        comments_count: prevBuild.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) { }
    };

    return (
        <>
        <hr />
        <Media>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} />
          </Link>
          <Media.Body className="align-self-center ml-2">
            <span className={styles.Owner}>{owner}</span>
            <span className={styles.Date}>{updated_at}</span>
            {showEditForm ? (
              <EditForm />
            ) : (
              <p>{content}</p>
            )}
          </Media.Body>
          {is_owner && !showEditForm && (
            <MoreDropdown
              handleEdit={() => setShowEditForm(true)}
              handleDelete={handleDelete}
            />
          )}
        </Media>
      </>
    );
};

export default Comment;