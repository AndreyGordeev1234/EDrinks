import Navbar from '../Navbar';
import Greeting from '../Greeting';
import './App.scss';
import FeaturedProducts from '../FeaturedProducts';
import FilterByGroups from '../FilterByGroups';
import FilterByProduct from '../FilterByProduct';
import introImg from '../../assets/images/main.png';
import Products from '../Products';
import Footer from '../Footer';

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
          <FilterByGroups />
          <FilterByProduct />
        </div>
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
