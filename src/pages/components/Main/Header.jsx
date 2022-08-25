import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    flex-direction: column;
    font-weight: 900;
`;

const Link = styled.a`
    font-size: 2.5em;
    color: #A1A1A1;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #FFFFFF;
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
            <Link href='#links'>04 LINKS</Link>
        </Container>
    );
};

export default Header;