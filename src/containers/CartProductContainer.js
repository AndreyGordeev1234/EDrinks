import CartProduct from '../components/CartProduct';
import { useDispatch } from 'react-redux';
import { incrementProductCount, decrementProductCount, deleteProductFromCart } from '../actions';

const CartProductContainer = (props) => {
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(incrementProductCount(productId));
  }

  const handleDecrement = (productId) => {
    dispatch(decrementProductCount(productId));
  }

  const handleDelete = (productId) => {
    dispatch(deleteProductFromCart(productId));
  }

  return <CartProduct {...props} 
    onIncrement={handleIncrement}
    onDecrement={handleDecrement}
    onDelete={handleDelete}/>
}

export default CartProductContainer;