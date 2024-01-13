import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeDiseases from '../components/HomeDiseases'
import AboutPage from '../components/AboutPage'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeDiseases/>
      <AboutPage/>
    </div>
  )
}

export default Home