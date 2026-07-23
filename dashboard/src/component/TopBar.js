import React, { useContext } from "react";
import axios from "axios";
import Menu from "./Menu";
import GeneralContext from "./GeneralContext";

const TopBar = () => {
  const { username } = useContext(GeneralContext);
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

  const handleLogout = async () => {
    try {
      await axios.post(`${BACKEND_URL}/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.log("Logout error:", err);
    }
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    window.location.href = "http://localhost:3000";
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {username && (
          <span style={{ fontSize: "14px", color: "#555" }}>
            👤 {username}
          </span>
        )}
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#d43725",
            color: "#fff",
            border: "none",
            padding: "6px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;






// import React from "react";

// import Menu from "./Menu";

// const TopBar = () => {
//   return (
//     <div className="topbar-container">
//       <div className="indices-container">
//         <div className="nifty">
//           <p className="index">NIFTY 50</p>
//           <p className="index-points">{100.2} </p>
//           <p className="percent"> </p>
//         </div>
//         <div className="sensex">
//           <p className="index">SENSEX</p>
//           <p className="index-points">{100.2}</p>
//           <p className="percent"></p>
//         </div>
//       </div>

//       <Menu />
//     </div>
//   );
// };

// export default TopBar;


// // import React from "react";

// // import Menu from "./Menu";

// // const TopBar = () => {
// //   return (
// //     <div className="topbar-container">
// //       <div className="indices-container">
// //         <div className="nifty">
// //           <p className="index">NIFTY 50</p>
// //           <p className="index-points">{100.2} </p>
// //           <p className="percent"> </p>
// //         </div>
// //         <div className="sensex">
// //           <p className="index">SENSEX</p>
// //           <p className="index-points">{100.2}</p>
// //           <p className="percent"></p>
// //         </div>
// //       </div>

// //       <Menu />
// //     </div>
// //   );
// // };

// // export default TopBar;
