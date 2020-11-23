import FilterByGroups from '../components/FilterByGroups';
import { filterProductByGroup } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

const FilterByGroupsContainer = () => {
  const dispatch = useDispatch();
  const group = useSelector(store => store.filters.filterGroup);

  const handleGroupChange = (group) => {
    dispatch(filterProductByGroup(group));
  };

  return <FilterByGroups 
    onGroupChange={handleGroupChange}
    group={group}/>
}

export default FilterByGroupsContainer;