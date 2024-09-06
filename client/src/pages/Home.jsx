import React, { useState } from 'react'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import FeaturedProjects from '../components/FeaturedProjects';
import FeaturedDevelopers from '../components/FeaturedDevelopers';
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Home = () => {

  return (
    <div className="bg-sec">
      <div className='h-[5vh]'>

      </div>
      <Header/>
      <HeroSection/>
      <FeaturedProjects/>
      <FeaturedDevelopers/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home