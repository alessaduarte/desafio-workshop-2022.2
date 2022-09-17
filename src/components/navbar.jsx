import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <ul>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/animals'>Animals</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </>
  );
}

export default Navbar;