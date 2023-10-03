import styles from "../../styles/Rating.module.css";
import RatingScore from "./RatingScore";

const Rating = (props) => {
    const { creator, rating_value } = props;
    return (
        <>
        <hr />
            <div>
                <span className={styles.RatingUser}>{creator} Rated this build <RatingScore rating_value={rating_value}/></span>
            </div>
        </>
    );
};

export default Rating;