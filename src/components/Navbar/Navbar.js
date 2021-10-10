import React, { useState } from 'react'
import { Overlay, Button, BtnLink } from '../../globalStyles'
import { ReactComponent as Logo } from '../../images/logo.svg'
import { ReactComponent as Open } from '../../images/icon-hamburger.svg'
import { ReactComponent as Close } from '../../images/icon-close.svg'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn, } from './Navbar.elements'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    

    return (
        <>            
        <Overlay onclick={handleClick} click={click}/>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/manage-landing-page'>
                        <Logo title="logo" />
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <Close /> : <Open />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/pricing">
                                Pricing
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/product">
                                Product
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about-us">
                                About Us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/careers">
                                Careers
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/community">
                                Pricing
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavItemBtn>
                        <BtnLink to='/sign-up'>
                            <Button>Get Started</Button>
                        </BtnLink>
                    </NavItemBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
