import React from 'react';
import {S} from "../HeaderMenu_Styles"

type MenuProps = {
    setmenuIsOpen?: (isOpen: boolean) => void;
};


const items = [
    { id: "skills", title: "skills", href: "skills" },
    { id: "projects", title: "projects", href: "projects" },
    { id: "about-me", title: "about-me", href: "about-me" },
];

export const Menu = ({ setmenuIsOpen }: MenuProps) => {

    const onMenuItemClick = () => {
        if (setmenuIsOpen) {
            setmenuIsOpen(false);
        }
    }

    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={item.id}>
                    <S.NavLink activeClass={"active"}
                               to={item.href}
                               onClick={onMenuItemClick}
                               spy={true}
                               smooth={true}>{item.title}</S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

