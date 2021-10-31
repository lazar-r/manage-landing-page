import React from 'react'
import { BannerSection, Footer, HeroSection, Testimonials } from '../../components'
import { homeObjOne, testimonialsObj, socialsIcons } from './Data'

const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <Testimonials {...testimonialsObj}/>
            <BannerSection />
            <Footer {...socialsIcons}/>
        </>
    )
}

export default Home
