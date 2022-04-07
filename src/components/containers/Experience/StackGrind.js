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
    padding: 0 4rem 0 4.4rem;
    position: relative;
`;

const StackGrind = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <SiAdobephotoshop size={'3em'} />
                <SiHtml5 size={'3em'} />
                <SiCss3 size={'3em'} />
                <SiPhp size={'3em'} />
                <SiMysql size={'3em'} />
                <SiSublimetext size={'3em'} />
            </ContainerFlex>
        </Container>
    );
};

export default StackGrind;