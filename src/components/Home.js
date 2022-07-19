import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./home.css";
import { Link} from "react-router-dom";

import company1 from "../components/images/imgs/company1.jpg";
import company from "../components/images/imgs/company.png";
import Rice from "../components/images/imgs/sack of rice.png";
import Product from "./images/imgs/product.png";

function Home() {
  return (
    <>
      <Header />
      <div>
        <div className="hero">
          <div className="hero-content">
            <div className="h-content-left">
              <p>Our Mother Culture</p>
              <li className="title">Nature is Love , so as Agriculture</li>
              <Link to="/explore" id="explore-btn" className="btn">
                Explore
              </Link>
            </div>
          </div>
        </div>

        <div className="sell">
          <div className="sellers">
            <div className="sell-buyers">
              <div
                id="carousal-one"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={company1}
                      className="d-block sizeit"
                      alt="..."
                    ></img>
                    <div className="buyers-info">
                      <li>
                        <span className="boldit">Name :</span> Lakshmikant Patil
                      </li>
                      <li>
                        <span className="boldit">Address :</span> Maharashtra,
                        India
                      </li>
                      <li>
                        <span className="boldit">Crops:</span> Rice, Daal,
                        Wheat, Chana
                      </li>
                      <li className="red">For Pricing Contact the Buyer</li>
                      <Link to="#">Call</Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={company1}
                      className="d-block sizeit"
                      alt="..."
                    ></img>
                    <div className="buyers-info">
                      <li>
                        <span className="boldit">Name :</span> Shiva Jadhav
                      </li>
                      <li>
                        <span className="boldit">Address :</span> Maharashtra,
                        India
                      </li>
                      <li>
                        <span className="boldit">Crops:</span> Wheat, Bajra,
                        Jwari
                      </li>
                      <li className="red">For Pricing Contact the Buyer</li>
                      <Link to="#">Call</Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={company1}
                      className="d-block sizeit"
                      alt="..."
                    ></img>
                    <div className="buyers-info">
                      <li>
                        <span className="boldit">Name :</span> Aaba Jogdand
                      </li>
                      <li>
                        <span className="boldit">Address :</span> Maharashtra,
                        India
                      </li>
                      <li>
                        <span className="boldit">Crops:</span> Jwari, Vegetables
                      </li>
                      <li className="red">For Pricing Contact the Buyer</li>
                      <Link to="#">Call</Link>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousal-one"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousal-one"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="sell-companies">
              <div
                id="carousel-two"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={company}
                      className="d-block sizeit"
                      alt="..."
                    ></img>
                    <div className="company-info">
                      <h5>Harit Kranti, pvt limited.</h5>
                      <li>
                        <span className="boldit">Location :</span> Maharashtra,
                        India
                      </li>
                      <Link to="#">Sell</Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={company}
                      className="d-block sizeit"
                      alt="..."
                    ></img>
                    <div className="company-info">
                      <h5>Apla Shet, pvt limited.</h5>
                      <li>
                        <span className="boldit">Location :</span> Maharashtra,
                        India
                      </li>
                      <Link to="#">Sell</Link>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={company}
                      className="d-block sizeit"
                      alt="..."
                    ></img>
                    <div className="company-info">
                      <h5>Gavakadcha Maal, pvt limited.</h5>
                      <li>
                        <span className="boldit">Location :</span> Maharashtra,
                        India
                      </li>
                      <Link to="#">Sell</Link>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel-two"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel-two"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="Schemes">
          <ul className="cards1">
            <li className="cards1__item">
              <div className="card1">
                <div className="card1__image scheme1"></div>
                <div className="card1__content">
                  <img
                    src="https://ruralmarketing.in/wp-content/uploads/2020/12/11-Most-important-government-schemes-in-agriculture-sector.jpg"
                    className="d-block sizeit"
                    alt="..."
                  ></img>
                  <div className="card1__title">Scheme 1</div>
                  <p className="card1__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard{" "}
                  </p>
                  <button className="btn btn--block card__btn">
                    Know More
                  </button>
                </div>
              </div>
            </li>
            <li className="cards1__item">
              <div className="card1">
                <div className="card1__image scheme2"></div>
                <div className="card1__content">
                  <img
                    src="https://images.unsplash.com/photo-1540736086231-18770daec04e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXJsJTIwZmFybWVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auhref=format&fit=crop&w=500&q=60"
                    className="d-block sizeit"
                    alt="..."
                  ></img>
                  <div className="card1__title">Scheme 2</div>
                  <p className="card1__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard{" "}
                  </p>
                  <button className="btn btn--block card__btn">
                    Know More
                  </button>
                </div>
              </div>
            </li>
            <li className="cards1__item">
              <div className="card1">
                <div className="card1__image scheme3"></div>
                <div className="card1__content">
                  <img
                    src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auhref=format&fit=crop&w=500&q=60"
                    className="d-block sizeit"
                    alt="..."
                  ></img>
                  <div className="card1__title">Scheme 3</div>
                  <p className="card1__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard{" "}
                  </p>
                  <button className="btn btn--block card__btn">
                    Know More
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="info">
          <div className="cards">
            <div className="card card-1">
              <div className="card-img">
                <img src={Rice} alt="rice"></img>
              </div>
              <div className="card-content">
                <h3>Rice</h3>
                <hr></hr>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam tempora quas distinctio sed libero! Sapiente harum eos
                  facilis sint esse alias officia. Ea, error animi iure corporis
                  numquam vero veritatis.
                </p>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-img">
                <img src={Rice} alt="rice"></img>
              </div>
              <div className="card-content">
                <h3>Rice</h3>
                <hr></hr>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam tempora quas distinctio sed libero! Sapiente harum eos
                  facilis sint esse alias officia. Ea, error animi iure corporis
                  numquam vero veritatis.
                </p>
              </div>
            </div>
            {/* <div className="card card-3">
              <div className="card-img">
                <img src={Rice} alt="rice"></img>
              </div>
              <div className="card-content">
                <h3>Rice</h3>
                <hr></hr>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam tempora quas distinctio sed libero! Sapiente harum eos
                  facilis sint esse alias officia. Ea, error animi iure corporis
                  numquam vero veritatis.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="products">
          <div className="product">
            <div className="pro-top">
              <div className="product-card">
                <div className="pro-img">
                  <img src={Product} alt=""></img>
                </div>
                <div className="pro-content">
                  <h3>Fertilizer</h3>
                  <p>
                    Price : 100₹/100ml
                    <Link to="#">More</Link>
                  </p>
                </div>
              </div>
              <div className="product-card">
                <div className="pro-img">
                  <img src={Product} alt=""></img>
                </div>
                <div className="pro-content">
                  <h3>Fertilizer</h3>
                  <p>
                    Price : 100₹/100ml
                    <Link to="#">More</Link>
                  </p>
                </div>
              </div>
              <div className="product-card">
                <div className="pro-img">
                  <img src={Product} alt=""></img>
                </div>
                <div className="pro-content">
                  <h3>Fertilizer</h3>
                  <p>
                    Price : 100₹/100ml
                    <Link to="#">More</Link>
                  </p>
                </div>
              </div>
              <div className="product-card">
                <div className="pro-img">
                  <img src={Product} alt=""></img>
                </div>
                <div className="pro-content">
                  <h3>Fertilizer</h3>
                  <p>
                    Price : 100₹/100ml
                    <Link to="#">More</Link>
                  </p>
                </div>
              </div>
              <div className="product-card">
                <div className="pro-img">
                  <img src={Product} alt=""></img>
                </div>
                <div className="pro-content">
                  <h3>Fertilizer</h3>
                  <p>
                    Price : 100₹/100ml
                    <Link to="#">More</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
