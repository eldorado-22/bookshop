import React from 'react';
import './hero.scss';

const Hero = () => {
    return (
        <section id="hero">
            <div className="fon">
                <div className="container">
                    <div className="hero">
                        <h1>Welcome to our Bookshop</h1>
                        <p>A place where you can get all the books you want!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;