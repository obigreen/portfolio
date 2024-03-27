import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Contact} from "./contact/Contact";
import {Container} from "../../../styles/Container";

import {S} from "./Contacts_Styles"

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <SectionTitle>contacts</SectionTitle>
                <FlexWrapper justify={'space-between'} gap={'15px'}>
                    <SectionText>I’m interested in freelance opportunities. However, if you have other request or
                        question,
                        don’t hesitate to contact me
                    </SectionText>
                    <Contact/>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};

