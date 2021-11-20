// packages

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <a
            className="header__logo-link"
            href="/"
            aria-label="Click to go to homepage"
          >
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <a href="/team" className="header__link">
                Team
              </a>
            </li>
            <li className="header__list-item header__list-item--has-child">
              <a
                href="/areas"
                className="header__link"
              >
                Practice Areas
              </a>
              <button
                className="header__link-trigger"
              >
                <i className="icon-caret-down header__link-icon"></i>
              </button>
            </li>
            <li className="header__list-item header__list-item--has-child">
              <a href="/wins" className="header__link">
                How We Win
              </a>
              <button
                className="header__link-trigger"
              >
                <i className="icon-caret-down header__link-icon"></i>
              </button>
            </li>
            <li className="header__list-item header__list-item--has-child">
              <a
                href="/news"
                className="header__link"
              >
                Insights &amp; News
              </a>
              <button
                className="header__link-trigger"
              >
                <i className="icon-caret-down header__link-icon"></i>
              </button>
            </li>
            <li className="header__list-item header__list-item--has-child">
              <a href="/about-us" className="header__link">
                About us
              </a>
              <button
                className="header__link-trigger"
              >
                <i className="icon-caret-down header__link-icon"></i>
              </button>
            </li>
          </ul>
        </nav>
        <div className="header__burger">
          <button
            className="hamburger"
            type="button"
            aria-label="Click to open the menu"
          >
            <span className="hamburger__box">
              <span className="hamburger__inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
