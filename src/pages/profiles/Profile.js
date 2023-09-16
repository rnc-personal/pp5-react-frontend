import React from "react";
import styles from "../../styles/Profile.module.css";
import profileStyles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

const Profile = (props) => {
  const { profile, mobile } = props;
  const { id, following_id, creator } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === creator;

  const { handleFollow } = useSetProfileData()
  const { handleUnfollow } = useSetProfileData()

  return (
    <div className={`my-3 d-flex align-items-center flex-column ${styles.ProfileCard}`}>
      <Image className={profileStyles.ProfileImage} src={profile?.profile_image} fluid rounded/>
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <div className={`mx-2 ${styles.WordBreak}`}>
            <strong>{creator}</strong>
          </div>
        </Link>
      </div>
      <div className="text-center">
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
              onClick={() => handleUnfollow(profile)}
            >
              UNFOLLOW
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Black}`}
              onClick={() => handleFollow(profile)}
            >
              FOLLOW
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;