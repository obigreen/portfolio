import './App.css';
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import React from "react";
import {Header} from "./layout/header/Header";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Footer} from "./layout/footer/Footer";
import {SKILL_ICON_VIEW_BOX, skillsData} from "./data/skillsData";
import iconSprite from "./assets/img/icons-sprite.svg";
import {useRotatingFavicon} from "./hooks/useRotatingFavicon";


function App() {
    useRotatingFavicon({
        icons: skillsData.technologies,
        spriteUrl: iconSprite,
        viewBox: SKILL_ICON_VIEW_BOX,
    });

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <AboutMe/>
            <Footer/>
        </div>
    );
}

export default App;
