import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};

const Container = styled.section`
    grid-row: 2 / 5;
    grid-column: 1;
    margin-top: 3rem;
    opacity: 87%;

    img {
        border-radius: 2rem;
    }

    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slick-dots li button:before {
        color: #ffffff;
    }

    @media (min-width: 1024px) {
        margin-top: 0;
    }
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
    margin-bottom: 2rem;
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
    margin-top: 4rem;
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
    shortcomings, if any. A calm and reasonably reasonable 
    person. I respect the management and personal space.
`;

const ThirdText = `
    I will be glad to cooperate!
`;

const numbers = [1, 2, 3, 4, 5, 6];

const AboutMe = () => {
    return (
        <Container>
            <Date>16 march 2022, 17:45</Date>
            <Title>ABOUT ME</Title>
            <Description>
                <span>
                    {Text}also, u can download my cv{' '}
                    <a href='https://drive.google.com/file/d/16cVohqWMiHPuWSJHuI-sUinH4G-GjEC-/view?usp=share_link'>
                        here
                    </a>
                    .
                </span>
            </Description>
            <Slider {...settings}>
                {numbers.map((number) => (
                    <div key={number}>
                        <picture>
                            <source
                                media='(min-width: 1900px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 2x`
                                }
                            />
                            <source
                                media='(min-width: 1500px) and (max-width: 1899px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 2.5x`
                                }
                            />
                            <source
                                media='(min-width: 1025px) and (max-width: 1499px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 3.3x`
                                }
                            />
                            <source
                                media='(min-width: 1000px) and (max-width: 1024px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 2x`
                                }
                            />
                            <source
                                media='(min-width: 800px) and (max-width: 999px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 2.5x`
                                }
                            />
                            <source
                                media='(min-width: 600px) and (max-width: 799px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 3x`
                                }
                            />
                            <source
                                media='(min-width: 400px) and (max-width: 599px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 3.5x`
                                }
                            />
                            <source
                                media='(max-width: 399px) and (min-width: 355px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 4x`
                                }
                            />
                            <source
                                media='(max-width: 354px) and (min-width: 325px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 4.5x`
                                }
                            />
                            <source
                                media='(max-width: 324px)'
                                srcSet={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp 5x`
                                }
                            />
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    `/img/Pic${number}.webp`
                                }
                                alt={`Bio ${number}`}
                            />
                        </picture>
                    </div>
                ))}
            </Slider>
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
