import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="header-link">
          Shop
        </Link>
        <Link to="/jokes" className="header-link">
          Jokes
        </Link>
      </nav>
    </header>
  );
}
