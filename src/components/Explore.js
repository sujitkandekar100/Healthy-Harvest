import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./explore.css";
import { Link } from "react-router-dom";


import Rice from './images/imgs/Rice.jpg'
import Wheat from './images/imgs/Wheat.jpg'
import BrownRice from './images/imgs/Brown Rice.jpg'
import Barley from './images/imgs/Barley.jpg'
import CornFlour from './images/imgs/Corn Flour.jpg'
import Ragi from './images/imgs/Ragi.jpg'

function Explore() {
  return (
    <>
      <Header />
      
      <h1 className="heading"> Products </h1>

      <section className="course">
      
        <div className="box">
          <span className="amount">Rs.299</span>
          <img src={Rice} alt="" />
          <h3>Rice</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            ullam omnis odit accusamus doloremque? Cum aliquid unde nulla.
            Vitae, adipisci?
          </p>
          <Link to="#" className="btn">
            Buy
          </Link>
        </div>

        <div className="box">
          <span className="amount">Rs.299</span>
          <img src={Ragi} alt="" />
          <h3>Ragi</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            ullam omnis odit accusamus doloremque? Cum aliquid unde nulla.
            Vitae, adipisci?
          </p>
          <Link to="#" className="btn">
            Buy
          </Link>
        </div>

        <div className="box">
          <span className="amount">Rs.299</span>
          <img src={CornFlour} alt="" />
          <h3>Corn Flour</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            ullam omnis odit accusamus doloremque? Cum aliquid unde nulla.
            Vitae, adipisci?
          </p>
          <Link to="#" className="btn">
            Buy
          </Link>
        </div>

        <div className="box">
          <span className="amount">Rs.299</span>
          <img src={Barley} alt="" />
          <h3>Barley</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            ullam omnis odit accusamus doloremque? Cum aliquid unde nulla.
            Vitae, adipisci?
          </p>
          <Link to="#" className="btn">
            Buy
          </Link>
        </div>

        <div className="box">
          <span className="amount">Rs.299</span>
          <img src={BrownRice} alt="" />
          <h3>Brown Rice</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            ullam omnis odit accusamus doloremque? Cum aliquid unde nulla.
            Vitae, adipisci?
          </p>
          <Link to="#" className="btn">
            Buy
          </Link>
        </div>

        <div className="box">
          <span className="amount">Rs.299</span>
          <img src={Wheat} alt="" />
          <h3>Wheat</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            ullam omnis odit accusamus doloremque? Cum aliquid unde nulla.
            Vitae, adipisci?
          </p>
          <Link to="#" className="btn">
            Buy
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Explore;
