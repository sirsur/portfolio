import React from 'react';
import styled from 'styled-components';
import ProjectGrind from '../Projects/ProjectGrind';
import ProjectUts from '../Projects/ProjectUts';
import Title from './Title';
import ProjectAuto from '../Projects/ProjectAuto';

const Container = styled.section``;

const Projects = () => {
    return (
        <Container id='projects'>
            {Title('03', 'PROJ')}
            <ProjectUts />
            <ProjectGrind />
            <ProjectAuto />
        </Container>
    );
};

export default Projects;
