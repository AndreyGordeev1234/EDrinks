import './FilterByGroups.scss';

const FilterByGroups = ({ onGroupChange, group }) => {
  const isActive = (name) => {
    if (name === group)
      return 'group-filter__element group-filter__element_active'
    
    return 'group-filter__element'
  }

  return (
    <div className="group-filter">
      <div className="group-filter__wrapper">
        <ul className="grout-filter__list">
          <li 
            className={isActive('All')}
            onClick={() => onGroupChange('All')}>
              All
          </li>
          <li 
            className={isActive('Popular')}
            onClick={() => onGroupChange('Popular')}>
              Popular Drinks
          </li>
          <li 
            className={isActive('Smoothie')}
            onClick={() => onGroupChange('Smoothie')}>
              Natural Smoothie
          </li>
          <li 
            className={isActive('Juice')}
            onClick={() => onGroupChange('Juice')}>
              Juices
          </li>
          <li 
            className={isActive('Yogurt')}
            onClick={() => onGroupChange('Yogurt')}>
              Yogurt
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FilterByGroups;