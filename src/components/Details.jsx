import React from "react";
import "../assets/css/Details.css";
import { useLocation } from "react-router-dom";

import ic1 from '../assets/images/Group28.png'
import bibika from '../assets/images/product-image.png'

export default function Details() {
  const { state } = useLocation();
  const { item } = state;

  const recommendations = [
    { id: 1, image: "image-url-1", title: "Wet Shimmer Quad", price: 24 },
    { id: 2, image: "image-url-2", title: "Nail Lacquer Trio", price: 36 },
    { id: 3, image: "image-url-3", title: "Cosmic Hair & Body Mist", price: 29 },
    { id: 4, image: "image-url-4", title: "Wet Shimmer Quad", price: 24 },
    { id: 5, image: "image-url-5", title: "Nail Lacquer Trio", price: 36 },
    { id: 6, image: "image-url-6", title: "Cosmic Hair & Body Mist", price: 29 },
  ];
  

  return (
    <div>
      <section className="product-section">
        <div className="image-gallery">
          <img
            src={item.image}
            alt="Product"
            className="product-image"
          />
        </div>
        <div className="product-details">
          <h1 className="text">{item.title}</h1>
          <p>0.16 fl oz | brighten + blur</p>
          <p>★★★★<span style={{color:'lightgray '}}>★</span> (1235 reviews)</p>
          <p className="price">${item.price}</p>
          <button className="add-to-cart">Add to Cart</button>
          <div className="nyam">
          <h1>Details</h1>
          </div>
          <div>

          </div>
          <div className="Description">
          <p className="product-description">
          my power plush longwear concealer is a weightless, medium buildable
          concealer that brightens, blurs, and smooths to a natural, satin finish. its
          hydrating formula offers flexible and highly comfortable wear with a cushiony,
          soft feel for up to 12 hours. this crease-proof, cake-free, multi-purpose
          concealer covers under eye circles, dark spots, and redness or can be used
          to highlight, bronze and contour. .
          </p>
          </div>
          
          <div className="nyam">
          <h1>Ingredients</h1>
          </div>
          <div className="lolchik">
          <img src={ic1}/>
          </div>
        </div>
      </section>

      <section className="recommendations">
        <h2 className="V">RECOMMENDATIONS</h2>
        <div className="recommendation-grid">
          {recommendations.map((product) => (
            <div key={product.id} className="recommendation-card">
              <img class='tilekloh'
                src={bibika}
                alt={product.title}
                
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>KYLIE COSMETICS</h2>
        <form>
          <label>Sign up for updates:</label>
          <input type="email" placeholder="Email Address" />
          <button className="add-to-cart">Submit</button>
        </form>
        <p>By signing up you agree to our terms</p>
        <div>📸 Facebook | Instagram | TikTok</div>
      </footer>
    </div>
  );
}