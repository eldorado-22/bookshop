import React, {useEffect, useState} from 'react';
import './books.scss';
import {NavLink} from "react-router-dom";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const Books = () => {

    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="up">
                        <h1>Books</h1>
                        <NavLink to={'/'}>View all</NavLink>
                    </div>
                    <div className="down">
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;