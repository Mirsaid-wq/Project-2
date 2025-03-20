import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="container">
      <h1>Mirro</h1>
      <nav className="nav-container">
        <ul>
          <li>
            <a href="#">Presets</a>
          </li>
          <li>
            <a href="#">Prints</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="cart-btn">
          <FaShoppingCart /> Cart <span className="cart-count">0</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
