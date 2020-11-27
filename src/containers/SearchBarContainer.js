import { useState } from "react";
import SearchBar from '../components/SearchBar';
import { useDispatch } from 'react-redux';
import { filterProductsByName } from "../actions";

const SearchBarContainer = () => {
  const [drink, setDrink] = useState('');
  const dispatch = useDispatch();

  const searchProduct = (drink) => {
    dispatch(filterProductsByName(drink));
  }

  return <SearchBar 
            drink={drink} 
            onChangeDrink={setDrink}
            onSearch={searchProduct}/>
}

export default SearchBarContainer;