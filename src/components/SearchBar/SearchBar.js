import './SearchBar.scss';
import searchIcon from '../../assets/images/icons/search-icon.svg';

const SearchBar = ({ drink, onChangeDrink, onSearch }) => {
  const handleDrinkInput = (e) => {
    onChangeDrink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(drink.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <p className="search-form__info">
        <input type="text" name="drink" 
              className="search-form__field" 
              placeholder="Search your drink"
              autoComplete="off"
              value={drink}
              onChange={handleDrinkInput}/>
        <button type="submit" 
                className="search-form__submit">
          <img src={searchIcon} 
                className="search-form__icon"
                alt ="Search"/>
        </button>
      </p>
    </form>
  )
}

export default SearchBar;