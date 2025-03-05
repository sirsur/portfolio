import React, { useState, useEffect } from 'react';
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

const GridContainer = styled.div`
    height: 100%;
    display: grid;
    row-gap: 1rem;
    column-gap: 5%;
    grid-template-columns: repeat(2, 40%);
    grid-template-rows: auto auto auto auto auto auto auto;
    justify-content: center;
`;

const WideContainer = styled.div`
    padding: 10dvh calc(1.5rem + 2vw) 5dvh calc(1.5rem + 2vw);
`;

const Main = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

    const handleResize = () => {
        setIsWideScreen(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isWideScreen ? (
                <WideContainer id='top'>
                    <GridContainer>
                        <Header />
                        <AboutMe />
                        <Skills />
                        <Projects />
                        <Experience />
                        <Education />
                        <Links />
                        <Footer />
                    </GridContainer>
                </WideContainer>
            ) : (
                <>
                    <Preloader />
                    <Container id='top'>
                        <Header />
                        <AboutMe />
                        <Skills />
                        <Projects />
                        <Experience />
                        <Education />
                        <Links />
                        <Footer />
                    </Container>
                </>
            )}
        </>
    );
};

export default Main;
