import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.section`
    p {
        font-size: calc(1.1em + 2vw);
    }
`;

const Education = () => {
    return (
        <Container id='edu'>
            {Title('01', 'EDU')}
            <p style={{ fontWeight: '700' }}>
                saint-petersburg polytechnic university (2019 - 2023)
            </p>
            <p>fundamental computer science and information technology</p>
        </Container>
    );
};

export default Education;
