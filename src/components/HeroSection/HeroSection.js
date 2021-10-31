import React from 'react'
import bgDeco from '../../images/bg-tablet-pattern.svg'
import { Container, Button, BtnLink, HeroHeading, SectionHeading, Img, TextWrapper } from '../../globalStyles'
import { 
    HeroSec,
    HeroRow,
    HeroText,
    HeroImg,
    Subtitle,
    ImgWrapper,
    HeroInfo,
    HeroIcon,
    HeroInfoTitle,
    HeroInfoText,
    BgDecoTop,
    BgDecoBottom

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
                                <HeroHeading >{headline_1}</HeroHeading>
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
                                <SectionHeading >{headline_2}</SectionHeading>
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
            <BgDecoTop src={bgDeco} alt=""/>
            <BgDecoBottom src={bgDeco} alt=""/>
        </>
    )
}

export default HeroSection

