import { shallow } from 'enzyme';
import FilterByGroups from './FilterByGroups.js';

describe('FilterByGroups', () => {
  let component;
  beforeEach(() => {
    component = shallow(<FilterByGroups />);
  });

  it('has wrapper', () => {
    const wrapper = component.find('.group-filter__wrapper');
    expect(wrapper).toHaveLength(1);
  });

  it('has filter section', () => {
    const filterSection = component.find('.group-filter');
    expect(filterSection).toHaveLength(1);
  });

  it('has filter list', () => {
    const filterList = component.find('.grout-filter__list');
    expect(filterList).toHaveLength(1);
  });

  it('has 5 filters', () => {
    const filters = component.find('.group-filter__element');
    expect(filters).toHaveLength(5);
  });
});