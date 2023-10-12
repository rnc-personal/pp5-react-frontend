import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import styles from '../../styles/FeaturedBuild.module.css'
import { Link } from "react-router-dom/cjs/react-router-dom";

function FeaturedBuild() {
    const [featuredBuild, setFeaturedBuild] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const response = await axiosReq.get(`/builds/`);
                //console.log(response);

                const { data } = response;
                //console.log(data);

                // Check if 'data' has 'results' property, for some reason this was more fussy and would not accept Promises.
                if (data && data.results) {
                    const featuredBuilds = data.results.filter(build => build.is_featured === true);
                    setFeaturedBuild({ results: featuredBuilds });

                    //console.log('Builds in useState: ', featuredBuilds);
                    //console.log('Builds in useState using Index: ', featuredBuilds[0]);

                } else {
                    console.log('No data or results found in response.');
                }
            } catch (err) {
                console.error('Error:', err);
            }
        };

        handleMount();
    }, []);

    const featured = featuredBuild.results[0]

    return (
        <>
            {featuredBuild.results.length > 0 ? (
                <>
                    <div className={styles.featuredBuildWrapper}>
                        <div className={styles.featuredBuildImage}>
                            <img src={featured.main_image} alt={featured.build_name} />
                            <small>{featured.build_name}</small>
                        </div>

                        <div className={styles.featuredBuildText}>
                            <small>{featured.creator}</small>
                            <p>{featured.content}</p>

                            <Link to={`/builds/${featured.id}`}>VIEW DETAILS</Link>
                        </div>

                    </div>
                </>
            ) : (
                <div>No featured builds found.</div>
            )}
        </>
    );

}

export default FeaturedBuild;
