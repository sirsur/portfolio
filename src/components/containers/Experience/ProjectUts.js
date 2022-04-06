import React from 'react';
import styled from 'styled-components';
import CarouselUts from './CarouselUts';
import StackUts from './../Experience/StackUts';

const Container = styled.div`
    border-radius: 30px;
    background-color: #121212;
    background-image: url(${process.env.PUBLIC_URL}/img/UtsVector.svg);
    background-repeat: no-repeat;
    background-position: 40% 40%;
    background-size: 70rem;
    padding-block-end: 3rem;
    padding-block-start: 3rem;
    margin-top: 2rem;

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