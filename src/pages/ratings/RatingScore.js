import styles from '../../styles/RatingScore.module.css';

const RatingScore = ({rating_value}) => {

    // Define a function to determine the color based on the rating_value
    const getColorBasedOnRating = (ratingValue) => {
        if (ratingValue >= 4) {
            return styles.scorePositive; // Use the CSS class name for high ratings.
        } else if (ratingValue >= 2) {
            return styles.scoreAverage; // Use the CSS class name for moderate ratings.
        } else {
            return styles.scoreNegative; // Use the CSS class name for low ratings.
        }
    };

    return (
        <>
            <hr />
                <span className={styles.ScoreWrapper}>
                    <div className={getColorBasedOnRating(rating_value)}>
                        <div className={styles.Score}>
                            {rating_value}
                        </div>
                    </div>
                </span>
        </>
    );
};

export default RatingScore;
