import React from 'react';
import './categories.scss';
const Categories = () => {
    return (
        <div id='categories'>
            <div className="container">
                <div className="categories">
                    <div className="up">
                        <h1>All Books</h1>
                        <p>Here you can find all the books you need</p>
                    </div>
                    <div className="down">
                        <div className="content1">
                            <div className="cow">
                                <div className="xaxa">
                                    <h4>Filters</h4>
                                    <span>Clear filters</span>
                                </div>
                            </div>
                            <div className="cow1">
                                <h5>Sort By</h5>
                                <select name="Book" id="">
                                    <option value="s1" selected>Popular</option>
                                    <option value="s2">Book</option>
                                    <option value="s3">Book</option>
                                    <option value="s4">Book</option>
                                </select>
                            </div>
                        </div>
                        <div className="content2"><h5 style={{
                            fontWeight: '700',
                            fontSize: '16px',
                            padding:'20px 0'
                        }}>Genres</h5></div>
                        <div className="content3">
                            <div className="left">
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding'>Autographed Books</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding0'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding0'>Sci-Fi</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding1'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding1'>For kids</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding2'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding2'>For teenagers</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding3'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding3'>Finance</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding4'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding4'>Detective</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding5'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding5'>Romantic</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding6'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding6'>Psychology</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding7'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding7'>Self-Improvement</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding8'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding8'>Educational</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding9'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding9'>Literature</label>
                                </div>
                                <div className="block">
                                    <input className='real-radio' type="radio" name='category' id='cat-coding10'/>
                                    <span className='custom-radio'></span>
                                    <label htmlFor='cat-coding10'>Religion</label>
                                </div>

                            </div>
                            <div className="right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;