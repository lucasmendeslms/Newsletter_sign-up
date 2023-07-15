function checkScrollBar() {

  const img = document.querySelector('.image-container img');

  const hasScrollbar = document.body.scrollWidth > window.innerWidth;

  const isTablet = (window.innerWidth <= 850);

  const isMobile = window.innerWidth < 570

  if(isTablet || hasScrollbar || isMobile) {
    img.src = '/assets/images/illustration-sign-up-mobile.svg'
  } else {
    img.src = '/assets/images/illustration-sign-up-desktop.svg'
  }
}

window.addEventListener('load', checkScrollBar);

window.addEventListener('resize', checkScrollBar);