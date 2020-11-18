import './FeaturedProducts.scss';
import FeaturedProduct from '../FeatureProduct';

const FeaturedProducts = () => (
  <div className="featured">
    <div className="featured__wrap">
      <FeaturedProduct mainColor='rgba(111, 149, 81, 0.5)'
        secondColor='#3E752A'/>
      <FeaturedProduct mainColor='rgba(228, 170, 20, 0.5)'
        secondColor='#FBC400'/>
      <FeaturedProduct mainColor='rgba(106, 86, 125, 0.5)'
        secondColor='#612999'/>
    </div>
  </div>
)

export default FeaturedProducts;