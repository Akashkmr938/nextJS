import React from "react";

const Brand = () => {
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
                <a href="index.html">Home</a>
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
                      {/* <!-- <li className="list-inline-item"><a href="#" data-toggle="modal" data-target="#login">Login/Register</a></li> --> */}
                      <li className="list-inline-item dropdown">
                        {" "}
                        <a
                          className="dropdown-toggle"
                          href="#"
                          id="ProfileMenu"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Hi Amitabh Kumar!
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow rounded-0 fs-14 border-0 mt-1"
                          aria-labelledby="ProfileMenu"
                        >
                          <a className="d-block p-2 lh-1" href="#">
                            {" "}
                            <span className="pr-2">
                              <img src="images/profile-icon.png" />
                            </span>{" "}
                            My Profile
                          </a>
                          <a className="d-block p-2 lh-1" href="#">
                            {" "}
                            <span className="pr-2">
                              <img src="images/tr-icon.png" />
                            </span>{" "}
                            My Transaction
                          </a>
                          <a className="d-block p-2 lh-1" href="#">
                            {" "}
                            <span className="pr-2">
                              <img src="images/logout-icon.png" />
                            </span>{" "}
                            Logout
                          </a>
                        </div>
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
                        {" "}
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
                    <div className="classSearch">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="Search by Brand / Product"
                      />
                    </div>
                  </div>
                  <div className="col-7 col-md-4 text-right center-logo">
                    <a href="index.html">
                      <img src="images/logo.png" className="img-fluid" />
                    </a>
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
                        <br />
                        Accessories
                      </figcaption>
                    </figure>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="apparel-accessories-Dropdown"
                  >
                    {" "}
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
                        <br />
                        Beverage
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
                        <br />
                        Home Needs
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
                        <br />
                        Electronics
                      </figcaption>
                    </figure>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="MobileElectronics-Dropdown"
                  >
                    {" "}
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
                        <br />
                        Wellness
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
                        <br />
                        Online
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
                        <br />
                        Magazines
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
                        <br />
                        Travel
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
                        <br />
                        Brands
                      </figcaption>
                    </figure>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <section className="row">
            <div className="col-12 px-0">
              <img
                src="images/brand-banner.jpg"
                className="w-100 d-none d-md-block"
              />
              <img
                src="images/brand-mobile-banner.jpg"
                className="w-100 d-block d-md-none"
              />
            </div>
          </section>
          <section className="row brandPage pb-3 pb-md-4">
            <div className="col-12 px-0">
              <div className="container">
                <div className="row">
                  {/* <!-- <div className="col-12">
                   
                </div> --> */}
                  <div className="col-12 col-lg-8">
                    <div className="bg-white px-3 border">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent px-0 m-0 fs-14 fw-600 justify-content-end pb-md-0">
                          <li className="breadcrumb-item text-uppercase">
                            <a href="index.html">HOME</a>
                          </li>
                          <li className="breadcrumb-item text-uppercase">
                            <a href="index.html">Grocery &amp; Home Needs</a>
                          </li>
                          <li
                            className="breadcrumb-item text-uppercase active"
                            aria-current="page"
                          >
                            More
                          </li>
                        </ol>
                      </nav>
                      <div>
                        <div className="pb-3">
                          <img src="images/more.png" />
                        </div>
                        <h2 className="h6">
                          Buy/Redeem MORE Gift Vouchers &amp; Gift Card
                        </h2>
                        <p className="fs-14 m-0">
                          Owned by More Retail Limited, More stores are
                          hypermarkets for every home need. Customers find
                          groceries, home essentials, cosmetics, fashion
                          essentials, etc under one roof. Choose More Gift Cards
                          and Gift Vouchers for cashless shopping.
                        </p>
                      </div>
                      <div className="productPageCoupon p-3 my-3">
                        <div className="row">
                          <div className="col-12">
                            <label className="fs-14 fw-700">
                              Your Promo Code
                            </label>
                            <div className="row align-items-end pb-1 promoFild">
                              <div className="col-7 col-md-9 pr-0">
                                <input
                                  type="text"
                                  className="form-control text-success"
                                  name=""
                                  value="SBNPZ"
                                  readOnly
                                />{" "}
                                <a
                                  href="#"
                                  className="editPromo"
                                  title="Edit Promocode"
                                >
                                  <i className="far fa-edit"></i>
                                </a>
                              </div>
                              <div className="col-5 col-md-3 pl-0">
                                <button className="btn btn-outline-success btn-block fs-14 rounded-0">
                                  APPLIED
                                </button>
                              </div>
                              {/* <!--  <div className="col-5 col-md-3 pl-0"><button className="btn btn-outline-success btn-block fs-14 rounded-0">APPLY</button></div> --> */}
                            </div>
                            <p className="fs-14 m-0 pb-1">
                              <i className="fas fa-check-circle text-success"></i>{" "}
                              Promo applied successfully.
                            </p>
                            <p className="fs-14 m-0 pb-1">
                              <i className="fas fa-times-circle text-danger"></i>{" "}
                              Invalid Promo Code.
                            </p>
                            <p className="fs-14 m-0 pb-1">
                              You got a discount of ₹ 515
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="productPageCoupon OrangeBox px-3 py-1 my-3 GreenBox">
                        <div className="row align-items-center">
                          <div className="col-auto border-right">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="SBNPZ"
                                name="customRadio"
                                className="custom-control-input"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label fs-16 fw-600"
                                htmlFor="SBNPZ"
                              >
                                SBNPZ
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <p className="m-0 fs-14">
                              Save ₹ 500 (₹250 instant OFF + ₹250 cashback in
                              PayZapp wallet on applying the code on PayZapp
                              payment page).
                              <br />{" "}
                              <a href="#" className="text-danger">
                                Terms &amp; Conditions
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="productPageCoupon OrangeBox px-3 py-1 my-3">
                        <div className="row align-items-center">
                          <div className="col-auto border-right">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="SBAMZ"
                                name="customRadio"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label fs-16 fw-600"
                                htmlFor="SBAMZ"
                              >
                                SBAMZ
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <p className="m-0 fs-14">
                              Save ₹ 500 (₹250 instant OFF + ₹250 cashback in
                              PayZapp wallet on applying the code on PayZapp
                              payment page).
                              <br />{" "}
                              <a href="#" className="text-danger">
                                Terms &amp; Conditions
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <h5 className="text-uppercase text-muted pb-2">
                          Select Voucher Value (₹)
                        </h5>
                        <table className="table cart-table brand-2 m-0 fs-14">
                          <thead>
                            <tr className="thead">
                              <th className="description">Value(₹)</th>
                              <th className="pa hideOnMobile">Offer</th>
                              <th className="quantity">Qty</th>
                              <th className="price">Total(₹)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="description">
                                <span>100</span>
                              </td>
                              <td className="pa hideOnMobile">
                                <div>
                                  <p>Free Promocode</p>
                                </div>
                              </td>
                              <td className="qty-td">
                                <div className="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    className="qty"
                                    readOnly
                                  />{" "}
                                  <span className="inc button">+</span>
                                  <span className="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td className="description">
                                <div>
                                  <span>90</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="description">
                                <span>250</span>
                              </td>
                              <td className="pa hideOnMobile">
                                <div>
                                  <p>Free ₹100 Bata Gift Voucher</p>
                                </div>
                              </td>
                              <td className="qty-td">
                                <div className="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    className="qty"
                                    readOnly
                                  />{" "}
                                  <span className="inc button">+</span>
                                  <span className="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td className="description">
                                <div>
                                  <span>225</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan="3"
                                className="pa hideOnDesktop border-0 mobile-offer"
                              >
                                <div>
                                  <p>
                                    <span className="text-secondary">
                                      Offes:
                                    </span>{" "}
                                    Free ₹100 Bata Gift Voucher
                                  </p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="description">
                                <span>500</span>
                              </td>
                              <td className="pa hideOnMobile">
                                <div>
                                  <p>10% Off</p>
                                </div>
                              </td>
                              <td className="qty-td">
                                <div className="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    className="qty"
                                    readOnly
                                  />{" "}
                                  <span className="inc button">+</span>
                                  <span className="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td className="description">
                                <div>
                                  <span>450</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="description">
                                <span>1000</span>
                              </td>
                              <td className="pa hideOnMobile">
                                <div>
                                  <p>10% Off</p>
                                </div>
                              </td>
                              <td className="qty-td">
                                <div className="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    className="qty"
                                    readOnly
                                  />{" "}
                                  <span className="inc button">+</span>
                                  <span className="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td className="description">
                                <div>
                                  <span>900</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="description">
                                <span>2000</span>
                              </td>
                              <td className="pa hideOnMobile">
                                <div>
                                  <p>10% Off</p>
                                </div>
                              </td>
                              <td className="qty-td">
                                <div className="define-quantity">
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    className="qty"
                                    readOnly
                                  />{" "}
                                  <span className="inc button">+</span>
                                  <span className="dec button">-</span>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0"
                                >
                                  ADD
                                </button>
                              </td>
                              <td className="description">
                                <div>
                                  <span>1800</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 topSticky">
                    {" "}
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#MobileSummaryPopup"
                      className="MobileSummaryBtn"
                    >
                      <span>Summary</span>
                      <span>₹ 800</span>
                    </a>
                    <div className="DesktopSummary">
                      <div className="SummaryRight shadow-none">
                        <div className="productPageBox px-3">
                          <div className="d-flex py-3 justify-content-between align-items-center">
                            <h3 className="fs-16 fw-700 m-0">SUMMARY</h3>
                          </div>
                          <div className="repaeatBox">
                            <div className="row py-2 border-bottom border-top">
                              <div className="col-12 text-uppercase fw-700 pt-1 text-muted">
                                <div className="d-flex justify-content-between align-items-center">
                                  {" "}
                                  <span>VERO MODA</span>
                                  <a href="#" className="text-muted fs-12">
                                    <i className="fas fa-trash-alt m-0"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col-8 py-1 fs-14">
                                ₹ 1000{" "}
                                <span className="text-success">(X 2)</span>
                              </div>
                              <div className="col-4 py-1 fs-14 text-right">
                                ₹ 2000
                              </div>
                            </div>
                            <div className="row py-2 border-bottom border-dot">
                              <div className="col-8 fs-14">
                                Cash Savigs (10%)
                              </div>
                              <div className="col-4 fs-14 text-right">
                                ₹ 200
                              </div>
                            </div>
                            <div className="row py-3 border-bottom border-dot">
                              <div className="col-8 fs-14 fw-700">
                                Sub Total
                              </div>
                              <div className="col-4 fs-14 text-right fw-700">
                                ₹ 1800
                              </div>
                            </div>
                          </div>
                          <div className="repaeatBox">
                            <div className="row py-2 border-bottom border-top">
                              <div className="col-12 text-uppercase fw-700 pt-1 text-muted">
                                <div className="d-flex justify-content-between align-items-center">
                                  {" "}
                                  <span>BATA</span>
                                  <a href="#" className="text-muted fs-12">
                                    <i className="fas fa-trash-alt m-0"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col-8 py-1 fs-14">
                                ₹ 1000{" "}
                                <span className="text-success">(X 2)</span>
                              </div>
                              <div className="col-4 py-1 fs-14 text-right">
                                ₹ 2000
                              </div>
                            </div>
                            <div className="row py-2 border-bottom border-dot">
                              <div className="col-8 fs-14">
                                Cash Savigs (10%)
                              </div>
                              <div className="col-4 fs-14 text-right">
                                ₹ 200
                              </div>
                            </div>
                            <div className="row py-3 border-bottom border-dot">
                              <div className="col-8 fs-14 fw-700">
                                Sub Total
                              </div>
                              <div className="col-4 fs-14 text-right fw-700">
                                ₹ 1800
                              </div>
                            </div>
                          </div>
                          <div className="row m-0 py-2 bg-dark text-white rounded my-3">
                            <div className="col-7 fs-18 fw-500">
                              Net Payable
                            </div>
                            <div className="col-5 fs-18 fw-500 text-right text-nowrap">
                              ₹ 3600
                            </div>
                          </div>
                        </div>
                        <div className="productPageBox px-3 mt-3 mt-md-4">
                          <div className="pt-3">
                            <div className="custom-control custom-checkbox fs-14 py-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                                checked=""
                                readOnly
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                I agree to the{" "}
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#tc"
                                  className="text-danger"
                                >
                                  Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                          <div className="py-2">
                            <button
                              type="button"
                              className="btn btn-danger btn-block mb-2 fs-14"
                              data-toggle="modal"
                              data-target="#tcConfirmation"
                            >
                              BUY NOW
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-block mb-2 fs-14"
                              data-toggle="modal"
                              data-target="#tcConfirmation"
                            >
                              ADD TO CART
                            </button>
                          </div>
                          <div className="pb-3 fs-12">
                            We accept Credit Card, Debit Card, Netbanking, EMIs,
                            Wallets
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="row impIns pb-3 pb-md-4">
            <div className="container">
              <div className="bg-white border">
                <div className="row m-0 bg-white ImportantInstructions align-items-center">
                  <div className="col-md-6 col-12 py-3 py-md-4 bg-light">
                    <h3 className="fs-16 text-uppercase">
                      Important Instructions
                    </h3>
                    <ul className="fs-14 m-0 ImportantInstructionsList">
                      <li>
                        Multiple Gift Vouchers <span>CAN</span> be used in one
                        bill.
                      </li>
                      <li>
                        Gift Vouchers <span>CAN</span> be used during Sale.
                      </li>
                      <li>
                        Gift Vouchers <span>ACCEPTED</span> at all Listed
                        Outlets.
                      </li>
                      <li className="dont">
                        Gift Vouchers <span>CANNOT</span> be used Online.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-5 px-md-4 px-lg-5 col-12 py-3">
                    <div className="pb-3">
                      <div className="d-flex w-100 storeFinder align-items-center">
                        <div className="form-group w-100 m-0">
                          <input
                            type="text"
                            className="form-control"
                            name=""
                            placeholder="Store Locator"
                          />
                        </div>
                        <button
                          type="button"
                          className="btn rounded-0 border-bottom fs-14 py-1 sls"
                          data-toggle="modal"
                          data-target="#StoreLocator"
                        >
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary text-uppercase rounded-0 btn-block"
                      data-toggle="modal"
                      data-target="#tc"
                    >
                      Terms &amp; Conditions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="row howTo pb-3">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="h4 text-uppercase fw-700 text-muted">
                    <span>How to Redeem</span>
                  </h3>
                </div>
                <div className="col-12">
                  <div className="how-to-Redeem-carousel owl-carousel stepsBox fs-12">
                    <div className="item m-1">
                      <figure>
                        <img src="images/step_1.png" />
                        <figcaption>
                          <p>
                            Use the outlet locator to locate the nearest outlet
                            that accepts this Gift Voucher.
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="item m-1">
                      <figure>
                        <img src="images/step_2.png" />
                        <figcaption>
                          <p>Select your choice of product.</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="item m-1">
                      <figure>
                        <img src="images/step_3.png" />
                        <figcaption>
                          <p>
                            Share your Gift Voucher with the cashier at the time
                            of billing & pay the remaining amount by cash or
                            card if required.
                          </p>
                        </figcaption>
                      </figure>
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
                      <a href="brand.html">ALDO</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Allen Solly</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Armani Exchange</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Arrow</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">BEBE</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Bata</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Benetton</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Central</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Club SP</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Coach</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Elle</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Fastrack</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Flying Machine</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Baskin Robbins</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Cafe Coffee Day Online</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Costa Coffee</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">KFC</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Machaan</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Mainland China</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">ALDO</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Allen Solly</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Armani Exchange</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Arrow</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">BEBE</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Bata</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Benetton</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Central</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Club SP</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Coach</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Elle</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Fastrack</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Flying Machine</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Baskin Robbins</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Cafe Coffee Day Online</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Costa Coffee</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">KFC</a>
                    </li>
                    <li className="footerVerticalLinks-item">
                      <a href="brand.html">Machaan</a>
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
                      <a href="#">Terms of Use</a>
                    </div>
                    <div className="col-12 col-md-4 text-md-right pt-2 pt-md-0">
                      <div className="d-inline-block">
                        {" "}
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
                <br />
                visit{" "}
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
            {" "}
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
                    <form style={{}} id="form2">
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
            {" "}
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
                    <form style={{}} id="form2">
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
                          readOnly
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
                        {" "}
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
            {" "}
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
                    <form style={{}} id="form2">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
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
                          placeholder="Enter OTP"
                          readOnly
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
                        {" "}
                        <a className="font-italic fs-12 text-danger" href="#">
                          Resend OTP
                        </a>
                      </div>
                      <div className="d-block">
                        <button
                          type="button"
                          className="btn btn-danger px-4 fw-600 btn-lg rounded-0 text-uppercase"
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
            {" "}
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
                    <form style={{}} id="form2">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Mobile"
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
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0 fs-18"
                          name=""
                          id="DeliveryEnterName"
                          placeholder="Enter Name"
                          readOnly
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
                          readOnly
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
      {/* <!-- Mobile Summary Modal --> */}
      <div
        className="modal"
        id="MobileSummaryPopup"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="tcModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content rounded-0">
            <div className="modal-body p-0">
              <div>
                <button
                  type="button"
                  className="close position-absolute"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  {" "}
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="MobileSummaryHere"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Terms & Conditions Modal --> */}
      <div
        className="modal"
        id="tc"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="tcModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content rounded-0">
            <div className="modal-header py-2 bg-light border-0">
              <h5
                className="modal-title fs-18 fw-600 text-uppercase"
                id="tcModalCenterTitle"
              >
                Terms & Conditions
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body fs-14">
              <ol className="pl-3">
                <li className="pb-1">
                  This is a Woodland Instant Gift Voucher / Card (GV) and would
                  be accepted at listed outlets ( for outlet list visit
                  www.gyftr.com/woodland)
                </li>
                <li className="pb-1">
                  The person who has the Woodland GV Code is deemed to be the
                  beneficiary.
                </li>
                <li className="pb-1">
                  Do inform the cashier that you plan using the GV for making
                  payments before billing.
                </li>
                <li className="pb-1">
                  Only the listed Woodland outlets at its sole discretion accept
                  the GV. Woodland may add or remove an outlet without giving
                  any prior notice.
                </li>
                <li className="pb-1">
                  More than one GV can be used in one bill.
                </li>
                <li className="pb-1">The is a ONE time use GV.</li>
                <li className="pb-1">
                  No Credit note / Refund for the unused amount of the GV will
                  be given.
                </li>
                <li className="pb-1">
                  Woodland Insta Gift Voucher (GV) / Gift Card CANNOT be
                  revalidated once expired.
                </li>
                <li className="pb-1">
                  Woodland Insta Gift Voucher (GV) / Gift Card can be used
                  during sale.
                </li>
                <li className="pb-1">
                  Any dispute related to the Insta Gift Voucher (GV) should be
                  referred to the issuing company and the decision of the
                  issuing company shall be final.
                </li>
                <li className="pb-1">
                  Woodland makes full efforts to accept Instant Gift Voucher
                  (GV) / Gift Card, but on account of any technical /
                  administrative reasons an outlet may refuse to accept the
                  same.
                </li>
                <li className="pb-1">
                  If an Instant Gift Voucher (GV) / Gift Card gets blocked on
                  account of technical issue, it would get enabled in 72 hours.
                </li>
                <li className="pb-1">
                  Please contact Woodland Shop manager for any acceptance issue
                  and if issue is still not resolved, you can write in to
                  help@gyftr.com or call 18001033314 for immediate help
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Store Locator Modal --> */}
      <div
        className="modal fade"
        id="StoreLocator"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="StoreLocatorModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content rounded-0">
            <div className="modal-header py-2 bg-light border-0">
              <h5
                className="modal-title fs-18 fw-600 text-uppercase"
                id="StoreLocatorModalCenterTitle"
              >
                Store Locator
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row fs-14">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="box">
                    {" "}
                    <address>
                      <h5 className="fs-16 pt-2 fw-600">
                        Aldo MAHIPALPUR Mall
                      </h5>
                      <p>
                        Select City Walk Mall,
                        <br />
                        G-16 (B),
                        <br />
                        District Centre Saket,
                        <br />
                        New Delhi:-110017
                      </p>
                    </address>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="box">
                    {" "}
                    <address>
                      <h5 className="fs-16 pt-2 fw-600">
                        Aldo MAHIPALPUR Mall
                      </h5>
                      <p>
                        Select City Walk Mall,
                        <br />
                        G-16 (B),
                        <br />
                        District Centre Saket,
                        <br />
                        New Delhi:-110017
                      </p>
                    </address>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="box">
                    {" "}
                    <address>
                      <h5 className="fs-16 pt-2 fw-600">
                        Aldo MAHIPALPUR Mall
                      </h5>
                      <p>
                        Select City Walk Mall,
                        <br />
                        G-16 (B),
                        <br />
                        District Centre Saket,
                        <br />
                        New Delhi:-110017
                      </p>
                    </address>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="box">
                    {" "}
                    <address>
                      <h5 className="fs-16 pt-2 fw-600">
                        Aldo MAHIPALPUR Mall
                      </h5>
                      <p>
                        Select City Walk Mall,
                        <br />
                        G-16 (B),
                        <br />
                        District Centre Saket,
                        <br />
                        New Delhi:-110017
                      </p>
                    </address>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="box">
                    {" "}
                    <address>
                      <h5 className="fs-16 pt-2 fw-600">
                        Aldo MAHIPALPUR Mall
                      </h5>
                      <p>
                        Select City Walk Mall,
                        <br />
                        G-16 (B),
                        <br />
                        District Centre Saket,
                        <br />
                        New Delhi:-110017
                      </p>
                    </address>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="box">
                    {" "}
                    <address>
                      <h5 className="fs-16 pt-2 fw-600">
                        Aldo MAHIPALPUR Mall
                      </h5>
                      <p>
                        Select City Walk Mall,
                        <br />
                        G-16 (B),
                        <br />
                        District Centre Saket,
                        <br />
                        New Delhi:-110017
                      </p>
                    </address>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="box">
                    {" "}
                    <address>
                      <h5 className="fs-16 pt-2 fw-600">
                        Aldo MAHIPALPUR Mall
                      </h5>
                      <p>
                        Select City Walk Mall,
                        <br />
                        G-16 (B),
                        <br />
                        District Centre Saket,
                        <br />
                        New Delhi:-110017
                      </p>
                    </address>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="box">
                    {" "}
                    <address>
                      <h5 className="fs-16 pt-2 fw-600">
                        Aldo MAHIPALPUR Mall
                      </h5>
                      <p>
                        Select City Walk Mall,
                        <br />
                        G-16 (B),
                        <br />
                        District Centre Saket,
                        <br />
                        New Delhi:-110017
                      </p>
                    </address>
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

export default Brand;
