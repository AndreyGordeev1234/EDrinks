import Navbar from '../Navbar';
import Greeting from '../Greeting';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="intro">
        <Greeting />
      </div>
    </>
  );
}

export default App;
