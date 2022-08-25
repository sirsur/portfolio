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
        height: 20rem;
        border-radius: 1rem;
    }
`;

const CarouselUts = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + '/img/uts1.webp 4.5x'} />
                    <img src={process.env.PUBLIC_URL + '/img/uts1.webp'} alt="First screen" />
                </picture>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + '/img/uts2.webp 4.5x'} />
                    <img src={process.env.PUBLIC_URL + '/img/uts2.webp'} alt="Second screen" />
                </picture>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + '/img/uts3.webp 4.5x'} />
                    <img src={process.env.PUBLIC_URL + '/img/uts3.webp'} alt="Third screen" />
                </picture>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + '/img/uts4.webp 4.5x'} />
                    <img src={process.env.PUBLIC_URL + '/img/uts4.webp'} alt="Fourth screen" />
                </picture>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + '/img/uts5.webp 4.5x'} />
                    <img src={process.env.PUBLIC_URL + '/img/uts5.webp'} alt="Fifth screen" />
                </picture>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + '/img/uts6.webp 4.5x'} />
                    <img src={process.env.PUBLIC_URL + '/img/uts6.webp'} alt="Sixth screen" />
                </picture>
            </ContainerFlex>
        </Container>
    );
};

export default CarouselUts;
