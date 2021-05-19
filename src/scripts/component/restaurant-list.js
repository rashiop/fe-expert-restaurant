import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants = []) {
    this._restaurants = restaurants;
    const hasRestaurant = this._restaurants.length;
    if (hasRestaurant) {
      return this.render()
    }
    
    return this.renderEmpty()
  }

  renderItem(restaurant) {
    const RestaurantEl = document.createElement('restaurant-item')
    RestaurantEl.restaurant = restaurant;
    return RestaurantEl;
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
  
  renderLoading() {
    this.innerHTML = `
      <style>
        .loading {
          display: flex;
          justify-content: center;
          padding: 30px 0;
        }

        .loading__image {
          width: 45px;
          height: 45px;
          object-fit: cover;
        }
      </style>
      <div class="loading">
        <img src="./images/design/loading.gif" alt="loading" class="loading__image" />
      </div>
    `;
  }

  renderEmpty() {
    this.innerHTML = `
      <style>
        .empty {
          display: flex;
          justify-content: center;
          padding: 30px 0;
        }

        .empty__image {
          width: 200px;
          height: 200px;
          object-fit: cover;
        }
      </style>
      <div class="empty">
        <figure>
          <img src="./images/design/data-not-found.webp" alt="" class="empty__image" />
          <figcaption>No restaurant in your area</figcaption>
        </figure>
      </div>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList)