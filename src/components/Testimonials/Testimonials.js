import React from 'react'
import { SectionHeading } from '../../globalStyles'
import { TestimonialsSec } from '../Testimonials/Testimonials.elements'
import SimpleSlider  from './Slider'

const Testimonials = ( {testimonials_heading} ) => {
    return (
        <>
            <TestimonialsSec>
                <SectionHeading>{testimonials_heading}</SectionHeading>
                <SimpleSlider></SimpleSlider>
            </TestimonialsSec>
        </>
    )
}


export default Testimonials
