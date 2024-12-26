import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/_NavBar.scss";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../assets/Icons";
import FlagaGB from "../assets/images/flaga_GB.svg";
import NavBarEng from "./NavBarEng";

const NavBarPl = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [clickTwo, setClickTwo] = useState();
  const handleClickTwo = () => setClickTwo(!clickTwo);

  const list = [
    { name: "Strona główna", path: "/" },
    { name: "Oferta i cennik", path: "Oferta" },
    // { name: "Realizacje", path: "Realizacje" },
    { name: "Kontakt", path: "Kontakt" },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menu = list.map((item) => (
    <li key={item.name} className="nav-item">
      <NavLink onClick={handleClick} to={item.path} className="nav-links">
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="Homepage" className="nav-logo">
            {!isSmallScreen ? (
              <img src={FlagaGB} alt="flagaGB" onClick={handleClickTwo} />
            ) : (
              !click && (
                <img src={FlagaGB} alt="flagaGB" onClick={handleClickTwo} />
              )
            )}
            {clickTwo ? <NavBarEng /> : ""}
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>{menu}</ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarPl;
