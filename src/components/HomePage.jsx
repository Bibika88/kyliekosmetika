import React from "react";
import "../App.css";
import Carousel from "./Carousel";

import pn1 from '../assets/images/image15.png'
import pn2 from '../assets/images/image21.png'
import pn3 from '../assets/images/image22.png'
import pn4 from '../assets/images/image23.png'
import pn5 from '../assets/images/image30.png'
import pn6 from '../assets/images/image31.png'
import pn7 from '../assets/images/image32.png'
import pn8 from '../assets/images/image40.png'
import pn9 from '../assets/images/image41.png'
import pn10 from '../assets/images/arrow-left-square.png'
import pn11 from '../assets/images/arrow-right-square.png'
import pn12 from '../assets/images/youtube.png'
import pn13 from '../assets/images/instagram.png'
import pn14 from '../assets/images/facebook.png'
import pn15 from '../assets/images/linkedin.png'
import { Link, useNavigate } from "react-router-dom";


export const products = [
  {
    title:'lip',
    price:20,
    image:pn4,
    
  },
  {
    title:'blush',
    price:30,
    image:pn2,

  },
  {
    title:'power',
    price:40,
    image:pn3,

  }
]

export const products2 = [
  {
    title:'lip',
    price:20,
    image:"",
    
  },
  {
    title:'blush',
    price:30
  },
  {
    title:'power',
    price:40
  }
]

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="header">
        <div className="logo">KC</div>
        <nav className="nav">
          <Link className="btn" to={'/login'}>Войти</Link>
          <Link className="btn" to={'/chek'}>Купить</Link>
        </nav>
      </header>
      <main className="main">
        <section className="hero" />
        <section className="categories">
          <h3>Categories in cosmetics:</h3>
          <div className="category-list">
            <div className="category50"><p>Lips</p></div>
            <div className="category51"><p>Face</p></div>
            <div className="category52"><p>Eyebrows</p></div>
            <div className="category53"><p>Eyes</p></div>
          </div>
        </section>
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="banner0">
            <div className="strelka">
              <img className="left" src={pn10} />
            </div>
            <img className="lol" src={pn9} />
            <div className="strelka">
              <img className="right" src={pn11} />
            </div>
          </div>
        </div> */}
        <div className="stroki">
          <Carousel/>
          <section className="products">
            <h3>Super Price:</h3>
            <div className="product-list">
            {products.map((item,index)=><div key={item.title} className="product" onClick={()=>navigate('/details/'+index, {state:{item}} )}>
                <img src={item.image
                } alt="Lip Butter" />
                <p>{item.title}</p>
                <p>{item.price}$</p>
              </div>)}
            </div>
          </section>
        </div>
      </main>
      <div className="stroki">
        <section className="products">
          <h3>Trending today:</h3>
          <div className="product-list">
            <div className="product">
              <img src={pn5} alt="4-Piece Mini Set" />
              <p>4-Piece Mini Set</p>
              <p>39$</p>
            </div>
            <div className="product">
              <img src={pn6} alt="Smokey Palette" />
              <p>Smokey Palette</p>
              <p>34$</p>
            </div>
            <div className="product">
              <img src={pn7} alt="Kylie Skin Set" />
              <p>Kylie Skin Set</p>
              <p>39$</p>
            </div>
          </div>
        </section>
      </div>
      <div className="stroki">
        <section className="products">
          <h3>New arrivals:</h3>
          <div className="product-list">
            <div className="product">
              <img src={pn2} alt="lip butter" />
              <p>lip butter</p>
              <p>20$</p>
            </div>
            <div className="product">
              <img src={pn3} alt="Brush" />
              <p>Brush</p>
              <p>39$</p>
            </div>
            <div className="product">
              <img src={pn4} alt="Power Plush" />
              <p>Power Plush</p>
              <p>39$</p>
            </div>
          </div>
        </section>
      </div>
      <div className="banner">
      </div>
      <footer className="footer">
        <p>Eleven       Twelve       Thirteen      Fourteen      Fifteen      Sixteen</p>
        <div className="ceti" />
        <img className="youtube" src={pn12} />
        <img className="instagram" src={pn13} />
        <img className="facebook" src={pn14} />
        <img className="linkedin" src={pn15} />
        <p>Copyright © 2022. All rights reserved.</p>
      </footer>
    </div>


  );
}

export default App;