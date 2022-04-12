import React from 'react';
import styled from 'styled-components';

const Container = styled.div` 
    z-index: 1;
    position: fixed; 
    overflow: hidden;
    padding: 2.5rem 2rem 0rem 2rem;
    width: 100vw;
    height: 100vh;
    font-size: 13vw;
    font-weight: 700;
    background-color: #2400FF;
    background-image: url(${process.env.PUBLIC_URL}/img/background.svg);
    animation: background-motion 15s, preloader-invisible 1s linear 7s forwards;
`;

const Title = styled.p`
    margin: 0;
    opacity: 0;
`;

const phrases = ['hello!', 'my name is karina', 'i’m frontend developer based in russia', 'and i madly in love with my job!'];

const List = phrases.map((phrase, i) => {
    if (i !== 2) {
        return (
            <Title 
                key={'phrase_' + i}
                style={{ animation: `preloader-visible 1s linear ${i+1}s forwards` }}
            >{phrase}</Title> 
        )
    } else if (i === 2) {
        return (
            <Title 
                key={'phrase_' + i}
                style={{ fontWeight: 400, animation: `preloader-visible 1s linear ${i+1}s forwards` }}
            >{phrase}</Title>
        );
    }
});


const Preloader = () => {
    return (
        <Container> 
            {List}
        </Container>
    );
};

export default Preloader;