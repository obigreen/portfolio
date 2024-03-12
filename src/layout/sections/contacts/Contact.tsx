import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionText} from "../../../components/SectionText";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Contact = () => {
    return (
        <StyledContact>
            <Title>Message me here</Title>
            <FlexWrapper direction={'column'}>
                <FlexWrapper align={'center'} gap={'8px'}>
                    <Icon iconId={'discord'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                    <SectionText>!Elias#3519</SectionText>
                </FlexWrapper>
              <FlexWrapper align={'center'} gap={'8px'}>
                  <Icon iconId={'mail'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                  <SectionText>elias@elias.me</SectionText>
              </FlexWrapper>

            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.div`
  outline: 1px solid gainsboro;
  padding: 16px;

`
const Title = styled.h5`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.color.mainFont};
  margin-bottom: 16px;
`

