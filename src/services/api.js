export default class Api {
  url = 'http://localhost:4200';

  async getProducts() {
    const response = await fetch(`${this.url}/products`);
    const json = await response.json();

    return json;
  }

  async getFeatured() {
    const response = await fetch(`${this.url}/featured`);
    const json = await response.json();

    return json;
  }

  async checkout(userInfo) {
    const response = await new Promise(resolve => resolve({status: "success"}));
    return response;
  }
}