import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Be Vietnam', sans-serif;
    }
    html, body {
        overflow-x: hidden;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
        color: #2D3250;
        opacity: 0.8;
    }
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;


export const HeroHeading = styled.h1`
    margin-bottom: 24px;
    margin-top: 130px;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1;
    color: #2D3250;
    @media screen and (max-width: 768px) {
        margin-top: 30px;
    }
`;

export const SectionHeading = styled.h2`
    margin-bottom: 24px;
    font-size: 38px;
    font-weight: 700;
    line-height: 1.1;
    color: #2D3250;
`;

export const SectionHeadingLight = styled(SectionHeading)`
    margin-bottom: 0;
    color: #fff;
`;


export const Container = styled.div`
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media screen and (max-width: 768px) {
        padding: 0 5px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 30px;
    order: 1;
    @media screen and (max-width: 768px) {
        padding-bottom: 15px;

    }
`;

export const Overlay = styled.div`
    position: fixed; /* Sit on top of the page content */
    display: none;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(125,125,125,0.7) 75%);
    transition:  all 0.5s ease;
    display: ${({click}) => (click ? 'block' : 'none')};
`;

export const Button = styled.button`
    background-color: hsl(12, 88%, 59%);
    color: #fff;
    border-radius: 50px;
    border: none;
    padding: 15px 35px;
    font-weight: 700;
    transition: all .1s ease-in-out;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const ButtonLight = styled(Button)`
    background-color: #fff;
    color: hsl(12, 88%, 59%);
`;

export const BtnLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    border: none;
    outline: none;
    z-index: 10;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;


export default GlobalStyle;