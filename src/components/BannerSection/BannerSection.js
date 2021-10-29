import React from 'react'
import { BtnLink, ButtonLight, Container, SectionHeadingLight, TextWrapper } from '../../globalStyles'
import { Banner, BannerRow, BannerText, BannerButton, BannerDeco } from './BannerSection.elements'
import bannerDeco from '../../images/bg-simplify-section-desktop.svg'



const BannerSection = () => {
    return (
        <>
            <Banner>
                <Container>
                    <BannerRow>
                        <BannerText>
                            <TextWrapper>
                                <SectionHeadingLight>
                                    Simplify how your team works today.
                                </SectionHeadingLight>
                            </TextWrapper>
                        </BannerText>
                        <BannerButton>
                            <BtnLink to="get-starteed">
                                <ButtonLight>Get Started</ButtonLight>
                            </BtnLink>
                        </BannerButton>
                        <BannerDeco src={bannerDeco}/>
                    </BannerRow>
                </Container>
            </Banner>
        </>
    )
}

export default BannerSection
