import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import styles from '../../styles/FeaturedBuilder.module.css'
import { Link } from "react-router-dom/cjs/react-router-dom";

function FeaturedCreator() {
  const [featuredCreator, setFeaturedCreator] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const response = await axiosReq.get(`/profiles/`);
        const { data } = response;

        // Check if 'data' has 'results' property
        if (data && data.results) {
          const featuredCreators = data.results.filter(profile => profile.is_featured === true);
          setFeaturedCreator({ results: featuredCreators });

        } else {
          console.log('No data or results found in response.');
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

    handleMount();
  }, []);

  const user = featuredCreator.results[0]
  return (
    <>
      {featuredCreator.results.length > 0 ? (
        <div className={styles.FeaturedBuilderWrapper}>
          <img className={styles.FeaturedBuilderImage} src={user.profile_image} alt="Some Text" />
          <div className={styles.FeaturedBuilderText}>
            <h3>{user.name}</h3>

            <small className={styles.FeaturedBuilderSubtitle}>
              {user.description}
            </small>

            <p >
              {user.content}
            </p>


          <Link to={`/profiles/${user.id}`}>
            VISIT PROFILE
            </Link>
          </div>
        </div>
      ) : (
        <p>No featured creators found.</p>
      )}
    </>
  );
  
  
  
  }
  
  export default FeaturedCreator;
