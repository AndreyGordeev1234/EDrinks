import FeatureProduct from './FeatureProduct.js';
import { shallow } from 'enzyme';

describe('FeatureProduct', () => {
  const props = {
    mainColor: 'white',
    secondColor: 'black'
  }
  let component;
  beforeEach(() => {
    component = shallow(<FeatureProduct {...props}/>);
  });

  it('has feature product section', () => {
    const productSection = component.find('.featured-product');
    expect(productSection).toHaveLength(1);
  });

  it('feature product section has a given color', () => {
    const productSection = component.find('.featured-product');
    const styles = productSection.get(0).props.style;
    expect(styles).toHaveProperty('backgroundColor', props.mainColor);
  });

  it('has wrapper', () => {
    const wrapper = component.find('.featured-product__wrapper');
    expect(wrapper).toHaveLength(1);
  });

  it('has head section', () => {
    const head = component.find('.featured-product__head');
    expect(head).toHaveLength(1);
  });

  it('has name', () => {
    const name = component.find('.featured-product__name');
    expect(name).toHaveLength(1);
  });

  it('has sale', () => {
    const sale = component.find('.featured-product__sale');
    expect(sale).toHaveLength(1);
  });

  it('sale background has given color', () => {
    const sale = component.find('.featured-product__sale');
    const styles = sale.get(0).props.style;
    expect(styles).toHaveProperty('backgroundColor', props.secondColor);
  });

  it('has footer section', () => {
    const footer = component.find('.featured-product__footer');
    expect(footer).toHaveLength(1);
  });

  it('has descriptions section', () => {
    const descriptions = component.find('.featured-product__descriptions');
    expect(descriptions).toHaveLength(1);
  });

  it('has 2 description sections', () => {
    const description = component.find('.featured-product__description');
    expect(description).toHaveLength(2);
  });

  it('first descriprion has calories information', () => {
    const firstDescription = component.find('.featured-product__description').at(0);
    expect(firstDescription.text()).toContain('Calories');
  });

  it('second description has size information', () => {
    const secondDescription = component.find('.featured-product__description').at(1);
    expect(secondDescription.text()).toContain('Size');
  });

  it('has price', () => {
    const price = component.find('.featured-product__price');
    expect(price).toHaveLength(1);
  });
});