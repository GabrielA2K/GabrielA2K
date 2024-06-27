// const navEl = document.querySelector ('.navbar');

// window.addEventListener('scroll', () => {
//     if(window.scrollY >= 56){
//         navEl.classList.add ('navbar-scrolled');
//     }
//     else if (window.scrollY < 56) {
//         navEl.classList.remove('navbar-scrolled');
//     }
// });

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// News Title Slicer
for (let counter = 0; counter < 999999; counter++) {
  let titleElement = document.getElementById("title" + counter);

  if (titleElement) {
    // Check if the element exists
    let news = titleElement.innerHTML;

    if (news.length > 25) {
      titleElement.innerHTML = news.slice(0, 23) + "...";
    }
  }
}
