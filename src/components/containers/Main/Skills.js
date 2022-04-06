import React from 'react';
import styled from 'styled-components';
import { paraisoDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Title from './Title';

const Container = styled.section`
`;

const Code = `
    INSERT INTO 
        People (name, age) 
    VALUES 
        ('Kasimova Karina', 20); 

    INSERT INTO 
        Skills (idPeople, name) 
    VALUES 
        (1, 'HTML'), 
        (1, 'CSS'), 
        (1, 'SCSS'), 
        (1, 'JavaScript'), 
        (1, 'Node'), 
        (1, 'React'), 
        (1, 'UI/UX'); 

    INSERT INTO 
        Software (idPeople, name)
    VALUES 
        (1, 'Visual Studio Code'), 
        (1, 'Figma'), 
        (1, 'Xcode'), 
        (1, 'Adobe Photoshop'), 
        (1, 'MacBook Pro 2017'); 
`;

const Skills = () => {
    return (
        <Container id='skills'>
            { Title("01", "SKILLS") }
            <SyntaxHighlighter 
                language = "sql" 
                style = { paraisoDark }
                customStyle = {{ backgroundColor: '#121212', borderRadius: '30px', fontSize: 'calc(0.5em + 1.5vw)', padding: 'calc(1rem + 1vw) 0 calc(2rem + 1vw) 0' }}
            > 
                { Code }
            </SyntaxHighlighter>
        </Container>
    );
};

export default Skills;