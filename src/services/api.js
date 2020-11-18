export default class Api {
  url = 'http://localhost:4200';

  async getProducts() {
    const response = await fetch(`${this.url}/products`);
    const json = await response.json();

    return json;
  }
}