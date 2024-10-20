import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import FeaturedProjects from '../components/FeaturedProjects';
import FeaturedDevelopers from '../components/FeaturedDevelopers';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-sec no-scrollbar overflow-scroll h-screen">
      <div className='h-[10vh]'>
      </div>
      <Header/>
      <HeroSection/>
      <FeaturedProjects/>
      {/* <FeaturedDevelopers/> */}
      <Footer/>
    </div>
  )
}

export default Home