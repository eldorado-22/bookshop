import React, {useEffect, useState} from 'react';
import './basket.scss';
import basketImg from '../../components/Product Image.png'
import {IoIosArrowForward} from "react-icons/io";


const Basket = () => {
    const [remove, setRemove] = useState(false)


    const [pick, setPick] = useState(false)
    const [delivery, setDelivery] = useState(false)


    const [shipping, setSipping] = useState(false),
        [cash, setCash] = useState(false)
    const [payment, setPayment] = useState(false),
        [card, setCard] = useState(false)


    const [FormValid, setFormValid] = useState(false)
    const list = []


    return (
        <section id="basket">
            <div className="container">
                <div className="text" style={{display: remove? 'block' : 'none'}}>
                    <center><h1>There is nothing</h1></center>
                </div>
                <div className="basket" style={{display: remove? 'none': ''}}>
                    <div className="basket--global">
                        <div className="basket--global__list" style={{display: remove ? 'none' : ''}}>
                            <img className="basket--global__list--basImg" src={basketImg} alt="img"/>
                            <div className="basket--global__list--text">
                                <div>
                                    <h1>THE BOY, THE MOLE, THE FOX AND <br/> THE HORSE</h1>
                                    <p>by Charlie Mackesy</p>
                                    <h6>Quantity: 1</h6>
                                    <span>$99</span>
                                </div>
                                <button className="basket--global__list--text__remove"
                                        onClick={() => setRemove(true)}>Remove
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="basket--order" style={{marginLeft: remove ? '590px' : ''}}>
                        <h2>Order Summary</h2>
                        <div className="basket--order__tab">
                            <h4>Shipping</h4>
                            <h4 style={{cursor: 'pointer'}} onClick={() => setSipping(true) || setPayment(false)}>Select
                                Method <IoIosArrowForward/></h4>
                        </div>

                        <div className="basket--order__xr"
                             style={{marginBottom: '28px', display: shipping ? 'block' : 'none'}}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h4 style={{marginRight: "80px", color: '#818EEA', fontSize: "16px"}}
                                    onClick={() => setPick(true) || setDelivery(false)}><input name='tabs' id='my'
                                                                                               style={{marginRight: '15px'}}
                                                                                               type="radio"/><label
                                    htmlFor="my">I'll pick it up myself</label></h4>


                                <h4 style={{color: '#818EEA', fontSize: "16px"}}
                                    onClick={() => setDelivery(true) || setPick(false)}><input name='tabs' id='del'
                                                                                               style={{marginRight: '15px'}}
                                                                                               type="radio"/>
                                    <label htmlFor='del'>Delivery</label></h4>
                            </div>
                            <div style={{display: delivery? 'block' : 'none'}} className="basket--order__xs--card">
                                <input className="basket--order__xs--card__int" placeholder="Enter your address"
                                       type="text"/>
                                <input style={{marginBottom: '10px'}} className="basket--order__xs--card__int"
                                       placeholder="Write phone number   " type="text"/>
                            </div>
                            <h4 style={{marginBottom: '5px', marginTop:'20px', display: pick? 'block' : 'none', color:'#818EEA', fontSize:"16px"}}>Select pickup</h4>
                            <select style={{padding: '5px 10px', width:"370px",outline: 'none', marginBottom: '20px', borderRadius:'5px', border:'2px solid #818EEA', display: pick? 'block' : 'none'}}>
                                <option>Select Method</option>
                                <option>pay with cash</option>
                                <option>Pay with card</option>
                            </select>
                        </div>

                        {/*================================================================================================================================================*/}

                        <div className="basket--order__pay">
                            <h4>Payment</h4>
                            <h4 style={{cursor: "pointer"}} onClick={() => setPayment(true) || setSipping(false)}>Select
                                Method<IoIosArrowForward/></h4>
                        </div>

                        <div className="basket--order__xs" style={{display: payment ? 'block' : 'none'}}>
                           <div style={{display:'flex',alignItems:'center'}}>
                               <h4 onClick={() => setCash(true) || setCard(false)}
                                   style={{marginRight:'80px', color: '#818EEA', fontSize: "16px"}}><input
                                   style={{marginRight: '15px'}} name="tabs" id="cash" type="radio"/><label
                                   htmlFor="cash">Pay with cash</label></h4>

                               <h4 onClick={() => setCard(true) || setCash(false)}
                                   style={{color: '#818EEA', fontSize: "16px"}}><input
                                   style={{marginRight: '15px'}} name="tabs" id="card" type="radio"/><label
                                   htmlFor="card">Pay with card</label></h4>
                           </div>
                            {/*<button style={{display: cash ? 'block' : 'none', marginBottom:'40px'}}*/}
                            {/*        className="basket--order__xs--btn">Order*/}
                            {/*</button>*/}
                            <div style={{display: card ? 'block' : "none"}} className="basket--order__xs--card">
                                <select style={{padding: '5px 10px', width:"370px",outline: 'none', margin: '20px 0', borderRadius:'5px', border:'2px solid #818EEA', display: pick? 'block' : 'none'}}>
                                    <option>VISA</option>
                                    <option>OPTIMA</option>
                                    <option>M Bank</option>
                                    <option>ЭЛКАРТ</option>
                                </select>
                                <input className="basket--order__xs--card__int" placeholder="Write your card number"
                                       type="text"/>
                                <input className="basket--order__xs--card__int" placeholder="Name on Card" type="text"/>
                                <div className="basket--order__xs--card__next"
                                     style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <input style={{marginBottom: '30px'}} className="basket--order__xs--card__next--inp"
                                           placeholder="MM/ГГ" type="text"/>
                                    <input style={{marginBottom: '30px'}} className="basket--order__xs--card__next--inp"
                                           placeholder="CVV/CVC" type="text"/>
                                </div>
                            </div>
                        </div>

                        <hr/>
                        <div className="basket--order__total">
                            <h4>Total</h4>
                            <span>$188</span>
                        </div>
                        <center>
                            <button className="basket--order__btn">Confirm purchase</button>
                        </center>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;