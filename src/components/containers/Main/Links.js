import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.section`
`;

const Link = styled.div`
    display: flex;
    margin-top: 2rem;
    font-size: 2.5em;
`;

const A = styled.a`
    align-self: center;
    margin-left: 1rem;
    color: #A1A1A1;
    text-decoration: none;

    &:hover {
        color: #FFFFFF;
    }
`;

const Links = () => {
    return (
        <Container id='links'>
            { Title("03", "LINKS") }
            <Link>
                <img src={process.env.PUBLIC_URL + '/img/Telegram.svg'} alt='Telegram' height='60vh' />
                <A href='https:\\t.me/de4nny'>@de4nny</A>
            </Link>
            <Link>
                <img src={process.env.PUBLIC_URL + '/img/Github.svg'} alt='Github' height='60vh' />
                <A href='https:\\github.com/sirsur'>@sirsur</A>
            </Link>
            <Link>
                <img src={process.env.PUBLIC_URL + '/img/Instagram.svg'} alt='Instagram' height='60vh' />
                <A href='https:\\instagram.com/ynnaedgnikcuf'>@ynnaedgnikcuf</A>
            </Link>
            <Link>
                <img src={process.env.PUBLIC_URL + '/img/Mail.svg'} alt='Mail' height='60vh' />
                <p style={{ alignSelf: 'center', margin: '0 0 0 1rem' }}>casimowa.c2001@gmail.com</p>
            </Link>
        </Container>
    );
};

export default Links;