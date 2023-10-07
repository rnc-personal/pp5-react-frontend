import React, { useState, useEffect } from 'react'
import { axiosReq } from "../../api/axiosDefaults";
import styles from '../../styles/HomeTopBuildCard.module.css';
import btnStyles from "../../styles/Button.module.css"
import { Link } from 'react-router-dom';


function TopBuilds({ filter }) {
    const [topBuilds, setTopBuilds] = useState({ results: [] });
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      const fetchTopBuilds = async () => {
        try {
          const response = await axiosReq.get(`/builds/?${filter}&page=1`);
          const { data } = response;
  
          // Clear existing top builds when fetching a new page
          const newTopBuilds = data.results.map((build) => ({ ...build, comments_count: build.comments_count || 0 })); // Handle missing comments_count
  
          // Combine existing top builds with new top builds
          const combinedTopBuilds = [...topBuilds.results, ...newTopBuilds];
  
          // Get the first 6 top builds with the most comments
          const updatedTopBuilds = combinedTopBuilds.slice(0, 6);
  
          setTopBuilds({ results: updatedTopBuilds });
          setCurrentPage(1);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchTopBuilds();
      // Disabled Warning about the missing dependency below.
      // eslint is asking for topBuilds.results as a dependency, but this causes more results to be loaded
      // eslint-disable-next-line
    }, [currentPage]);
  
    return (
      <div>
        <div className={styles.HomeBuildsWrapper}>
          {topBuilds.results.map((build) => (
            <div className={styles.HomeBuildCard} key={build.id}>
              <img src={build.main_image} alt={build.build_name} />
              <h3>{build.build_name}</h3>
              <p>{build.comments_count} Comments</p>
              <Link className={btnStyles.Button} to={`/builds/${build.id}`} style={{ width: '100%' }}>
                VIEW
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default TopBuilds;
  