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

function App() {
    return (
        <>
            {/*<Hero/>*/}
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/categories' element={<Categories/>}/>
                {/*<Route path='/books' element={<Books/>}/>*/}
                {/*<Route path='/about' element={<About/>}/>*/}
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/detail-page/:id' element={<DetailPage/>}/>
            </Routes>
            <Books/>
            <Recent/>
            <About/>
        </>
    );
}

export default App;
