import firebase from 'firebase/app';
import 'firebase/firestore';

export default class firebaseApi {
  firestore = firebase.firestore();

  async getProducts() {
    try {
      const productsRef = this.firestore.collection('products');
      const snapshot = await productsRef.get();
      if (snapshot.empty) {
        return [];
      }

      const products = [];
      snapshot.forEach(doc => 
        products.push(({
          id: doc.id, 
          ...doc.data()
        }))
      );

      return products;
    } catch (err) {
      console.log(err);
      throw new Error('api error');
    }
  }

  async getFeatured() {
    try {
      const featuredRef = this.firestore.collection('featured').doc('main');
      const doc = await featuredRef.get();
      if (!doc.exists) {
        return [];
      }

      const featured = doc.data().ids;
      return featured;
    } catch (err) {
      console.log(err);
      throw new Error('api error');
    }
  }

  async checkout(userInfo, products) {
    const response = await new Promise(resolve => 
      resolve({
        status: "success", 
        orderId: Math.floor(Math.random()*8000)+1000
      })
    );
    return response;
  }
}