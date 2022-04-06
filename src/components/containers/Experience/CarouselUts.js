import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    overflow: scroll;
    position: relative;
    width: 100vw;
    right: 6rem;
`;

const ContainerFlex = styled.span`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    padding: 0 6rem 0 9rem;
    width: fit-content;
    position: relative;

    img {
        height: 40rem;
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
                style={{ height: '40rem' }}
                />
                <img
                src={process.env.PUBLIC_URL + '/img/uts2.svg'} 
                alt="Second slide"
                style={{ height: '40rem' }}
                />
            </ContainerFlex>
        </Container>
    );
};

export default CarouselUts;
