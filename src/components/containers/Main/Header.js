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
`;

const Header = () => {
    return (
        <Container>
            <Link href='#skills'>01 SKILLS</Link>
            <Link href='#exp'>02 EXPERIENCE</Link>
            <Link href='#links'>03 LINKS</Link>
        </Container>
    );
};

export default Header;