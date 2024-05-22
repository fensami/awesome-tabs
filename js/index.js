/*+++++++++++++++++++
  Inner Page Slider
  +++++++++++++++++++*/
var swiper = new Swiper(".inner-page-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000, // Autoplay delay in milliseconds
    disableOnInteraction: false,
  },
  pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
    speed:3000,
    effect: "slide",
  },
});
/*+++++++++++++++++++
  Review Slider
  +++++++++++++++++++*/
var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    // reverseDirection:true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "slide",
  speed:3000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".review-slider2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    // delay: 1000,
    delay:2000,
    disableOnInteraction: false,
    reverseDirection:true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "slide",
  // speed:3000,
  speed:3000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});



/*+++++++++++++++++++
  Blog Slider
  +++++++++++++++++++*/
var swiper = new Swiper(".blog-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    // reverseDirection:true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "slide",
  speed:5000,
  // delay: 2000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".blog-slider2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    // delay:2000,
    disableOnInteraction: false,
    reverseDirection:true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "slide",
  speed:4000,
  // speed:2000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
/*+++++++++++++++++++
  Count Down
  +++++++++++++++++++*/
function countdown(endDate) {
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent = days;
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
  }

  updateCountdown();

  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Set the end date to some future date
const endDate = new Date("june 30, 2024 00:00:00").getTime();

// Start the countdown
countdown(endDate);

/*+++++++++++++++++++
  Aos Animation
  +++++++++++++++++++*/
if (!window.Cypress) AOS.init();
