import styled from "styled-components";
import {theme} from "../../styles/Theme";


const MediaLinksWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${theme.media.fixedLinks} {
    flex-direction: unset;
    position: absolute;
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

export const S = {
    MediaLinksWrapp
}