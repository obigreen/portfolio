import React, {useState} from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";


export const MobileMenu = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen}>
                <Menu setmenuIsOpen={setmenuIsOpen}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};