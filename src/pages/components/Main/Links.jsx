import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.section`
`;

const Link = styled.div`
    display: flex;
    margin-top: 2rem;
    font-size: calc(1em + 2vw);

    a {
        align-self: center;
        margin-left: 0.7rem;
        color: #A1A1A1;
        text-decoration: none;

        &:hover {
            color: #FFFFFF;
        }
    }

    p {
        align-self: center;
        margin: 0 0 0 0.7rem;
    }
`;

/*
TODO: make adaptive icons near links
*/

const Links = () => {
    return (
        <Container id='links'>
            { Title("04", "LINKS") }
            <Link>
                <img src={process.env.PUBLIC_URL + '/img/Telegram.svg'} alt='Telegram' height='35vh' />
                <a href='https:\\t.me/de4nny'>@de4nny</a>
            </Link>
            <Link>
                <img src={process.env.PUBLIC_URL + '/img/Github.svg'} alt='Github' height='35vh' />
                <a href='https:\\github.com/sirsur'>@sirsur</a>
            </Link>
            <Link>
                <img src={process.env.PUBLIC_URL + '/img/Instagram.svg'} alt='Instagram' height='35vh' />
                <a href='https:\\instagram.com/ynnaedgnikcuf'>@ynnaedgnikcuf</a>
            </Link>
            <Link>
                <img src={process.env.PUBLIC_URL + '/img/Mail.svg'} alt='Mail' height='35vh' />
                <p style={{marginTop: '-0.5rem'}}>casimowa.c2001<br />@gmail.com</p>
            </Link>
        </Container>
    );
};

export default Links;