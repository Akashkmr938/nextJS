import Head from "next/head";
import Cart from "../components/cart/Cart";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link href="/styles/footer-style.css" rel="stylesheet" />
        <link href="/styles/owl.carousel.min.css" rel="stylesheet" />
        <link href="/styles/styles.css?v=1.1" rel="stylesheet" />

        <title>Online Gift Voucher Website | Indus Shop Plus</title>
      </Head>



<a href="#" class="cartBtn"><span>1</span><img src="images/cart.png" /></a>
<div class="off-canvas-nav">
  <div class="left-nav-toplink">
    <div class="left-nav">
      <ul class="list-unstyled m-0">
        <li><a href="index.html">Home</a></li>
        <li><a href="#">New Arrivals</a></li>
        <li class="show-mobile parent"><a href="#" data-related="title_1">Categories</a></li>
        <li><a href="#">Discounts</a></li>
        <li><a href="#">Bogo</a></li>
        <li><a href="#">Check My Voucher Status</a></li>
        <li><a href="#">Resend My Voucher</a></li>
        <li><a href="#">My Transactions</a></li>
        <li><a href="#">Customer Care</a></li>
      </ul>
      <div class="subMenu" id="categories">
        <div class="text-right nav-back"><span>Categories</span></div>
        <ul class="list-unstyled m-0">
          <li><a href="category.html">Apparel & Accessories</a></li>
          <li><a href="category.html">Food & Beverage</a></li>
          <li><a href="category.html">Grocery & Home Needs</a></li>
          <li><a href="category.html">Mobile & Electronics</a></li>
          <li><a href="category.html">Health & Wellness</a></li>
          <li><a href="category.html">e-Com & Online</a></li>
          <li><a href="category.html">Entertainment & Magazines</a></li>
          <li><a href="category.html">Cabs & Travel</a></li>
          <li><a href="category.html">All Brands</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="off-canvas-main">

<div class="container-fluid">
  <header class="row border-bottom">
    <div class="col-12 px-0 top-gry">
      <div class="container">
        <div class="row">
          <div class="text-right col-12">
            <ul class="list-inline top-links">
              <li class="list-inline-item"><a href="#" data-toggle="modal" data-target="#login">Login/Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 px-0 bg-white py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-5 col-md-4">
            <ul class="list-inline m-0">
             <li class="list-inline-item">
                <div class="hamburger-icon" id="desktop-hamburger">
                  <div class="top"></div>
                  <div class="middle"></div>
                  <div class="bottom"></div>
                </div>
             </li>
             <li class="list-inline-item call nowrap">
              <span><a href="tel:18001033314"><img src="images/call.png" alt="logo" /></a></span>
              <span class="pl-l fw-700 d-none d-md-inline-block">1800-103-3314</span>
             </li>
            </ul>
          </div>
          <div class="col-md-4 d-none d-md-block">
            <div class="classSearch">
              <input type="text" name="" class="form-control" placeholder="Search by Brand / Product" />
            </div>
          </div>
          <div class="col-7 col-md-4 text-right center-logo">
            <a href="index.html"><img src="images/logo.png" class="img-fluid" /></a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <nav class="desktopNav row border-bottom bg-white">
      <div class="container">
      <ul>
        <li class="dropdown spriteMenu">
          <a href="#" class="dropdown-toggle" id="apparel-accessories-Dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <figure>
              <img src="images/nav-icon/apparels.png" alt="Apparel &amp; Accessories" />
              <figcaption>Apparel &amp;<br/> Accessories</figcaption>
            </figure>
          </a>
          <div class="dropdown-menu" aria-labelledby="apparel-accessories-Dropdown">
            <a class="dropdown-item" href="#">Allen Solly</a>
            <a class="dropdown-item" href="#">Armani Exchange</a>
            <a class="dropdown-item" href="#">Arrow</a>
            <a class="dropdown-item" href="#">Aurelia</a>
            <a class="dropdown-item" href="#">Bata</a>
            <a class="dropdown-item" href="#">Benetton</a>
            <a class="dropdown-item" href="#">BIBA</a>
            <a class="dropdown-item" href="#">Bobbi Brown</a>
            <a class="dropdown-item" href="#">Brand Factory</a>
            <a class="dropdown-item" href="#">Celio</a>
            <a class="dropdown-item" href="#">Central</a>
            <a class="dropdown-item" href="#">Coach</a>
            <a class="dropdown-item" href="#">Euphoria Jewellery (TM) gold coins</a>
            <a class="dropdown-item" href="#">Fastrack</a>
            <a class="dropdown-item" href="#">FBB</a>
            <a class="dropdown-item" href="#">Flying Machine</a>
            <a class="dropdown-item" href="#">G - Star Raw</a>
          </div>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/food-bav.png" alt="Food &amp; Beverage" />
              <figcaption>Food &amp;<br /> Beverage</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#" >
            <figure>
              <img src="images/nav-icon/grocery.png" alt="Grocery &amp; Home Needs" />
              <figcaption>Grocery &amp;<br /> Home Needs</figcaption>
            </figure>
          </a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" id="MobileElectronics-Dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <figure>
              <img src="images/nav-icon/electronics.png" alt="Mobile &amp; Electronics" />
              <figcaption>Mobile &amp;<br /> Electronics</figcaption>
            </figure>
          </a>
          <div class="dropdown-menu" aria-labelledby="MobileElectronics-Dropdown">
            <a class="dropdown-item" href="#">Croma</a>
            <a class="dropdown-item" href="#">Mobile Recharge</a>
          </div>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/health-wellness.png" alt="Health &amp; Wellness" />
              <figcaption>Health &amp;<br /> Wellness</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/ecom-online.png" alt="e-Com &amp; Online" />
              <figcaption>e-Com &amp;<br /> Online</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/entertainment.png" alt="Grocery &amp; Home Needs" />
              <figcaption>Entertainment &amp;<br /> Magazines</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/cab.png" alt="Cabs &amp; Travel" />
              <figcaption>Cabs &amp;<br /> Travel</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src="images/nav-icon/all.png" alt="all" />
              <figcaption>All<br /> Brands</figcaption>
            </figure>
          </a>
        </li>
      </ul>
      </div>
    </nav>

    <section class="row">
      <div class="col-12 p-0">
        <div id="carouselHome" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active carousel-item-left">
                <img class="w-100 d-none d-md-block" src="images/banner.jpg" alt="First slide" />
                <img class="w-100 d-block d-md-none " src="images/mobile-banner.jpg" alt="First slide"/>
              </div>
              <div class="carousel-item carousel-item-next carousel-item-left">
                <img class="w-100 d-none d-md-block" src="images/banner.jpg" alt="First slide"/>
                <img class="w-100 d-block d-md-none" src="images/mobile-banner.jpg" alt="First slide"/>
              </div>
            </div>

            <a class="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
      </div>
    </section>

    <section class="row py-2">
      <div class="col-12 p-0">
        <div class="container">
          <div class="row">

            <div class="col-12 col-md-3 p-3 pr-md-0">
              <div class="p-3 shadow-sm border rounded">
                <div>
                   <h3 class="h4 fw-700 text-uppercase m-0">Deal of the day</h3>
                   <p class="fs-12 mb-2">Amazing Deals from choicest brands!</p>
                </div>
                <div class="shadow-sm mb-3">
                  <a href="#">
                    <img src="images/deals.jpg" alt="deals" class="w-100"/>
                  </a>
                </div>
                <div class="text-right">
                  <a href="#" class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">VIEW MORE</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-3">
              <div class="p-3 shadow-sm border rounded">
                <div>
                   <h3 class="h4 fw-700 text-uppercase m-0">Offers</h3>
                   <p class="fs-14 mb-2">Top discounts & deals on leading brands!</p>
                </div>
                <div class="shadow-sm mb-3">
                  <a href="#">
                    <img src="images/offers-1.jpg" alt="offers-1" class="w-100"/>
                  </a>
                </div>
                <div class="shadow-sm mb-3">
                  <a href="#">
                    <img src="images/offers-2.jpg" alt="offers-1" class="w-100"/>
                  </a>
                </div>
                <div class="text-right">
                  <a href="#" class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">VIEW MORE</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3 p-3 pl-md-0">
              <div class="p-3 shadow-sm border rounded">
                <div>
                   <h3 class="h4 fw-700 text-uppercase m-0">discounts</h3>
                   <p class="fs-12 mb-2">Buy fast moving brands just for you</p>
                </div>
                <div class="shadow-sm mb-3">
                  <a href="#">
                    <img src="images/discount.jpg" alt="dicount" class="w-100"/>
                  </a>
                </div>
                <div class="text-right">
                  <a href="#" class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">View More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="row py-3 py-md-4">
      <div class="col-12 p-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h3 class="h4 fw-700 text-uppercase">best selling brands</h3>
            </div>

            <div class="col-12 px-4">
              <div class="row destSealingGread">
                <div class="col-6 col-md-4 col-lg-2 p-2 text-center">
                  <div class="border">
                    <figure class="m-0">
                      <img src="images/logos/1.png"/>
                      <figcaption class="m-0 mt-3 p-3 border-top">
                        <div class="offDiv">Upto 5% off</div>
                        <div><a href="brand.html" class="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2 p-2 text-center">
                  <div class="border">
                    <figure class="m-0">
                      <img src="images/logos/2.png"/>
                      <figcaption class="m-0 mt-3 p-3 border-top">
                        <div class="offDiv">Upto 5% off</div>
                        <div><a href="brand.html" class="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2 p-2 text-center">
                  <div class="border">
                    <figure class="m-0">
                      <img src="images/logos/3.png"/>
                      <figcaption class="m-0 mt-3 p-3 border-top">
                        <div class="offDiv">Upto 5% off</div>
                        <div><a href="brand.html" class="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2 p-2 text-center">
                  <div class="border">
                    <figure class="m-0">
                      <img src="images/logos/4.png"/>
                      <figcaption class="m-0 mt-3 p-3 border-top">
                        <div class="offDiv">Upto 5% off</div>
                        <div><a href="brand.html" class="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2 p-2 text-center">
                  <div class="border">
                    <figure class="m-0">
                      <img src="images/logos/5.png"/>
                      <figcaption class="m-0 mt-3 p-3 border-top">
                        <div class="offDiv">Upto 5% off</div>
                        <div><a href="brand.html" class="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2 p-2 text-center">
                  <div class="border">
                    <figure class="m-0">
                      <img src="images/logos/6.png"/>
                      <figcaption class="m-0 mt-3 p-3 border-top">
                        <div class="offDiv">Upto 5% off</div>
                        <div><a href="brand.html" class="btn btn-danger fs-14 rounded-0">SHOP NOW</a></div>
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


    <section class="row py-3 py-md-4">
      <div class="col-12 p-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h3 class="h4 fw-700 text-uppercase">TRENDING CATEGORY</h3>
            </div>

            <div class="col-12 px-4">
              <div class="row">
                  <div class="col-6 col-md-3 p-2">
                    <div class="productList border rounded-top">
                      <img src="images/1.jpg" alt="product image" class="w-100 rounded-top"/>
                      <div class="pr-det text-center">
                        <div class="logoBox"><img src="images/logos/7.png"/></div>
                        <div class="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                        <a href="#" class="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 col-md-3 p-2">
                    <div class="productList border rounded-top">
                      <img src="images/2.jpg" alt="product image" class="w-100 rounded-top"/>
                      <div class="pr-det text-center">
                        <div class="logoBox"><img src="images/logos/8.png"/></div>
                        <div class="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                        <a href="#" class="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 col-md-3 p-2">
                    <div class="productList border rounded-top">
                      <img src="images/3.jpg" alt="product image" class="w-100 rounded-top"/>
                      <div class="pr-det text-center">
                        <div class="logoBox"><img src="images/logos/9.png"/></div>
                        <div class="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                        <a href="#" class="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 col-md-3 p-2">
                    <div class="productList border rounded-top">
                      <img src="images/4.jpg" alt="product image" class="w-100 rounded-top"/>
                      <div class="pr-det text-center">
                        <div class="logoBox"><img src="images/logos/10.png"/></div>
                        <div class="text-danger text-uppercase fw-700 py-2">Save Upto 10%</div>
                        <a href="#" class="btn btn-danger btn-block fs-14 py-1 rounded-0">SHOP NOW</a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row DiscountsOffersRecent">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 py-3 py-md-4">
            <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">Best Discounts</h3>
            <div class="Discounts-owl-carousel owl-carousel">
              <div class="item"><div class="border"><img src="images/logos/1.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/2.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/3.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/4.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/5.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/6.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/7.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/8.png"/></div></div>
            </div>
          </div>

          <div class="col-12 col-md-4 py-3 py-md-4">
            <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">Best Offers</h3>
            <div class="Offers-owl-carousel owl-carousel">
              <div class="item"><div class="border"><img src="images/logos/9.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/10.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/1.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/2.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/3.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/4.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/5.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/6.png"/></div></div>
            </div>
          </div>

          <div class="col-12 col-md-4 py-3 py-md-4">
            <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">YOUR FAVOURITE</h3>
            <div class="Recent-owl-carousel owl-carousel">
              <div class="item"><div class="border"><img src="images/logos/7.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/8.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/9.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/10.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/1.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/2.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/3.png"/></div></div>
              <div class="item"><div class="border"><img src="images/logos/4.png"/></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row TrendingBrands py-3 py-md-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="fs-22 text-uppercase fw-700 text-muted"><span>Trending Brands</span></h3>
          </div>
          <div class="col-12">
            <div class="TrendingBrands-owl-carousel owl-carousel">
              <div class="item">
                <div class="productList border rounded p-0">
                  <img src="images/tranding-brand/1.jpg" alt="product image" class="w-100 rounded"/>
                  <div class="pr-det text-center">
                    <div class="logoBox"><img src="images/tranding-brand/1.png"/></div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="productList border rounded p-0">
                  <img src="images/tranding-brand/2.jpg" alt="product image" class="w-100 rounded"/>
                  <div class="pr-det text-center">
                    <div class="logoBox"><img src="images/tranding-brand/2.png"/></div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="productList border rounded p-0">
                  <img src="images/tranding-brand/3.jpg" alt="product image" class="w-100 rounded"/>
                  <div class="pr-det text-center">
                    <div class="logoBox"><img src="images/tranding-brand/3.png"/></div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="productList border rounded p-0">
                  <img src="images/tranding-brand/4.jpg" alt="product image" class="w-100 rounded"/>
                  <div class="pr-det text-center">
                    <div class="logoBox"><img src="images/tranding-brand/5.png"/></div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="productList border rounded p-0">
                  <img src="images/tranding-brand/5.jpg" alt="product image" class="w-100 rounded"/>
                  <div class="pr-det text-center">
                    <div class="logoBox"><img src="images/tranding-brand/4.png"/></div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="productList border rounded p-0">
                  <img src="images/tranding-brand/6.jpg" alt="product image" class="w-100 rounded">
                  <div class="pr-det text-center">
                    <div class="logoBox"><img src="images/tranding-brand/6.png"></div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="productList border rounded p-0">
                  <img src="images/tranding-brand/7.jpg" alt="product image" class="w-100 rounded">
                  <div class="pr-det text-center">
                    <div class="logoBox"><img src="images/tranding-brand/1.png"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  <footer class="row footer-arya pb-0">
        <div class="container">
          <div class="row">
              <div class="col-12 d-block d-md-none">
                  <a href="avascript:void(0)" class="backToTop">Back to top</a>
              </div>

        <div class="col-12 pb-3">
          <ol class="footerVerticalLinks">
             <li class="footerVerticalLinks-item">CATEGORY</li>
             <li class="footerVerticalLinks-item"><a href="#">Apparel &amp; Accessories</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Food &amp; Beverage</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Mobile &amp; Electronics</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Health &amp; Wellness</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Movie &amp; Magazines</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Cabs &amp; Travel</a></li>
             <li class="footerVerticalLinks-item"><a href="#">e-Com &amp; Online</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Grocery &amp; Home Needs</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Apparel &amp; Accessories</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Food &amp; Beverage</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Mobile &amp; Electronics</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Health &amp; Wellness</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Movie &amp; Magazines</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Cabs &amp; Travel</a></li>
             <li class="footerVerticalLinks-item"><a href="#">e-Com &amp; Online</a></li>
             <li class="footerVerticalLinks-item"><a href="#">Grocery &amp; Home Needs</a></li>
          </ol>
        </div>
               <div class="col-12 pb-4">
                <ol class="footerVerticalLinks">
                 <li class="footerVerticalLinks-item">BRANDS</li>
                 <li class="footerVerticalLinks-item"><a href="brand.html">ALDO</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Allen Solly</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Armani Exchange</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Arrow</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">BEBE</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Bata</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Benetton</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Central</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Club SP</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Coach</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Elle</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Fastrack</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Flying Machine</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Baskin Robbins</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Cafe Coffee Day Online</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Costa Coffee</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">KFC</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Machaan</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Mainland China</a></li>
                 <li class="footerVerticalLinks-item"><a href="brand.html">ALDO</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Allen Solly</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Armani Exchange</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Arrow</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">BEBE</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Bata</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Benetton</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Central</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Club SP</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Coach</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Elle</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Fastrack</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Flying Machine</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Baskin Robbins</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Cafe Coffee Day Online</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Costa Coffee</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">KFC</a></li>
                <li class="footerVerticalLinks-item"><a href="brand.html">Machaan</a></li>
              </ol>
            </div>
        </div>
      </div>

      <div class="container-fluid br-b-1 br-t-1 bg-fbfbfb br-color-light pt-4 pb-4">
        <div class="row">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col-lg-8">
                <div class="row align-items-end">
                  <div class="col-md-6 pr-lg-5">
                    <div class="row">
                      <div class="col-12">
                        <h5 class="m-0 fs-16">Subscribe</h5>
                      </div>
                      <div class="col-12">
                        <form class="DownloadSMSform subscribeForm">
                          <div class="d-block w-100">
                            <ul class="list-inline customNewCheck br-0 m-0 p-0 py-1">
                              <li class="list-inline-item">
                                <input type="checkbox" id="OffersCheck"> 
                              <label for="OffersCheck">Offers</label> 
                              </li>
                              <li class="list-inline-item">
                                <input type="checkbox" id="BrandsCheck"> 
                                <label for="BrandsCheck">Brands</label> 
                              </li>
                              <li class="list-inline-item">
                                <input type="checkbox" id="allCheck">
                                <label for="allCheck">All</label> 
                              </li>
                            </ul>
                           </div>
                          <div class="formFild mt-1">
                                    <input type="text" class="form-control" id="" placeholder="E-Mail">
                                    <button class="btn btn-outline-dark">Submit</button>
                                  </div>
                        </form>
                      </div>
                           </div>
                      </div>

                  <div class="col-md-6 pl-lg-5 mt-3 mt-md-0">
                    <div class="row">
                      <div class="col-12">
                        <h5 class="m-0 fs-16">Download</h5>
                      </div>
                      <div class="col-12">
                        <ul class="list-inline br-0 m-0 p-0 pt-1 pb-2 DownloadAppNew">
                            <li class="list-inline-item">
                            <a href="#"></a><a href="#"><img src="images/apple-icon.png" alt=""></a>
                            </li>
                            <li class="list-inline-item">
                            <a href="#"><img src="images/pl.png" alt=""></a>
                            </li>
                          </ul>
                      </div>
                      <div class="col-12">
                        <form class="DownloadSMSform">
                                  <div class="formFild mt-1">
                                    <input type="text" class="form-control" id="" placeholder="Download via SMS">
                                    <button class="btn btn-outline-dark">Submit</button>
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

      <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                  <div class="col collepsMobileOne">
                   <h4>ABOUT</h4> 
                   <ul class="footer-linke">        
                     <li><a href="#">Contact Us</a></li>
                     <li><a href="#">About Us</a></li>
                     <li><a href="#">Careers</a></li>
                     <li><a href="#">Blogs</a></li>
                     <li><a href="#">Press</a></li>
                   </ul>
                  </div>
                  <div class="col collepsMobileTwo">
                   <h4>CUSTOMER CARE</h4> 
                   <ul class="footer-linke">
                     <li><a href="#">Helpline 1800419915</a></li>
                     <li><a href="#">Request a Call Back</a></li>
                     <li><a href="mailto:help@gyftr.com">help@gyftr.com</a></li>
                     <li><a href="#">FAQs</a></li>
                     <li><a href="#">Program T&amp;C</a></li>
                   </ul>
                  </div>
                  <div class="col collepsMobileThree">
                   <h4>MY ACCOUNT</h4> 
                   <ul class="footer-linke">
                     <li><a href="#">Login</a></li>
                     <li><a href="#">My Transactions</a></li>
                     <li><a href="#">My Profile</a></li>
                      <li><a href="#">About BPCL PetroMiles</a></li>
                   </ul>
                  </div>   
                  <div class="col">
                      <div class="row">
                          <div class="col-sm-12 collepsMobileFour">
                            <h4>SOCIAL</h4>
                            <ul class="list-inline footer-social">         
                                <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter-square"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li> 
                             </ul>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="container-fluid br-t-1 pt-md-3 mt-md-3">
          <div class="row">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center text-lg-right mt-2 mt-lg-0">
                  <ul class="payment-logos">
                    <li class="visa">Visa</li>
                    <li class="mastercard">MasterCard</li>
                    <li class="american-express">American Express</li>
                    <li class="diners-club">Diners Club</li>
                    <li class="rupay">Rupay</li>
                    <li class="EMIOptions">EMI Options</li>
                    <li class="NetBanking">Net Banking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid footerLast">
            <div class="row">
                <div class="container">
                    <div class="row align-items-center text-center">
                        <div class="col-12 col-md-8 text-md-left">© 2016. Vouchagram India Pvt. Ltd <span class="pr-2 pl-2">|</span> <a href="#">Privacy Policy</a><span class="pr-2 pl-2">|</span><a href="#">Terms of Use</a> </div>
                        <div class="col-12 col-md-4 text-md-right pt-2 pt-md-0">
                            <div class="d-inline-block">
                                <span class="d-inline-block mt-2 mr-2">Powered by</span>
                                <a href="https://www.gyftr.com/" target="_blank" class="float-right"><img src="images/footer-logo.png" alt="GyFtr"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 bg-danger text-center text-white fs-14 px-0 mt-3">
          <div class="container py-3">
            For more details, please contact our Phone Banking Nubers: 1860 500 5004/ +91 22 4406 6666 or<br /> visit <a href="https://www.indusind.com" target="_blank" class="text-white">www.indusind.com</a> or write to us at <a href="mailto:reachus@indusind.com" class="text-white">reachus@indusind.com</a>
          </div>
        </div>
  </footer>
</div>
</div>


<!-- login -->
<div class="modal customModal" tabindex="-1" role="dialog" id="login" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <a class="close-btn" data-dismiss="modal">close</a>
      <div class="modal-body">
        <div>
            <div class="row">
              <div class="col-12 fs-24 text-danger" style="margin-top:-18px;"><span class="d-inline-block px-1 bg-white">Login/Signup</span></div>
              <div class="col-12 py-4">
                <form style="" id="form2">
                    <div class="form-group">
                      <input type="number" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterName" placeholder="Enter Mobile">
                      <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                        Please Enter Mobile Number
                      </div>
                    </div>
                    <div class="d-block">
                      <button type="button" class="btn btn-danger px-4 rounded-0 text-uppercase" data-dismiss="modal" data-toggle="modal" data-target="#PasswordMod">Login</button>
                    </div>
                </form>
              </div>
            </div>
        </div>
       </div>
    </div>
  </div>
</div>


<!-- PasswordMod -->
<div class="modal customModal" tabindex="-1" role="dialog" id="PasswordMod" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <a class="close-btn" data-dismiss="modal">PasswordMod Password</a>
      <div class="modal-body">
        <div>
            <div class="row">
              <div class="col-12 fs-24 text-danger" style="margin-top:-18px;"><span class="d-inline-block px-1 bg-white">Login/Signup</span></div>
              <div class="col-12 py-4">
                <form style="" id="form2">
                    <div class="form-group">
                      <input type="number" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterName" placeholder="Enter Mobile" value="9910448494">
                      <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                        Please Enter Mobile Number
                      </div>
                    </div>
                    <div class="form-group m-0">
                      <input type="text" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterMobileN" placeholder="Enter Password">
                      <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                        Please Enter Password 
                      </div>
                    </div>
                    <div class="form-group text-right">
                      <a class="font-italic fs-12 text-danger" href="#">Forgot Password</a>
                    </div>
                    <div class="d-block">
                      <button type="button" class="btn btn-danger px-4 rounded-0 text-uppercase">Login</button>
                    </div>
                </form>
              </div>
            </div>
        </div>
       </div>
    </div>
  </div>
</div>

<!-- OTP -->
<div class="modal customModal" tabindex="-1" role="dialog" id="Forgot" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <a class="close-btn" data-dismiss="modal">Forgot Password</a>
      <div class="modal-body">
        <div>
            <div class="row">
              <div class="col-12 fs-24 text-danger" style="margin-top:-18px;"><span class="d-inline-block px-1 bg-white">Login/Signup</span></div>
              <div class="col-12 py-4">
                <form style="" id="form2">
                    <div class="form-group">
                      <input type="number" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterName" placeholder="Enter Mobile">
                      <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                        Please Enter Mobile Number
                      </div>
                    </div>
                    <div class="form-group m-0">
                      <input type="text" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterMobileN" placeholder="Enter OTP">
                      <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                        Please Enter Valid OTP
                      </div>
                    </div>
                    <div class="form-group text-right">
                      <a class="font-italic fs-12 text-danger" href="#">Resend OTP</a>
                    </div>
                    <div class="d-block">
                      <button type="button" class="btn btn-primary px-4 fw-600 btn-lg rounded-0 text-uppercase">Login</button>
                    </div>
                </form>
              </div>
            </div>
        </div>
       </div>
    </div>
  </div>
</div>

<!-- Signup -->
<div class="modal customModal" tabindex="-1" role="dialog" id="login" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <a class="close-btn" data-dismiss="modal">close</a>
      <div class="modal-body">
        <div>
            <div class="row">
              <div class="col-12 fs-24 text-danger" style="margin-top:-18px;"><span class="d-inline-block px-1 bg-white">Login/Signup</span></div>
              <div class="col-12 py-4">
                <form style="" id="form2">
                    <div class="form-group">
                      <input type="number" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterName" placeholder="Enter Mobile">
                      <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                        Please Enter Mobile Number
                      </div>
                    </div>

                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterName" placeholder="Enter Name">
                      <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                        Please Enter Valid Name
                      </div>
                    </div>

                    <div class="form-group">
                      <input type="email" class="form-control form-control-lg rounded-0 fs-18" name="" id="DeliveryEnterName" placeholder="Enter Email">
                      <div class="alert alert-danger fs-14 m-0 p-2 rounded-0" role="alert" style="display: none;">
                        Please Enter Valid Email
                      </div>
                    </div>

                    <div class="d-block">
                      <button type="button" class="btn btn-danger px-4 rounded-0 text-uppercase">Signup</button>
                    </div>
                </form>
              </div>
            </div>
        </div>
       </div>
    </div>
  </div>
</div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
<script src="js/owl.carousel.js"></script>
<script src="js/custom.js"></script>
<script>
var owl = $('.TrendingBrands-owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2,
        },
        480: {
            items: 3,
        },
        600: {
            items: 3
        },
        768: {
            items: 6
        },
        992: {
            items: 6
        },
        1200: {
            items: 6
        }
    }
});

var owll = $('.Discounts-owl-carousel');
owll.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout:1000,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3,
        },
        600: {
            items: 3
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});

var owll = $('.Offers-owl-carousel');
owll.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout:800,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3,
        },
        600: {
            items: 3
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});

var owll = $('.Recent-owl-carousel');
owll.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout:500,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3,
        },
        600: {
            items: 3
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});
</script>
    </>
  );
}
