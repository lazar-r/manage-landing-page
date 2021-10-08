import React from 'react'
import { Container, Button } from '../../globalStyles'
import { 
    HeroSec,
    HeroRow,
    HeroText,
    HeroImg,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrapper,
    Img

} from './HeroSection.elements'

const HeroSection = ({ headline, description, buttonLabel, img, alt, start }) => {
    return (
        <>
            <HeroSec>
                <Container>
                    <HeroRow>
                        <HeroText>
                            <TextWrapper>
                                <Heading >{headline}</Heading>
                                <Subtitle >{description}</Subtitle>
                                <btnLink to='/get-started'>
                                    <Button>{buttonLabel}</Button>
                                </btnLink>
                            </TextWrapper>
                        </HeroText>
                        <HeroImg>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </HeroImg>
                    </HeroRow>
                </Container>
            </HeroSec>
        </>
    )
}

export default HeroSection

