import React from 'react';
import {NavLink} from "react-router-dom";
import './genres.scss'
import category1 from '../../components/Sci-Fi.png'
import category2 from '../../components/For kids.png'
import category3 from '../../components/Psychology.png'
import category4 from '../../components/Romantic.png'
import category5 from '../../components/Detective.png'
import category6 from '../../components/Finance.png'

const Genres = () => {
    return (
        <div id='genres'>
            <div className="container">
                <div className="genres">
                    <div className="up">
                        <h1>Genres</h1>
                        <NavLink to={'/'}>View all</NavLink>
                    </div>
                    <div className="down">
                        <NavLink to={'/'}><img src={category1} alt="img"/></NavLink>
                        <NavLink to={'/'}><img src={category2} alt="img"/></NavLink>
                        <NavLink to={'/'}><img src={category3} alt="img"/></NavLink>
                        <NavLink to={'/'}><img src={category4} alt="img"/></NavLink>
                        <NavLink to={'/'}><img src={category5} alt="img"/></NavLink>
                        <NavLink to={'/'}><img src={category6} alt="img"/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genres;