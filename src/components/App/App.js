import Navbar from '../Navbar';
import Greeting from '../Greeting';
import './App.scss';
import FeaturedProducts from '../FeaturedProducts';
import FilterByProduct from '../FilterByProduct';
import introImg from '../../assets/images/main.png';
import Footer from '../Footer';
import ProductsContainer from '../../containers/ProductsContainer';
import FilterByGroupsContainer from '../../containers/FilterByGroupsContainer';

function App() {
  return (
    <>
      <Navbar />
      <div className="intro">
        <img src={introImg} className="intro-bg"
            alt="Enjoy!" />
        <Greeting />
        <FeaturedProducts />
        <div className="intro__bottom-gradient"></div>
      </div>
      <main className="main">
        <div className="filters">
          <FilterByGroupsContainer />
          <FilterByProduct />
        </div>
        <ProductsContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
