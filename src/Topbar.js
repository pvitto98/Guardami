import React, { useEffect, useRef } from "react";
import "./Topbar.module.css";
import "./styles.scss";
import logo from "./logo_noscritte.svg";
function Topbar() {
  const hamburgerMenuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const hamburgerMenu = hamburgerMenuRef.current;
    const nav = navRef.current;

    const toggleNav = () => {
      nav.classList.toggle("active");
    };

    hamburgerMenu.addEventListener("click", toggleNav);

    // Cleanup function to remove the event listener
    return () => {
      hamburgerMenu.removeEventListener("click", toggleNav);
    };
  }, []);

  return (
    <header className="header">
      <div className="nav-container">
        <svg
          width="90px"
          height="45px"
          className="logo"
          style={{ padding: "20px 0 20px 50px" }}
        >
          <image href={logo} width="100%" height="100%" />
        </svg>
        <nav className="nav" ref={navRef}>
          <ul className="nav--ul__one">
            <li className="nav-link">
              <a href="#" style={{ fontWeight: "bold" }}>
                Sezione 1
              </a>
            </li>
            <li className="nav-link">
              <a href="#" style={{ fontWeight: "bold" }}>
                Sezione 2
              </a>
            </li>
            <li className="nav-link">
              <a href="#" style={{ fontWeight: "bold" }}>
                Sezione 3
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav" ref={navRef}>
          <ul className="nav--ul__two">
            <li className="nav-link">
              <button className="shopWrapper">
                <a href="#" style={{ fontWeight: "bold" }}>
                  Comprami
                </a>
              </button>
            </li>
          </ul>
        </nav>
        <span
          className="hamburger-menu material-symbols-outlined"
          ref={hamburgerMenuRef}
        >
          menu
        </span>
      </div>
    </header>
  );
}

export default Topbar;
