import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.section`
    grid-row: 6;
    grid-column: 2;
    h2 {
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
        font-weight: 700;
    }

    p {
        margin-top: 0;
        font-size: calc(1.5em + 1vw);
    }
`;

const Education = () => {
    return (
        <Container id='edu'>
            {Title('04', 'EDU')}
            <h2 style={{ fontWeight: '700' }}>
                saint-petersburg polytechnic university (2019 - 2023)
            </h2>
            <p>fundamental computer science and information technology</p>
        </Container>
    );
};

export default Education;
