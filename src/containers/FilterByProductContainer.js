import { useState } from "react";

import FilterByProduct from '../components/FilterByProduct';
import { useDispatch } from "react-redux";
import { sortProducts } from "../actions";

const FilterByProductContainer = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const handleSortChange = (sortType) => {
    dispatch(sortProducts(sortType));
  }

  return <FilterByProduct 
    toggle={toggle} 
    setToggle={setToggle}
    onSortChange={handleSortChange}/>
}

export default FilterByProductContainer;