'use strict';

(function () {
  var menu = document.querySelector('.menu');
  var menuList = menu.querySelector('.menu__list');
  var menuToggle = document.querySelector('.menu__toggle');

  menu.classList.remove('menu--no-js');
  menuList.classList.remove('menu__list--no-js');
  menuToggle.classList.remove('menu__toggle--no-js');

  menuToggle.addEventListener('click', function (evt) {
    evt.preventDefault();

    menuToggle.classList.toggle('menu__toggle--open');
    menu.classList.toggle('menu--open');
    menuList.classList.toggle('menu__list--open');
  });
})();
