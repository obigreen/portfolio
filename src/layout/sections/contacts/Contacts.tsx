import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Contact} from "./Contact";
import {Container} from "../../../styles/Container";
import dotsbg from "../../../assets/img/pseudoelements/dotsbg.svg"
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>contacts</SectionTitle>
                <FlexWrapper justify={'space-between'} gap={'15px'}>
                    <SectionText>I’m interested in freelance opportunities. However, if you have other request or question,
                        don’t hesitate to contact me
                    </SectionText>
                    <Contact/>
                </FlexWrapper>
            </Container>

        </StyledContacts>
    );
};


export const StyledContacts = styled.section`
  ${SectionTitle} {
    margin-bottom: 45px;
  }

  ${SectionText} {
    max-width: 505px;
    width: 100%;
  }
  
  ${Container}>${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-direction: column;
      gap: 30px;
    }
  }
  
  margin-bottom: 145px;
  position: relative;

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
  
  @media ${theme.media.mobile} {
    margin-bottom: 70px;
  }

`
