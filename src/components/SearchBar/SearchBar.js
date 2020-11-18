import './SearchBar.scss';
import searchIcon from '../../assets/images/icons/search-icon.svg';

const SearchBar = () => (
  <form className="search-form">
    <p className="search-form__info">
      <input type="text" name="drink" 
            className="search-form__field" 
            placeholder="Search your drink"
            autoComplete="off"/>
      <button type="submit" 
              className="search-form__submit">
        <img src={searchIcon} 
              className="search-form__icon"
              alt ="Search"/>
      </button>
    </p>
  </form>
)

export default SearchBar;