import CartCheckout from '../components/CartCheckout';
import { useSelector } from 'react-redux';
import { getTotal } from '../reducers';

const CartCheckoutContainer = (props) => {
  const checkoutSum = useSelector((state) => getTotal(state));

  return <CartCheckout total={checkoutSum} {...props} />;
};

export default CartCheckoutContainer;
