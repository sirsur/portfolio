import React from 'react';
import styled from 'styled-components';
import { SiAdobephotoshop, SiHtml5, SiCss3, SiPhp, SiMysql, SiSublimetext } from 'react-icons/si';

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

const StackGrind = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <SiAdobephotoshop size={'2.5em'} />
                <SiHtml5 size={'2.5em'} />
                <SiCss3 size={'2.5em'} />
                <SiPhp size={'2.5em'} />
                <SiMysql size={'2.5em'} />
                <SiSublimetext size={'2.5em'} />
            </ContainerFlex>
        </Container>
    );
};

export default StackGrind;