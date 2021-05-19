import './component/restaurant-list';

import DataSource from './data/restaurant-data';

const init = async () => {
  const restaurantElement = document.querySelector('restaurant-list');

  const fallbackResult = (message) => {
    restaurantElement.renderError(message);
  };

  const renderResult = (results) => {
    restaurantElement.restaurants = results;
  };

  try {
    const restaurants = await DataSource.getAll();
    renderResult(restaurants);
  } catch (ex) {
    fallbackResult(ex);
  }
};

export default init;
