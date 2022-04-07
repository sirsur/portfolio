import React from 'react';
import styled from 'styled-components';

const Container = styled.div` 
    position: absolute; 
    padding: 2.5rem 2rem 0rem 2rem;
    width: 100vw;
    height: 100vh;
    font-size: 13vw;
    font-weight: 700;
    background-color: #2400FF;
`;

const Title = styled.p`
    margin: 0;
    opacity: 87%;
    animation-timing-function: ease-in;
`

const phrases = ['hello!', 'my name is karina', 'i’m frontend developer based in russia', 'and i madly in love with my job!'];

const List = phrases.map((phrase, i) => {
    if (i !== 2) {
        return (
            <Title key={'phrase_' + i}>{phrase}</Title> 
        );
    }
    return (
        <Title 
            key={'phrase_' + i}
            style={{ fontWeight: 400 }}
        >{phrase}</Title>
    );
});

const Preloader = () => {
    return (
        <Container style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/background.svg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}> 
            {List}
        </Container>
    );
};

export default Preloader;