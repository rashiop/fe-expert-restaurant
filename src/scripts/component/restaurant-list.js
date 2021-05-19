import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    if (Array.isArray(this._restaurants) && this._restaurants.length) {
      this.render()
    }
  }

  renderItem(restaurant) {
    const RestaurantElement = document.createElement('restaurant-item')
    RestaurantElement.restaurant = restaurant;
    return RestaurantElement;
  }
  
  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      this.appendChild(this.renderItem(restaurant))
    }) 
  }

  renderError(message) {
    this.innerHTML = `<p>${message}</p>`
  }

}

customElements.define('restaurant-list', RestaurantList)