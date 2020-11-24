import './CartCheckout.scss';

const CartCheckout = ({total}) => (
  <div className="cart-checkout cart__checkout">
    <div className="cart-checkout__info">
      <div className="checkout-info cart-checkout__delivery">
        <p className="cart-checkout__text">
          Delivery
        </p>
        <p className="cart-checkout__price">
          Free
        </p>
      </div>
      <div className="checkout-info cart-checkout__total">
        <p className="cart-checkout__text">
          Total
        </p>
        <p className="cart-checkout__price">
          {total.toFixed(2)} usd
        </p>
      </div>
    </div>
    <button className="cart-checkout__button">
      CHECKOUT
    </button>
  </div>
);

export default CartCheckout;