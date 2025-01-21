import React, {useEffect, useState} from 'react';
import {DesctopMenu} from "./headerMenu/desctopMenu/DesctopMenu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../styles/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import {useWindowSize} from "../../hooks/useWindowSize";


export const Header = () => {
    const width = useWindowSize();
    const breakpoint = 801;

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    <FlexWrapper align={'center'} gap={'32px'}>
                        {width < breakpoint ? <MobileMenu/> : <DesctopMenu/>}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};




