import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {SectionText} from "../../components/SectionText";
import {Media} from "./footerMedia/Media";
import {Container} from "../../styles/Container";

import {S} from "./Footer_Styles"

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <FlexWrapper direction={'column'}>
                        <FlexWrapper gap={'24px'} align={'center'}>
                            <Logo/>
                            <SectionText>elias@elias-dev.ml</SectionText>
                        </FlexWrapper>
                        <S.Description>Web designer and front-end developer</S.Description>
                    </FlexWrapper>
                    <Media/>
                </FlexWrapper>
                <FlexWrapper justify={'center'}>
                    <S.Copiright>© Copyright 2024. Made by Elias</S.Copiright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

