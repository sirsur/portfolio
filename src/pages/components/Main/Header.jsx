import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    flex-direction: column;
    font-weight: 900;
`;

const Link = styled.a`
    font-size: 2.5em;
    color: #a1a1a1;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #ffffff;
    }

    @media (max-width: 900px) {
        font-size: 1.5em;
    }
`;

const Header = () => {
    return (
        <Container>
            <Link href='#edu'>01 EDUCATION</Link>
            <Link href='#skills'>02 SKILLS</Link>
            <Link href='#projects'>03 PROJECTS</Link>
            <Link href='#exp'>04 EXPERIENCE</Link>
            <Link href='#links'>05 LINKS</Link>
        </Container>
    );
};

export default Header;
