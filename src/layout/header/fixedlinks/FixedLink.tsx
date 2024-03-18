import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";

export const FixedLink = () => {
    return (
        <FixedLinkStyled>
            <Line/>
            <a href="">
                <Icon iconId={'github'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
            <a href="">
                <Icon iconId={'figma'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
            <a href="">
                <Icon iconId={'discord'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
        </FixedLinkStyled>
    );
};

const FixedLinkStyled = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 17px;
  top: -32px;
  background-color: rgba(40, 44, 51, 0.89);
  padding: 0 5px 5px 5px;
`
const Line = styled.div`
  width: 1px;
  height: 190px;
  background-color: ${theme.color.main};
  margin-bottom: 8px;
`