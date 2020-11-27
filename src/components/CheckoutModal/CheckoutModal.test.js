import { shallow } from 'enzyme';
import CheckoutModal from './CheckoutModal.js';
import Modal from 'react-modal';
import CheckoutForm from '../CheckoutForm/index.js';
import CheckoutSuccess from '../CheckoutSuccess/index.js';

describe('CheckoutModal', () => {
  it('renders self and inner components', () => {
    const wrapper = shallow(<CheckoutModal 
      testing={true}
      isLoading={true}
    />);

    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find('.checkout-modal')).toHaveLength(1);
    expect(wrapper.find('.checkout-modal__close')).toHaveLength(1);
    expect(wrapper.find('.checkout-modal__close-line')).toHaveLength(2);
    expect(wrapper.find('.checkout-modal__wrapper')).toHaveLength(1);
  });

  it('renders checkout form', () => {
    const wrapper = shallow(<CheckoutModal 
      testing={true}
      isLoading={true}/>);

    expect(wrapper.find(CheckoutForm)).toHaveLength(1);
  });

  it('renders success component', () => {
    const wrapper = shallow(<CheckoutModal
      testing={true}
      isLoading={false} 
      isError={null}
      checkout={{checkoutId: 12345}}/>)

    expect(wrapper.find(CheckoutSuccess)).toHaveLength(1);
  });
});