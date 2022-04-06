import React from 'react';
import styled from 'styled-components';
import CarouselGrind from './CarouselGrind'
import StackGrind from './../Experience/StackGrind';

const Container = styled.div`
    border-radius: 1rem;
    background-color: #121212;
    background-image: url(${process.env.PUBLIC_URL}/img/GrindVector.svg);
    background-repeat: no-repeat;
    background-position: -20% 60%;
    background-size: 50rem;
    padding-block-end: 3rem;
    padding-block-start: 3rem;

    h1 {
        font-size: 4.2em;
        margin: 0 0 1rem 0;
        font-weight: 900;
        padding: 0 3rem 0 3rem;
    }

    p { 
        padding: 0 3rem 0 3rem;
        font-size: 3em;
        margin-top: 0;
    }
`

const ProjectGrind = () => {
    return (
        <Container>
            <h1>GRIND</h1>
            <p>
                project to find a direction and a university for applicants
                <br />
                <br />
                (currently being done on a different stack)
            </p>
            <CarouselGrind />
            <StackGrind />
        </Container>
    );
};

export default ProjectGrind;