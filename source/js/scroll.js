'use strict';

(function () {

  var menu = document.querySelector('.menu__list');

  menu.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (evt.target.getAttribute('href')) {
      var href = evt.target.getAttribute('href');
      var offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
})();
