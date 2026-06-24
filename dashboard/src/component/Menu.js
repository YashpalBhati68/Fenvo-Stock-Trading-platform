import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const { username, setUsername, setIsLoggedIn } = useContext(GeneralContext);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    setUsername("");
    setIsLoggedIn(false);
    window.location.href = "http://localhost:3000/login"; // frontend login pe bhejo
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" className="logo" alt="Zerodha Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={selectMenu === 0 ? activeMenuClass : menuClass}
                style={{ fontWeight: "500", fontSize: "15px" }}
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p
                style={{ fontWeight: "500", fontSize: "15px" }}
                className={selectMenu === 1 ? activeMenuClass : menuClass}
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p
                style={{ fontWeight: "500", fontSize: "15px" }}
                className={selectMenu === 2 ? activeMenuClass : menuClass}
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p
                style={{ fontWeight: "500", fontSize: "15px" }}
                className={selectMenu === 3 ? activeMenuClass : menuClass}
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p
                style={{ fontWeight: "500", fontSize: "15px" }}
                className={selectMenu === 4 ? activeMenuClass : menuClass}
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p
                style={{ fontWeight: "500", fontSize: "15px" }}
                className={selectMenu === 5 ? activeMenuClass : menuClass}
              >
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {username ? username.slice(0, 2).toUpperCase() : "ZU"}
          </div>
          <p className="username">{username || "User"}</p>
        </div>

        <div style={{ padding: "10px 16px" }}>
          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "8px",
              background: "#ff4d4d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectMenu, setSelectMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => {
//     setSelectMenu(index);
//   };
//   const handleProfileClick = (index) => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" className="logo"  />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/"
//               onclick={() => handleMenuClick(0)}
//             >
//               <p className={selectMenu === 0 ? activeMenuClass : menuClass} style={{fontWeight:"500", fontSize:"15px"}}>
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/orders"
//               onclick={() => handleMenuClick(1)}
//             >
//               <p style={{fontWeight:"500", fontSize:"15px"}} className={selectMenu === 1 ? activeMenuClass : menuClass}>
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/holdings"
//               onclick={() => handleMenuClick(2)}
//             >
//               <p style={{fontWeight:"500", fontSize:"15px"}} className={selectMenu === 2 ? activeMenuClass : menuClass}>
//                 Holdings
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/positions"
//               onclick={() => handleMenuClick(3)}
//             >
//               <p style={{fontWeight:"500", fontSize:"15px"}} className={selectMenu === 3 ? activeMenuClass : menuClass}>
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/funds"
//               onclick={() => handleMenuClick(4)}
//             >
//               <p style={{fontWeight:"500", fontSize:"15px"}} className={selectMenu === 4 ? activeMenuClass : menuClass}>
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/apps"
//               onclick={() => handleMenuClick(5)}
//             >
//               <p style={{fontWeight:"500", fontSize:"15px"}} className={selectMenu === 5 ? activeMenuClass : menuClass}>
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onclick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
