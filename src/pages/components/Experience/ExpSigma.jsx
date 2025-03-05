import React from 'react';
import styled from 'styled-components';
import StackSigma from './StackSigma';

const Container = styled.div`
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${process.env.PUBLIC_URL}/img/SigmaVectorExp.svg);
    background-repeat: no-repeat;
    background-position: 30% 30%;
    background-size: 30rem;

    h1 {
        margin: 0 0 1rem 0;
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        font-size: calc(2.5em + 1vw);
        font-weight: 900;
    }

    h2 {
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
        font-weight: 700;
    }

    p {
        padding: 0 calc(2rem + 1vw) 0 calc(2rem + 1vw);
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`;

const ExpSigma = () => {
    return (
        <Container>
            <h1>SIGMA</h1>
            <h2>junior fullstack developer (2023 - 2024)</h2>
            <p>
                maintaining the functionality of the “sigma sus” electrical
                network management system
            </p>
            <StackSigma />
        </Container>
    );
};

export default ExpSigma;
