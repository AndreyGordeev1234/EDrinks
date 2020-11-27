import './FeaturedProducts.scss';
import FeaturedProduct from '../FeatureProduct';

const FeaturedProducts = ({ products, loading }) => (
  <div className="featured">
    <div className="featured__wrap">
      {products.length && !loading && 
      <>
        <FeaturedProduct mainColor='rgba(111, 149, 81, 0.5)'
          secondColor='#3E752A' product={products[0]}/>
        <FeaturedProduct mainColor='rgba(228, 170, 20, 0.5)'
          secondColor='#FBC400' product={products[1]}/>
        <FeaturedProduct mainColor='rgba(106, 86, 125, 0.5)'
          secondColor='#612999' product={products[2]}/>
      </>}
      
      {loading &&
      <>
        <FeaturedProduct mainColor='rgba(111, 149, 81, 0.5)'
          secondColor='#3E752A'/>
        <FeaturedProduct mainColor='rgba(228, 170, 20, 0.5)'
          secondColor='#FBC400'/>
        <FeaturedProduct mainColor='rgba(106, 86, 125, 0.5)'
          secondColor='#612999'/>
      </>
      }
    </div>
  </div>
)

export default FeaturedProducts;