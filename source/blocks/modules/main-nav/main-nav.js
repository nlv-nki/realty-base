var menu = document.querySelector(".main-nav__list");
var menuBtn = document.querySelector(".main-nav__btn");

menuBtn.addEventListener('click', () => {

  if (!menuBtn.classList.contains('is-active')) {
    menu.style.display = 'flex';
    menuBtn.classList.add('is-active');
  }

  else {
    menuBtn.classList.remove('is-active');
    menu.style.display = 'none';
  }
}, false);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
      menuBtn.classList.remove("is-active");
      menu.style.display = 'flex';
  }
  else {
    menu.style.display = 'none';
  }
});
