import Navbar from '../Navbar';
import Greeting from '../Greeting';
import './App.scss';
import introImg from '../../assets/images/main.png';
import Footer from '../Footer';
import ProductsContainer from '../../containers/ProductsContainer';
import FilterByGroupsContainer from '../../containers/FilterByGroupsContainer';
import FilterByProductContainer from '../../containers/FilterByProductContainer';
import FeaturedProductsContainer from '../../containers/FeaturedProductsContainer';
import { useState } from 'react';

function App() {
  const [toggleCart, setToggleCart] = useState(false);
  const handleCartToggle = () => {
    setToggleCart(prev => !prev);
  }

  return (
    <div className="app" onClick={() => setToggleCart(false)}>
      <Navbar toggleCart={toggleCart} onToggleCart={handleCartToggle}/>
      <div className="intro">
        <img src={introImg} className="intro-bg"
            alt="Enjoy!" />
        <Greeting />
        <FeaturedProductsContainer />
        <div className="intro__bottom-gradient"></div>
      </div>
      <main className="main">
        <div className="filters">
          <FilterByGroupsContainer />
          <FilterByProductContainer />
        </div>
        <ProductsContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
