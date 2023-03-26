import React, {useEffect, useState} from 'react';
import './books.scss';
import {NavLink} from "react-router-dom";
import axios from "axios";


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

    console.log(books)
    
    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="up">
                        <h1>Books</h1>
                        <NavLink to={'/categories'}>View all</NavLink>
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