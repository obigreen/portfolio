import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../styles/Container";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import dotsbg from "../../../assets/img/pseudoelements/dotsbg.svg"


// Contacts
export const Contacts = styled.section`
  margin-bottom: 145px;
  position: relative;
  
  ${SectionTitle} {
    margin-bottom: 45px;
  }

  ${SectionText} {
    max-width: 505px;
    width: 100%;
  }

  &::before {
    content: '';
    background-image: url("${dotsbg}");
    position: absolute;
    width: 103px;
    height: 103px;
    background-color: transparent;
    left: calc(50% - 746px);
    top: 43%;
  }

  ${Container} > ${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-direction: column;
      gap: 30px;
    }
  }

  @media ${theme.media.mobile} {
    margin-bottom: 70px;
  }
`

// Contact
const Contact = styled.div`
  outline: 1px solid gainsboro;
  padding: 16px;
  max-width: max-content;
`
const Title = styled.h5`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.color.mainFont};
  margin-bottom: 16px;
`


export const S = {
    Contacts,
    Contact, Title
}