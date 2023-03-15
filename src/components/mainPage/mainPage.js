import React from 'react';
import './mainPage.scss';
import Hero from "./Hero/hero";
import Books from "../../pages/Books/books";
import Recent from "../../pages/Recent/recent";
import About from "../../pages/About/about";
import Genres from "../../pages/Genres/Genres";

const MainPage = () => {
    return (
        <div>
            <Hero/>
            <Genres/>
            <Recent/>
            <Books/>
            <About/>
        </div>
    );
};

export default MainPage;