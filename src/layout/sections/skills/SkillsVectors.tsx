import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import {LogoCostruct} from "../../../components/LogoCostruct";
import {AccentAnimationCol} from "../../../styles/AccentAnimation";

type IconWrapperProps = {
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;

    width?: string
    height?: string
}

export const SkillsVectors = () => {
    return (
        <StyledVectors>
                <IconWrapper top="38px" left="0">
                    <Icon iconId={'dots'} width={'63'} height={'63'} wiewBox={'0 0 84 84'}/>
                </IconWrapper>
                <IconWrapper top="0" right="36px">
                    <Border width={'86px'} height={'86px'}/>
                </IconWrapper>
                <IconWrapper bottom="37px" right="0">
                    <Border width={'52px'} height={'52px'}/>
                </IconWrapper>
                <IconWrapper bottom="0" left="0">
                    <LogoCostruct/>
                </IconWrapper>
        </StyledVectors>
    );
};

const StyledVectors = styled.div`
  max-width: 349px;
  height: 300px;
  width: 100%;

  position: relative;

  @media ${theme.media.tablet} {
    max-width: 100%;
    height:400px;
  }
`



const IconWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  animation: ${AccentAnimationCol} 12s linear infinite alternate;
`

const Border = styled.div<IconWrapperProps>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border: 1px solid ${theme.color.main};
  background-color: transparent;
`

