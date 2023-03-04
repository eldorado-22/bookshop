import React from 'react';
import './recent.scss';
import image1 from '../../components/image 5.png'
import image2 from '../../components/image 6.png'
import image3 from '../../components/image 7.png'




const Recent = () => {
    return (
        <section id="newBooks" style={{paddingTop: '130px', paddingBottom:'20px'}}>
            <div className="container">
                <h1 style={{fontWeight:'500px', fontSize:'48px', textAlign:'center', color: '#19272E', paddingBottom:'50px'}}>New Books</h1>
                <div className="newBooks">
                    <div className="newBooks--blocOne" style={{marginTop:'30px'}}>
                        <img src={image1} alt="logo"/>
                        <h3 style={{width:'185px', fontWeight:'700px', fontSize:'18px', color: '#19272E'}}>The Climate Book: The Facts and the Solutions</h3>
                        <p style={{width:'185px', fontWeight:'400px', fontSize:'18px', color: '#19272E', opacity: '0.7'}}>by Greta Thunberg</p>
                    </div>
                    <div className="newBooks--blocTwo" style={{margin:'0 60px'}}>
                        <img src={image2} alt="logo"/>
                        <h3 style={{width:'185px', fontWeight:'700px', fontSize:'18px', color: '#19272E'}}>Rest Is Resistance: A Manifesto</h3>
                        <p style={{width:'185px', fontWeight:'400px', fontSize:'18px', color: '#19272E', opacity: '0.7'}}>by Tricia Hersey</p>
                    </div>
                    <div className="newBooks--blocThere" style={{marginTop:'45px'}}>
                        <img src={image3} alt="logo"/>
                        <h3 style={{width:'185px', fontWeight:'700px', fontSize:'18px', color: '#19272E'}}>A New Name: Septology VI-VII</h3>
                        <p style={{width:'185px', fontWeight:'400px', fontSize:'18px', color: '#19272E', opacity: '0.7'}}>by Jon Fosse</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recent;