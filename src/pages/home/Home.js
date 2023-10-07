import React from 'react'
import Hero from '../../components/Hero'
import TopBuilds from './TopBuilds'
import FeaturedBuilder from './FeaturedBuilder'

function Home() {
  return (
    <div>
        <Hero 
        headline="SHARE YOUR BATTLEBOX!"
        subline="SIGN UP TO SHARE YOUR KILLER BUILD AND SEE WHAT OTHER USERS HAVE CREATED"
        />
        <TopBuilds filter="ordering=-comments_count"/>
        <FeaturedBuilder />
    </div>
  )
}

export default Home