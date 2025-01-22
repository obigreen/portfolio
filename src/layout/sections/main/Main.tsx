import React from 'react';
import {Container} from "../../../styles/Container";
import {MainPhoto} from "./mainphoto/MainPhoto";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Main_Styles"


export const Main = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper justify={'space-between'} gap={'10px'}>
                    <FlexWrapper direction={'column'} position={'relative'} height={'max-content'} padding={'15px'} background={"#1e1f23c4"} maxWidth={'500px'}>
                        <S.Title>Добро пожаловать на мой профессиональный сайт</S.Title>
                        <S.Description>Узнайте больше о моих работах, обо мне и о способах связи</S.Description>
                    </FlexWrapper>
                    <MainPhoto/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};





