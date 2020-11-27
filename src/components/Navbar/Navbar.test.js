import Navbar from './Navbar.js';
import { shallow } from 'enzyme';

describe('Navbar', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Navbar />);
  });

  it('has nav class', () => {
    const nav = component.find('.nav');
    expect(nav).toHaveLength(1);
  });

  it('has navigation list', () => {
    const list = component.find('.nav__list');
    expect(list).toHaveLength(1);
  });

  it('has 3 navigation link', () => {
    const links = component.find('.nav__element');
    expect(links).toHaveLength(3);
  });
});