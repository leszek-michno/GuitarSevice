import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/_NavBar.scss";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../assets/Icons";
import FlagaPl from "../assets/images/flaga_Polski.svg";
import NavBarPl from './NavBar'


const NavBarEng = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [clickTwo, setClickTwo] = useState();
  const handleClickTwo = () => setClickTwo(!clickTwo);

  const list = [
    { name: "Homepage", path: "HomePage" },
    { name: "Offer", path: "Offer" },
    { name: "Realization", path: "Realization" },
    { name: "Contact", path: "Contact" },
  ];
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
          <NavLink to="/" className="nav-logo">
            <img src={FlagaPl} alt="flagaPl" onClick={handleClickTwo} />
            {clickTwo ? <NavBarPl/> : ''}
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

export default NavBarEng;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../assets/styles/NavBar.scss";
// import { HamburgetMenuClose, HamburgetMenuOpen } from "../assets/Icons";
// import FlagaPl from "../assets/images/flaga_Polski.svg";
// import NavBarPl from "./NavBarPl";

// const NavBarEng = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const [clickTwo, setClickTwo] = useState();
//   const handleClickTwo = () => setClickTwo(!clickTwo);

//   const list = [
//     { name: "Homepage", path: "HomePage" },
//     { name: "News", path: "News" },
//     { name: "Menu", path: "Menu_Eng" },
//     { name: "Contact", path: "Contact" },
//     { name: "Gallery", path: "Gallery" },
//   ];

//   const menu = list.map((item) => (
//     <li key={item.name} className="nav-item">
//       <NavLink onClick={handleClick} to={item.path} className="nav-links">
//         {item.name}
//       </NavLink>
//     </li>
//   ));

//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <div className="nav-logo" onClick={handleClickTwo}>
//             <img src={FlagaPl} alt="flagaPl" />
//           </div>
//           {clickTwo ? <NavBarPl /> : ''}
//           <ul className={click ? "nav-menu active" : "nav-menu"}>{menu}</ul>
//           <div className="nav-icon" onClick={handleClick}>
//             {click ? (
//               <span className="icon">
//                 <HamburgetMenuClose />{" "}
//               </span>
//             ) : (
//               <span className="icon">
//                 <HamburgetMenuOpen />
//               </span>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavBarEng;
