import React from "react";
import styles from '../../styles/AverageRating.module.css'

const AverageRating = ({ ratings }) => {

  const totalRating = ratings.results.reduce(
    (total, rating) => total + rating.rating_value,
    0
  );


  const averageRating =
    ratings.results.length > 0
      ? (totalRating / ratings.results.length).toFixed(1)
      : "NOT RATED YET"; 

  return (
    <div>
      <h4>USER RATING</h4>
      <p className={styles.AvgRating}>{averageRating}</p>
    </div>
  );
};

export default AverageRating;
