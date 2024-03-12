import React from 'react';
import styled from "styled-components";
import {Container} from "../../../styles/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import arrow from "../../../assets/img/pseudoelements/arrows.svg"

export const Quote = () => {
    return (
        <StyledQuote>
            <Container>
                <FlexWrapper justify={'center'}>
                    <StyledBlockquote>
                        <QuoteText>With great power comes great electricity bill</QuoteText>
                        <Author>- Dr. Who</Author>
                    </StyledBlockquote>
                </FlexWrapper>

            </Container>

        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    padding-bottom: 74px;
`

const StyledBlockquote = styled.blockquote`
  display: flex;
  align-items: end;
  flex-direction: column;
  font-weight: 500;
  font-size: 24px;
  color: ${theme.color.mainFont};
`

const QuoteText = styled.p`
  padding: 32px;
  outline: 1px solid ${theme.color.main};
  position: relative;
  
  &::before {
    content: "";
    background-image: url(${arrow});
    background-repeat: no-repeat;
    width: 42px;
    height: 29px;
    
    position: absolute;
    top: -15px;
    left: 11px;
  }
`

const Author = styled.footer`
  padding: 16px;
  margin-top: 1px;
  outline: 1px solid ${theme.color.main};
  position: relative;

  &::before {
    content: "";
    background-image: url(${arrow});
    background-repeat: no-repeat;
    width: 42px;
    height: 29px;

    position: absolute;
    top: -15px;
    right: 11px;
  }
  
`


