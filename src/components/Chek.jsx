import React from "react";
import "../assets/css/Chek.css";

import pn5 from '../assets/images/image30.png'
import pn6 from '../assets/images/image31.png'
import pn2 from '../assets/images/image21.png'
import pn3 from '../assets/images/image22.png'
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";


const Chek = () => {
  return (
    <div className="container">
      <header className="header">KYLIE COSMETICS</header>

      <div className="checkout">
        <div className="checkout-form">
          <div className="express-checkout">
            <button className="express-btn shop-pay">ShopPay</button>
            <button className="express-btn paypal">PayPal</button>
            <button className="express-btn google-pay">G Pay</button>
          </div>

          <form>
            <h2>Contact</h2>
            <input type="email" placeholder="Email" className="input" />
            <label className="checkbox-label">
            <div className="toptop">
            <input className="bibikaaa" type="checkbox" /> 
            <p className="may">Email me with news and offers</p>
            </div>
            </label>

            <h2>Shipping Address</h2>
            <select className="input">
              <option>United States</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <input type="text" placeholder="Address" className="input" />
            <input type="text" placeholder="City" className="input" />
            <input type="text" placeholder="State" className="input" />
            <input type="text" placeholder="ZIP Code" className="input" />
            <input type="text" placeholder="Phone" className="input" />
          </form>

          <button className="continue-btn">Continue to Shipping</button>
        </div>

        <div className="order-summary">
          <h2>Your Order</h2>
          <div className="order-item">
            <span>Power Plush</span>
            <span>$54.00</span>
          </div>
          <div className="order-item">
            <span>Skin Plush</span>
            <span>$32.00</span>
          </div>
          <div className="order-item">
            <span>Wet Shimmer</span>
            <span>$18.00</span>
          </div>
          <input type="text" placeholder="Discount Code or Gift Card" className="input" />
          <div className="total">
            <span>Total</span>
            <span>$128.00</span>
          </div>
        </div>
      </div>

      <section className="recommendations">
        <h2>Recommendations</h2>
        <div className="product-grid">
          <div className="product-card">
          <img className="yarikfonarik" src={pn5} alt="4-Piece Mini Set" />
            <p>4-Piece Mini Set</p>
            <p>39$</p>
          </div>
          <div className="product-card">
          <img className="yarikfonarik" src={pn6} alt="Smokey Palette" />
              <p>Smokey Palette</p>
              <p className="femboichik" >34$</p>
          </div>
          <div className="product-card">
          <img className="yarikfonarik" src={pn2} alt="lip butter" />
            <div>
            <p>Lip butter</p>
            <p className="femboichik" >20$</p>
            </div>
              
          </div>
          <div className="product-card">
          <img className="yarikfonarik" src={pn3} alt="Brush" />
              <p>Brush</p>
              <p className="femboichik" >39$</p></div>
        </div>
      </section>
      <footer className="footer">
      <div className="yooo">
        <p>Eleven</p>
        <p>Twelve</p>         
        <p>Thirteen</p>       
        <p>Fourteen</p>     
        <p>Fifteen</p>     
        <p>Sixteen</p>
      </div>
        <div className="ceti" />
        <div className="icons">
        <span><SlSocialInstagram /></span>
          <span><TiSocialTwitter /></span>
          <span><TiSocialYoutube /></span>
        </div>
        <p>Copyright © 2022. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Chek;