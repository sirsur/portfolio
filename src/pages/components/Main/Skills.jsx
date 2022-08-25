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
        ('Kasimova Karina', 21); 

    INSERT INTO 
        Skills (idPeople, name) 
    VALUES 
        (1, 'HTML/CSS'), 
        (1, 'JS/TS'), 
        (1, 'SASS/SCSS'), 
        (1, 'MERN'), 
        (1, 'JSON/XML'), 
        (1, 'REST/FETCH'), 
        (1, 'SQL'), 
        (1, 'UI/UX'); 

    INSERT INTO 
        Software (idPeople, name)
    VALUES 
        (1, 'Visual Studio Code'), 
        (1, 'Figma'), 
        (1, 'Postman'), 
        (1, 'Jira'), 
        (1, 'MS/Postgres/MY/Mongo'), 
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
                customStyle = {{ backgroundColor: '#121212', borderRadius: '30px', fontSize: 'calc(0.5em + 1.5vw)', padding: 'calc(0.5rem + 1vw) 0 calc(1.5rem + 1vw) 0' }}
            > 
                { Code }
            </SyntaxHighlighter>
        </Container>
    );
};

export default Skills;