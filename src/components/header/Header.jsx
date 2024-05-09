import "./Header.css";
import { useState, useEffect } from "react";
import mainLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={active ? "header active" : "header"}>
      <nav className="mainContainer">
        <span className="logo">
          <Link to="/">
            <img src={mainLogo} alt="Logo" />
          </Link>
        </span>
        <ul className="navbar">
          <li>
            <Link to="/movie">Movies</Link>
          </li>
          <li>
            <Link to="/tv">TV</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
