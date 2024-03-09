import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionText} from "../../../components/SectionText";

export const Contact = () => {
    return (
        <StyledContact>
            <Title>Message me here</Title>
            <FlexWrapper direction={'column'}>
                <SectionText>!Elias#3519</SectionText>
                <SectionText>elias@elias.me</SectionText>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.div`
outline: 1px solid gainsboro;
`
const Title = styled.h5`

`

