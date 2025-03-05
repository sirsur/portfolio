import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    grid-column: 1 / 3;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    font-weight: 900;
`;

const Link = styled.a`
    font-size: calc(1.5em + 1vw);
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
            <Link href='#skills'>01 SKILLS</Link>
            <Link href='#projects'>02 PROJECTS</Link>
            <Link href='#exp'>03 EXPERIENCE</Link>
            <Link href='#edu'>04 EDUCATION</Link>
            <Link href='#links'>05 LINKS</Link>
        </Container>
    );
};

export default Header;
