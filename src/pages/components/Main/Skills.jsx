import React from 'react';
import styled from 'styled-components';
import { paraisoDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Title from './Title';

const Container = styled.section`
    grid-row: 2 / 4;
    grid-column: 2;
    min-height: 100px;
    align-self: end;
`;

const Code = `
    INSERT INTO 
        People (name, age) 
    VALUES 
        ('Kasimova Karina', 23); 

    INSERT INTO 
        Skills (idPeople, name) 
    VALUES 
        (1, 'HTML/CSS'), 
        (1, 'REACT/NEXT'), 
        (1, 'JS/TS'), 
        (1, 'SASS/SCSS'),
        (1, 'JSON/XML/XSD'), 
        (1, 'REST/FETCH'), 
        (1, 'NODE/EXPRESS/APOLLO'), 
        (1, 'MS/POSTGRES/MY/MONGO'),
        (1, 'SQL'), 
        (1, 'UI/UX'); 

    INSERT INTO 
        Software (idPeople, name)
    VALUES 
        (1, 'Visual Studio Code'), 
        (1, 'Figma'), 
        (1, 'Adobe Photoshop'), 
        (1, 'Postman'), 
        (1, 'Jira/Conf'),  
        (1, 'MacBook Pro 2021'); 
`;

const Skills = () => {
    return (
        <Container id='skills'>
            {Title('01', 'SKILLS')}
            <SyntaxHighlighter
                language='sql'
                style={paraisoDark}
                customStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#121212',
                    borderRadius: '30px',
                    fontSize: 'calc(0.4em + 1vw)',
                    padding: 'calc(0.5rem + 1vw) 0 calc(1.5rem + 1vw) 0',
                    margin: '0',
                }}
            >
                {Code}
            </SyntaxHighlighter>
        </Container>
    );
};

export default Skills;
