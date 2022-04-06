import React from 'react';
import styled from 'styled-components';
import CarouselUts from './CarouselUts';
import StackUts from './../Experience/StackUts';

const Container = styled.div`
    border-radius: 1rem;
    background-color: #121212;
    background-image: url(${process.env.PUBLIC_URL}/img/UtsVector.svg);
    background-repeat: no-repeat;
    background-position: 40% 40%;
    background-size: 70rem;
    padding-block-end: 3rem;
    padding-block-start: 3rem;
    margin-top: 2rem;

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
`;

const ProjectUts = () => {
    return (
        <Container>
            <h1>UTS</h1>
            <p>website for our family company based in surgut, russia</p>
            <CarouselUts />
            <StackUts />
        </Container>
    );
};

export default ProjectUts;