import './CartProduct.scss';
import productImg from '../../assets/images/cart-product.jpg';
import cartDelete from '../../assets/images/icons/cart-delete-icon.svg';

const CartProduct = () => (
  <div className="cart-product cart-products__product">
    <div className="cart-product__image-container">
      <img src={productImg} alt="Blueberry Special"
        className="cart-product__image"/>
    </div>
    <div className="cart-product__info">
      <p className="cart-product__name">
        Blueberry Special
      </p>
      <p className="cart-product__price">
        $12.00
      </p>
      <div className="cart-product__count-container">
        <div className="cart-product__count-minus">
          -
        </div>
        <span className="cart-product__count">
          2
        </span>
        <div className="cart-product__count-plus">
          +
        </div>
      </div>
    </div>
    <div className="cart-product__delete">
      <img src={cartDelete} alt="Delete"
        className="cart-product__delete-icon"/>
    </div>
  </div>
);

export default CartProduct;