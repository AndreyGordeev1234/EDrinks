import './FilterByProduct.scss';
import filterIcon from '../../assets/images/icons/filter-icon.svg';

const FilterByProduct = ({ toggle, setToggle, onSortChange }) => {

  const handleDropDown = () => {
    setToggle(prev => !prev);
  };

  return (
    <div className="product-filter__wrapper">
      <div className="product-filter" 
        onClick={handleDropDown}>
        <img src={filterIcon} alt="Filter"
          className="product-filter__ico"/>
        <p className="product-filter__text">
          Sort
        </p>

        {toggle && <div className="product-filter__drop-down">
          <ul className="product-filter__list">
            <li 
              className="product-filter__item"
              onClick={() => onSortChange('LTH')}>
              Price (Low to High)
            </li>
            <li 
              className="product-filter__item"
              onClick={() => onSortChange('HTL')}>
              Price (High to Low)
            </li>
            <li 
              className="product-filter__item"
              onClick={() => onSortChange('TITLE')}>
              Title
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default FilterByProduct;