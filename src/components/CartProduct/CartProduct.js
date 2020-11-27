import './CartProduct.scss';
import productImage from '../../assets/images/product.png';
import cartDelete from '../../assets/images/icons/cart-delete-icon.svg';

const CartProduct = ({id, title = '', imageUrl, price = 0, 
  count = 1, onIncrement, onDecrement, onDelete}) => (
  <div className="cart-product cart-products__product">
    <div className="cart-product__main">
      <div className="cart-product__image-container">
        <img src={imageUrl ? imageUrl : productImage} 
          alt="Blueberry Special"
          className="cart-product__image"/>
      </div>
      <div className="cart-product__info">
        <p className="cart-product__name">
          {title}
        </p>
        <p className="cart-product__price">
          ${price}
        </p>
        <div className="cart-product__count-container">
          <div className="cart-product__count-minus"
            onClick={() => onDecrement(id)}>
            -
          </div>
          <span className="cart-product__count">
            {count}
          </span>
          <div className="cart-product__count-plus"
            onClick={() => onIncrement(id)}>
            +
          </div>
        </div>
      </div>
    </div>
    <div className="cart-product__delete"
      onClick={() => onDelete(id)}>
      <img src={cartDelete} alt="Delete"
        className="cart-product__delete-icon"/>
    </div>
  </div>
);

export default CartProduct;