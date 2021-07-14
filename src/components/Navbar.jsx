import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link className="App-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="App-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="App-link" to="/services">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
