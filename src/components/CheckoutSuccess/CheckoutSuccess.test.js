import { shallow } from 'enzyme';
import CheckoutSuccess from './CheckoutSuccess.js';

describe('CheckoutSuccess', () => {
  it('renders self and inner components', () => {
    const wrapper = shallow(<CheckoutSuccess />);

    expect(wrapper.find('.checkout-success')).toHaveLength(1);
    expect(wrapper.find('.success-checkmark')).toHaveLength(1);
    expect(wrapper.find('.check-icon')).toHaveLength(1);
    expect(wrapper.find('.icon-line.line-tip')).toHaveLength(1);
    expect(wrapper.find('.icon-line.line-long')).toHaveLength(1);
    expect(wrapper.find('.icon-circle')).toHaveLength(1);
    expect(wrapper.find('.icon-fix')).toHaveLength(1);
    expect(wrapper.find('.checkout-success__title')).toHaveLength(1);
  });
});