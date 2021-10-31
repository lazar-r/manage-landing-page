import React from 'react'
import { BtnLink, ButtonLight, Container, SectionHeadingLight, TextWrapper } from '../../globalStyles'
import { Banner, BannerRow, BannerText, BannerButton, BannerDeco, BannerDecoMobile } from './BannerSection.elements'
import bannerDeco from '../../images/bg-simplify-section-desktop.svg'
import bannerDecoMobile from '../../images/bg-simplify-section-mobile.svg'



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
                        <BannerDecoMobile src={bannerDecoMobile} />
                    </BannerRow>
                </Container>
            </Banner>
        </>
    )
}

export default BannerSection
