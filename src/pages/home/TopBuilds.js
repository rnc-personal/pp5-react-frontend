import React, { useState, useEffect } from 'react'
import { axiosReq } from "../../api/axiosDefaults";
import { Button } from 'react-bootstrap';
import styles from '../../styles/HomeTopBuildCard.module.css';
import btnStyles from "../../styles/Button.module.css"
import { Link } from 'react-router-dom';


function TopBuilds() {
    const [build, setBuild] = useState({ results: [] });
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchBuilds = async () => {
          try {
            const response = await axiosReq.get(`/builds/?page=${currentPage}`);
            const { data } = response;
    
            // Combine existing builds with new page of builds
            const combinedBuilds = [
              ...build.results,
              ...data.results.map((build) => ({ ...build, comments_count: build.comments_count || 0 })), // Handle missing comments_count
            ];
    
            // Sort builds by comments_count in descending order
            const sortedBuilds = combinedBuilds.sort((a, b) => b.comments_count - a.comments_count);
    
            // Get the first 6 builds with the most comments
            const topBuilds = sortedBuilds.slice(0, 6);
    
            setBuild({ results: topBuilds });
            setCurrentPage(currentPage + 1);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchBuilds();
        // Disabled Warning about missing dependancy below.
        // eslint is asking for build.results as a dependancy but this causes more results to be loaded
        // eslint-disable-next-line
      }, [currentPage]);
      


    return (
        <div>
            <div className={styles.HomeBuildsWrapper}>
            {build.results.map((build) => (
                    <div className={styles.HomeBuildCard} key={build.id}>
                        <img src={build.main_image} alt={build.build_name} />
                        <h3>{build.build_name}</h3>
                        <p>{build.comments_count} Comments</p>
                        <Link className={btnStyles.Button} to={`/builds/${build.id}`} style={{width: '100%'}}>VIEW</Link>
                    </div>
            ))}
            </div>

        </div>
    )
}

export default TopBuilds