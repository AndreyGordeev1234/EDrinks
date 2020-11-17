import './Greeting.scss';
import SearchBar from '../SearchBar';

const Greeting = () => (
  <div className="container">
    <h1 className="intro__title">
      Enjoy!
    </h1>
    <p className="intro__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris arcu aenean in mauris elementum sed non. In sapien enim
    </p>
    <SearchBar />
  </div>
)

export default Greeting;