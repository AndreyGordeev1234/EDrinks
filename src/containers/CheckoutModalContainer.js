import CheckoutModal from '../components/CheckoutModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCheckout, clearSuccess } from '../actions';
import { useApi } from '../services/ApiContext.js';
import { useCallback, useMemo } from 'react';

const CheckoutModalContainer = (props) => {
  const checkout = useSelector(state => state.checkout.checkout);
  const loading = useSelector(state => state.checkout.loading);
  const error = useSelector(state => state.checkout.error);
  let products = useSelector(state => state.products.products);
  const cartProducts = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const api = useApi();

  products = useMemo(() => {
    const filtered = products.filter(product =>
      cartProducts[product.id] !== undefined
    );

    return filtered.map(product =>
      ({
        ...product,
        count: cartProducts[product.id].count  
      })
    );
  }, [products, cartProducts]);

  const handleCheckout = useCallback((userInfo) => {
    dispatch(fetchCheckout(api, products, userInfo));
  }, [dispatch, api, products]);

  const handleClearSuccess = useCallback(() => {
    dispatch(clearSuccess());
  }, [dispatch])

  return <CheckoutModal {...props} 
    onCheckout={handleCheckout}
    isLoading={loading}
    isError={error}
    checkout={checkout}
    onClearSuccess={handleClearSuccess}/>;
}

export default CheckoutModalContainer;