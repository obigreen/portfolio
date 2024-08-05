import React from 'react';
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";
import {MainPhoto} from "./mainphoto/MainPhoto";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper justify={'space-between'} gap={'10px'}>
                    <FlexWrapper direction={'column'}>
                        <S.Title>Добро пожаловать на мой профессиональный сайт</S.Title>
                        {/*<S.Description>He crafts responsive websites where technologies meet creativity</S.Description>*/}
                        {/*<Button type={'submit'}>Contact me!!</Button>*/}
                    </FlexWrapper>
                    <MainPhoto/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};





