import React, { useState } from "react";
import logotype from "../../assets/img/logotype.svg";
import search from "../../assets/img/search.svg";
import caret from "../../assets/img/caret.svg";
import { NAV_ITEMS } from "../../constants/header";

type T_Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

function HeaderDesktop({
  searchQuery,
  setSearchQuery,
  isMenuOpen,
  toggleMenu,
}: T_Props) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchToggle = () => {
    setShowSearchInput(!showSearchInput);

    if (showSearchInput) {
      setSearchQuery("");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Search submitted:", searchQuery);
  };

  return (
    <>
      <button
        className="header__hamburger"
        style={{ visibility: isMenuOpen ? "hidden" : "visible" }}
        onClick={toggleMenu}
      >
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
      </button>

      <div className="header__logo">
        <img
          src={logotype}
          className="header__logo-img"
          alt="logotype"
          style={{ visibility: isMenuOpen ? "hidden" : "visible" }}
        />

        <div className="header__search">
          {showSearchInput ? (
            <form className="header__search-form" onSubmit={handleSearchSubmit}>
              <input
                name="search"
                type="text"
                className="header__search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
              <button
                type="button"
                className="header__search-close"
                onClick={handleSearchToggle}
              >
                ✕
              </button>
            </form>
          ) : (
            <button className="header__search-btn" onClick={handleSearchToggle}>
              <img src={search} alt="search" />
            </button>
          )}
        </div>
      </div>

      <nav className="header__nav">
        <ul className="header__nav-list">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={i}
              className={`header__nav-item ${
                item.children ? "header__nav-item--dropdown" : ""
              }`}
            >
              <a href={item.href} className="header__nav-link">
                {item.title}
                {item.children && (
                  <img src={caret} className="header__nav-arrow" alt="caret" />
                )}
              </a>

              {item.children && (
                <ul className="header__dropdown">
                  {item.children.map((child, j) => (
                    <li key={j} className="header__dropdown-item">
                      <a href={child.href} className="header__dropdown-link">
                        {child.title}
                      </a>
                      <img
                        src={caret}
                        alt="caret"
                        className="header__dropdown-caret"
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default HeaderDesktop;
