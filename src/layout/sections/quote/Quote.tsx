import React from 'react';
import styled from "styled-components";

export const Quote = () => {
    return (
        <StyledQuote>
            <StyledBlockquote>
                <p>With great power comes great electricity bill</p>
                <footer>- Dr. Who</footer>
            </StyledBlockquote>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
  min-height: 30vh;
  display: flex;
  justify-content: center;
`

const StyledBlockquote = styled.blockquote`
  display: flex;
  align-items: end;
  flex-direction: column;
  
  padding: 32px;


  //font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  color: #fff;
`


