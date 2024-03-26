import React from 'react';
import styled from "styled-components";
import Photo from '../../../../assets/img/photo-top.png'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import before from "../../../../assets/img/pseudoelements/dot.svg"
import {AccentAnimationBg, AccentAnimationCol} from "../../../../styles/AccentAnimation";
import {LogoCostruct} from "../../../../components/LogoCostruct";


export const MainPhoto = () => {
    return (
        <MainProtoWrapper>

            <FlexWrapper direction={'column'} align={'center'}>
                <ImgWrapp>
                    <IconAbsolutWrapp>
                        <LogoCostruct/>
                    </IconAbsolutWrapp>
                    <Img src={Photo} alt=""/>
                </ImgWrapp>
                <ImgTitle>Currently working on <span>Portfolio</span></ImgTitle>
            </FlexWrapper>
        </MainProtoWrapper>
    );
};

const IconAbsolutWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 85px;
  left: 0;
  z-index: -1;
  width: 156px;
  height: 156px;
  animation: ${AccentAnimationCol} 12s linear infinite alternate;


  @media ${theme.media.mobile} {
    top: 0;
  }

`

const ImgWrapp = styled.div`
  display: flex;
  z-index: 0;
  position: relative;

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


const Img = styled.img`

  @media ${theme.media.mobile} {
    width: 350px;
  }

`

const ImgTitle = styled.div`
  position: relative;
  padding: 8px 8px 8px 34px;
  color: ${theme.color.main};
  outline: 1px solid ${theme.color.main};
  max-width: 400px;
  width: 100%;
  margin-right: 15px;

  @media ${theme.media.mobile} {
    width: 330px;
    margin-right: 0;
  }

  span {
    color: ${theme.color.mainFont};
    font-weight: bold;
  }

  &:before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
    animation: ${AccentAnimationBg} 12s linear infinite alternate;
  }
`

