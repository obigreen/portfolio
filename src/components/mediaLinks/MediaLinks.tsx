import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const MediaLinks = () => {
    return (
        <MediaLinksWrapp>
            <a href="">
                <Icon iconId={'github'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
            <a href="">
                <Icon iconId={'figma'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
            <a href="">
                <Icon iconId={'discord'} width={'32'} height={'32'} wiewBox={'0 0 32 32'}/>
            </a>
        </MediaLinksWrapp>
    );
};

const MediaLinksWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${theme.media.fixedLinks} {
    flex-direction: unset;
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 20px;


    svg {
      width: 50px;
      height: 50px;
    }


  }
`