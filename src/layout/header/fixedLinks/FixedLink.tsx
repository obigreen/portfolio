import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {MediaLinks} from "../../../components/mediaLinks/MediaLinks";

export const FixedLink = () => {
    return (
        <FixedLinkStyled>
            <Line/>
            <MediaLinks/>
        </FixedLinkStyled>
    );
};

export const FixedLinkStyled = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 17px;
  top: -32px;
  background-color: rgba(40, 44, 51, 0.89);
  padding: 0 5px 5px 5px;
  
  @media ${theme.media.fixedLinks} {
    display: none;
  }
  
`
const Line = styled.div`
  width: 1px;
  height: 190px;
  background-color: ${theme.color.main};
  margin-bottom: 8px;
`