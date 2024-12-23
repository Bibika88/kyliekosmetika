import React from 'react';
import '../assets/css/LoginPage.css';

import pl1 from '../assets/images/Group24.png'
import Carousell2 from './Carousel2';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

function LoginPage() {
  return (
    <div className="login-page">
      <header>
      <div className='flex'>
        <h1>KYLIE COSMETICS</h1>
        <img src={pl1} />
      </div>
      </header>

      <div className="login-container">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <div className='forgot'>
          <button className='forgot1'>Forgot-password</button>
          <button className='forgot2' type="submit">Log in</button>
          </div>
        </form>
      </div>
      <Carousell2></Carousell2>
      <footer className='nado'>
        <h2>KYLIE COSMETICS</h2>
        <label className='Y3'>sign up for updates:</label>
        <div className="updates">
          <div className='skibidi'>
          <input className='stroka2' type="email" placeholder="email address" />
          <button className='lol'>submit</button>
          </div>
          <div>
          <p className='p'>by signing up you agree to our terms</p>
          </div>
        </div>
        
        <div className="social-icons">
          <span><SlSocialInstagram /></span>
          <span><TiSocialTwitter /></span>
          <span><TiSocialYoutube /></span>
        </div>
        <p className='bubenchik'>CompanyName @ 202X. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;