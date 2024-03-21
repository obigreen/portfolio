import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {AccentAnimationCol} from "../../../styles/AccentAnimation";
import {Lang} from "../lang/Lang";
import {MediaLinks} from "../../../components/mediaLinks/MediaLinks";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>

            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <List key={index}>
                            <Link href="">{item}</Link>
                        </List>
                    })}
                    <List>
                        <Lang/>
                    </List>
                </ul>

            </MobileMenuPopup>
                <MediaLinks/>

        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`


const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  background-color: ${theme.color.backround};
  display: none;

  padding: 100px 16px;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: start;
  `}
  ul {
    display: flex;
    gap: 42px;
    flex-direction: column;
    align-items: start;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 31px;
  right: 10px;
  width: 30px;
  height: 30px;
  z-index: 9999;

  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${theme.color.mainFont};
    position: absolute;


    ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: translateY(0) rotate(45deg);
    `}
    &::before {
      content: '';
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.color.mainFont};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0) rotate(-90deg);
      `}
    }
  }
`


const List = styled.li`
  font-weight: 400;
  font-size: 32px;
  color: ${theme.color.main};
`
const Link = styled.a`
  &:hover {
    color: ${theme.color.mainFont};
    font-weight: bold;
  }

  &::before {
    content: '#';
    animation: ${AccentAnimationCol} 12s linear infinite alternate;
  }
`