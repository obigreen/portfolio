import styled from "styled-components";
import {font} from "../../../styles/Common";
import {AccentAnimationCol, AccentAnimationBg} from "../../../styles/AccentAnimation";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../styles/Container";
import before from "../../../assets/img/pseudoelements/dot.svg"

// Main
const Main = styled.section`
    padding-top: 123px;
    padding-bottom: 56px;


    ${Container} > ${FlexWrapper} {
        @media ${theme.media.desctop} {
            flex-direction: column-reverse;
            gap: 60px;
        }
    }
`

const Title = styled.h1`
    background-color: rgba(250, 235, 215, 0.39);
    max-width: 500px;
    padding: 20px;
    ${font({weight: 600, maxW: 32, minW: 25})};
    color: ${theme.color.mainFont};

    span {
            // color: ${theme.color.accent};
            // animation: ${AccentAnimationCol} 12s linear infinite alternate;
    }
`

const Description = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 156%;
  color: ${theme.color.main};
  margin: 32px 0 24px 0;
`

// MainPhoto
const MainProtoWrapper = styled.div`

`

const ImgWrapp = styled.div`
  display: flex;
  z-index: 0;
  position: relative;

    
    //здесь дот через абсолют
  // &::before {
  //   content: "";
  //   background-image: url(${before});
  //   background-repeat: no-repeat;
  //   position: absolute;
  //   bottom: 60px;
  //   right: 15px;
  //   width: 84px;
  //   height: 84px;
  // }
`

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

export const S = {
    Main, Title, Description,
    MainProtoWrapper, ImgWrapp, IconAbsolutWrapp, Img, ImgTitle
}