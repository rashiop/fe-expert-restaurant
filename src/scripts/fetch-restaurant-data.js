import './component/restaurant-list';

import DataSource from './data/restaurant-data';

const getAllRestaurant = async () => {
  const restaurantElement = document.querySelector('restaurant-list');

  const fallbackResult = (message) => {
    restaurantElement.renderError(message);
  };

  const renderResult = (results) => {
    restaurantElement.restaurants = results;
  };
  const renderLoading = () => {
    restaurantElement.renderLoading();
  };

  renderLoading();
  try {
    const restaurants = await DataSource.getAll();
    renderResult(restaurants);
  } catch (ex) {
    fallbackResult(ex);
  }
};

export default getAllRestaurant;
