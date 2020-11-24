import './FeatureProduct.scss';
import FeatureProductsLoader from './FeatureProductsLoader.js';
import products from '../../reducers/products';

const FeatureProduct = ({mainColor, secondColor, product}) => (
  <div className="featured-product" 
      style={{backgroundColor: mainColor}}>
    <div className="featured-product__wrapper">
      {product ? 
      <>
        <div className="featured-product__head">
          <span className="featured-product__name">
            {product.title}
          </span>
          <div className="featured-product__sale"
              style={{backgroundColor: secondColor}}>
            {product.discount}%
          </div>
        </div>
        <div className="featured-product__footer">
          <div className="featured-product__descriptions">
            <p className="featured-product__description">
              Calories: {product.calories} kcal
            </p>
            <p className="featured-product__description">
              Size: {product.size} oz
            </p>
          </div>
          <span className="featured-product__price">
            {Math.floor(product.price)}$
          </span>
        </div>
      </>
      :
      <FeatureProductsLoader />
      }
      
    </div>
  </div>
)

export default FeatureProduct;