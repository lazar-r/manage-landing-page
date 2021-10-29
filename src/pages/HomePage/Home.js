import React from 'react'
import { BannerSection, HeroSection, Testimonials } from '../../components'
import { homeObjOne, testimonialsObj } from './Data'

const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <Testimonials {...testimonialsObj}/>
            <BannerSection />
        </>
    )
}

export default Home
