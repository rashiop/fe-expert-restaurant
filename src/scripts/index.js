import '../styles/base/border.scss';
import '../styles/base/spacing.scss';
import '../styles/landing.scss';
import '../styles/main.scss';
import '../styles/responsive.scss';
import 'regenerator-runtime';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

