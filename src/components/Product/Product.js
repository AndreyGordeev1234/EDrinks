import './Product.scss';
import productImage from '../../assets/images/product.png';
import addToCardIco from '../../assets/images/icons/add-to-card-icon.svg'

const Product = ({ title, description, price, imageUrl }) => (
  <div className="products__card">
    <div className="products__card-top">
      <div className="products__card-pic-wrap">
        <img src={imageUrl === '' ? productImage : imageUrl}
          alt="Stranberry and blue"
          className="products__card-pic"/>
      </div>
      <div className="products__card-info-wrapper">
        <h3 className="products__card-title">
          {title}
        </h3>
        <p className="products__card-desc">
          {description}
        </p>
      </div>
    </div>
    <div className="products__card-footer">
      <p className="products__card-price">
        {price}
      </p>
      <button className="products__card-buy">
        <img src={addToCardIco}
          alt="Add to cart"
          className="products__card-cart-icon"/>
      </button>
    </div>
  </div>
)

export default Product;