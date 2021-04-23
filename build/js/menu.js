'use strict';

(() => {
  const menu = document.querySelector('.menu');
  const menuList = menu.querySelector('.menu__list');
  const menuToggle = document.querySelector('.menu__toggle');

  menu.classList.remove('menu--no-js');
  menuList.classList.remove('menu__list--no-js');
  menuToggle.classList.remove('menu__toggle--no-js');

  menuToggle.addEventListener('click', (evt) => {
    evt.preventDefault();

    menuToggle.classList.toggle('menu__toggle--open');
    menu.classList.toggle('menu--open');
    menuList.classList.toggle('menu__list--open');
  });
})();
