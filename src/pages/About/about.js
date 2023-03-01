import React from 'react';
import './about.scss';
import image9 from '../../components/image 9.png'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h1>About Us</h1>
                <div className="about">
                    <div className="about--left">
                        <img className="about--left__logoImg" src={image9} alt="img"/>
                    </div>
                    <div className="about--right">
                        <p>
                            We believe that books have the power to change lives, and we're dedicated to helping our customers find the perfect book for them. Whether you're looking for an escape from reality, an educational read, or a book to inspire you, we've got you covered.
                            Thank you for choosing to shop with us. We look forward to helping you discover your next favorite book!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;