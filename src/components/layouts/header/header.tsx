import { useEffect, useRef, useState } from "react";
import "./header.scss";
import { CircleX, Menu, Search } from "lucide-react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setShowMenu(true);
    }
  }, [showMenu]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="navbar container">
      <div className="region">
        <div className="region-top">
          <div className="navbar-left">
            <a href="#" className="logo">
              <img
                src="https://learnenglish.britishcouncil.org/sites/podcasts/themes/bc_ui/logo.svg"
                alt="Home"
              />
              <h1 className="name">LearnEnglish</h1>
            </a>
          </div>
          <div className="navbar-right">
            <div
              ref={searchRef}
              className={`search-box ${showSearch ? "active" : ""}`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button
                className="search-icon"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search />
              </button>
            </div>

            <ul className="menu">
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="region-bottom">
          <div
            className="region__toggle-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            <h2 className="region__menu">Menu</h2>
            <div className="mobile-menu-icon">
              {!showMenu ? <Menu /> : <CircleX />}
            </div>
          </div>
          <ul className={!showMenu ? "hide-menu" : "menu-nav"}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Online courses</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="">Live classes</a>
                </li>
                <li>
                  <a href="">IELTS preparation</a>
                </li>
                <li>
                  <a href="">Personal tutoring</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Learning hub</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Grammar</a>
            </li>
            <li>
              <a href="">Vocabulary</a>
            </li>
            <li>
              <a href="">Business English</a>
            </li>
            <li>
              <a href="">General English</a>
            </li>
            <li>
              <a href="">English levels</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
