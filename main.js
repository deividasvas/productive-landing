const dotsClass = "slider-dot";
const navClass = "slider-nav";
const accordeonsHead = document.querySelectorAll('.accordeon-head');

accordeonsHead.forEach(accardeonHead => {
  accardeonHead.addEventListener('click', (e) => {
    e.preventDefault();

    const accordeon = accardeonHead.parentElement;
    if(!accordeon) return;

    accordeon.classList.toggle('opened');
  });
})

$(".slider-plans").owlCarousel({
  loop: true,
  items: 1,
  dots: true,
  dotsClass,
  mouseDrag: false,
  touchDrag: false,
  autoplay: true,
  autoplaySpeed: 400,
  fluidSpeed: 400,
});

$(".slider-faq").owlCarousel({
  loop: true,
  items: 1,
  center: true,
  nav: true,
  dots: true,
  dotsClass,
  navText: "",
  navClass: ["slider-nav-left", "slider-nav-right"],
});

$(".slider-testimonials").owlCarousel({
  loop: true,
  items: 1,
  center: true,
  dots: true,
  dotsClass,
});