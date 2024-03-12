import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../styles/Container";
import {theme} from "../../../styles/Theme";
import {MainPhoto} from "./mainphoto/MainPhoto";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <FlexWrapper direction={'column'}>
                        <Title>Elias is a <span>web designer</span> and <span>front-end developer</span></Title>
                        <Description>He crafts responsive websites where technologies meet creativity</Description>
                        <Button type={'submit'}>Contact me!!</Button>
                    </FlexWrapper>
                    <MainPhoto></MainPhoto>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  padding-top: 123px;
  padding-bottom: 112px;
`
const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  color: ${theme.color.mainFont};

  span {
    color: ${theme.color.accent};
  }
`


const Description = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 156%;
  color: ${theme.color.main};
  margin: 32px 0 24px 0;
`



