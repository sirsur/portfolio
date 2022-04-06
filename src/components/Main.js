import React from 'react';
import styled from 'styled-components';
import Header from './containers/Main/Header';
import AboutMe from './containers/Main/AboutMe';
import Skills from './containers/Main/Skills';
import Experience from './containers/Main/Experience';
import Links from './containers/Main/Links';
import Footer from './containers/Main/Footer';

const Container = styled.div` 
    background-color: #000000;
    padding: 6rem 4rem 4rem 4rem;
`;

const Main = () => {
    return (
        <Container id='top'>
            <Header />
            <AboutMe />
            <Skills />
            <Experience />
            <Links />
            <Footer />
        </Container>
    )
};

export default Main;