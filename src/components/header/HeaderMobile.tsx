import { NAV_ITEMS } from "../../constants/header";
import logotype from "../../assets/img/logotype.svg";
import caret from "../../assets/img/caret.svg";

type T_Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

function HeaderMobile({ isMenuOpen, toggleMenu }: T_Props) {
  return (
    <nav
      className={`header__nav-mobile ${
        isMenuOpen ? "header__nav-mobile--open" : ""
      }`}
    >
      <div className="header__nav-mobile-logo">
        <img src={logotype} className="header__logo-img" alt="logotype" />

        <button
          className={`header__hamburger ${
            isMenuOpen ? "header__hamburger--active" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>

      <ul className="header__nav-mobile-list">
        {NAV_ITEMS.map((item, i) => (
          <li key={i} className="header__nav-mobile-item">
            <button className="header__nav-mobile-link">
              {item.title}
              {item.children && (
                <img
                  src={caret}
                  alt="caret"
                  className="header__nav-mobile-arrow"
                />
              )}
            </button>

            {item.children && (
              <ul className="header__accordion">
                {item.children.map((child, j) => (
                  <li key={j} className="header__accordion-item">
                    <a href={child.href} className="header__accordion-link">
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderMobile;
