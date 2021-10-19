import React from 'react'
import { HeroSection, Testimonials } from '../../components'
import { homeObjOne, testimonialsObj } from './Data'

const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <Testimonials {...testimonialsObj}/>
        </>
    )
}

export default Home
