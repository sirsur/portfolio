import React from 'react';
import styled from 'styled-components';

const Component = styled.span`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    font-weight: 900;
    align-items: baseline;
    justify-content: flex-start;
    margin: calc(3rem + 2vw) 0 calc(1rem + 1vw) 0;
    opacity: 87%;
`;

const Title = (Number, Name) => {
    return (
        <Component>
            <h1 style={{ fontSize: 'calc(2.7em + 2vw)', opacity: '70%', margin: '0' }}>{ Number }</h1>
            <h1 style={{ fontSize: 'calc(3.5em + 2vw)', margin: '0' }}>{ Name }</h1>
        </Component>
    );
};

export default Title;