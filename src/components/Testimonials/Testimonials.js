import React from 'react'
import { Button, BtnLink, SectionHeading } from '../../globalStyles'
import { TestimonialsSec } from '../Testimonials/Testimonials.elements'
import SimpleSlider  from './Slider'

const Testimonials = ( {testimonials_heading} ) => {
    return (
        <>
            <TestimonialsSec>
                <SectionHeading>{testimonials_heading}</SectionHeading>
                <SimpleSlider></SimpleSlider>
                <BtnLink to='/sign-up'>
                    <Button>Get Started</Button>
                </BtnLink>
            </TestimonialsSec>
        </>
    )
}


export default Testimonials
