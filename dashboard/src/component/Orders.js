import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
  const [orders, setAllorders] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/allOrders`, { withCredentials: true })
      .then((res) => {
        setAllorders(res.data);
      })
      .catch((err) => {
        console.log("Orders fetch error:", err);
      });
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({orders.length})</h3>
          <div className="order-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
              {orders.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                </tr>
              ))}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   const [orders,setAllorders] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allOrders").then((res) => {

//       setAllorders(res.data);
//       console.log(res);

//     })
//   },[])
//   return (
//     <div className="orders">
//       { orders.length===0 ? <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div> : <>
//       <h3 className="title"> Orders ({orders.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Qty.</th>
//             <th>Price</th>
//             <th>Mode</th>
//           </tr>
//           {orders.map((stock, index) => {

//             return (
//               <tr key={index} className="" >
//                 <td> {stock.name}  </td>
//                 <td>{stock.qty} </td>
//                 <td>{stock.price} </td>
//                 <td> {stock.mode} </td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>

//       </>}
//     </div>
//   );
// };

// export default Orders;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Orders = () => {
// //   return (
// //     <div className="orders">
// //       <div className="no-orders">
// //         <p>You haven't placed any orders today</p>

// //         <Link to={"/"} className="btn">
// //           Get started
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Orders;
