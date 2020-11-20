import Greeting from './Greeting.js';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar/index.js';

describe('Greeting', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Greeting />);
  });

  it('has container', () => {
    const container = component.find('.container');
    expect(container).toHaveLength(1);
  });

  it('has title', () => {
    const title = component.find('.intro__title');
    expect(title).toHaveLength(1);
  });

  it('has text', () => {
    const text = component.find('.intro__text');
    expect(text).toHaveLength(1);
  });

  it('has search bar', () => {
    const searchBar = component.find(SearchBar);
    expect(searchBar).toHaveLength(1);
  });
});