import React from 'react';
import './layout.scss';
import Header from "../Header/header";
import Footer from "../Footer/footer";
const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
};

export default Layout;