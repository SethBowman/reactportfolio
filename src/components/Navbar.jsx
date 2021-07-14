import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav class="navbar">
      <div class="flex-item">
        <h3>
          <Link className="App-link" to="/">
            Home
          </Link>
        </h3>
      </div>
      <div class="flex-item">
        <h3>
          <Link className="App-link" to="/about">
            About
          </Link>
        </h3>
      </div>
      <div class="flex-item">
        <h3>
          <Link className="App-link" to="/services">
            Services
          </Link>
        </h3>

      </div>
    </nav>
  );
}

export default Navbar;
