import React, { useState, useEffect } from 'react'
import { axiosReq } from "../../api/axiosDefaults";
import { Button } from 'react-bootstrap';
import styles from '../../styles/HomeTopBuildCard.module.css';
import btnStyles from "../../styles/Button.module.css"
import { Link } from 'react-router-dom';


function TopBuilds() {
    const [build, setBuild] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: build }] = await Promise.all([
                    axiosReq.get(`/builds/`)
                ]);
                // Find all Builds with More than 10 Comments
                const filteredBuilds = build.results.filter((build) => build.comments_count >= 1);

                setBuild({ results: filteredBuilds });
                console.log(filteredBuilds);

            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, []);


    return (
        <div>
            <div className={styles.HomeBuildsWrapper}>
            {build.results.map((build) => (
                    <div className={styles.HomeBuildCard} key={build.id}>
                        <img src={build.main_image} alt={build.build_name} />
                        <h3>{build.build_name}</h3>
                        <p>{build.comments_count} Comments</p>
                        <Link className={btnStyles.Button} to={`/builds/${build.id}`}>VIEW</Link>
                    </div>
            ))}
            </div>

        </div>
    )
}

export default TopBuilds