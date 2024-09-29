import React from 'react';
import styled from 'styled-components';
import {
    SiFigma,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodedotjs,
    SiAdobephotoshop,
    SiSass,
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

const StackUts = () => {
    return (
        <Container className='exp'>
            <ContainerFlex>
                <SiFigma size={'2.5em'} />
                <SiHtml5 size={'2.5em'} />
                <SiCss3 size={'2.5em'} />
                <SiJavascript size={'2.5em'} />
                <SiNodedotjs size={'2.5em'} />
                <SiAdobephotoshop size={'2.5em'} />
                <SiSass size={'2.5em'} />
                <SiVisualstudiocode size={'2.5em'} />
            </ContainerFlex>
        </Container>
    );
};

export default StackUts;
