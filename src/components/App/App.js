import Navbar from '../Navbar';
import Greeting from '../Greeting';
import './App.scss';
import FeaturedProducts from '../FeaturedProducts';
import FilterByGroups from '../FilterByGroups';
import FilterByProduct from '../FilterByProduct';

function App() {
  return (
    <>
      <Navbar />
      <div className="intro">
        <Greeting />
        <FeaturedProducts />
      </div>
      <div className="filters">
        <FilterByGroups />
        <FilterByProduct />
      </div>
    </>
  );
}

export default App;
