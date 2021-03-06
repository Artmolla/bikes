'use strict';

(function () {
  var page = document.querySelector('.page');
  if (page.querySelector('.menu')) {
    var menu = page.querySelector('.menu');
    var menuList = menu.querySelector('.menu__list');
    var menuToggle = menu.querySelector('.menu__toggle');

    var menuOpen = function () {
      page.classList.add('page--disabled');
      menuToggle.classList.add('menu__toggle--open');
      menu.classList.add('menu--open');
      menuList.classList.add('menu__list--open');
      menuList.addEventListener('click', outsideClickHandler);
      menu.addEventListener('keydown', keyPressHandler);
    };

    var menuClose = function () {
      page.classList.remove('page--disabled');
      menuToggle.classList.remove('menu__toggle--open');
      menu.classList.remove('menu--open');
      menuList.classList.remove('menu__list--open');
      menuList.removeEventListener('click', outsideClickHandler);
      menu.removeEventListener('keydown', keyPressHandler);
    };

    var keyPressHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();

        menuClose();
      }
    };

    var outsideClickHandler = function () {
      menuClose();
    };

    menu.classList.remove('menu--no-js');
    menuList.classList.remove('menu__list--no-js');
    menuToggle.classList.remove('menu__toggle--no-js');

    menuToggle.addEventListener('click', function () {
      if (menu.classList.contains('menu--open')) {
        menuClose();
      } else {
        menuOpen();
      }
    });
  }
})();
