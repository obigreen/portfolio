import React from 'react';
import styled from "styled-components";
import Photo from '../../../../assets/img/photo-top.png'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import afte from "../../../../assets/img/pseudoelements/logo.svg"
import before from "../../../../assets/img/pseudoelements/dots.svg"


export const MainPhoto = () => {
    return (
        <MainProtoWrapper>
            <FlexWrapper direction={'column'} align={'center'}>
                <ImgWrapp>
                    <img src={Photo} alt=""/>
                </ImgWrapp>
                <ImgTitle>Currently working on <span>Portfolio</span></ImgTitle>
            </FlexWrapper>
        </MainProtoWrapper>
    );
};




const ImgWrapp = styled.div`
  display: flex;
  z-index: 0;
  position: relative;
  
  &::after {
    content: "";
    background-image: url(${afte});
    background-repeat: no-repeat;
    position: absolute;
    top: 85px;
    left: 0;
    width: 156px;
    height: 156px;
    z-index: -1;
  }
  
  &::before {
    content: "";
    background-image: url(${before});
    background-repeat: no-repeat;
    position: absolute;
    bottom: 60px;
    right: 15px;
    width: 84px;
    height: 84px;
  }
  
`
const MainProtoWrapper = styled.div`

`
const ImgTitle = styled.div`
  position: relative;
  padding: 8px 8px 8px 34px;
  color: ${theme.color.main};
  outline: 1px solid ${theme.color.main};
  max-width: 400px;
  width: 100%;
  margin-right: 15px;
  
  span {
    color: ${theme.color.mainFont};
    font-weight: bold;
  }
`

