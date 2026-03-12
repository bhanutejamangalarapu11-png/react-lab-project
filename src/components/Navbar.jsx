import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>React App</h2>

      <div>
        <Link to="/">Register</Link>
        <Link to="/admin">Admin Login</Link>
      </div>

    </nav>
  );
}

export default Navbar;