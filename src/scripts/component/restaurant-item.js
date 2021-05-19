class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render()
  }

  render() {
    const { id, name, description, city, pictureId, rating } = this._restaurant;
    this.innerHTML = `
      <style>
        #${id}:before {
          content: '${city}';
          background-color: #f0e100;
          position: absolute;
          font-weight: 700;
          left: -2px;
          top: 17px;
          font-size: 0.75rem;
          padding: 5px 20px 6px 20px
      </style>

      <!-- START: restaurant item -->
      <article class="restaurant-item" id="${id}">
        <img class="restaurant-item__thumbnail" src="${pictureId}" alt="" />
        <div class="restaurant-item__content">
          <p class="restaurant-item__rating">Rating: ${rating}</p>
            <h1 class="restaurant-item__name">${name}</h1>
            <p class="restaurant-item__description">
              ${description}
            </p>
        </div>
      </article>
      <!-- END: restaurant item -->
    `
  }
}

customElements.define('restaurant-item', RestaurantItem);


