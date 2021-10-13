import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Be Vietnam', sans-serif;
    }
    body {
        overflow-x: hidden;
    }
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

export const Overlay = styled.div`
    position: fixed; /* Sit on top of the page content */
    display: none;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;
export const BtnLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    border: none;
    outline: none;
    z-index: 10;
`;


export default GlobalStyle;