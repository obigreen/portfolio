import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Footer} from "./layout/footer/Footer";
import {ComplexBackground} from "./components/gradient/BallsBg";
import React from "react";


function App() {
    return (
        <div className="App">
            <ComplexBackground/>
            {/*<Header/>*/}
            <Main/>
            <Skills/>
            <Projects/>

            <AboutMe/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
