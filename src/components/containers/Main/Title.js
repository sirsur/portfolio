import React from 'react';
import styled from 'styled-components';

const Component = styled.span`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-weight: 900;
    align-items: baseline;
    justify-content: flex-start;
    margin: 5rem 0 2rem 0;
    opacity: 87%;
`;

const Title = (Number, Name) => {
    return (
        <Component>
            <h1 style={{ fontSize: '5em', opacity: '70%', margin: '0' }}>{ Number }</h1>
            <h1 style={{ fontSize: '7em', margin: '0' }}>{ Name }</h1>
        </Component>
    );
};

export default Title;