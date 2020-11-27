import Spinner from './Spinner.js';
import { shallow } from 'enzyme';

describe('Spinner', () => {
  it('should render all inner components', () => {
    const component = shallow(<Spinner />);

    expect(component.find('.spinner')).toHaveLength(1);
    expect(component.find('.lds-grid')).toHaveLength(1);
  });
});