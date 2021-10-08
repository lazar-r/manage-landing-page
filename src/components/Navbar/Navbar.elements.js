import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'



export const Nav = styled.nav`
    background-color: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const NavbarContainer = styled(Container)`
    position: relative;
    display: flex;
    justify-content: space-between;
    color: #FFF;

    ${Container}
`;

export const NavLogo = styled(Link)`
    display: flex;
    justify-self: flex-start;
    align-items: center;
    cursor: pointer;
    z-index: 99;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        cursor: pointer;
        z-index: 99;

    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    z-index: 9;

    @media screen and (max-width: 960px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        top: ${({click}) => (click ? '80px' : '-500px')};
        right: 20px;
        left: 20px;
        height: 50vh;
        opacity: 1;
        transition: all 0.5s ease;
        background: #fff;
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 50px;
    &:not(:last-child){
        margin-right: 35px;
    }
    @media screen and (max-width: 960px) {
        &:not(:last-child){
            margin-right: 0;
    } 
    }
`;

export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #2D3250;
    font-weight: 700;
    &:hover {
        opacity: 0.7;
    }
`;

export const NavItemBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 960px){
        display: none;
    }
`;
