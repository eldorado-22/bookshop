import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";
import Categories from "./pages/Categories/categories";
import Recent from "./pages/Recent/recent";
import Books from "./pages/Books/books";
import About from "./pages/About/about";
import Basket from "./pages/Basket/basket";
import DetailPage from "./pages/Detail-page/Detail-page";
import Hero from "./components/mainPage/Hero/hero";
import Genres from "./pages/Genres/Genres";
import {useState} from "react";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/detail-page/:bookId' element={<DetailPage/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;
