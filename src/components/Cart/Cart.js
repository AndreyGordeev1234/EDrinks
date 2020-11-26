import './Cart.scss';
import cartIco from '../../assets/images/icons/cart-icon.svg';
import CartProducts from '../CartProducts';
import CartCheckoutContainer from '../../containers/CartCheckoutContainer';

const Cart = ({count, products, toggle, handleCartToggle}) => (
  <div className="cart" onClick={(e) => e.stopPropagation()}>
    <div className="cart__icon-box"
      onClick={handleCartToggle}>
      <img src={cartIco} alt="Open cart"
        className="cart__icon"/>
      <div className="cart__product-count">
        {count}
      </div>
    </div>

    <div className={toggle ? "cart__nav cart__nav_active" : "cart__nav"}>
      <div className="cart__nav-close"
        onClick={handleCartToggle}>  
        <span className="cart__nav-close-line"></span>
        <span className="cart__nav-close-line"></span>
      </div>

      <header className="cart__header">
        <h4 className="cart__title">
          My Order
        </h4>
      </header>
      <CartProducts products={products}/>
      <CartCheckoutContainer products={products} closeCart={handleCartToggle}/>
    </div>
  </div>
)


export default Cart;