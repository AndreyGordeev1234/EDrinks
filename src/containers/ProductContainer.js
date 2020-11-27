import Product from '../components/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';

const ProductContainer = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  }

  return <Product onAdd={handleAddToCart} {...props}/>
}

export default ProductContainer;