import '../styles/landing.scss';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './anchor-link-smooth';
import 'regenerator-runtime';

import getAllRestaurant from './fetch-restaurant-data';
import setDrawer from './set-drawer';


(function() {
  setDrawer()
  getAllRestaurant();
})()