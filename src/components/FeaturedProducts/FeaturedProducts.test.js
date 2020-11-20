import FeaturedProducts from './FeaturedProducts.js';
import { shallow } from 'enzyme';
import FeatureProduct from '../FeatureProduct/index.js';

describe('FeaturedProducts', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FeaturedProducts />);
  });

  it('has featured section', () => {
    const featured = component.find('.featured');
    expect(featured).toHaveLength(1);
  });

  it('has featured wrapper section', () => {
    const featuredWrapper = component.find('.featured__wrap');
    expect(featuredWrapper).toHaveLength(1);
  });

  it('has 3 featured products', () => {
    const featuredProduct = component.find(FeatureProduct);
    expect(featuredProduct).toHaveLength(3);
  });
});