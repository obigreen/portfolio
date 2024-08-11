import React from 'react';
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";
import {MainPhoto} from "./mainphoto/MainPhoto";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Main_Styles"
import {AbsoluteBox} from "../../../components/absolute/AbsoluteBox";

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper justify={'space-between'} gap={'10px'}>
                    <FlexWrapper direction={'column'} position={'relative'} height={'max-content'} padding={'15px'} border={'15px'}>
                        <S.Title>Добро пожаловать на мой профессиональный сайт</S.Title>
                        <S.Description>Узнайте больше о моих работах, обо мне и как связаться со мной</S.Description>
                        <Button type={'submit'}>Contact me!!</Button>

                        {/*<AbsoluteBox width={'100px'} height={'70px'} bottom={'0'} right={'0'}/>*/}
                    </FlexWrapper>
                    <MainPhoto/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};





