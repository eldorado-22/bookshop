import React from 'react';

const LocalStorage = () => {
     const ask = {
         id:"1",
         title:"qwertyu"
    }
    localStorage.getItem("text")
    localStorage.setItem("text",JSON.stringify(ask))
    return (
        <div>
            <div>
                <h1>{ask.title}</h1>
            </div>
        </div>
    );
};

export default LocalStorage;