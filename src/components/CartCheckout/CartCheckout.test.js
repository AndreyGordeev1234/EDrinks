import { shallow } from 'enzyme';
import CartCheckout from './CartCheckout.js';
import CheckoutModalContainer from '../../containers/CheckoutModalContainer.js';

describe('CartCheckout', () => {
  it('renders self and inner components', () => {
    const wrapper = shallow(<CartCheckout />);

    expect(wrapper.find('.cart-checkout.cart__checkout')).toHaveLength(1);
    expect(wrapper.find('.cart-checkout__info')).toHaveLength(1);
    expect(wrapper.find('.checkout-info.cart-checkout__delivery')).toHaveLength(1);
    expect(wrapper.find('.cart-checkout__text')).toHaveLength(2);
    expect(wrapper.find('.cart-checkout__price')).toHaveLength(2);
    expect(wrapper.find('.checkout-info.cart-checkout__total')).toHaveLength(1);
    expect(wrapper.find('.cart-checkout__button')).toHaveLength(1);
    expect(wrapper.find(CheckoutModalContainer)).toHaveLength(1);
  });

  it('renders total price from props', () => {
    const total = 13.50;
    const wrapper = shallow(<CartCheckout total={total}/>);

    expect(wrapper.find('.cart-checkout__price').at(1).text()).toContain(`${total}`);
  });
})