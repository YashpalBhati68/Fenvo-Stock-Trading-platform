require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60, // 3 days
  });
};


// const jwt = require("jsonwebtoken");

// const createSecretToken = (userId) => {
//   const secretKey = process.env.TOKEN_KEY || "secret_key";
  
//   const token = jwt.sign({ _id: userId }, secretKey, {
//     expiresIn: "7d", 
//   });
  
//   return token;
// };

// module.exports = { createSecretToken };