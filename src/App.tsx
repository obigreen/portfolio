import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Quote} from "./layout/sections/quote/Quote";
import {Projects} from "./layout/sections/projects/Projects";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
            <Main/>
            <Quote/>
            <Projects/>

            <AboutMe/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
