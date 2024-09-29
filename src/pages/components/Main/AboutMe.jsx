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

    a {
        color: #a1a1a1;
        text-decoration: none;
    }
`;

const DescriptionAfter = styled.span`
    font-size: calc(1.1em + 2vw);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:after {
        content: '';
        right: 32rem;
        top: 44.3rem;
        width: 0.2rem;
        height: 1.6rem;
        background: #ffffff;
        animation: cursor-blink 1s steps(2) infinite;
    }

    a {
        color: #a1a1a1;
        text-decoration: none;
    }
`;

const Photos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
`;

const Text = `
    i’m frontend developer 
    from surgut, russia. 
    currently junior frontend developer. i have 4 years 
    experience in design & web development 
    and love what i do. 
`;

const SecondText = `
    As a responsible employee with a genuine passion 
    for my profession I always complete the work on time 
    and with high quality. Sociable, not conflicted, 
    I adequately perceive criticism and am fully 
    responsible for introspection and correction of 
    shortcomings, if any. I appreciate the development 
    and provision of opportunities for additional earnings 
    and career growth. A calm and reasonably reasonable 
    person. I respect the management and personal space. 
    I had an exceptionally positive experience and good 
    relations with my superiors.
`;

const ThirdText = `
    I will be glad to cooperate!
`;

const AboutMe = () => {
    return (
        <Container>
            <Date>16 march 2022, 17:45</Date>
            <Title>ABOUT ME</Title>
            <Description>
                <span>
                    {Text}also, u can download my cv{' '}
                    <a href='https://drive.google.com/file/d/1JavwMkWwI8XatI_lJl3k04G9lx4GLj8h/view?usp=sharing'>
                        here
                    </a>
                    .
                </span>
            </Description>
            <Photos>
                <picture>
                    <source
                        srcSet={process.env.PUBLIC_URL + '/img/Me1.svg 2.5x'}
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/img/Me1.svg'}
                        alt='First screen'
                    />
                </picture>
                <picture>
                    <source
                        srcSet={process.env.PUBLIC_URL + '/img/Me2.svg 2.5x'}
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/img/Me2.svg'}
                        alt='First screen'
                    />
                </picture>
            </Photos>
            <DescriptionAfter>
                {SecondText}
                <br />
                <br />
                {ThirdText}
            </DescriptionAfter>
        </Container>
    );
};

export default AboutMe;
