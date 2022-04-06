import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    overflow: scroll;
    margin-top: 2rem;
    position: relative;
    width: 100vw;
    right: 2.4rem;
`;

const ContainerFlex = styled.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: fit-content;
    padding: 0 4rem 0 4.4rem;
    position: relative;

    img {
        height: 4rem;
    }
`;

const StackUts = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <img
                src={process.env.PUBLIC_URL + '/img/Figma.svg'} 
                alt="Item"
                />
                <img
                src={process.env.PUBLIC_URL + '/img/Html.svg'} 
                alt="Item"
                />
                <img
                src={process.env.PUBLIC_URL + '/img/CSS.svg'} 
                alt="Item"
                />
                <img
                src={process.env.PUBLIC_URL + '/img/JavaScript.svg'} 
                alt="Item"
                />
                <img
                src={process.env.PUBLIC_URL + '/img/Node.svg'} 
                alt="Item"
                />
                <img
                src={process.env.PUBLIC_URL + '/img/Photoshop.svg'} 
                alt="Item"
                />
                <img
                src={process.env.PUBLIC_URL + '/img/Sass.svg'} 
                alt="Item"
                />
                <img
                src={process.env.PUBLIC_URL + '/img/VSCode.svg'} 
                alt="Item"
                />
            </ContainerFlex>
        </Container>
    );
};

export default StackUts;