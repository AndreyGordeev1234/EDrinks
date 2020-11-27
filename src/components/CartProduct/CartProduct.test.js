import { shallow } from 'enzyme';
import CartProduct from './CartProduct.js';

describe('CartProduct', () => {
  it('renders self and inner components', () => {
    const wrapper = shallow(<CartProduct />);
    
    expect(wrapper.find('.cart-product.cart-products__product')).toHaveLength(1);
    expect(wrapper.find('.cart-product__main')).toHaveLength(1);
    expect(wrapper.find('.cart-product__image-container')).toHaveLength(1);
    expect(wrapper.find('.cart-product__image')).toHaveLength(1);
    expect(wrapper.find('.cart-product__info')).toHaveLength(1);
    expect(wrapper.find('.cart-product__name')).toHaveLength(1);
    expect(wrapper.find('.cart-product__price')).toHaveLength(1);
    expect(wrapper.find('.cart-product__count-container')).toHaveLength(1);
    expect(wrapper.find('.cart-product__count-minus')).toHaveLength(1);
    expect(wrapper.find('.cart-product__count')).toHaveLength(1);
    expect(wrapper.find('.cart-product__count-plus')).toHaveLength(1);
    expect(wrapper.find('.cart-product__delete')).toHaveLength(1);
    expect(wrapper.find('.cart-product__delete-icon')).toHaveLength(1);
  });

  it('renders title, price and count from props', () => {
    const title = 'Test product';
    const price = 'Test price';
    const count = 'Test count';
    const wrapper = shallow(<CartProduct 
      title={title}
      price={price}
      count={count}/>);

    expect(wrapper.find('.cart-product__name').text()).toEqual(title);
    expect(wrapper.find('.cart-product__price').text()).toContain(price);
    expect(wrapper.find('.cart-product__count').text()).toEqual(count);
  });

  it('passes imageUrl to inner component', () => {
    const imageUrl = 'testImage.com';
    const wrapper = shallow(<CartProduct imageUrl={imageUrl}/>);

    expect(wrapper.find('.cart-product__image').props().src).toEqual(imageUrl);
  });
});