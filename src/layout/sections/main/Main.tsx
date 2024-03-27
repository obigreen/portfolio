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
                <FlexWrapper align={'center'} justify={'space-between'} gap={'10px'}>
                    <FlexWrapper direction={'column'}>
                        <S.Title>Elias is a <span>web designer</span> and <span>front-end developer</span></S.Title>
                        <S.Description>He crafts responsive websites where technologies meet creativity</S.Description>
                        <Button type={'submit'}>Contact me!!</Button>
                    </FlexWrapper>
                    <MainPhoto/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};





