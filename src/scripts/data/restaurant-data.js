class RestaurantDS {
  static getAll() {
    const baseUrl = 'http://localhost:3000';

    return fetch(`${baseUrl}/restaurants`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        }
      }).catch(() => {
        return []
      });
  }
}

export default RestaurantDS;
