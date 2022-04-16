import React from 'react';
import styled from 'styled-components';
import Header from './containers/Main/Header';
import AboutMe from './containers/Main/AboutMe';
import Skills from './containers/Main/Skills';
import Experience from './containers/Main/Experience';
import Links from './containers/Main/Links';
import Footer from './containers/Main/Footer';
import Preloader from './Preloader';

const Container = styled.div` 
    z-index: 0;
    padding: calc(3rem + 2vw) calc(1.5rem + 2vw) calc(1.5rem + 2vw) calc(1.5rem + 2vw);
    animation: main-fixed 23.5s;
`;

const Main = () => {
    return (
        <>
            <Preloader />
            <Container id='top'>
                <Header />
                <AboutMe />
                <Skills />
                <Experience />
                <Links />
                <Footer />
            </Container>
        </>
    )
};

export default Main;