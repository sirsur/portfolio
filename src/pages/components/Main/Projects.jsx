import React from 'react';
import styled from 'styled-components';
import ProjectGrind from '../Projects/ProjectGrind';
import ProjectUts from '../Projects/ProjectUts';
import Title from './Title';
import ProjectAuto from '../Projects/ProjectAuto';

const Container = styled.section`
    grid-row: 4 / 6;
    grid-column: 2;
    align-self: center;
`;

const Projects = () => {
    return (
        <Container id='projects'>
            {Title('02', 'PROJ')}
            <ProjectUts />
            <ProjectGrind />
            <ProjectAuto />
        </Container>
    );
};

export default Projects;
