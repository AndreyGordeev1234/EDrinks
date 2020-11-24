import './Cart.scss';
import cartIco from '../../assets/images/icons/cart-icon.svg';
import { useState } from 'react';
import CartProducts from '../CartProducts';
import CartCheckoutContainer from '../../containers/CartCheckoutContainer';

const Cart = ({count, products}) => {
  const [toggle, setToggle] = useState(false);
  const handleCartToggle = () => {
    setToggle(prev => !prev);
  }

  return (
    <div className="cart">
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
        <CartCheckoutContainer products={products}/>
      </div>
    </div>
  )
}


export default Cart;