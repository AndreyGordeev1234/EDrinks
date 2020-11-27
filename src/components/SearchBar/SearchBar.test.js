import SearchBar from './SearchBar.js';
import { shallow } from 'enzyme';

describe('SearchBar', () => {
  let component;
  beforeEach(() => {
    component = shallow(<SearchBar />);
  })

  it('has search form', () => {
    const form = component.find('.search-form');
    expect(form).toHaveLength(1);
  });

  it('has info section', () => {
    const info = component.find('.search-form__info');
    expect(info).toHaveLength(1);
  });

  it('has input with name drink', () => {
    const drink = component.find('input[name="drink"]');
    expect(drink).toHaveLength(1);
  });

  it('has submit button', () => {
    const submitBtn = component.find('.search-form__submit');
    expect(submitBtn).toHaveLength(1);
  });

  it('has button icon', () => {
    const btnIcon = component.find('.search-form__icon');
    expect(btnIcon).toHaveLength(1);
  });
});