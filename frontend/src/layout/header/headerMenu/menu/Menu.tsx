import React from 'react';
import {S} from "../HeaderMenu_Styles"

const items = [
    {
        title: "skills",
        href: "skills"
    },
    {
        title: "about-me",
        href: "about-me"
    },
    {
        title: "projects",
        href: "projects"
    },
]

export const Menu: React.FC<{ setmenuIsOpen?: (isOpen: boolean) => void }> = ({setmenuIsOpen}) => {

    const onMenuItemClick = () => {
        if (setmenuIsOpen) {
            setmenuIsOpen(false);
        }
    }

    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
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

