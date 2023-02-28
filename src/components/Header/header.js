import React, {useState} from 'react';
import "./header.scss"
import {BiShoppingBag} from "react-icons/bi";
import {FiSearch} from "react-icons/fi";
// import {AiOutlineClose} from "react-icons/ai";
import {CiSearch} from "react-icons/ci";
import {NavLink} from "react-router-dom";
// const cars = [ { name: 'Alfa Romeo'}];


const Header = () => {

    // const [search, setIsOpen] = useState('')
    const [search, setSearch] = useState(false)
    //
    // const inputRef = useRef<HTMLInputElement>null;
    //
    // const handleClick = () => {
    //     if(!isOpen) {
    //         inputRef.current?.focus();
    //     }
    //     setIsOpen(!Boolean(isOpen) ? "open" : "");
    // };
    //
    // const handleChange = e =>
    //     setSearch(e.target.value);
    //
    // const filteredCars = cars.filter(
    //     car =>
    //         search.length &&
    //         car.name.toLowerCase()
    //             .includes(search.toLowerCase())
    // );

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
                        <FiSearch className="header--icons__search"/>
                        <NavLink to={'/basket'}>
                            <BiShoppingBag className="header--icons__basket"/>
                        </NavLink>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;