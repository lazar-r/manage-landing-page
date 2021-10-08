import React from 'react'
import { HeroSection } from '../../components'
import { homeObjOne } from './Data'

const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne}/>
        </>
    )
}

export default Home
