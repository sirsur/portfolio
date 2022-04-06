import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    margin-top: 3rem;
    opacity: 87%;
`;

const Date = styled.p`
    font-size: 2em;
    font-weight: 300;
`;

const Title = styled.h1`
    font-size: 3.3em;
`;

const Description = styled.span`
    font-size: 2.7em;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:after {
        content: "";
        right: 32rem;
        top: 44.3rem;
        width: 0.4rem;
        height: 2.2rem;
        background: #FFFFFF;
        animation: cursor-blink 1s steps(2) infinite;
    }
`;

const Text = `
    i’m frontend developer 
    from saint-petersburg, russia. 
    currently junior frontend developer & 
    3rd year student. i have 4 years 
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