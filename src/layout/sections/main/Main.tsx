import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import MainPhoto from '../../../assets/img/photo-top.png'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <div>
                    <h1>Elias is a web designer and front-end developer</h1>
                    <p>He crafts responsive websites where technologies meet creativity</p>
                    <Button type={'submit'}>Contact me!!</Button>
                </div>
                <img src={MainPhoto} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
  min-height: 70vh;
`

