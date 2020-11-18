import './Product.scss';
import productImage from '../../assets/images/product.png';
import addToCardIco from '../../assets/images/icons/add-to-card-icon.svg'

const Product = () => (
  <div className="products__card">
    <div className="products__card-pic-wrap">
      <img src={productImage}
        alt="Stranberry and blue"
        className="products__card-pic"/>
    </div>
    <div className="products__card-info-wrapper">
      <h3 className="products__card-title">
        Stranberry and blue
      </h3>
      <p className="products__card-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris.
      </p>
      <div className="products__card-footer">
        <p className="products__card-price">
          $15.00
        </p>
        <button className="products__card-buy">
          <img src={addToCardIco}
            alt="Add to cart"
            className="products__card-cart-icon"/>
        </button>
      </div>
    </div>
  </div>
)

export default Product;