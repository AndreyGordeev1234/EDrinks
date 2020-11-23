import './Greeting.scss';
import SearchBarContainer from '../../containers/SearchBarContainer';

const Greeting = () => (
  <div className="container" id="home">
    <h1 className="intro__title">
      Enjoy!
    </h1>
    <p className="intro__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris arcu aenean in mauris elementum sed non. In sapien enim
    </p>
    <SearchBarContainer />
  </div>
)

export default Greeting;