import React, {useEffect, useState} from 'react';
import './books.scss';
import {NavLink} from "react-router-dom";
import axios from "axios";


const Books = () => {

    const [book, setBook] = useState([])
    const getBooks = async () => {
        const url = await axios.get(`https://bookshopmotion.herokuapp.com/product/books`)
        const {data} = await url
        setBook(data)
    }

    useEffect(() => {
        getBooks()
    }, [])


    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="up">
                        <h1>Books</h1>
                        <NavLink to={'/categories'}>View all</NavLink>
                    </div>
                    <div className="down">
                        {
                            book.slice(0, 15).map(el => (
                                <div className='cart'>
                                    <div className="block">
                                        <img src={el.image} style={{
                                            width: '200px',
                                            height: '300px',
                                            borderRadius: "8px"
                                        }} alt=""/>
                                        <h1>{el.name}</h1>
                                        <h5>Aleksandr Makadonski</h5>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;