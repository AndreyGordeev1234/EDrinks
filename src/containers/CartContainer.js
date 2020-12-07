import Cart from '../components/Cart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../actions';
import { getProductsInCart } from '../reducers';

const CartContainer = (props) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const products = useSelector((state) => getProductsInCart(state));

  useEffect(() => {
    let cart = localStorage.getItem('cart');
    if (!cart) cart = {};
    else cart = JSON.parse(cart);
    dispatch(getCartProducts(cart));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <Cart
      count={Object.keys(cartProducts).length}
      products={products}
      {...props}
    />
  );
};

export default CartContainer;
