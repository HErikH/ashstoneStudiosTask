import React, { memo, useState } from "react";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import "./style.scss";

type T_Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ searchQuery, setSearchQuery }: T_Props) {
  const { isSticky, isHidden } = useHeaderScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`header ${isSticky ? "header--sticky" : ""} ${
          isHidden ? "header--hidden" : ""
        }`}
      >
        <div className="header__container">
          <HeaderDesktop
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
          />

          <HeaderMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </header>

      {isMenuOpen && (
        <div className="header__overlay" onClick={closeMenu}></div>
      )}
    </>
  );
}

export default memo(Header);
