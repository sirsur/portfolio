import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    overflow: scroll;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`;

const ContainerFlex = styled.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 0 3.7rem 0 4.7rem;
    width: fit-content;
    position: relative;

    img {
        border-radius: 1rem;
    }
`;

const CarouselGrind = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + '/img/Grind1.webp 4.5x'} />
                    <img src={process.env.PUBLIC_URL + '/img/Grind1.webp'} alt="Preloader" />
                </picture>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + '/img/Grind2.webp 4.5x'} />
                    <img src={process.env.PUBLIC_URL + '/img/Grind2.webp'} alt="First screen" />
                </picture>
            </ContainerFlex>
        </Container>
    );
};

export default CarouselGrind;
