import { shallow } from 'enzyme';
import CartProducts from './CartProducts.js';
import CartProductContainer from '../../containers/CartProductContainer.js';

describe('CartProducts', () => {
  it('renders self and inner components', () => {
    const wrapper = shallow(<CartProducts />);

    expect(wrapper.find('.cart-products.cart__products')).toHaveLength(1);
    expect(wrapper.find('.cart-products__inner')).toHaveLength(1);
  });

  it('renders no cartProductContainer if no products in props', () => {
    const wrapper = shallow(<CartProducts />);

    expect(wrapper.find(CartProductContainer)).toHaveLength(0);
  });

  it('renders no CartProductContainer if products array is empty', () => {
    const wrapper = shallow(<CartProducts products={[]}/>);

    expect(wrapper.find(CartProductContainer)).toHaveLength(0);
  });

  it('renders one CartProductContainer if products array has one element', () => {
    const products = [{
      id: 0,
      title: 'Test'
    }];
    const wrapper = shallow(<CartProducts products={products}/>);

    expect(wrapper.find(CartProductContainer)).toHaveLength(1);
  });

  it('renders many CartProductContainer if products have many elements', () => {
    const products = [{
        id: 0,
        title: 'Test'
      },
      {
        id: 1,
        title: 'Test 2'
      }
    ];
    const wrapper = shallow(<CartProducts products={products}/>);

    expect(wrapper.find(CartProductContainer)).toHaveLength(products.length);
  });
});