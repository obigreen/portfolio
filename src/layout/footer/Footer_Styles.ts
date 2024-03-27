import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../styles/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


// Footer
const Footer = styled.footer`
  position: relative;
  z-index: 0;
  padding: 32px 0;
  border-top: 1px solid ${theme.color.main};

  ${Container} > ${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-direction: column;
      gap: 30px;
      align-items: start;
    }
  }

  ${Container} > ${FlexWrapper}:last-child {
    @media ${theme.media.mobile} {
      align-items: center;
    }
  }
`

const Copiright = styled.small`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.color.main};
  margin-top: 48px;
`
const Description = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 156%;
  color: ${theme.color.main};
  margin-top: 16px;
`

//Media
const Media = styled.div`
  @media ${theme.media.mobile} {
    display: flex;
    gap: 60px;
  }
`
const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: ${theme.color.mainFont};
  margin-bottom: 12px;
`

export const S = {
    Footer, Copiright, Description,
    Media, Title
}
