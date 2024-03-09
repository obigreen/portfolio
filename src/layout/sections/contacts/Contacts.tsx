import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Contact} from "./Contact";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>contacts</SectionTitle>
            <FlexWrapper justify={'space-between'}>
                <SectionText>I’m interested in freelance opportunities. However, if you have other request or question,
                    don’t hesitate to contact me
                </SectionText>
                <Contact/>
            </FlexWrapper>


        </StyledContacts>
    );
};


export const StyledContacts = styled.section`

`
