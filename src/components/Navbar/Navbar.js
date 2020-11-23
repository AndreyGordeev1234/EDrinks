import './Navbar.scss';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset > 200) {
      setActive(true);
    }
    else {
      setActive(false);
    }
  }

  return (
    <nav className={active ? "nav nav_active" : "nav"}>
      <ul className="nav__list">
        <li className="nav__element">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__element">
          <a href="#smoothies" className="nav__link">
            Smoothies
          </a>
        </li>
        <li className="nav__element">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;