import './Navbar.scss';

const Navbar = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__element"><a href="#!" className="nav__link">Home</a></li>
      <li className="nav__element"><a href="#!" className="nav__link">Smoothies</a></li>
      <li className="nav__element"><a href="#!" className="nav__link">About</a></li>
      <li className="nav__element"><a href="#!" className="nav__link">Contact</a></li>
    </ul>
  </nav>
)

export default Navbar;