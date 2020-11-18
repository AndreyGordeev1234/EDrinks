import './Products.scss';
import Product from '../Product/Product';

const Products = () => (
  <section className="products">
    <div className="products__wrapper">
      <h2 className="products__title">All</h2>
      <div className="products__cards">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  </section>
)

export default Products;