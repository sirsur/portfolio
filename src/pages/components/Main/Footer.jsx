import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    grid-column: 1;
    grid-row: 7;
    display: flex;
    align-self: end;
    justify-content: flex-end;
    font-size: calc(1em + 1vw);
    margin-top: 6rem;
    text-align: end;

    @media (min-width: 1024px) {
        justify-content: flex-start;
        text-align: start;
    }
`;

const Component = styled.div`
    a:hover {
        color: #ffffff;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: #a1a1a1;

    &:hover {
        color: #ffffff;
    }
`;

const Credits = styled.div`
    margin-top: 1rem;
`;

const Text = styled.p`
    margin: 0;
`;

const Footer = () => {
    return (
        <Container>
            <Component>
                <Link href='#top'>back to top</Link>
                <Credits>
                    <Text>portfolio website -- 2022</Text>
                    <Text>kasimova karina</Text>
                    <Text>code && design</Text>
                </Credits>
            </Component>
        </Container>
    );
};

export default Footer;
