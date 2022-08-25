import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    margin-top: 3rem;
    opacity: 87%;
`;

const Date = styled.p`
    font-size: calc(0.7em + 2vw);
    font-weight: 300;
`;

const Title = styled.h1`
    font-size: calc(1.8em + 2vw);
    margin: 0 0 1rem 0;
`;

const Description = styled.span`
    font-size: calc(1.1em + 2vw);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:after {
        content: "";
        right: 32rem;
        top: 44.3rem;
        width: 0.2rem;
        height: 1.6rem;
        background: #FFFFFF;
        animation: cursor-blink 1s steps(2) infinite;
    }
`;

const Text = `
    i’m frontend developer 
    from saint-petersburg, russia. 
    currently junior frontend developer & 
    4rd year student. i have 2 years 
    experience in design & web development 
    and love what i do.
`;

const AboutMe = () => {
    return (
        <Container>
            <Date>16 march 2022, 17:45</Date>
            <Title>ABOUT ME</Title>
            <Description>
                {Text}
            </Description>
        </Container>
    );
}

export default AboutMe;