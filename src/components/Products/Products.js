import './Products.scss';
import Product from '../Product/Product';
import Spinner from '../Spinner';

const Products = ({ products, isLoading, group }) => {
  if (isLoading) return <Spinner />

  return (
    <section className="products" id="smoothies">
      <div className="products__wrapper">
        <h2 className="products__title">{group}</h2>
        <div className="products__cards">
          {products.map(product => (
            <Product key={product.id} {...product}/>
          ))}
        </div>
        
        {!products.length && <h3 className="products__no-found">
          No products found
        </h3>}
      </div>
    </section>
  )
}


export default Products;