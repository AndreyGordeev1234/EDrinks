import App from './App';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';
import Greeting from '../Greeting';
import FeaturedProducts from '../FeaturedProducts';
import ProductsContainer from '../../containers/ProductsContainer';
import Footer from '../Footer';
import FilterByGroupsContainer from '../../containers/FilterByGroupsContainer';
import FilterByProductContainer from '../../containers/FilterByProductContainer';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  })

  it('has navbar', () => {
    const nav = component.find(Navbar);
    expect(nav).toHaveLength(1);
  });

  it('has intro section', () => {
    const intro = component.find('.intro');
    expect(intro).toHaveLength(1);
  });

  it('has intro background', () => {
    const introBackground = component.find('.intro-bg');
    expect(introBackground).toHaveLength(1);
  });

  it('has greeting component', () => {
    const greeting = component.find(Greeting);
    expect(greeting).toHaveLength(1);
  });

  it('has featured products', () => {
    const featured = component.find(FeaturedProducts);
    expect(featured).toHaveLength(1);
  });

  it('has bottom gradient', () => {
    const bottomGradient = component.find('.intro__bottom-gradient');
    expect(bottomGradient).toHaveLength(1);
  });

  it('has main section', () => {
    const main = component.find('.main');
    expect(main).toHaveLength(1);
  });

  it('has filters', () => {
    const filters = component.find('.filters');
    expect(filters).toHaveLength(1);
  });

  it('has filter by group component', () => {
    const filterByGroups = component.find(FilterByGroupsContainer);
    expect(filterByGroups).toHaveLength(1);
  });

  it('has filter by product component', () => {
    const filterByProduct = component.find(FilterByProductContainer);
    expect(filterByProduct).toHaveLength(1);
  });

  it('has products container component', () => {
    const productsContainer = component.find(ProductsContainer);
    expect(productsContainer).toHaveLength(1);
  });

  it('has footer component', () => {
    const footer = component.find(Footer);
    expect(footer).toHaveLength(1);
  });
})
