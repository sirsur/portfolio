import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    justify-content: flex-end;
    font-size: 2em;
    margin-top: 8rem;
    text-align: end;
`;

const Component = styled.div`
    a:hover {
        color: #FFFFFF;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: #A1A1A1;

    &:hover {
        color: #FFFFFF;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Component>
                <Link href='#top'>back to top</Link>
                <p>
                    portfolio website -- 2022 
                    <br />
                    kasimova karina
                    <br />
                    code && design
                </p>
            </Component>
        </Container>
    );
};

export default Footer;