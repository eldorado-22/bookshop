import React, {useState} from 'react';
import "./header.scss"
import {BiMenuAltRight, BiShoppingBag} from "react-icons/bi";
import {FiSearch} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import BurgerMenu from "../BurgerMenu/burgerMenu";



const Header = () => {

    const [search, setSearch] = useState(true)
    const [burger, setBurger] = useState(false)

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <nav className="header--nav">
                        <NavLink to={'/'}>
                            <h1>Bookshop</h1>
                        </NavLink>
                        <nav className="header--nav__col">
                            <NavLink to={'categories'}>
                                <a href="#">Categories</a>
                            </NavLink>
                            <NavLink to={'recent'}>
                                <a href="#">Recent</a>
                            </NavLink>
                            <NavLink to={'books'}>
                                <a href="#">Books</a>
                            </NavLink>
                            <NavLink to={'about'}>
                                <a href="#">About Us</a>
                            </NavLink>
                        </nav>
                    </nav>

                    <nav className="header--icons">
                        <div style={{
                            background: search ? 'transparent' : ''
                        }} className='header--icons__search'>
                            <FiSearch onClick={() => setSearch(!search)} className="header--icons__search--icon"/>
                            <input style={{
                                width: search ? '' : '120px'
                            }} text="text"/>
                        </div>

                        <NavLink to={'/basket'}>
                            <BiShoppingBag style={{
                                paddingTop: '1px',
                                paddingBottom: '4px',
                                fontSize: '25px'
                            }} className="header--icons__basket"/>
                        </NavLink>
                    </nav>
                    <BiMenuAltRight className='header--nav__icon' onClick={() => setBurger(true)}/>

                    <BurgerMenu burger={burger} setBurger={setBurger}/>
                </div>
            </div>

        </header>
    );
};

export default Header;