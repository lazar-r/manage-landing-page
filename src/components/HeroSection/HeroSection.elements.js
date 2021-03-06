import styled from 'styled-components';


export const HeroSec = styled.section`
    padding: 60px 0;
`;

export const HeroRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const HeroText = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex: 1;
    order: 1;
    max-width: 50%;
    flex-basis: 50%;
/*     &:before {
        content: '';
        width: 1439px;
        height: 444px;
        position: absolute;
        bottom: -140%;
        left: -70%;
        background-color: #FFF0EB;
        opacity: 1;
        transform: rotate(-35deg);
        z-index: -1;
        border-bottom-right-radius: 250px;
        border-top-right-radius: 250px;
    } */
    @media screen and (max-width: 768px) {
        flex-basis: 100%;
        max-width: 100%;
        display: flex;
        justify-content: center;
        order: 2;
        text-align: center;
        flex-direction: column;

/*         &:before {
            width: 190px;
            bottom: 0;
            right: -20%;
            left: 90%;
            top: 103%;
            border-bottom-left-radius: 250px;
            border-top-left-radius: 250px;
            transform: rotate(45deg);
        } */
    }
`;

export const BgDecoTop = styled.img`
    position: absolute;
    top: -32%;
    right: -15%;
    z-index: -1;
    @media screen and (max-width: 768px) {
        width: 100vw;
        right: -15%;
        top: -10%;
    }
`;

export const BgDecoBottom = styled.img`
    position: absolute;
    bottom: -150%;
    left: -35%;
    z-index: -1;
    @media screen and (max-width: 768px) {
        width: 100vw;
        bottom: -55%;
        left: 70%;
    }
`;

export const HeroImg = styled.div`
    position: relative;
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

export const HeroInfo = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        padding-bottom: 15px;
    }
`;  

export const HeroIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    border: 0;
    background-color: hsl(12, 88%, 59%);
    color: #fff;
    border-radius: 20px;
    min-width: 65px;
    max-height: 40px;
    z-index: 1;
    @media screen and (max-width: 768px) {
        margin-right: 5px;
    }
`;

export const HeroInfoTitle = styled.h4`
    padding-top: 0;
    padding-bottom: 20px;
    order: 1;
    @media screen and (max-width: 768px) {
        padding-bottom: 12px;
        padding-top: 5px;
        background-color: hsl(13, 100%, 96%);
        margin-left: -25px;
        margin-right: -25px;
        z-index: -1;
    }
`;

export const HeroInfoText = styled.p`
    max-width: 540px;
    padding-bottom: 10px;
    @media screen and (max-width: 768px) {
        padding-bottom: 15px;
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        margin-left: -70px;
        text-align: left;
    }
`;