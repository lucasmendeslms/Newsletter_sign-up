export default function checkScrollBar() {

  const img = document.querySelector(".image-container img");

  const gridContainer = document.querySelector('.grid-container');

  const hasScrollbar = document.body.scrollWidth > window.innerWidth;

  const isMobile = window.innerWidth < 768;

  if (hasScrollbar || isMobile) {
    img.src = "./assets/images/illustration-sign-up-mobile.svg";
    gridContainer.classList.remove('desktop');
  } else {
    img.src = "./assets/images/illustration-sign-up-desktop.svg";
    gridContainer.classList.add('desktop')
  }

  window.addEventListener("load", checkScrollBar);
  window.addEventListener("resize", checkScrollBar);
}