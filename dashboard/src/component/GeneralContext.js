import React, { useState, useEffect } from "react";
import axios from "axios";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  username: "",
  isLoggedIn: false,
});

export const GeneralContextProvider = (props) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");


  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          `${BACKEND_URL}/verify`,
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setUsername(data.user);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
         
          window.location.href = "http://localhost:3001/login";
        }
      } catch (err) {
        console.log("Verification error:", err);
        setIsLoggedIn(false);
        window.location.href = "http://localhost:3001/login";
      }
    };
    verifyUser();
  }, [BACKEND_URL]);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        username,       
        isLoggedIn,      
        setUsername,     
        setIsLoggedIn,   
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
// import React, { useState } from "react";

// import BuyActionWindow from "./BuyActionWindow";

// const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
// });

// export const GeneralContextProvider = (props) => {
//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");

//   const handleOpenBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const handleCloseBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   return (
//     <GeneralContext.Provider
//       value={{
//         openBuyWindow: handleOpenBuyWindow,
//         closeBuyWindow: handleCloseBuyWindow,
//       }}
//     >
//       {props.children}
//       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//     </GeneralContext.Provider>
//   );
// };

// export default GeneralContext;
