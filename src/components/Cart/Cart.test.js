import { shallow } from 'enzyme';
import Cart from './Cart.js';
import CartProducts from '../CartProducts/index.js';
import CartCheckoutContainer from '../../containers/CartCheckoutContainer.js';

describe('Cart', () => {
  it('renders self and inner components', () => {
    const wrapper = shallow(<Cart />);

    expect(wrapper.find('.cart')).toHaveLength(1);
    expect(wrapper.find('.cart__icon-box')).toHaveLength(1);
    expect(wrapper.find('.cart__icon')).toHaveLength(1);
    expect(wrapper.find('.cart__product-count')).toHaveLength(1);
    expect(wrapper.find('.cart__nav')).toHaveLength(1);
    expect(wrapper.find('.cart__nav-close')).toHaveLength(1);
    expect(wrapper.find('.cart__nav-close-line')).toHaveLength(2);
    expect(wrapper.find('.cart__header')).toHaveLength(1);
    expect(wrapper.find('.cart__title')).toHaveLength(1);
    expect(wrapper.find(CartProducts)).toHaveLength(1);
    expect(wrapper.find(CartCheckoutContainer)).toHaveLength(1);
  });

  it('renders count of items in cart', () => {
    const count = 2;
    const wrapper = shallow(<Cart count={count}/>);

    expect(wrapper.find('.cart__product-count').text()).toEqual(`${count}`);
  });

  it('passes props to inner components', () => {
    const products = [];
    const toggle = false;
    const handleCartToggle = () => {};

    const wrapper = shallow(<Cart 
      products={products}
      toggle={toggle}
      handleCartToggle={handleCartToggle}/>);

    expect(wrapper.find('.cart__icon-box').props().onClick).toEqual(handleCartToggle);
    expect(wrapper.find('.cart__nav-close').props().onClick).toEqual(handleCartToggle);
    expect(wrapper.find(CartProducts).props().products).toEqual(products);
    expect(wrapper.find(CartCheckoutContainer).props().products).toEqual(products);
    expect(wrapper.find(CartCheckoutContainer).props().closeCart).toEqual(handleCartToggle);
  });
})