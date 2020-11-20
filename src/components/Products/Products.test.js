import Products from './Products.js';
import { shallow } from 'enzyme';
import Product from '../Product/Product.js';

describe('Products', () => {
  let products = [
    {
      "id": 0,
      "title": "Stranberry and blue",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris.",
      "price": "$15.00",
      "imageUrl": ""
    },
    {
      "id": 1,
      "title": "Stranberry and white",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris.",
      "price": "$20.00",
      "imageUrl": ""
    }
  ]

  let component;
  beforeEach(() => {
    component = shallow(<Products products={products}/>)
  });

  it('has products class', () => {
    const products = component.find('.products');
    expect(products).toHaveLength(1);
  });

  it('has wrapper', () => {
    const wrapper = component.find('.products__wrapper');
    expect(wrapper).toHaveLength(1);
  });

  it('has a title', () => {
    const title = component.find('.products__title');
    expect(title).toHaveLength(1);
  });

  it('has cards', () => {
    const cards = component.find('.products__cards');
    expect(cards).toHaveLength(1);
  });

  it('has products in a given quantity', () => {
    const products = component.find(Product);
    expect(products).toHaveLength(products.length);
  });
});