import './CartCheckout.scss';
import CheckoutModalContainer from '../../containers/CheckoutModalContainer.js';
import { useState } from 'react';

const CartCheckout = ({total = 0, closeCart}) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    closeCart();
    document.querySelector('.nav').classList.add('nav_closed');
    document.body.style.overflow = 'hidden';
  }
 
  function closeModal(){
    setIsOpen(false);
    document.querySelector('.nav').classList.remove('nav_closed');
    document.body.style.overflow = 'unset';
  }

  return (
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
      <button className="cart-checkout__button"
        disabled={total > 0 ? false : true}
        onClick={openModal}>
        CHECKOUT
      </button>
      <CheckoutModalContainer
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}/>
    </div>
  )
}

export default CartCheckout;