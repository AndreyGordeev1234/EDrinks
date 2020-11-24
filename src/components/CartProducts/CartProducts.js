import './CartProducts.scss';
import CartProductContainer from '../../containers/CartProductContainer';

const CartProducts = ({products}) => (
  <div className="cart-products cart__products">
    {products.map(product => 
      <CartProductContainer key={product.id} {...product}/>)}
    <div className="cart-products__inner">
    </div>
  </div>
);

export default CartProducts;