import React from 'react';
import styled from 'styled-components';

const Container = styled.div` 
    background-color: #2400FF;
    font-size: 7em;
    font-weight: 700;
    padding-top: 8rem;
    padding-left: 2rem;
    padding-right: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
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