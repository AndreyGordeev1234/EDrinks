import Cart from '../components/Cart';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../actions';

const CartContainer = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.products);
  let products = useSelector(state => state.products.products);

  useEffect(() => {
    let cart = localStorage.getItem('cart');
    if (!cart) cart = {};
    else cart = JSON.parse(cart);
    dispatch(getCartProducts(cart));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }, [cartProducts]);

  products = useMemo(() => {
    let filtered = products.filter(product => 
      cartProducts[product.id] !== undefined
    );
    
    let res = filtered.map(product => 
      ({
        ...product, 
        count: cartProducts[product.id].count
      })
    );
    return res;
  }, [products, cartProducts]);

  return <Cart 
    count={Object.keys(cartProducts).length} 
    products={products}/>
}

export default CartContainer;