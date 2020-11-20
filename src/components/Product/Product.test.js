import Product from './Product.js';
import { shallow } from 'enzyme';

describe('Product', () => {
  const product = {
    "id": 0,
    "title": "Stranberry and blue",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris.",
    "price": "$15.00",
    "imageUrl": "http://www.testImage.com/1"
  }

  let component;
  beforeEach(() => {
    component = shallow(<Product {...product}/>)
  });

  it('has card class', () => {
    const card = component.find('.products__card');
    expect(card).toHaveLength(1);
  });

  it('has top section', () => {
    const topSection = component.find('.products__card-top');
    expect(topSection).toHaveLength(1);
  });

  it('has picture wrapper', () => {
    const pictureWrapper = component.find('.products__card-pic-wrap');
    expect(pictureWrapper).toHaveLength(1);
  });

  it('has product picture', () => {
    const productPic = component.find('.products__card-pic');
    expect(productPic).toHaveLength(1);
  });

  it('product picture equals given url', () => {
    const productPic = component.find('.products__card-pic');
    expect(productPic.get(0).props.src).toEqual(product.imageUrl);
  });

  it('has info wrapper', () => {
    const infoWrapper = component.find('.products__card-info-wrapper');
    expect(infoWrapper).toHaveLength(1);
  });

  it('has title', () => {
    const title = component.find('.products__card-title');
    expect(title).toHaveLength(1);
  });

  it('title equals given value', () => {
    const title = component.find('.products__card-title');
    expect(title.text()).toEqual(product.title);
  });

  it('has product description', () => {
    const desc = component.find('.products__card-desc');
    expect(desc).toHaveLength(1);
  });

  it('product description equals given value', () => {
    const desc = component.find('.products__card-desc');
    expect(desc.text()).toEqual(product.description);
  });

  it('has footer section', () => {
    const footer = component.find('.products__card-footer');
    expect(footer).toHaveLength(1);
  });

  it('has price', () => {
    const price = component.find('.products__card-price');
    expect(price).toHaveLength(1);
  });

  it('price equal given value', () => {
    const price = component.find('.products__card-price');
    expect(price.text()).toEqual(product.price);
  });

  it('has buy button', () => {
    const buyBtn = component.find('.products__card-buy');
    expect(buyBtn).toHaveLength(1);
  });
});