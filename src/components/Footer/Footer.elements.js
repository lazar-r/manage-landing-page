import styled from "styled-components";


export const FooterSec = styled.section`
    background-color: #1E1E26;
`;

export const FooterWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #fff;
    padding: 60px 0;
    @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Socials = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        order: 3;
        align-items: center;
        width: 100%;
    }
`;

export const FooterLogo = styled.div`
        @media screen and (max-width: 768px) {
        order: 2;
    }
`;

export const Icons = styled.div`
    &:hover svg path {
        fill: hsl(12, 88%, 59%);
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 40px; 
    }
`;

export const Icon = styled.img`

`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        order: 2;
        justify-content: space-around;
        margin-bottom: 50px;
    }
`;

export const Link = styled.a`
    display: block;
    transition: all .2s ease;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    &:hover {
        cursor: pointer;
        color: hsl(12, 88%, 59%);
    }
`;

export const IconLink = styled(Link)`
    display: inline-block;
    &:not(:last-child) {
        margin-right: 10px;
        margin-bottom: 0;
    }
`;

export const LinksLeft = styled.div`
    margin-right: 200px;
    @media screen and (max-width: 768px) {
        margin-right: 100px;
    }
`;

export const LinksRight = styled.div`

`;

export const FooterCtaCopyright = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterForm = styled.form`
     @media screen and (max-width: 882px) {
        margin-top: 30px;
     }
     @media screen and (max-width: 768px) {
        order: 1;
     }
`;

export const Input = styled.input`
    border-radius: 50px;
    padding: 15px 35px 15px 20px;
    margin-right: 15px;
    margin-bottom: 60px;
    border: 1px solid  hsl(12, 88%, 59%);
    @media screen and (max-width: 768px) {
        margin-right: 5px;
    }
    @media screen and (max-width: 320px) {
        margin-bottom: 20px
    }
`;



export const Copyright = styled.span`
    font-size: 13px;
    color: #5C5C64;
    align-self: flex-end;
    @media screen and (max-width: 768px) {
        position: absolute;
        bottom: 20px;
        text-align: center;
        left: 0;
        right: 0;
    } 
`;




