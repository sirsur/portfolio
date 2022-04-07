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
    gap: 4rem;
    padding: 0 4rem 0 4.4rem;
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
                <img
                src={process.env.PUBLIC_URL + '/img/uts1.svg'} 
                alt="First slide"
                />
                <img
                src={process.env.PUBLIC_URL + '/img/uts2.svg'} 
                alt="Second slide"
                />
            </ContainerFlex>
        </Container>
    );
};

export default CarouselUts;
