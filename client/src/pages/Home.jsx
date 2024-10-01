import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import FeaturedProjects from '../components/FeaturedProjects';
import FeaturedDevelopers from '../components/FeaturedDevelopers';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-sec">
      <div className='h-[5vh]'>
      </div>
      <Header/>
      <HeroSection/>
      <FeaturedProjects/>
      <FeaturedDevelopers/>
      <Footer/>
    </div>
  )
}

export default Home