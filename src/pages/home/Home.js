import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import Hero from '../../components/Hero'
import TopBuilds from './TopBuilds'
import FeaturedCreator from "./FeaturedCreator";

function Home() {

  const [featuredBuilds, setFeaturedBuilds] = useState({ results: [] });


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: builds }] = await Promise.all([
          axiosReq.get(`/builds/`)
        ]);

        const featuredBuilds = builds.results.filter(build => build.is_featured === true);

        setFeaturedBuilds({ results: featuredBuilds });

        console.log('Builds Array:', builds);
        console.log('Builds with is_featured set:', JSON.stringify(featuredBuilds, null, 2));

    
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);

  return (
    <div>
        <Hero 
        headline="SHARE YOUR BATTLEBOX!"
        subline="SIGN UP TO SHARE YOUR KILLER BUILD AND SEE WHAT OTHER USERS HAVE CREATED"
        />

        <TopBuilds filter="ordering=-comments_count"/>
        <FeaturedCreator />
        
    </div>
  )
}

export default Home