import CheckoutModal from '../components/CheckoutModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCheckout, clearSuccess } from '../actions';
import { useApi } from '../services/ApiContext.js';
import { useCallback } from 'react';

const CheckoutModalContainer = (props) => {
  const checkout = useSelector(state => state.checkout.checkout);
  const loading = useSelector(state => state.checkout.loading);
  const error = useSelector(state => state.checkout.error);
  const dispatch = useDispatch();
  const api = useApi();

  const handleCheckout = useCallback((userInfo) => {
    dispatch(fetchCheckout(api, userInfo));
  }, [dispatch, api]);

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