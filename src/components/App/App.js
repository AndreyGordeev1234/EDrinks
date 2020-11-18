import Navbar from '../Navbar';
import Greeting from '../Greeting';
import './App.scss';
import FeaturedProducts from '../FeaturedProducts';

function App() {
  return (
    <>
      <Navbar />
      <div className="intro">
        <Greeting />
        <FeaturedProducts />
      </div>
    </>
  );
}

export default App;
