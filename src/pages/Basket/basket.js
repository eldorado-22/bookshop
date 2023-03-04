import React, {useEffect, useState} from 'react';
import './basket.scss';
import basketImg from '../../components/Product Image.png'
import localStorage from "./localStorage/localStorage";
import {BsArrowRight} from "react-icons/bs";


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


    useEffect(() => {
        if (remove) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [remove])

    const basketLogo = {
        title: basketImg
    }

    return (
        <section id="basket">
            <div className="container">
                <div className="basket">
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
                                Method <BsArrowRight/></h4>
                        </div>

                        <div className="basket--order__xr"
                             style={{marginBottom: '28px', display: shipping ? 'block' : 'none'}}>
                            <h4 style={{marginBottom: "10px"}} onClick={()=> setPick(true) || setDelivery(false)}><input style={{marginRight: '15px'}} type="radio"/>I'll pick it up myself</h4>
                            <h4 style={{marginTop:'20px', display: pick? 'block' : 'none', color:'#818EEA', fontSize:"18px"}}>Select pickup</h4>
                            <select style={{padding: '5px 10px', width:"400px",outline: 'none', margin: '20px 0', borderRadius:'5px', border:'2px solid #818EEA', display: pick? 'block' : 'none'}}>
                                <option>Select Method</option>
                                <option onClick={()=> setPayment(true)}>pay with cash</option>
                                <option>pay with card</option>
                            </select>

                            <h4 onClick={()=> setDelivery(true) || setPick(false)}><input style={{marginRight: '15px'}} type="radio"/> delivery</h4>
                            <div style={{display: delivery? 'block' : 'none'}} className="basket--order__xs--card">
                                <input className="basket--order__xs--card__int" placeholder="Enter your address"
                                       type="text"/>
                                <input style={{marginBottom: '30px'}} className="basket--order__xs--card__int"
                                       placeholder="Write phone number   " type="number"/>
                            </div>
                        </div>

                        {/*================================================================================================================================================*/}

                        <div className="basket--order__pay">
                            <h4>Payment</h4>
                            {/*<select>*/}
                            {/*    <option>Select Method</option>*/}
                            {/*    <option onClick={()=> setPayment(true)}>pay with cash</option>*/}
                            {/*    <option>pay with card</option>*/}
                            {/*</select>*/}
                            <h4 style={{cursor: "pointer"}} onClick={() => setPayment(true) || setSipping(false)}>Select
                                Method<BsArrowRight/></h4>
                        </div>

                        <div className="basket--order__xs" style={{display: payment ? 'block' : 'none'}}>
                            <h4 onClick={() => setCash(true) || setCard(false)} style={{marginBottom: "10px"}}><input
                                style={{marginRight: '15px'}} type="radio"/>pay with cash</h4>
                            <button style={{display: cash ? 'block' : 'none'}}
                                    className="basket--order__xs--btn">Order
                            </button>
                            <h4 onClick={() => setCard(true) || setCash(false)} style={{marginBottom: '20px'}}><input
                                style={{marginRight: '15px'}} type="radio"/>pay with card</h4>
                            <div style={{display: card ? 'block' : "none"}} className="basket--order__xs--card">
                                <input className="basket--order__xs--card__int" placeholder="Write your card number"
                                       type="number"/>
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
                            <button className="basket--order__btn">Continue to checkout</button>
                        </center>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;