import React from 'react';
import styled from 'styled-components';
import CarouselGrind from './CarouselGrind'
import StackGrind from './StackGrind';

const Container = styled.div`
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${process.env.PUBLIC_URL}/img/GrindVector.svg);
    background-repeat: no-repeat;
    background-position: 0% 30%;
    background-size: 30rem;

    h1 {
        margin: 0 0 1rem 0;
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        font-size: calc(2.5em + 1vw);
        font-weight: 900;
    }

    p { 
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`

const ProjectGrind = () => {
    return (
        <Container>
            <h1>GRIND</h1>
            <p>project to find a direction and a university for applicants</p>
            <p style={{ fontWeight: '700' }}>(currently being done on a different stack)</p>
            <CarouselGrind />
            <StackGrind />
        </Container>
    );
};

export default ProjectGrind;