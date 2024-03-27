import styled from "styled-components";
import {theme} from "../../styles/Theme";

const LogoLinkWrapp = styled.a`
  position: relative;
  z-index: 9999;
  display: flex;
  align-items: center;
  height: 30px;
`

const LogoText = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.color.mainFont};
  margin-left: 8px;
`

export const S = {
    LogoLinkWrapp, LogoText
}
