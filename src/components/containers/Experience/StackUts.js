import React from 'react';
import styled from 'styled-components';
import { SiFigma, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiAdobephotoshop, SiSass, SiVisualstudiocode } from 'react-icons/si';

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

const StackUts = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <SiFigma size={'3em'} />
                <SiHtml5 size={'3em'} />
                <SiCss3 size={'3em'} />
                <SiJavascript size={'3em'} />
                <SiNodedotjs size={'3em'} />
                <SiAdobephotoshop size={'3em'} />
                <SiSass size={'3em'} />
                <SiVisualstudiocode size={'3em'} />
            </ContainerFlex>
        </Container>
    );
};

export default StackUts;