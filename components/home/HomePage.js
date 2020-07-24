import React from "react";
import Link from "next/link";

export const HomePage = () => {
  return (
    <>
      <a href="#" className="cartBtn">
        <span>1</span>
        <img src="images/cart.png" />
      </a>
      <div className="off-canvas-nav">
        <div className="left-nav-toplink">
          <div className="left-nav">
            <ul className="list-unstyled m-0">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li className="show-mobile parent">
                <a href="#" data-related="title_1">
                  Categories
                </a>
              </li>
              <li>
                <a href="#">Discounts</a>
              </li>
              <li>
                <a href="#">Bogo</a>
              </li>
              <li>
                <a href="#">Check My Voucher Status</a>
              </li>
              <li>
                <a href="#">Resend My Voucher</a>
              </li>
              <li>
                <a href="#">My Transactions</a>
              </li>
              <li>
                <a href="#">Customer Care</a>
              </li>
            </ul>
            <div className="subMenu" id="categories">
              <div className="text-right nav-back">
                <span>Categories</span>
              </div>
              <ul className="list-unstyled m-0">
                <li>
                  <a href="category.html">Apparel & Accessories</a>
                </li>
                <li>
                  <a href="category.html">Food & Beverage</a>
                </li>
                <li>
                  <a href="category.html">Grocery & Home Needs</a>
                </li>
                <li>
                  <a href="category.html">Mobile & Electronics</a>
                </li>
                <li>
                  <a href="category.html">Health & Wellness</a>
                </li>
                <li>
                  <a href="category.html">e-Com & Online</a>
                </li>
                <li>
                  <a href="category.html">Entertainment & Magazines</a>
                </li>
                <li>
                  <a href="category.html">Cabs & Travel</a>
                </li>
                <li>
                  <a href="category.html">All Brands</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="off-canvas-main">
        <div className="container-fluid">
          <header className="row border-bottom">
            <div className="col-12 px-0 top-gry">
              <div className="container">
                <div className="row">
                  <div className="text-right col-12">
                    <ul className="list-inline top-links">
                      <li className="list-inline-item">
                        <a href="#" data-toggle="modal" data-target="#login">
                          Login/Register
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 px-0 bg-white py-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-5 col-md-4">
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <div className="hamburger-icon" id="desktop-hamburger">
                          <div className="top"></div>
                          <div className="middle"></div>
                          <div className="bottom"></div>
                        </div>
                      </li>
                      <li className="list-inline-item call nowrap">
                        <span>
                          <a href="tel:18001033314">
                            <img src="images/call.png" alt="logo" />
                          </a>
                        </span>
                        <span className="pl-l fw-700 d-none d-md-inline-block">
                          1800-103-3314
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 d-none d-md-block">
                    <div className="classNameSearch">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="Search by Brand / Product"
                      />
                    </div>
                  </div>
                  <div className="col-7 col-md-4 text-right center-logo">
                    <Link href="/">
                      <a>
                        <img src="images/logo.png" className="img-fluid" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <nav className="desktopNav row border-bottom bg-white">
            <div className="container">
              <ul>
                <li className="dropdown spriteMenu">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    id="apparel-accessories-Dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <figure>
                      <img
                        src="images/nav-icon/apparels.png"
                        alt="Apparel &amp; Accessories"
                      />
                      <figcaption>
                        Apparel &amp;
                        <br /> Accessories
                      </figcaption>
                    </figure>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="apparel-accessories-Dropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Allen Solly
                    </a>
                    <a className="dropdown-item" href="#">
                      Armani Exchange
                    </a>
                    <a className="dropdown-item" href="#">
                      Arrow
                    </a>
                    <a className="dropdown-item" href="#">
                      Aurelia
                    </a>
                    <a className="dropdown-item" href="#">
                      Bata
                    </a>
                    <a className="dropdown-item" href="#">
                      Benetton
                    </a>
                    <a className="dropdown-item" href="#">
                      BIBA
                    </a>
                    <a className="dropdown-item" href="#">
                      Bobbi Brown
                    </a>
                    <a className="dropdown-item" href="#">
                      Brand Factory
                    </a>
                    <a className="dropdown-item" href="#">
                      Celio
                    </a>
                    <a className="dropdown-item" href="#">
                      Central
                    </a>
                    <a className="dropdown-item" href="#">
                      Coach
                    </a>
                    <a className="dropdown-item" href="#">
                      Euphoria Jewellery (TM) gold coins
                    </a>
                    <a className="dropdown-item" href="#">
                      Fastrack
                    </a>
                    <a className="dropdown-item" href="#">
                      FBB
                    </a>
                    <a className="dropdown-item" href="#">
                      Flying Machine
                    </a>
                    <a className="dropdown-item" href="#">
                      G - Star Raw
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img
                        src="images/nav-icon/food-bav.png"
                        alt="Food &amp; Beverage"
                      />
                      <figcaption>
                        Food &amp;
                        <br /> Beverage
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img
                        src="images/nav-icon/grocery.png"
                        alt="Grocery &amp; Home Needs"
                      />
                      <figcaption>
                        Grocery &amp;
                        <br /> Home Needs
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    id="MobileElectronics-Dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <figure>
                      <img
                        src="images/nav-icon/electronics.png"
                        alt="Mobile &amp; Electronics"
                      />
                      <figcaption>
                        Mobile &amp;
                        <br /> Electronics
                      </figcaption>
                    </figure>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="MobileElectronics-Dropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Croma
                    </a>
                    <a className="dropdown-item" href="#">
                      Mobile Recharge
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img
                        src="images/nav-icon/health-wellness.png"
                        alt="Health &amp; Wellness"
                      />
                      <figcaption>
                        Health &amp;
                        <br /> Wellness
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img
                        src="images/nav-icon/ecom-online.png"
                        alt="e-Com &amp; Online"
                      />
                      <figcaption>
                        e-Com &amp;
                        <br /> Online
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img
                        src="images/nav-icon/entertainment.png"
                        alt="Grocery &amp; Home Needs"
                      />
                      <figcaption>
                        Entertainment &amp;
                        <br /> Magazines
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img
                        src="images/nav-icon/cab.png"
                        alt="Cabs &amp; Travel"
                      />
                      <figcaption>
                        Cabs &amp;
                        <br /> Travel
                      </figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure>
                      <img src="images/nav-icon/all.png" alt="all" />
                      <figcaption>
                        All
                        <br /> Brands
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <section className="row">
            <div className="col-12 p-0">
              <div
                id="carouselHome"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active carousel-item-left">
                    <img
                      className="w-100 d-none d-md-block"
                      src="images/banner.jpg"
                      alt="First slide"
                    />
                    <img
                      className="w-100 d-block d-md-none "
                      src="images/mobile-banner.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item carousel-item-next carousel-item-left">
                    <img
                      className="w-100 d-none d-md-block"
                      src="images/banner.jpg"
                      alt="First slide"
                    />
                    <img
                      className="w-100 d-block d-md-none"
                      src="images/mobile-banner.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#carouselHome"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselHome"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>

          <section className="row py-2">
            <div className="col-12 p-0">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-3 p-3 pr-md-0">
                    <div className="p-3 shadow-sm border rounded">
                      <div>
                        <h3 className="h4 fw-700 text-uppercase m-0">
                          Deal of the day
                        </h3>
                        <p className="fs-12 mb-2">
                          Amazing Deals from choicest brands!
                        </p>
                      </div>
                      <div className="shadow-sm mb-3">
                        <a href="#">
                          <img
                            src="images/deals.jpg"
                            alt="deals"
                            className="w-100"
                          />
                        </a>
                      </div>
                      <div className="text-right">
                        <a
                          href="#"
                          className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1"
                        >
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 p-3">
                    <div className="p-3 shadow-sm border rounded">
                      <div>
                        <h3 className="h4 fw-700 text-uppercase m-0">Offers</h3>
                        <p className="fs-14 mb-2">
                          Top discounts & deals on leading brands!
                        </p>
                      </div>
                      <div className="shadow-sm mb-3">
                        <a href="#">
                          <img
                            src="images/offers-1.jpg"
                            alt="offers-1"
                            className="w-100"
                          />
                        </a>
                      </div>
                      <div className="shadow-sm mb-3">
                        <a href="#">
                          <img
                            src="images/offers-2.jpg"
                            alt="offers-1"
                            className="w-100"
                          />
                        </a>
                      </div>
                      <div className="text-right">
                        <a
                          href="#"
                          className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1"
                        >
                          VIEW MORE
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-3 p-3 pl-md-0">
                    <div className="p-3 shadow-sm border rounded">
                      <div>
                        <h3 className="h4 fw-700 text-uppercase m-0">
                          discounts
                        </h3>
                        <p className="fs-12 mb-2">
                          Buy fast moving brands just for you
                        </p>
                      </div>
                      <div className="shadow-sm mb-3">
                        <a href="#">
                          <img
                            src="images/discount.jpg"
                            alt="dicount"
                            className="w-100"
                          />
                        </a>
                      </div>
                      <div className="text-right">
                        <a
                          href="#"
                          className="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1"
                        >
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="row py-3 py-md-4">
            <div className="col-12 p-0">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h3 className="h4 fw-700 text-uppercase">
                      best selling brands
                    </h3>
                  </div>

                  <div className="col-12 px-4">
                    <div className="row destSealingGread">
                      <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                        <div className="border">
                          <figure className="m-0">
                            <img src="images/logos/1.png" />
                            <figcaption className="m-0 mt-3 p-3 border-top">
                              <div className="offDiv">Upto 5% off</div>
                              <div>
                                <Link href="/brand">
                                  <a className="btn btn-danger fs-14 rounded-0">
                                    SHOP NOW
                                  </a>
                                </Link>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                        <div className="border">
                          <figure className="m-0">
                            <img src="images/logos/2.png" />
                            <figcaption className="m-0 mt-3 p-3 border-top">
                              <div className="offDiv">Upto 5% off</div>
                              <div>
                                <Link href="/brand">
                                  <a className="btn btn-danger fs-14 rounded-0">
                                    SHOP NOW
                                  </a>
                                </Link>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                        <div className="border">
                          <figure className="m-0">
                            <img src="images/logos/3.png" />
                            <figcaption className="m-0 mt-3 p-3 border-top">
                              <div className="offDiv">Upto 5% off</div>
                              <div>
                                <Link href="/brand">
                                  <a className="btn btn-danger fs-14 rounded-0">
                                    SHOP NOW
                                  </a>
                                </Link>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                        <div className="border">
                          <figure className="m-0">
                            <img src="images/logos/4.png" />
                            <figcaption className="m-0 mt-3 p-3 border-top">
                              <div className="offDiv">Upto 5% off</div>
                              <div>
                                <Link href="/brand">
                                  <a className="btn btn-danger fs-14 rounded-0">
                                    SHOP NOW
                                  </a>
                                </Link>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                        <div className="border">
                          <figure className="m-0">
                            <img src="images/logos/5.png" />
                            <figcaption className="m-0 mt-3 p-3 border-top">
                              <div className="offDiv">Upto 5% off</div>
                              <div>
                                <Link href="/brand">
                                  <a className="btn btn-danger fs-14 rounded-0">
                                    SHOP NOW
                                  </a>
                                </Link>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 col-lg-2 p-2 text-center">
                        <div className="border">
                          <figure className="m-0">
                            <img src="images/logos/6.png" />
                            <figcaption className="m-0 mt-3 p-3 border-top">
                              <div className="offDiv">Upto 5% off</div>
                              <div>
                                <Link href="/brand">
                                  <a className="btn btn-danger fs-14 rounded-0">
                                    SHOP NOW
                                  </a>
                                </Link>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="row py-3 py-md-4">
            <div className="col-12 p-0">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h3 className="h4 fw-700 text-uppercase">
                      TRENDING CATEGORY
                    </h3>
                  </div>

                  <div className="col-12 px-4">
                    <div className="row">
                      <div className="col-6 col-md-3 p-2">
                        <div className="productList border rounded-top">
                          <img
                            src="images/1.jpg"
                            alt="product image"
                            className="w-100 rounded-top"
                          />
                          <div className="pr-det text-center">
                            <div className="logoBox">
                              <img src="images/logos/7.png" />
                            </div>
                            <div className="text-danger text-uppercase fw-700 py-2">
                              Save Upto 10%
                            </div>
                            <a
                              href="#"
                              className="btn btn-danger btn-block fs-14 py-1 rounded-0"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-6 col-md-3 p-2">
                        <div className="productList border rounded-top">
                          <img
                            src="images/2.jpg"
                            alt="product image"
                            className="w-100 rounded-top"
                          />
                          <div className="pr-det text-center">
                            <div className="logoBox">
                              <img src="images/logos/8.png" />
                            </div>
                            <div className="text-danger text-uppercase fw-700 py-2">
                              Save Upto 10%
                            </div>
                            <a
                              href="#"
                              className="btn btn-danger btn-block fs-14 py-1 rounded-0"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-6 col-md-3 p-2">
                        <div className="productList border rounded-top">
                          <img
                            src="images/3.jpg"
                            alt="product image"
                            className="w-100 rounded-top"
                          />
                          <div className="pr-det text-center">
                            <div className="logoBox">
                              <img src="images/logos/9.png" />
                            </div>
                            <div className="text-danger text-uppercase fw-700 py-2">
                              Save Upto 10%
                            </div>
                            <a
                              href="#"
                              className="btn btn-danger btn-block fs-14 py-1 rounded-0"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-6 col-md-3 p-2">
                        <div className="productList border rounded-top">
                          <img
                            src="images/4.jpg"
                            alt="product image"
                            className="w-100 rounded-top"
                          />
                          <div className="pr-det text-center">
                            <div className="logoBox">
                              <img src="images/logos/10.png" />
                            </div>
                            <div className="text-danger text-uppercase fw-700 py-2">
                              Save Upto 10%
                            </div>
                            <a
                              href="#"
                              className="btn btn-danger btn-block fs-14 py-1 rounded-0"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="row DiscountsOffersRecent">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 py-3 py-md-4">
                  <h3 className="fs-16 fw-400 border-bottom pb-2 text-uppercase">
                    Best Discounts
                  </h3>
                  <div className="Discounts-owl-carousel owl-carousel">
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/1.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/2.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/3.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/4.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/5.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/6.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/7.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/8.png" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 py-3 py-md-4">
                  <h3 className="fs-16 fw-400 border-bottom pb-2 text-uppercase">
                    Best Offers
                  </h3>
                  <div className="Offers-owl-carousel owl-carousel">
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/9.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/10.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/1.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/2.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/3.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/4.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/5.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/6.png" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 py-3 py-md-4">
                  <h3 className="fs-16 fw-400 border-bottom pb-2 text-uppercase">
                    YOUR FAVOURITE
                  </h3>
                  <div className="Recent-owl-carousel owl-carousel">
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/7.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/8.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/9.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/10.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/1.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/2.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/3.png" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="border">
                        <img src="images/logos/4.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="row TrendingBrands py-3 py-md-4">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="fs-22 text-uppercase fw-700 text-muted">
                    <span>Trending Brands</span>
                  </h3>
                </div>
                <div className="col-12">
                  <div className="TrendingBrands-owl-carousel owl-carousel">
                    <div className="item">
                      <div className="productList border rounded p-0">
                        <img
                          src="images/tranding-brand/1.jpg"
                          alt="product image"
                          className="w-100 rounded"
                        />
                        <div className="pr-det text-center">
                          <div className="logoBox">
                            <img src="images/tranding-brand/1.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="productList border rounded p-0">
                        <img
                          src="images/tranding-brand/2.jpg"
                          alt="product image"
                          className="w-100 rounded"
                        />
                        <div className="pr-det text-center">
                          <div className="logoBox">
                            <img src="images/tranding-brand/2.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="productList border rounded p-0">
                        <img
                          src="images/tranding-brand/3.jpg"
                          alt="product image"
                          className="w-100 rounded"
                        />
                        <div className="pr-det text-center">
                          <div className="logoBox">
                            <img src="images/tranding-brand/3.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="productList border rounded p-0">
                        <img
                          src="images/tranding-brand/4.jpg"
                          alt="product image"
                          className="w-100 rounded"
                        />
                        <div className="pr-det text-center">
                          <div className="logoBox">
                            <img src="images/tranding-brand/5.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="productList border rounded p-0">
                        <img
                          src="images/tranding-brand/5.jpg"
                          alt="product image"
                          className="w-100 rounded"
                        />
                        <div className="pr-det text-center">
                          <div className="logoBox">
                            <img src="images/tranding-brand/4.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="productList border rounded p-0">
                        <img
                          src="images/tranding-brand/6.jpg"
                          alt="product image"
                          className="w-100 rounded"
                        />
                        <div className="pr-det text-center">
                          <div className="logoBox">
                            <img src="images/tranding-brand/6.png" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="productList border rounded p-0">
                        <img
                          src="images/tranding-brand/7.jpg"
                          alt="product image"
                          className="w-100 rounded"
                        />
                        <div className="pr-det text-center">
                          <div className="logoBox">
                            <img src="images/tranding-brand/1.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="row footer-arya pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 d-block d-md-none">
                  <a href="avascript:void(0)" className="backToTop">
                    Back to top
                  </a>
                </div>

                <div className="col-12 pb-3">
                  <ol className="footerVerticalLinks">
                    <li className="footerVerticalLinks-item">CATEGORY</li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Apparel &amp; Accessories</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Food &amp; Beverage</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Mobile &amp; Electronics</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Health &amp; Wellness</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Movie &amp; Magazines</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Cabs &amp; Travel</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">e-Com &amp; Online</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Grocery &amp; Home Needs</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Apparel &amp; Accessories</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Food &amp; Beverage</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Mobile &amp; Electronics</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Health &amp; Wellness</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Movie &amp; Magazines</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Cabs &amp; Travel</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">e-Com &amp; Online</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="#">Grocery &amp; Home Needs</a>
                    </li>
                  </ol>
                </div>
                <div className="col-12 pb-4">
                  <ol className="footerVerticalLinks">
                    <li className="footerVerticalLinks-item">BRANDS</li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">ALDO</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Allen Solly</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Armani Exchange</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Arrow</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">BEBE</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Bata</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Benetton</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Central</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Club SP</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Coach</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Elle</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Fastrack</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Flying Machine</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Baskin Robbins</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Cafe Coffee Day Online</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Costa Coffee</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">KFC</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Machaan</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Mainland China</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">ALDO</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Allen Solly</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Armani Exchange</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Arrow</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">BEBE</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Bata</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Benetton</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Central</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Club SP</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Coach</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Elle</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Fastrack</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Flying Machine</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Baskin Robbins</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Cafe Coffee Day Online</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Costa Coffee</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">KFC</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="/brand">Machaan</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="container-fluid br-b-1 br-t-1 bg-fbfbfb br-color-light pt-4 pb-4">
              <div className="row">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-lg-8">
                      <div className="row align-items-end">
                        <div className="col-md-6 pr-lg-5">
                          <div className="row">
                            <div className="col-12">
                              <h5 className="m-0 fs-16">Subscribe</h5>
                            </div>
                            <div className="col-12">
                              <form className="DownloadSMSform subscribeForm">
                                <div className="d-block w-100">
                                  <ul className="list-inline customNewCheck br-0 m-0 p-0 py-1">
                                    <li className="list-inline-item">
                                      <input type="checkbox" id="OffersCheck" />
                                      <label htmlFor="OffersCheck">
                                        Offers
                                      </label>
                                    </li>
                                    <li className="list-inline-item">
                                      <input type="checkbox" id="BrandsCheck" />
                                      <label htmlFor="BrandsCheck">
                                        Brands
                                      </label>
                                    </li>
                                    <li className="list-inline-item">
                                      <input type="checkbox" id="allCheck" />
                                      <label htmlFor="allCheck">All</label>
                                    </li>
                                  </ul>
                                </div>
                                <div className="formFild mt-1">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placeholder="E-Mail"
                                  />
                                  <button className="btn btn-outline-dark">
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 pl-lg-5 mt-3 mt-md-0">
                          <div className="row">
                            <div className="col-12">
                              <h5 className="m-0 fs-16">Download</h5>
                            </div>
                            <div className="col-12">
                              <ul className="list-inline br-0 m-0 p-0 pt-1 pb-2 DownloadAppNew">
                                <li className="list-inline-item">
                                  <a href="#"></a>
                                  <a href="#">
                                    <img src="images/apple-icon.png" alt="" />
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <img src="images/pl.png" alt="" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12">
                              <form className="DownloadSMSform">
                                <div className="formFild mt-1">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    placeholder="Download via SMS"
                                  />
                                  <button className="btn btn-outline-dark">
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col collepsMobileOne">
                      <h4>ABOUT</h4>
                      <ul className="footer-linke">
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                        <li>
                          <a href="#">Blogs</a>
                        </li>
                        <li>
                          <a href="#">Press</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col collepsMobileTwo">
                      <h4>CUSTOMER CARE</h4>
                      <ul className="footer-linke">
                        <li>
                          <a href="#">Helpline 1800419915</a>
                        </li>
                        <li>
                          <a href="#">Request a Call Back</a>
                        </li>
                        <li>
                          <a href="mailto:help@gyftr.com">help@gyftr.com</a>
                        </li>
                        <li>
                          <a href="#">FAQs</a>
                        </li>
                        <li>
                          <a href="#">Program T&amp;C</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col collepsMobileThree">
                      <h4>MY ACCOUNT</h4>
                      <ul className="footer-linke">
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">My Transactions</a>
                        </li>
                        <li>
                          <a href="#">My Profile</a>
                        </li>
                        <li>
                          <a href="#">About BPCL PetroMiles</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-sm-12 collepsMobileFour">
                          <h4>SOCIAL</h4>
                          <ul className="list-inline footer-social">
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fab fa-facebook-square"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fab fa-twitter-square"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid br-t-1 pt-md-3 mt-md-3">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center text-lg-right mt-2 mt-lg-0">
                      <ul className="payment-logos">
                        <li className="visa">Visa</li>
                        <li className="mastercard">MasterCard</li>
                        <li className="american-express">American Express</li>
                        <li className="diners-club">Diners Club</li>
                        <li className="rupay">Rupay</li>
                        <li className="EMIOptions">EMI Options</li>
                        <li className="NetBanking">Net Banking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid footerLast">
              <div className="row">
                <div className="container">
                  <div className="row align-items-center text-center">
                    <div className="col-12 col-md-8 text-md-left">
                      © 2016. Vouchagram India Pvt. Ltd{" "}
                      <span className="pr-2 pl-2">|</span>{" "}
                      <a href="#">Privacy Policy</a>
                      <span className="pr-2 pl-2">|</span>
                      <a href="#">Terms of Use</a>{" "}
                    </div>
                    <div className="col-12 col-md-4 text-md-right pt-2 pt-md-0">
                      <div className="d-inline-block">
                        <span className="d-inline-block mt-2 mr-2">
                          Powered by
                        </span>
                        <a
                          href="https://www.gyftr.com/"
                          target="_blank"
                          className="float-right"
                        >
                          <img src="images/footer-logo.png" alt="GyFtr" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 bg-danger text-center text-white fs-14 px-0 mt-3">
              <div className="container py-3">
                For more details, please contact our Phone Banking Nubers: 1860
                500 5004/ +91 22 4406 6666 or
                <br /> visit{" "}
                <a
                  href="https://www.indusind.com"
                  target="_blank"
                  className="text-white"
                >
                  www.indusind.com
                </a>{" "}
                or write to us at{" "}
                <a href="mailto:reachus@indusind.com" className="text-white">
                  reachus@indusind.com
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div
        className="modal customModal"
        tabIndex="-1"
        role="dialog"
        id="login"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <a className="close-btn" data-dismiss="modal">
              close
            </a>
            <div className="modal-body">
              <div>
                <div className="row">
                  <div
                    className="col-12 fs-24 text-danger"
                    style={{ marginTop: "-18px" }}
                  >
                    <span className="d-inline-block px-1 bg-white">
                      Login/Signup
                    </span>
                  </div>
                  <div className="col-12 py-4">
                    <form id="form2">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
                        />
                        <div
                          className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Mobile Number
                        </div>
                      </div>
                      <div className="d-block">
                        <button
                          type="button"
                          className="btn btn-danger px-4 rounded-0 text-uppercase"
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#PasswordMod"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal customModal"
        tabIndex="-1"
        role="dialog"
        id="PasswordMod"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <a className="close-btn" data-dismiss="modal">
              PasswordMod Password
            </a>
            <div className="modal-body">
              <div>
                <div className="row">
                  <div
                    className="col-12 fs-24 text-danger"
                    style={{ marginTop: "-18px" }}
                  >
                    <span className="d-inline-block px-1 bg-white">
                      Login/Signup
                    </span>
                  </div>
                  <div className="col-12 py-4">
                    <form id="form2">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
                          value="9910448494"
                          readOnly
                        />
                        <div
                          className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Mobile Number
                        </div>
                      </div>
                      <div className="form-group m-0">
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterMobileN"
                          placeholder="Enter Password"
                        />
                        <div
                          className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Password
                        </div>
                      </div>
                      <div className="form-group text-right">
                        <a className="font-italic fs-12 text-danger" href="#">
                          Forgot Password
                        </a>
                      </div>
                      <div className="d-block">
                        <button
                          type="button"
                          className="btn btn-danger px-4 rounded-0 text-uppercase"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal customModal"
        tabIndex="-1"
        role="dialog"
        id="Forgot"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <a className="close-btn" data-dismiss="modal">
              Forgot Password
            </a>
            <div className="modal-body">
              <div>
                <div className="row">
                  <div
                    className="col-12 fs-24 text-danger"
                    style={{ marginTop: "-18px" }}
                  >
                    <span className="d-inline-block px-1 bg-white">
                      Login/Signup
                    </span>
                  </div>
                  <div className="col-12 py-4">
                    <form id="form2">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
                        />
                        <div
                          className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Mobile Number
                        </div>
                      </div>
                      <div className="form-group m-0">
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterMobileN"
                          placeholder="Enter OTP"
                        />
                        <div
                          className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Valid OTP
                        </div>
                      </div>
                      <div className="form-group text-right">
                        <a className="font-italic fs-12 text-danger" href="#">
                          Resend OTP
                        </a>
                      </div>
                      <div className="d-block">
                        <button
                          type="button"
                          className="btn btn-primary px-4 fw-600 btn-lg rounded-0 text-uppercase"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal customModal"
        tabIndex="-1"
        role="dialog"
        id="login"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <a className="close-btn" data-dismiss="modal">
              close
            </a>
            <div className="modal-body">
              <div>
                <div className="row">
                  <div
                    className="col-12 fs-24 text-danger"
                    style={{ marginTop: "-18px" }}
                  >
                    <span className="d-inline-block px-1 bg-white">
                      Login/Signup
                    </span>
                  </div>
                  <div className="col-12 py-4">
                    <form id="form2">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
                        />
                        <div
                          className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Mobile Number
                        </div>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Name"
                        />
                        <div
                          className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Valid Name
                        </div>
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Email"
                        />
                        <div
                          className="alert alert-danger fs-14 m-0 p-2 rounded-0"
                          role="alert"
                          style={{ display: "none" }}
                        >
                          Please Enter Valid Email
                        </div>
                      </div>

                      <div className="d-block">
                        <button
                          type="button"
                          className="btn btn-danger px-4 rounded-0 text-uppercase"
                        >
                          Signup
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
