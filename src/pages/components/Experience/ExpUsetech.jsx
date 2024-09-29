import React from 'react';
import styled from 'styled-components';
import StackUsetech from './StackUsetech';

const Container = styled.div`
    border-radius: 1rem;
    padding-block-end: 2rem;
    padding-block-start: 2rem;
    background-color: #121212;
    background-image: url(${process.env.PUBLIC_URL}/img/UsetechVectorExp.svg);
    background-repeat: no-repeat;
    background-position: 30% 30%;
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
`;

const ExpUsetech = () => {
    return (
        <Container>
            <h1>USETECH</h1>
            <p style={{ fontWeight: '700' }}>junior developer (2022 - 2023)</p>
            <p>creation of services, their support on the government website</p>
            <StackUsetech />
        </Container>
    );
};

export default ExpUsetech;
