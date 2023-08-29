export default function checkScrollBar() {

  const img = document.querySelector(".image-container img");

  const hasScrollbar = document.body.scrollWidth > window.innerWidth;

  const isMobile = window.innerWidth < 768;

  if (hasScrollbar || isMobile) {
    img.src = "./assets/images/illustration-sign-up-mobile.svg";
  } else {
    img.src = "./assets/images/illustration-sign-up-desktop.svg";
  }

  window.addEventListener("load", checkScrollBar);
  window.addEventListener("resize", checkScrollBar);
}