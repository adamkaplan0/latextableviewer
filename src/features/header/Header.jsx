import { Link, NavLink } from "react-router-dom";


export const Header = () => {
  // Helper function to use the `active` class of NavLink when styling
  const navLinkStyle = isActive => {
    if (isActive) {
      return "underline decoration-solid";
    } else {
      return "no-underline hover:underline";
    }
  }

  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="inline-block font-bold text-4xl">
        <Link to="/"
          className="no-underline hover:text-gray-400">
          LaTeX Table Viewer
        </Link>
      </h1>
      {/* TODO: #23 Implement a hamburger menu */}
      <nav className="hidden md:block">
        <ul className="list-none inline-flex justify-around items-center gap-12 text-xl text-center">
          <li><NavLink to="/" className={({isActive}) => navLinkStyle(isActive)}>App</NavLink></li>
          <li><a href="https://github.com/adamkaplan0/latextableviewer" className="no-underline hover:underline">GitHub</a></li>
          <li><NavLink to="/about" className={({isActive}) => navLinkStyle(isActive)}>About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};