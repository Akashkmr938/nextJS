var owl = $(".TrendingBrands-owl-carousel");
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
      items: 3,
    },
    768: {
      items: 6,
    },
    992: {
      items: 6,
    },
    1200: {
      items: 6,
    },
  },
});

var owll = $(".Discounts-owl-carousel");
owll.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 15,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    600: {
      items: 3,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});

var owll = $(".Offers-owl-carousel");
owll.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 15,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 800,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    600: {
      items: 3,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});

var owll = $(".Recent-owl-carousel");
owll.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 15,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 500,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    600: {
      items: 3,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});
