import CartCheckout from '../components/CartCheckout';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const CartCheckoutContainer = (props) => {
  const cartProducts = useSelector(state => state.cart.products);
  const products = useSelector(state => state.products.products);

  const checkoutSum = useMemo(() => {
    let filtered = products.filter(product =>
      cartProducts[product.id] !== undefined  
    );

    return filtered.reduce((sum, cur) => {
      return sum + (cur.price * cartProducts[cur.id].count);
    }, 0);
  }, [products, cartProducts])

  return <CartCheckout total={checkoutSum} {...props}/>
}

export default CartCheckoutContainer;