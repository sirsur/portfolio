import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.section`
`;

/*
TODO - add description about experience
*/

const Experience = () => {
    return (
        <Container id='exp'>
            { Title("03", "EXP") }
        </Container>
    );
};

export default Experience;