import styled from 'styled-components';


export const HeroSec = styled.div`
    padding: 60px 0;
`;

export const HeroRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const HeroText = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex: 1;
    order: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        flex-basis: 100%;
        max-width: 100%;
        display: flex;
        justify-content: center;
        order: 2;
        text-align: center;
    }
`;

export const HeroImg = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    order: 2;
    @media screen and (max-width: 768px) {
        flex-basis: 100%;
        max-width: 100%;
        display: flex;
        justify-content: center;
        order: 1;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    order: 1;
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    margin-top: 130px;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1;
    color: #2D3250;
`;

export const Subtitle = styled.p`
    max-width: 340px;
    margin-bottom: 35px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: #2D3250;
    opacity: 0.8;
    @media screen and (max-width: 768px) {
        max-width: fit-content;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    order: 2;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
    @media screen and (max-width: 768px){
        order: 1;
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