import Footer from './Footer.js';
import { shallow } from 'enzyme';

describe('Footer', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Footer />);
  })

  it('has footer class', () => {
    const footer = component.find('.footer');
    expect(footer).toHaveLength(1);
  });

  it('has link', () => {
    const link = component.find('.footer__link');
    expect(link).toHaveLength(1);
  });
});