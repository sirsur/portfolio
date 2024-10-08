import React from 'react';
import styled from 'styled-components';
import Header from './components/Main/Header';
import AboutMe from './components/Main/AboutMe';
import Skills from './components/Main/Skills';
import Experience from './components/Main/Experience';
import Projects from './components/Main/Projects';
import Links from './components/Main/Links';
import Footer from './components/Main/Footer';
import Preloader from './Preloader';
import Education from './components/Main/Education';

const Container = styled.div`
    z-index: 0;
    padding: 10dvh calc(1.5rem + 2vw) 5dvh calc(1.5rem + 2vw);
    animation: main-fixed 23.5s;
`;

const Main = () => {
    return (
        <>
            <Preloader />
            <Container id='top'>
                <Header />
                <AboutMe />
                <Education />
                <Skills />
                <Projects />
                <Experience />
                <Links />
                <Footer />
            </Container>
        </>
    );
};

export default Main;
