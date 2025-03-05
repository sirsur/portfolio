import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import ExpUts from '../Experience/ExpUts';
import ExpUsetech from '../Experience/ExpUsetech';
import ExpSigma from '../Experience/ExpSigma';

const Container = styled.section`
    grid-row: 5 / 8;
    grid-column: 1;
`;
const ContainerFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Experience = () => {
    return (
        <Container id='exp'>
            {Title('03', 'EXP')}
            <ContainerFlex>
                <ExpUts />
                <ExpUsetech />
                <ExpSigma />
            </ContainerFlex>
        </Container>
    );
};

export default Experience;
