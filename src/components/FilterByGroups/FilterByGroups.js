import './FilterByGroups.scss';

const FilterByGroups = () => (
  <div className="group-filter">
    <div className="group-filter__wrapper">
      <ul className="grout-filter__list">
        <li 
          className="group-filter__element group-filter__element_active">
            All
        </li>
        <li 
          className="group-filter__element">
            Popular Drinks
        </li>
        <li 
          className="group-filter__element">
            Natural Smoothie
        </li>
        <li 
          className="group-filter__element">
            Juices
        </li>
        <li 
          className="group-filter__element">
            Yogurt
        </li>
      </ul>
    </div>
  </div>
)

export default FilterByGroups;