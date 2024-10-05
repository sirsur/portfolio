import React from 'react';
import styled from 'styled-components';
import {
    SiHtml5,
    SiCss3,
    SiNextdotjs,
    SiFigma,
    SiVisualstudiocode,
} from 'react-icons/si';

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
    padding: 0 3.7rem 0 4.7rem;
    position: relative;
`;

/*
TODO: make icons with new stack and also adaptive
*/

const StackAuto = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <SiFigma size={'2.5em'} />
                <SiHtml5 size={'2.5em'} />
                <SiCss3 size={'2.5em'} />
                <SiNextdotjs size={'2.5em'} />
                <SiVisualstudiocode size={'2.5em'} />
            </ContainerFlex>
        </Container>
    );
};

export default StackAuto;
