import { React, useState } from 'react';
import {Link } from "react-router-dom"
import { ShoppingBag } from '../Shopping_bag/Shopping_bag';
import "./navbar.css";
import "./homenavbar.css";
const Navbar = () => {
  const [showResults, setShowResults] =useState(false)
  // const onClick = () => setShowResults(true)
  // return (
  //   <div>
  //     <input type="submit" value="Search" onClick={onClick} />
  //     { showResults ? <Results /> : null }
  //   </div>
  // )
  return (
    <>
    {showResults ? <ShoppingBag /> : null}
      <div className="main-navbar">
        <div className="upper-navbar">
          <p className="top-p">
            BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals
          </p>
          <div className="mobile-app">
            <img src="/Vector.svg" alt="mobile app" />
          </div>
          <p className="get-app">GET APP</p>
          <p className="line-nav"></p>
          <div className="nav">
            <img src="/nav2.svg" alt="mobile app" />
          </div>
          <p className="get-app">Store & Events</p>
          <p className="line-nav"></p>
          <div className="nav">
            <img src="/cart.svg" alt="mobile app" />
          </div>
          <p className="get-app">Gift Card</p>
          <p className="line-nav"></p>
          <div className="nav">
            <img src="/question.svg" alt="mobile app" />
          </div>
          <p className="get-app">Help</p>
        </div>
        <ul>
          <Link to="/">
          <li>
            <img className="nykka" src="/nykka.svg" />
          </li>
          </Link>
          <li>categroies</li>
          <li>Brands</li>
          <li>Nykaa fashion</li>
          <li>Beauty advice</li>
          <li>nykka network</li>
          <div className="navbarDivThreeSubdivOne">
            <input
              className="navbarDivThreeInput"
              type="text"
              placeholder="Search on Nykka"
            />
            <img
              className="navbarDivThreeImg"
              src="https://www.linkpicture.com/q/search_8.png"
              alt="nav"
            />
          </div>
          <li>
            <img src="/wishlist.svg" />
          </li>
          <li>
            <img src="/profile.svg" />
          </li>
          <p className="account">ACCOUNT</p>
          <Link to="/login" style={{textDecoration: "none"}}>
          <div className="usercart">
            <img className="usercart2" src="/usercart.svg" onClick={(e)=>setShowResults(true)}/>
          </div>
          </Link>
        </ul>
        <div className="lower-nav">
          <ul>
            <li>Make up</li>

            <div className="navbarMen">
                <Link to="skin" style={{textDecoration: 'none', color: '#818181'}}>
              Skin
              </Link>
              <div className="navbarMenBlock">
                <div>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">CLEANSERS</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Facewash</div>
                        <div>Clensers</div>
                        <div>Scrubs & Exfoliaters</div>
                        <div>Facial Wipes</div>
                        <div>Makeup Remover</div>
                      </div>
                    </div>
                  </div>
                  <hr className="navbarprodHrLine"></hr>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">
                      Trending searches
                    </div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Toners Under 1000</div>
                        <div>Facewash For Oily Skin</div>
                        <div>Oil Free face Moisturizers</div>
                        <div>Lip Balm Under 500</div>
                        <div>Vitamin C Serum</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-background">
                  <div className="navbarMenProducts ">
                    <div className="navbarMenProdHeading ">Moisturizers</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Face Moisturizer & Day</div>
                        <div>Cream</div>
                        <div>Night Cream</div>
                        <div>Face Oils</div>
                        <div>Serum & Essence</div>
                        <div>BB & CC Creams</div>
                      </div>
                    </div>
                  </div>
                  <hr className="navbarprodHrLine"></hr>
                  <div className="navbarMenProducts navbar-background">
                    <div className="navbarMenProdHeading">Masks</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Masks & Peels</div>
                        <div>Sheet Masks</div>
                      </div>
                    </div>
                  </div>
                  <hr className="navbarprodHrLine"></hr>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">kts & combos</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Facial Kits</div>
                        <div>Combos@Nykka</div>
                        <div>Gifts Sets</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">Eye care</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Under Eye Cream & Serums</div>
                        <div>Dream Circles & Wrinkles</div>
                        <div>Poffiness</div>
                        <div>Eye Masks</div>
                        <div>Eye Masks</div>
                        <div>Eye Makeup Removal</div>
                      </div>
                    </div>
                  </div>
                  <hr className="navbarprodHrLine"></hr>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">Lip care</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Lip Balm</div>
                        <div>Lip Scrub</div>
                        <div>Lip Masks</div>
                      </div>
                    </div>
                  </div>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">neck creams</div>
                  </div>
                </div>
                <div className="navbar-background">
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">Body care</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Body Butter</div>
                        <div>Lotions & Creams</div>
                        <div>Massage Oils</div>
                        <div>Anti Strech mark Creams</div>
                        <div>Anti Cellulite Creams</div>
                        <div>Bath Salts</div>
                        <div>Shower Gels & Body Wash </div>
                        <div>Bath Scrubs</div>
                        <div>Soaps</div>
                      </div>
                    </div>
                  </div>
                  <hr className="navbarprodHrLine"></hr>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">Sun Care</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Face Sunscreen</div>
                        <div>Body Sunscreen</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">hands & Feet</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>Hand Creams</div>
                        <div>Foot Creams</div>
                        <div>Hand & Foot masks</div>
                      </div>
                    </div>
                  </div>
                  <hr className="navbarprodHrLine"></hr>
                  <div className="navbarMenProducts">
                    <div className="navbarMenProdHeading">Tops Brands</div>
                    <div className="navbarMenProdHeadingList">
                      <div className="navbarMenProdHeadingListHover">
                        <div>NYKKA SKINRX</div>
                        <div>Innisfree</div>
                        <div>L'oreal Paris</div>
                        <div>Nykaa Naturals</div>
                        <div>Neutrogena</div>
                        <div>The Face Shop</div>
                        <div>Nivea</div>
                        <div>Mamaearth</div>
                        <div>Plum</div>
                      </div>
                    </div>
                  </div>
                  <div className=".navbar-background">
                    <div className="navbarMenProducts">
                      <div className="navbarMenProdHeading">
                        shop by concern
                      </div>
                      <div className="navbarMenProdHeadingList">
                        <div className="navbarMenProdHeadingListHover">
                          <div>Skin Brightening</div>
                          <div>Acne Treatment</div>
                          <div>Dull Skin Treatment</div>
                          <div>Pigmentation</div>
                          <div>Anti Ageing</div>
                          <div>Tan Removal</div>
                          <div>Face Treatment </div>
                          <div>Pore Care</div>
                          <div>skin Dryness</div>
                          <div>Sun Protection</div>
                          <div>Oil Control</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/hair" style={{textDecoration: "none", color: '#818181'}}>
            <li>Hair</li>
            </Link>
            <li>Appliances</li>
            <li>Personal Care</li>
            <li>Natural </li>
            <li>Mom & Baby</li>
            <li>Men</li>
            <li>Fragrance</li>
            <li>Luxe</li>
            <div className="offer"> OFFERS</div>
          </ul>
        </div>
      </div>
    </>
  );
};
export { Navbar };