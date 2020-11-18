import './FeatureProduct.scss';

const FeatureProduct = ({mainColor, secondColor}) => (
  <div className="featured-product" 
      style={{backgroundColor: mainColor}}>
    <div className="featured-product__wrapper">
      <div className="featured-product__head">
        <span className="featured-product__name">
          Blueberry Special
        </span>
        <div className="featured-product__sale"
            style={{backgroundColor: secondColor}}>
          20%
        </div>
      </div>
      <div className="featured-product__footer">
        <div className="featured-product__descriptions">
          <p className="featured-product__description">
            Calories: 20 kcal
          </p>
          <p className="featured-product__description">
            Size: 10 oz
          </p>
        </div>
        <span className="featured-product__price">
          12$
        </span>
      </div>
    </div>
  </div>
)

export default FeatureProduct;