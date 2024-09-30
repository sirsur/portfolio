import React from 'react';
import styled from 'styled-components';
import {
    SiAdobephotoshop,
    SiHtml5,
    SiCss3,
    SiFigma,
    SiStyledcomponents,
    SiNodedotjs,
    SiMongodb,
    SiVisualstudiocode,
} from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiReact } from 'react-icons/di';

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

const StackGrind = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <SiAdobephotoshop size={'2.5em'} />
                <SiFigma size={'2.5em'} />
                <SiHtml5 size={'2.5em'} />
                <SiCss3 size={'2.5em'} />
                <SiStyledcomponents size={'2.5em'} />
                <DiReact size={'2.5em'} />
                <BiLogoTypescript size={'2.5em'} />
                <SiNodedotjs size={'2.5em'} />
                <SiMongodb size={'2.5em'} />
                <SiVisualstudiocode size={'2.5em'} />
            </ContainerFlex>
        </Container>
    );
};

export default StackGrind;
