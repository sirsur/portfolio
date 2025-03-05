import React from 'react';
import styled from 'styled-components';
import { SiFigma, SiHtml5, SiVisualstudiocode, SiMui } from 'react-icons/si';
import { DiDotnet, DiPostgresql, DiReact } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';

const Container = styled.div`
    overflow: scroll;
    margin-top: 2rem;
    position: relative;
    width: 100vw;
    right: 2.4rem;

    @media (min-width: 1024px) {
        width: 46vw;
        right: 8rem;
    }
`;

const ContainerFlex = styled.span`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: fit-content;
    padding: 0 3.7rem 0 4.7rem;
    position: relative;

    @media (min-width: 1024px) {
        padding: 0 0 0 35%;
    }
`;

const StackSigma = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <SiFigma size={'2.5em'} />
                <SiHtml5 size={'2.5em'} />
                <SiMui size={'2.5em'} />
                <DiDotnet size={'2.5em'} />
                <BiLogoTypescript size={'2.5em'} />
                <DiPostgresql size={'2.5em'} />
                <DiReact size={'2.5em'} />
                <SiVisualstudiocode size={'2.5em'} />
            </ContainerFlex>
        </Container>
    );
};

export default StackSigma;
