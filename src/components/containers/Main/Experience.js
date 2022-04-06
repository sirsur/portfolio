import React from 'react';
import styled from 'styled-components';
import ProjectGrind from './../Experience/ProjectGrind';
import ProjectUts from './../Experience/ProjectUts';
import Title from './Title';

const Container = styled.section`
`;

const Experience = () => {
    return (
        <Container id='exp'r>
            { Title("02", "EXP") }
            <ProjectGrind />
            <ProjectUts />
        </Container>
    );
};

export default Experience;