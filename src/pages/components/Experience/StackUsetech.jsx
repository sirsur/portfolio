import React from 'react';
import styled from 'styled-components';
import { SiFigma, SiHtml5, SiCss3, SiVisualstudiocode } from 'react-icons/si';
import { BiSolidFileJson } from 'react-icons/bi';
import { DiPostgresql } from 'react-icons/di';

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

const StackUsetech = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <SiFigma size={'2.5em'} />
                <SiHtml5 size={'2.5em'} />
                <SiCss3 size={'2.5em'} />
                <BiSolidFileJson size={'2.5em'} />
                <DiPostgresql size={'2.5em'} />
                <SiVisualstudiocode size={'2.5em'} />
            </ContainerFlex>
        </Container>
    );
};

export default StackUsetech;
