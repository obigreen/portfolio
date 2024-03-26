import React from 'react';
import styled from "styled-components";
import {AccentAnimationBorder} from "../styles/AccentAnimation";
import {FlexWrapper} from "./FlexWrapper";

export const LogoCostruct = () => {
    return (
        <LogoCostructWrapp>
            <FlexWrapper justify={'end'} align={'center'}>
                <Interior/>
            </FlexWrapper>
            <FlexWrapper justify={'start'} align={'center'}>
                <Interior/>
            </FlexWrapper>
        </LogoCostructWrapp>
    );
};

export const LogoCostructWrapp = styled.div`
  width: max-content;
  height: max-content;
  display: flex;

  ${FlexWrapper} {
    height: 112px;
    width: 76px;
    outline: 1px solid;
    animation: ${AccentAnimationBorder} 12s linear infinite alternate;
  }

  ${FlexWrapper}:first-child {
    margin-top: 38px;
  }

  ${FlexWrapper}:last-child {
    margin-left: 1px;

  }
`

const Interior = styled.div`
  width: 38px;
  height: 37px;
  outline: 1px solid;
  animation: ${AccentAnimationBorder} 12s linear infinite alternate;
`

