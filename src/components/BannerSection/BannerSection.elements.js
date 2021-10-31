import styled from "styled-components";


export const Banner = styled.section`
    background-color: hsl(12, 88%, 59%);
    margin-top: 175px;
`;

export const BannerRow = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const BannerText = styled.div`
    max-width: 50%;
    flex-basis: 50%;
    flex: 1;
    padding: 70px 0 40px 0;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

export const BannerButton = styled.div`
        align-items: center;
        justify-content: center;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-bottom: 70px;
    }
`;

export const BannerDeco = styled.img`
    position: absolute;
    bottom: 0;
    left: 20%;
    opacity: .1;
    z-index: -1;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const BannerDecoMobile = styled.img`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: .1;
        z-index: -1;
    }
`;