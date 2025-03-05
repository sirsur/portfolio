import React from 'react';
import styled from 'styled-components';
import StackUts from './StackUts';

const Container = styled.div`
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${process.env.PUBLIC_URL}/img/UtsVectorExp.svg);
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

const ExpUts = () => {
    return (
        <Container>
            <h1>UTS</h1>
            <h2>developer (2021-2022)</h2>
            <p>
                creation of a website for the company and its support, as well
                as setting up equipment in the office
            </p>
            <StackUts />
        </Container>
    );
};

export default ExpUts;
