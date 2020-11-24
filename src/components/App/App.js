import Navbar from '../Navbar';
import Greeting from '../Greeting';
import './App.scss';
import introImg from '../../assets/images/main.png';
import Footer from '../Footer';
import ProductsContainer from '../../containers/ProductsContainer';
import FilterByGroupsContainer from '../../containers/FilterByGroupsContainer';
import FilterByProductContainer from '../../containers/FilterByProductContainer';
import FeaturedProductsContainer from '../../containers/FeaturedProductsContainer';

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
