import styled, {css} from "styled-components";

type ButtonTypeProps = {
    width?: 'buttonWidth'
}

export const Button = styled.button<ButtonTypeProps>`
  border: 1px solid #c778dd;
  padding: 8px 16px;
  background: transparent;
  //font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  ${props => props.width === 'buttonWidth'&& css<ButtonTypeProps>`
    
    max-width: 171px;
  `}
`