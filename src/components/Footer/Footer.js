import React from 'react'
import { ReactComponent as LogoWhite } from '../../images/logo-white.svg'
import { Container, Button } from '../../globalStyles'
import {
    FooterSec, 
    FooterWrapper, 
    Socials, 
    FooterLogo, 
    Icons, 
    Icon,
    IconLink,
    FooterLinks,
    LinksLeft,
    Link,
    LinksRight,
    FooterCtaCopyright,
    FooterForm,
    Input,
    Copyright
} from '../Footer/Footer.elements'



const Footer = (
    {
        icon_instagram,
        icon_facebook,
        icon_twitter,
        icon_pinterest,
        icon_youtube
    }
) => {

    const handleSubmit = (e) => {
        e.preventDefault();
      };

    return (
        <>
            <FooterSec>
                <Container>
                    <FooterWrapper>
                        <Socials>
                            <FooterLogo to='/manage-landing-page'>
                                <LogoWhite title="logo" />
                            </FooterLogo>
                            <Icons>
                                <IconLink><Icon src={icon_facebook}></Icon></IconLink>
                                <IconLink><Icon src={icon_youtube}></Icon></IconLink>
                                <IconLink><Icon src={icon_twitter}></Icon></IconLink>
                                <IconLink><Icon src={icon_pinterest}></Icon></IconLink>
                                <IconLink><Icon src={icon_instagram}></Icon></IconLink>
                            </Icons>
                        </Socials>
                        <FooterLinks>
                            <LinksLeft>
                                <Link to='/manage-landing-page'>Home</Link>
                                <Link to='/pricing'>Pricing</Link>
                                <Link to='/products'>Products</Link>
                                <Link to='about-us'>About Us</Link>
                            </LinksLeft>
                            <LinksRight>
                                <Link to='/careers'>Careers</Link>
                                <Link to='/community'>Community</Link>
                                <Link to='/privacy-policy'>Privacy Policy </Link>
                            </LinksRight>
                        </FooterLinks>
                        <FooterCtaCopyright>
                            <FooterForm onSubmit={handleSubmit}>
                                <Input type="email" placeholder="Updates in your inbox..." name="email" required></Input>
                                <Button type="submit">Go</Button>
                            </FooterForm>
                            <Copyright>Copyright 2020. All Rights Reserved</Copyright>
                        </FooterCtaCopyright>
                    </FooterWrapper>
                </Container>
            </FooterSec>
        </>
    )
}

export default Footer
