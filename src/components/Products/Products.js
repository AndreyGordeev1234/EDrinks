import './Products.scss';
import Product from '../Product/Product';
import Spinner from '../Spinner';

const Products = ({ products, isLoading }) => {
  if (isLoading) return <Spinner />

  return (
    <section className="products">
      <div className="products__wrapper">
        <h2 className="products__title">All</h2>
        <div className="products__cards">
          {products.map(product => (
            <Product key={product.id} {...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Products;