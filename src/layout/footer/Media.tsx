import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";

export const Media = () => {
    return (
        <StyledMedia>
            <Title>Media</Title>
            <FlexWrapper gap={'8px'}>
                <a href="">
                    <Icon iconId={'github'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
                <a href="">
                    <Icon iconId={'figma'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
                <a href="">
                    <Icon iconId={'discord'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
                </a>
            </FlexWrapper>

        </StyledMedia>
    );
};


const StyledMedia = styled.div`
  @media ${theme.media.mobile} {
    display: flex;
    gap: 60px;
  }
`
const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: ${theme.color.mainFont};
  margin-bottom: 12px;
`
