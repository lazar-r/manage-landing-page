import React from 'react'
import { Container, Button, BtnLink } from '../../globalStyles'
import { 
    HeroSec,
    HeroRow,
    HeroText,
    HeroImg,
    TextWrapper,
    Heading,
    Heading_2,
    Subtitle,
    ImgWrapper,
    Img,
    HeroInfo,
    HeroIcon,
    HeroInfoTitle,
    HeroInfoText

} from './HeroSection.elements'

const HeroSection = ({ 
    headline_1, 
    headline_2, 
    description_1, 
    description_2, 
    buttonLabel, 
    img, 
    alt, 
    start,
    hero_info_title_1,
    hero_info_title_2,
    hero_info_title_3,
    hero_info_text_1,
    hero_info_text_2,
    hero_info_text_3
 }) => {
    return (
        <>
            <HeroSec>
                <Container>
                    <HeroRow>
                        <HeroText>
                            <TextWrapper>
                                <Heading >{headline_1}</Heading>
                                <Subtitle >{description_1}</Subtitle>
                                <BtnLink to='/get-started'>
                                    <Button>{buttonLabel}</Button>
                                </BtnLink>
                            </TextWrapper>
                        </HeroText>
                        <HeroImg>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </HeroImg>
                    </HeroRow>
                    <HeroRow>
                        <HeroText>
                            <TextWrapper>
                                <Heading_2 >{headline_2}</Heading_2>
                                <Subtitle >{description_2}</Subtitle>
                            </TextWrapper>
                        </HeroText>
                        <HeroText>
                            <HeroInfo>
                                <HeroIcon>01</HeroIcon>
                                <TextWrapper>
                                    <HeroInfoTitle>{hero_info_title_1}</HeroInfoTitle>
                                    <HeroInfoText>{hero_info_text_1}</HeroInfoText>
                                </TextWrapper>
                            </HeroInfo>
                            <HeroInfo>
                                <HeroIcon>02</HeroIcon>
                                <TextWrapper>
                                    <HeroInfoTitle>{hero_info_title_2}</HeroInfoTitle>
                                    <HeroInfoText>{hero_info_text_2}</HeroInfoText>
                                </TextWrapper>
                            </HeroInfo>
                            <HeroInfo>
                                <HeroIcon>03</HeroIcon>
                                <TextWrapper>
                                    <HeroInfoTitle>{hero_info_title_3}</HeroInfoTitle>
                                    <HeroInfoText>{hero_info_text_3}</HeroInfoText>
                                </TextWrapper>
                            </HeroInfo>
                        </HeroText>
                    </HeroRow>
                </Container>
            </HeroSec>
        </>
    )
}

export default HeroSection

