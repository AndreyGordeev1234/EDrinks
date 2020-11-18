import './FilterByProduct.scss';
import filterIcon from '../../assets/images/icons/filter-icon.svg';

const FilterByProduct = () => (
  <div className="product-filter__wrapper">
    <div className="product-filter">
      <img src={filterIcon} alt="Filter"
        className="product-filter__ico"/>
      <p className="product-filter__text">Filter</p>
    </div>
  </div>
)

export default FilterByProduct;