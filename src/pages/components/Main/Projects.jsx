import React from 'react';
import styled from 'styled-components';
import ProjectGrind from '../Projects/ProjectGrind';
import ProjectUts from '../Projects/ProjectUts';
import Title from './Title';

const Container = styled.section``;

const Projects = () => {
    return (
        <Container id='projects'>
            {Title('03', 'PROJECTS')}
            <ProjectGrind />
            <ProjectUts />
        </Container>
    );
};

export default Projects;
