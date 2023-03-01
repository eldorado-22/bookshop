import React from 'react';
import './footer.scss';
import {NavLink} from "react-router-dom";
import {BsFacebook, BsFillTelephoneFill, BsInstagram, BsTwitter} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import {BiMap} from "react-icons/bi";
import {RiBook3Fill, RiBookFill, RiBookMarkFill, RiContactsBook2Fill} from "react-icons/ri";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">

                    <div className="footer--sign-up">
                        <h5>Sign up for our newsletter</h5>
                        {/*<p>Be the first to know about our special offers, news, and updates.</p>*/}
                        <div className="footer--sign-up__input">
                            <input text="text" placeholder="Email Address"/>
                            <p className="footer--sign-up__input--exit">Sign Up</p>
                        </div>
                    </div>

                    {/*<nav className="footer--home">*/}
                    {/*    <NavLink to={'/'}>*/}
                    {/*        <h5>Home</h5>*/}
                    {/*    </NavLink>*/}
                    {/*    <a href="#">Lorem</a>*/}
                    {/*    <a href="#">Lorem</a>*/}
                    {/*    <a href="#">Lorem</a>*/}
                    {/*    <a href="#">Lorem</a>*/}
                    {/*</nav>*/}

                    {/*<nav className="footer--categories">*/}
                    {/*    <NavLink to={'/categories'}>*/}
                    {/*        <h5>Categories</h5>*/}
                    {/*    </NavLink>*/}
                    {/*    <a href="#">Lorem</a>*/}
                    {/*    <a href="#">Lorem</a>*/}
                    {/*    <a href="#">Lorem</a>*/}
                    {/*    <a href="#">Lorem</a>*/}
                    {/*</nav>*/}

                    <nav className="footer--contact">
                        <h5>Contact</h5>
                        <div className="footer--contact__ema-group">
                            <a href="tel: 777 777 777" className="footer--contact__ema-group--phone">
                                <BsFillTelephoneFill className="footer--contact__ema-group--phone__tel"/>
                                +(996) 777 777 777
                            </a>
                            <a href="email" className="footer--contact__ema-group--email">
                                <SiGmail className="footer--contact__ema-group--email__gmail"/>
                                motionweb@gmail.com
                            </a>
                        </div>

                        <div className="footer--contact__social">
                            <a href="https://www.instagram.com/motion_web/"
                               className="footer--contact__social--instagram">
                                <BsInstagram className="footer--contact__social--instagram__icon"/>
                            </a>
                            <a href="https://www.facebook.com/"
                               className="footer--contact__social--facebook">
                                <BsFacebook className="footer--contact__social--facebook__icon"/>
                            </a>
                            <a href="https://www.twitter.com/" className="footer--contact__social--twitter">
                                <BsTwitter className="footer--contact__social--twitter__icon"/>
                            </a>
                        </div>

                    </nav>

                    <nav className="footer--address">
                        <h2>Address</h2>
                        <p>Kyrgyzstan Bishkek</p>
                        <a className="footer--address__map"
                           href="https://www.google.com/maps/place/Motion+Web/@42.8797851,74.5833385,17z/data=!3m1!4b1!4m6!3m5!1s0x389ec9fc655f0bb9:0x20d210594faeb18!8m2!3d42.8797851!4d74.5855272!16s%2Fg%2F11nf_2wmrw">
                            <BiMap className="footer--address__map--location"/>
                            Turusbekov: 109/3
                        </a>
                    </nav>


                </div>
            </div>
            <div className="burger-menu">
                <div className="footer--burger-menu__genres">
                    <RiBookMarkFill className="footer--burger-menu__genres--like"/>
                    <NavLink to={''}>
                        <p>Genres</p>
                    </NavLink>
                </div>
                <div className="footer--burger-menu__newB">
                    <RiBook3Fill className="footer--burger-menu__newB--news"/>
                    <p>New</p>
                </div>
                <div className="footer--burger-menu__books">
                    <RiBookFill className="footer--burger-menu__books--book"/>
                    <p>Books</p>
                </div>
                <div className="footer--burger-menu__about">
                    <RiContactsBook2Fill className="footer--burger-menu__about--prof"/>
                    <p>About</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;