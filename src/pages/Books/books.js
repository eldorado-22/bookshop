import React, {useEffect, useState} from 'react';
import './books.scss';
import {NavLink} from "react-router-dom";
import Slider from 'react-slick'
import axios from "axios";

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

// AIzaSyD9GZ2jDqvbYKavrV6dJw1B1rcTcR9OLe0

const Books = () => {
    const [books, setBooks] = useState([])

    const getBooks=async ()=> {
        try {
            const res = await axios(`GET https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyD9GZ2jDqvbYKavrV6dJw1B1rcTcR9OLe0`)
           const {data} = await res
           await setBooks(data)
        }catch (e){
            console.log(e, 'error')
        }
    }

    useEffect(() => {
      getBooks()
    }, [])

    console.log(books)
    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="up">
                        <h1>Books</h1>
                        <NavLink to={'/'}>View all</NavLink>
                    </div>
                    <div className="down">
                        <Slider {...settings}>
                            {
                                books.map(el=>(
                                    <div className='books-cart'>
                                        <img src={el.image} alt="img"/>
                                        <h3>{el.name}</h3>
                                        <p>{el.desc}</p>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;