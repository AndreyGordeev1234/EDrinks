import FilterByProduct from './FilterByProduct.js';
import { shallow } from 'enzyme';

describe('FilterByProduct', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FilterByProduct />);
  });

  it('has wrapper', () => {
    const wrapper = component.find('.product-filter__wrapper');
    expect(wrapper).toHaveLength(1);
  });

  it('has filter section', () => {
    const filterSection = component.find('.product-filter');
    expect(filterSection).toHaveLength(1);
  });

  it('has filter icon', () => {
    const filterIcon = component.find('.product-filter__ico');
    expect(filterIcon).toHaveLength(1);
  });

  it('has filter text', () => {
    const text = component.find('.product-filter__text');
    expect(text.text()).toContain('Sort');
  });

  it('has no dropdown when toggle false', () => {
    let component = shallow(<FilterByProduct toggle={false}/>);
    expect(component.find('.product-filter__drop-down')).toHaveLength(0);
  });

  it('has dropdown when toggle true', () => {
    let component = shallow(<FilterByProduct toggle={true}/>);
    expect(component.find('.product-filter__drop-down')).toHaveLength(1);
  });
});