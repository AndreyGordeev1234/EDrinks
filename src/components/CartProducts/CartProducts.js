import './CartProducts.scss'
import CartProduct from '../CartProduct/CartProduct';

const CartProducts = () => (
  <div className="cart-products cart__products">
    <CartProduct />
    <CartProduct />
    <CartProduct />
    <div className="cart-products__inner">
    </div>
  </div>
);

export default CartProducts;