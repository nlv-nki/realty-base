var menu = document.querySelector(".main-nav__list");
var menuBtn = document.querySelector(".main-nav__btn");

menuBtn.addEventListener('click', () => {

  if (!menuBtn.classList.contains('is-active')) {
    menu.style.display = 'block';
    menuBtn.classList.add('is-active');
    menuBtn.value = 'Close';
  }

  else {
    menuBtn.classList.remove('is-active');
    menu.style.display = 'none';
    menuBtn.value = 'Open';
  }
}, false);
