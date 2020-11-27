import { shallow } from 'enzyme';
import CheckoutForm from './CheckoutForm.js';

describe('CheckoutForm', () => {
  it('renders self and inner components', () => {
    const wrapper = shallow(<CheckoutForm />);

    expect(wrapper.find('.checkout-form')).toHaveLength(1);
    expect(wrapper.find('.checkout-form__wrapper')).toHaveLength(1);
    expect(wrapper.find('.checkout-form__info')).toHaveLength(5);
    expect(wrapper.find('.checkout-form__label')).toHaveLength(5);
    expect(wrapper.find('.checkout-form__field')).toHaveLength(5);
    expect(wrapper.find('.checkout-form__submit-wrapper')).toHaveLength(1);
    expect(wrapper.find('.checkout-form__submit')).toHaveLength(1);
  });
});